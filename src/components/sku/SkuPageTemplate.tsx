import Link from "next/link";
import Script from "next/script";
import { ArrowRight, CheckCircle2, Quote } from "lucide-react";
import { type SkuData, PRICE_BAND_TEXT } from "@/data/skuData";
import TrackPageView from "@/components/shared/TrackPageView";

type Props = { sku: SkuData };

export default function SkuPageTemplate({ sku }: Props) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: sku.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: sku.serviceName,
    provider: { "@type": "Organization", name: "GSD with AI" },
    description: sku.subhead,
    areaServed: [
      { "@type": "State", name: "Texas" },
      { "@type": "State", name: "Oklahoma" },
      { "@type": "State", name: "Louisiana" },
    ],
    offers: {
      "@type": "Offer",
      price: "25000.00",
      priceCurrency: "USD",
      description: PRICE_BAND_TEXT,
    },
  };

  return (
    <>
      <TrackPageView event="SKU View" props={{ sku: sku.slug }} />
      <Script id={`sku-schema-${sku.slug}`} type="application/ld+json">
        {JSON.stringify([serviceSchema, faqSchema])}
      </Script>

      <article className="container mx-auto px-6 py-24 min-h-[80vh]">
        {/* Above the fold */}
        <header className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-teal-500/20 bg-teal-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-teal-700 mb-6">
            6-week build · From $25K
          </span>
          <h1 className="text-4xl font-extrabold leading-[1.05] text-zinc-900 sm:text-5xl">
            {sku.headline}
          </h1>
          <p className="mt-6 text-xl leading-relaxed text-zinc-600">{sku.subhead}</p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
            <Link
              href={`/contact?sku=${sku.slug}`}
              className="group inline-flex items-center gap-2 rounded-xl bg-teal-700 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_4px_14px_rgb(13_148_136/0.3)] transition-all hover:bg-teal-600"
            >
              Book a 20-minute scoping call
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <span className="text-sm text-zinc-600">{PRICE_BAND_TEXT}</span>
          </div>
        </header>

        {/* This is for you if */}
        <section className="mt-20 max-w-3xl mx-auto">
          <h2 className="text-2xl font-extrabold text-zinc-900 sm:text-3xl">This is for you if&hellip;</h2>
          <ul className="mt-6 space-y-4">
            {sku.isForYou.map((line) => (
              <li key={line} className="flex gap-3 text-lg leading-relaxed text-zinc-700">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-teal-700" />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* What we install */}
        <section className="mt-20 max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-zinc-900 sm:text-3xl">What we install</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {sku.whatWeInstall.map((item) => (
              <div
                key={item.tool}
                className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm"
              >
                <h3 className="font-bold text-zinc-900">{item.tool}</h3>
                <p className="mt-1 text-sm text-zinc-600">{item.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 6-week timeline */}
        <section className="mt-20 max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-zinc-900 sm:text-3xl">The 6-week timeline</h2>
          <ol className="mt-8 space-y-6">
            {sku.timeline.map((w) => (
              <li
                key={w.week}
                className="grid gap-4 border-l-4 border-teal-600 bg-zinc-50 px-6 py-5 sm:grid-cols-[120px_1fr]"
              >
                <span className="text-sm font-bold uppercase tracking-wide text-teal-700">{w.week}</span>
                <div>
                  <h3 className="font-bold text-zinc-900">{w.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-zinc-700">{w.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* What you actually get */}
        <section className="mt-20 max-w-3xl mx-auto">
          <h2 className="text-2xl font-extrabold text-zinc-900 sm:text-3xl">What you actually get</h2>
          <ul className="mt-6 space-y-3">
            {sku.whatYouGet.map((item) => (
              <li key={item} className="flex gap-3 text-zinc-700">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-teal-700" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Embedded case study */}
        <section className="mt-20">
          <Link
            href={`/case-studies/${sku.caseStudy.slug}`}
            className="group block max-w-4xl mx-auto rounded-2xl border border-zinc-200 bg-white p-10 shadow-sm transition-all hover:-translate-y-1 hover:border-teal-600/30 hover:shadow-md"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-700">
              Proof
            </span>
            <h3 className="mt-3 text-2xl font-extrabold text-zinc-900 group-hover:text-teal-800 sm:text-3xl">
              {sku.caseStudy.headline}
            </h3>
            <p className="mt-4 text-base leading-relaxed text-zinc-600">{sku.caseStudy.blurb}</p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal-700">
              Read the breakdown <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        </section>

        {/* Pricing block expanded */}
        <section className="mt-20 max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-zinc-900 sm:text-3xl">Pricing</h2>
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
              <span className="text-xs font-semibold uppercase tracking-wider text-teal-700">
                Foundations engagement
              </span>
              <p className="mt-2 text-3xl font-extrabold text-zinc-900">From $25K</p>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600">{sku.pricing.foundations}</p>
            </div>
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
              <span className="text-xs font-semibold uppercase tracking-wider text-teal-700">
                Operating retainer
              </span>
              <p className="mt-2 text-3xl font-extrabold text-zinc-900">From $5K/mo</p>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600">{sku.pricing.retainer}</p>
            </div>
            <div className="rounded-2xl border border-dashed border-zinc-300 bg-zinc-50 p-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                Separate scope
              </span>
              <p className="mt-2 text-lg font-bold text-zinc-700">Custom add-ons</p>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600">{sku.pricing.separate}</p>
            </div>
          </div>
        </section>

        {/* FAQ block */}
        <section className="mt-20 max-w-3xl mx-auto">
          <h2 className="text-2xl font-extrabold text-zinc-900 sm:text-3xl">Common questions</h2>
          <dl className="mt-8 space-y-6">
            {sku.faqs.map((f) => (
              <div key={f.q} className="border-b border-zinc-200 pb-6">
                <dt className="font-bold text-zinc-900">{f.q}</dt>
                <dd className="mt-2 text-zinc-700 leading-relaxed">{f.a}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Pull quote */}
        <section className="mt-20">
          <blockquote className="mx-auto max-w-3xl rounded-2xl bg-zinc-900 p-10 text-white">
            <Quote className="h-8 w-8 text-teal-400" aria-hidden="true" />
            <p className="mt-4 text-xl font-medium leading-relaxed">
              We don&rsquo;t do general B2B SaaS. We wire systems for people who wear hardhats to work.
            </p>
            <footer className="mt-6 text-sm text-zinc-400">— GSD with AI</footer>
          </blockquote>
        </section>

        {/* Final CTA */}
        <section className="mt-20 rounded-2xl bg-teal-700 p-12 text-center text-white">
          <h2 className="text-3xl font-extrabold sm:text-4xl">Ready to ship?</h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-teal-100">
            A 20-minute call. You walk us through the friction. We walk back the first thing worth wiring.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-sm font-semibold text-teal-700 shadow-md transition-all hover:bg-zinc-50"
          >
            Book a 20-minute scoping call
            <ArrowRight className="h-4 w-4" />
          </Link>
        </section>
      </article>
    </>
  );
}
