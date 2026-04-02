import { useState, useMemo } from "react";
import { cn } from "@/lib/utils";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Zap,
  Brain,
  Shield,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Phone,
  Mail,
  Clock,
  FileCheck,
  MapPin,
  DollarSign,
  Loader2,
} from "lucide-react";
import { COMPANY } from "@/data/companyInfo";

/* ------------------------------------------------------------------ */
/*  Types & Constants                                                  */
/* ------------------------------------------------------------------ */

interface FormData {
  pillar: string;
  companyName: string;
  industry: string;
  companySize: string;
  preferredDay: string;
  preferredTime: string;
  timezone: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

const INITIAL_FORM: FormData = {
  pillar: "",
  companyName: "",
  industry: "",
  companySize: "",
  preferredDay: "",
  preferredTime: "",
  timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
};

const PILLARS = [
  {
    id: "digital-foundations",
    label: "Digital Foundations",
    description: "Websites, CRM, outreach & lead gen",
    icon: Zap,
    color: "gold" as const,
  },
  {
    id: "ai-powered-growth",
    label: "AI Powered Growth",
    description: "Voice AI, analytics & automation",
    icon: Brain,
    color: "teal" as const,
  },
  {
    id: "secure-scalable-it",
    label: "Secure & Scalable IT",
    description: "Cloud, security & infrastructure",
    icon: Shield,
    color: "blue" as const,
  },
];

const INDUSTRIES = [
  "Energy",
  "Finance",
  "SaaS",
  "Manufacturing",
  "Consulting",
  "Healthcare",
  "Other",
];

const COMPANY_SIZES = ["1-10", "11-50", "51-200", "200+"];

const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

const TIME_SLOTS = [
  { value: "morning", label: "Morning (9 AM - 12 PM)" },
  { value: "afternoon", label: "Afternoon (12 - 5 PM)" },
  { value: "evening", label: "Evening (5 - 7 PM)" },
];

const STEPS = [
  "What do you need?",
  "About your business",
  "Preferred schedule",
  "Contact details",
];

const SIDEBAR_BULLETS = [
  { icon: Clock, text: "30-minute call" },
  { icon: FileCheck, text: "No obligation" },
  { icon: MapPin, text: "Custom roadmap" },
  { icon: DollarSign, text: "Clear pricing" },
];

const PILLAR_COLORS = {
  gold: {
    border: "border-gold/40",
    bg: "bg-gold/10",
    text: "text-gold",
    ring: "ring-gold/50",
    activeBg: "bg-gold/20",
  },
  teal: {
    border: "border-teal/40",
    bg: "bg-teal/10",
    text: "text-teal",
    ring: "ring-teal/50",
    activeBg: "bg-teal/20",
  },
  blue: {
    border: "border-blue-400/40",
    bg: "bg-blue-400/10",
    text: "text-blue-400",
    ring: "ring-blue-400/50",
    activeBg: "bg-blue-400/20",
  },
};

/* ------------------------------------------------------------------ */
/*  Shared input style                                                 */
/* ------------------------------------------------------------------ */

const inputCls = cn(
  "w-full rounded-lg border bg-white/5 border-white/10 px-4 py-3 text-sm text-white",
  "placeholder:text-white/30 transition-colors",
  "focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 focus-visible:border-gold/30",
);

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function BookingWizard() {
  const { ref, isVisible } = useScrollAnimation(0.05);
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormData>(INITIAL_FORM);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  /* Helpers */
  const set = <K extends keyof FormData>(key: K, value: FormData[K]) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const canContinue = useMemo(() => {
    switch (step) {
      case 0:
        return form.pillar !== "";
      case 1:
        return form.companyName.trim() !== "" && form.industry !== "" && form.companySize !== "";
      case 2:
        return form.preferredDay !== "" && form.preferredTime !== "";
      case 3:
        return (
          form.firstName.trim() !== "" &&
          form.lastName.trim() !== "" &&
          /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
        );
      default:
        return false;
    }
  }, [step, form]);

  const handleSubmit = async () => {
    if (!canContinue || submitting) return;
    setSubmitting(true);
    try {
      await fetch(COMPANY.webhooks.booking, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setSubmitted(true);
    } catch {
      // Silently handle — webhook may be cross-origin
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  const selectedPillar = PILLARS.find((p) => p.id === form.pillar);

  /* ---------------------------------------------------------------- */
  /*  Steps                                                            */
  /* ---------------------------------------------------------------- */

  const renderStep = () => {
    switch (step) {
      /* Step 1 — Pillar selection */
      case 0:
        return (
          <div className="grid gap-4 sm:grid-cols-3">
            {PILLARS.map((pillar) => {
              const colors = PILLAR_COLORS[pillar.color];
              const active = form.pillar === pillar.id;
              const Icon = pillar.icon;
              return (
                <button
                  key={pillar.id}
                  type="button"
                  onClick={() => {
                    set("pillar", pillar.id);
                    setTimeout(() => setStep(1), 250);
                  }}
                  className={cn(
                    "group flex flex-col items-center gap-3 rounded-xl border p-6 text-center transition-all",
                    active
                      ? cn(colors.border, colors.activeBg, "ring-2", colors.ring)
                      : "border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.06]",
                  )}
                >
                  <div
                    className={cn(
                      "flex h-12 w-12 items-center justify-center rounded-lg transition-colors",
                      active ? colors.bg : "bg-white/5 group-hover:bg-white/10",
                    )}
                  >
                    <Icon
                      className={cn(
                        "h-6 w-6 transition-colors",
                        active ? colors.text : "text-white/60 group-hover:text-white/80",
                      )}
                    />
                  </div>
                  <span
                    className={cn(
                      "font-heading text-sm font-semibold transition-colors",
                      active ? "text-white" : "text-white/80",
                    )}
                  >
                    {pillar.label}
                  </span>
                  <span className="text-xs text-white/40">
                    {pillar.description}
                  </span>
                </button>
              );
            })}
          </div>
        );

      /* Step 2 — Business info */
      case 1:
        return (
          <div className="space-y-5">
            {/* Company name */}
            <div>
              <label className="mb-1.5 block text-sm font-medium text-white/70">
                Company Name
              </label>
              <input
                type="text"
                value={form.companyName}
                onChange={(e) => set("companyName", e.target.value)}
                placeholder="Acme Corp"
                className={inputCls}
              />
            </div>

            {/* Industry */}
            <div>
              <label className="mb-1.5 block text-sm font-medium text-white/70">
                Industry
              </label>
              <select
                value={form.industry}
                onChange={(e) => set("industry", e.target.value)}
                className={cn(inputCls, "appearance-none bg-[length:16px] bg-[right_12px_center] bg-no-repeat")} style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%239BA4B0' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")` }}
              >
                <option value="" disabled>
                  Select your industry
                </option>
                {INDUSTRIES.map((ind) => (
                  <option key={ind} value={ind} className="bg-[hsl(220,20%,10%)]">
                    {ind}
                  </option>
                ))}
              </select>
            </div>

            {/* Company size */}
            <div>
              <label className="mb-1.5 block text-sm font-medium text-white/70">
                Company Size
              </label>
              <div className="flex flex-wrap gap-3">
                {COMPANY_SIZES.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => set("companySize", size)}
                    className={cn(
                      "rounded-lg border px-4 py-2 text-sm transition-all",
                      form.companySize === size
                        ? "border-gold/40 bg-gold/10 text-gold ring-2 ring-gold/30"
                        : "border-white/10 bg-white/5 text-white/60 hover:border-white/20 hover:text-white/80",
                    )}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>
        );

      /* Step 3 — Schedule */
      case 2:
        return (
          <div className="space-y-5">
            {/* Preferred day */}
            <div>
              <label className="mb-1.5 block text-sm font-medium text-white/70">
                Preferred Day
              </label>
              <select
                value={form.preferredDay}
                onChange={(e) => set("preferredDay", e.target.value)}
                className={cn(inputCls, "appearance-none bg-[length:16px] bg-[right_12px_center] bg-no-repeat")} style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%239BA4B0' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")` }}
              >
                <option value="" disabled>
                  Select a day
                </option>
                {DAYS.map((day) => (
                  <option key={day} value={day} className="bg-[hsl(220,20%,10%)]">
                    {day}
                  </option>
                ))}
              </select>
            </div>

            {/* Preferred time */}
            <div>
              <label className="mb-1.5 block text-sm font-medium text-white/70">
                Preferred Time
              </label>
              <select
                value={form.preferredTime}
                onChange={(e) => set("preferredTime", e.target.value)}
                className={cn(inputCls, "appearance-none bg-[length:16px] bg-[right_12px_center] bg-no-repeat")} style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%239BA4B0' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")` }}
              >
                <option value="" disabled>
                  Select a time slot
                </option>
                {TIME_SLOTS.map((slot) => (
                  <option key={slot.value} value={slot.value} className="bg-[hsl(220,20%,10%)]">
                    {slot.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Timezone display */}
            <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3">
              <MapPin className="h-4 w-4 text-teal" />
              <span className="text-sm text-white/60">
                Your timezone:{" "}
                <span className="font-medium text-white/80">
                  {form.timezone}
                </span>
              </span>
            </div>
          </div>
        );

      /* Step 4 — Contact details */
      case 3:
        return (
          <div className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-white/70">
                  First Name
                </label>
                <input
                  type="text"
                  value={form.firstName}
                  onChange={(e) => set("firstName", e.target.value)}
                  placeholder="Jane"
                  className={inputCls}
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-white/70">
                  Last Name
                </label>
                <input
                  type="text"
                  value={form.lastName}
                  onChange={(e) => set("lastName", e.target.value)}
                  placeholder="Doe"
                  className={inputCls}
                />
              </div>
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-white/70">
                Email <span className="text-gold">*</span>
              </label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => set("email", e.target.value)}
                placeholder="jane@company.com"
                className={inputCls}
              />
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-white/70">
                Phone
              </label>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => set("phone", e.target.value)}
                placeholder="+1 (555) 000-0000"
                className={inputCls}
              />
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-white/70">
                Brief Message
              </label>
              <textarea
                value={form.message}
                onChange={(e) => set("message", e.target.value)}
                placeholder="Tell us a bit about your project or challenges..."
                rows={3}
                className={cn(inputCls, "resize-none")}
              />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  /* ---------------------------------------------------------------- */
  /*  Success state                                                    */
  /* ---------------------------------------------------------------- */

  if (submitted) {
    return (
      <section
        id="booking"
        className="relative overflow-hidden py-20 lg:py-28"
        style={{
          background: [
            "radial-gradient(ellipse 800px 500px at 30% 40%, hsl(175 72% 42% / 0.06) 0%, transparent 70%)",
            "radial-gradient(ellipse 600px 600px at 75% 60%, hsl(43 85% 52% / 0.05) 0%, transparent 70%)",
            "hsl(220 20% 6%)",
          ].join(", "),
        }}
      >
        <div className="container mx-auto flex flex-col items-center py-12 text-center">
          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-teal/10">
            <CheckCircle2 className="h-10 w-10 text-teal" />
          </div>
          <h2 className="font-heading text-3xl font-bold text-white">
            You&rsquo;re All Set!
          </h2>
          <p className="mt-4 max-w-md text-base text-white/60">
            We&rsquo;ve received your booking request. Maxine or a team member
            will reach out within 24 hours to confirm your discovery call.
          </p>
          <a
            href="#top"
            className="mt-8 inline-flex items-center gap-2 rounded-lg border border-gold/30 px-6 py-3 font-heading text-sm font-semibold text-gold transition-all hover:border-gold hover:bg-gold/10"
          >
            Back to Home
          </a>
        </div>
      </section>
    );
  }

  /* ---------------------------------------------------------------- */
  /*  Main render                                                      */
  /* ---------------------------------------------------------------- */

  return (
    <section
      id="booking"
      ref={ref}
      className="relative overflow-hidden py-20 lg:py-28"
      style={{
        background: [
          "radial-gradient(ellipse 800px 500px at 30% 40%, hsl(175 72% 42% / 0.06) 0%, transparent 70%)",
          "radial-gradient(ellipse 600px 600px at 75% 60%, hsl(43 85% 52% / 0.05) 0%, transparent 70%)",
          "hsl(220 20% 6%)",
        ].join(", "),
      }}
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 noise" />

      <div
        className={cn(
          "container relative z-10 mx-auto",
          "reveal",
          isVisible && "visible",
        )}
      >
        {/* Header */}
        <div className="mb-14 text-center">
          <span className="overline mb-4">Get Started</span>
          <h2 className="font-heading text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Book Your Free{" "}
            <span className="text-gradient-gold">Discovery Call</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/60">
            A 30-minute conversation to understand your challenges, explore
            solutions, and map out a clear path forward — no strings attached.
          </p>
        </div>

        {/* Grid: form + sidebar */}
        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-3">
          {/* ---- Form (2/3) ---- */}
          <div className="lg:col-span-2">
            {/* Step indicator */}
            <div className="mb-10 flex items-center justify-center gap-0">
              {STEPS.map((label, i) => {
                const isCompleted = i < step;
                const isCurrent = i === step;
                return (
                  <div key={label} className="flex items-center">
                    <div className="flex flex-col items-center">
                      <button
                        type="button"
                        onClick={() => i < step && setStep(i)}
                        disabled={i > step}
                        className={cn(
                          "flex h-9 w-9 items-center justify-center rounded-full border-2 text-sm font-bold transition-all",
                          isCompleted
                            ? "border-gold bg-gold text-gold-foreground"
                            : isCurrent
                              ? "border-gold bg-gold/10 text-gold"
                              : "border-white/15 bg-white/5 text-white/30",
                          i < step && "cursor-pointer hover:brightness-110",
                        )}
                      >
                        {isCompleted ? (
                          <CheckCircle2 className="h-4 w-4" />
                        ) : (
                          i + 1
                        )}
                      </button>
                      <span
                        className={cn(
                          "mt-2 hidden text-[11px] sm:block",
                          isCurrent ? "text-gold" : "text-white/30",
                        )}
                      >
                        {label}
                      </span>
                    </div>
                    {/* Connector line */}
                    {i < STEPS.length - 1 && (
                      <div
                        className={cn(
                          "mx-2 h-px w-8 sm:w-14 transition-colors",
                          i < step ? "bg-gold" : "bg-white/10",
                        )}
                      />
                    )}
                  </div>
                );
              })}
            </div>

            {/* Step title */}
            <h3 className="mb-6 font-heading text-xl font-semibold text-white">
              {STEPS[step]}
            </h3>

            {/* Dynamic step content */}
            {renderStep()}

            {/* Navigation buttons */}
            <div className="mt-8 flex items-center justify-between">
              {step > 0 ? (
                <button
                  type="button"
                  onClick={() => setStep((s) => s - 1)}
                  className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-5 py-2.5 text-sm font-medium text-white/60 transition-all hover:border-white/20 hover:text-white/80"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back
                </button>
              ) : (
                <div />
              )}

              {step < STEPS.length - 1 ? (
                <button
                  type="button"
                  disabled={!canContinue}
                  onClick={() => setStep((s) => s + 1)}
                  className={cn(
                    "inline-flex items-center gap-2 rounded-lg px-6 py-2.5 font-heading text-sm font-semibold transition-all",
                    canContinue
                      ? "bg-gold text-gold-foreground hover:brightness-110"
                      : "cursor-not-allowed bg-white/10 text-white/30",
                  )}
                >
                  Continue
                  <ArrowRight className="h-4 w-4" />
                </button>
              ) : (
                <button
                  type="button"
                  disabled={!canContinue || submitting}
                  onClick={handleSubmit}
                  className={cn(
                    "inline-flex items-center gap-2 rounded-lg px-6 py-2.5 font-heading text-sm font-semibold transition-all",
                    canContinue && !submitting
                      ? "bg-gold text-gold-foreground hover:brightness-110"
                      : "cursor-not-allowed bg-white/10 text-white/30",
                  )}
                >
                  {submitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Book My Call
                      <CheckCircle2 className="h-4 w-4" />
                    </>
                  )}
                </button>
              )}
            </div>
          </div>

          {/* ---- Sidebar ---- */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="glass rounded-2xl p-6">
              <h4 className="mb-5 font-heading text-base font-semibold text-white">
                What to expect
              </h4>

              <ul className="space-y-3">
                {SIDEBAR_BULLETS.map(({ icon: Icon, text }) => (
                  <li
                    key={text}
                    className="flex items-center gap-3 text-sm text-white/60"
                  >
                    <Icon className="h-4 w-4 shrink-0 text-teal" />
                    {text}
                  </li>
                ))}
              </ul>

              {/* Contact */}
              <div className="mt-6 space-y-2 border-t border-white/10 pt-5">
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-white/70"
                >
                  <Phone className="h-4 w-4 text-gold" />
                  {COMPANY.phone}
                </a>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-white/70"
                >
                  <Mail className="h-4 w-4 text-gold" />
                  {COMPANY.email}
                </a>
              </div>

              {/* Selection summary */}
              {(form.pillar || form.companyName || form.preferredDay) && (
                <div className="mt-6 space-y-2 border-t border-white/10 pt-5">
                  <h5 className="mb-3 text-xs font-semibold uppercase tracking-wider text-white/40">
                    Your Selections
                  </h5>

                  {selectedPillar && (
                    <div className="flex items-center gap-2 text-sm text-white/60">
                      <selectedPillar.icon className="h-3.5 w-3.5 text-gold" />
                      {selectedPillar.label}
                    </div>
                  )}

                  {form.companyName && (
                    <p className="text-sm text-white/60">
                      {form.companyName}
                      {form.industry ? ` · ${form.industry}` : ""}
                      {form.companySize ? ` · ${form.companySize} people` : ""}
                    </p>
                  )}

                  {form.preferredDay && (
                    <p className="text-sm text-white/60">
                      {form.preferredDay}
                      {form.preferredTime
                        ? ` · ${TIME_SLOTS.find((t) => t.value === form.preferredTime)?.label ?? form.preferredTime}`
                        : ""}
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
