import { useState } from "react";
import { cn } from "@/lib/utils";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ChevronDown } from "lucide-react";
import { FAQS } from "@/data/faqs";

export default function FAQSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) =>
    setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <section
      id="faq"
      ref={ref}
      className="bg-white py-20 lg:py-28"
    >
      {/* Header */}
      <div
        className={cn(
          "container mx-auto mb-14 text-center reveal",
          isVisible && "visible",
        )}
      >
        <span className="mb-4 block font-heading text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(175_72%_38%)]">
          FAQ
        </span>
        <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
          Frequently Asked Questions
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground leading-relaxed sm:text-lg">
          Everything you need to know about working with GSD. Can&rsquo;t find
          what you&rsquo;re looking for? Reach out — we&rsquo;re happy to help.
        </p>
      </div>

      {/* Accordion */}
      <div
        className={cn(
          "container mx-auto max-w-3xl reveal",
          isVisible && "visible",
        )}
      >
        {FAQS.map((faq, i) => {
          const isOpen = openIndex === i;

          return (
            <div
              key={i}
              className="border-b border-border"
            >
              <button
                type="button"
                onClick={() => toggle(i)}
                className="flex w-full cursor-pointer items-center justify-between py-5 text-left text-base font-semibold text-foreground"
                aria-expanded={isOpen}
              >
                <span className="pr-4">{faq.q}</span>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 shrink-0 transition-transform duration-300",
                    isOpen
                      ? "rotate-180 text-[hsl(175_72%_38%)]"
                      : "text-muted-foreground",
                  )}
                />
              </button>

              <div
                className="overflow-hidden transition-all duration-300 ease-in-out"
                style={{
                  maxHeight: isOpen ? "500px" : "0px",
                  opacity: isOpen ? 1 : 0,
                }}
              >
                <p className="pb-5 pt-1 text-[15px] leading-relaxed text-muted-foreground">
                  {faq.a}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
