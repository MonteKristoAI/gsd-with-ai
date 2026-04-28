import Link from "next/link";
import { ArrowRight, FileDown } from "lucide-react";

export default function HomepageFinalCTA() {
  return (
    <section className="bg-zinc-900 py-24 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="mx-auto max-w-3xl text-3xl font-extrabold leading-tight sm:text-4xl">
          Book a 20-minute call. Walk away with a blueprint, not a sales pitch.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base text-zinc-300">
          You walk us through the friction. We walk back the first thing worth wiring.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-xl bg-teal-600 px-8 py-4 text-sm font-semibold text-white shadow-[0_4px_14px_rgb(13_148_136/0.4)] transition-all hover:bg-teal-500 hover:shadow-[0_8px_25px_rgb(13_148_136/0.5)]"
          >
            Book a 20-minute call
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <a
            href="/first-14-days.pdf"
            className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-800 px-6 py-4 text-sm font-semibold text-zinc-200 transition-colors hover:border-teal-500 hover:text-white"
          >
            <FileDown className="h-4 w-4" />
            Not ready to call? Read what we&rsquo;d fix in your first 14 days
          </a>
        </div>
      </div>
    </section>
  );
}
