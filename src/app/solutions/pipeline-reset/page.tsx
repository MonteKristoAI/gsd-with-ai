import type { Metadata } from "next";
import SkuPageTemplate from "@/components/sku/SkuPageTemplate";
import { SKU_DATA } from "@/data/skuData";

export const metadata: Metadata = {
  title: "Pipeline Reset",
  description:
    "A forecast you can actually commit to. CRM cleanup, bi-directional sync to field execution, live job-costing dashboard. For VPs of Ops at 15-100-person industrial-services companies. Foundations from $25K. 6 weeks.",
  alternates: { canonical: "https://www.getsstuffdone.com/solutions/pipeline-reset" },
};

export default function PipelineResetPage() {
  return <SkuPageTemplate sku={SKU_DATA["pipeline-reset"]} />;
}
