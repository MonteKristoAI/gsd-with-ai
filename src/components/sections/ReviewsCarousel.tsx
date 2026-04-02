import { useRef, useState, useCallback } from "react"
import { cn } from "@/lib/utils"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { REVIEWS } from "@/data/reviews"

const HEADSHOTS = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&q=80",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&q=80",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&q=80",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&q=80",
  "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop&q=80",
  "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=80&h=80&fit=crop&q=80",
];


export default function ReviewsCarousel() {
  const { ref, isVisible } = useScrollAnimation(0.1)
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScroll = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 4)
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4)
  }, [])

  const scroll = useCallback(
    (direction: "left" | "right") => {
      const el = scrollRef.current
      if (!el) return
      el.scrollBy({
        left: direction === "left" ? -400 : 400,
        behavior: "smooth",
      })
      setTimeout(checkScroll, 350)
    },
    [checkScroll],
  )

  return (
    <section
      ref={ref}
      className={cn("bg-white py-20 lg:py-28", "reveal", isVisible && "visible")}
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(175_72%_38%)]">
            Client Success
          </span>
          <h2 className="text-3xl font-extrabold text-[hsl(220_25%_14%)] md:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-[hsl(215_15%_46%)]">
            Don't just take our word for it — hear from the businesses we've
            helped transform.
          </p>
        </div>

        {/* Carousel wrapper */}
        <div className="relative">
          {/* Left scroll button */}
          <button
            onClick={() => scroll("left")}
            aria-label="Scroll left"
            className={cn(
              "absolute -left-4 top-1/2 z-20 hidden -translate-y-1/2 items-center justify-center rounded-full border border-[hsl(214_20%_90%)] bg-white p-2 shadow-sm transition-all hover:shadow-md lg:flex",
              !canScrollLeft && "pointer-events-none opacity-0",
            )}
          >
            <ChevronLeft className="h-5 w-5 text-[hsl(220_25%_14%)]" />
          </button>

          {/* Right scroll button */}
          <button
            onClick={() => scroll("right")}
            aria-label="Scroll right"
            className={cn(
              "absolute -right-4 top-1/2 z-20 hidden -translate-y-1/2 items-center justify-center rounded-full border border-[hsl(214_20%_90%)] bg-white p-2 shadow-sm transition-all hover:shadow-md lg:flex",
              !canScrollRight && "pointer-events-none opacity-0",
            )}
          >
            <ChevronRight className="h-5 w-5 text-[hsl(220_25%_14%)]" />
          </button>

          {/* Scrollable row */}
          <div
            ref={scrollRef}
            onScroll={checkScroll}
            tabIndex={0}
            role="region"
            aria-label="Customer reviews"
            className="flex gap-6 overflow-x-auto py-2 scrollbar-hide focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-4 rounded-xl"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {REVIEWS.map((review, i) => (
              <article
                key={review.name}
                className={cn(
                  "group shrink-0 w-[380px] rounded-2xl border border-[hsl(214_20%_90%)] bg-white p-6 shadow-sm",
                  "transition-all duration-300 hover:shadow-lg",
                )}
                style={{ scrollSnapAlign: "start" }}
              >
                {/* Stars */}
                <div className="mb-4 flex gap-0.5">
                  {Array.from({ length: review.rating }).map((_, s) => (
                    <Star
                      key={s}
                      className="h-4 w-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="mb-6 text-[15px] leading-relaxed text-[hsl(220_25%_14%)]">
                  &ldquo;{review.text}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <img
                    src={HEADSHOTS[i % HEADSHOTS.length]}
                    alt={review.name}
                    className="h-10 w-10 shrink-0 rounded-full object-cover"
                  />
                  <div className="min-w-0">
                    <p className="truncate font-semibold text-[hsl(220_25%_14%)]">
                      {review.name}
                    </p>
                    <p className="truncate text-sm text-[hsl(215_15%_46%)]">
                      {review.role} · {review.company}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
