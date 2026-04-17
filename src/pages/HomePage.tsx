import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import PartnersStrip from "@/components/sections/PartnersStrip";
import ServicePillars from "@/components/sections/ServicePillars";
import CaseStudies from "@/components/sections/CaseStudies";
// ReviewsCarousel intentionally omitted until real client testimonials are collected.
// The component still exists at components/sections/ReviewsCarousel.tsx for future re-enable.
import AboutFounder from "@/components/sections/AboutFounder";
import BookingWizard from "@/components/sections/BookingWizard";
import FAQSection from "@/components/sections/FAQSection";
import ContactSection from "@/components/sections/ContactSection";
import SEOHead from "@/components/seo/SEOHead";
import StructuredData, {
  ORGANIZATION_DATA,
  PROFESSIONAL_SERVICE_DATA,
  buildFAQData,
  buildBreadcrumbData,
} from "@/components/seo/StructuredData";
import { FAQS } from "@/data/faqs";

export default function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 500);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="GSD with AI | AI and automation for operators who ship"
        description="A 20-year Schlumberger data veteran and a three-pillar service menu. Workflow automation, AI voice agents, and the reporting layer that sits on top of the tools you already pay for."
        canonical="/"
      />
      <StructuredData data={ORGANIZATION_DATA} id="ld-org" />
      <StructuredData data={PROFESSIONAL_SERVICE_DATA} id="ld-service" />
      <StructuredData data={buildFAQData(FAQS)} id="ld-faq" />
      <StructuredData
        data={buildBreadcrumbData([{ name: "Home", url: (import.meta.env.VITE_SITE_URL as string | undefined) ?? "https://gsd-with-ai.vercel.app/" }])}
        id="ld-breadcrumb"
      />
      <Header />
      <main id="main">
        <HeroSection />
        <PartnersStrip />
        <div className="section-divider" />
        <ServicePillars />
        <CaseStudies />
        <div className="section-divider" />
        <AboutFounder />
        <div className="section-divider" />
        <BookingWizard />
        <FAQSection />
        <div className="section-divider" />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
