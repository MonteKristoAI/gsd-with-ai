import type { Metadata } from "next";
import SkuPageTemplate from "@/components/sku/SkuPageTemplate";
import { SKU_DATA } from "@/data/skuData";

export const metadata: Metadata = {
  title: "Field-to-Cash",
  description:
    "11 hours per week back to your office manager. Mobile-first ticketing, QuickBooks sync, DSO drop. For owner-operators of 15-50-person wireline + completions shops. Foundations from $25K. 6 weeks.",
};

export default function FieldToCashPage() {
  return <SkuPageTemplate sku={SKU_DATA["field-to-cash"]} />;
}
