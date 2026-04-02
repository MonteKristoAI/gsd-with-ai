import { cn } from "@/lib/utils";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { CASE_STUDIES } from "@/data/caseStudies";

export default function CaseStudies() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className={cn(
        "reveal relative py-20 lg:py-28",
        isVisible && "visible",
      )}
    >
      {/* Subtle mesh background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-mesh"
      />

      <div className="container relative z-10 mx-auto">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="overline mb-4 inline-flex">Proven Results</span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-white md:text-4xl">
            Real Impact. Measurable Outcomes.
          </h2>
          <p className="mt-4 text-muted-foreground">
            See how our AI-powered solutions have transformed operations and
            driven measurable growth for real businesses.
          </p>
        </div>

        {/* Case study cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CASE_STUDIES.map((study, i) => (
            <div
              key={study.id}
              className={cn(
                "group flex flex-col rounded-xl border-t-2 border-gold bg-card p-6",
                "border-x border-b border-x-white/10 border-b-white/10",
                "transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_8px_32px_hsl(43_85%_52%_/_0.12)]",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
              )}
              style={{
                transitionDelay: `${i * 150}ms`,
              }}
            >
              {/* Category badge */}
              <span className="mb-4 inline-flex w-fit rounded-full bg-teal/10 px-3 py-1 text-xs font-medium text-teal">
                {study.category}
              </span>

              {/* Title */}
              <h3 className="font-heading text-xl font-bold text-white">
                {study.title}
              </h3>

              {/* Description */}
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {study.description}
              </p>

              {/* Metrics row */}
              <div className="mt-6 flex items-end gap-6 border-t border-white/5 pt-5">
                {study.metrics.map((metric) => (
                  <div key={metric.label} className="flex flex-col">
                    <span className="font-mono text-2xl font-bold text-gold">
                      {metric.value}
                    </span>
                    <span className="mt-0.5 text-xs text-muted-foreground">
                      {metric.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
