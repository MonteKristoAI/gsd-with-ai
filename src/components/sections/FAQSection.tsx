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
      className="relative py-16 md:py-24 bg-background"
    >
      {/* Header */}
      <div
        className={cn(
          "container mx-auto text-center mb-14 reveal",
          isVisible && "visible",
        )}
      >
        <span className="overline mb-4 block">Common Questions</span>
        <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
          Frequently Asked Questions
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground text-base sm:text-lg leading-relaxed">
          Everything you need to know about working with GSD. Can&rsquo;t find
          what you&rsquo;re looking for? Reach out — we&rsquo;re happy to help.
        </p>
      </div>

      {/* Accordion */}
      <div
        className={cn(
          "container mx-auto max-w-4xl reveal",
          isVisible && "visible",
        )}
      >
        {FAQS.map((faq, i) => {
          const isOpen = openIndex === i;

          return (
            <div
              key={i}
              className={cn(
                "rounded-xl border border-border/60 bg-card px-5 sm:px-6 mb-3 transition-all duration-300",
                isOpen && "border-l-2 border-l-gold",
              )}
            >
              <button
                type="button"
                onClick={() => toggle(i)}
                className="py-5 text-[15px] sm:text-base font-medium text-foreground flex justify-between items-center w-full cursor-pointer text-left"
                aria-expanded={isOpen}
              >
                <span className="pr-4">{faq.q}</span>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300",
                    isOpen && "rotate-180 text-gold",
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
                <p className="text-muted-foreground leading-relaxed pb-5 text-sm sm:text-[15px]">
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
