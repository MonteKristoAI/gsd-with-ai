import type { MetadataRoute } from "next";

const BASE_URL = "https://www.getsstuffdone.com";

const STATIC_ROUTES: { path: string; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]; priority: number }[] = [
  { path: "/", changeFrequency: "weekly", priority: 1.0 },
  { path: "/solutions", changeFrequency: "monthly", priority: 0.9 },
  { path: "/solutions/audit-ready", changeFrequency: "monthly", priority: 0.9 },
  { path: "/solutions/field-to-cash", changeFrequency: "monthly", priority: 0.9 },
  { path: "/solutions/pipeline-reset", changeFrequency: "monthly", priority: 0.9 },
  { path: "/case-studies", changeFrequency: "monthly", priority: 0.8 },
  { path: "/case-studies/wireline-operator", changeFrequency: "yearly", priority: 0.7 },
  { path: "/case-studies/safety-compliance", changeFrequency: "yearly", priority: 0.7 },
  { path: "/case-studies/pipeline-visibility", changeFrequency: "yearly", priority: 0.7 },
  { path: "/about", changeFrequency: "monthly", priority: 0.6 },
  { path: "/resources", changeFrequency: "weekly", priority: 0.6 },
  { path: "/contact", changeFrequency: "yearly", priority: 0.5 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return STATIC_ROUTES.map(({ path, changeFrequency, priority }) => ({
    url: `${BASE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
