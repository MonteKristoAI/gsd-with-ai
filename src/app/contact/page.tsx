"use client";

import Script from "next/script";
import { Mail, Phone } from "lucide-react";
import { COMPANY } from "@/data/companyInfo";

// export const metadata is not allowed in "use client" component. So I'll just skip metadata here, Next.js will default to the site template.

export default function ContactPage() {
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
          {/* Calendly Embed */}
          <div className="bg-white rounded-2xl border border-zinc-200 shadow-sm overflow-hidden h-[700px] relative">
            {/* Note for Implementation: 
                The actual Calendly event type MUST be configured with exactly three required questions:
                1. What is the friction point?
                2. What systems are currently involved? (e.g., QuickBooks, FieldFX, HubSpot)
                3. Are you the owner/operator or an ops leader?
            */}
            <div 
              className="calendly-inline-widget w-full h-full" 
              data-url="https://calendly.com/maxine-gsd/discovery-call?hide_event_type_details=1&hide_gdpr_banner=1" 
              style={{ minWidth: "320px", height: "100%" }}
            />
            <Script 
              src="https://assets.calendly.com/assets/external/widget.js" 
              strategy="lazyOnload"
            />
          </div>

          {/* Contact Details */}
          <div className="flex flex-col gap-8">
            <div className="rounded-2xl bg-zinc-50 p-8 border border-zinc-200">
              <h3 className="text-lg font-bold text-zinc-900 mb-4">Direct Contact</h3>
              
              <div className="space-y-6">
                <a 
                  href={`tel:${COMPANY.phone.replace(/\\s/g, "")}`} 
                  className="flex items-center gap-4 group"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal-100 text-teal-600 transition-colors group-hover:bg-teal-600 group-hover:text-white">
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
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal-100 text-teal-600 transition-colors group-hover:bg-teal-600 group-hover:text-white">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-zinc-500">Email</p>
                    <p className="font-bold text-zinc-900">{COMPANY.email}</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="rounded-2xl bg-teal-900 p-8 text-white">
              <h3 className="text-lg font-bold mb-3">Who we do NOT work with</h3>
              <ul className="space-y-2 text-teal-100 text-sm list-disc pl-4">
                <li>Companies under 10 employees.</li>
                <li>Requests for one-off "AI strategy decks".</li>
                <li>Operations outside the TX/OK/LA corridor.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
