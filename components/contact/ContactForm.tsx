"use client";

import { useEffect, useState, type FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import { services, timelines } from "@/lib/contact-options";
import { contactEmail } from "@/lib/site";

const inputClasses =
  "w-full min-w-0 rounded-2xl border border-line bg-cream-card px-5 py-4 text-sm text-ink placeholder:text-mist/70 transition-colors duration-300 focus:border-ink focus:outline-none";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [service, setService] = useState<string>(services[0]);
  const [timeline, setTimeline] = useState<string>(timelines[0]);
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [error, setError] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const intent = params.get("intent");

    if (intent === "starter-sprint") {
      setService("Starter Sprint ($295)");
      setMessage(
        "I want to start the $295 Starter Sprint. Please send the next steps."
      );
    }

    if (intent === "launch-pack") {
      setService("Launch Pack ($2,400)");
      setMessage(
        "I want to start a Launch Pack. Here is the product we are launching:"
      );
    }

    if (intent === "teardown") {
      setService("Free Creative Teardown");
      setMessage(
        "I want a free Creative Teardown. Here is the product, landing page, or ad account context:"
      );
    }

    if (intent === "campaign-build") {
      setService("Campaign Build ($4,800)");
      setMessage(
        "I want to scope a Campaign Build. Here is what we are launching:"
      );
    }

    if (intent === "flagship-film") {
      setService("Flagship Film ($6,000)");
      setMessage(
        "I want to plan a Flagship Film. Here is the brand or product story:"
      );
    }

    if (intent === "creative-engine") {
      setService("Creative Engine monthly");
      setMessage(
        "I want to plan ongoing creative output. Here is our current testing calendar:"
      );
    }
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          company,
          service,
          timeline,
          message,
          website,
        }),
      });

      const data = (await response.json().catch(() => ({}))) as {
        error?: string;
      };

      if (!response.ok) {
        throw new Error(data.error ?? "Could not send inquiry.");
      }

      setName("");
      setEmail("");
      setCompany("");
      setService(services[0]);
      setTimeline(timelines[0]);
      setMessage("");
      setWebsite("");
      setStatus("sent");
    } catch (err) {
      setStatus("error");
      setError(
        err instanceof Error
          ? err.message
          : "Could not send inquiry. Please try again."
      );
    }
  };

  const isSending = status === "sending";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="hidden" aria-hidden="true">
        <label htmlFor="contact-website">Website</label>
        <input
          id="contact-website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="contact-name"
            className="mb-2 block text-sm font-medium text-ink"
          >
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
          <label
            htmlFor="contact-email"
            className="mb-2 block text-sm font-medium text-ink"
          >
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
        <label
          htmlFor="contact-company"
          className="mb-2 block text-sm font-medium text-ink"
        >
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
          <label
            htmlFor="contact-service"
            className="mb-2 block text-sm font-medium text-ink"
          >
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
          <label
            htmlFor="contact-timeline"
            className="mb-2 block text-sm font-medium text-ink"
          >
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
        <label
          htmlFor="contact-message"
          className="mb-2 block text-sm font-medium text-ink"
        >
          What are you launching, selling, or testing?
        </label>
        <textarea
          id="contact-message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="A sentence or two is plenty - product, goal, and where the ads will run."
          className={inputClasses}
        />
      </div>

      <button
        type="submit"
        disabled={isSending}
        className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#171716] px-8 py-4 text-base font-medium tracking-normal text-[#F2F0EA] transition-all duration-300 ease-studio hover:bg-[#3D3C38] disabled:cursor-not-allowed disabled:opacity-65 sm:w-auto"
      >
        {isSending ? "Sending..." : "Send inquiry"}
        <ArrowUpRight
          className="h-4 w-4 transition-transform duration-300 ease-studio group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </button>
      <p className="text-xs leading-relaxed text-mist" aria-live="polite">
        {status === "sent"
          ? "Inquiry sent. We'll reply within two business days."
          : status === "error"
            ? `${error} You can still reach us at ${contactEmail}.`
            : `Your inquiry goes directly to ${contactEmail}. We'll reply within two business days.`}
      </p>
    </form>
  );
}
