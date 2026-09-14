"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function track(event: string, data: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...data });
}

// Pushes a dataLayer event for every click on a cal.com link, wherever it
// renders (Sanity post bodies included). GTM turns these into GA4 conversions;
// nothing here talks to GA4 directly.
export function TrackEvents() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement | null)?.closest?.("a[href]");
      if (!a) return;
      const href = (a as HTMLAnchorElement).href;
      if (href.includes("cal.com")) {
        track("cal_booking_click", { link_url: href, page_path: location.pathname });
      }
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);
  return null;
}
