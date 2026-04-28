import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FeaturedCaseStudy() {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-6">
        <div className="mb-10 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-700">
            Featured case study
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-zinc-900 sm:text-4xl">
            Proof that the playbook works
          </h2>
        </div>

        <Link
          href="/case-studies/wireline-operator"
          className="group grid overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg lg:grid-cols-2"
        >
          {/* Image */}
          <div className="relative h-64 lg:h-auto overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1614624533284-de7ddff85822?w=1200&h=900&fit=crop&q=80"
              alt="Wireline operator working at a wellsite"
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
            <span className="absolute left-6 top-6 inline-flex items-center rounded-full bg-teal-600 px-3 py-1 text-xs font-semibold text-white shadow-sm">
              Field-to-Cash
            </span>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center gap-6 p-10 lg:p-14">
            <h3 className="text-2xl font-extrabold leading-tight text-zinc-900 sm:text-3xl group-hover:text-teal-700">
              How a 40-person wireline operator cut DSO by 14 days and gave its office manager 22 hours back per week
            </h3>
            <p className="text-base leading-relaxed text-zinc-600">
              Field tickets used to live on paper, get driven to the office on Fridays, and re-typed into QuickBooks on Mondays. We wired the field straight to finance. DSO dropped from 48 days to 34, and the manual reconciliation week disappeared.
            </p>
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-teal-600 group-hover:text-teal-700">
              Read the breakdown
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
}
