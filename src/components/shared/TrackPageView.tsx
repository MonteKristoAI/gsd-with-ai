"use client";
import { useEffect } from "react";
import { trackEvent, type PlausibleEvent } from "@/lib/plausible";

type Props = {
  event: PlausibleEvent;
  props?: Record<string, string | number | boolean>;
};

export default function TrackPageView({ event, props }: Props) {
  useEffect(() => {
    trackEvent(event, props);
  }, [event, props]);
  return null;
}
