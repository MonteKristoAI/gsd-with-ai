import Link from "next/link";
import { ArrowRight, DollarSign, FileCheck, Target } from "lucide-react";

export default function SolutionsHub() {
  const skus = [
    {
      title: "Field-to-Cash",
      desc: "Stop chasing tickets. We automate the pipeline from field execution to invoice generation.",
      icon: DollarSign,
      href: "/solutions/field-to-cash",
    },
    {
      title: "Audit-Ready",
      desc: "100% compliance without the weekend scrambles. We digitize and auto-file your safety and training certs.",
      icon: FileCheck,
      href: "/solutions/audit-ready",
    },
    {
      title: "Pipeline Reset",
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
            <sku.icon className="h-10 w-10 text-teal-600 mb-6" />
            <h2 className="text-2xl font-bold text-zinc-900">{sku.title}</h2>
            <p className="mt-4 flex-1 text-zinc-600">{sku.desc}</p>
            <div className="mt-8 flex items-center gap-2 font-semibold text-teal-600 group-hover:text-teal-700">
              See the blueprint
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
