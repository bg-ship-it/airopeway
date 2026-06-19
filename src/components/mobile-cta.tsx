"use client";

import { useEffect, useState } from "react";
import { Cta } from "@/components/cta";

export function MobileCta() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 560);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 p-3 transition-transform duration-300 md:hidden ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <Cta href="/#audit" className="w-full" size="lg">
        Claim Your Free AI Audit
      </Cta>
    </div>
  );
}
