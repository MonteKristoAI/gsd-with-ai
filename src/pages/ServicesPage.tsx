import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEOHead from "@/components/seo/SEOHead";
import BookingLink from "@/components/shared/BookingLink";
import { SERVICE_PILLARS } from "@/data/services";
import {
  Megaphone,
  Users,
  Mail,
  Bot,
  PhoneCall,
  Smartphone,
  GraduationCap,
  Mic,
  TrendingUp,
  BarChart3,
  Cog,
  Search,
  Workflow,
  Cloud,
  ShieldCheck,
  Server,
  Headphones,
  RefreshCw,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  Megaphone,
  Users,
  Mail,
  Bot,
  PhoneCall,
  Smartphone,
  GraduationCap,
  Mic,
  TrendingUp,
  BarChart3,
  Cog,
  Search,
  Workflow,
  Cloud,
  ShieldCheck,
  Server,
  Headphones,
  RefreshCw,
};

const PILLAR_IMAGES: Record<string, string> = {
  "digital-foundations":
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80",
  "ai-powered-growth":
    "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=800&h=600&fit=crop&q=80",
  "secure-scalable-it":
    "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&h=600&fit=crop&q=80",
};

const PILLAR_IMAGE_ALTS: Record<string, string> = {
  "digital-foundations": "Digital marketing dashboard with analytics and lead generation metrics",
  "ai-powered-growth": "Artificial intelligence visualization representing AI-powered business growth",
  "secure-scalable-it": "Server infrastructure with secure network connections and cloud technology",
};

export default function ServicesPage() {
  const location = useLocation();

  // When navigating here with a hash (e.g. /services#ai-powered-growth from a card),
  // scroll to that pillar section after the page mounts.
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 200);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-background font-sans">
      <SEOHead
        title="Services | GSD with AI"
        description="Three pillars: Digital Foundations, AI Powered Growth, Secure and Scalable IT. Shipped in weeks, not quarters. Built by a 20-year Schlumberger operator."
        canonical="/services"
      />
      <Header />

      <main id="main">
        {/* ── Hero ── */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[hsl(175_72%_38%/0.05)] to-white py-24 md:py-32">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              What we build
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600 md:text-xl">
              Three pillars, each scoped to a fixed-price project or an ongoing monthly retainer. Pick the one that maps to the fire closest to your desk. We can start with that and expand as the stack earns trust.
            </p>
          </div>
        </section>

        {/* ── Service Pillar Sections ── */}
        {SERVICE_PILLARS.map((pillar, index) => {
          const isEven = index % 2 === 1;
          const bgClass = isEven ? "bg-gray-50/70" : "bg-white";

          return (
            <section
              key={pillar.id}
              id={pillar.id}
              className={`${bgClass} py-20 md:py-28 scroll-mt-24`}
            >
              <div className="mx-auto max-w-7xl px-6">
                <div
                  className={`flex flex-col items-center gap-12 lg:gap-16 ${
                    isEven ? "lg:flex-row-reverse" : "lg:flex-row"
                  }`}
                >
                  {/* Image */}
                  <div className="w-full lg:w-5/12 flex-shrink-0">
                    <img
                      src={PILLAR_IMAGES[pillar.id]}
                      alt={PILLAR_IMAGE_ALTS[pillar.id]}
                      className="h-auto w-full rounded-2xl object-cover shadow-lg"
                      loading="lazy"
                      width={800}
                      height={600}
                    />
                  </div>

                  {/* Content */}
                  <div className="w-full lg:w-7/12">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                      {pillar.title}
                    </h2>
                    <p className="mt-3 text-lg text-gray-500">
                      {pillar.description}
                    </p>

                    <ul className="mt-10 space-y-6">
                      {pillar.services.map((service) => {
                        const Icon = ICON_MAP[service.icon];
                        return (
                          <li key={service.name} className="flex gap-4">
                            <span className="mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-teal-50 text-teal-600">
                              {Icon ? <Icon className="h-5 w-5" /> : null}
                            </span>
                            <div>
                              <h3 className="text-base font-semibold text-gray-900">
                                {service.name}
                                {service.nickname && (
                                  <span className="ml-2 text-sm font-medium text-teal-600">
                                    {service.nickname}
                                  </span>
                                )}
                              </h3>
                              <p className="mt-1 text-sm leading-relaxed text-gray-500">
                                {service.description}
                              </p>
                            </div>
                          </li>
                        );
                      })}
                    </ul>

                    <div className="mt-10">
                      <BookingLink className="inline-flex items-center gap-2 rounded-lg bg-teal-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-teal-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600">
                        Book a call on this pillar
                        <ArrowRight className="h-4 w-4" />
                      </BookingLink>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </main>

      <Footer />
    </div>
  );
}
