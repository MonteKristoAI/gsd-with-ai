import type { Metadata } from "next";
import { Check } from "lucide-react";
import { Eyebrow, PrimaryCta, AeoLede, Section, serviceSchema } from "@/components/ui/site";
import { Faq, FaqSchema, type FaqItem } from "@/components/ui/Faq";

export const metadata: Metadata = {
  title: "The Torque Diagnostic",
  description:
    "A fixed-scope 6-8 week engagement that produces your Torque Method growth plan and delivers one or two implemented quick wins. From $25K.",
  alternates: { canonical: "/torque-diagnostic" },
  openGraph: {
    title: "The Torque Diagnostic",
    description:
      "A fixed-scope 6-8 week engagement for oilfield technology company CEOs. Produces your Torque Method growth plan and one or two implemented quick wins.",
    url: "/torque-diagnostic",
    siteName: "Gets Stuff Done",
    type: "website",
    images: [{ url: "/og-torque-diagnostic.png", width: 1200, height: 630, alt: "The Torque Diagnostic: a 6-8 week fixed-scope engagement producing a growth plan and implemented quick wins." }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-torque-diagnostic.png"],
  },
};

const FOR_YOU = [
  "You are the CEO of an oilfield technology company and you know your sales cycle stalls in front of the buying committee, but you don't know why.",
  "You have a CRM with thousands of contacts and forty that matter, and you can't tell which is which.",
  "You are not ready to commit to a monthly retainer without seeing what GSD would actually do.",
  "You have a growth mandate from your board or your investors and 90 days to show progress.",
  "You want a real diagnostic, not a sales pitch in disguise.",
];

const INSTALL = [
  "Buyer targeting: ICP definition, buying-committee mapping, and account prioritization across your OFS, E&P, and midstream segments.",
  "CRM audit and cleanup in Salesforce, HubSpot, or Dynamics 365, with verified contacts and persona tagging.",
  "Positioning and messaging that lands with technical evaluators, not just economic buyers.",
  "One or two implemented quick wins, shipped into your stack during the engagement.",
  "Your Torque Method growth plan: a prioritized, costed roadmap across the three layers.",
];

const TIMELINE = [
  { week: "Weeks 1–2", title: "Intelligence", body: "We map the buying committees, audit the CRM, and define the accounts that actually matter. You give us access and 60 minutes with the people who own the number." },
  { week: "Weeks 3–4", title: "First quick win", body: "We ship the first implemented win into your stack, chosen for impact and speed. You review it and tell us what breaks in the real world." },
  { week: "Weeks 5–6", title: "The growth plan", body: "We finalize the Torque Method growth plan: prioritized, costed, and tied to named metrics. You get a documented roadmap you can execute with us or on your own." },
];

const FAQS: readonly FaqItem[] = [
  { q: "Is this for a company my size?", a: "Typical Torque Diagnostic clients are $8M–$40M oilfield technology companies with 20–150 employees. If you're smaller, we'll tell you honestly. If you're larger, you probably need a Growth Partnership from day one." },
  { q: "Does this connect to my existing stack?", a: "Yes. Salesforce, HubSpot, Dynamics 365, 6sense, Enverus, LinkedIn, and standard marketing automation platforms are all in scope. We integrate; we don't rip and replace." },
  { q: "How long until I see something ship?", a: "First quick win by Week 4. Growth plan finalized by Week 6. Full documented output before the Diagnostic ends." },
  { q: "Do I have to sign up for a Growth Partnership after the Diagnostic?", a: "No. The Diagnostic is a complete engagement in itself. Roughly two-thirds of Diagnostics convert to Partnerships. The other third get a growth plan they execute themselves." },
  { q: "Who does the actual work?", a: "Maxine leads every Diagnostic personally. Delivery is supported by GSD's implementation team and the AI-augmented execution stack." },
  { q: "What if we're preparing for M&A?", a: "The Diagnostic is often the right first move before an acquisition or exit. We have a specialty engagement for CEOs in a deal window, described inside the Growth Partnership." },
];

export default function TorqueDiagnosticPage() {
  return (
    <>
      <FaqSchema items={FAQS} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: "The Torque Diagnostic",
              serviceType: "Revenue operations diagnostic for oilfield technology companies",
              url: "https://www.getsstuffdone.com/torque-diagnostic",
              price: "25000",
              description:
                "A fixed-scope 6 to 8 week engagement that produces a Torque Method growth plan and one or two implemented quick wins.",
            }),
          ),
        }}
      />

      {/* Hero */}
      <section className="bg-navy text-white">
        <div className="container mx-auto px-6 py-20 lg:py-28">
          <div className="max-w-3xl">
            <Eyebrow className="!text-lime">Door 1 · Entry engagement</Eyebrow>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl">The Torque Diagnostic</h1>
            <p className="mt-6 text-lg leading-relaxed text-white/80">
              A fixed-scope 6–8 week engagement that produces your Torque Method growth plan and delivers one or two
              implemented quick wins. The low-risk first move.
            </p>
            <p className="mt-5 text-sm font-semibold text-lime">From $25K · 6–8 weeks</p>
            <div className="mt-8">
              <PrimaryCta className="!bg-lime !text-navy hover:!bg-lime-light">Book a 20-minute call</PrimaryCta>
            </div>
          </div>
        </div>
      </section>

      {/* AEO */}
      <Section className="bg-cream !py-14">
        <AeoLede className="mx-auto max-w-3xl text-center !text-navy">
          The Torque Diagnostic is a fixed-scope 6–8 week engagement for oilfield technology company CEOs. It audits your
          targeting, CRM, and messaging, ships one or two implemented quick wins, and produces a prioritized Torque
          Method growth plan. Engagements start from $25K, and roughly two-thirds convert to an ongoing partnership.
        </AeoLede>
      </Section>

      {/* This is for you if */}
      <Section className="bg-white">
        <div className="mx-auto max-w-3xl">
          <Eyebrow>This is for you if</Eyebrow>
          <ul className="mt-8 space-y-5">
            {FOR_YOU.map((f) => (
              <li key={f} className="flex items-start gap-3 leading-relaxed text-slate">
                <Check className="mt-1 h-5 w-5 shrink-0 text-grass-dim" />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* What we install */}
      <Section className="bg-cream">
        <div className="mx-auto max-w-3xl">
          <Eyebrow>What we install</Eyebrow>
          <h2 className="mt-3 text-3xl font-extrabold text-navy">The scope of the Diagnostic</h2>
          <ul className="mt-8 space-y-4">
            {INSTALL.map((i) => (
              <li key={i} className="flex items-start gap-3 rounded-xl border border-slate/15 bg-white p-5 leading-relaxed text-slate">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-grass-dim" />
                {i}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Timeline */}
      <Section className="bg-white">
        <div className="mx-auto max-w-4xl">
          <Eyebrow>The 6-week timeline</Eyebrow>
          <h2 className="mt-3 text-3xl font-extrabold text-navy">What happens, and what you do</h2>
          <div className="mt-10 space-y-6">
            {TIMELINE.map((t) => (
              <div key={t.week} className="grid gap-4 rounded-2xl border border-slate/15 bg-cream p-6 sm:grid-cols-[140px_1fr]">
                <p className="text-sm font-bold text-signal">{t.week}</p>
                <div>
                  <h3 className="font-bold text-navy">{t.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate">{t.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Pricing */}
      <Section className="bg-navy text-white">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow className="!text-lime">Pricing</Eyebrow>
          <p className="mt-4 text-4xl font-extrabold">From $25K</p>
          <p className="mt-2 text-white/70">6–8 weeks · fixed scope · full pricing detail in your scoped proposal</p>
          <div className="mt-8">
            <PrimaryCta className="!bg-lime !text-navy hover:!bg-lime-light">Book a 20-minute call</PrimaryCta>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-cream">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-extrabold text-navy sm:text-4xl">Questions, answered</h2>
        </div>
        <Faq items={FAQS} />
      </Section>
    </>
  );
}
