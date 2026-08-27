import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Check, X } from "lucide-react";
import { COMPANY } from "@/data/companyInfo";
import { Eyebrow, PrimaryCta, AeoLede, Section } from "@/components/ui/site";
import maxineImg from "@/assets/founder-maxine.webp";

export const metadata: Metadata = {
  title: "About",
  description:
    "Maxine Aitkenhead spent 20 years inside Fortune 100 energy services. She founded GSD to install fractional revenue operations at oilfield technology companies.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "Maxine Aitkenhead, Founder, GSD",
    description:
      "20 years inside Fortune 100 energy services building data systems for oilfield operators. Now installing fractional revenue operations at the technology companies selling into that world.",
    url: "/about",
    type: "profile",
  },
};

const HOW_WE_WORK = COMPANY.founder.vision;

const NOT_FOR = [
  "Operators and owner-operators. GSD serves the technology companies selling into the oilfield, not the field itself.",
  "Companies looking for a one-off strategy deck. We install and run, we don't hand over slides and leave.",
  "Anyone who wants a twelve-month lock-in. Partnerships are month-to-month, with 30 days notice.",
  "Companies well under $8M in revenue. We'll tell you honestly if a different first move fits you better.",
];

export default function AboutPage() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://www.getsstuffdone.com/about#maxine",
    name: "Maxine Aitkenhead",
    jobTitle: "Founder",
    worksFor: { "@type": "Organization", name: "GSD", "@id": "https://www.getsstuffdone.com/#organization" },
    url: "https://www.getsstuffdone.com/about",
    description: COMPANY.founder.canonicalBio,
    homeLocation: { "@type": "Place", name: "Houston" },
    sameAs: [COMPANY.social.linkedin],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />

      {/* Hero - Pattern A: portrait right of copy, first viewport, no lazy-load */}
      <section className="bg-cream">
        <div className="container mx-auto grid items-center gap-12 px-6 py-20 lg:grid-cols-[1fr_360px] lg:py-28">
          <div>
            <Eyebrow>About GSD</Eyebrow>
            <h1 className="mt-4 text-4xl font-extrabold leading-[1.1] tracking-tight text-navy sm:text-5xl">
              I spent 20 years on the other side of your buyer's table.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate">
              {COMPANY.founder.positioningLine}
            </p>
            <div className="mt-8">
              <PrimaryCta>Book a 20-minute call</PrimaryCta>
            </div>
          </div>
          <div className="mx-auto overflow-hidden rounded-2xl shadow-lg">
            <Image
              src={maxineImg}
              alt="Maxine Aitkenhead, founder of GSD"
              width={360}
              height={440}
              priority
              loading="eager"
              className="h-auto w-[360px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* AEO */}
      <Section className="bg-white !py-14">
        <AeoLede className="mx-auto max-w-3xl text-center !text-navy">
          {COMPANY.founder.canonicalBio} GSD installs the Torque Method at oilfield technology companies selling into OFS,
          E&P, and midstream operators, so their growth motion is wired as tightly as their product.
        </AeoLede>
      </Section>

      {/* Why I started GSD */}
      <Section className="bg-white">
        <div className="mx-auto max-w-3xl">
          <Eyebrow>Why I started GSD</Eyebrow>
          <div className="mt-6 space-y-5">
            {COMPANY.founder.bioParagraphs.map((p, i) => (
              <p key={i} className="leading-relaxed text-slate">
                {p}
              </p>
            ))}
          </div>
        </div>
      </Section>

      {/* How we work */}
      <Section className="bg-cream">
        <div className="mx-auto max-w-4xl">
          <Eyebrow>How we work</Eyebrow>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {HOW_WE_WORK.map((v) => (
              <div key={v.title} className="rounded-2xl border border-slate/15 bg-white p-6">
                <h3 className="font-bold text-navy">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Pricing bands */}
      <Section className="bg-white">
        <div className="mx-auto max-w-4xl">
          <Eyebrow>Pricing bands</Eyebrow>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {[COMPANY.offers.diagnostic, COMPANY.offers.partnership].map((o) => (
              <Link
                key={o.href}
                href={o.href}
                className="group rounded-2xl border border-slate/15 bg-cream p-8 transition-all hover:border-navy/30 hover:shadow-md"
              >
                <p className="font-bold text-navy">{o.name}</p>
                <p className="mt-2 text-2xl font-extrabold text-navy">{o.priceBand}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate">{o.oneLiner}</p>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      {/* Who we do NOT work with */}
      <Section className="bg-navy text-white">
        <div className="mx-auto max-w-3xl">
          <Eyebrow className="!text-lime">Who we do not work with</Eyebrow>
          <h2 className="mt-3 text-3xl font-extrabold">Saying who we're not for is the honest move</h2>
          <ul className="mt-8 space-y-4">
            {NOT_FOR.map((n) => (
              <li key={n} className="flex items-start gap-3 leading-relaxed text-white/80">
                <X className="mt-1 h-5 w-5 shrink-0 text-lime" />
                {n}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* The person behind GSD - credentials */}
      <Section className="bg-cream">
        <div className="mx-auto max-w-3xl">
          <Eyebrow>The person behind GSD</Eyebrow>
          <ul className="mt-8 space-y-3">
            {COMPANY.founder.credentials.map((c) => (
              <li key={c} className="flex items-start gap-3 rounded-xl border border-slate/15 bg-white px-5 py-4 text-navy">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-grass-dim" />
                <span className="font-medium">{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Beyond GSD - Red M block (quiet) */}
      <Section className="bg-white">
        <div className="mx-auto max-w-3xl border-l-2 border-slate/20 pl-6">
          <h2 className="text-base font-bold text-navy">Beyond GSD</h2>
          <p className="mt-3 text-base leading-relaxed text-slate">
            GSD supports{" "}
            <a
              href={COMPANY.cause.url}
              target="_blank"
              rel="noopener"
              className="font-semibold text-navy underline decoration-slate/30 underline-offset-2 hover:decoration-navy"
            >
              Red M
            </a>{" "}
            in the fight against human trafficking. If you or someone you know needs help, the{" "}
            {COMPANY.cause.hotlineLabel} is{" "}
            <a href={COMPANY.cause.hotlineTel} className="font-semibold text-navy underline decoration-slate/30 underline-offset-2 hover:decoration-navy">
              {COMPANY.cause.hotline}
            </a>
            .
          </p>
        </div>
      </Section>
    </>
  );
}
