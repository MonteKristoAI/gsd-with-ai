"use client";
import { useRouter } from "next/navigation";
import { COMPANY } from "@/data/companyInfo";
import { MessageSquareText, Calendar } from "lucide-react";
import { trackEvent } from "@/lib/plausible";

export default function FloatingMobileCTA() {
  const navigate = useRouter();
  const phoneDigits = COMPANY.phone.replace(/\D/g, "");

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-white shadow-[0_-2px_10px_rgb(0_0_0/0.06)] lg:hidden">
      <div className="container flex items-center gap-3 py-3">
        {/* Book a 20-min call (primary) */}
        <button
          onClick={() => {
            trackEvent("Book Call", { source: "mobile-sticky" });
            navigate.push("/contact");
          }}
          className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-[hsl(175_72%_28%)] py-2.5 font-heading text-sm font-semibold text-white transition-colors hover:bg-[hsl(175_72%_22%)]"
        >
          <Calendar className="h-4 w-4" />
          Book a 20-min call
        </button>

        {/* Or text — sms: link per manifesto */}
        <a
          href={`sms:${phoneDigits}`}
          className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-border py-2.5 font-heading text-sm font-semibold text-foreground transition-colors hover:border-[hsl(175_72%_38%/0.4)] hover:text-[hsl(175_72%_38%)]"
        >
          <MessageSquareText className="h-4 w-4" />
          Or text {COMPANY.phone}
        </a>
      </div>
    </div>
  );
}
