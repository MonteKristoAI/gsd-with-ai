import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import { RESOURCES, RESOURCES_BY_SLUG } from "@/data/resources";
import TrackPageView from "@/components/shared/TrackPageView";

export async function generateStaticParams() {
  return RESOURCES.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const r = RESOURCES_BY_SLUG[slug];
  if (!r) return { title: "Not Found" };
  return {
    title: r.title,
    description: r.directAnswer.slice(0, 160),
    alternates: { canonical: `https://www.getsstuffdone.com/resources/${r.slug}` },
    openGraph: {
      title: r.title,
      description: r.directAnswer.slice(0, 160),
      type: "article",
      publishedTime: r.date,
      images: [{ url: r.image, width: 1200, height: 630, alt: r.imageAlt }],
    },
  };
}

export default async function ResourcePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const r = RESOURCES_BY_SLUG[slug];
  if (!r) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: r.title,
    datePublished: r.date,
    author: { "@type": "Organization", name: "GSD with AI" },
    publisher: { "@type": "Organization", name: "GSD with AI" },
    description: r.directAnswer,
    image: r.image,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: r.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <TrackPageView event="Resource Read" props={{ slug: r.slug }} />
      <Script id={`resource-schema-${r.slug}`} type="application/ld+json">
        {JSON.stringify([articleSchema, faqSchema])}
      </Script>

      <article className="container mx-auto px-6 py-24 min-h-[80vh]">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/resources"
            className="inline-flex items-center text-sm font-semibold text-teal-700 hover:text-teal-800 mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Resources
          </Link>

          <header className="mb-10">
            <span className="inline-flex items-center rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-700 mb-4">
              {r.category}
            </span>
            <h1 className="text-4xl font-extrabold leading-tight text-zinc-900 sm:text-5xl">
              {r.title}
            </h1>
            <div className="mt-4 flex items-center gap-3 text-sm text-zinc-500">
              <time dateTime={r.date}>
                {new Date(r.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </time>
              <span>·</span>
              <span>{r.readTime}</span>
            </div>
          </header>

          <div className="relative mb-12 h-[400px] w-full overflow-hidden rounded-2xl bg-zinc-100 shadow-sm sm:h-[500px]">
            <Image
              src={r.image}
              alt={r.imageAlt}
              fill
              priority
              sizes="(min-width: 1024px) 768px, 100vw"
              className="object-cover"
            />
          </div>

          {/* Direct answer block — manifesto AEO spec: 40-60 words first */}
          <p className="rounded-xl border-l-4 border-teal-600 bg-teal-50/60 px-6 py-5 text-lg leading-relaxed text-zinc-800">
            {r.directAnswer}
          </p>

          <div className="mt-12 space-y-12">
            {r.sections.map((s) => (
              <section key={s.question}>
                <h2 className="text-2xl font-extrabold text-zinc-900">{s.question}</h2>
                <div className="mt-4 space-y-4 text-lg leading-relaxed text-zinc-700">
                  {s.body.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* FAQ */}
          <section className="mt-16">
            <h2 className="text-2xl font-extrabold text-zinc-900">Common questions</h2>
            <dl className="mt-8 space-y-6">
              {r.faqs.map((f) => (
                <div key={f.q} className="border-b border-zinc-200 pb-6">
                  <dt className="font-bold text-zinc-900">{f.q}</dt>
                  <dd className="mt-2 text-zinc-700 leading-relaxed">{f.a}</dd>
                </div>
              ))}
            </dl>
          </section>

          {/* Per manifesto rule #10: blog post primary CTA = read the related case study */}
          <section className="mt-16 rounded-2xl bg-[#041122] p-10 text-center text-white">
            <h3 className="text-2xl font-bold text-white">See this pattern in production</h3>
            <p className="mx-auto mt-4 max-w-lg text-zinc-400">
              {r.relatedCaseStudy.label}.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href={`/case-studies/${r.relatedCaseStudy.slug}`}
                className="inline-flex items-center gap-2 rounded-xl bg-teal-700 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal-600"
              >
                Read the case study
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={`/solutions/${r.relatedSku.slug}?sku=${r.relatedSku.slug}`}
                className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/20"
              >
                See the {r.relatedSku.label} SKU
              </Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
