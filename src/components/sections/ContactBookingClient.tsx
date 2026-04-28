"use client";

import Script from "next/script";
import { Mail, Phone } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { COMPANY } from "@/data/companyInfo";

const BASE_CALENDLY = "https://calendly.com/maxine-gsd/discovery-call";

function buildCalendlyUrl(skuParam: string | null) {
  const params = new URLSearchParams({
    hide_event_type_details: "1",
    hide_gdpr_banner: "1",
  });
  if (skuParam) {
    params.set("utm_source", "website");
    params.set("utm_medium", "sku-cta");
    params.set("utm_content", skuParam);
  }
  return `${BASE_CALENDLY}?${params.toString()}`;
}

function ContactBookingInner() {
  const searchParams = useSearchParams();
  const sku = searchParams.get("sku");
  const calendlyUrl = buildCalendlyUrl(sku);

  return (
    <div className="container mx-auto px-6 py-24 min-h-[80vh]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-zinc-900 sm:text-5xl">
            Book a Discovery Call
          </h1>
          <p className="mt-6 text-xl text-zinc-600 max-w-2xl mx-auto">
            A 20-minute diagnostic. You walk us through the friction. We walk back a blueprint on the first thing worth automating.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1fr_400px]">
          {/* Calendly Embed
              The Calendly event MUST be configured (in Calendly dashboard, NOT in code) with
              exactly these three required questions per the GSD manifesto:
                1. Company size (dropdown: <10 / 10-50 / 50-100 / 100+)
                2. Industry (dropdown — verticals + Other)
                3. "What's the one system you'd most want to fix this quarter?" (open text)
              These questions self-deselect bad fits and pre-load the call with context.
          */}
          <div className="bg-white rounded-2xl border border-zinc-200 shadow-sm overflow-hidden h-[1050px] relative">
            {/* Loading Skeleton */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-zinc-50">
              <div className="h-10 w-10 animate-spin rounded-full border-4 border-zinc-200 border-t-teal-600" />
              <p className="mt-4 font-medium text-zinc-500 animate-pulse">Loading calendar...</p>
            </div>
            
            {/* Calendly Widget */}
            <div
              key={calendlyUrl}
              className="calendly-inline-widget w-full h-full relative z-10"
              data-url={calendlyUrl}
              style={{ minWidth: "320px", height: "100%" }}
            />
            <Script
              src="https://assets.calendly.com/assets/external/widget.js"
              strategy="afterInteractive"
            />
          </div>

          {/* Contact Details */}
          <div className="flex flex-col gap-8">
            <div className="rounded-2xl bg-zinc-50 p-8 border border-zinc-200">
              <h3 className="text-lg font-bold text-zinc-900 mb-4">Direct Contact</h3>

              <div className="space-y-6">
                <a
                  href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-4 group"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal-100 text-teal-700 transition-colors group-hover:bg-teal-700 group-hover:text-white">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-zinc-500">Call or Text</p>
                    <p className="font-bold text-zinc-900">{COMPANY.phone}</p>
                  </div>
                </a>

                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-center gap-4 group"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal-100 text-teal-700 transition-colors group-hover:bg-teal-700 group-hover:text-white">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-zinc-500">Email</p>
                    <p className="font-bold text-zinc-900">{COMPANY.email}</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="rounded-2xl bg-teal-900 p-8 text-white shadow-md">
              <h3 className="text-lg font-bold mb-3 text-white">Who we do NOT work with</h3>
              <ul className="space-y-2 text-teal-100 text-sm list-disc pl-4">
                <li>Companies under 10 employees.</li>
                <li>Requests for one-off &ldquo;AI strategy decks&rdquo;.</li>
                <li>Operations outside the TX/OK/LA corridor.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ContactBookingClient() {
  return (
    <Suspense
      fallback={
        <div className="container mx-auto flex min-h-[80vh] items-center justify-center px-6 py-24">
          <div className="text-zinc-500">Loading the booking form&hellip;</div>
        </div>
      }
    >
      <ContactBookingInner />
    </Suspense>
  );
}
