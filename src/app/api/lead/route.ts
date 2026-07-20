import { NextResponse } from "next/server";

// Lead-capture endpoint for the second-tier CTA (playbook / gated assets).
// Forwards submissions to an external automation (Make.com / GetReplies) via
// the LEAD_WEBHOOK_URL env var. If the env var is unset the request still
// succeeds (no-op) so preview deploys never error.
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  let payload: { email?: string; name?: string; source?: string };
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body" },
      { status: 400 },
    );
  }

  const email = (payload.email ?? "").trim().toLowerCase();
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { ok: false, error: "Enter a valid email address" },
      { status: 400 },
    );
  }

  const record = {
    email,
    name: payload.name?.trim() || null,
    source: payload.source?.trim() || "airopeway.com",
    submittedAt: new Date().toISOString(),
  };

  const webhook = process.env.LEAD_WEBHOOK_URL;
  if (webhook) {
    try {
      await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(record),
      });
    } catch {
      // Never block the visitor on a downstream outage.
    }
  }

  return NextResponse.json({ ok: true });
}
