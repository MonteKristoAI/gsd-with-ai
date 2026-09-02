import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Eyebrow, PrimaryCta, AeoLede, Section, serviceSchema } from "@/components/ui/site";
import { Faq, FaqSchema, type FaqItem } from "@/components/ui/Faq";

export const metadata: Metadata = {
  title: "The Torque Growth Partnership",
  description:
    "Fractional revenue operations for oilfield technology company CEOs. The Torque Method installed and run across three layers. Month-to-month, from $20K/mo.",
  alternates: { canonical: "/growth-partnership" },
  openGraph: {
    title: "The Torque Growth Partnership",
    description:
      "Fractional revenue operations installed and run across three layers - Torque, Traction, Thrust. Six workstreams. Month-to-month.",
    url: "/growth-partnership",
    siteName: "Gets Stuff Done",
    type: "website",
    images: [{ url: "/og-growth-partnership.png", width: 1200, height: 630, alt: "The Torque Growth Partnership: Torque, Traction and Thrust installed and run month to month." }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-growth-partnership.png"],
  },
};

const LAYERS = [
  {
    name: "Layer 1: Torque",
    tagline: "Build pulling power against friction. The targeting and intelligence layer.",
    workstreams: [
      { name: "Market Intelligence & Buyer Targeting", detail: "Enverus, 6sense, ICP definition, buying-committee mapping, account prioritization." },
      { name: "CRM Foundation & Data", detail: "Salesforce, HubSpot, or Dynamics 365 buildout; database cleanup; verified emails and contacts; persona tagging." },
    ],
  },
  {
    name: "Layer 2: Traction",
    tagline: "Get deal motion. The engagement and outbound layer.",
    workstreams: [
      { name: "Brand Voice & Content", detail: "Positioning, messaging, website copy, LinkedIn product campaign, sales collateral." },
      { name: "Outbound & Demand Generation", detail: "Email deliverability, sequences, ad campaigns, event marketing, referral engine." },
    ],
  },
  {
    name: "Layer 3: Thrust",
    tagline: "Close and expand. The conversion and post-sale layer.",
    workstreams: [
      { name: "AI SDR & Pipeline Discipline", detail: "Reply triage, meeting booking, deal-stuck alerts, forecast hygiene, pipeline reporting." },
      { name: "Value Selling & Expansion", detail: "ROI calculators, lapsed-account re-engagement, account expansion motion." },
    ],
  },
];

const FAQS: readonly FaqItem[] = [
  { q: "Do I have to run a Torque Diagnostic first?", a: "Yes. Every Growth Partnership starts with a Diagnostic. It ensures we're building against the right growth plan and gives you a low-risk first move." },
  { q: "Who does the actual work?", a: "Maxine leads strategy and stakeholder work. GSD's implementation team runs the six workstreams, augmented by an AI-native execution stack that handles research, content production, lead enrichment, and reporting." },
  { q: "How long until I see results?", a: "First measurable output ships within two weeks of engagement start. Meaningful pipeline movement typically appears in 60–90 days as campaigns launch and the AI SDR compounds." },
  { q: "Can I scale the engagement up or down?", a: "Yes. Month-to-month with 30 days notice. Add workstreams, drop workstreams, or pause the engagement entirely if needed." },
  { q: "Does this replace my marketing team or complement it?", a: "Either. Some clients have no marketing function and we install one. Others have a marketing lead and we provide fractional CMO leadership and execution scale." },
  { q: "What if my company is going through M&A?", a: "We have a specialty engagement for CEOs in a deal window. See the M&A Growth Sprint section on this page." },
];

export default function GrowthPartnershipPage() {
  return (
    <>
      <FaqSchema items={FAQS} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: "The Torque Growth Partnership",
              serviceType: "Fractional revenue operations retainer for oilfield technology companies",
              url: "https://www.getsstuffdone.com/growth-partnership",
              price: "20000",
              description:
                "Month-to-month fractional revenue operations run across three layers and six workstreams, from buyer targeting to an AI SDR.",
            }),
          ),
        }}
      />

      {/* Hero */}
      <section className="bg-navy text-white">
        <div className="container mx-auto px-6 py-20 lg:py-28">
          <div className="max-w-3xl">
            <Eyebrow className="!text-lime">Door 2 · Ongoing partnership</Eyebrow>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl">
              The Torque Growth Partnership
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/80">
              Fractional revenue operations installed and run across three layers, Torque, Traction, and Thrust.
              Month-to-month. Every partnership starts with a Torque Diagnostic.
            </p>
            <p className="mt-5 text-sm font-semibold text-lime">From $20K/mo · priced by scope</p>
            <div className="mt-8">
              <PrimaryCta className="!bg-lime !text-navy hover:!bg-lime-light">Book a 20-minute call</PrimaryCta>
            </div>
          </div>
        </div>
      </section>

      {/* AEO */}
      <Section className="bg-cream !py-14">
        <AeoLede className="mx-auto max-w-3xl text-center !text-navy">
          The Torque Growth Partnership is a month-to-month fractional revenue operations engagement for oilfield
          technology companies. GSD installs and runs the Torque Method across three layers and six workstreams, from
          buyer targeting to an AI SDR. Partnerships start from $20K per month and begin with a Torque Diagnostic.
        </AeoLede>
      </Section>

      {/* Three layers, six workstreams */}
      <Section className="bg-white">
        <div className="mb-12 max-w-2xl">
          <Eyebrow>What we run</Eyebrow>
          <h2 className="mt-3 text-3xl font-extrabold text-navy sm:text-4xl">Three layers, six workstreams</h2>
        </div>
        <div className="space-y-8">
          {LAYERS.map((layer) => (
            <div key={layer.name} className="rounded-2xl border border-slate/15 bg-cream p-8">
              <h3 className="text-xl font-bold text-navy">{layer.name}</h3>
              <p className="mt-1 text-sm font-semibold text-signal">{layer.tagline}</p>
              <div className="mt-6 grid gap-6 md:grid-cols-2">
                {layer.workstreams.map((w) => (
                  <div key={w.name} className="rounded-xl border border-slate/15 bg-white p-5">
                    <p className="font-semibold text-navy">{w.name}</p>
                    <p className="mt-2 text-sm leading-relaxed text-slate">{w.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* M&A Sprint featured (nested, links to subpage) */}
      <Section className="bg-navy text-white">
        <div className="mx-auto max-w-3xl rounded-2xl border border-white/15 bg-white/5 p-8 lg:p-12">
          <Eyebrow className="!text-lime">Featured specialty</Eyebrow>
          <h2 className="mt-3 text-2xl font-extrabold sm:text-3xl">The M&A Growth Sprint</h2>
          <p className="mt-4 leading-relaxed text-white/80">
            For CEOs in or around a deal window. A focused engagement that tightens the growth story and the revenue
            operations underneath it while a transaction is in motion. Deliberately quiet, conversation-first, and
            scoped to your timeline.
          </p>
          <Link
            href="/growth-partnership/ma-sprint"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-lime"
          >
            See the M&A Growth Sprint <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      {/* Pricing */}
      <Section className="bg-cream">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Pricing</Eyebrow>
          <p className="mt-4 text-4xl font-extrabold text-navy">From $20K/mo</p>
          <p className="mt-2 text-slate">
            Month-to-month, 30 days notice · priced by scope · full pricing detail in your scoped proposal
          </p>
          <div className="mt-8">
            <PrimaryCta>Book a 20-minute call</PrimaryCta>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-white">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-extrabold text-navy sm:text-4xl">Questions, answered</h2>
        </div>
        <Faq items={FAQS} />
      </Section>
    </>
  );
}
