import { useRef, useState, useCallback } from "react";
import { cn } from "@/lib/utils";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Star,
  ChevronLeft,
  ChevronRight,
  MessageSquarePlus,
} from "lucide-react";
import { REVIEWS } from "@/data/reviews";

const AVATAR_COLORS = [
  "bg-gold/20 text-gold",
  "bg-teal/20 text-teal",
  "bg-blue-500/20 text-blue-400",
  "bg-purple-500/20 text-purple-400",
  "bg-rose-500/20 text-rose-400",
  "bg-amber-500/20 text-amber-400",
  "bg-emerald-500/20 text-emerald-400",
  "bg-cyan-500/20 text-cyan-400",
];

const CATEGORY_LABELS = [
  "Operations",
  "Sales & CRM",
  "Cost Savings",
  "AI Strategy",
  "Growth",
  "IT Infrastructure",
  "Analytics",
  "Automation",
];

export default function ReviewsCarousel() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  }, []);

  const scroll = useCallback(
    (direction: "left" | "right") => {
      const el = scrollRef.current;
      if (!el) return;
      const amount = 380;
      el.scrollBy({
        left: direction === "left" ? -amount : amount,
        behavior: "smooth",
      });
      setTimeout(checkScroll, 350);
    },
    [checkScroll],
  );

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-20 lg:py-28"
      style={{
        background:
          "linear-gradient(170deg, hsl(220 20% 8%), hsl(220 18% 6%))",
      }}
    >
      {/* Subtle radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 900px 500px at 50% 0%, hsl(43 85% 52% / 0.04) 0%, transparent 70%)",
        }}
      />

      <div
        className={cn(
          "container relative z-10 mx-auto",
          "reveal",
          isVisible && "visible",
        )}
      >
        {/* Header */}
        <div className="mb-14 text-center">
          <span className="overline mb-4">Client Success Stories</span>
          <h2 className="font-heading text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            What Our Clients Say
          </h2>

          {/* Rating summary card */}
          <div className="mx-auto mt-8 inline-flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 px-6 py-3 backdrop-blur-sm">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="h-5 w-5 fill-gold text-gold"
                />
              ))}
            </div>
            <span className="text-2xl font-bold text-white">5.0</span>
            <span className="text-sm text-white/50">
              from {REVIEWS.length}+ reviews
            </span>
          </div>
        </div>

        {/* Carousel wrapper */}
        <div className="relative">
          {/* Scroll buttons — desktop only */}
          <button
            onClick={() => scroll("left")}
            aria-label="Scroll left"
            className={cn(
              "absolute -left-4 top-1/2 z-20 hidden -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-background/80 p-2 backdrop-blur transition-all hover:border-gold/40 hover:bg-white/10 lg:flex",
              !canScrollLeft && "pointer-events-none opacity-0",
            )}
          >
            <ChevronLeft className="h-5 w-5 text-white" />
          </button>
          <button
            onClick={() => scroll("right")}
            aria-label="Scroll right"
            className={cn(
              "absolute -right-4 top-1/2 z-20 hidden -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-background/80 p-2 backdrop-blur transition-all hover:border-gold/40 hover:bg-white/10 lg:flex",
              !canScrollRight && "pointer-events-none opacity-0",
            )}
          >
            <ChevronRight className="h-5 w-5 text-white" />
          </button>

          {/* Fade edges */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-0 top-0 z-10 h-full w-12"
            style={{
              background:
                "linear-gradient(to right, hsl(220 20% 7%), transparent)",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute right-0 top-0 z-10 h-full w-12"
            style={{
              background:
                "linear-gradient(to left, hsl(220 20% 7%), transparent)",
            }}
          />

          {/* Scrollable row */}
          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex gap-6 overflow-x-auto px-2 py-2 scrollbar-hide"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {REVIEWS.map((review, i) => (
              <article
                key={review.name}
                className={cn(
                  "glass group shrink-0 w-[360px] rounded-2xl p-6",
                  "transition-all duration-300 hover:shadow-lg hover:shadow-gold/5 hover:-translate-y-1",
                  "opacity-0 animate-fade-up",
                )}
                style={{
                  scrollSnapAlign: "start",
                  animationDelay: `${200 + i * 100}ms`,
                  animationFillMode: "forwards",
                }}
              >
                {/* Author */}
                <div className="mb-4 flex items-center gap-3">
                  <div
                    className={cn(
                      "flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-sm font-bold",
                      AVATAR_COLORS[i % AVATAR_COLORS.length],
                    )}
                  >
                    {review.avatar}
                  </div>
                  <div className="min-w-0">
                    <p className="truncate font-semibold text-white">
                      {review.name}
                    </p>
                    <p className="truncate text-sm text-white/50">
                      {review.role} · {review.company}
                    </p>
                  </div>
                </div>

                {/* Stars */}
                <div className="mb-3 flex gap-0.5">
                  {Array.from({ length: review.rating }).map((_, s) => (
                    <Star
                      key={s}
                      className="h-4 w-4 fill-gold text-gold"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="mb-4 text-sm leading-relaxed text-foreground/80">
                  &ldquo;{review.text}&rdquo;
                </p>

                {/* Category badge */}
                <span className="inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/50">
                  {CATEGORY_LABELS[i % CATEGORY_LABELS.length]}
                </span>
              </article>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="#contact"
            className={cn(
              "inline-flex items-center gap-2 rounded-lg border border-gold/30 px-6 py-3 font-heading text-sm font-semibold text-gold",
              "transition-all hover:border-gold hover:bg-gold/10",
            )}
          >
            <MessageSquarePlus className="h-4 w-4" />
            Share Your Experience
          </a>
        </div>
      </div>
    </section>
  );
}
