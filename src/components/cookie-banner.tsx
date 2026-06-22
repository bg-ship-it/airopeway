"use client";

import { useEffect, useState } from "react";

const CONSENT_KEY = "air_cookie_consent";

type ConsentState = "granted" | "denied";

function pushConsent(analytics: ConsentState, ads: ConsentState) {
  if (typeof window === "undefined") return;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const w = window as any;
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({
    event: "consent_update",
    consent: {
      analytics_storage: analytics,
      ad_storage: ads,
      ad_user_data: ads,
      ad_personalization: ads,
    },
  });
  if (typeof w.gtag === "function") {
    w.gtag("consent", "update", {
      analytics_storage: analytics,
      ad_storage: ads,
      ad_user_data: ads,
      ad_personalization: ads,
    });
  }
}

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (!stored) {
      setVisible(true);
    } else {
      const parsed = JSON.parse(stored) as {
        analytics: ConsentState;
        ads: ConsentState;
      };
      pushConsent(parsed.analytics, parsed.ads);
    }
  }, []);

  function accept() {
    localStorage.setItem(
      CONSENT_KEY,
      JSON.stringify({ analytics: "granted", ads: "granted" })
    );
    pushConsent("granted", "granted");
    setVisible(false);
  }

  function decline() {
    localStorage.setItem(
      CONSENT_KEY,
      JSON.stringify({ analytics: "denied", ads: "denied" })
    );
    pushConsent("denied", "denied");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-4 left-4 right-4 z-[9999] mx-auto max-w-xl rounded-2xl border border-line bg-surface shadow-[0_24px_48px_-12px_rgba(22,21,26,0.28)] md:left-auto md:right-6 md:max-w-sm"
    >
      <div className="p-5">
        <p className="text-[13px] font-semibold text-ink">We use cookies</p>
        <p className="mt-1.5 text-[12px] leading-relaxed text-ink-muted">
          We use cookies and similar tools to analyse traffic and improve your
          experience. By clicking &ldquo;Accept&rdquo; you consent to analytics
          and marketing cookies.{" "}
          <a href="/privacy" className="underline hover:text-ink">
            Learn more
          </a>
          .
        </p>
        <div className="mt-4 flex gap-2">
          <button
            onClick={accept}
            className="flex-1 rounded-xl bg-ink py-2 text-[12px] font-semibold text-canvas transition-opacity hover:opacity-80"
          >
            Accept all
          </button>
          <button
            onClick={decline}
            className="flex-1 rounded-xl border border-line py-2 text-[12px] font-semibold text-ink transition-colors hover:bg-surface-soft"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
}
