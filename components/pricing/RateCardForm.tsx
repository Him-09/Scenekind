"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, Download } from "lucide-react";

const inputClasses =
  "w-full rounded-2xl border border-line bg-cream-card px-5 py-4 text-sm text-ink placeholder:text-mist/70 transition-colors duration-300 focus:border-ink focus:outline-none";

type RateCardFormProps = {
  locked?: boolean;
};

export default function RateCardForm({ locked = false }: RateCardFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [error, setError] = useState("");
  const [downloadUrl, setDownloadUrl] = useState("/api/rate-card-download");

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
          name,
          email,
          company,
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
      setDownloadUrl(nextDownloadUrl);
      setStatus("sent");
      window.setTimeout(() => {
        window.location.assign(nextDownloadUrl);
      }, 150);
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

  if (status === "sent") {
    return (
      <div className="rounded-tile border border-line bg-cream-card p-8 md:p-10">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cream-sunken">
          <Download className="h-5 w-5 text-ink" aria-hidden="true" />
        </div>
        <h2 className="mt-6 font-display text-3xl font-medium text-ink">
          Rate card unlocked.
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-mist">
          Your download should start automatically. You can also use the button
          below.
        </p>
        <a
          href={downloadUrl}
          className="group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#171716] px-8 py-4 text-base font-medium tracking-tight text-[#F2F0EA] transition-all duration-300 ease-studio hover:bg-[#3D3C38] sm:w-auto"
        >
          Download rate card
          <ArrowUpRight
            className="h-4 w-4 transition-transform duration-300 ease-studio group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-tile border border-line bg-cream-card p-8 md:p-10"
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

      <p className="text-xs font-medium uppercase tracking-[0.2em] text-mist">
        PDF download
      </p>
      <h2 className="mt-4 font-display text-3xl font-medium text-ink">
        Get the full rate card.
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-mist">
        Enter your email and the PDF unlocks immediately. We will only use it to
        follow up about Scenekind creative.
      </p>

      {locked && (
        <p className="mt-5 rounded-2xl border border-line bg-cream-sunken px-4 py-3 text-sm text-ink/75">
          Enter your email first and the rate card will download.
        </p>
      )}

      <div className="mt-7 space-y-5">
        <div>
          <label
            htmlFor="rate-card-email"
            className="mb-2 block text-sm font-medium text-ink"
          >
            Work email
          </label>
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

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="rate-card-name"
              className="mb-2 block text-sm font-medium text-ink"
            >
              Name
            </label>
            <input
              id="rate-card-name"
              type="text"
              autoComplete="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Your name"
              className={inputClasses}
            />
          </div>
          <div>
            <label
              htmlFor="rate-card-company"
              className="mb-2 block text-sm font-medium text-ink"
            >
              Brand
            </label>
            <input
              id="rate-card-company"
              type="text"
              autoComplete="organization"
              value={company}
              onChange={(event) => setCompany(event.target.value)}
              placeholder="Company"
              className={inputClasses}
            />
          </div>
        </div>
      </div>

      <button
        type="submit"
        disabled={isSending}
        className="group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#171716] px-8 py-4 text-base font-medium tracking-tight text-[#F2F0EA] transition-all duration-300 ease-studio hover:bg-[#3D3C38] disabled:cursor-not-allowed disabled:opacity-65"
      >
        {isSending ? "Unlocking..." : "Download rate card"}
        <ArrowUpRight
          className="h-4 w-4 transition-transform duration-300 ease-studio group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </button>

      <p className="mt-4 text-xs leading-relaxed text-mist" aria-live="polite">
        {status === "error"
          ? error
          : "Includes sprint pricing, fixed packages, monthly plans, a la carte rates, and payment terms."}
      </p>
    </form>
  );
}
