"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import { contactEmail } from "@/lib/site";

const services = [
  "AI Commercial",
  "Product Ads",
  "Motion Design",
  "Creator-Style Video",
  "Not sure yet",
];

const timelines = ["ASAP", "Within a month", "This quarter", "Just exploring"];

const inputClasses =
  "w-full rounded-2xl border border-line bg-cream-card px-5 py-4 text-sm text-ink placeholder:text-mist/70 transition-colors duration-300 focus:border-ink focus:outline-none";

/**
 * Composes a pre-filled email in the visitor's mail client.
 * Swap the handleSubmit body for a POST to your form endpoint
 * (Formspree, Resend, API route, etc.) when going to production.
 */
export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [service, setService] = useState(services[0]);
  const [timeline, setTimeline] = useState(timelines[0]);
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = `Creative Call — ${company || name || "New inquiry"}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Company / brand: ${company}`,
      `Interested in: ${service}`,
      `Timeline: ${timeline}`,
      "",
      "What we're launching / selling / testing:",
      message,
    ].join("\n");
    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="mb-2 block text-sm font-medium text-ink">
            Name
          </label>
          <input
            id="contact-name"
            type="text"
            required
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="mb-2 block text-sm font-medium text-ink">
            Email
          </label>
          <input
            id="contact-email"
            type="email"
            required
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            className={inputClasses}
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-company" className="mb-2 block text-sm font-medium text-ink">
          Company / brand
        </label>
        <input
          id="contact-company"
          type="text"
          autoComplete="organization"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          placeholder="Company or brand name"
          className={inputClasses}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-service" className="mb-2 block text-sm font-medium text-ink">
            What do you need?
          </label>
          <select
            id="contact-service"
            value={service}
            onChange={(e) => setService(e.target.value)}
            className={inputClasses}
          >
            {services.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="contact-timeline" className="mb-2 block text-sm font-medium text-ink">
            Timeline
          </label>
          <select
            id="contact-timeline"
            value={timeline}
            onChange={(e) => setTimeline(e.target.value)}
            className={inputClasses}
          >
            {timelines.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="contact-message" className="mb-2 block text-sm font-medium text-ink">
          What are you launching, selling, or testing?
        </label>
        <textarea
          id="contact-message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="A sentence or two is plenty — product, goal, and where the ads will run."
          className={inputClasses}
        />
      </div>

      <button
        type="submit"
        className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#171716] px-8 py-4 text-base font-medium tracking-tight text-[#F2F0EA] transition-all duration-300 ease-studio hover:bg-[#3D3C38] sm:w-auto"
      >
        Send inquiry
        <ArrowUpRight
          className="h-4 w-4 transition-transform duration-300 ease-studio group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </button>
      <p className="text-xs leading-relaxed text-mist">
        This opens a pre-filled email in your mail app. Prefer to write
        directly? Reach us at {contactEmail} — we reply within two
        business days.
      </p>
    </form>
  );
}
