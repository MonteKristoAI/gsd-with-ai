import { COMPANY } from "@/data/companyInfo";
import { Phone, Calendar } from "lucide-react";

export default function FloatingMobileCTA() {
  const scrollToBooking = () => {
    const el = document.getElementById("booking");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-[hsl(220_25%_6%/0.85)] backdrop-blur-xl border-t border-white/10">
      <div className="container flex items-center gap-3 py-3">
        {/* Call Us */}
        <a
          href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
          className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg border border-gold/40 text-gold hover:border-gold hover:bg-gold/5 font-heading font-semibold text-sm transition-colors"
        >
          <Phone className="w-4 h-4" />
          Call Us
        </a>

        {/* Book a Call */}
        <button
          onClick={scrollToBooking}
          className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-gold text-gold-foreground hover:bg-gold-light font-heading font-semibold text-sm transition-colors"
        >
          <Calendar className="w-4 h-4" />
          Book a Call
        </button>
      </div>
    </div>
  );
}
