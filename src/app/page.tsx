import HeroSection from "@/components/sections/HeroSection";
import AboutFounder from "@/components/sections/AboutFounder";
import ContactSection from "@/components/sections/ContactSection";
import CaseStudies from "@/components/sections/CaseStudies";
import { Clock, ShieldAlert, TrendingDown } from "lucide-react";

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* From -> To Strip */}
      <section className="bg-zinc-900 py-12 text-white">
        <div className="container mx-auto px-6">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                from: "9pm invoicing",
                to: "11 hours back per week",
              },
              {
                from: "Missing safety certs",
                to: "100% audit-ready",
              },
              {
                from: "Guessing on margins",
                to: "Live job costing",
              },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col border-l border-zinc-700 pl-6">
                <span className="text-sm font-medium text-zinc-400 line-through">
                  From: {item.from}
                </span>
                <span className="mt-1 text-lg font-bold text-teal-400">
                  To: {item.to}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Is This You? Cards */}
      <section className="py-24 bg-zinc-50">
        <div className="container mx-auto px-6">
          <div className="mb-12 max-w-2xl">
            <h2 className="text-3xl font-extrabold text-zinc-900 sm:text-4xl">
              Who we build for
            </h2>
            <p className="mt-4 text-lg text-zinc-600">
              We don&apos;t do general B2B SaaS. We wire systems for people who wear hardhats to work.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Owner-Operator",
                quote: "\"I'm buried in the field and the office.\"",
                icon: Clock,
                desc: "You know how to run a crew, but admin work is capping your growth and eating your weekends.",
              },
              {
                title: "HSE Manager",
                quote: "\"Safety reports take me all weekend.\"",
                icon: ShieldAlert,
                desc: "You're constantly chasing down field tickets and certifications just to stay compliant.",
              },
              {
                title: "VP of Ops",
                quote: "\"My pipeline is full of blind spots.\"",
                icon: TrendingDown,
                desc: "You have CRM data, but none of it connects to what's actually happening on the pad.",
              },
            ].map((card, idx) => (
              <div key={idx} className="group relative rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
                <card.icon className="h-8 w-8 text-teal-600" />
                <h3 className="mt-6 text-xl font-bold text-zinc-900">{card.title}</h3>
                <p className="mt-2 text-sm font-medium italic text-zinc-500">{card.quote}</p>
                <p className="mt-4 text-zinc-600">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CaseStudies />
      <AboutFounder />
      <ContactSection />
    </>
  );
}
