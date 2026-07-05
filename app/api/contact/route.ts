import { NextResponse } from "next/server";
import { services, timelines } from "@/lib/contact-options";
import { contactEmail, siteName } from "@/lib/site";

export const runtime = "nodejs";

const resendEndpoint = "https://api.resend.com/emails";
const maxMessageLength = 3000;

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  company?: unknown;
  service?: unknown;
  timeline?: unknown;
  message?: unknown;
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

export async function POST(request: Request) {
  let payload: ContactPayload;

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
  const service = clean(payload.service);
  const timeline = clean(payload.timeline);
  const message = clean(payload.message, maxMessageLength);

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  if (
    !services.includes(service as (typeof services)[number]) ||
    !timelines.includes(timeline as (typeof timelines)[number])
  ) {
    return NextResponse.json(
      { error: "Please choose a valid service and timeline." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL ?? contactEmail;

  if (!apiKey || !from) {
    return NextResponse.json(
      { error: "Contact form is not configured yet." },
      { status: 500 }
    );
  }

  const subject = `New ${siteName} inquiry - ${company || name}`;
  const rows = [
    ["Name", name],
    ["Email", email],
    ["Company / brand", company || "Not provided"],
    ["Interested in", service],
    ["Timeline", timeline],
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
    "",
    "What they are launching / selling / testing:",
    message,
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
            <h1 style="margin:0 0 24px;font-size:24px;line-height:1.2;">New inquiry</h1>
            <table style="width:100%;border-collapse:collapse;margin-bottom:24px;font-size:14px;">
              <tbody>${htmlRows}</tbody>
            </table>
            <h2 style="margin:0 0 8px;font-size:16px;">What they are launching / selling / testing</h2>
            <p style="white-space:pre-wrap;margin:0;font-size:15px;line-height:1.6;">${escapeHtml(
              message
            )}</p>
          </div>
        </div>
      `,
    }),
  });

  if (!response.ok) {
    return NextResponse.json(
      { error: "Could not send inquiry. Please try again." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
