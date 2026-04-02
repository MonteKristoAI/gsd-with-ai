import { useState } from "react";
import { cn } from "@/lib/utils";
import { MessageCircle, X } from "lucide-react";

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(true)}
        className={cn(
          "fixed z-40 w-14 h-14 rounded-full bg-gold text-gold-foreground",
          "flex items-center justify-center shadow-lg",
          "hover:bg-gold-light transition-colors",
          "animate-glow-pulse",
          "bottom-20 right-6 lg:bottom-8 lg:right-8"
        )}
        aria-label="Open AI assistant"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {/* Modal Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative bg-[hsl(220_25%_8%)] border border-white/10 rounded-2xl shadow-2xl max-w-sm w-full mx-6 p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 p-1.5 text-white/40 hover:text-white transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Content */}
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center">
                <MessageCircle className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-xl font-heading font-bold text-white">
                AI Assistant
              </h3>
              <p className="text-sm font-body text-white/60 leading-relaxed">
                Our AI-powered assistant is coming soon. In the meantime, feel
                free to book a discovery call or reach out directly.
              </p>
              <button
                onClick={() => setOpen(false)}
                className="mt-2 bg-gold text-gold-foreground hover:bg-gold-light font-heading font-semibold text-sm px-6 py-2.5 rounded-lg transition-colors"
              >
                Got It
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
