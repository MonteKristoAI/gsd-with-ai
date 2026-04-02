import { PARTNERS } from "@/data/partners";

export default function PartnersStrip() {
  return (
    <section className="relative border-y border-white/5 bg-background py-12">
      <p className="mb-8 text-center text-sm text-white/40">
        Powered by the tools that power growth
      </p>

      <div
        className="group overflow-hidden"
        aria-label="Partner tools"
      >
        <div className="flex w-max gap-8 animate-marquee group-hover:[animation-play-state:paused]">
          {/* Render twice for seamless loop */}
          {[...PARTNERS, ...PARTNERS].map((partner, i) => (
            <span
              key={`${partner.name}-${i}`}
              className="inline-flex shrink-0 items-center whitespace-nowrap rounded-full border border-white/10 px-6 py-2 font-mono text-sm text-white/40 transition-colors hover:border-white/20 hover:text-white/60"
            >
              {partner.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
