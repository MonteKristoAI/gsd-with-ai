import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { COMPANY } from "@/data/companyInfo";
import { Eyebrow, PrimaryCta, AeoLede, Section } from "@/components/ui/site";
import maxineImg from "@/assets/founder-maxine.webp";

const TRUST = [
  "20 years inside Fortune 100 energy services · fluent in the customers you sell to",
  "For technology companies selling into OFS, E&P, and midstream operators · typical clients $8M–$40M revenue",
  "Torque Diagnostic from $25K, 6–8 weeks · Growth Partnership from $20K/mo, month-to-month",
];

const PERSONAS = [
  {
    quote: "Our product is the best in the market and our sales cycle is nine months. Something is broken and I don't know what.",
    who: "CEO / Founder",
    desc: "Growth stalled, or accelerating, or you are heading into a deal. Marketing has been a founder-run afterthought.",
    href: "/torque-diagnostic",
  },
  {
    quote: "My reps are five months deep into a deal and it dies in committee. Every time.",
    who: "VP Sales",
    desc: "Deals stall in front of the buying committee while a single skeptic holds them up. The CRM is a graveyard, and pipeline reports fall apart at quarter-end.",
    href: "/growth-partnership",
  },
  {
    quote: "I don't need another agency selling me a retainer. I need somebody who has built this before.",
    who: "Head of Marketing",
    desc: "One person doing brand, content, product marketing, and ad ops, with no budget for a full team.",
    href: "/growth-partnership",
  },
];

const FROM_TO = [
  { from: "Nine-month sales cycles that die in committee", to: "An ROI story and pipeline discipline built into the sales motion" },
  { from: "A CRM with 4,000 contacts and 40 that matter", to: "A clean, prioritized target list your reps can work" },
  { from: "A marketing team of one", to: "A fractional revenue operations team of six" },
];

const SITE_SCHEMA = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.getsstuffdone.com/#organization",
    name: "GSD",
    legalName: "Get Stuff Done LLC",
    url: "https://www.getsstuffdone.com",
    logo: "https://www.getsstuffdone.com/logo.png",
    description:
      "GSD is a fractional revenue operations firm for oilfield technology companies. The Torque Method installs targeting, outbound, and pipeline discipline in weeks.",
    email: "hello@getsstuffdone.com",
    sameAs: ["https://www.linkedin.com/in/maxineaitkenhead/"],
    founder: {
      "@type": "Person",
      "@id": "https://www.getsstuffdone.com/about#maxine",
      name: "Maxine Aitkenhead",
      jobTitle: "Founder",
      worksFor: { "@id": "https://www.getsstuffdone.com/#organization" },
      description:
        "Maxine Aitkenhead is the founder of GSD, a fractional revenue operations firm for oilfield technology companies. She spent 20 years inside Fortune 100 energy services building data systems before founding GSD.",
      url: "https://www.getsstuffdone.com/about",
      sameAs: ["https://www.linkedin.com/in/maxineaitkenhead/"],
    },
    areaServed: { "@type": "Country", name: "United States" },
  },
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://www.getsstuffdone.com/#service",
    name: "GSD, Fractional Revenue Operations",
    provider: { "@id": "https://www.getsstuffdone.com/#organization" },
    serviceType: "Fractional revenue operations for oilfield technology companies",
    url: "https://www.getsstuffdone.com",
    areaServed: { "@type": "Country", name: "United States" },
    offers: [
      { "@type": "Offer", name: "The Torque Diagnostic", priceCurrency: "USD", price: "25000", url: "https://www.getsstuffdone.com/torque-diagnostic" },
      { "@type": "Offer", name: "The Torque Growth Partnership", priceCurrency: "USD", price: "20000", url: "https://www.getsstuffdone.com/growth-partnership" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.getsstuffdone.com/#website",
    name: "GSD",
    url: "https://www.getsstuffdone.com",
    publisher: { "@id": "https://www.getsstuffdone.com/#organization" },
  },
];

export default function Home() {
  const { diagnostic, partnership } = COMPANY.offers;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SITE_SCHEMA) }} />

      {/* ============ 1.1 Hero ============ */}
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-light/30 via-navy to-navy-dim" />
        <div
          className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-lime/10 blur-3xl"
          aria-hidden="true"
        />
        <div className="container relative mx-auto px-6 py-20 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            {/* Left: copy */}
            <div>
              <Eyebrow className="!text-lime">GSD, fractional revenue operations for oilfield technology companies</Eyebrow>
              <h1 className="mt-5 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl">
                Lead generation, sales, and marketing for oilfield technology companies. Installed in weeks.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
                For CEOs of oilfield technology companies ready to accelerate growth. The Torque Method installs a
                fractional revenue operations team, delivered by operators who spent 20 years inside the customers you sell to.
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <PrimaryCta className="!bg-lime !text-navy hover:!bg-lime-light shadow-lg">
                  {COMPANY.cta.primaryLabel}
                </PrimaryCta>
                <Link
                  href="/torque-method"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:border-white/50 hover:bg-white/5"
                >
                  See how it works: The Torque Method <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Right: the Torque Curve (signature visual, Brief 1.2 Block B note) */}
            <div className="rounded-2xl bg-white p-3 shadow-2xl ring-1 ring-white/10 sm:p-4">
              <Image
                src="/torque-curve.svg"
                alt="The Torque Curve: pulling power builds against friction across the oilfield technology sales cycle, peaking at the buying committee."
                width={1600}
                height={900}
                priority
                className="h-auto w-full rounded-lg"
              />
            </div>
          </div>

          {/* Trust strip - three distinct columns (Brief 1.1) */}
          <div className="mt-14 grid gap-6 border-t border-white/10 pt-10 md:grid-cols-3">
            {TRUST.map((t, i) => (
              <p key={i} className="text-sm leading-relaxed text-white/70">
                {t}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* AEO lede for citation */}
      <Section className="bg-cream !py-14">
        <AeoLede className="mx-auto max-w-3xl text-center !text-xl !text-navy">
          GSD is a fractional revenue operations firm for oilfield technology companies. Using the Torque Method, GSD
          installs targeting, outbound, and pipeline discipline that helps companies close deals against long sales
          cycles and skeptical buying committees. Engagements start from $25K and deliver measurable output in weeks.
        </AeoLede>
      </Section>

      {/* ============ Block A: Two doors ============ */}
      <Section className="bg-white">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-extrabold text-navy sm:text-4xl">Two ways to work with GSD</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {[diagnostic, partnership].map((door) => (
            <Link
              key={door.href}
              href={door.href}
              className="group flex flex-col rounded-2xl border border-slate/15 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:border-navy/30 hover:shadow-lg"
            >
              <Eyebrow>{door.eyebrow}</Eyebrow>
              <h3 className="mt-4 text-2xl font-bold text-navy">{door.name}</h3>
              <p className="mt-4 flex-1 leading-relaxed text-slate">{door.oneLiner}</p>
              <p className="mt-6 text-sm font-semibold text-navy">{door.priceBand}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-signal">
                {door.cta}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
        <p className="mt-6 text-center text-sm italic text-slate-muted">Full pricing detail in your scoped proposal.</p>
      </Section>

      {/* ============ Block B: Torque Method callout ============ */}
      <Section className="bg-navy text-white">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow className="!text-lime">The methodology</Eyebrow>
          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">The Torque Method</h2>
          <p className="mt-5 text-lg leading-relaxed text-white/80">
            Torque is the pulling power a company builds against friction across the sales cycle. The Torque Method
            builds it in three layers, Torque, Traction, and Thrust, so growth stops stalling in front of the buying committee
            and starts compounding after the close.
          </p>
          <div className="mt-8">
            <Link
              href="/torque-method"
              className="inline-flex items-center gap-2 rounded-xl border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:border-white/50 hover:bg-white/5"
            >
              Explore the Torque Method <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>

      {/* ============ Block C: Is this you? ============ */}
      <Section className="bg-cream">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-extrabold text-navy sm:text-4xl">Is this you?</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {PERSONAS.map((p) => (
            <Link
              key={p.who}
              href={p.href}
              className="group flex flex-col rounded-2xl border border-slate/15 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:border-navy/30 hover:shadow-lg"
            >
              <p className="text-lg font-medium italic leading-relaxed text-navy">&ldquo;{p.quote}&rdquo;</p>
              <p className="mt-6 text-sm font-bold uppercase tracking-wide text-signal">{p.who}</p>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate">{p.desc}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy">
                See where you land <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
        <p className="mt-8 text-center text-sm italic text-slate-muted">
          Also relevant for CFOs signing off on growth investment, and PE operating partners preparing portfolio companies for exit.
        </p>
      </Section>

      {/* ============ Block D: From → To ============ */}
      <Section className="bg-white">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-extrabold text-navy sm:text-4xl">What changes</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {FROM_TO.map((pair, i) => (
            <div key={i} className="rounded-2xl border border-slate/15 bg-cream p-8">
              <p className="text-sm leading-relaxed text-slate-muted line-through decoration-slate/30">{pair.from}</p>
              <ArrowRight className="my-4 h-6 w-6 text-signal" />
              <p className="font-semibold leading-relaxed text-navy">{pair.to}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ============ Block E: Featured case study (placeholder) ============ */}
      <Section className="bg-cream">
        <div className="mx-auto max-w-4xl rounded-2xl border border-slate/15 bg-white p-8 shadow-sm lg:p-12">
          <Eyebrow>Featured case study · Wireline logging technology company</Eyebrow>
          <h2 className="mt-4 text-2xl font-bold text-navy sm:text-3xl">Results publishing after client sign-off.</h2>
          <p className="mt-4 leading-relaxed text-slate">
            A wireline logging technology company engaged GSD to install revenue operations ahead of a growth push.
            Named outcomes are being prepared for release and will appear here once the client has signed off on the
            public framing.
          </p>
          <Link href="/case-studies" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-signal">
            See the case library <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      {/* ============ Block F: Who builds this (Maxine) ============ */}
      <Section className="bg-white">
        <div className="mx-auto grid max-w-4xl items-center gap-10 md:grid-cols-[220px_1fr]">
          <div className="mx-auto overflow-hidden rounded-2xl">
            <Image
              src={maxineImg}
              alt="Maxine Aitkenhead, founder of GSD"
              width={220}
              height={260}
              className="h-auto w-[220px] object-cover"
            />
          </div>
          <div>
            <Eyebrow>Who builds this</Eyebrow>
            <h2 className="mt-3 text-2xl font-bold text-navy sm:text-3xl">Maxine Aitkenhead</h2>
            <p className="mt-4 leading-relaxed text-slate">{COMPANY.founder.canonicalBio}</p>
            <Link href="/about" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy">
              More about GSD <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
