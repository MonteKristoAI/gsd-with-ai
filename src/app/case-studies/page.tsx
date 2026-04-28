import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Three engagements, three named outcomes. How GSD with AI shipped Field-to-Cash, Audit-Ready, and Pipeline Reset systems for oilfield + industrial-services SMBs in the TX/OK/LA corridor.",
  alternates: { canonical: "https://www.getsstuffdone.com/case-studies" },
};

const CASE_STUDIES = [
  {
    slug: "wireline-operator",
    title: "40-person wireline operator cuts DSO by 14 days",
    category: "Field-to-Cash",
    industry: "Wireline · 40 employees · TX/OK basins",
    summary:
      "Field tickets used to live on paper, get driven to the office Fridays, and re-typed into QuickBooks Mondays. We wired the field straight to finance.",
    metrics: [
      { label: "DSO Reduction", value: "14 days" },
      { label: "Admin Time Returned", value: "22 hrs/wk" },
    ],
    image:
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=900&h=600&fit=crop&q=80",
    imageAlt: "Oilfield equipment at a remote wellsite",
  },
  {
    slug: "safety-compliance",
    title: "Well servicing company achieves 100% ISNetworld compliance",
    category: "Audit-Ready",
    industry: "Well servicing · 60 employees · OK",
    summary:
      "HSE manager was burning 3 days a month chasing expired operator certs across 5 locations. We automated the ISN sync and gave the team an instant audit dashboard.",
    metrics: [
      { label: "Compliance Rate", value: "100%" },
      { label: "HSE Reporting Time", value: "-85%" },
    ],
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=900&h=600&fit=crop&q=80",
    imageAlt: "Safety inspector reviewing documentation on a tablet",
  },
  {
    slug: "pipeline-visibility",
    title: "Industrial cleaning firm stops bidding blind",
    category: "Pipeline Reset",
    industry: "Industrial cleaning · 75 employees · LA",
    summary:
      "Sales lived in HubSpot, ops lived in spreadsheets, nobody knew real margin until quarter-end. We wired the two and gave them live job-costing.",
    metrics: [
      { label: "Win Rate Lift", value: "+22%" },
      { label: "Margin Accuracy", value: "98%" },
    ],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=600&fit=crop&q=80",
    imageAlt: "Operations dashboard showing real-time job costing data",
  },
];

export default function CaseStudiesIndex() {
  return (
    <div className="container mx-auto px-6 py-24 min-h-[80vh]">
      <div className="max-w-3xl mb-16">
        <h1 className="text-4xl font-extrabold text-zinc-900 sm:text-5xl">
          Case Studies
        </h1>
        <p className="mt-6 text-xl text-zinc-600 leading-relaxed">
          We don&rsquo;t build tech for the sake of tech. We build operational systems that change how the business runs.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4">
            <div className="text-2xl font-extrabold text-teal-700">14 days</div>
            <div className="mt-1 text-xs font-medium text-zinc-600">Off DSO at a 40-person wireline operator</div>
          </div>
          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4">
            <div className="text-2xl font-extrabold text-teal-700">100%</div>
            <div className="mt-1 text-xs font-medium text-zinc-600">ISNetworld compliance held at a well servicing co.</div>
          </div>
          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4">
            <div className="text-2xl font-extrabold text-teal-700">+22%</div>
            <div className="mt-1 text-xs font-medium text-zinc-600">Win rate on profitable jobs at an industrial cleaner</div>
          </div>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {CASE_STUDIES.map((study) => (
          <Link
            key={study.slug}
            href={`/case-studies/${study.slug}`}
            className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:border-teal-600/30 hover:shadow-md"
          >
            <div className="relative h-48 overflow-hidden">
              <Image
                src={study.image}
                alt={study.imageAlt}
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <span className="absolute left-4 top-4 inline-flex items-center rounded-full bg-teal-700 px-3 py-1 text-xs font-semibold text-white shadow-sm">
                {study.category}
              </span>
            </div>

            <div className="flex flex-1 flex-col p-7">
              <span className="text-xs font-medium text-zinc-500">{study.industry}</span>

              <h2 className="mt-3 text-xl font-bold text-zinc-900 group-hover:text-teal-800 transition-colors">
                {study.title}
              </h2>

              <p className="mt-4 flex-1 text-sm leading-relaxed text-zinc-600">{study.summary}</p>

              <div className="mt-6 grid grid-cols-2 gap-4 border-t border-zinc-100 pt-5">
                {study.metrics.map((metric) => (
                  <div key={metric.label}>
                    <div className="text-2xl font-extrabold text-teal-700">{metric.value}</div>
                    <div className="mt-1 text-xs font-medium text-zinc-500">{metric.label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-center text-sm font-semibold text-teal-700">
                Read the breakdown
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
