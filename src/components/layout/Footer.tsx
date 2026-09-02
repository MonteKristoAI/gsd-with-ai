import Link from "next/link";
import { COMPANY, NAV } from "@/data/companyInfo";
import { Mail, Phone, ArrowRight } from "lucide-react";
import { Logo } from "@/components/ui/site";

const WORK_LINKS = [
  { label: "Torque Diagnostic", to: COMPANY.offers.diagnostic.href },
  { label: "Growth Partnership", to: COMPANY.offers.partnership.href },
  { label: "The Torque Method", to: "/torque-method" },
] as const;

export default function Footer() {
  const year = 2026;

  return (
    <>
      {/* Final CTA band - one CTA, 20-minute language only (Brief 1.2 Block G / 7.1) */}
      <section className="border-t border-[hsl(214_20%_90%)] bg-cream py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-extrabold text-navy sm:text-3xl">
            Ready to build the torque to close your next deal?
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-slate">
            Twenty minutes. You walk us through where deals stall. We walk back the first thing worth fixing.
          </p>
          <Link
            href={COMPANY.cta.bookHref}
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-navy px-8 py-4 text-sm font-semibold text-white shadow-md transition-all hover:bg-navy-light"
          >
            {COMPANY.cta.primaryLabel} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <footer className="bg-[hsl(210_25%_97%)] border-t border-[hsl(214_20%_90%)]">
        <div className="container mx-auto px-6 py-16 lg:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {/* Company */}
            <div className="space-y-4">
              <Logo layout="stacked" className="h-24 w-auto" />
              <p className="text-sm text-slate leading-relaxed max-w-xs">
                {COMPANY.tagline}
              </p>
              <div className="flex items-center gap-3 pt-2">
                {/* LinkedIn only (Brief 7.5) */}
                <a
                  href={COMPANY.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GSD on LinkedIn"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-slate hover:text-navy hover:bg-navy/5 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Navigate */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-navy tracking-wide uppercase">Navigate</h3>
              <nav className="flex flex-col gap-2.5">
                <Link href="/" className="text-sm text-slate hover:text-navy transition-colors w-fit">Home</Link>
                {NAV.map((link) => (
                  <Link key={link.href} href={link.href} className="text-sm text-slate hover:text-navy transition-colors w-fit">
                    {link.label}
                  </Link>
                ))}
                {/* Booking now leaves the site, so this is an anchor, not next/link. */}
                <a
                  href={COMPANY.cta.bookHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate hover:text-navy transition-colors w-fit"
                >
                  Book a Call
                </a>
                {/* Keeps /contact reachable now that every booking CTA points off-site. */}
                <Link href="/contact" className="text-sm text-slate hover:text-navy transition-colors w-fit">
                  Contact
                </Link>
              </nav>
            </div>

            {/* Work with GSD */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-navy tracking-wide uppercase">Work with GSD</h3>
              <ul className="flex flex-col gap-2.5">
                {WORK_LINKS.map((item) => (
                  <li key={item.label}>
                    <Link href={item.to} className="text-sm text-slate hover:text-navy transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-navy tracking-wide uppercase">Contact</h3>
              <div className="flex flex-col gap-3">
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-center gap-3 text-sm text-slate hover:text-navy transition-colors"
                >
                  <Mail className="w-4 h-4 text-navy shrink-0" />
                  {/* Same guard as the contact card: shrinkable child + a break point at the @. */}
                  <span className="min-w-0">
                    {COMPANY.email.split("@")[0]}@<wbr />
                    {COMPANY.email.split("@")[1]}
                  </span>
                </a>
                <a
                  href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-3 text-sm text-slate hover:text-navy transition-colors"
                >
                  <Phone className="w-4 h-4 text-navy shrink-0" />
                  {COMPANY.phone}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Red M cause line (Brief 7.4) - persistent, above copyright */}
        <div className="border-t border-[hsl(214_20%_90%)]">
          <div className="container mx-auto px-6 py-5 text-center">
            <p className="text-xs text-slate-muted">
              GSD supports{" "}
              <a
                href={COMPANY.cause.url}
                target="_blank"
                rel="noopener"
                className="font-bold text-slate hover:text-navy transition-colors"
              >
                {COMPANY.cause.label}
              </a>{" "}
              in the fight against human trafficking. {COMPANY.cause.hotlineLabel}:{" "}
              <a href={COMPANY.cause.hotlineTel} className="font-bold text-slate hover:text-navy transition-colors">
                {COMPANY.cause.hotline}
              </a>
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[hsl(214_20%_90%)]">
          <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-6">
            <p className="text-xs text-slate-muted">
              &copy; {year} {COMPANY.legal}. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-xs text-slate-muted hover:text-navy transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="text-xs text-slate-muted hover:text-navy transition-colors">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
