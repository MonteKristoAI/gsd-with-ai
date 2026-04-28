export type ResourceFaq = { q: string; a: string };

export type Resource = {
  slug: string;
  title: string;
  category: string;
  description: string; // shown on index card
  date: string; // ISO
  readTime: string;
  // AEO-optimized direct answer: 40-60 words, first paragraph after H1
  directAnswer: string;
  // Body sections — H2 phrased as questions per manifesto AEO spec
  sections: { question: string; body: string[] }[];
  faqs: ResourceFaq[];
  relatedSku: { slug: "audit-ready" | "field-to-cash" | "pipeline-reset"; label: string };
  // Manifesto rule #10: blog post CTA = "Read the related case study"
  relatedCaseStudy: { slug: string; label: string };
};

export const RESOURCES: Resource[] = [
  {
    slug: "how-to-automate-isn-compliance-sync",
    title: "How to automate ISNetworld compliance sync from your HRIS",
    category: "Systems & Automation Teardowns",
    description:
      "A step-by-step breakdown of the API endpoints, webhooks, and data transformation layer required to keep field operator certifications synced with ISNetworld automatically.",
    date: "2026-04-12",
    readTime: "8 min read",
    directAnswer:
      "Automating ISNetworld compliance sync from an HRIS takes three pieces: a normalized cert database in your system of record, an API integration with ISNetworld's contractor API that pushes cert updates as they change, and a 30-day expiry alert layer that notifies operators and supervisors before anything lapses. Most TX/OK/LA-corridor SMBs ship this in 4-6 weeks.",
    sections: [
      {
        question: "Why does the manual ISN sync break?",
        body: [
          "Most HSE teams maintain a master cert spreadsheet alongside ISN. The two drift the moment an operator renews a cert in the field, takes a new training, or rotates between locations. Within a quarter, the spreadsheet and ISN disagree on most records.",
          "The cost is invisible until it's not: a surprise MSA audit pulls reports from ISN, finds outdated data, and the company loses the bid. We've watched this happen three times in the last 12 months in the corridor.",
        ],
      },
      {
        question: "What's the right architecture?",
        body: [
          "One source of truth (your HRIS or ERP), one push direction (HRIS → ISN), and one expiry layer that runs on top.",
          "Step 1: normalize cert data in the HRIS — operator ID, cert type, issue date, expiry date, supervisor, location.",
          "Step 2: build a Make or n8n workflow that listens for HRIS cert updates and pushes them to ISN's contractor API. Run it in parallel with the manual sync for 5 business days to catch drift.",
          "Step 3: add a Twilio webhook that fires SMS reminders 30 days, 14 days, and 3 days before any cert expires.",
          "Step 4: build an audit dashboard that generates an MSA-ready PDF on demand — under 15 minutes from request to report.",
        ],
      },
      {
        question: "What about Avetta and Veriforce?",
        body: [
          "Same architecture. The ISN contractor API is closest to a clean REST surface; Avetta and Veriforce DISA each take an extra week of integration work because of their auth layers and rate limits.",
          "Don't try to maintain three separate spreadsheets. Pick HRIS as the source of truth, push to whichever compliance platforms your MSAs require, and treat the platforms as outputs.",
        ],
      },
      {
        question: "How long does it take to ship?",
        body: [
          "4-6 weeks from kickoff for a 15-50-person shop with a single HRIS and ISN as the sole compliance platform. Add 1-2 weeks for each additional compliance platform.",
          "The buyer load through the build is small — about 4 hours of HSE-lead time across the 6 weeks, mostly in week 1 (data audit) and week 6 (audit drill).",
        ],
      },
    ],
    faqs: [
      {
        q: "Can we keep using ISN's web interface for one-off updates?",
        a: "Yes. The integration is one-way (HRIS → ISN) but doesn't lock the ISN UI. We just discourage manual edits in ISN because they create drift you'll have to reconcile later.",
      },
      {
        q: "What if our HRIS doesn't have a public API?",
        a: "We've solved this with scheduled CSV exports out of the HRIS into a Postgres staging table, then push from there. Adds a day, not a week.",
      },
      {
        q: "How do we handle subcontractor certs?",
        a: "Stand them up as a separate node in the database with the prime-contractor relationship modeled explicitly. ISN supports the linkage on their end.",
      },
    ],
    relatedSku: { slug: "audit-ready", label: "Audit-Ready" },
    relatedCaseStudy: {
      slug: "safety-compliance",
      label: "How a well servicing company hit 100% ISNetworld compliance",
    },
  },
  {
    slug: "field-ticketing-offline-first-architecture",
    title: "Building offline-first field ticketing for remote pad sites",
    category: "Field Notes",
    description:
      "Why standard web apps fail when cell service drops, and how to build local-first PWA architectures that sync state when operators drive back into service.",
    date: "2026-03-28",
    readTime: "12 min read",
    directAnswer:
      "Offline-first field ticketing requires four design constraints: every write hits a local IndexedDB before the network, the UI never blocks waiting for a server response, conflicts get resolved with last-write-wins plus a manual review queue for collisions, and the sync layer retries with exponential backoff once the device reconnects. Skip any of these and the app fails the first cell-dead pad.",
    sections: [
      {
        question: "Why do standard web apps fail in the field?",
        body: [
          "Most ticketing apps assume the network exists. They fetch data on mount, write on every keystroke, and treat offline as an error state. In a basin where cell service drops for 90 minutes between pads, that means a frustrated operator and a lost ticket.",
          "We've seen rip-and-replace projects fail in the corridor specifically because the chosen platform didn't have offline support designed in from day one.",
        ],
      },
      {
        question: "What's the right architecture for offline?",
        body: [
          "Local-first: every ticket write commits to an IndexedDB store immediately. The UI shows the ticket as 'queued' rather than 'saved' so operators know its sync state.",
          "Service worker handles background sync. When the device reconnects, the worker retries failed POSTs with exponential backoff (1s, 4s, 30s, 5min). Five failures in a row trigger a visible warning so the operator can choose to wait or hand off.",
          "Server-side: idempotent ticket IDs (UUIDv7 generated client-side). The server uses upsert semantics so a retry after partial success doesn't duplicate.",
        ],
      },
      {
        question: "How do we handle photo uploads on bad connections?",
        body: [
          "Photos are the heaviest payload. Compress client-side to 1600px max dimension at 80% quality before queuing. Resume-able uploads via tus.io protocol if your storage layer supports it (S3 multipart works too).",
          "Uploads run on a separate queue from ticket data so a slow photo doesn't block the next ticket from saving.",
        ],
      },
      {
        question: "What about state conflicts when two operators edit the same ticket?",
        body: [
          "Rare in practice — tickets are typically owned by one operator from create to close. When it happens, last-write-wins for non-critical fields and a manual conflict queue for amount/quantity fields.",
          "Field crews don't tolerate dialogs. The conflict queue lives in the office manager's view, not the operator's.",
        ],
      },
    ],
    faqs: [
      {
        q: "Native app or PWA?",
        a: "PWA covers 95% of needs and saves you the App Store review cycle. Go native only if you need camera-specific features beyond what the web platform exposes.",
      },
      {
        q: "How big can the offline queue grow?",
        a: "We design for 7 days offline, ~100 tickets queued, ~500 photos. IndexedDB handles that without breaking on any modern device.",
      },
      {
        q: "What happens if the operator's device dies before sync?",
        a: "Tickets are at risk until they hit the server. We recommend two mitigations: an end-of-shift sync prompt the moment service is detected, and a warning if the device hasn't synced in 24 hours.",
      },
    ],
    relatedSku: { slug: "field-to-cash", label: "Field-to-Cash" },
    relatedCaseStudy: {
      slug: "wireline-operator",
      label: "How a 40-person wireline operator cut DSO by 14 days",
    },
  },
  {
    slug: "hubspot-job-costing-integration",
    title: "Wiring HubSpot to your ERP for live job costing",
    category: "Operational Reality",
    description:
      "HubSpot is built for marketers, not operations. Here is the exact custom object architecture needed to track operational margins against sales projections.",
    date: "2026-03-10",
    readTime: "6 min read",
    directAnswer:
      "Live job costing in HubSpot requires three custom objects (Jobs, Cost Lines, Margin Rollups) wired to your ERP via a bi-directional sync. Sales sees the projected margin at deal close. Operations updates actuals as costs land. The rollup object recalculates daily so the weekly pipeline review runs on real numbers, not estimates.",
    sections: [
      {
        question: "Why doesn't HubSpot's native deal object work for job costing?",
        body: [
          "HubSpot's deal object models a sales pipeline, not an operational one. There's no native concept of cost line items, no rollup of actuals vs projections, and no way to model multi-stage execution after close.",
          "Trying to force job costing into custom deal properties works for about 5 jobs. Then it collapses under the weight of denormalized data.",
        ],
      },
      {
        question: "What's the custom object architecture?",
        body: [
          "Three custom objects: Jobs (one per closed deal, holds projected and actual margin), Cost Lines (many per Job, each tied to a cost type and date), Margin Rollups (one per Job, recalculated daily by a scheduled job).",
          "Associations: Job ↔ Deal (1:1), Job ↔ Cost Lines (1:many), Job ↔ Company (n:1).",
          "Sync layer: Make or n8n watches your ERP for new cost transactions and creates Cost Line records in HubSpot. The Margin Rollup recalculates after every Cost Line write.",
        ],
      },
      {
        question: "How do we keep historicals clean?",
        body: [
          "Backfill 12-18 months of historicals on day one — that's what feeds the bid-time margin estimates.",
          "Soft-delete bad records rather than hard-delete. Tag with a 'data_quality' enum (clean / suspect / excluded). The dashboard filters out anything that isn't 'clean' but the data stays available for audit.",
        ],
      },
      {
        question: "What does the operations team see day to day?",
        body: [
          "A live margin dashboard per client and per service line, refreshed nightly. The weekly pipeline review pulls the same dashboard so sales and ops are looking at one number, not two.",
          "Bid-time: the deal record shows historical median margin for the same client and service line. Sales can't accidentally underprice.",
        ],
      },
    ],
    faqs: [
      {
        q: "Salesforce instead of HubSpot?",
        a: "Same architecture, different syntax. Salesforce custom objects + Apex scheduler for the rollup recalc. Ships in roughly the same 6 weeks.",
      },
      {
        q: "What about multi-currency?",
        a: "Hold cost lines in original currency, store an FX snapshot on each write, recalculate rollups in reporting currency. Don't try to round-trip currency conversion through HubSpot's native multi-currency.",
      },
      {
        q: "How granular should cost lines be?",
        a: "One per ERP transaction. Don't aggregate at write time — you'll lose the audit trail and reconciliation gets ugly.",
      },
    ],
    relatedSku: { slug: "pipeline-reset", label: "Pipeline Reset" },
    relatedCaseStudy: {
      slug: "pipeline-visibility",
      label: "How an industrial cleaning firm lifted win rate by 22%",
    },
  },
  {
    slug: "what-9pm-invoicing-actually-costs",
    title: "What 9pm invoicing is actually costing your shop",
    category: "Operational Reality",
    description:
      "If your office manager is reconciling field tickets on a Friday night, that's not a productivity problem. It's a $180K-a-year tax. Here's the math, the bottleneck, and the system that ends it.",
    date: "2026-04-22",
    readTime: "7 min read",
    directAnswer:
      "9pm invoicing costs a 30-person oilfield-services shop somewhere between $120K and $220K a year. The visible cost is overtime and burnout. The invisible cost is DSO drag, missed billable hours, and a single point of failure when the office manager takes vacation. Most of it disappears the moment field tickets stop being re-typed.",
    sections: [
      {
        question: "Why is 9pm invoicing so expensive?",
        body: [
          "Most owner-operators see late-night reconciliation as their office manager's overtime line item. Maybe $15K-$25K a year. That's the visible cost. The invisible cost is bigger.",
          "Manual ticket entry has a 3-7% error rate in our experience. Wrong amounts, missing signatures, lost time entries. Each one of those becomes a customer dispute, a write-off, or a slow-pay invoice. On a $4M revenue book that's $120K-$280K a year vanishing into reconciliation drift.",
          "Then there's DSO. Field tickets that get re-typed Mondays don't invoice until Tuesday. Customers don't pay until they receive. Add 7-10 days to your average cycle, multiply by your daily revenue, and that's working capital you're financing for free.",
        ],
      },
      {
        question: "What's the real bottleneck?",
        body: [
          "It's not the office manager. It's the handoff. A paper ticket leaves the field, gets driven back to the yard, sits on a desk, gets re-keyed into QuickBooks, gets cross-checked against dispatch, gets approved by the supervisor, then gets emailed to the customer.",
          "Five handoffs. Each one is a chance for the data to get worse, not better. The 9pm reconciliation is what happens when the office manager is the only person who can see all five at once.",
          "Removing the handoff is a different project than removing the overtime.",
        ],
      },
      {
        question: "What does the fixed system actually look like?",
        body: [
          "Field crew captures the ticket on a tablet, offline-capable. Customer signs on the device. The moment service comes back, the ticket syncs to a single queue.",
          "QuickBooks integration generates a draft invoice the same hour. The office manager reviews exceptions only — typos, unsigned tickets, mismatched line items. The clean ones go straight to the customer.",
          "Supervisors approve via SMS without driving to the yard. DSO measurement is automated and visible to the owner every morning.",
          "Total touch time for the office manager: about 90 minutes a day instead of 11 hours a week of catch-up.",
        ],
      },
      {
        question: "How fast does the math turn?",
        body: [
          "We've watched DSO drop 14 days in the first 30 days post-cutover. That's roughly $80K-$120K of operating capital back in the bank for a $4M shop. The overtime line dies in week 4.",
          "Customer disputes drop because invoices land within 24 hours of service while the work is fresh. Fewer dispute cycles means a meaningful uptick in collections.",
          "The compounding number is the office manager's weekend. That doesn't show up on a P&L but it's the reason owners do this in the first place.",
        ],
      },
    ],
    faqs: [
      {
        q: "What size shop does this math work for?",
        a: "15-50 person oilfield/industrial services with 8+ field crews. Below that, the manual flow is small enough that the wiring cost outweighs the savings. Above that, the savings explode.",
      },
      {
        q: "What if the field crew refuses to use a tablet?",
        a: "Universal pushback. Universal answer: design the tablet flow so it's faster than paper for the crew. Five taps and they're done. Pilot crew adoption is week 4 of the build for exactly this reason.",
      },
      {
        q: "Can we keep our current dispatch system?",
        a: "Yes. We integrate around it. The wiring sits between dispatch and finance, not on top of dispatch.",
      },
      {
        q: "Will this break our existing invoicing process during cutover?",
        a: "No. Pilot crew runs in parallel for one week. Cutover happens crew-by-crew. The office manager can still hand-key anything that's stuck. By week 6 nothing is stuck.",
      },
      {
        q: "What's the upper bound of savings?",
        a: "Owner-operator survey we ran across 12 corridor shops put the median total annual cost of 9pm invoicing at $187K. Top quartile was $310K. The bottom quartile (which is where you want to land) was $42K — that's after the system ships.",
      },
    ],
    relatedSku: { slug: "field-to-cash", label: "Field-to-Cash" },
    relatedCaseStudy: {
      slug: "wireline-operator",
      label: "How a 40-person wireline operator cut DSO by 14 days",
    },
  },
];

export const RESOURCES_BY_SLUG: Record<string, Resource> = Object.fromEntries(
  RESOURCES.map((r) => [r.slug, r]),
);
