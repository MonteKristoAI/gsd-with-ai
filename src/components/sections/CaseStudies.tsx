"use client";
import Link from "next/link";

import { cn } from "@/lib/utils"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"
import { CASE_STUDIES } from "@/data/caseStudies"

const CARD_IMAGES = [
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=300&fit=crop&q=80",
  "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=300&fit=crop&q=80",
  "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=300&fit=crop&q=80",
]

const CARD_ALTS = [
  "Analytics dashboard on a monitor",
  "Team meeting around a table",
  "Business planning with documents",
]

export default function CaseStudies() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section
      id="case-studies"
      ref={ref}
      className={cn(
        "relative bg-[hsl(214_20%_97%)] bg-texture-dots bg-radial-gold py-20 lg:py-28",
        "reveal",
        isVisible && "visible",
      )}
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(175_72%_38%)]">
            Operational Scenarios
          </span>
          <h2 className="text-3xl font-extrabold text-[hsl(220_25%_14%)] md:text-4xl">
            What the work actually changes
          </h2>
          <p className="mt-4 text-[hsl(215_15%_46%)]">
            Three composite scenarios drawn from patterns we see in mid-market finance, property, and facilities teams. Click any card to read the full breakdown.
          </p>
        </div>

        {/* Case study cards */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {CASE_STUDIES.map((study, i) => (
            <Link key={study.id}
              href={`/case-studies#${study.id}`}
              className={cn(
                "group flex flex-col overflow-hidden rounded-2xl border border-[hsl(214_20%_90%)] bg-white shadow-sm",
                "transition-all duration-300 hover:-translate-y-1 hover:shadow-lg",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(175_72%_38%/0.4)] focus-visible:ring-offset-2",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
              )}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={CARD_IMAGES[i % CARD_IMAGES.length]}
                  alt={CARD_ALTS[i % CARD_ALTS.length]}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                {/* Category badge */}
                <span className="mb-3 inline-flex w-fit rounded-full bg-[hsl(175_72%_38%)] px-3 py-1 text-xs font-medium text-white">
                  {study.category}
                </span>

                <h3 className="text-xl font-bold text-[hsl(220_25%_14%)]">
                  {study.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-relaxed text-[hsl(215_15%_46%)]">
                  {study.description}
                </p>

                {/* Metrics row */}
                <div className="mt-6 flex items-end gap-6 border-t border-[hsl(214_20%_90%)] pt-5">
                  {study.metrics.map((metric) => (
                    <div key={metric.label} className="flex flex-col">
                      <span className="text-2xl font-extrabold text-[hsl(175_72%_38%)]">
                        {metric.value}
                      </span>
                      <span className="mt-0.5 text-xs text-[hsl(215_15%_46%)]">
                        {metric.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Affordance */}
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-[hsl(175_72%_38%)] opacity-80 transition-opacity group-hover:opacity-100">
                  Read the scenario
                  <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
