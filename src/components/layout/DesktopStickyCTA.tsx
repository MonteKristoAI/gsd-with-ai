"use client";
import { useEffect, useState } from "react";
import { Calendar } from "lucide-react";
import { cn } from "@/lib/utils";
import { trackEvent } from "@/lib/plausible";
import { COMPANY } from "@/data/companyInfo";

/**
 * Desktop-only sticky "Book a Call" button anchored bottom-right.
 * Mobile already has FloatingMobileCTA - this complements it on lg+ viewports.
 * Hides until the user scrolls past the hero (~600px) so it doesn't compete
 * with the hero's primary CTA on first paint.
 */
export default function DesktopStickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={COMPANY.cta.bookHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Book a 20-minute call"
      onClick={() => trackEvent("Book Call", { source: "desktop-sticky" })}
      className={cn(
        "fixed bottom-6 right-6 z-40 hidden items-center gap-2 rounded-full bg-navy px-5 py-3 font-semibold text-white shadow-[0_10px_30px_rgb(11_37_69/0.35)] transition-all duration-300 hover:bg-navy-light hover:shadow-[0_14px_36px_rgb(11_37_69/0.45)] lg:inline-flex",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0",
      )}
    >
      <Calendar className="h-4 w-4" />
      Book a 20-min call
    </a>
  );
}
