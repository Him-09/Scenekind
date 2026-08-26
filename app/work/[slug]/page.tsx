import type { Metadata } from "next";
import { notFound } from "next/navigation";
import JsonLd from "@/components/seo/JsonLd";
import Footer from "@/components/sections/Footer";
import Nav from "@/components/sections/Nav";
import Button from "@/components/ui/Button";
import { getWorkBySlug, selectedWork } from "@/lib/geo";
import { siteName } from "@/lib/site";
import { workPageJsonLd } from "@/lib/structured-data";

type WorkPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return selectedWork.map((work) => ({
    slug: work.slug,
  }));
}

export function generateMetadata({ params }: WorkPageProps): Metadata {
  const work = getWorkBySlug(params.slug);

  if (!work) {
    return {
      title: "Work Not Found",
    };
  }

  const path = `/work/${work.slug}`;

  return {
    title: `${work.title} | Selected Work | ${siteName}`,
    description: work.description,
    alternates: {
      canonical: path,
    },
    keywords: [
      work.type,
      work.details.builtFor,
      work.details.runtime,
      ...work.details.formats,
    ],
    openGraph: {
      title: `${work.title} | Selected Work | ${siteName}`,
      description: work.description,
      url: path,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${work.title} | Selected Work | ${siteName}`,
      description: work.description,
    },
  };
}

export default function WorkPage({ params }: WorkPageProps) {
  const work = getWorkBySlug(params.slug);

  if (!work) notFound();

  return (
    <>
      <JsonLd data={workPageJsonLd(work)} />
      <Nav />
      <main>
        <section className="px-6 pb-16 pt-32 lg:px-10 lg:pb-24 lg:pt-40">
          <div className="mx-auto grid max-w-wrap gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start">
            <div className="overflow-hidden rounded-tile bg-[#DDD9CF]">
              <video
                src={work.src}
                controls
                muted
                playsInline
                preload="metadata"
                className="aspect-[9/16] h-auto w-full bg-[#171716] object-cover"
              />
            </div>

            <div>
              <p className="inline-flex rounded-full border border-line bg-cream-card px-3.5 py-1.5 text-xs font-medium text-mist">
                {work.type}
              </p>
              <h1 className="mt-6 max-w-4xl font-display text-[3rem] font-semibold leading-[0.98] tracking-normal text-ink sm:text-[4rem] lg:text-[5.25rem]">
                {work.title}
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-relaxed text-mist md:text-xl">
                {work.details.overview}
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {work.details.formats.map((format) => (
                  <span
                    key={format}
                    className="rounded-full border border-line bg-cream-card px-3 py-1 text-xs text-mist"
                  >
                    {format}
                  </span>
                ))}
                <span className="rounded-full border border-line bg-cream-card px-3 py-1 text-xs text-mist">
                  {work.details.runtime}
                </span>
              </div>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button
                  href="/contact?intent=teardown"
                  size="lg"
                  analyticsEvent="CTA Clicked"
                  analyticsProperties={{
                    cta_name: "Free Teardown",
                    cta_location: `${work.title} Work Page`,
                    cta_intent: "teardown",
                    destination: "/contact",
                  }}
                  withArrow
                >
                  Get a Free Teardown
                </Button>
                {work.specKitHref && (
                  <Button
                    href={work.specKitHref}
                    variant="outline"
                    size="lg"
                    analyticsEvent="Spec Kit Opened"
                    analyticsProperties={{
                      work_title: work.title,
                      destination: work.specKitHref,
                    }}
                  >
                    Open Spec Kit
                  </Button>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="rule px-6 py-16 lg:px-10 lg:py-20">
          <div className="mx-auto grid max-w-wrap gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-mist">
                Direction
              </p>
              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-normal text-ink md:text-5xl">
                How the piece was built.
              </h2>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="font-display text-2xl font-medium text-ink">
                  Built for
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-mist md:text-base">
                  {work.details.builtFor}
                </p>
              </div>
              <div>
                <h3 className="font-display text-2xl font-medium text-ink">
                  Hook
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-mist md:text-base">
                  {work.details.hook}
                </p>
              </div>
              <div>
                <h3 className="font-display text-2xl font-medium text-ink">
                  Visual direction
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-mist md:text-base">
                  {work.details.direction}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="rule px-6 py-16 lg:px-10 lg:py-20">
          <div className="mx-auto grid max-w-wrap gap-10 lg:grid-cols-2">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-mist">
                Sequence
              </p>
              <ol className="mt-6 space-y-4">
                {work.details.sequence.map((item, index) => (
                  <li key={item} className="flex gap-4">
                    <span className="font-display text-sm text-mist">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm leading-relaxed text-ink/82 md:text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-mist">
                Deliverables
              </p>
              <ul className="mt-6 space-y-4">
                {work.details.deliverables.map((item) => (
                  <li key={item} className="text-sm leading-relaxed text-ink/82 md:text-base">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
