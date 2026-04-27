import { useRef, useState, useCallback } from "react"
import { cn } from "@/lib/utils"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"
import { Star, ChevronLeft, ChevronRight, MessageSquarePlus, X } from "lucide-react"
import { REVIEWS } from "@/data/reviews"
import { COMPANY } from "@/data/companyInfo"

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
  const [reviewOpen, setReviewOpen] = useState(false)

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
      className={cn("relative bg-white bg-cool-gradient bg-texture-dots py-20 lg:py-28", "reveal", isVisible && "visible")}
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <img src="https://images.unsplash.com/photo-1552581234-26160f608093?w=1920&h=1080&fit=crop&q=80" alt="" className="h-full w-full object-cover opacity-[0.04]" />
      </div>
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
            Read the work in the voice of the operators who saw it change their Mondays.
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
                  "transition-all duration-300 hover:-translate-y-1 hover:shadow-lg",
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

        {/* Leave a Review CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={() => setReviewOpen(true)}
            className="inline-flex items-center gap-2 rounded-xl border border-[hsl(175_72%_38%/0.3)] bg-white px-6 py-3 text-sm font-semibold text-[hsl(175_72%_38%)] shadow-sm transition-all hover:bg-[hsl(175_72%_38%)] hover:text-white hover:shadow-[0_4px_14px_hsl(175_72%_38%/0.3)]"
          >
            <MessageSquarePlus className="h-4 w-4" />
            Share Your Experience
          </button>
        </div>
      </div>

      {/* Review Modal */}
      <ReviewModal open={reviewOpen} onClose={() => setReviewOpen(false)} />
    </section>
  )
}

/* ---------------------------------------------------------------- */
/*  Review Modal                                                     */
/*                                                                   */
/*  Rating gate:                                                     */
/*    rating >= 4 AND COMPANY.googleReviews is set                   */
/*       -> open the direct Google Business Profile review URL      */
/*          in a new tab, then show a short thank-you.               */
/*    any other case (low rating, or GBP URL not yet configured)    */
/*       -> route the rating into the internal feedback form that   */
/*          emails info@getsstuffdone.com.                          */
/*                                                                   */
/*  Never redirect to a Google SEARCH query. That surfaces           */
/*  unrelated companies with the same name and can include hostile  */
/*  results, which was the root cause Maxine flagged in the PDF.   */
/* ---------------------------------------------------------------- */

const FEEDBACK_CATEGORIES = [
  "Communication",
  "Project delivery",
  "Technical quality",
  "Timeliness",
  "Value for money",
  "Support",
  "Other",
];

function ReviewModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [step, setStep] = useState<"rating" | "feedback" | "thanks">("rating");
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [email, setEmail] = useState("");
  const [selectedCats, setSelectedCats] = useState<string[]>([]);
  const [improvement, setImprovement] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  if (!open) return null;

  const reset = () => {
    setStep("rating"); setRating(0); setHover(0); setEmail("");
    setSelectedCats([]); setImprovement(""); setMessage(""); setSubmitting(false);
  };
  const handleClose = () => { reset(); onClose(); };

  const handleRatingSubmit = () => {
    const gbpUrl = COMPANY.googleReviews?.trim();
    const isPositiveRating = rating >= 4;

    // Positive rating + configured GBP URL -> open the real review page.
    // Anything else -> internal form so we never lose the signal.
    if (isPositiveRating && gbpUrl) {
      window.open(gbpUrl, "_blank", "noopener,noreferrer");
      setStep("thanks");
      setTimeout(handleClose, 2500);
      return;
    }

    setStep("feedback");
  };

  const toggleCat = (cat: string) => {
    setSelectedCats((prev) => prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]);
  };

  const handleFeedbackSubmit = async () => {
    if (submitting) return;
    setSubmitting(true);
    try {
      await fetch(COMPANY.webhooks.contact, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "review",
          rating,
          email,
          categories: selectedCats,
          improvement,
          message,
          subject: `[GSD Review] ${rating} star from ${email || "anonymous"}`,
        }),
      });
    } catch (err) {
      console.error("[GSD] Review webhook failed:", err);
    }
    setStep("thanks");
    setTimeout(handleClose, 2500);
  };

  const isPositive = rating >= 4;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm p-4" onClick={handleClose}>
      <div
        className="relative w-full max-w-md rounded-2xl border border-[hsl(214_20%_90%)] bg-white p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => { if (e.key === "Escape") handleClose(); }}
      >
        {/* Close button */}
        <button onClick={handleClose} className="absolute right-4 top-4 p-1.5 text-[hsl(215_15%_60%)] hover:text-[hsl(220_25%_14%)] transition-colors">
          <X className="h-5 w-5" />
        </button>

        {/* Step: Rating */}
        {step === "rating" && (
          <div className="text-center">
            <h3 className="text-xl font-bold text-[hsl(220_25%_14%)]">Rate Your Experience</h3>
            <p className="mt-2 text-sm text-[hsl(215_15%_46%)]">How was your experience working with GSD?</p>
            <div className="mt-6 flex justify-center gap-1.5">
              {[1, 2, 3, 4, 5].map((s) => (
                <button key={s} onMouseEnter={() => setHover(s)} onMouseLeave={() => setHover(0)} onClick={() => setRating(s)}>
                  <Star className={cn("h-10 w-10 transition-colors", s <= (hover || rating) ? "fill-amber-400 text-amber-400" : "text-[hsl(214_20%_88%)]")} />
                </button>
              ))}
            </div>
            <button
              onClick={handleRatingSubmit}
              disabled={rating === 0}
              className={cn(
                "mt-8 w-full rounded-xl py-3 text-sm font-semibold transition-all",
                rating === 0
                  ? "bg-[hsl(214_20%_92%)] text-[hsl(215_15%_60%)] cursor-not-allowed"
                  : "bg-[hsl(175_72%_38%)] text-white shadow-sm hover:brightness-110"
              )}
            >
              {rating === 0 ? "Select a Rating" : "Continue"}
            </button>
          </div>
        )}

        {/* Step: Feedback (all ratings) */}
        {step === "feedback" && (
          <div>
            <h3 className="text-xl font-bold text-[hsl(220_25%_14%)]">
              {isPositive ? "Thanks. Tell us what worked." : "Sorry about that. Tell us what went wrong."}
            </h3>
            <p className="mt-2 text-sm text-[hsl(215_15%_46%)]">
              {isPositive
                ? "Your note lands in Maxine's inbox directly. We use what you share to improve the engagement for the next client."
                : "Your note lands in Maxine's inbox directly. We read every one and respond within one business day."}
            </p>

            <div className="mt-5">
              <label htmlFor="rev-email" className="mb-1.5 block text-sm font-medium text-[hsl(220_25%_14%)]">
                Your email <span className="text-[hsl(215_15%_62%)]">(optional, only if you'd like a reply)</span>
              </label>
              <input
                id="rev-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="w-full rounded-lg border border-[hsl(214_20%_90%)] px-4 py-2.5 text-sm text-[hsl(220_25%_14%)] placeholder:text-[hsl(215_15%_70%)] focus:border-[hsl(175_72%_38%)] focus:outline-none focus:ring-2 focus:ring-[hsl(175_72%_38%/0.2)]"
              />
            </div>

            <div className="mt-4">
              <p className="mb-2 text-sm font-medium text-[hsl(220_25%_14%)]">
                {isPositive ? "What stood out?" : "What could we improve?"}
              </p>
              <div className="flex flex-wrap gap-2">
                {FEEDBACK_CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => toggleCat(cat)}
                    className={cn(
                      "rounded-full border px-4 py-1.5 text-sm transition-all",
                      selectedCats.includes(cat)
                        ? "border-[hsl(175_72%_38%)] bg-[hsl(175_72%_38%/0.08)] text-[hsl(175_72%_38%)] font-medium"
                        : "border-[hsl(214_20%_90%)] text-[hsl(215_15%_46%)] hover:border-[hsl(175_72%_38%/0.4)]"
                    )}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-4">
              <label className="mb-1.5 block text-sm font-medium text-[hsl(220_25%_14%)]">
                {isPositive ? "What specifically worked for your team?" : "How can we do better?"}
              </label>
              <input
                value={improvement}
                onChange={(e) => setImprovement(e.target.value)}
                placeholder={isPositive ? "One sentence is fine" : "One sentence is fine"}
                className="w-full rounded-lg border border-[hsl(214_20%_90%)] px-4 py-2.5 text-sm text-[hsl(220_25%_14%)] placeholder:text-[hsl(215_15%_70%)] focus:border-[hsl(175_72%_38%)] focus:outline-none focus:ring-2 focus:ring-[hsl(175_72%_38%/0.2)]"
              />
            </div>

            <div className="mt-4">
              <label className="mb-1.5 block text-sm font-medium text-[hsl(220_25%_14%)]">Anything else</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Optional context. Project scope, team size, the specific outcome you saw."
                rows={3}
                className="w-full rounded-lg border border-[hsl(214_20%_90%)] px-4 py-2.5 text-sm text-[hsl(220_25%_14%)] placeholder:text-[hsl(215_15%_70%)] focus:border-[hsl(175_72%_38%)] focus:outline-none focus:ring-2 focus:ring-[hsl(175_72%_38%/0.2)] resize-none"
              />
            </div>

            <button
              onClick={handleFeedbackSubmit}
              disabled={submitting}
              className={cn(
                "mt-6 w-full rounded-xl py-3 text-sm font-semibold transition-all",
                submitting
                  ? "bg-[hsl(175_72%_38%/0.6)] text-white cursor-wait"
                  : "bg-[hsl(175_72%_38%)] text-white shadow-sm hover:brightness-110"
              )}
            >
              {submitting ? "Sending" : "Send to Maxine"}
            </button>
          </div>
        )}

        {/* Step: Thanks */}
        {step === "thanks" && (
          <div className="py-6 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[hsl(175_72%_38%/0.1)]">
              <Star className="h-7 w-7 fill-[hsl(175_72%_38%)] text-[hsl(175_72%_38%)]" />
            </div>
            <h3 className="text-xl font-bold text-[hsl(220_25%_14%)]">Thank you.</h3>
            <p className="mt-2 text-sm text-[hsl(215_15%_46%)]">
              {isPositive && COMPANY.googleReviews
                ? "A Google review page just opened in a new tab. Your words there are the single biggest thing you can do for us."
                : "Your note is on its way. Maxine reviews every one personally."}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
