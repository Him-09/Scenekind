"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

const inputClasses =
  "min-h-14 w-full min-w-0 rounded-full border border-[#F2F0EA]/15 bg-[#F2F0EA]/8 px-5 text-sm text-[#F2F0EA] placeholder:text-[#F2F0EA]/35 transition-colors duration-300 focus:border-[#F2F0EA] focus:outline-none";

export default function RateCardForm() {
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [error, setError] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");
    setError("");

    try {
      const response = await fetch("/api/rate-card-lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          website,
        }),
      });

      const data = (await response.json().catch(() => ({}))) as {
        downloadUrl?: string;
        error?: string;
      };

      if (!response.ok) {
        throw new Error(data.error ?? "Could not unlock the rate card.");
      }

      const nextDownloadUrl = data.downloadUrl ?? "/api/rate-card-download";
      setStatus("sent");
      trackEvent("Rate Card Requested", {
        location: "Pricing",
      });
      window.setTimeout(() => {
        window.location.assign(nextDownloadUrl);
      }, 300);
    } catch (err) {
      setStatus("error");
      setError(
        err instanceof Error
          ? err.message
          : "Could not unlock the rate card. Please try again."
      );
    }
  };

  const isSending = status === "sending";

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-10 max-w-2xl rounded-tile border border-[#F2F0EA]/12 bg-[#262623] p-5 md:p-6"
    >
      <div className="hidden" aria-hidden="true">
        <label htmlFor="rate-card-website">Website</label>
        <input
          id="rate-card-website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={website}
          onChange={(event) => setWebsite(event.target.value)}
        />
      </div>

      <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#F2F0EA]/42">
        Full PDF rate card
      </p>
      <div className="mt-4 grid gap-3 md:grid-cols-[minmax(0,1fr)_auto]">
        <label htmlFor="rate-card-email" className="sr-only">
          Email address
        </label>
        <div className="min-w-0">
          <input
            id="rate-card-email"
            type="email"
            required
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="you@company.com"
            className={inputClasses}
          />
        </div>
        <button
          type="submit"
          disabled={isSending}
          className="group inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-full bg-[#F2F0EA] px-6 text-sm font-medium tracking-normal text-[#171716] transition-all duration-300 ease-studio hover:bg-[#E8E5DD] disabled:cursor-not-allowed disabled:opacity-65 md:w-auto"
        >
          {isSending
            ? "Sending..."
            : status === "sent"
              ? "Download again"
              : "Download PDF"}
          <ArrowUpRight
            className="h-4 w-4 transition-transform duration-300 ease-studio group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </button>
      </div>
      <p
        className="mt-3 text-xs leading-relaxed text-[#F2F0EA]/45"
        aria-live="polite"
      >
        {status === "error"
          ? error
          : status === "sent"
            ? "Unlocked. Your download should start automatically."
            : "Email unlock only. Includes packages, monthly plans, a la carte rates, and terms."}
      </p>
    </form>
  );
}
