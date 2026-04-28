"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Calendar } from "lucide-react";
import { cn } from "@/lib/utils";
import { trackEvent } from "@/lib/plausible";

/**
 * Desktop-only sticky "Book a Call" button anchored bottom-right.
 * Mobile already has FloatingMobileCTA — this complements it on lg+ viewports.
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
    <Link
      href="/contact"
      aria-label="Book a 20-minute call"
      onClick={() => trackEvent("Book Call", { source: "desktop-sticky" })}
      className={cn(
        "fixed bottom-6 right-6 z-40 hidden items-center gap-2 rounded-full bg-teal-700 px-5 py-3 font-semibold text-white shadow-[0_10px_30px_rgb(13_148_136/0.45)] transition-all duration-300 hover:bg-teal-600 hover:shadow-[0_14px_36px_rgb(13_148_136/0.55)] lg:inline-flex",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0",
      )}
    >
      <Calendar className="h-4 w-4" />
      Book a 20-min call
    </Link>
  );
}
