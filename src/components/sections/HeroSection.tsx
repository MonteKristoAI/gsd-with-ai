import { cn } from "@/lib/utils";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { COMPANY } from "@/data/companyInfo";
import { CheckCircle2, ArrowRight, Play } from "lucide-react";

const TRUST_ITEMS = [
  "20+ Years Experience",
  "Fortune 100 Background",
  "Texas-Based",
];

const STATS = [
  { value: "20+", label: "Years of Experience" },
  { value: "100+", label: "Automations Deployed" },
  { value: "3X", label: "Productivity Boost" },
];

export default function HeroSection() {
  const { ref, isVisible } = useScrollAnimation(0.05);

  return (
    <section
      ref={ref}
      className="relative bg-white overflow-hidden"
    >
      <div className="container mx-auto px-6 py-20 lg:py-32">
        {/* Two-column layout */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-center">
          {/* Left content — 7 cols */}
          <div
            className={cn(
              "lg:col-span-7 flex flex-col items-center text-center lg:items-start lg:text-left",
              "transition-all duration-700",
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            )}
          >
            {/* Badge */}
            <span className="inline-flex items-center gap-2 rounded-full bg-[hsl(175_72%_38%/0.08)] px-4 py-1.5 text-sm font-medium text-[hsl(175_72%_38%)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[hsl(175_72%_38%)]" />
              AI-Powered Business Solutions
            </span>

            {/* Headline */}
            <h1 className="mt-8 text-4xl font-extrabold tracking-tight leading-[1.08] text-[hsl(220_25%_14%)] md:text-5xl lg:text-6xl max-w-2xl">
              Smart IT &amp; AI Solutions That Actually{" "}
              <span className="text-[hsl(175_72%_38%)]">Get Stuff Done</span>
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-lg leading-relaxed text-[hsl(215_15%_46%)] max-w-lg">
              We design, build, and deploy AI agents and automations that replace
              manual work — so your team can focus on growth instead of busywork.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className={cn(
                  "inline-flex items-center gap-2 rounded-xl px-8 py-4 text-sm font-semibold text-white",
                  "bg-[hsl(175_72%_38%)] shadow-[0_4px_14px_hsl(175_72%_38%/0.35)]",
                  "transition-all hover:shadow-[0_6px_20px_hsl(175_72%_38%/0.45)] hover:brightness-110"
                )}
              >
                Book a Free Discovery Call
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#services"
                className={cn(
                  "inline-flex items-center gap-2 rounded-xl border border-[hsl(175_72%_38%)] px-8 py-4 text-sm font-semibold text-[hsl(175_72%_38%)]",
                  "transition-all hover:bg-[hsl(175_72%_38%/0.05)]"
                )}
              >
                <Play className="h-4 w-4" />
                See How It Works
              </a>
            </div>

            {/* Trust strip */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 lg:justify-start">
              {TRUST_ITEMS.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-1.5 text-sm text-[hsl(215_15%_46%)]"
                >
                  <CheckCircle2 className="h-4 w-4 text-[hsl(175_72%_38%)]" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Right side — image */}
          <div
            className={cn(
              "lg:col-span-5 flex justify-center",
              "transition-all duration-700 delay-200",
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            )}
          >
            <div className="relative w-full max-w-md lg:max-w-none">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=900&fit=crop&q=80"
                alt="Professional woman working with technology in a modern office"
                className="w-full rounded-2xl object-cover shadow-xl shadow-black/8 aspect-[4/5]"
                loading="eager"
              />
              {/* Decorative accent behind image */}
              <div
                aria-hidden
                className="absolute -z-10 -bottom-4 -right-4 h-full w-full rounded-2xl bg-[hsl(175_72%_38%/0.06)]"
              />
            </div>
          </div>
        </div>

        {/* Stat cards row */}
        <div
          className={cn(
            "mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6",
            "transition-all duration-700 delay-300",
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          )}
        >
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-[hsl(214_20%_90%)] bg-white px-8 py-6 text-center shadow-sm"
            >
              <span className="block text-3xl font-bold text-[hsl(175_72%_38%)]">
                {stat.value}
              </span>
              <span className="mt-1 block text-sm text-[hsl(215_15%_46%)]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
