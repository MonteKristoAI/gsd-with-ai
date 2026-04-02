import { PARTNERS } from "@/data/partners";

export default function PartnersStrip() {
  return (
    <section className="bg-[hsl(210_25%_97%)] py-12">
      <div className="container mx-auto px-6">
        <p className="mb-8 text-center text-sm text-[hsl(215_15%_46%)]">
          Trusted tools powering our solutions
        </p>

        {/* Desktop: static flex row */}
        <div className="hidden sm:flex items-center justify-center gap-12">
          {PARTNERS.map((partner, i) => (
            <span key={partner.name} className="flex items-center gap-12">
              <span className="text-lg font-bold text-[hsl(220_25%_14%/0.3)] hover:text-[hsl(220_25%_14%/0.6)] transition-colors cursor-default select-none">
                {partner.name}
              </span>
              {i < PARTNERS.length - 1 && (
                <span className="text-[hsl(214_20%_90%)]" aria-hidden>|</span>
              )}
            </span>
          ))}
        </div>

        {/* Mobile: marquee scroll */}
        <div className="sm:hidden overflow-hidden" aria-label="Partner tools">
          <div className="flex w-max gap-10 animate-marquee">
            {[...PARTNERS, ...PARTNERS].map((partner, i) => (
              <span
                key={`${partner.name}-${i}`}
                className="shrink-0 text-lg font-bold text-[hsl(220_25%_14%/0.3)]"
              >
                {partner.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
