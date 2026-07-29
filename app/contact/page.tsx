import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/sections/Nav";
import Footer from "@/components/sections/Footer";
import Reveal from "@/components/ui/Reveal";
import ContactForm from "@/components/contact/ContactForm";
import { contactEmail, ogImage, siteName } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start the $295 Scenekind Starter Sprint, request a free Creative Teardown, or scope a larger fixed-price AI-first product ad package.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: `Contact | ${siteName}`,
    description:
      "Start the $295 Starter Sprint or request a free Creative Teardown from Scenekind.",
    url: "/contact",
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
    title: `Contact | ${siteName}`,
    description:
      "Start the $295 Starter Sprint or request a free Creative Teardown from Scenekind.",
    images: [ogImage],
  },
};

const expectations = [
  {
    step: "01",
    title: "Pick your entry point",
    body: "Start the $295 sprint, ask for a free teardown, or choose a fixed-price package.",
  },
  {
    step: "02",
    title: "We reply with next steps",
    body: "You get a clear recommendation, timeline, and what we need from you.",
  },
  {
    step: "03",
    title: "Call only if it helps",
    body: "The sprint can start async. For bigger builds, we can schedule a short call.",
  },
];

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main className="pt-32 md:pt-40">
        <section
          aria-label="Contact"
          className="mx-auto max-w-wrap px-6 pb-24 lg:px-10"
        >
          <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-24">
            <Reveal>
              <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-cream-card px-3.5 py-1.5 text-xs font-medium text-mist">
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 rounded-full bg-ink"
                />
                Start small or get a teardown
              </p>
              <h1 className="font-display text-display-lg font-medium text-ink">
                Start the sprint or get a free teardown.
              </h1>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-mist">
                Choose the $295 Starter Sprint when you want finished ads, or
                ask for a Creative Teardown when you want a quick read on what
                your current creative should test next.
              </p>

              <ol className="mt-12 space-y-8 border-t border-line pt-10">
                {expectations.map((item) => (
                  <li key={item.step} className="flex gap-5">
                    <span className="font-display text-sm font-medium tracking-widest text-mist">
                      {item.step}
                    </span>
                    <div>
                      <h2 className="font-display text-lg font-medium text-ink">
                        {item.title}
                      </h2>
                      <p className="mt-1 text-sm leading-relaxed text-mist">
                        {item.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="mt-12 border-t border-line pt-8">
                <p className="text-sm text-mist">Direct line</p>
                <Link
                  href={`mailto:${contactEmail}`}
                  className="mt-1 inline-block font-display text-xl font-medium text-ink underline-offset-4 hover:underline"
                >
                  {contactEmail}
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="rounded-tile border border-line bg-cream-card p-8 md:p-10">
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
