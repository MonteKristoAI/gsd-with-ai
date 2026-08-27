"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export type FaqItem = { q: string; a: string };

// Accessible FAQ accordion. Content renders in initial HTML (SSR) so the copy
// is crawlable; the FAQPage JSON-LD is emitted separately by <FaqSchema>.
export function Faq({ items }: { items: readonly FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="mx-auto max-w-3xl divide-y divide-slate/15 rounded-2xl border border-slate/15 bg-white">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span className="font-semibold text-navy">{item.q}</span>
              {isOpen ? (
                <Minus className="h-5 w-5 shrink-0 text-signal" />
              ) : (
                <Plus className="h-5 w-5 shrink-0 text-slate-muted" />
              )}
            </button>
            {isOpen && <p className="px-6 pb-6 leading-relaxed text-slate">{item.a}</p>}
          </div>
        );
      })}
    </div>
  );
}

// Emits FAQPage schema (Brief 8.2). Order matters - most important Q first.
export function FaqSchema({ items }: { items: readonly FaqItem[] }) {
  const json = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: { "@type": "Answer", text: i.a },
    })),
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />
  );
}
