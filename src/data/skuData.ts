export type SkuTimelineWeek = {
  week: string;
  title: string;
  detail: string;
};

export type SkuFaq = {
  q: string;
  a: string;
};

export type SkuData = {
  slug: "audit-ready" | "field-to-cash" | "pipeline-reset";
  serviceName: string;
  headline: string; // [SKU] — [outcome with named number]
  subhead: string; // who it's for
  isForYou: string[]; // 5 bullets in buyer voice
  whatWeInstall: { tool: string; role: string }[]; // 4-6 named tools
  timeline: SkuTimelineWeek[]; // week-by-week
  whatYouGet: string[]; // deliverables
  caseStudy: {
    slug: string;
    headline: string;
    blurb: string;
  };
  pricing: {
    foundations: string;
    retainer: string;
    separate: string;
  };
  faqs: SkuFaq[]; // 5-7
};

const PRICE_BAND =
  "Foundations from $25K. Operating retainer from $5K/mo. Most engagements ship in 6-8 weeks.";

export const PRICE_BAND_TEXT = PRICE_BAND;

export const SKU_DATA: Record<SkuData["slug"], SkuData> = {
  "audit-ready": {
    slug: "audit-ready",
    serviceName: "Audit-Ready Compliance",
    headline: "Audit-Ready — pull-it-in-15-minutes audit-readiness for your HSE manager.",
    subhead:
      "For HSE and compliance leads at 15-50-person wireline, perforating, or industrial-services shops, where operator certs live in spreadsheets and an MSA audit can wipe out a weekend.",
    isForYou: [
      "You're tracking operator certifications in a shared Excel and praying nothing slips before the next ISN audit.",
      "An MSA compliance request takes you 2 weeks of HSE-team scrambling to compile.",
      "You've lost at least one bid because you couldn't produce the safety documentation in time.",
      "You're paying ISNetworld or Avetta but still doing the cert sync by hand.",
      "Your HSE manager spends 3+ days a month chasing expiring certifications across field locations.",
    ],
    whatWeInstall: [
      { tool: "ISNetworld + Avetta", role: "Live API sync from your system of record (no more dual entry)" },
      { tool: "Your HRIS or ERP", role: "Single source of truth for operator data" },
      { tool: "Make / n8n", role: "Webhook layer that pushes cert updates instantly" },
      { tool: "Airtable or Postgres", role: "Cert + training expiry database with audit trail" },
      { tool: "Twilio + email", role: "30-day expiry alerts to operators and supervisors" },
      { tool: "Audit dashboard", role: "One-click MSA compliance report on demand" },
    ],
    timeline: [
      {
        week: "Week 1",
        title: "Discovery + access",
        detail: "We map your current cert flow, ISN/Avetta accounts, and HRIS/ERP setup. You give us read-only access. You spend ~2 hours total.",
      },
      {
        week: "Week 2",
        title: "Cert database build",
        detail: "We migrate the existing spreadsheet into a structured database with proper expiry, supervisor, and location fields.",
      },
      {
        week: "Week 3",
        title: "ISN/Avetta sync",
        detail: "API integration goes in. Live sync runs in parallel with the manual process for 5 business days.",
      },
      {
        week: "Week 4",
        title: "Expiry alerts + cutover",
        detail: "Twilio + email alerts go live. We retire the manual process. Your HSE lead validates 30 days of upcoming expirations.",
      },
      {
        week: "Week 5",
        title: "Audit dashboard + training",
        detail: "On-demand audit report shipped. 90-minute training session with HSE team. Quick-reference SOP delivered.",
      },
      {
        week: "Week 6",
        title: "Live audit drill",
        detail: "We run a simulated MSA pull together. You time it. If it's not under 15 minutes, we tune until it is.",
      },
    ],
    whatYouGet: [
      "Live ISN/Avetta integration (no more manual cert uploads)",
      "Cert + training expiry database with full audit trail",
      "On-demand MSA-ready PDF compliance report",
      "30-day expiry alert system (operators, supervisors, HSE lead)",
      "HSE team training video + written SOP",
      "90-day post-launch support — slack/email, response within one business day",
    ],
    caseStudy: {
      slug: "safety-compliance",
      headline: "Well servicing company achieves 100% ISNetworld compliance and stops losing bids on missing paperwork",
      blurb:
        "Three days a month chasing expired operator certs across five field locations went to zero. The HSE team's weekend audit scrambles ended.",
    },
    pricing: {
      foundations:
        "$25K covers discovery, ISN/Avetta integration build, cert database migration, expiry alert system, on-demand audit dashboard, training, and the live audit drill in week 6.",
      retainer:
        "$5K/mo covers ongoing managed sync, monitoring, alert tuning, monthly compliance review, and slack/email support.",
      separate:
        "Custom integrations to non-standard compliance platforms (PEC, Veriforce DISA, Browz) are scoped separately. Multi-location HRIS migrations beyond a single source quoted on top.",
    },
    faqs: [
      {
        q: "How long does it take?",
        a: "6 weeks from kickoff to fully operational system. Week 6 ends with a live audit drill that has to clear under 15 minutes — if it doesn't, we tune until it does.",
      },
      {
        q: "Do we need to rip out our existing system?",
        a: "No. We wire into ISN/Avetta and your HRIS as they are. The point is to stop the dual entry, not to replace what works.",
      },
      {
        q: "What if we use Veriforce or Browz instead of ISN/Avetta?",
        a: "Default scope covers ISN and Avetta because those are 90% of the corridor. Veriforce DISA, PEC, and Browz are scoped on top — usually adds 1-2 weeks.",
      },
      {
        q: "Who actually does the work on your side?",
        a: "Maxine architects every engagement. Implementation is done by the GSD with AI engineering team. Maxine reviews each delivery before it ships to your stack.",
      },
      {
        q: "What's the buyer's load during the 6 weeks?",
        a: "About 4 hours total for the HSE lead, mostly in week 1 (discovery) and week 6 (audit drill). We don't run an IT project on your team — that's the whole point.",
      },
      {
        q: "What if our certs are scattered across 5 different folders?",
        a: "Standard. We normalize and migrate. Cert database build (week 2) accounts for messy real-world starting points.",
      },
      {
        q: "Do we own the system after the 6 weeks?",
        a: "Yes. The integrations, the database, the dashboards — all yours. The retainer is operational support, not a license.",
      },
    ],
  },

  "field-to-cash": {
    slug: "field-to-cash",
    serviceName: "Field-to-Cash Automation",
    headline: "Field-to-Cash — 11 hours per week back to your office manager.",
    subhead:
      "For owner-operators of 15-50-person wireline, perforating, or completions shops, where field, accounting, and CRM still don't talk to each other.",
    isForYou: [
      "Your office manager spends Friday nights reconciling field tickets against QuickBooks.",
      "Field crews still write tickets on paper that get driven back to the yard.",
      "You're invoicing 7-14 days after a job because of manual data entry.",
      "Your DSO sits north of 40 days and you've never quite been able to pull it down.",
      "You've lost at least one ticket this quarter that nobody can find.",
    ],
    whatWeInstall: [
      { tool: "Mobile-first field ticketing app", role: "Offline-capable capture on tablet or phone" },
      { tool: "QuickBooks Online or Enterprise", role: "Auto-generated draft invoices the day a ticket closes" },
      { tool: "Make / n8n", role: "Reconciliation + sync layer between dispatch and finance" },
      { tool: "Airtable", role: "Live ticket queue with status, signoff, and exception flags" },
      { tool: "Twilio", role: "SMS notifications for unsigned tickets and approval requests" },
      { tool: "Reporting dashboard", role: "DSO, ticket cycle time, and exception rate, refreshed nightly" },
    ],
    timeline: [
      {
        week: "Week 1",
        title: "Ticket flow mapping",
        detail: "We ride along (virtually) with your dispatch and finance teams. Document the current ticket-to-invoice path. You spend ~3 hours.",
      },
      {
        week: "Week 2",
        title: "Mobile ticketing build",
        detail: "Offline-first ticketing app deployed to one pilot crew. Field-tested across cell-dead and cell-live conditions.",
      },
      {
        week: "Week 3",
        title: "QuickBooks integration",
        detail: "Sync layer goes in. Draft invoices auto-generate from validated tickets. Finance reviews + approves before send.",
      },
      {
        week: "Week 4",
        title: "Pilot crew rollout",
        detail: "Pilot crew runs the full flow from ticket to invoice for a week. We patch friction in real time.",
      },
      {
        week: "Week 5",
        title: "All-crew rollout + training",
        detail: "Remaining crews onboarded. Two 60-minute training sessions. Quick-reference card delivered.",
      },
      {
        week: "Week 6",
        title: "DSO drill + handoff",
        detail: "We run a 7-day cycle measurement. If DSO and ticket cycle time aren't moving, we tune.",
      },
    ],
    whatYouGet: [
      "Mobile-first offline field ticketing app (iOS + Android)",
      "QuickBooks integration with auto-generated draft invoices",
      "Live ticket queue with exception alerts",
      "DSO + cycle-time dashboard, refreshed nightly",
      "Field crew + finance team training (recorded)",
      "90-day post-launch support — slack/email, response within one business day",
    ],
    caseStudy: {
      slug: "wireline-operator",
      headline: "40-person wireline operator cuts DSO by 14 days and gives its office manager 22 hours back per week",
      blurb:
        "Friday-night reconciliations went away. Tickets close, drafts hit QuickBooks, invoices go out the next morning. DSO dropped from 48 to 34 days.",
    },
    pricing: {
      foundations:
        "$25K covers discovery, mobile ticketing app, QuickBooks integration, ticket queue + dashboards, training, and the week-6 DSO drill.",
      retainer:
        "$5K/mo covers managed automation, integration monitoring, monthly reconciliation review, exception tuning, and slack/email support.",
      separate:
        "Custom ERPs (Sage Intacct, NetSuite, Acumatica) instead of QuickBooks are scoped separately. Multi-state payroll integrations quoted on top.",
    },
    faqs: [
      {
        q: "How long does it take?",
        a: "6 weeks from kickoff. Week 6 ends with a 7-day cycle measurement — if DSO and ticket cycle time aren't moving in the right direction, we tune until they are.",
      },
      {
        q: "Will the field guys actually use it?",
        a: "The mobile app is offline-first, designed for cracked screens and gloved hands, with a single-tap ticket flow. Pilot crew tests it for a full week before we roll out.",
      },
      {
        q: "We use Sage / NetSuite / Acumatica, not QuickBooks. Does this still work?",
        a: "Yes. Default scope is QuickBooks because that's 80% of the corridor. Sage Intacct, NetSuite, and Acumatica are scoped on top — usually adds 1-2 weeks.",
      },
      {
        q: "What's the buyer's load during the 6 weeks?",
        a: "About 6 hours total for the owner / operations lead, plus a couple hours per pilot crew member during week 4. We don't run an IT project on your team.",
      },
      {
        q: "What about the tickets we already have in flight?",
        a: "We migrate active jobs over in week 4. Closed jobs stay where they are — we don't backfill historical data unless you ask for it.",
      },
      {
        q: "Do we own the system after the 6 weeks?",
        a: "Yes. The app, the integrations, the dashboards — all yours. The retainer is operational support, not a license.",
      },
      {
        q: "What if a crew is in dead-cell territory for 3 days?",
        a: "Tickets queue locally on the device and sync when they hit signal. We test that explicitly during week 2.",
      },
    ],
  },

  "pipeline-reset": {
    slug: "pipeline-reset",
    serviceName: "Pipeline Reset",
    headline: "Pipeline Reset — a forecast you can actually commit to.",
    subhead:
      "For VPs of Ops and GMs at 15-100-person industrial-services companies whose CRM has 2,400 contacts and 11 are real, and whose pipeline forecast is mostly a guess.",
    isForYou: [
      "Your CRM has thousands of contacts but you can't trust any of the pipeline numbers.",
      "Sales lives in HubSpot or Salesforce, ops lives in spreadsheets, and the two never agree on the same client.",
      "You've never had real margin data on a job until 60 days after it closes.",
      "Your weekly pipeline review is a debate about data, not a decision about resourcing.",
      "You bid on at least one job last quarter where you didn't actually know the historical margin.",
    ],
    whatWeInstall: [
      { tool: "HubSpot or Salesforce", role: "Cleaned, de-duped CRM with enforced data pipeline" },
      { tool: "Make / n8n", role: "Bi-directional sync layer between CRM and field execution" },
      { tool: "Field execution system", role: "Job + cost data wired into the CRM record (FieldFX, ServiceTitan, custom)" },
      { tool: "Postgres or Snowflake", role: "Historical job + margin warehouse for trend analysis" },
      { tool: "Live job-costing dashboard", role: "Margin per client, per service line, refreshed daily" },
      { tool: "Forecast model", role: "Weighted pipeline forecast that reconciles to operations capacity" },
    ],
    timeline: [
      {
        week: "Week 1",
        title: "Data audit",
        detail: "We profile your CRM and field execution data. Find duplicates, dead records, missing fields. ~3 hours of your time.",
      },
      {
        week: "Week 2",
        title: "Clean + de-dupe",
        detail: "Automated CRM cleanup. We surface a 'cleanup queue' for the human-judgment cases. Sales reviews + approves.",
      },
      {
        week: "Week 3",
        title: "CRM ↔ Ops sync",
        detail: "Bi-directional sync between HubSpot/Salesforce and your field execution system goes in.",
      },
      {
        week: "Week 4",
        title: "Job costing + margin warehouse",
        detail: "Historical job and cost data loaded into the warehouse. First margin-per-client report shipped.",
      },
      {
        week: "Week 5",
        title: "Forecast model + dashboard",
        detail: "Weighted pipeline forecast model deployed. Live margin dashboard goes live for ops + sales.",
      },
      {
        week: "Week 6",
        title: "First true pipeline review",
        detail: "We run your weekly pipeline review on the new data. The debate becomes a decision.",
      },
    ],
    whatYouGet: [
      "Cleaned + de-duped CRM with enforced data pipeline",
      "Bi-directional sync between CRM and field execution",
      "Live job-costing dashboard (margin per client, per service line)",
      "Weighted pipeline forecast model",
      "Sales + ops team training (recorded)",
      "90-day post-launch support — slack/email, response within one business day",
    ],
    caseStudy: {
      slug: "pipeline-visibility",
      headline: "Industrial cleaning firm stops bidding blind and lifts win rate on profitable jobs by 22%",
      blurb:
        "Sales and ops finally look at the same numbers. Bids go in with real historical margin data. The pipeline review became a 30-minute meeting.",
    },
    pricing: {
      foundations:
        "$25K covers data audit, CRM cleanup, bi-directional sync, margin warehouse, forecast model, dashboards, and the first live pipeline review in week 6.",
      retainer:
        "$5K/mo covers managed sync, monthly data hygiene review, dashboard tuning, forecast model recalibration, and slack/email support.",
      separate:
        "Custom CRM platforms beyond HubSpot/Salesforce (Pipedrive, Zoho, custom) are scoped separately. Multi-system field execution rollups (3+ tools) quoted on top.",
    },
    faqs: [
      {
        q: "How long does it take?",
        a: "6 weeks from kickoff. Week 6 ends with a live pipeline review run on the new data — if the team can't make a real decision out of it, we tune.",
      },
      {
        q: "Our CRM is a mess. Can we even start?",
        a: "Yes. Week 1 is a data audit, week 2 is the cleanup. We don't need pristine data going in — that's what you're hiring us to fix.",
      },
      {
        q: "We use Salesforce, not HubSpot. Still works?",
        a: "Yes. Default scope covers HubSpot and Salesforce equally. Pipedrive, Zoho, and custom CRMs are scoped separately — usually adds 1-2 weeks.",
      },
      {
        q: "What's the buyer's load during the 6 weeks?",
        a: "About 8 hours total split between sales lead and ops lead, mostly in weeks 1, 2, and 6. We don't run an IT project on your team.",
      },
      {
        q: "What if we don't have historical job-cost data?",
        a: "We can work with as little as 90 days of historicals. The margin warehouse fills out as new jobs close. Forecast model rerunes monthly during the retainer.",
      },
      {
        q: "Do we own the system after the 6 weeks?",
        a: "Yes. The CRM cleanup, the sync layer, the warehouse, the dashboards — all yours. The retainer is operational support, not a license.",
      },
      {
        q: "How do you handle dead contacts during the cleanup?",
        a: "We don't delete. We tag and archive. Sales gets a review queue for borderline cases. Nothing irreversible without human approval.",
      },
    ],
  },
};
