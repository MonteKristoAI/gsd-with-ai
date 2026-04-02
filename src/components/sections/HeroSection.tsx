import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight, CheckCircle2, Sparkles, Play } from "lucide-react";

const TRUST_ITEMS = [
  "20+ Years Experience",
  "Fortune 100 Background",
  "Texas-Based",
];

const ROTATING_WORDS = [
  "Scale Your Business",
  "Automate Everything",
  "Replace Busywork",
  "Accelerate Growth",
];

function RotatingText() {
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
        setIsAnimating(false);
      }, 350);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="relative inline-block overflow-hidden align-bottom">
      <span
        className={cn(
          "inline-block text-gradient-teal transition-all duration-[350ms] ease-out",
          isAnimating ? "-translate-y-[110%] opacity-0" : "translate-y-0 opacity-100"
        )}
      >
        {ROTATING_WORDS[index]}
      </span>
    </span>
  );
}

export default function HeroSection() {
  const { ref, isVisible } = useScrollAnimation(0.02);

  return (
    <section ref={ref} className="relative overflow-hidden bg-white">
      {/* Background — large Unsplash image as full-width bg */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop&q=80"
          alt=""
          className="h-full w-full object-cover"
          aria-hidden="true"
        />
        {/* White gradient from left for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/[0.92] to-white/30 lg:via-white/85 lg:to-white/10" />
        {/* Bottom fade to white for clean transition to next section */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white" />
      </div>

      {/* Content */}
      <div className="container relative mx-auto px-6">
        <div className="flex min-h-[92vh] items-center py-24 lg:py-32">
          <div className="max-w-2xl">
            {/* Badge */}
            <div className={cn("hero-animate hero-delay-1", isVisible && "visible")}>
              <span className="inline-flex items-center gap-2 rounded-full border border-[hsl(175_72%_38%/0.15)] bg-white/80 backdrop-blur-sm px-4 py-2 text-sm font-semibold text-[hsl(175_72%_38%)] shadow-sm">
                <Sparkles className="h-4 w-4" />
                AI-Powered Business Solutions
              </span>
            </div>

            {/* Headline */}
            <h1 className={cn("hero-animate hero-delay-2 mt-8", isVisible && "visible")}>
              <span className="block text-[2.5rem] font-extrabold leading-[1.08] tracking-[-0.03em] text-[hsl(220_25%_10%)] sm:text-5xl lg:text-[3.75rem]">
                We Build AI Systems
              </span>
              <span className="mt-1 block text-[2.5rem] font-extrabold leading-[1.08] tracking-[-0.03em] sm:text-5xl lg:text-[3.75rem]">
                That <RotatingText />
              </span>
            </h1>

            {/* Subtitle */}
            <p className={cn(
              "hero-animate hero-delay-3 mt-7 max-w-lg text-[1.125rem] leading-[1.7] text-[hsl(215_15%_35%)]",
              isVisible && "visible"
            )}>
              From CRM automation to AI voice agents — we design, build, and
              deploy intelligent systems so SMBs can scale without adding headcount.
            </p>

            {/* CTAs */}
            <div className={cn("hero-animate hero-delay-4 mt-10 flex flex-wrap gap-4", isVisible && "visible")}>
              <a
                href="#booking"
                className="group inline-flex items-center gap-2.5 rounded-xl bg-[hsl(175_72%_38%)] px-8 py-4 text-[0.9375rem] font-semibold text-white shadow-[0_4px_14px_hsl(175_72%_38%/0.3)] transition-all duration-300 hover:shadow-[0_8px_25px_hsl(175_72%_38%/0.4)] hover:brightness-110 hover:-translate-y-0.5"
              >
                Book a Free Discovery Call
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
              <a
                href="/services"
                className="group inline-flex items-center gap-2.5 rounded-xl border border-[hsl(220_25%_14%/0.12)] bg-white/70 backdrop-blur-sm px-8 py-4 text-[0.9375rem] font-semibold text-[hsl(220_25%_14%)] transition-all duration-300 hover:border-[hsl(175_72%_38%/0.3)] hover:bg-white hover:shadow-md hover:-translate-y-0.5"
              >
                <Play className="h-4 w-4 text-[hsl(175_72%_38%)]" />
                See How It Works
              </a>
            </div>

            {/* Trust badges */}
            <div className={cn("hero-animate hero-delay-5 mt-10 flex flex-wrap gap-x-6 gap-y-2", isVisible && "visible")}>
              {TRUST_ITEMS.map((item) => (
                <span key={item} className="inline-flex items-center gap-1.5 text-sm text-[hsl(215_15%_40%)]">
                  <CheckCircle2 className="h-4 w-4 text-[hsl(175_72%_38%)]" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative border-t border-[hsl(214_20%_90%/0.5)] bg-white/90 backdrop-blur-md">
        <div className={cn(
          "container mx-auto grid grid-cols-3 divide-x divide-[hsl(214_20%_90%)] px-6 py-8",
          "hero-animate hero-delay-6",
          isVisible && "visible"
        )}>
          {[
            { value: "20+", label: "Years of Experience" },
            { value: "100+", label: "Automations Deployed" },
            { value: "3X", label: "Avg. Productivity Boost" },
          ].map((stat) => (
            <div key={stat.label} className="px-4 text-center sm:px-8">
              <span className="block text-2xl font-extrabold text-[hsl(175_72%_38%)] sm:text-3xl">
                {stat.value}
              </span>
              <span className="mt-1 block text-xs font-medium text-[hsl(215_15%_50%)] sm:text-sm">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
