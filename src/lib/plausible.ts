/**
 * Lightweight Plausible custom-event helper.
 * Plausible auto-tracks page views and outbound links via the script in
 * src/app/layout.tsx. This adds explicit event tags for the four conversion
 * events the manifesto calls out:
 *   - Book Call clicks
 *   - SKU page visits
 *   - Case Study reads
 *   - Resource downloads
 */
export type PlausibleEvent =
  | "Book Call"
  | "SKU View"
  | "Case Study Read"
  | "Resource Download"
  | "Resource Read";

type Props = Record<string, string | number | boolean>;

declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: Props; callback?: () => void }) => void;
  }
}

export function trackEvent(event: PlausibleEvent, props?: Props): void {
  if (typeof window === "undefined") return;
  if (typeof window.plausible !== "function") return;
  window.plausible(event, props ? { props } : undefined);
}
