import Link from "next/link";
import { ArrowRight, BookOpen, Terminal } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources",
};

const RESOURCES = [
  {
    slug: "how-to-automate-isn-compliance-sync",
    title: "How to automate ISNetworld compliance sync from your HRIS",
    category: "Technical Guide",
    description: "A step-by-step breakdown of the API endpoints, webhooks, and data transformation layer required to keep field operator certifications synced with ISNetworld automatically.",
    date: "2026-04-12",
    readTime: "8 min read",
    icon: Terminal,
  },
  {
    slug: "field-ticketing-offline-first-architecture",
    title: "Building offline-first field ticketing for remote pad sites",
    category: "Architecture",
    description: "Why standard web apps fail when cell service drops, and how to build local-first PWA architectures that sync state when operators drive back into service.",
    date: "2026-03-28",
    readTime: "12 min read",
    icon: BookOpen,
  },
  {
    slug: "hubspot-job-costing-integration",
    title: "Wiring HubSpot to your ERP for live job costing",
    category: "Technical Guide",
    description: "HubSpot is built for marketers, not operations. Here is the exact custom object architecture needed to track operational margins against sales projections.",
    date: "2026-03-10",
    readTime: "6 min read",
    icon: Terminal,
  }
];

export default function ResourcesIndex() {
  return (
    <div className="container mx-auto px-6 py-24 min-h-[80vh]">
      <div className="max-w-3xl mb-16">
        <h1 className="text-4xl font-extrabold text-zinc-900 sm:text-5xl">
          Resources
        </h1>
        <p className="mt-6 text-xl text-zinc-600 leading-relaxed">
          Technical breakdowns and architectural guides for building operational systems in the oilfield and industrial services sector. No fluff.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {RESOURCES.map((resource) => (
          <Link
            key={resource.slug}
            href={`/resources/${resource.slug}`}
            className="group flex flex-col rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:border-teal-600/30 hover:shadow-md"
          >
            <div className="mb-4 flex items-center justify-between">
              <span className="inline-flex items-center rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-700">
                {resource.category}
              </span>
              <resource.icon className="h-5 w-5 text-zinc-400" />
            </div>

            <h2 className="text-2xl font-bold text-zinc-900 group-hover:text-teal-700 transition-colors">
              {resource.title}
            </h2>

            <p className="mt-4 text-zinc-600 flex-1 leading-relaxed">
              {resource.description}
            </p>

            <div className="mt-8 flex items-center justify-between border-t border-zinc-100 pt-6">
              <div className="flex items-center gap-4 text-sm text-zinc-500 font-medium">
                <time dateTime={resource.date}>
                  {new Date(resource.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </time>
                <span>&bull;</span>
                <span>{resource.readTime}</span>
              </div>
              <div className="flex items-center text-sm font-semibold text-teal-600">
                Read guide <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
