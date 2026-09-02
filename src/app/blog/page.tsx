import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Eyebrow, PrimaryCta, Section, JsonLd } from "@/components/ui/site";
import { getPublishedPosts } from "@/lib/blog-source";

const SITE = "https://www.getsstuffdone.com";

export const metadata: Metadata = {
  title: "Field Notes",
  description:
    "Practical revenue operations thinking for oilfield technology companies fighting long sales cycles and skeptical buying committees. Field notes from the GSD team.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Field Notes | Gets Stuff Done",
    description:
      "Practical revenue operations thinking for oilfield technology companies fighting long sales cycles and skeptical buying committees.",
    url: "/blog",
    siteName: "Gets Stuff Done",
    type: "website",
    images: [{ url: "/og-default.png", width: 1200, height: 630, alt: "Gets Stuff Done, fractional revenue operations for oilfield technology companies." }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-default.png"],
  },
};

// Re-fetch published posts at most once an hour (ISR).
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

export default async function BlogPage() {
  const posts = await getPublishedPosts();

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
      { "@type": "ListItem", position: 2, name: "Field Notes", item: `${SITE}/blog` },
    ],
  };

  return (
    <>
      <JsonLd data={breadcrumb} />

      {/* Hero band */}
      <section className="bg-navy text-white">
        <div className="container mx-auto px-6 py-20 lg:py-24">
          <div className="max-w-3xl">
            <Eyebrow className="!text-lime">The GSD Journal</Eyebrow>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl">
              Field notes on closing oilfield technology deals
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/80">
              Practical revenue operations thinking for oilfield technology companies fighting long
              sales cycles and skeptical buying committees. What we see working, and what we would fix
              first.
            </p>
          </div>
        </div>
      </section>

      {/* Listing */}
      <Section className="bg-cream">
        {posts.length === 0 ? (
          <div className="mx-auto max-w-lg text-center">
            <div className="mx-auto mb-6 h-px w-16 bg-signal" />
            <h2 className="text-2xl font-bold text-navy">Field notes are on the way</h2>
            <p className="mt-3 leading-relaxed text-slate">
              We are writing the first notes from live engagements. In the meantime, the fastest way to
              get our thinking is a short call about where your deals are stalling.
            </p>
            <div className="mt-8">
              <PrimaryCta>Book a 20-minute call</PrimaryCta>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, i) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate/15 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-navy">
                  {post.featuredImage ? (
                    <Image
                      src={post.featuredImage}
                      alt={post.featuredImageAlt || post.displayTitle}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      priority={i < 3}
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-navy to-navy-light">
                      <span className="grid h-11 w-11 place-items-center rounded-lg bg-white/5 font-extrabold text-white ring-2 ring-lime/70">
                        G
                      </span>
                    </div>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1">
                    <span className="text-xs font-semibold uppercase tracking-[0.12em] text-signal">
                      {post.category}
                    </span>
                    <span className="text-xs text-slate-muted">{formatDate(post.date)}</span>
                  </div>
                  <h2 className="text-lg font-bold leading-snug text-navy transition-colors group-hover:text-signal">
                    {post.displayTitle}
                  </h2>
                  <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-slate">
                    {post.excerpt}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-navy">
                    Read the note
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </Section>
    </>
  );
}
