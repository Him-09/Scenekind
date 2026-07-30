import type { Metadata } from "next";
import Nav from "@/components/sections/Nav";
import Footer from "@/components/sections/Footer";
import Reveal from "@/components/ui/Reveal";
import RateCardForm from "@/components/pricing/RateCardForm";
import { ogImage, siteName } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Download the Scenekind rate card with sprint pricing, fixed packages, monthly plans, a la carte rates, and production terms.",
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    title: `Pricing | ${siteName}`,
    description:
      "Download Scenekind's rate card after a quick email unlock.",
    url: "/pricing",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: `${siteName} studio preview`,
      },
    ],
  },
  twitter: {
    title: `Pricing | ${siteName}`,
    description:
      "Download Scenekind's rate card after a quick email unlock.",
    images: [ogImage],
  },
};

const highlights = [
  ["Starter Sprint", "$295", "Three ads on one product, five business days."],
  ["Launch Pack", "$2,400", "Fixed scope for one product launch."],
  ["Campaign Build", "$4,800", "Hero film plus performance ad system."],
  ["Engine 10", "$2,250/mo", "Always-on creative with discounted credits."],
];

type PricingPageProps = {
  searchParams?: {
    download?: string;
  };
};

export default function PricingPage({ searchParams }: PricingPageProps) {
  const locked = searchParams?.download === "locked";

  return (
    <>
      <Nav />
      <main className="pt-32 md:pt-40">
        <section
          aria-label="Rate card download"
          className="mx-auto max-w-wrap px-6 pb-24 lg:px-10"
        >
          <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
            <Reveal>
              <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-cream-card px-3.5 py-1.5 text-xs font-medium text-mist">
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 rounded-full bg-ink"
                />
                Scenekind rate card
              </p>
              <h1 className="max-w-3xl font-display text-display-lg font-medium text-ink">
                Download the full pricing card.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-mist">
                The PDF shows the full ladder: free teardown, Starter Sprint,
                fixed packages, monthly Engine plans, a la carte pricing,
                payment terms, and usage rights.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {highlights.map(([label, price, body]) => (
                  <div
                    key={label}
                    className="rounded-tile border border-line bg-cream-card p-6"
                  >
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-mist">
                      {label}
                    </p>
                    <p className="mt-3 font-display text-3xl font-medium text-ink">
                      {price}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-mist">
                      {body}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <RateCardForm locked={locked} />
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
