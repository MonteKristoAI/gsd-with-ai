import Link from "next/link";
import { ArrowRight, DollarSign, FileCheck, Target } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Three SKUs, one playbook. Audit-Ready, Field-to-Cash, Pipeline Reset. Foundations from $25K. 6-week build. For oilfield + industrial-services SMBs in TX/OK/LA.",
  alternates: { canonical: "https://www.getsstuffdone.com/solutions" },
};

export default function SolutionsHub() {
  const skus = [
    {
      title: "Field-to-Cash",
      persona: "For owner-operators reconciling invoices at 9pm",
      outcome: "11 hours back per week",
      price: "From $25K + $5K/mo",
      timeline: "6 weeks",
      desc: "Stop chasing tickets. We automate the pipeline from field execution to invoice generation.",
      icon: DollarSign,
      href: "/solutions/field-to-cash",
    },
    {
      title: "Audit-Ready",
      persona: "For HSE managers tracking certs in Excel",
      outcome: "Pull-it-in-15-minutes audit-readiness",
      price: "From $25K + $5K/mo",
      timeline: "6 weeks",
      desc: "100% compliance without the weekend scrambles. We digitize and auto-file your safety and training certs.",
      icon: FileCheck,
      href: "/solutions/audit-ready",
    },
    {
      title: "Pipeline Reset",
      persona: "For VP of Ops with a pipeline full of blind spots",
      outcome: "Forecast you can commit to",
      price: "From $25K + $5K/mo",
      timeline: "6 weeks",
      desc: "Connect your CRM to the field. Know your margins, track your jobs, stop guessing.",
      icon: Target,
      href: "/solutions/pipeline-reset",
    },
  ];

  return (
    <div className="container mx-auto px-6 py-24 min-h-[80vh]">
      <div className="max-w-3xl mb-16">
        <h1 className="text-4xl font-extrabold text-zinc-900 sm:text-5xl">Our Playbooks</h1>
        <p className="mt-4 text-xl text-zinc-600">
          We don&apos;t do vague &quot;digital transformations&quot;. We install specific, proven operational systems designed for energy services. Three SKUs. One playbook.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {skus.map((sku) => (
          <Link
            key={sku.title}
            href={sku.href}
            className="group flex flex-col rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm transition-all hover:border-teal-500 hover:shadow-md"
          >
            <sku.icon className="h-10 w-10 text-teal-700 mb-6" />
            <h2 className="text-2xl font-bold text-zinc-900">{sku.title}</h2>
            <p className="mt-2 text-sm font-semibold text-teal-700">{sku.outcome}</p>
            <p className="mt-4 flex-1 text-sm text-zinc-600">{sku.persona}</p>
            <div className="mt-6 flex flex-col gap-1 border-t border-zinc-100 pt-4 text-sm font-medium text-zinc-800">
              <div className="flex justify-between">
                <span className="text-zinc-500">Timeline:</span>
                <span>{sku.timeline}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Investment:</span>
                <span>{sku.price}</span>
              </div>
            </div>
            <div className="mt-6 flex items-center gap-2 font-semibold text-teal-700 group-hover:text-teal-800">
              See the details
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
