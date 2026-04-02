import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

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
      }, 400);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="relative inline-block overflow-hidden">
      <span
        className={cn(
          "inline-block text-gradient-teal transition-all duration-400",
          isAnimating
            ? "translate-y-full opacity-0"
            : "translate-y-0 opacity-100"
        )}
      >
        {ROTATING_WORDS[index]}
      </span>
    </span>
  );
}

function FloatingOrb({ className, delay }: { className: string; delay: number }) {
  return (
    <div
      className={cn("absolute rounded-full pointer-events-none", className)}
      style={{
        animation: `float-slow 12s ease-in-out infinite`,
        animationDelay: `${delay}s`,
      }}
    />
  );
}

export default function HeroSection() {
  const { ref, isVisible } = useScrollAnimation(0.02);

  return (
    <section ref={ref} className="relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div
          className="absolute inset-0 animated-gradient"
          style={{
            background: "linear-gradient(135deg, hsl(175 72% 97%) 0%, white 25%, white 60%, hsl(175 72% 96%) 80%, hsl(40 80% 97%) 100%)",
          }}
        />

        {/* Floating orbs */}
        <FloatingOrb
          className="w-[500px] h-[500px] -top-40 -right-40 bg-[hsl(175_72%_38%/0.06)] blur-3xl"
          delay={0}
        />
        <FloatingOrb
          className="w-[400px] h-[400px] top-1/2 -left-32 bg-[hsl(40_80%_52%/0.04)] blur-3xl"
          delay={3}
        />
        <FloatingOrb
          className="w-[300px] h-[300px] bottom-20 right-1/4 bg-[hsl(175_72%_38%/0.03)] blur-2xl"
          delay={6}
        />

        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage: "radial-gradient(hsl(220 25% 14% / 0.04) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      {/* Main content */}
      <div className="container relative mx-auto px-6">
        <div className="flex min-h-[92vh] flex-col justify-center py-24 lg:py-32">
          {/* Two columns */}
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* LEFT — Text content */}
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              {/* Badge — stagger 1 */}
              <div className={cn("hero-animate hero-delay-1", isVisible && "visible")}>
                <span className="inline-flex items-center gap-2 rounded-full border border-[hsl(175_72%_38%/0.15)] bg-white/80 backdrop-blur-sm px-4 py-2 text-sm font-semibold text-[hsl(175_72%_38%)] shadow-sm">
                  <Sparkles className="h-4 w-4" />
                  AI-Powered Business Solutions
                </span>
              </div>

              {/* Headline — stagger 2 */}
              <h1 className={cn("hero-animate hero-delay-2 mt-8", isVisible && "visible")}>
                <span className="block text-[2.5rem] font-extrabold leading-[1.08] tracking-[-0.03em] text-[hsl(220_25%_12%)] sm:text-5xl lg:text-[3.5rem] xl:text-[4rem]">
                  We Build AI Systems
                </span>
                <span className="mt-2 block text-[2.5rem] font-extrabold leading-[1.08] tracking-[-0.03em] sm:text-5xl lg:text-[3.5rem] xl:text-[4rem]">
                  That <RotatingText />
                </span>
              </h1>

              {/* Subtitle — stagger 3 */}
              <p className={cn("hero-animate hero-delay-3 mt-7 max-w-lg text-lg leading-relaxed text-[hsl(215_15%_38%)]", isVisible && "visible")}>
                From CRM automation to AI voice agents — we design, build, and
                deploy intelligent systems so SMBs can scale without adding headcount.
              </p>

              {/* CTAs — stagger 4 */}
              <div className={cn("hero-animate hero-delay-4 mt-10 flex flex-wrap gap-4", isVisible && "visible")}>
                <a
                  href="#booking"
                  className="group inline-flex items-center gap-2 rounded-xl bg-[hsl(175_72%_38%)] px-8 py-4 text-sm font-semibold text-white shadow-[0_4px_14px_hsl(175_72%_38%/0.3)] transition-all duration-300 hover:shadow-[0_8px_25px_hsl(175_72%_38%/0.4)] hover:brightness-110 hover:-translate-y-0.5"
                >
                  Book a Free Discovery Call
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="/services"
                  className="inline-flex items-center gap-2 rounded-xl border border-[hsl(220_25%_14%/0.12)] bg-white/60 backdrop-blur-sm px-8 py-4 text-sm font-semibold text-[hsl(220_25%_14%)] transition-all duration-300 hover:border-[hsl(175_72%_38%/0.3)] hover:bg-white hover:shadow-md hover:-translate-y-0.5"
                >
                  Explore Services
                </a>
              </div>

              {/* Trust badges — stagger 5 */}
              <div className={cn("hero-animate hero-delay-5 mt-10 flex flex-wrap gap-x-6 gap-y-2 justify-center lg:justify-start", isVisible && "visible")}>
                {TRUST_ITEMS.map((item) => (
                  <span key={item} className="inline-flex items-center gap-1.5 text-sm text-[hsl(215_15%_42%)]">
                    <CheckCircle2 className="h-4 w-4 text-[hsl(175_72%_38%)]" />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* RIGHT — Hero image with reveal animation */}
            <div className={cn("hero-animate hero-delay-3 hidden lg:block", isVisible && "visible")}>
              <div className="relative">
                {/* Main image */}
                <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-[hsl(175_72%_38%/0.1)]">
                  <img
                    src="https://images.unsplash.com/photo-1639322537228-f710d846310a?w=800&h=900&fit=crop&q=80"
                    alt="AI and technology visualization"
                    className="h-[550px] w-full object-cover"
                  />
                  {/* Gradient overlay on image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[hsl(175_72%_38%/0.15)] via-transparent to-transparent" />
                </div>

                {/* Floating stat card — top right */}
                <div
                  className="absolute -top-4 -right-4 z-10 rounded-xl border border-white/60 bg-white/90 backdrop-blur-md px-5 py-3 shadow-lg"
                  style={{ animation: "float-medium 6s ease-in-out infinite" }}
                >
                  <span className="block text-2xl font-extrabold text-[hsl(175_72%_38%)]">3X</span>
                  <span className="block text-xs font-medium text-[hsl(215_15%_50%)]">Productivity</span>
                </div>

                {/* Floating card — bottom left */}
                <div
                  className="absolute -bottom-3 -left-3 z-10 flex items-center gap-3 rounded-xl border border-white/60 bg-white/90 backdrop-blur-md px-5 py-3 shadow-lg"
                  style={{ animation: "float-slow 8s ease-in-out infinite", animationDelay: "2s" }}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[hsl(175_72%_38%/0.1)]">
                    <Sparkles className="h-5 w-5 text-[hsl(175_72%_38%)]" />
                  </div>
                  <div>
                    <span className="block text-sm font-bold text-[hsl(220_25%_14%)]">100+</span>
                    <span className="block text-xs text-[hsl(215_15%_50%)]">Automations Live</span>
                  </div>
                </div>

                {/* Decorative teal accent line */}
                <div className="absolute -bottom-2 left-8 right-8 h-1 rounded-full bg-gradient-to-r from-transparent via-[hsl(175_72%_38%/0.3)] to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar at bottom */}
      <div className="relative border-t border-[hsl(214_20%_90%/0.6)] bg-white/80 backdrop-blur-md">
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
            <div key={stat.label} className="group cursor-default px-4 text-center sm:px-8 transition-all hover:scale-105">
              <span className="block text-2xl font-extrabold text-[hsl(175_72%_38%)] sm:text-3xl transition-colors group-hover:text-[hsl(175_65%_45%)]">
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
