import Link from "next/link";
import Image from "next/image";
import founderImg from "@/assets/founder-maxine.webp";

export default function MaxineMiniBlock() {
  return (
    <section className="bg-zinc-50 py-20">
      <div className="container mx-auto px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[280px_1fr]">
          <div className="flex justify-center lg:justify-start">
            <Image
              src={founderImg}
              alt="Maxine Aitkenhead, founder of GSD with AI"
              width={280}
              height={280}
              placeholder="blur"
              className="h-[280px] w-[280px] rounded-2xl border border-zinc-200 object-cover shadow-md"
            />
          </div>

          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-700">
              Who builds this
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-zinc-900 sm:text-4xl">
              Maxine Aitkenhead
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-zinc-700">
              20 years building data systems at global energy firms.
            </p>
            <p className="mt-2 text-lg leading-relaxed text-zinc-700">
              Now installing the same logic at 30-person shops in the corridor.
            </p>
            <p className="mt-2 text-lg leading-relaxed text-zinc-700">
              Based in Houston.
            </p>

            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-teal-700 hover:text-teal-800"
            >
              Read the full story <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
