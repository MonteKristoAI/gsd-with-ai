import type { MetadataRoute } from "next";
import { getPublishedPosts } from "@/lib/blog-source";

const BASE_URL = "https://www.getsstuffdone.com";

// Note: /growth-partnership/ma-sprint is intentionally omitted (Brief 5.4 -
// discoverable only from the Growth Partnership page, not from nav or sitemap).
const STATIC_ROUTES: {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}[] = [
  { path: "/", changeFrequency: "weekly", priority: 1.0 },
  { path: "/torque-method", changeFrequency: "monthly", priority: 0.9 },
  { path: "/torque-diagnostic", changeFrequency: "monthly", priority: 0.9 },
  { path: "/growth-partnership", changeFrequency: "monthly", priority: 0.9 },
  { path: "/case-studies", changeFrequency: "monthly", priority: 0.8 },
  { path: "/about", changeFrequency: "monthly", priority: 0.7 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.7 },
  { path: "/contact", changeFrequency: "yearly", priority: 0.6 },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date();

  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map(
    ({ path, changeFrequency, priority }) => ({
      url: `${BASE_URL}${path}`,
      lastModified,
      changeFrequency,
      priority,
    }),
  );

  // Published blog posts. Guarded so a Supabase outage or zero posts never
  // breaks the sitemap (or the build).
  let postEntries: MetadataRoute.Sitemap = [];
  try {
    const posts = await getPublishedPosts();
    postEntries = posts.map((p) => {
      const d = new Date(p.date);
      return {
        url: `${BASE_URL}/blog/${p.slug}`,
        lastModified: Number.isNaN(d.getTime()) ? lastModified : d,
        changeFrequency: "monthly",
        priority: 0.6,
      };
    });
  } catch {
    postEntries = [];
  }

  return [...staticEntries, ...postEntries];
}
