export const COMPANY = {
  name: "GSD with AI",
  legal: "Gets Stuff Done LLC",
  tagline: "AI and automation, built for operators who ship",
  phone: "+1 (281) 844-2458",
  email: "info@getsstuffdone.com",
  location: "Texas, USA",
  website: "https://www.getsstuffdone.com",
  social: {
    linkedin: "https://www.linkedin.com/in/maxineaitkenhead/",
    facebook: "https://www.facebook.com/p/Gets-Stuff-Done-LLC-61580812436146/",
  },
  // Direct Google Business Profile review URL. Format:
  //   https://g.page/r/PLACE_ID/review
  //   or https://search.google.com/local/writereview?placeid=PLACE_ID
  // Leave as empty string until Maxine's GBP is verified; the rating popup
  // falls back to the internal feedback form in that case.
  // This URL, when set, MUST point directly at the GSD Google Business
  // Profile review form. It must NOT be a generic Google search (which
  // returns unrelated and sometimes hostile results for the company name).
  googleReviews: "",
  founder: {
    name: "Maxine Aitkenhead",
    title: "Founder",
    positioningLine:
      "20 years building data systems for some of the world's most demanding operators. Now applying the same playbook to 30-person shops in the TX/OK/LA corridor.",
    bio: "I spent 20 years inside Schlumberger building data systems that had to survive in places without reliable electricity. Six continents, two languages, one constant: the operators who actually win are the ones whose tools talk to each other.",
    bioParagraphs: [
      "I spent 20 years inside Schlumberger building data systems that had to survive in places without reliable electricity. Six continents, two languages, one constant: the operators who actually win are the ones whose tools talk to each other.",
      "I started GSD with AI because most SMBs in the TX/OK/LA corridor already own the right tools. HubSpot, QuickBooks, ISN, Avetta. They're not missing software. They're missing the wiring between the tools, the discipline to ship one change a week, and someone who has watched a Fortune 100 system work in 17 countries.",
      "We don't run 12-month digital transformations. We ship something measurable into your stack every two weeks. Week 6, a system runs that wasn't running on day one. That's the whole job.",
    ],
    credentials: [
      "20 years at Schlumberger",
      "Subsurface Petroleum Data Management certified",
      "MSc, International Business Marketing",
      "Blockchain and smart-contract practitioner",
      "Houston-based. Works with TX/OK/LA corridor SMBs.",
    ],
    vision: [
      { title: "Work across geographies", text: "Built query systems in London. Ran training across Europe, Russia, and Africa. The pattern is always the same. Once the team trusts the data, everything downstream gets faster." },
      { title: "Bridge the tech-to-ops gap", text: "Most consultants speak one language. I speak both. An International Business Marketing background sits on top of a Subsurface Petroleum Data Management certification, which is a long way of saying that the technical architecture and the P&L conversation happen in the same sentence." },
      { title: "Modern stack, classical discipline", text: "The recent decade has been blockchain, smart contracts, and the governance layer under them. The classical discipline is unchanged. Ship something real every two weeks or the engagement is in trouble." },
    ],
  },
  webhooks: {
    booking: "https://primary-production-5fdce.up.railway.app/webhook/gsd-discovery-call",
    contact: "https://primary-production-5fdce.up.railway.app/webhook/gsd-contact",
  },
};
