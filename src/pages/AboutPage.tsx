import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEOHead from "@/components/seo/SEOHead";
import BookingLink from "@/components/shared/BookingLink";
import { COMPANY } from "@/data/companyInfo";
import founderImg from "@/assets/founder-maxine.webp";
import {
  ArrowRight,
  Network,
  Workflow,
  Rocket,
} from "lucide-react";

const VALUES = [
  {
    icon: Network,
    title: "One operational truth",
    description:
      "When sales, finance, and operations each own their own spreadsheet, leadership never gets the same number twice. We connect the systems under the spreadsheets so Monday morning looks the same in every meeting.",
  },
  {
    icon: Workflow,
    title: "Automation that survives Monday",
    description:
      "Most automation breaks the first time someone changes a field name. We design flows that log their own failures, notify the owner, and keep running. If a workflow needs a human babysitter, we rebuilt it wrong.",
  },
  {
    icon: Rocket,
    title: "Ship every two weeks",
    description:
      "Transformation decks gather dust. Two-week ship cycles do not. Every engagement is structured so something runs in production on a regular cadence, and the client can see the number move between check-ins.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <SEOHead
        title="About | GSD with AI"
        description="Meet the team behind GSD with AI. Founded by Maxine Aitkenhead, we deliver enterprise-level IT and AI solutions that are affordable, scalable, and impactful for businesses of all sizes."
        canonical="/about"
      />
      <Header />

      <main id="main">
        {/* ── Page Hero ── */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[hsl(175_72%_38%/0.06)] via-white to-[hsl(175_72%_38%/0.03)] py-24 md:py-32">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              About <span className="text-[hsl(175_72%_38%)]">GSD with AI</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600 md:text-xl">
              A Schlumberger data veteran, a three-pillar service menu, and a deliberate refusal to sell shelf-ware. That is the short version. The longer version is below.
            </p>
          </div>
        </section>

        {/* ── Founder Section ── */}
        <section className="bg-white py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
              {/* Photo */}
              <div className="w-full flex-shrink-0 lg:w-5/12">
                <img
                  src={founderImg}
                  alt={`${COMPANY.founder.name}, Founder & CEO of GSD with AI`}
                  className="mx-auto h-auto w-full max-w-md rounded-2xl object-cover shadow-xl"
                  loading="eager"
                  width={600}
                  height={750}
                />
              </div>

              {/* Bio */}
              <div className="w-full lg:w-7/12">
                <p className="text-sm font-semibold uppercase tracking-widest text-[hsl(175_72%_38%)]">
                  The Person Behind GSD
                </p>
                <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Meet {COMPANY.founder.name}
                </h2>
                <p className="mt-1 text-lg font-medium text-gray-500">
                  {COMPANY.founder.title}
                </p>

                <p className="mt-6 text-base leading-relaxed text-gray-600">
                  {COMPANY.founder.bio}
                </p>

                {/* Credential Badges */}
                <div className="mt-8 flex flex-wrap gap-2">
                  {COMPANY.founder.credentials.map((cred) => (
                    <span
                      key={cred}
                      className="inline-flex items-center rounded-full bg-teal-50 px-3.5 py-1.5 text-xs font-semibold text-teal-700 ring-1 ring-inset ring-teal-600/20"
                    >
                      {cred}
                    </span>
                  ))}
                </div>

                {/* Vision Items */}
                <div className="mt-10 space-y-6">
                  {COMPANY.founder.vision.map((item) => (
                    <div
                      key={item.title}
                      className="border-l-4 border-[hsl(175_72%_38%)] pl-5"
                    >
                      <h3 className="text-base font-semibold text-gray-900">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-gray-500">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Values / Mission Section ── */}
        <section className="bg-gray-50/70 py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-[hsl(175_72%_38%)]">
                How we run engagements
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Three non-negotiables
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                The principles below are the ones we learned from twenty years of Fortune 100 data work. If they do not fit how your team operates, we will say so on the discovery call and save both sides a month.
              </p>
            </div>

            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {VALUES.map((value) => {
                const Icon = value.icon;
                return (
                  <div
                    key={value.title}
                    className="group rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-100 transition-shadow hover:shadow-md"
                  >
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-600 transition-colors group-hover:bg-teal-100">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-5 text-lg font-semibold text-gray-900">
                      {value.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-gray-500">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Team / Culture Image ── */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&h=500&fit=crop&q=80"
                alt="Modern team collaborating in an open office environment"
                className="h-auto w-full object-cover"
                loading="lazy"
                width={1200}
                height={500}
              />
            </div>
            <p className="mt-6 text-center text-sm text-gray-400">
              Building smarter workflows, one business at a time.
            </p>
          </div>
        </section>

        {/* ── The GSD Promise ── */}
        <section className="bg-gray-50/70 py-20 md:py-28">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-[hsl(175_72%_38%)]">
              What we commit to
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              The GSD promise
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              We do not sell slide decks. We do not sell roadmaps. Every piece of work we deliver runs in your production stack, touches your team, and changes a number on your dashboard. If the first two weeks do not produce something real, the engagement is not tracking and we say so out loud.
            </p>
            <p className="mt-4 text-base leading-relaxed text-gray-500">
              The clients who stay hire us because we treat their bottleneck as ours. The measure of an engagement is not the deliverables list. It is the hours they got back, the errors that stopped happening, and the revenue their team unlocked while not firefighting.
            </p>
          </div>
        </section>

        {/* ── CTA Section ── */}
        <section className="bg-white py-20 md:py-28">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Want to see the pattern in your own operation?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              The discovery call is 30 minutes. You walk us through where the work is friction right now. We walk back a diagnostic on where the automation layer would land first. Nothing committed, no follow-up sequence.
            </p>
            <div className="mt-8">
              <BookingLink className="inline-flex items-center gap-2 rounded-lg bg-teal-600 px-8 py-3.5 text-base font-semibold text-white shadow-sm transition-colors hover:bg-teal-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600">
                Book a Discovery Call
                <ArrowRight className="h-5 w-5" />
              </BookingLink>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
