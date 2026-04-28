import Link from "next/link";
import { CheckCircle2, Clock, Settings2 } from "lucide-react";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Field-to-Cash",
};

export default function FieldToCash() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How long does it take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our standard implementation timeline is exactly 6 weeks from kickoff to fully operational system."
        }
      },
      {
        "@type": "Question",
        "name": "Do we need to rip out our existing system?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. We wire into it. We build on top of the tools you already use, wiring them together so data flows without manual entry."
        }
      }
    ]
  };

  return (
    <>
      <Script id="faq-schema" type="application/ld+json">
        {JSON.stringify([
          faqSchema,
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Field-to-Cash Automation",
            "provider": {
              "@type": "Organization",
              "name": "GSD with AI"
            },
            "description": "Stop chasing tickets. We automate the pipeline from field execution to invoice generation.",
            "offers": {
              "@type": "Offer",
              "price": "25000.00",
              "priceCurrency": "USD"
            }
          }
        ])}
      </Script>
      
      <div className="container mx-auto px-6 py-24 min-h-[80vh]">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-teal-500/20 bg-teal-50 px-4 py-1.5 text-sm font-semibold text-teal-700 mb-6">
            <Clock className="h-4 w-4" />
            6-Week Build Timeline
          </div>
          <h1 className="text-4xl font-extrabold text-zinc-900 sm:text-5xl">
            Field-to-Cash
          </h1>
          <p className="mt-4 text-2xl font-medium text-teal-700">
            For owner-operators who are reconciling invoices on a Friday night
          </p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          {/* Left Column */}
          <div>
            <div className="mb-12">
              <h2 className="text-xl font-bold text-zinc-900 uppercase tracking-wide text-zinc-500 mb-3">The Pain</h2>
              <p className="text-lg text-zinc-700 leading-relaxed">
                You are chasing down field tickets, manually re-entering data into QuickBooks, and losing 5 days a month to manual reconciliation. Your guys in the field hate your current app, and you are waiting weeks to get paid because of slow invoicing.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-xl font-bold text-zinc-900 uppercase tracking-wide text-zinc-500 mb-3">The Fix</h2>
              <p className="text-lg text-zinc-700 leading-relaxed">
                We connect your field ticketing directly to your invoicing system so you get automated reconciliation and cut your days sales outstanding (DSO) by up to 30%.
              </p>
            </div>

            <div className="mb-12 rounded-xl bg-zinc-50 p-6 border border-zinc-200">
              <h2 className="flex items-center gap-2 text-xl font-bold text-zinc-900 mb-4">
                <Settings2 className="h-5 w-5 text-teal-600" />
                The Tech Stack
              </h2>
              <ul className="space-y-3">
                <li className="flex gap-3 text-zinc-700">
                  <CheckCircle2 className="h-5 w-5 text-teal-600 shrink-0" />
                  <span>Mobile-first ticketing capture (works offline)</span>
                </li>
                <li className="flex gap-3 text-zinc-700">
                  <CheckCircle2 className="h-5 w-5 text-teal-600 shrink-0" />
                  <span>Your ERP / Accounting Software (QuickBooks, etc.)</span>
                </li>
                <li className="flex gap-3 text-zinc-700">
                  <CheckCircle2 className="h-5 w-5 text-teal-600 shrink-0" />
                  <span>Automated reconciliation webhooks</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column (Pricing) */}
          <div className="lg:pl-12">
            <div className="rounded-2xl border-2 border-zinc-900 bg-zinc-900 p-8 text-white sticky top-24 shadow-xl">
              <h3 className="text-xl font-bold text-zinc-100">Pricing & Timeline</h3>
              <p className="mt-2 text-zinc-400">No gotchas. No endless consulting retainers.</p>
              
              <div className="mt-8 mb-8 pb-8 border-b border-zinc-800">
                <span className="text-sm font-semibold tracking-wider text-teal-400 uppercase">Foundations Engagement</span>
                <div className="mt-2 flex flex-col gap-1">
                  <span className="text-4xl font-extrabold">From $25K</span>
                  <span className="text-xl font-medium text-zinc-300">+ $5K/mo operating retainer</span>
                </div>
                <p className="mt-4 text-sm text-zinc-400">Includes system architecture, integration build, rollout training, and ongoing managed automation.</p>
              </div>

              <Link href="/contact" className="block w-full rounded-xl bg-teal-600 px-6 py-4 text-center font-bold text-white transition-colors hover:bg-teal-500">
                Book a 20-minute call
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
