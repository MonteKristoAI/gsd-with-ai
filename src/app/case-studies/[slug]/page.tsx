import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

// Hardcoded data for the template, typically this would be fetched from a CMS
type CaseStudyData = {
  category: string;
  h1: string;
  problem: string[];
  build: string[];
  result: string;
  skuLink: string;
};

const CASE_STUDIES_DATA: Record<string, CaseStudyData> = {
  "wireline-operator": {
    category: "Field-to-Cash",
    h1: "40-person wireline operator cuts DSO by 14 days",
    problem: [
      "The operations team was running 12 trucks across two basins. Field tickets were written on paper, driven to the office on Fridays, and manually entered into QuickBooks on Mondays.",
      "Because of illegible handwriting, missing signatures, and lost tickets, the finance team spent three days a week reconciling data. Days Sales Outstanding (DSO) sat at 48 days, trapping critical operating capital."
    ],
    build: [
      "Deployed a mobile-first ticketing app that works completely offline in the field.",
      "Built an automated sync layer that pushes completed tickets directly to the dispatch system.",
      "Integrated the validated data straight into QuickBooks to automatically generate draft invoices."
    ],
    result: "The new system eliminated manual data entry completely. Field operators spend less time doing paperwork, and invoices go out within 24 hours of job completion. DSO dropped from 48 days to 34 days, returning thousands of dollars in operating capital back to the business.",
    skuLink: "/solutions/field-to-cash"
  },
  "safety-compliance": {
    category: "Audit-Ready",
    h1: "Well servicing company achieves 100% ISNetworld compliance",
    problem: [
      "The HSE manager was spending up to three days every month manually tracking operator certifications across five different field locations. The data lived in a massive, unwieldy Excel spreadsheet that was constantly out of date.",
      "When a major operator ran a surprise compliance audit, the company couldn't produce the required safety documentation in time and lost out on a significant bid. The manual process was a direct threat to revenue."
    ],
    build: [
      "Migrated all certification data from spreadsheets into a structured, cloud-based database.",
      "Automated the flow of operator certs from their existing HRIS directly into ISNetworld.",
      "Set up an automated webhook that sends a text message to operators 30 days before a certification expires."
    ],
    result: "The HSE team no longer spends weekends chasing down paperwork. Compliance is maintained at a strict 100%, and the company can instantly generate audit-ready reports whenever an MSA requires it. They recently secured a new multi-year master service agreement thanks to their perfect safety and compliance record.",
    skuLink: "/solutions/audit-ready"
  },
  "pipeline-visibility": {
    category: "Pipeline Reset",
    h1: "Industrial cleaning firm stops bidding blind",
    problem: [
      "The sales team lived in HubSpot, but the operations team lived in spreadsheets. The two systems never talked to each other. When a job was completed, nobody knew the actual margin until the end of the quarter.",
      "Because they were bidding blind based on estimated costs instead of actual historical costs, they were consistently underpricing complex jobs and overpricing simple ones, losing winnable bids to competitors."
    ],
    build: [
      "Standardized the HubSpot CRM to enforce strict data pipelines for job creation.",
      "Connected HubSpot to their field execution software using an automated data enrichment layer.",
      "Built a real-time dashboard that calculates live job costing and historical margin per client."
    ],
    result: "For the first time, the VP of Operations and the VP of Sales are looking at the exact same numbers. The company now bids with precision, knowing their true historical margins. Win rates on profitable jobs have increased by 22%, and they've stopped taking on work that secretly loses money.",
    skuLink: "/solutions/pipeline-reset"
  }
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const data = CASE_STUDIES_DATA[resolvedParams.slug];
  if (!data) return { title: "Case Study Not Found" };
  return {
    title: data.h1,
    description: data.problem[0],
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const data = CASE_STUDIES_DATA[resolvedParams.slug];

  if (!data) {
    notFound();
  }

  return (
    <div className="container mx-auto px-6 py-24 min-h-[80vh]">
      <div className="max-w-3xl mx-auto">
        <Link href="/case-studies" className="inline-flex items-center text-sm font-semibold text-teal-600 hover:text-teal-700 mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Case Studies
        </Link>
        
        <div className="mb-12">
          <span className="inline-flex items-center rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-700 mb-4">
            {data.category}
          </span>
          <h1 className="text-4xl font-extrabold text-zinc-900 sm:text-5xl leading-tight">
            {data.h1}
          </h1>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-xl font-bold text-zinc-900 uppercase tracking-wide text-zinc-500 mb-4 border-b border-zinc-200 pb-2">
              The Problem
            </h2>
            <div className="space-y-4 text-lg text-zinc-700 leading-relaxed">
              {data.problem.map((p: string, idx: number) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-900 uppercase tracking-wide text-zinc-500 mb-4 border-b border-zinc-200 pb-2">
              The Build
            </h2>
            <ul className="space-y-3 text-lg text-zinc-700 list-disc pl-5 marker:text-teal-600">
              {data.build.map((b: string, idx: number) => (
                <li key={idx} className="pl-2">{b}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-900 uppercase tracking-wide text-zinc-500 mb-4 border-b border-zinc-200 pb-2">
              The Result
            </h2>
            <p className="text-lg text-zinc-700 leading-relaxed font-medium">
              {data.result}
            </p>
          </section>

          <section className="mt-16 rounded-2xl bg-zinc-900 p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Want these same results?</h3>
            <p className="text-zinc-400 mb-8 max-w-lg mx-auto">
              We install specific, proven operational systems designed for energy services. See the blueprint for this exact build.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href={data.skuLink}
                className="inline-flex items-center gap-2 rounded-xl bg-teal-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal-500"
              >
                View the SKU
              </Link>
              <Link 
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/20"
              >
                Book a Call <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
