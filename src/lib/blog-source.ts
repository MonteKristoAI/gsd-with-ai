import 'server-only';

import { createClient } from '@supabase/supabase-js';

/**
 * Blog source, headless content from the MonteKristo platform (Supabase).
 *
 * SERVER-ONLY. Imports `server-only` at the top so this module can never be
 * bundled into a client component (the SUPABASE_ANON_KEY would leak). The key
 * is read from process.env at runtime / build time and is never prefixed
 * NEXT_PUBLIC_, so it stays on the server even without the guard.
 *
 * The platform writes GSD content into public.posts. This module reads the
 * renderable rows for the GSD client and normalizes them into the shape the
 * blog UI expects.
 *
 * ROBUSTNESS: every public function is wrapped so a missing env var or a failed
 * fetch resolves to `[]` / `null` and never throws. That lets `next build`
 * succeed with zero posts (there are currently 0 published GSD posts).
 *
 * ISR: pages set `export const revalidate = 3600`, so newly published posts
 * appear within an hour without a rebuild.
 */

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY;

/** GSD client_id in the platform `posts` table. */
const GSD_CLIENT_ID = 'aec67da3-86ee-4338-a6b4-edb7a24273a1';

/** Statuses that should render on the live site. */
const RENDERABLE_STATUSES = ['published', 'verifying', 'published-but-broken'];

/** Default author when a row ships without one. */
const DEFAULT_AUTHOR = 'Maxine Aitkenhead';

/** Default category label when a row ships without one. */
const DEFAULT_CATEGORY = 'Field Notes';

/** Normalized post shape consumed by the blog pages + components. */
export type SourcePost = {
  slug: string;
  /** seo_title || title, used for the <title> / OG title. */
  title: string;
  /** title || seo_title, the human-facing on-page heading. */
  displayTitle: string;
  /** meta_description || hook, used for cards, metadata, OG description. */
  excerpt: string;
  /** Short pull-quote shown above the body (hook, falls back to excerpt). */
  hook?: string;
  /** Sanitized rich article HTML (the main content). */
  html: string;
  /** Raw platform category string, kept for display. */
  category: string;
  tags: string[];
  /** ISO publish date (published_at, falls back to created_at, then now). */
  date: string;
  /** author || DEFAULT_AUTHOR. */
  author: string;
  /** Human read time, e.g. "9 min read". Derived from word_count. */
  readTime: string;
  wordCount: number | null;
  featuredImage: string | null;
  featuredImageAlt: string | null;
  focusKeyphrase: string | null;
};

/** Raw row shape (only the columns we select). */
type PostRow = {
  slug: string | null;
  seo_title: string | null;
  title: string | null;
  meta_description: string | null;
  hook: string | null;
  html_body: string | null;
  featured_image_url: string | null;
  featured_image_alt: string | null;
  category: string | null;
  tags: string[] | string | null;
  published_at: string | null;
  created_at: string | null;
  word_count: number | null;
  author: string | null;
  focus_keyphrase: string | null;
};

const POST_COLUMNS =
  'slug,seo_title,title,meta_description,hook,html_body,featured_image_url,featured_image_alt,category,tags,published_at,created_at,word_count,author,focus_keyphrase';

/* ------------------------------------------------------------------ */
/* Supabase client (lazy singleton)                                    */
/* ------------------------------------------------------------------ */

let _client: ReturnType<typeof createClient> | null = null;

/** Returns the client, or null when env vars are missing (build-safe). */
function getClient() {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) return null;
  if (!_client) {
    _client = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
      auth: { persistSession: false, autoRefreshToken: false },
    });
  }
  return _client;
}

/* ------------------------------------------------------------------ */
/* HTML sanitization                                                   */
/* ------------------------------------------------------------------ */

/**
 * Clean the platform `html_body` for safe render on the live site:
 *
 *   1. Strip every embedded <script type="application/ld+json"> block. We
 *      regenerate clean schema in the page, so the inline ones are redundant.
 *   2. Drop a single outer <article>...</article> wrapper if present, so the
 *      page's own <article> element does not double-nest.
 *
 * Everything else in the body is left as authored.
 */
export function sanitizeHtmlBody(raw: string): string {
  if (!raw) return '';
  let html = raw;

  // 1. Strip embedded JSON-LD scripts.
  html = html.replace(
    /<script\b[^>]*type=["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>/gi,
    '',
  );

  // 2. Drop the single outer <article> wrapper (leaves any inner ones intact).
  html = html.replace(/^\s*<article[^>]*>/i, '').replace(/<\/article>\s*$/i, '');

  return html.trim();
}

/* ------------------------------------------------------------------ */
/* FAQ extraction (for FAQPage schema)                                 */
/* ------------------------------------------------------------------ */

/**
 * Pull question/answer pairs out of the sanitized HTML so the page can emit a
 * clean FAQPage block. Looks for the "Frequently asked questions" H2, then
 * collects each following <h3>question</h3> + the text of the <p> that follows
 * it. Returns [] when no FAQ section is present.
 */
export function extractFaq(html: string): Array<{ q: string; a: string }> {
  if (!html) return [];
  const faqHeading = /<h2[^>]*>\s*frequently asked questions\s*<\/h2>/i.exec(html);
  if (!faqHeading) return [];

  let region = html.slice(faqHeading.index + faqHeading[0].length);
  const nextH2 = /<h2[^>]*>/i.exec(region);
  if (nextH2) region = region.slice(0, nextH2.index);

  const out: Array<{ q: string; a: string }> = [];
  const pairRe = /<h3[^>]*>([\s\S]*?)<\/h3>\s*<p[^>]*>([\s\S]*?)<\/p>/gi;
  let m: RegExpExecArray | null;
  while ((m = pairRe.exec(region)) !== null) {
    const q = stripTags(m[1]).trim();
    const a = stripTags(m[2]).trim();
    if (q && a) out.push({ q, a });
  }
  return out;
}

function stripTags(s: string): string {
  return s
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ');
}

/* ------------------------------------------------------------------ */
/* Normalization                                                       */
/* ------------------------------------------------------------------ */

function readTimeFromWords(words: number | null): string {
  const w = typeof words === 'number' && words > 0 ? words : 0;
  const minutes = w > 0 ? Math.max(1, Math.round(w / 225)) : 5;
  return `${minutes} min read`;
}

function normalizeTags(tags: PostRow['tags']): string[] {
  if (Array.isArray(tags)) return tags.filter((t): t is string => typeof t === 'string');
  if (typeof tags === 'string' && tags.trim()) {
    return tags.split(',').map((t) => t.trim()).filter(Boolean);
  }
  return [];
}

function normalize(row: PostRow): SourcePost | null {
  if (!row.slug) return null;
  const seoTitle = (row.seo_title || '').trim();
  const humanTitle = (row.title || '').trim();
  return {
    slug: row.slug,
    title: (seoTitle || humanTitle || row.slug).trim(),
    displayTitle: (humanTitle || seoTitle || row.slug).trim(),
    excerpt: (row.meta_description || row.hook || '').trim(),
    hook: row.hook?.trim() || undefined,
    html: sanitizeHtmlBody(row.html_body ?? ''),
    category: (row.category ?? '').trim() || DEFAULT_CATEGORY,
    tags: normalizeTags(row.tags),
    date: row.published_at ?? row.created_at ?? new Date().toISOString(),
    author: (row.author && row.author.trim()) || DEFAULT_AUTHOR,
    readTime: readTimeFromWords(row.word_count),
    wordCount: row.word_count ?? null,
    featuredImage: row.featured_image_url?.trim() || null,
    featuredImageAlt: row.featured_image_alt?.trim() || null,
    focusKeyphrase: row.focus_keyphrase?.trim() || null,
  };
}

/* ------------------------------------------------------------------ */
/* Public API (all guarded, never throw)                               */
/* ------------------------------------------------------------------ */

/**
 * All renderable GSD posts, normalized and sorted by published_at desc. Used by
 * /blog, generateStaticParams, and the sitemap. Returns [] on any missing
 * config or fetch error so the build never fails (there are currently 0 posts).
 */
export async function getPublishedPosts(): Promise<SourcePost[]> {
  try {
    const supabase = getClient();
    if (!supabase) return [];

    const { data, error } = await supabase
      .from('posts')
      .select(POST_COLUMNS)
      .eq('client_id', GSD_CLIENT_ID)
      .in('status', RENDERABLE_STATUSES)
      .order('published_at', { ascending: false, nullsFirst: false });

    if (error || !data) return [];

    return (data as unknown as PostRow[])
      .map(normalize)
      .filter((p): p is SourcePost => p !== null)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch {
    return [];
  }
}

/** One renderable post by slug, or null when not found / on any error. */
export async function getPostBySlug(slug: string): Promise<SourcePost | null> {
  try {
    const supabase = getClient();
    if (!supabase) return null;

    const { data, error } = await supabase
      .from('posts')
      .select(POST_COLUMNS)
      .eq('client_id', GSD_CLIENT_ID)
      .in('status', RENDERABLE_STATUSES)
      .eq('slug', slug)
      .limit(1)
      .maybeSingle();

    if (error || !data) return null;
    return normalize(data as unknown as PostRow);
  } catch {
    return null;
  }
}
