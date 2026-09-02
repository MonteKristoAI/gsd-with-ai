// GSD, Get Stuff Done LLC
// Source of truth for company + founder entity data. Aligned to Rebuild Brief v3
// ("The Torque Method" positioning). HARD RULES enforced here:
//   - No U.S. state names on public copy ("U.S. energy corridor" instead).
//   - No former-employer name ("Fortune 100 energy services").
//   - Every call CTA is a "20-minute call" (never 30-minute / "discovery call").
//   - Founder city ("Houston-based") is the one allowed geographic reference.

export const COMPANY = {
  name: "Gets Stuff Done",
  shortName: "GSD",
  legal: "Get Stuff Done LLC",
  tagline:
    "Fractional revenue operations for oilfield technology companies. Delivered in weeks.",
  // Real number stays as the published line. A dedicated SMS/text number is
  // added to the sticky mobile bar only once one is published (Brief 7.3).
  phone: "+1 (281) 844-2458",
  email: "maxine.aitkenhead@getsstuffdone.com",
  // Public geography is corridor-level only. Founder city is the allowed exception.
  location: "U.S. energy corridor",
  website: "https://www.getsstuffdone.com",
  social: {
    // LinkedIn only per Brief 7.5. Facebook retired.
    linkedin: "https://www.linkedin.com/in/maxineaitkenhead/",
    facebook: "",
  },
  // Direct Google Business Profile review URL. MUST be a real GBP review form,
  // never a generic Google search. Empty until verified.
  googleReviews: "",

  // The one positioning line every page reinforces (Brief 0).
  positioning:
    "GSD builds the torque oilfield technology companies need to close deals against long sales cycles and skeptical buying committees. Fractional revenue operations, delivered in weeks by a team that spent 20 years inside the operators our clients sell to.",

  // Standard call CTA language - use everywhere.
  cta: {
    primaryLabel: "Book a 20-minute call",
    // Every booking CTA points at the Bitly, never at the raw Bookings URL.
    // It currently redirects to Maxine's Outlook Bookings page. When that page
    // changes, the Bitly is repointed and nothing in this codebase is touched.
    bookHref: "https://bit.ly/Max_GSD",
    callMinutes: 20,
  },

  // The two doors (Brief 1.2 Block A).
  offers: {
    diagnostic: {
      name: "The Torque Diagnostic",
      eyebrow: "Door 1 · Entry engagement",
      href: "/torque-diagnostic",
      priceBand: "From $25K · 6–8 weeks",
      oneLiner:
        "A fixed-scope 6–8 week engagement that produces your Torque Method growth plan and delivers one or two implemented quick wins. The low-risk first move.",
      cta: "See the diagnostic",
    },
    partnership: {
      name: "The Torque Growth Partnership",
      eyebrow: "Door 2 · Ongoing partnership",
      href: "/growth-partnership",
      priceBand: "From $20K/mo · priced by scope",
      oneLiner:
        "Fractional revenue operations installed and run across three layers: Torque, Traction, Thrust. Month-to-month. Every partnership starts with a Torque Diagnostic.",
      cta: "See the partnership",
    },
  },

  founder: {
    name: "Maxine Aitkenhead",
    title: "Founder",
    // Canonical bio sentence (Brief 8.6) - keep near-identical everywhere for
    // LLM entity recognition (About, homepage block, LinkedIn, author boxes).
    canonicalBio:
      "Maxine Aitkenhead is the founder of GSD, a fractional revenue operations firm for oilfield technology companies. She spent 20 years inside Fortune 100 energy services building data systems before founding GSD.",
    positioningLine:
      "20 years inside Fortune 100 energy services, building data systems for the operators our clients sell to. Now installing fractional revenue operations at oilfield technology companies.",
    bio: "Maxine Aitkenhead is the founder of GSD, a fractional revenue operations firm for oilfield technology companies. She spent 20 years inside Fortune 100 energy services building data systems before founding GSD.",
    bioParagraphs: [
      "I spent 20 years inside Fortune 100 energy services, building data systems for the operators that oilfield technology companies sell into. Six continents, two languages, one constant: the companies who win are the ones whose growth motion is wired as tightly as their product.",
      "I started GSD because most oilfield technology companies in the $8M–$40M range already own the right tools. Salesforce, HubSpot, 6sense, Enverus, LinkedIn. They are not missing software. They are missing the revenue operations wiring between the tools, the discipline to ship every week, and someone who has sat on the buyer's side of the table.",
      "We do not run twelve-month transformations. Every engagement starts with a Torque Diagnostic and ships measurable output in weeks. That is the whole job: build the torque a company needs to close deals against a skeptical buying committee.",
    ],
    credentials: [
      "20 years inside Fortune 100 energy services",
      "Subsurface Petroleum Data Management certified",
      "MSc, International Business Marketing",
      "Blockchain and smart-contract practitioner",
      "Houston-based · works with oilfield technology companies across the U.S. energy corridor",
    ],
    vision: [
      {
        title: "Fluent in the buyer's customer",
        text: "The people your buyers sell to speak in torque, wellhead, LOE, and NPT. Twenty years inside that world means the ROI story lands with the technical evaluators who actually decide.",
      },
      {
        title: "Bridge the tech-to-ops gap",
        text: "Most consultants speak one language. An International Business Marketing background sits on top of a Subsurface Petroleum Data Management certification, which means the technical architecture and the P&L conversation happen in the same sentence.",
      },
      {
        title: "Modern stack, classical discipline",
        text: "The execution stack is AI-native: research, content, lead enrichment, and reporting move at machine speed. The discipline is unchanged. Ship something measurable every two weeks or the engagement is in trouble.",
      },
    ],
  },

  // Red M cause line (Brief 7.4) - persistent footer, above copyright.
  cause: {
    label: "Red M",
    url: "https://www.joinredm.com",
    hotlineLabel: "National Human Trafficking Hotline",
    hotline: "1-888-373-7888",
    hotlineTel: "tel:18883737888",
  },

  webhooks: {
    booking: "https://primary-production-5fdce.up.railway.app/webhook/gsd-discovery-call",
    contact: "https://primary-production-5fdce.up.railway.app/webhook/gsd-contact",
  },
} as const;

// Primary site navigation (Brief 7.5 order).
export const NAV = [
  { label: "Torque Method", href: "/torque-method" },
  { label: "Torque Diagnostic", href: "/torque-diagnostic" },
  { label: "Growth Partnership", href: "/growth-partnership" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
] as const;
