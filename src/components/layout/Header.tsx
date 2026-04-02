import { useState, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";
import { COMPANY } from "@/data/companyInfo";
import { Phone, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
] as const;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const scrollToBooking = useCallback(() => {
    setMobileOpen(false);
    const el = document.getElementById("booking");
    el?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      setMobileOpen(false);
      const id = href.replace("#", "");
      const el = document.getElementById(id);
      el?.scrollIntoView({ behavior: "smooth" });
    },
    []
  );

  return (
    <>
      <header
        className={cn(
          "fixed left-0 right-0 z-50 top-0 lg:top-[44px] transition-all duration-300",
          scrolled
            ? "bg-[hsl(220_25%_6%/0.85)] backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20"
            : "bg-transparent"
        )}
      >
        <div className="container flex items-center justify-between h-16 lg:h-[72px]">
          {/* Logo */}
          <a href="/" className="flex items-baseline gap-1.5 shrink-0">
            <span
              className="text-2xl font-heading font-bold bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent"
            >
              GSD
            </span>
            <span className="text-sm font-heading font-medium text-white">
              with AI
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-heading font-medium text-white/60 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Right */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4 text-gold" />
              <span className="font-body">{COMPANY.phone}</span>
            </a>
            <button
              onClick={scrollToBooking}
              className="bg-gold text-gold-foreground hover:bg-gold-light font-heading font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors"
            >
              Book a Discovery Call
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-white/80 hover:text-white transition-colors"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[49] bg-[hsl(220_25%_6%/0.97)] backdrop-blur-xl lg:hidden flex flex-col items-center justify-center">
          <nav className="flex flex-col items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-xl font-heading font-medium text-white/70 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}

            <a
              href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-2 text-white/60 hover:text-white transition-colors mt-4"
            >
              <Phone className="w-5 h-5 text-gold" />
              <span className="font-body text-lg">{COMPANY.phone}</span>
            </a>

            <button
              onClick={scrollToBooking}
              className="bg-gold text-gold-foreground hover:bg-gold-light font-heading font-semibold text-base px-8 py-3 rounded-lg transition-colors mt-2"
            >
              Book a Discovery Call
            </button>
          </nav>
        </div>
      )}
    </>
  );
}
