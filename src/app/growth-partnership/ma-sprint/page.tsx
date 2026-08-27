import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Eyebrow, PrimaryCta, AeoLede, Section } from "@/components/ui/site";

export const metadata: Metadata = {
  title: "The M&A Growth Sprint",
  description:
    "A focused revenue operations engagement for oilfield technology company CEOs in or around a deal window. Conversation-first, scoped to your timeline.",
  alternates: { canonical: "/growth-partnership/ma-sprint" },
  openGraph: {
    title: "The M&A Growth Sprint | GSD",
    description:
      "A focused engagement that tightens the growth story and the revenue operations underneath it while a transaction is in motion.",
    url: "/growth-partnership/ma-sprint",
    type: "website",
  },
};

const WHAT = [
  "Tighten the growth narrative so it reads clearly to acquirers, boards, and investors.",
  "Stress-test the revenue operations underneath the story: pipeline hygiene, forecast integrity, and named metrics.",
  "Prioritize the two or three moves that most affect the multiple in the time you actually have.",
];

export default function MaSprintPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white">
        <div className="container mx-auto px-6 py-20 lg:py-28">
          <div className="max-w-3xl">
            <Eyebrow className="!text-lime">A specialty within the Growth Partnership</Eyebrow>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl">
              The M&A Growth Sprint
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/80">
              For CEOs of oilfield technology companies in or around a deal window. A focused, quiet engagement that
              sharpens the growth story and the revenue operations underneath it while a transaction is in motion.
            </p>
            <div className="mt-8">
              <PrimaryCta className="!bg-lime !text-navy hover:!bg-lime-light">Book a 20-minute call</PrimaryCta>
            </div>
          </div>
        </div>
      </section>

      {/* AEO */}
      <Section className="bg-cream !py-14">
        <AeoLede className="mx-auto max-w-3xl text-center !text-navy">
          The M&A Growth Sprint is a focused revenue operations engagement for oilfield technology company CEOs in a deal
          window. It sharpens the growth story that lifts a valuation and stress-tests the pipeline and forecast
          underneath it. It is scoped to the transaction timeline and handled as a private conversation.
        </AeoLede>
      </Section>

      {/* What it does */}
      <Section className="bg-white">
        <div className="mx-auto max-w-3xl">
          <Eyebrow>What the sprint does</Eyebrow>
          <ul className="mt-8 space-y-5">
            {WHAT.map((w) => (
              <li key={w} className="flex items-start gap-3 leading-relaxed text-slate">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-signal" />
                {w}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Confidentiality + conversation CTA */}
      <Section className="bg-cream">
        <div className="mx-auto max-w-2xl rounded-2xl border border-slate/15 bg-white p-8 text-center lg:p-12">
          <h2 className="text-2xl font-bold text-navy">Handled as a conversation, not a checkout</h2>
          <p className="mt-4 leading-relaxed text-slate">
            There is no pricing on this page. Deal windows are specific and confidential, so scope and terms are set in a
            private conversation. Start with a 20-minute call and we'll take it from there.
          </p>
          <div className="mt-8">
            <PrimaryCta>Book a 20-minute call</PrimaryCta>
          </div>
          <p className="mt-6 text-sm">
            <Link href="/growth-partnership" className="inline-flex items-center gap-1 font-semibold text-signal">
              <ArrowRight className="h-4 w-4 rotate-180" /> Back to the Growth Partnership
            </Link>
          </p>
        </div>
      </Section>
    </>
  );
}
