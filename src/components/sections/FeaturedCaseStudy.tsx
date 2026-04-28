import Link from "next/link";
import { ArrowRight, Clock, TrendingDown, FileCheck } from "lucide-react";

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
          {/* Branded stat panel — manifesto: empty better than fake stock photos.
              Replace with a real client photo when one is available. */}
          <div className="relative flex flex-col justify-center gap-6 bg-[#041122] p-10 lg:p-14">
            <span className="inline-flex w-fit items-center rounded-full bg-teal-700 px-3 py-1 text-xs font-semibold text-white shadow-sm">
              Field-to-Cash · 40-person wireline operator
            </span>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <div className="text-3xl font-extrabold text-teal-400">14</div>
                <div className="mt-1 text-xs font-medium uppercase tracking-wider text-zinc-400">days off DSO</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold text-teal-400">22</div>
                <div className="mt-1 text-xs font-medium uppercase tracking-wider text-zinc-400">hrs/wk back</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold text-teal-400">&lt;24h</div>
                <div className="mt-1 text-xs font-medium uppercase tracking-wider text-zinc-400">job to invoice</div>
              </div>
            </div>
            <div className="flex items-center gap-3 text-sm text-zinc-400">
              <Clock className="h-4 w-4" /> 6-week build
              <span aria-hidden="true">·</span>
              <FileCheck className="h-4 w-4" /> $25K
              <span aria-hidden="true">·</span>
              <TrendingDown className="h-4 w-4" /> live
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center gap-6 p-10 lg:p-14">
            <h3 className="text-2xl font-extrabold leading-tight text-zinc-900 sm:text-3xl group-hover:text-teal-800">
              How a 40-person wireline operator cut DSO by 14 days and gave its office manager 22 hours back per week
            </h3>
            <p className="text-base leading-relaxed text-zinc-600">
              Field tickets used to live on paper, get driven to the office on Fridays, and re-typed into QuickBooks on Mondays. We wired the field straight to finance. DSO dropped from 48 days to 34, and the manual reconciliation week disappeared.
            </p>
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-teal-700 group-hover:text-teal-800">
              Read the breakdown
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
}
