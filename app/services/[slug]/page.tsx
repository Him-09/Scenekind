import type { Metadata } from "next";
import { notFound } from "next/navigation";
import JsonLd from "@/components/seo/JsonLd";
import Footer from "@/components/sections/Footer";
import Nav from "@/components/sections/Nav";
import Button from "@/components/ui/Button";
import {
  geoServices,
  getServiceBySlug,
  type GeoService,
} from "@/lib/geo";
import { siteName } from "@/lib/site";
import { servicePageJsonLd } from "@/lib/structured-data";

type ServicePageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return geoServices.map((service) => ({
    slug: service.slug,
  }));
}

export function generateMetadata({ params }: ServicePageProps): Metadata {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  const path = `/services/${service.slug}`;

  return {
    title: `${service.name} | ${siteName}`,
    description: service.description,
    alternates: {
      canonical: path,
    },
    keywords: [...service.keywords],
    openGraph: {
      title: `${service.name} | ${siteName}`,
      description: service.description,
      url: path,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.name} | ${siteName}`,
      description: service.description,
    },
  };
}

function ServiceDetails({ service }: { service: GeoService }) {
  return (
    <dl className="grid gap-4 md:grid-cols-3">
      {[
        ["Best for", service.bestFor],
        ["Output", service.output],
        ["Audience", service.audience],
      ].map(([label, value]) => (
        <div key={label} className="border-t border-line pt-4">
          <dt className="text-xs font-medium uppercase tracking-[0.18em] text-mist">
            {label}
          </dt>
          <dd className="mt-2 text-sm leading-relaxed text-ink/80">{value}</dd>
        </div>
      ))}
    </dl>
  );
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = getServiceBySlug(params.slug);

  if (!service) notFound();

  return (
    <>
      <JsonLd data={servicePageJsonLd(service)} />
      <Nav />
      <main>
        <section className="px-6 pb-16 pt-32 lg:px-10 lg:pb-24 lg:pt-40">
          <div className="mx-auto max-w-wrap">
            <p className="inline-flex rounded-full border border-line bg-cream-card px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-mist">
              Service
            </p>
            <h1 className="mt-6 max-w-5xl font-display text-[3rem] font-semibold leading-[0.98] tracking-normal text-ink sm:text-[4rem] lg:text-[5.5rem]">
              {service.headline}
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-mist md:text-xl">
              {service.description}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button
                href="/contact?intent=teardown"
                size="lg"
                analyticsEvent="CTA Clicked"
                analyticsProperties={{
                  cta_name: "Free Teardown",
                  cta_location: `${service.name} Service Page`,
                  cta_intent: "teardown",
                  destination: "/contact",
                }}
                withArrow
              >
                Get a Free Teardown
              </Button>
              <Button
                href="/contact?intent=starter-sprint"
                variant="outline"
                size="lg"
                analyticsEvent="CTA Clicked"
                analyticsProperties={{
                  cta_name: "Starter Sprint",
                  cta_location: `${service.name} Service Page`,
                  cta_intent: "starter-sprint",
                  destination: "/contact",
                }}
              >
                Start the $295 Sprint
              </Button>
            </div>
          </div>
        </section>

        <section className="rule px-6 py-16 lg:px-10 lg:py-20">
          <div className="mx-auto max-w-wrap">
            <ServiceDetails service={service} />
          </div>
        </section>

        <section className="rule px-6 py-16 lg:px-10 lg:py-20">
          <div className="mx-auto grid max-w-wrap gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-mist">
                Included
              </p>
              <h2 className="mt-4 max-w-xl font-display text-4xl font-semibold leading-tight tracking-normal text-ink md:text-5xl">
                What this service covers.
              </h2>
            </div>
            <ul className="grid gap-4 sm:grid-cols-2">
              {service.includes.map((item) => (
                <li
                  key={item}
                  className="rounded-tile border border-line bg-cream-card p-5 text-sm leading-relaxed text-ink/80"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="rule bg-[#171716] px-6 py-16 text-[#F2F0EA] lg:px-10 lg:py-20">
          <div className="mx-auto flex max-w-wrap flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#F2F0EA]/50">
                Start small
              </p>
              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-normal md:text-5xl">
                See the angle before you buy production.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-[#F2F0EA]/62 md:text-base">
                Send your current ad, product page, or launch context. We send
                back a free written Creative Teardown with three untested
                angles.
              </p>
            </div>
            <Button
              href={`/contact?intent=teardown&service=${encodeURIComponent(
                service.name
              )}`}
              variant="inverse"
              size="lg"
              analyticsEvent="CTA Clicked"
              analyticsProperties={{
                cta_name: "Free Teardown",
                cta_location: `${service.name} Service Page Bottom`,
                cta_intent: "teardown",
                destination: "/contact",
              }}
              withArrow
            >
              Get a Free Teardown
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
