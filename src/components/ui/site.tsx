// Shared server-safe presentational primitives for the GSD site (Brief v3).
// No "use client" - everything here renders in the initial HTML (SSR/SSG),
// which is required for the SEO/AEO/GEO goals in Brief Section 8.
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { COMPANY } from "@/data/companyInfo";

// Emits a JSON-LD script block in the initial HTML (crawlable). Pass any
// schema.org object. Used for per-page Service/WebPage schema (Brief 8.2).
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

const ORG_ID = "https://www.getsstuffdone.com/#organization";

export function serviceSchema(opts: {
  name: string;
  serviceType: string;
  url: string;
  price?: string;
  description: string;
}): Record<string, unknown> {
  const base: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    serviceType: opts.serviceType,
    description: opts.description,
    url: opts.url,
    provider: { "@id": ORG_ID },
    areaServed: { "@type": "Country", name: "United States" },
  };
  if (opts.price) {
    base.offers = { "@type": "Offer", price: opts.price, priceCurrency: "USD", url: opts.url };
  }
  return base;
}

// Real brand lockup (supplied by Maxine 2026-08-25, no "AI SOLUTIONS" subtitle).
// Two layouts: "horizontal" for the header, where the stacked lockup's three
// text lines would render at ~8px caps and turn to mush, and "stacked" (the
// lockup exactly as delivered) wherever there is vertical room.
// "light" = white wordmark, for placing on navy.
const LOGO = {
  horizontal: { dark: "/logo-gsd.png", light: "/logo-gsd-white.png", w: 1300, h: 201 },
  stacked: { dark: "/logo-gsd-stacked.png", light: "/logo-gsd-stacked-white.png", w: 669, h: 480 },
} as const;

export function Logo({
  variant = "dark",
  layout = "horizontal",
  className = "h-9 w-auto lg:h-10",
  priority = false,
}: {
  variant?: "dark" | "light";
  layout?: "horizontal" | "stacked";
  className?: string;
  priority?: boolean;
}) {
  const l = LOGO[layout];
  return (
    <Image
      src={variant === "light" ? l.light : l.dark}
      alt="GSD, Gets Stuff Done"
      width={l.w}
      height={l.h}
      priority={priority}
      className={className}
    />
  );
}

export function Eyebrow({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={`text-xs font-semibold uppercase tracking-[0.12em] text-signal ${className}`}>
      {children}
    </p>
  );
}

export function PrimaryCta({
  href = COMPANY.cta.bookHref,
  children = COMPANY.cta.primaryLabel,
  className = "",
}: {
  href?: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 rounded-xl bg-navy px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-navy-light ${className}`}
    >
      {children} <ArrowRight className="h-4 w-4" />
    </Link>
  );
}

export function SecondaryCta({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 rounded-xl border border-navy/20 bg-white px-7 py-3.5 text-sm font-semibold text-navy transition-all hover:border-navy/40 hover:bg-navy/[0.03] ${className}`}
    >
      {children}
    </Link>
  );
}

// The 40–60 word plain-English paragraph that opens most pages (Brief 8.5),
// structured for AI Overview / ChatGPT citation.
export function AeoLede({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={`text-lg leading-relaxed text-slate ${className}`}>{children}</p>
  );
}

// Section shell with consistent vertical rhythm and container.
export function Section({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`py-20 lg:py-24 ${className}`}>
      <div className="container mx-auto px-6">{children}</div>
    </section>
  );
}
