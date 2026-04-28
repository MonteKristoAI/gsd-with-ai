import Link from "next/link";
import { CheckCircle2, Clock } from "lucide-react";
import Script from "next/script";

export default function FieldToCash() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How long does the Field-to-Cash implementation take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our standard implementation timeline is exactly 6 weeks from kickoff to fully operational system."
        }
      },
      {
        "@type": "Question",
        "name": "Do we need to rip out our existing CRM?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. We build on top of the tools you already use, wiring them together so data flows seamlessly."
        }
      }
    ]
  };

  return (
    <>
      <Script id="faq-schema" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>
      
      <div className="container mx-auto px-6 py-24 min-h-[80vh]">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-teal-500/20 bg-teal-50 px-4 py-1.5 text-sm font-semibold text-teal-700 mb-6">
            <Clock className="h-4 w-4" />
            6-Week Build Timeline
          </div>
          <h1 className="text-4xl font-extrabold text-zinc-900 sm:text-5xl">
            Field-to-Cash Automation
          </h1>
          <p className="mt-6 text-xl text-zinc-600 leading-relaxed">
            Stop losing 5 days a month to manual reconciliation. We wire your field ticketing directly into your invoicing system, cutting days sales outstanding (DSO) by up to 30%.
          </p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          {/* Left Column */}
          <div>
            <h2 className="text-2xl font-bold text-zinc-900">This is for you if:</h2>
            <ul className="mt-6 space-y-4">
              {[
                "Your guys in the field hate your current app",
                "You have to manually re-enter field data into QuickBooks or your CRM",
                "You are waiting weeks to get paid because of slow invoicing",
              ].map((item, idx) => (
                <li key={idx} className="flex gap-3 text-zinc-700">
                  <CheckCircle2 className="h-6 w-6 text-teal-600 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="mt-12 text-2xl font-bold text-zinc-900">What we install:</h2>
            <div className="mt-6 grid gap-4">
              <div className="rounded-xl border border-zinc-200 p-6 bg-white shadow-sm">
                <h3 className="font-bold text-zinc-900">1. Mobile-first ticketing capture</h3>
                <p className="mt-2 text-zinc-600 text-sm">A dead-simple interface that actually works offline, designed for people wearing gloves.</p>
              </div>
              <div className="rounded-xl border border-zinc-200 p-6 bg-white shadow-sm">
                <h3 className="font-bold text-zinc-900">2. Automated reconciliation layer</h3>
                <p className="mt-2 text-zinc-600 text-sm">Matches field tickets against dispatch orders automatically.</p>
              </div>
              <div className="rounded-xl border border-zinc-200 p-6 bg-white shadow-sm">
                <h3 className="font-bold text-zinc-900">3. Direct-to-finance sync</h3>
                <p className="mt-2 text-zinc-600 text-sm">Pushes validated data straight to your accounting software.</p>
              </div>
            </div>
          </div>

          {/* Right Column (Pricing) */}
          <div className="lg:pl-12">
            <div className="rounded-2xl border-2 border-zinc-900 bg-zinc-900 p-8 text-white sticky top-24">
              <h3 className="text-xl font-bold text-zinc-100">Transparent Pricing</h3>
              <p className="mt-2 text-zinc-400">No gotchas. No endless consulting retainers.</p>
              
              <div className="mt-8 mb-8 pb-8 border-b border-zinc-800">
                <span className="text-sm font-semibold tracking-wider text-teal-400 uppercase">Foundations Engagement</span>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-4xl font-extrabold">From $25K</span>
                </div>
                <p className="mt-4 text-sm text-zinc-400">Includes system architecture, integration build, and rollout training.</p>
              </div>

              <Link href="/#booking" className="block w-full rounded-xl bg-teal-600 px-6 py-4 text-center font-bold text-white transition-colors hover:bg-teal-500">
                Book a Scoping Call
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
