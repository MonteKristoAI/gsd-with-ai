import type { Metadata } from "next";
import Image from "next/image";
import { Eyebrow, PrimaryCta, AeoLede, Section, serviceSchema } from "@/components/ui/site";

export const metadata: Metadata = {
  title: "The Torque Method",
  description:
    "The Torque Method is GSD's framework for building predictable growth at oilfield technology companies. Three layers, six workstreams, delivered in weeks.",
  alternates: { canonical: "/torque-method" },
  openGraph: {
    title: "The Torque Method",
    description:
      "How oilfield technology companies build predictable growth against structural friction. Three layers: Torque, Traction, Thrust. Delivered in weeks.",
    url: "/torque-method",
    siteName: "Gets Stuff Done",
    type: "website",
    images: [{ url: "/og-torque-method.png", width: 1200, height: 630, alt: "The Torque Method: pulling power against friction, the GSD framework for oilfield technology growth." }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-torque-method.png"],
  },
};

const LAYERS = [
  {
    name: "Layer 1: Torque",
    tagline: "Build pulling power against friction.",
    body: "The targeting and intelligence layer. Before you generate motion, you build the force. Torque work identifies which accounts have budget, which committees have decision authority, and which incumbents you are displacing.",
    workstreams: ["Market Intelligence & Buyer Targeting", "CRM Foundation & Data"],
  },
  {
    name: "Layer 2: Traction",
    tagline: "Get deal motion.",
    body: "The engagement and outbound layer. Once the force is built, you convert it to motion. Traction work is brand voice, content, outbound sequences, ad campaigns, and event marketing, everything the buyer experiences at the top and middle of the funnel.",
    workstreams: ["Brand Voice & Content", "Outbound & Demand Generation"],
  },
  {
    name: "Layer 3: Thrust",
    tagline: "Close and expand.",
    body: "The conversion and expansion layer. Motion becomes revenue at the buying committee, and revenue compounds through expansion inside the account. Thrust work is CRM discipline, AI SDR triage, deal-stuck alerts, ROI calculators, lapsed-account re-engagement, and account expansion.",
    workstreams: ["AI SDR & Pipeline Discipline", "Value Selling & Expansion"],
  },
];

const CHANGES = [
  "Sales cycles that stalled in committee start moving, because the ROI story and pipeline discipline are built into Layer 3.",
  "CRMs with thousands of contacts and forty that matter get cleaned and re-targeted through Layer 1.",
  "Marketing teams of one become fractional revenue operations teams of six through Layer 2.",
  "Growth becomes measurable and predictable, because every workstream ties to a named metric on the dashboard.",
];

export default function TorqueMethodPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: "The Torque Method",
              serviceType: "Revenue operations methodology for oilfield technology companies",
              url: "https://www.getsstuffdone.com/torque-method",
              description:
                "GSD's framework for building predictable growth at oilfield technology companies across three layers: Torque, Traction, and Thrust.",
            }),
          ),
        }}
      />

      {/* Hero */}
      <section className="bg-navy text-white">
        <div className="container mx-auto px-6 py-20 lg:py-28">
          <div className="max-w-3xl">
            <Eyebrow className="!text-lime">The methodology</Eyebrow>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl">The Torque Method</h1>
            <p className="mt-6 text-lg leading-relaxed text-white/80">
              A framework for building the pulling power an oilfield technology company needs to close deals against
              structural friction, from first engagement through the buying committee to expansion.
            </p>
            <div className="mt-9">
              <PrimaryCta className="!bg-lime !text-navy hover:!bg-lime-light">Book a 20-minute call</PrimaryCta>
            </div>
          </div>
        </div>
      </section>

      {/* AEO */}
      <Section className="bg-cream !py-14">
        <AeoLede className="mx-auto max-w-3xl text-center !text-navy">
          The Torque Method is GSD's framework for building predictable growth at oilfield technology companies. It works
          in three layers, Torque, Traction, and Thrust, spanning six workstreams from buyer targeting to pipeline
          discipline. Each engagement ties every workstream to a named metric and ships measurable output in weeks.
        </AeoLede>
      </Section>

      {/* Why torque */}
      <Section className="bg-white">
        <div className="mx-auto max-w-3xl">
          <Eyebrow>Why torque</Eyebrow>
          <h2 className="mt-3 text-3xl font-extrabold text-navy">The metaphor is the buyer's own vocabulary</h2>
          <p className="mt-5 leading-relaxed text-slate">
            The people your buyers sell to speak in torque, wellhead, LOE, and NPT. Torque is the
            force that turns something under load. In a company's sales cycle, torque is the pulling power you build
            against the friction of long evaluations and skeptical buying committees. Too little and the deal stalls.
            Enough at the right moment and it breaks through the buying committee to close.
          </p>
        </div>
      </Section>

      {/* Torque Curve (real diagnostic visual, supplied by GSD) */}
      <Section className="bg-white">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>The Torque Curve</Eyebrow>
          <h2 className="mt-3 text-3xl font-extrabold text-navy">
            Torque builds slowly, then must peak at the buying committee
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-slate">
            Pulling power builds through discovery and qualification, plateaus during technical evaluation, then has to
            generate a peak at the buying committee, exactly where friction is highest, to break through to close and
            compound through expansion.
          </p>
        </div>
        <figure className="mx-auto mt-10 max-w-5xl overflow-hidden rounded-2xl border border-slate/15 shadow-sm">
          <Image
            src="/torque-curve.svg"
            alt="The Torque Curve: pulling power builds against friction across the sales cycle, from Discovery through the Buying Committee to Close and Expansion, peaking at the buying committee where friction is highest."
            width={1600}
            height={900}
            className="h-auto w-full"
          />
        </figure>
      </Section>

      {/* Three layers in depth */}
      <Section className="bg-cream">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-extrabold text-navy sm:text-4xl">Three layers, six workstreams</h2>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {LAYERS.map((layer) => (
            <div key={layer.name} className="flex flex-col rounded-2xl border border-slate/15 bg-white p-8">
              <h3 className="text-xl font-bold text-navy">{layer.name}</h3>
              <p className="mt-1 text-sm font-semibold text-signal">{layer.tagline}</p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-slate">{layer.body}</p>
              <ul className="mt-6 space-y-2">
                {layer.workstreams.map((w) => (
                  <li key={w} className="flex items-start gap-2 text-sm font-medium text-navy">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
                    {w}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* What the method changes */}
      <Section className="bg-white">
        <div className="mx-auto max-w-3xl">
          <Eyebrow>What the Torque Method changes</Eyebrow>
          <h2 className="mt-3 text-3xl font-extrabold text-navy">A claim about the framework, not a case study</h2>
          <ul className="mt-8 space-y-5">
            {CHANGES.map((c) => (
              <li key={c} className="flex items-start gap-3 leading-relaxed text-slate">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-signal" />
                {c}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Whitepaper CTA (Brief 6.7) - gated download ships in P1; for now the CTA books a call */}
      <Section className="bg-navy text-white">
        <div className="mx-auto max-w-3xl rounded-2xl border border-white/15 bg-white/5 p-8 text-center lg:p-12">
          <Eyebrow className="!text-lime">The Torque Method whitepaper</Eyebrow>
          <h2 className="mt-3 text-2xl font-extrabold sm:text-3xl">
            The full framework, with the Torque Curve, in one document.
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-white/80">
            We are finishing the written whitepaper: the complete methodology, the Torque Curve diagnostic, and the
            buying-committee playbook. Want it first, or want to walk through it live? Start with a 20-minute call.
          </p>
          <div className="mt-8">
            <PrimaryCta className="!bg-lime !text-navy hover:!bg-lime-light">Book a 20-minute call</PrimaryCta>
          </div>
        </div>
      </Section>
    </>
  );
}
