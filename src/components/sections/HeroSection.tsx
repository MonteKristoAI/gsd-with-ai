"use client";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight, CheckCircle2, Play, Sparkles } from "lucide-react";

const TRUST_ITEMS = [
  "20 years building data systems at global energy firms",
  "Foundations engagements from $25K, 6-8 weeks",
  "Audit-Ready, Field-to-Cash, Pipeline Reset — three SKUs, one playbook",
];

export default function HeroSection() {
  const { ref, isVisible } = useScrollAnimation(0.02);

  return (
    <section ref={ref} className="relative overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1920&h=1080&fit=crop&q=80"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          aria-hidden="true"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/[0.93] to-white/50 lg:via-white/[0.88] lg:to-white/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative mx-auto px-6">
        <div className="flex min-h-[92vh] items-center justify-center py-28 lg:py-36">
          <div className="max-w-[800px] flex flex-col items-center text-center">
            {/* Badge */}
            <div className={cn("hero-animate hero-delay-1", isVisible && "visible")}>
              <span className="inline-flex items-center gap-2 rounded-full border border-[hsl(175_72%_38%/0.2)] bg-white/90 backdrop-blur-sm px-5 py-2.5 text-sm font-semibold text-[hsl(175_72%_38%)] shadow-sm">
                <Sparkles className="h-4 w-4" />
                Maxine &mdash; the CTO you can&rsquo;t afford to hire
              </span>
            </div>

            {/* Headline */}
            <h1 className={cn("hero-animate hero-delay-2 mt-8 block text-[2.75rem] font-extrabold leading-[1.06] tracking-[-0.03em] text-[hsl(220_25%_10%)] sm:text-[3.25rem] lg:text-[3.75rem]", isVisible && "visible")}>
              Connect the yard, the office, and the CRM. In 6 weeks.
            </h1>

            {/* Subtitle */}
            <p className={cn(
              "hero-animate hero-delay-3 mt-7 max-w-[520px] text-[1.125rem] leading-[1.7] text-[hsl(215_15%_32%)]",
              isVisible && "visible"
            )}>
              For oilfield and industrial services SMBs in Texas, Oklahoma, and Louisiana. Built by a 20-year energy data lead.
            </p>

            {/* CTAs */}
            <div className={cn("hero-animate hero-delay-4 mt-10 flex flex-wrap justify-center gap-4", isVisible && "visible")}>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2.5 rounded-xl bg-[hsl(175_72%_28%)] px-8 py-4 text-[0.9375rem] font-semibold text-white shadow-[0_4px_14px_hsl(175_72%_38%/0.3)] transition-all duration-300 hover:shadow-[0_8px_25px_hsl(175_72%_38%/0.4)] hover:brightness-110 hover:-translate-y-0.5"
              >
                Book a 20-minute call
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/case-studies/wireline-operator"
                className="group inline-flex items-center gap-2.5 rounded-xl border border-[hsl(220_25%_14%/0.12)] bg-white/70 backdrop-blur-sm px-8 py-4 text-[0.9375rem] font-semibold text-[hsl(220_25%_14%)] transition-all duration-300 hover:border-[hsl(175_72%_38%/0.3)] hover:bg-white hover:shadow-md hover:-translate-y-0.5"
              >
                <Play className="h-4 w-4 text-[hsl(175_72%_38%)]" />
                See how we did it for a 40-person wireline operator
              </Link>
            </div>

            {/* Trust badges */}
            <div className={cn("hero-animate hero-delay-6 mt-12 flex flex-col items-center gap-y-3", isVisible && "visible")}>
              {TRUST_ITEMS.map((item) => (
                <span key={item} className="inline-flex items-center gap-2 text-sm font-medium text-[hsl(215_15%_40%)]">
                  <CheckCircle2 className="h-4 w-4 text-[hsl(175_72%_38%)] shrink-0" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
