"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { auditBenefits, founderQuote, industries, footer } from "@/lib/content";
import { MotionBg } from "@/components/motion-bg";

export function Audit() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    industry: "",
    challenge: "",
  });

  const update =
    (k: keyof typeof form) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) =>
      setForm({ ...form, [k]: e.target.value });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Free AI Audit Request - ${form.company}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\nIndustry: ${form.industry}\nChallenge: ${form.challenge}`,
    );
    window.open(`mailto:${footer.email}?subject=${subject}&body=${body}`);
    setSubmitted(true);
  };

  const inputClass =
    "focus-ring w-full rounded-2xl border border-line bg-surface px-4 py-3 text-sm text-ink placeholder:text-ink-faint";
  const labelClass = "mono-label mb-1.5 block text-ink-muted";

  return (
    <section id="audit" className="px-3 pb-16 md:px-5">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-line bg-surface-soft px-5 py-16 md:px-12 md:py-24">
        <MotionBg />
        <div className="relative z-10 grid gap-12 md:grid-cols-2 md:items-start">
          <div>
            <p className="mono-label mb-4 text-accent">Free AI Audit</p>
            <h2 className="font-display text-[clamp(2rem,4.4vw,3.4rem)] font-bold leading-[1.08]">
              Let&apos;s find exactly where AI saves you time, cost &amp; revenue.
            </h2>

            <div className="mt-8 space-y-4">
              {auditBenefits.map((b) => (
                <div
                  key={b.text}
                  className="flex items-center gap-3.5 text-[15px] text-ink-soft"
                >
                  <span className="text-lg">{b.icon}</span>
                  {b.text}
                </div>
              ))}
            </div>

            <figure className="mt-8 rounded-3xl border border-line bg-surface/80 p-6 backdrop-blur-sm">
              <blockquote className="font-display text-lg italic leading-relaxed text-ink">
                “{founderQuote.quote}”
              </blockquote>
              <figcaption className="mono-label mt-4 text-ink-muted">
                {founderQuote.attribution}
              </figcaption>
            </figure>
          </div>

          <div className="rounded-3xl border border-line bg-surface p-7 shadow-[0_24px_60px_-36px_rgba(22,21,26,0.4)] md:p-9">
            {submitted ? (
              <div className="py-14 text-center">
                <CheckCircle2 className="mx-auto size-14 text-teal" />
                <h3 className="font-display mt-6 text-2xl font-bold">
                  Audit Request Received
                </h3>
                <p className="mx-auto mt-3 max-w-sm text-sm text-ink-soft">
                  We&apos;ll be in touch within 24 hours to schedule your free AI
                  audit. Check your email for confirmation.
                </p>
              </div>
            ) : (
              <>
                <h3 className="font-display text-2xl font-bold">
                  Book Your Free AI Audit
                </h3>
                <p className="mt-1.5 text-sm text-ink-muted">
                  Tell us about your business. We&apos;ll come prepared.
                </p>

                <form onSubmit={onSubmit} className="mt-7 space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className={labelClass}>Full Name</label>
                      <input
                        required
                        type="text"
                        placeholder="Your name"
                        className={inputClass}
                        value={form.name}
                        onChange={update("name")}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Work Email</label>
                      <input
                        required
                        type="email"
                        placeholder="you@company.com"
                        className={inputClass}
                        value={form.email}
                        onChange={update("email")}
                      />
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>Company Name</label>
                    <input
                      required
                      type="text"
                      placeholder="Your company"
                      className={inputClass}
                      value={form.company}
                      onChange={update("company")}
                    />
                  </div>

                  <div>
                    <label className={labelClass}>Industry</label>
                    <select
                      className={inputClass}
                      value={form.industry}
                      onChange={update("industry")}
                    >
                      <option value="">Select your industry</option>
                      {industries.map((i) => (
                        <option key={i.id} value={i.name}>
                          {i.name}
                        </option>
                      ))}
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className={labelClass}>
                      Biggest Operational Challenge
                    </label>
                    <textarea
                      rows={3}
                      placeholder="E.g. too many manual processes, slow lead response, high support volume..."
                      className={`${inputClass} resize-none`}
                      value={form.challenge}
                      onChange={update("challenge")}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary focus-ring inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full py-4 text-sm font-semibold"
                  >
                    Book My Free AI Audit
                    <ArrowRight className="size-4" />
                  </button>
                  <p className="text-center text-xs text-ink-faint">
                    No spam. No commitment. Just a practical AI audit and clear
                    next steps.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
