import Link from "next/link";
import { ArrowRight, BarChart3, Clock, ShieldCheck } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies",
};

const CASE_STUDIES = [
  {
    slug: "wireline-operator",
    title: "40-person wireline operator cuts DSO by 14 days",
    category: "Field-to-Cash",
    problem: "Field tickets were written on paper, driven to the office on Fridays, and manually entered into QuickBooks on Mondays.",
    build: "We deployed a mobile-first ticketing app that syncs instantly to dispatch and finance.",
    metrics: [
      { label: "DSO Reduction", value: "14 Days" },
      { label: "Admin Time Saved", value: "22 hrs/wk" },
    ],
    icon: Clock,
  },
  {
    slug: "safety-compliance",
    title: "Well servicing company achieves 100% ISNetworld compliance",
    category: "Audit-Ready",
    problem: "HSE manager spent 3 days a month tracking down expired operator certs across 5 different field locations.",
    build: "We automated cert tracking from their HRIS directly into ISNetworld with 30-day proactive text alerts.",
    metrics: [
      { label: "Compliance Rate", value: "100%" },
      { label: "HSE Reporting Time", value: "-85%" },
    ],
    icon: ShieldCheck,
  },
  {
    slug: "pipeline-visibility",
    title: "Industrial cleaning firm stops bidding blind",
    category: "Pipeline Reset",
    problem: "Sales team lived in HubSpot, operations lived in spreadsheets, and nobody knew the actual margin on completed jobs.",
    build: "We connected HubSpot to field operations to calculate live job costing and historical margin per client.",
    metrics: [
      { label: "Margin Accuracy", value: "98%" },
      { label: "Pipeline Visibility", value: "Real-time" },
    ],
    icon: BarChart3,
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
          We don't build tech for the sake of tech. We build operational systems that change how the business runs. Here is what that looks like in practice.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {CASE_STUDIES.map((study) => (
          <Link
            key={study.slug}
            href={`/case-studies/${study.slug}`}
            className="group flex flex-col rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:border-teal-600/30 hover:shadow-md"
          >
            <div className="mb-6 flex items-center justify-between">
              <span className="inline-flex items-center rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-700">
                {study.category}
              </span>
              <study.icon className="h-5 w-5 text-zinc-400" />
            </div>

            <h2 className="text-2xl font-bold text-zinc-900 group-hover:text-teal-700 transition-colors">
              {study.title}
            </h2>

            <div className="mt-6 space-y-4 flex-1">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-500">The Problem</h3>
                <p className="mt-1 text-sm text-zinc-700">{study.problem}</p>
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-500">The Build</h3>
                <p className="mt-1 text-sm text-zinc-700">{study.build}</p>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 border-t border-zinc-100 pt-6">
              {study.metrics.map((metric, idx) => (
                <div key={idx}>
                  <div className="text-2xl font-extrabold text-teal-600">{metric.value}</div>
                  <div className="text-xs font-medium text-zinc-500 mt-1">{metric.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center text-sm font-semibold text-teal-600">
              Read the case study <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
