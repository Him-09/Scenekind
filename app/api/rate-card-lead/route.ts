import { NextRequest, NextResponse } from "next/server";
import { contactEmail, siteName } from "@/lib/site";

export const runtime = "nodejs";

const resendEndpoint = "https://api.resend.com/emails";
const cookieName = "scenekind_rate_card";

type RateCardLeadPayload = {
  name?: unknown;
  email?: unknown;
  company?: unknown;
  website?: unknown;
};

function clean(value: unknown, maxLength = 160) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: NextRequest) {
  let payload: RateCardLeadPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (clean(payload.website)) {
    return NextResponse.json({ ok: true });
  }

  const name = clean(payload.name);
  const email = clean(payload.email);
  const company = clean(payload.company);

  if (!email) {
    return NextResponse.json(
      { error: "Email is required." },
      { status: 400 }
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL ?? contactEmail;

  if (!apiKey || !from) {
    return NextResponse.json(
      { error: "Rate card capture is not configured yet." },
      { status: 500 }
    );
  }

  const subject = `Rate card download - ${company || email}`;
  const rows = [
    ["Email", email],
    ["Name", name || "Not provided"],
    ["Company / brand", company || "Not provided"],
    ["Source", "/pricing"],
  ];

  const htmlRows = rows
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:8px 12px;color:#7A786F;border-bottom:1px solid #DDD9CF;">${escapeHtml(
            label
          )}</td>
          <td style="padding:8px 12px;color:#171716;border-bottom:1px solid #DDD9CF;">${escapeHtml(
            value
          )}</td>
        </tr>`
    )
    .join("");

  const text = [
    subject,
    "",
    ...rows.map(([label, value]) => `${label}: ${value}`),
  ].join("\n");

  const response = await fetch(resendEndpoint, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject,
      text,
      html: `
        <div style="font-family:Inter,Arial,sans-serif;background:#F2F0EA;padding:24px;color:#171716;">
          <div style="max-width:640px;margin:0 auto;background:#FBFAF7;border:1px solid #DDD9CF;padding:28px;">
            <p style="margin:0 0 8px;color:#7A786F;font-size:13px;">${siteName} website</p>
            <h1 style="margin:0 0 24px;font-size:24px;line-height:1.2;">Rate card download</h1>
            <table style="width:100%;border-collapse:collapse;margin-bottom:24px;font-size:14px;">
              <tbody>${htmlRows}</tbody>
            </table>
          </div>
        </div>
      `,
    }),
  });

  if (!response.ok) {
    return NextResponse.json(
      { error: "Could not unlock the rate card. Please try again." },
      { status: 502 }
    );
  }

  const nextResponse = NextResponse.json({
    ok: true,
    downloadUrl: "/api/rate-card-download",
  });

  nextResponse.cookies.set(cookieName, "granted", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });

  return nextResponse;
}
