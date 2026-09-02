import type { Metadata } from "next";
import { Lock } from "lucide-react";
import { Eyebrow, PrimaryCta, AeoLede, Section } from "@/components/ui/site";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Real engagements. Real numbers. How oilfield technology companies are using the Torque Method to close deals against a skeptical buying committee and accelerate growth.",
  alternates: { canonical: "/case-studies" },
  openGraph: {
    title: "Case Studies | Gets Stuff Done",
    description: "How oilfield technology companies are using the Torque Method to accelerate growth.",
    url: "/case-studies",
    siteName: "Gets Stuff Done",
    type: "website",
    images: [{ url: "/og-default.png", width: 1200, height: 630, alt: "Gets Stuff Done, fractional revenue operations for oilfield technology companies." }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-default.png"],
  },
};

// KPI tiles show placeholder copy until real, signed-off numbers are in.
// Do NOT replace with fabricated figures (Brief 2.2, Section 10).
const KPI_TILES = [
  { label: "Named client outcomes", value: "In progress" },
  { label: "Engagements in the case library", value: "Growing" },
  { label: "Published after client sign-off", value: "Q3 / Q4" },
];

export default function CaseStudiesPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-navy text-white">
        <div className="container mx-auto px-6 py-20 lg:py-24">
          <div className="max-w-3xl">
            <Eyebrow className="!text-lime">Case studies</Eyebrow>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl">
              Real engagements. Real numbers. No fabrication.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/80">
              Every case here carries named numbers, a named persona, and a named engagement type, and it only goes
              live once the client has signed off on the public framing.
            </p>
          </div>

          {/* KPI summary tiles */}
          <div className="mt-14 grid gap-6 border-t border-white/10 pt-10 sm:grid-cols-3">
            {KPI_TILES.map((t) => (
              <div key={t.label}>
                <p className="text-2xl font-extrabold text-lime">{t.value}</p>
                <p className="mt-1 text-sm text-white/70">{t.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AEO */}
      <Section className="bg-cream !py-14">
        <AeoLede className="mx-auto max-w-3xl text-center !text-navy">
          GSD case studies document how oilfield technology companies use the Torque Method to close deals against
          a skeptical buying committee and accelerate growth. Each case names the outcome, the persona, the engagement type,
          and the industry sub-vertical. Results publish only after the client signs off on the public framing.
        </AeoLede>
      </Section>

      {/* Flagship - SDS (results pending, confidentiality framing) */}
      <Section className="bg-white">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl border border-slate/15 bg-cream p-8 shadow-sm lg:p-12">
            <div className="flex items-center gap-2 text-sm font-semibold text-signal">
              <Lock className="h-4 w-4" /> Flagship engagement · Wireline logging technology company
            </div>
            <h2 className="mt-4 text-2xl font-bold text-navy sm:text-3xl">Results publishing after client sign-off.</h2>
            <p className="mt-4 leading-relaxed text-slate">
              A wireline logging technology company engaged GSD to install fractional revenue operations across all
              three Torque layers. The engagement is framed carefully around confidentiality: no named client, no
              counterparty names, no unannounced transactions. Named-number outcomes are being prepared and will appear
              here once the client has approved the public framing.
            </p>
            <dl className="mt-8 grid gap-6 sm:grid-cols-3">
              {["Outcome one", "Outcome two", "Outcome three"].map((label) => (
                <div key={label} className="rounded-xl border border-slate/15 bg-white p-5">
                  <dt className="text-2xl font-extrabold text-slate-muted">TBD</dt>
                  <dd className="mt-1 text-sm text-slate-muted">{label} · pending sign-off</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Section>

      {/* More cases coming */}
      <Section className="bg-cream">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-navy">More cases as engagements complete</h2>
          <p className="mt-3 leading-relaxed text-slate">
            We add a card each time an engagement wraps and the client clears the public framing. Until then, we would
            rather show you nothing than show you numbers we made up. Want to see what a real engagement looks like?
          </p>
          <div className="mt-8">
            <PrimaryCta>Book a 20-minute call</PrimaryCta>
          </div>
        </div>
      </Section>
    </>
  );
}
