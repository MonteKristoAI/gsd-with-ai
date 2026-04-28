import HeroSection from "@/components/sections/HeroSection";
import FeaturedCaseStudy from "@/components/sections/FeaturedCaseStudy";
import MaxineMiniBlock from "@/components/sections/MaxineMiniBlock";
import HomepageFinalCTA from "@/components/sections/HomepageFinalCTA";
import { Clock, ShieldAlert, TrendingDown } from "lucide-react";

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* Is This You? Cards */}
      <section className="py-24 bg-zinc-50">
        <div className="container mx-auto px-6">
          <div className="mb-12 max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-zinc-900 sm:text-4xl">
              Is this you?
            </h2>
            <p className="mt-4 text-lg text-zinc-600">
              We don&apos;t do general B2B SaaS. We wire systems for people who wear hardhats to work.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Owner-Operator",
                quote: "\"I'm reconciling invoices on a Friday night\"",
                icon: Clock,
                desc: "Admin work is capping your growth and eating your weekends. We automate the workflow from field ticket to invoice.",
                href: "/solutions/field-to-cash"
              },
              {
                title: "HSE Manager",
                quote: "\"I'm tracking certs in Excel and praying\"",
                icon: ShieldAlert,
                desc: "You're chasing down field tickets and certifications just to stay compliant. We connect ISN/Avetta directly to your core systems.",
                href: "/solutions/audit-ready"
              },
              {
                title: "VP of Ops",
                quote: "\"My CRM has 2,400 contacts and 11 are real\"",
                icon: TrendingDown,
                desc: "You have CRM data, but none of it connects to what's actually happening on the pad. We clean the pipeline so you can forecast accurately.",
                href: "/solutions/pipeline-reset"
              },
            ].map((card, idx) => (
              <a href={card.href} key={idx} className="group relative block rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md hover:border-teal-600/30">
                <card.icon className="h-8 w-8 text-teal-700" />
                <h3 className="mt-6 text-xl font-bold text-zinc-900 group-hover:text-teal-800">{card.title}</h3>
                <p className="mt-2 text-sm font-medium italic text-zinc-500">{card.quote}</p>
                <p className="mt-4 text-zinc-600">{card.desc}</p>
                <div className="mt-6 flex items-center text-sm font-semibold text-teal-700">
                  See the SKU <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

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
                from: "2-week audit scrambles",
                to: "Pull-it-in-15-minutes audit-readiness",
              },
              {
                from: "Pipeline forecast that's a guess",
                to: "Forecast you can commit to",
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

      <FeaturedCaseStudy />
      <MaxineMiniBlock />
      <HomepageFinalCTA />
    </>
  );
}
