import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

// Hardcoded data for the template, typically this would be fetched from a CMS
type Outcome = { value: string; label: string };
type CaseStudyData = {
  category: string;
  h1: string;
  situation: string[];
  approach: string[];
  outcomes: Outcome[];
  outcomeNarrative: string;
  pullQuote: { text: string; attribution: string };
  skuLink: string;
};

const CASE_STUDIES_DATA: Record<string, CaseStudyData> = {
  "wireline-operator": {
    category: "Field-to-Cash",
    h1: "How a 40-person wireline operator cut DSO by 14 days and gave its office manager 22 hours back per week",
    situation: [
      "A wireline operator running 12 trucks across two basins. Field tickets written on paper, driven to the office on Fridays, manually re-typed into QuickBooks on Mondays.",
      "Illegible handwriting, missing signatures, and lost tickets meant the finance team spent 3 days a week reconciling data. DSO sat at 48 days, trapping operating capital.",
      "The office manager was working until 9pm on Fridays just to keep the invoicing on schedule.",
    ],
    approach: [
      "Deployed an offline-first mobile ticketing app on iOS + Android, tested in cell-dead conditions across both basins.",
      "Built a Make-based reconciliation layer between the dispatch queue and the field ticket database, surfacing exceptions to the office manager.",
      "Integrated validated tickets straight into QuickBooks Online, auto-generating draft invoices the day a job closed.",
      "Wired Twilio SMS approvals so supervisors sign off without driving back to the yard.",
    ],
    outcomes: [
      { value: "14 days", label: "DSO reduction (48 → 34)" },
      { value: "22 hrs/wk", label: "Admin time returned to office manager" },
      { value: "<24 hrs", label: "Job-close to invoice cycle" },
    ],
    outcomeNarrative:
      "Manual data entry disappeared. Invoices go out the next morning instead of the next week. The Friday-night reconciliation routine is gone. The office manager runs the closeout in under 90 minutes instead of 11 hours.",
    pullQuote: {
      text: "We were losing whole Fridays to reconciliations that nobody on the crew even saw the value of. Now closeout is one screen.",
      attribution: "Office manager, 40-person wireline operator (TX)",
    },
    skuLink: "/solutions/field-to-cash",
  },
  "safety-compliance": {
    category: "Audit-Ready",
    h1: "How a well servicing company hit 100% ISNetworld compliance and stopped losing bids on missing paperwork",
    situation: [
      "An HSE manager spending 3 days every month tracking operator certifications across 5 field locations. Cert data lived in one massive, perpetually out-of-date Excel spreadsheet.",
      "When a major operator ran a surprise compliance audit, the company couldn't produce the safety documentation in time and lost a multi-year contract bid.",
      "The manual cert chase was a direct revenue risk and the HSE lead was burning weekends to keep up.",
    ],
    approach: [
      "Migrated all certification data from spreadsheets into a structured, cloud-based database with proper expiry, supervisor, and location fields.",
      "Built a live API integration between the HRIS and ISNetworld so cert updates push automatically.",
      "Wired a Twilio webhook that sends 30-day expiry reminders to operators and supervisors.",
      "Shipped an on-demand audit dashboard that generates an MSA-ready PDF in under 15 minutes.",
    ],
    outcomes: [
      { value: "100%", label: "ISNetworld compliance maintained" },
      { value: "85%", label: "Reduction in monthly HSE reporting time" },
      { value: "<15 min", label: "Time to produce MSA-ready audit report" },
    ],
    outcomeNarrative:
      "The HSE team no longer spends weekends chasing paperwork. Compliance is held at 100%, audit reports are instant, and the company secured a new multi-year MSA on the back of the new compliance record.",
    pullQuote: {
      text: "Last MSA pull took 14 days. The next one took 12 minutes. That's the whole story.",
      attribution: "HSE Manager, well servicing company (OK)",
    },
    skuLink: "/solutions/audit-ready",
  },
  "pipeline-visibility": {
    category: "Pipeline Reset",
    h1: "How an industrial cleaning firm stopped bidding blind and lifted win rate on profitable jobs by 22%",
    situation: [
      "Sales team lived in HubSpot. Operations team lived in spreadsheets. The two systems never talked. When a job closed, nobody knew the actual margin until the end of the quarter.",
      "The team was bidding from estimated costs instead of historical actuals, consistently underpricing complex jobs and overpricing simple ones.",
      "The weekly pipeline review was a 90-minute debate about whose data was right, not a decision about resourcing.",
    ],
    approach: [
      "Standardized the HubSpot CRM to enforce data discipline at job creation, stage progression, and close.",
      "Built a bi-directional sync between HubSpot and the field execution system using Make.",
      "Loaded 18 months of historical job + cost data into a Postgres warehouse for trend analysis.",
      "Shipped a live job-costing dashboard showing margin per client and per service line, refreshed daily.",
      "Deployed a weighted pipeline forecast model that reconciles to operations capacity.",
    ],
    outcomes: [
      { value: "+22%", label: "Win rate on profitable jobs" },
      { value: "98%", label: "Margin accuracy at bid time" },
      { value: "Real-time", label: "Pipeline visibility across sales + ops" },
    ],
    outcomeNarrative:
      "Sales and ops finally look at the same numbers. The pipeline review became a 30-minute decision meeting instead of a 90-minute argument. Bids go in with real historical margin data and the team has stopped taking on work that secretly loses money.",
    pullQuote: {
      text: "The first time we ran the new pipeline review I realized we'd been bidding three jobs a quarter that we shouldn't have. That was the moment.",
      attribution: "VP of Operations, industrial cleaning firm (LA)",
    },
    skuLink: "/solutions/pipeline-reset",
  },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const data = CASE_STUDIES_DATA[resolvedParams.slug];
  if (!data) return { title: "Case Study Not Found" };
  return {
    title: data.h1,
    description: data.situation[0],
    alternates: { canonical: `https://www.getsstuffdone.com/case-studies/${resolvedParams.slug}` },
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const data = CASE_STUDIES_DATA[resolvedParams.slug];

  if (!data) {
    notFound();
  }

  return (
    <article className="container mx-auto px-6 py-24 min-h-[80vh]">
      <div className="max-w-3xl mx-auto">
        <Link href="/case-studies" className="inline-flex items-center text-sm font-semibold text-teal-600 hover:text-teal-700 mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Case Studies
        </Link>

        <header className="mb-12">
          <span className="inline-flex items-center rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-700 mb-4">
            {data.category}
          </span>
          <h1 className="text-4xl font-extrabold text-zinc-900 sm:text-5xl leading-tight">
            {data.h1}
          </h1>
        </header>

        {/* Outcome metrics — surfaced up top per manifesto spec */}
        <section className="mb-16 grid gap-4 sm:grid-cols-3">
          {data.outcomes.map((o) => (
            <div key={o.label} className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
              <div className="text-3xl font-extrabold text-teal-600">{o.value}</div>
              <div className="mt-2 text-sm font-medium text-zinc-700">{o.label}</div>
            </div>
          ))}
        </section>

        <div className="space-y-14">
          <section>
            <h2 className="mb-4 border-b border-zinc-200 pb-2 text-xs font-bold uppercase tracking-wider text-zinc-500">
              The Situation
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-zinc-700">
              {data.situation.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </section>

          <section>
            <h2 className="mb-4 border-b border-zinc-200 pb-2 text-xs font-bold uppercase tracking-wider text-zinc-500">
              The Approach
            </h2>
            <ul className="list-disc space-y-3 pl-5 text-lg text-zinc-700 marker:text-teal-600">
              {data.approach.map((b, idx) => (
                <li key={idx} className="pl-2">{b}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="mb-4 border-b border-zinc-200 pb-2 text-xs font-bold uppercase tracking-wider text-zinc-500">
              The Outcome
            </h2>
            <p className="text-lg leading-relaxed text-zinc-700">{data.outcomeNarrative}</p>
          </section>

          {/* Pull quote */}
          <blockquote className="rounded-2xl bg-teal-600 p-10 text-white">
            <p className="text-xl leading-relaxed">&ldquo;{data.pullQuote.text}&rdquo;</p>
            <footer className="mt-6 text-sm font-medium text-teal-100">
              — {data.pullQuote.attribution}
            </footer>
          </blockquote>

          {/* Per manifesto rule #10: case study CTA = Book a Call about THIS pattern */}
          <section className="rounded-2xl bg-zinc-900 p-10 text-center text-white">
            <h3 className="text-2xl font-bold">Want this exact pattern in your stack?</h3>
            <p className="mx-auto mt-4 max-w-lg text-zinc-400">
              Book a 20-minute call. Walk us through where you sit on the same curve, and we&rsquo;ll walk back the first thing worth wiring.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href={`/contact?sku=${data.skuLink.replace("/solutions/", "")}`}
                className="inline-flex items-center gap-2 rounded-xl bg-teal-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal-500"
              >
                Book a call about {data.category}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={data.skuLink}
                className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/20"
              >
                See the {data.category} SKU
              </Link>
            </div>
          </section>
        </div>
      </div>
    </article>
  );
}
