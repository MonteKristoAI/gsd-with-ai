import { cn } from "@/lib/utils";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  CheckCircle2,
  ArrowRight,
  Play,
  BarChart3,
  Mail,
  Bot,
  TrendingUp,
  Zap,
} from "lucide-react";

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

/* ------------------------------------------------------------------ */
/*  Dashboard Mockup — built entirely with Tailwind divs              */
/* ------------------------------------------------------------------ */

function DashboardMockup({ isVisible }: { isVisible: boolean }) {
  return (
    <div
      className={cn(
        "relative w-full max-w-md lg:max-w-none select-none",
        "transition-all duration-1000 delay-300",
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      )}
    >
      {/* ---- Main dashboard card ---- */}
      <div className="relative rounded-2xl border border-[hsl(214_20%_90%)] bg-white shadow-xl shadow-black/[0.06] p-5">
        {/* Browser dots */}
        <div className="flex items-center gap-1.5 mb-4">
          <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F]" />
          <span className="ml-3 text-xs font-medium text-[hsl(215_15%_46%)] tracking-wide">
            Dashboard
          </span>
        </div>

        {/* Mini bar chart */}
        <div className="flex items-end gap-3 mb-5 pl-1">
          {[
            { h: 48, label: "Jan" },
            { h: 72, label: "Feb" },
            { h: 96, label: "Mar" },
          ].map((bar) => (
            <div key={bar.label} className="flex flex-col items-center gap-1.5">
              <div
                className="w-10 rounded-md bg-gradient-to-t from-[hsl(175_72%_38%)] to-[hsl(175_65%_52%)]"
                style={{ height: bar.h }}
              />
              <span className="text-[10px] font-medium text-[hsl(215_15%_58%)]">
                {bar.label}
              </span>
            </div>
          ))}
          <div className="flex-1" />
          <BarChart3 className="h-5 w-5 text-[hsl(215_15%_72%)] self-start" />
        </div>

        {/* Metric cards row */}
        <div className="grid grid-cols-3 gap-2.5">
          {[
            {
              label: "Revenue",
              value: "+24%",
              icon: TrendingUp,
              color: "text-emerald-500",
            },
            {
              label: "Leads",
              value: "147",
              icon: Zap,
              color: "text-[hsl(175_72%_38%)]",
            },
            {
              label: "Response",
              value: "2m",
              icon: Mail,
              color: "text-amber-500",
            },
          ].map((m) => (
            <div
              key={m.label}
              className="rounded-xl bg-[hsl(220_25%_97%)] px-3 py-2.5 text-center"
            >
              <m.icon className={cn("h-3.5 w-3.5 mx-auto mb-1", m.color)} />
              <span className="block text-sm font-bold text-[hsl(220_25%_14%)]">
                {m.value}
              </span>
              <span className="block text-[10px] text-[hsl(215_15%_58%)]">
                {m.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ---- Floating card: AI Agent Active (bottom-left) ---- */}
      <div
        className={cn(
          "absolute -bottom-5 -left-6 z-10 rounded-xl bg-[hsl(175_72%_38%)] px-4 py-3 shadow-lg shadow-[hsl(175_72%_38%/0.25)]",
          "animate-float"
        )}
        style={{ animationDelay: "0.5s" }}
      >
        <div className="flex items-center gap-2">
          <Bot className="h-4 w-4 text-white/90" />
          <span className="text-sm font-semibold text-white">
            AI Agent Active
          </span>
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-300 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
          </span>
        </div>
        <p className="mt-1 text-[11px] text-white/70">
          Processing 12 tasks...
        </p>
      </div>

      {/* ---- Floating card: Email Sent (top-right) ---- */}
      <div
        className={cn(
          "absolute -top-4 -right-4 z-10 rounded-xl border border-[hsl(214_20%_90%)] bg-white px-4 py-2.5 shadow-md",
          "animate-float"
        )}
        style={{ animationDelay: "1.2s" }}
      >
        <div className="flex items-center gap-2">
          <Mail className="h-3.5 w-3.5 text-[hsl(175_72%_38%)]" />
          <span className="text-xs font-medium text-[hsl(220_25%_14%)]">
            Email Sent
          </span>
          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Hero Section                                                       */
/* ------------------------------------------------------------------ */

export default function HeroSection() {
  const { ref, isVisible } = useScrollAnimation(0.05);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
      style={{ background: "white" }}
    >
      {/* Subtle gradient mesh */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
      >
        {/* Teal radial — top right */}
        <div
          className="absolute -top-32 -right-32 h-[600px] w-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, hsl(175 72% 38% / 0.03), transparent 70%)",
          }}
        />
        {/* Gold radial — bottom left */}
        <div
          className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, hsl(40 80% 52% / 0.02), transparent 70%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="container relative mx-auto px-6 min-h-[85vh] flex items-center">
        <div className="w-full py-20 lg:py-0">
          {/* Two-column grid */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-center">
            {/* ============ LEFT — 7 cols ============ */}
            <div
              className={cn(
                "lg:col-span-7 flex flex-col items-center text-center lg:items-start lg:text-left",
                "transition-all duration-700",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              )}
            >
              {/* Pill badge */}
              <span className="inline-flex items-center gap-2 rounded-full bg-[hsl(175_72%_38%/0.08)] px-4 py-1.5 text-sm font-medium text-[hsl(175_72%_38%)]">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[hsl(175_72%_38%)] opacity-40" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[hsl(175_72%_38%)]" />
                </span>
                AI-Powered Business Solutions
              </span>

              {/* Headline */}
              <h1 className="mt-8 text-5xl font-extrabold tracking-[-0.025em] leading-[1.06] text-[hsl(220_25%_14%)] md:text-6xl lg:text-[4.25rem] max-w-2xl">
                We Build{" "}
                <span className="text-gradient-teal">AI&nbsp;Systems</span>
                <br />
                That Replace Busywork
              </h1>

              {/* Subtitle */}
              <p className="mt-6 text-lg leading-relaxed text-[hsl(215_15%_46%)] max-w-xl">
                From CRM automation to AI voice agents — we design, build, and
                deploy intelligent systems so SMBs can scale without adding
                headcount.
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
                    "inline-flex items-center gap-2 rounded-xl px-8 py-4 text-sm font-semibold",
                    "text-[hsl(220_25%_14%)] border border-[hsl(214_20%_88%)]",
                    "transition-all hover:border-[hsl(175_72%_38%/0.4)] hover:bg-[hsl(175_72%_38%/0.04)]"
                  )}
                >
                  <Play className="h-4 w-4 text-[hsl(175_72%_38%)]" />
                  Watch Demo
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

              {/* Trusted by strip */}
              <div className="mt-5 flex items-center justify-center gap-3 lg:justify-start">
                {/* Stacked avatar circles */}
                <div className="flex -space-x-2">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[hsl(175_72%_38%)] ring-2 ring-white text-[10px] font-bold text-white">
                    J
                  </span>
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[hsl(40_80%_52%)] ring-2 ring-white text-[10px] font-bold text-white">
                    S
                  </span>
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[hsl(220_25%_30%)] ring-2 ring-white text-[10px] font-bold text-white">
                    M
                  </span>
                </div>
                <span className="text-xs text-[hsl(215_15%_58%)]">
                  Trusted by 50+ businesses
                </span>
              </div>
            </div>

            {/* ============ RIGHT — 5 cols (hidden on mobile) ============ */}
            <div className="hidden lg:flex lg:col-span-5 justify-center">
              <DashboardMockup isVisible={isVisible} />
            </div>
          </div>

          {/* ============ STAT CARDS ============ */}
          <div
            className={cn(
              "mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6",
              "transition-all duration-700 delay-500",
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            )}
          >
            {STATS.map((stat, i) => (
              <div
                key={stat.label}
                className={cn(
                  "group rounded-2xl border border-[hsl(214_20%_90%)] border-l-4 border-l-[hsl(175_72%_38%)] bg-white px-8 py-6",
                  "shadow-sm transition-all duration-300",
                  "hover:shadow-lg hover:-translate-y-1"
                )}
                style={{ transitionDelay: `${600 + i * 100}ms` }}
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
      </div>
    </section>
  );
}
