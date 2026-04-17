import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEOHead from "@/components/seo/SEOHead";
import BookingLink from "@/components/shared/BookingLink";
import { CASE_STUDIES } from "@/data/caseStudies";

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=500&fit=crop&q=80",
  "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&h=500&fit=crop&q=80",
  "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=1200&h=500&fit=crop&q=80",
];

const IMAGE_ALTS = [
  "Analytics dashboard showing ERP and CRM data integration",
  "Team collaborating around a table with CRM productivity tools",
  "Business professional reviewing procurement documents and analytics",
];

const EXPANDED = [
  {
    description:
      "A fast-growing property management firm was running three tools in parallel. Their ERP owned the financials. A separate CRM owned the client relationships. A project-management tool owned the work itself. Nothing talked to anything else. Leadership walked into Monday standups with three different numbers for the same lead count.",
    challenge:
      "Sales reps were losing the majority of their week to admin. Copying entries from the CRM into the ERP. Chasing status across channels. Rebuilding reports by hand for every board update. The average lead took close to two days to reach a response. The single-customer view that leadership kept asking for did not exist, so upsell opportunities were invisible until after the window had closed.",
    solution:
      "We wired the ERP and CRM into one connected platform with automated flows between every department. Lead assignment runs on rules, not memory. Follow-up sequences trigger on real events. Invoice generation and reporting fire in the background. Leadership sees pipeline, revenue forecast, and team performance on one dashboard that updates in real time. The three-tool tax is gone.",
    results: CASE_STUDIES[0].metrics,
  },
  {
    description:
      "A finance advisory team was losing ground because their advisors were running compliance checklists by hand instead of doing the work clients paid them for. The legacy CRM captured names and addresses. It did not track compliance deadlines, trigger reminders, or integrate with the compliance calendar. The result was exactly what you would expect. Missed dates, regulatory penalties, and quiet client churn.",
    challenge:
      "Onboarding a single new client was averaging six hours of pure admin. Compliance deadlines lived in sticky notes and advisor calendars, not the system. When a deadline slipped, no one knew until the regulator or the client raised it. The CRM was a glorified contact list that added zero leverage to the work.",
    solution:
      "We rebuilt the CRM around compliance cadence. Document collection, deadline alerts, meeting scheduling, and follow-up sequences all run on automation. A real-time dashboard surfaces upcoming deadlines, at-risk clients, and advisor workload, so leadership catches issues before they become client escalations. The system earns its keep the moment a deadline stops being a surprise.",
    results: CASE_STUDIES[1].metrics,
  },
  {
    description:
      "A facilities management firm was losing time and money to a procurement process that ran on forwarded email threads and phone calls. With hundreds of vendors and thousands of monthly transactions, the procurement team was buried in paperwork. Meanwhile, scheduling delays cascaded across projects every time a crew was double-booked or sent to the wrong site.",
    challenge:
      "Purchase orders lived in inboxes. Approval chains were invisible to the CFO. Invoices reconciled against POs by hand, in spreadsheets, with the obvious error rate that produces. Scheduling field crews required cross-referencing three separate systems, and the team still produced double-bookings regularly.",
    solution:
      "We put procurement on rails. Digital PO workflows with automated three-way matching between PO, receipt, and invoice. A centralized vendor portal that consolidates quote comparisons. Approval routing that fires automatically based on dollar thresholds and department. The CFO now reads a live spend dashboard instead of a monthly spreadsheet, and the scheduling algorithm handles crew assignment across regions in real time.",
    results: CASE_STUDIES[2].metrics,
  },
];

export default function CaseStudiesPage() {
  const location = useLocation();

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
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Case Studies | GSD with AI"
        description="Composite operational scenarios based on the most common patterns we see in mid-market teams. ERP/CRM unification, compliance cadence CRM, and procurement automation. Written plainly, with the disclaimers you would expect."
        canonical="/case-studies"
      />
      <Header />

      <main id="main">
        {/* ── Page Hero ── */}
        <section className="bg-white pb-16 pt-32 lg:pb-24 lg:pt-40">
          <div className="container mx-auto px-6 text-center">
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-[hsl(175_72%_38%)]">
              Operational Scenarios
            </span>
            <h1 className="text-4xl font-extrabold text-[hsl(220_25%_14%)] md:text-5xl lg:text-6xl">
              How the work{" "}
              <span className="text-[hsl(175_72%_38%)]">plays out</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-[hsl(215_15%_46%)]">
              The three scenarios below are composites drawn from the operational patterns we see most often in mid-market teams. Named client case studies will be added as ongoing engagements mature.
            </p>
          </div>
        </section>

        {/* ── Composite disclaimer banner ── */}
        <section className="bg-[hsl(175_72%_38%/0.04)] border-y border-[hsl(175_72%_38%/0.15)]">
          <div className="container mx-auto px-6 py-4 text-center">
            <p className="mx-auto max-w-3xl text-sm text-[hsl(215_15%_40%)]">
              <span className="font-semibold text-[hsl(175_72%_38%)]">Illustrative scenarios.</span>{" "}
              Industry, team size, and process details below are composite. Quoted metrics reflect typical ranges we target. Discovery calls cover what your own numbers look like.
            </p>
          </div>
        </section>

        {/* ── Case Study Sections ── */}
        {CASE_STUDIES.map((study, i) => {
          const expanded = EXPANDED[i];
          return (
            <section
              key={study.id}
              id={study.id}
              className={
                i % 2 === 0
                  ? "bg-white py-16 lg:py-24 scroll-mt-24"
                  : "bg-[hsl(210_20%_98%)] py-16 lg:py-24 scroll-mt-24"
              }
            >
              <div className="container mx-auto px-6">
                {/* Hero image */}
                <div className="mb-10 overflow-hidden rounded-2xl">
                  <img
                    src={HERO_IMAGES[i]}
                    alt={IMAGE_ALTS[i]}
                    className="h-[280px] w-full object-cover md:h-[400px] lg:h-[460px]"
                    loading={i === 0 ? "eager" : "lazy"}
                  />
                </div>

                {/* Category badge + title */}
                <div className="mx-auto max-w-3xl">
                  <span className="mb-4 inline-block rounded-full bg-[hsl(175_72%_38%/0.1)] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[hsl(175_72%_38%)]">
                    {study.category}
                  </span>
                  <h2 className="text-3xl font-extrabold text-[hsl(220_25%_14%)] md:text-4xl">
                    {study.title}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-[hsl(215_15%_46%)] md:text-lg">
                    {expanded.description}
                  </p>
                </div>

                {/* Challenge → Solution → Results */}
                <div className="mx-auto mt-14 max-w-3xl space-y-12">
                  {/* The Challenge */}
                  <div>
                    <div className="mb-3 flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-50 text-sm font-bold text-red-500">
                        !
                      </span>
                      <h3 className="text-xl font-bold text-[hsl(220_25%_14%)]">
                        The Challenge
                      </h3>
                    </div>
                    <p className="leading-relaxed text-[hsl(215_15%_46%)]">
                      {expanded.challenge}
                    </p>
                  </div>

                  {/* Our Solution */}
                  <div>
                    <div className="mb-3 flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[hsl(175_72%_38%/0.1)] text-sm font-bold text-[hsl(175_72%_38%)]">
                        &#10003;
                      </span>
                      <h3 className="text-xl font-bold text-[hsl(220_25%_14%)]">
                        Our Solution
                      </h3>
                    </div>
                    <p className="leading-relaxed text-[hsl(215_15%_46%)]">
                      {expanded.solution}
                    </p>
                  </div>

                  {/* The Results */}
                  <div>
                    <div className="mb-5 flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-50 text-sm font-bold text-amber-500">
                        &#9733;
                      </span>
                      <h3 className="text-xl font-bold text-[hsl(220_25%_14%)]">
                        The Results
                      </h3>
                    </div>
                    <div
                      className={`grid gap-4 ${
                        expanded.results.length === 2
                          ? "grid-cols-1 sm:grid-cols-2"
                          : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                      }`}
                    >
                      {expanded.results.map((metric) => (
                        <div
                          key={metric.label}
                          className="rounded-xl border border-[hsl(175_72%_38%/0.15)] bg-[hsl(175_72%_38%/0.04)] p-6 text-center"
                        >
                          <p className="text-3xl font-extrabold text-[hsl(175_72%_38%)] md:text-4xl">
                            {metric.value}
                          </p>
                          <p className="mt-2 text-sm font-medium text-[hsl(215_15%_46%)]">
                            {metric.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="mx-auto mt-12 max-w-3xl text-center">
                  <BookingLink className="inline-flex items-center gap-2 rounded-full bg-[hsl(175_72%_38%)] px-8 py-3.5 text-sm font-semibold text-white shadow-[0_4px_14px_-3px_hsl(175_72%_38%/0.4)] transition-all hover:bg-[hsl(175_60%_30%)] hover:shadow-[0_6px_20px_-3px_hsl(175_72%_38%/0.5)]">
                    Book a call on this scenario
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </BookingLink>
                </div>
              </div>

              {/* Separator between case studies (not after the last one) */}
              {i < CASE_STUDIES.length - 1 && (
                <div className="container mx-auto mt-16 px-6 lg:mt-24">
                  <div className="border-t border-[hsl(215_20%_90%)]" />
                </div>
              )}
            </section>
          );
        })}
      </main>

      <Footer />
    </div>
  );
}
