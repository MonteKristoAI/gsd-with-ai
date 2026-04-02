import { cn } from "@/lib/utils";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

const TRUST_ITEMS = [
  "20+ Years Experience",
  "Fortune 100 Background",
  "Texas-Based",
];

export default function HeroSection() {
  const { ref, isVisible } = useScrollAnimation(0.05);

  return (
    <section ref={ref} className="relative overflow-hidden bg-white">
      {/* Background image — covers full width */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1639322537228-f710d846310a?w=1920&h=1080&fit=crop&q=80"
          alt=""
          className="h-full w-full object-cover"
          aria-hidden="true"
        />
        {/* Gradient overlay — white from left, transparent to right */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/40 lg:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white" />
      </div>

      <div className="container relative mx-auto px-6">
        <div className="flex min-h-[90vh] items-center py-24 lg:py-32">
          <div
            className={cn(
              "max-w-2xl transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[hsl(175_72%_38%/0.2)] bg-white/80 backdrop-blur-sm px-4 py-2 text-sm font-semibold text-[hsl(175_72%_38%)]">
              <Sparkles className="h-4 w-4" />
              AI-Powered Business Solutions
            </div>

            {/* Headline */}
            <h1 className="mt-8 text-[2.75rem] font-extrabold leading-[1.08] tracking-[-0.03em] text-[hsl(220_25%_12%)] sm:text-5xl lg:text-[3.75rem]">
              We Build Intelligent Systems
              <br />
              <span className="text-gradient-teal">That Scale Your Business</span>
            </h1>

            {/* Subtitle */}
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-[hsl(215_15%_40%)]">
              From AI agents and workflow automation to CRM integration and voice
              AI — we design, build, and deploy systems that eliminate busywork so
              your team can focus on growth.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#booking"
                className="inline-flex items-center gap-2 rounded-xl bg-[hsl(175_72%_38%)] px-8 py-4 text-sm font-semibold text-white shadow-[0_4px_14px_hsl(175_72%_38%/0.3)] transition-all hover:shadow-[0_6px_20px_hsl(175_72%_38%/0.4)] hover:brightness-110"
              >
                Book a Free Discovery Call
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="/services"
                className="inline-flex items-center gap-2 rounded-xl border border-[hsl(220_25%_14%/0.15)] bg-white/70 backdrop-blur-sm px-8 py-4 text-sm font-semibold text-[hsl(220_25%_14%)] transition-all hover:border-[hsl(175_72%_38%/0.4)] hover:bg-white"
              >
                Explore Services
              </a>
            </div>

            {/* Trust badges */}
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2">
              {TRUST_ITEMS.map((item) => (
                <span key={item} className="inline-flex items-center gap-1.5 text-sm text-[hsl(215_15%_42%)]">
                  <CheckCircle2 className="h-4 w-4 text-[hsl(175_72%_38%)]" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar at bottom */}
      <div className="relative border-t border-[hsl(214_20%_90%/0.5)] bg-white/90 backdrop-blur-md">
        <div
          className={cn(
            "container mx-auto grid grid-cols-3 divide-x divide-[hsl(214_20%_90%)] px-6 py-8 transition-all duration-700 delay-300",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          {[
            { value: "20+", label: "Years of Experience" },
            { value: "100+", label: "Automations Deployed" },
            { value: "3X", label: "Avg. Productivity Boost" },
          ].map((stat) => (
            <div key={stat.label} className="px-4 text-center sm:px-8">
              <span className="block text-2xl font-extrabold text-[hsl(175_72%_38%)] sm:text-3xl">{stat.value}</span>
              <span className="mt-1 block text-xs font-medium text-[hsl(215_15%_50%)] sm:text-sm">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
