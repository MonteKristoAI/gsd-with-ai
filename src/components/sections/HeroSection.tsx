import { cn } from "@/lib/utils";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useCountUp } from "@/hooks/useCountUp";
import { ArrowRight, Clock, Building2, MapPin } from "lucide-react";

const TRUST_CHIPS = [
  { icon: Clock, label: "20+ Years Experience" },
  { icon: Building2, label: "Fortune 100 Background" },
  { icon: MapPin, label: "Texas-Based" },
];

const STATS = [
  { target: 20, suffix: "+", label: "Years of Experience" },
  { target: 100, suffix: "+", label: "Automations Deployed" },
  { target: 3, suffix: "X", label: "Productivity Boost" },
];

function StatCard({
  target,
  suffix,
  label,
  delay,
}: {
  target: number;
  suffix: string;
  label: string;
  delay: number;
}) {
  const { count, ref } = useCountUp(target, 2000);

  return (
    <div
      className={cn(
        "glass rounded-xl p-6 text-center",
        "opacity-0 animate-fade-up",
      )}
      style={{ animationDelay: `${delay}ms`, animationFillMode: "forwards" }}
    >
      <span ref={ref} className="block font-mono text-3xl font-bold text-gold">
        {count}
        {suffix}
      </span>
      <span className="mt-1 block text-sm text-muted-foreground">{label}</span>
    </div>
  );
}

export default function HeroSection() {
  const { ref, isVisible } = useScrollAnimation(0.05);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background layers */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: [
            "radial-gradient(ellipse 800px 600px at 10% 30%, hsl(43 85% 52% / 0.07) 0%, transparent 70%)",
            "radial-gradient(ellipse 700px 700px at 85% 75%, hsl(175 72% 42% / 0.06) 0%, transparent 70%)",
            "hsl(220 20% 6%)",
          ].join(", "),
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-dots opacity-40"
      />
      <div aria-hidden className="pointer-events-none absolute inset-0 noise" />

      {/* Content */}
      <div className="container relative z-10 mx-auto grid grid-cols-1 gap-12 py-24 lg:grid-cols-5 lg:gap-16 lg:py-0">
        {/* Left column */}
        <div
          className={cn(
            "flex flex-col items-center text-center lg:col-span-3 lg:items-start lg:text-left",
            "reveal",
            isVisible && "visible",
          )}
        >
          {/* Overline */}
          <span className="overline mb-6">AI-Powered Digital Transformation</span>

          {/* Headline */}
          <h1 className="font-heading text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            <span className="text-gradient-gold">Smart</span> IT &amp; AI
            Solutions That Get Stuff Done
          </h1>

          {/* Subtitle */}
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
            We design, build, and deploy AI agents and automations that replace
            manual work — so your team can focus on growth instead of busywork.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className={cn(
                "inline-flex items-center gap-2 rounded-lg bg-gold px-6 py-3 font-heading text-sm font-semibold text-gold-foreground",
                "transition-all hover:brightness-110 animate-glow-pulse",
              )}
            >
              Book a Discovery Call
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#services"
              className={cn(
                "inline-flex items-center gap-2 rounded-lg border border-teal px-6 py-3 font-heading text-sm font-semibold text-teal",
                "transition-all hover:bg-teal/10",
              )}
            >
              Explore Solutions
            </a>
          </div>

          {/* Trust chips */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            {TRUST_CHIPS.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/60"
              >
                <Icon className="h-4 w-4 text-gold-light" />
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* Right column — stat cards (desktop only) */}
        <div className="hidden flex-col gap-5 lg:col-span-2 lg:flex lg:justify-center">
          {STATS.map((stat, i) => (
            <StatCard
              key={stat.label}
              target={stat.target}
              suffix={stat.suffix}
              label={stat.label}
              delay={400 + i * 200}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
