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
    "Request a free Scenekind Creative Teardown, start the $295 Starter Sprint, or scope a larger fixed-price AI-first product ad package.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: `Contact | ${siteName}`,
    description:
      "Request a free Creative Teardown or start the $295 Starter Sprint with Scenekind.",
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
      "Request a free Creative Teardown or start the $295 Starter Sprint with Scenekind.",
    images: [ogImage],
  },
};

const expectations = [
  {
    step: "01",
    title: "Pick your entry point",
    body: "Ask for a free teardown, start the $295 sprint, or choose a fixed-price package.",
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
      <main className="pt-28 md:pt-32 lg:pt-40">
        <section
          aria-label="Contact"
          className="mx-auto max-w-wrap px-6 pb-20 md:pb-24 lg:px-10"
        >
          <div className="grid gap-14 xl:grid-cols-[1fr_1.1fr] xl:gap-24">
            <Reveal>
              <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-cream-card px-3.5 py-1.5 text-xs font-medium text-mist">
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 rounded-full bg-ink"
                />
                Start small or get a teardown
              </p>
              <h1 className="font-display text-[2.1rem] font-semibold leading-[1.06] tracking-normal text-ink sm:text-[2.65rem] lg:text-[3.6rem] xl:text-[4rem]">
                Get a free teardown or{" "}
                <em className="inline-block font-accent font-normal italic leading-[0.95] tracking-[-0.025em]">
                  start the sprint.
                </em>
              </h1>
              <p className="mt-6 max-w-md text-base leading-relaxed text-mist md:text-lg">
                Ask for a Creative Teardown first when you want a quick read on
                what to test next. Choose the $295 Starter Sprint when there is
                already an angle worth making.
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
                  data-mixpanel-event="Email Clicked"
                  data-mixpanel-properties={JSON.stringify({
                    location: "Contact",
                  })}
                  className="mt-1 inline-block break-all font-display text-xl font-medium text-ink underline-offset-4 hover:underline"
                >
                  {contactEmail}
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="rounded-tile border border-line bg-cream-card p-5 sm:p-8 md:p-10">
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
