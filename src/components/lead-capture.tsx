"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/cn";

type Props = {
  source: string;
  buttonLabel?: string;
  placeholder?: string;
  successText?: string;
  className?: string;
};

export function LeadCapture({
  source,
  buttonLabel = "Send me the playbook",
  placeholder = "you@company.com",
  successText = "Done. Check your inbox — the playbook is on its way.",
  className,
}: Props) {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "done" | "error">(
    "idle",
  );
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setState("loading");
    setError("");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        setState("error");
        setError(data.error ?? "Something went wrong. Try again.");
        return;
      }
      setState("done");
    } catch {
      setState("error");
      setError("Network error. Try again.");
    }
  }

  if (state === "done") {
    return (
      <div
        className={cn(
          "flex items-center gap-3 rounded-2xl border border-line bg-surface px-5 py-4 text-sm text-ink-soft",
          className,
        )}
      >
        <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-teal/15 text-teal">
          <Check className="size-4" />
        </span>
        {successText}
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className={cn("w-full", className)}>
      <div className="flex flex-col gap-2 sm:flex-row">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={placeholder}
          className="focus-ring w-full rounded-full border border-line-strong bg-surface px-5 py-3 text-sm text-ink placeholder:text-ink-faint"
          aria-label="Work email"
        />
        <button
          type="submit"
          disabled={state === "loading"}
          className="btn-primary focus-ring inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium disabled:opacity-60"
        >
          {state === "loading" ? "Sending…" : buttonLabel}
          {state !== "loading" && <ArrowRight className="size-4" />}
        </button>
      </div>
      {state === "error" && <p className="mt-2 text-xs text-coral">{error}</p>}
      <p className="mt-2 text-xs text-ink-faint">
        No spam. Unsubscribe anytime. We never share your email.
      </p>
    </form>
  );
}
