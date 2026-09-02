import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Eyebrow, PrimaryCta, JsonLd } from "@/components/ui/site";
import { getPublishedPosts, getPostBySlug, extractFaq } from "@/lib/blog-source";

const SITE = "https://www.getsstuffdone.com";

// Re-fetch each post at most once an hour (ISR).
export const revalidate = 3600;

function formatDate(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

// Pre-render every renderable slug at build time. Returns [] on any error so the
// build never fails (there may be zero published posts right now).
export async function generateStaticParams() {
  try {
    const posts = await getPublishedPosts();
    return posts.map((p) => ({ slug: p.slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) {
    return { title: "Article not found", robots: { index: false, follow: false } };
  }

  const url = `${SITE}/blog/${post.slug}`;
  // Fall back to the site-wide share card so no post ever renders a bare grey box.
  const image = post.featuredImage || `${SITE}/og-default.png`;

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.focusKeyphrase ? [post.focusKeyphrase, ...post.tags] : post.tags,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      url,
      title: post.title,
      description: post.excerpt,
      siteName: "Gets Stuff Done",
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: image, width: 1200, height: 630, alt: post.featuredImageAlt || post.displayTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [image],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const url = `${SITE}/blog/${post.slug}`;
  const faqs = extractFaq(post.html);

  const articleSchema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Person", name: post.author },
    publisher: {
      "@type": "Organization",
      name: "Gets Stuff Done",
      url: SITE,
      logo: { "@type": "ImageObject", url: `${SITE}/logo.png`, width: 512, height: 512 },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };
  if (post.featuredImage) articleSchema.image = [post.featuredImage];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
      { "@type": "ListItem", position: 2, name: "Field Notes", item: `${SITE}/blog` },
      { "@type": "ListItem", position: 3, name: post.displayTitle, item: url },
    ],
  };

  const faqSchema =
    faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }
      : null;

  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      {faqSchema && <JsonLd data={faqSchema} />}

      <article>
        {/* Editorial hero */}
        <header className="bg-navy text-white">
          <div className="container mx-auto px-6 py-16 lg:py-20">
            <div className="mx-auto max-w-3xl">
              <Link
                href="/blog"
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-white/60 transition-colors hover:text-lime"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                Back to Field Notes
              </Link>
              <div className="mt-6">
                <Eyebrow className="!text-lime">{post.category}</Eyebrow>
              </div>
              <h1 className="mt-4 text-3xl font-extrabold leading-[1.12] tracking-tight sm:text-4xl lg:text-[2.75rem]">
                {post.displayTitle}
              </h1>
              {post.excerpt && (
                <p className="mt-5 text-lg leading-relaxed text-white/80">{post.excerpt}</p>
              )}
              <div className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-white/70">
                <span className="font-medium text-white/90">{post.author}</span>
                <span aria-hidden="true">·</span>
                <span>{formatDate(post.date)}</span>
                <span aria-hidden="true">·</span>
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </header>

        {/* Featured image */}
        {post.featuredImage && (
          <div className="bg-cream">
            <div className="container mx-auto px-6">
              <div className="relative mx-auto -mt-8 aspect-[16/9] max-w-4xl overflow-hidden rounded-2xl shadow-lg lg:-mt-10">
                <Image
                  src={post.featuredImage}
                  alt={post.featuredImageAlt || post.displayTitle}
                  fill
                  sizes="(max-width: 1024px) 100vw, 896px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        )}

        {/* Body */}
        <div className="bg-cream pb-20 pt-12 lg:pt-16">
          <div className="container mx-auto px-6">
            <div
              className="article-prose mx-auto max-w-3xl"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />

            {/* Closing CTA */}
            <div className="mx-auto mt-16 max-w-3xl border-t border-slate/15 pt-10 text-center">
              <h2 className="text-2xl font-bold text-navy">
                Where are your deals stalling?
              </h2>
              <p className="mx-auto mt-3 max-w-xl leading-relaxed text-slate">
                Twenty minutes. You walk us through the deal that will not close. We walk back the first
                thing worth fixing.
              </p>
              <div className="mt-8">
                <PrimaryCta>Book a 20-minute call</PrimaryCta>
              </div>
              <div className="mt-8">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy transition-colors hover:text-signal"
                >
                  Read more field notes
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
