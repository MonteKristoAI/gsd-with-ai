import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Activity, BookOpen, MessageCircle, Terminal } from "lucide-react";
import type { Metadata } from "next";
import { RESOURCES as RESOURCE_DATA } from "@/data/resources";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Operational Reality, Systems & Automation Teardowns, Point of View, Field Notes. Named-number breakdowns for oilfield + industrial-services SMBs in TX/OK/LA.",
  alternates: { canonical: "https://www.getsstuffdone.com/resources" },
};

const ICON_MAP: Record<string, typeof Terminal> = {
  "Operational Reality": Activity,
  "Systems & Automation Teardowns": Terminal,
  "Point of View": MessageCircle,
  "Field Notes": BookOpen,
};

const RESOURCES = RESOURCE_DATA.map((r) => ({
  slug: r.slug,
  title: r.title,
  category: r.category,
  description: r.description,
  date: r.date,
  readTime: r.readTime,
  image: r.image,
  imageAlt: r.imageAlt,
  icon: ICON_MAP[r.category] ?? Terminal,
}));

export default function ResourcesIndex() {
  return (
    <div className="container mx-auto px-6 py-24 min-h-[80vh]">
      <div className="max-w-3xl mb-16">
        <h1 className="text-4xl font-extrabold text-zinc-900 sm:text-5xl">
          Resources
        </h1>
        <p className="mt-6 text-xl text-zinc-600 leading-relaxed">
          Operational breakdowns from 20 years of energy data work. Each post names the tools, the hours saved, and the bid-killing patterns we&rsquo;ve seen in the TX/OK/LA corridor.
        </p>
        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-zinc-600">
          <span>20 years building data systems at global energy firms</span>
          <span aria-hidden="true">&middot;</span>
          <span>Foundations from $25K, 6-8 weeks</span>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {RESOURCES.map((resource) => (
          <Link
            key={resource.slug}
            href={`/resources/${resource.slug}`}
            className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:border-teal-600/30 hover:shadow-md"
          >
            <div className="relative h-64 overflow-hidden">
              <Image
                src={resource.image}
                alt={resource.imageAlt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <span className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full bg-zinc-900/80 backdrop-blur-md px-4 py-1.5 text-xs font-semibold text-white shadow-sm">
                <resource.icon className="h-4 w-4" />
                {resource.category}
              </span>
            </div>

            <div className="flex flex-1 flex-col p-8">
              <h2 className="text-2xl font-bold text-zinc-900 group-hover:text-teal-800 transition-colors">
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
                <div className="flex items-center text-sm font-semibold text-teal-700">
                  Read guide <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
