import type { Metadata } from "next";
import SkuPageTemplate from "@/components/sku/SkuPageTemplate";
import { SKU_DATA } from "@/data/skuData";

export const metadata: Metadata = {
  title: "Audit-Ready",
  description:
    "Pull-it-in-15-minutes audit-readiness for HSE managers in oilfield and industrial services. Live ISN/Avetta sync, automated cert tracking, MSA-ready reports. Foundations from $25K. 6 weeks.",
  alternates: { canonical: "https://www.getsstuffdone.com/solutions/audit-ready" },
};

export default function AuditReadyPage() {
  return <SkuPageTemplate sku={SKU_DATA["audit-ready"]} />;
}
