export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  description: string;
  metrics: { label: string; value: string }[];
}

/**
 * Composite scenarios drawn from the operational patterns we see most often in
 * mid-market teams. Not named client case studies. The disclaimer on
 * CaseStudiesPage.tsx makes this explicit to readers. Metrics reflect the
 * typical ranges we target, not a specific client outcome.
 */
export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "erp-unified-crm",
    title: "When ERP and CRM finally agreed on the same customer",
    category: "Workflow Automation",
    description:
      "A property management team was running one system for financials and another for client relationships. Leadership got two different versions of every number. We wired the two together and made Monday look the same in every meeting.",
    metrics: [
      { label: "admin time returned", value: "~75%" },
      { label: "lead response target", value: "< 2 min" },
      { label: "revenue lift target", value: "~40%" },
    ],
  },
  {
    id: "crm-productivity",
    title: "A compliance deadline stops being a surprise",
    category: "CRM Implementation",
    description:
      "A finance advisory team was tracking compliance dates in spreadsheets. Some got missed, some got double-done, none of it reached leadership before a client called to complain. We rebuilt the CRM around compliance cadence instead of contact lists.",
    metrics: [
      { label: "per-advisor throughput", value: "~3x" },
      { label: "manual data errors", value: "-92%" },
      { label: "client retention lift", value: "+35%" },
    ],
  },
  {
    id: "procurement-efficiency",
    title: "Procurement moves off email chains",
    category: "Process Automation",
    description:
      "A facilities firm was running vendor procurement through forwarded email threads. The PO approvals chain was invisible to the CFO, and scheduling crews across three regions regularly double-booked. We put the flow on rails and the CFO got a live spend dashboard instead of a monthly spreadsheet.",
    metrics: [
      { label: "admin workload returned", value: "~40%" },
      { label: "scheduling throughput", value: "~2x" },
      { label: "annualized cost recovered", value: "~$180K" },
    ],
  },
];
