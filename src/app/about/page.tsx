import AboutFounder from "@/components/sections/AboutFounder";
import type { Metadata } from "next";
import Script from "next/script";
import { COMPANY } from "@/data/companyInfo";

export const metadata: Metadata = {
  title: "About",
  description:
    "20 years building data systems for some of the world's most demanding operators. Now applying the same playbook to 30-person shops in the TX/OK/LA corridor.",
  alternates: { canonical: "https://www.getsstuffdone.com/about" },
};

export default function AboutPage() {
  return (
    <div className="min-h-[80vh] flex flex-col">
      {/* Top Section with subtle background */}
      <div className="relative overflow-hidden bg-section-alt bg-texture-dots border-b border-zinc-200">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/50 pointer-events-none" />
        <div className="container relative mx-auto px-6 pt-24 pb-20">
      <Script id="person-schema" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Maxine Aitkenhead",
            "jobTitle": "Founder",
            "worksFor": {
              "@type": "Organization",
              "name": "GSD with AI"
            },
            "url": "https://www.getsstuffdone.com/about"
          }
        `}
      </Script>
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-extrabold text-zinc-900 sm:text-5xl">
          About GSD with AI
        </h1>
        <p className="mt-6 text-xl text-zinc-600 leading-relaxed">
          {COMPANY.founder.positioningLine}
        </p>
      </div>

      {/* Why I started GSD */}
      <section className="max-w-3xl mx-auto mb-20">
        <h2 className="text-2xl font-extrabold text-zinc-900 sm:text-3xl">Why I started GSD</h2>
        <div className="mt-6 space-y-5 text-lg leading-relaxed text-zinc-700">
          {COMPANY.founder.bioParagraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>
      </div>
      </div>

      {/* Bottom Section */}
      <div className="container mx-auto px-6 py-20">

      <div className="grid gap-12 lg:grid-cols-2 mt-16">
        <div>
          <h2 className="text-2xl font-bold text-zinc-900">Our approach</h2>
          <p className="mt-4 text-zinc-600">
            We do not believe in massive digital transformations that take 2 years and end up confusing your field workers. 
            We believe in specific, high-impact systems installed in 6 weeks that solve exactly one operational bottleneck at a time.
          </p>
          <ul className="mt-6 space-y-4 text-zinc-700">
            <li className="flex gap-2 border-l-2 border-teal-600 pl-4">
              <strong>CTO-level architecture:</strong> 20 years of enterprise data experience, applied to your SMB.
            </li>
            <li className="flex gap-2 border-l-2 border-teal-600 pl-4">
              <strong>Mobile-first execution:</strong> If it doesn&apos;t work offline on a cracked screen with gloves on, we don&apos;t ship it.
            </li>
            <li className="flex gap-2 border-l-2 border-teal-600 pl-4">
              <strong>Transparent pricing:</strong> Flat fees for implementations. No hourly billing surprises.
            </li>
          </ul>
        </div>
        
        <div>
          <div className="rounded-2xl bg-zinc-50 p-8 border border-zinc-200">
            <h3 className="text-xl font-bold text-zinc-900">Pricing Bands</h3>
            <p className="mt-2 text-zinc-600">We don&apos;t do &quot;$500/hr consulting&quot;. We install fixed-scope products.</p>
            
            <div className="mt-6 space-y-4">
              <div className="flex justify-between items-center border-b border-zinc-200 pb-4">
                <span className="font-semibold text-zinc-900">Foundations Engagement</span>
                <span className="font-bold text-teal-700">From $25K</span>
              </div>
              <div className="flex justify-between items-center border-b border-zinc-200 pb-4">
                <span className="font-semibold text-zinc-900">Core Systems Overhaul</span>
                <span className="font-bold text-teal-700">From $45K</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-semibold text-zinc-900">Operating Retainer</span>
                <span className="font-bold text-teal-700">From $5K/mo</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="max-w-3xl mx-auto rounded-2xl bg-red-50 p-8 border border-red-100 mt-16">
        <h3 className="text-2xl font-bold text-red-900 text-center">Who we do NOT work with</h3>
        <p className="mt-3 text-red-800 font-medium text-center">Saying who we aren&apos;t for is a credibility move.</p>
        <div className="mt-6 flex justify-center">
          <ul className="space-y-3 text-red-800/90 list-disc pl-4 text-left">
            <li>Companies under 10 employees.</li>
            <li>Requests for one-off &quot;AI strategy decks&quot; or consulting reports.</li>
            <li>Operations outside the TX/OK/LA corridor.</li>
          </ul>
        </div>
      </div>

      <div className="mt-24">
        <AboutFounder />
      </div>
      </div>
    </div>
  );
}
