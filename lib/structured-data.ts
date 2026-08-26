import { projects } from "@/lib/projects";
import {
  absoluteUrl,
  geoFaqs,
  geoOffers,
  geoServices,
  selectedWork,
  type GeoService,
  type SelectedWork,
} from "@/lib/geo";
import {
  contactEmail,
  ogImage,
  siteDescription,
  siteName,
  siteTitle,
  siteUrl,
} from "@/lib/site";

const organizationId = `${siteUrl}/#organization`;
const websiteId = `${siteUrl}/#website`;
const homepageId = `${siteUrl}/#webpage`;
const offerCatalogId = `${siteUrl}/#offers`;

function organizationSchema() {
  return {
    "@type": "Organization",
    "@id": organizationId,
    name: siteName,
    url: siteUrl,
    email: contactEmail,
    logo: absoluteUrl("/icon.svg"),
    image: absoluteUrl(ogImage),
    description: siteDescription,
    foundingDate: "2026",
    sameAs: ["https://www.instagram.com/scenekindstudio/"],
    slogan: "AI-first product ad production for brands that need campaign assets fast.",
    knowsAbout: [
      "AI commercials",
      "AI product ads",
      "AI video production",
      "motion design",
      "creator-style video ads",
      "paid social creative",
      "DTC product launches",
    ],
  };
}

function offerId(id: string) {
  return `${siteUrl}/#offer-${id}`;
}

function offerSchema(offer: (typeof geoOffers)[number]) {
  return {
    "@type": "Offer",
    "@id": offerId(offer.id),
    name: offer.name,
    url: offer.url,
    price: offer.price,
    priceCurrency: offer.priceCurrency,
    availability: offer.availability,
    category: "Creative production service",
    description: offer.description,
    seller: {
      "@id": organizationId,
    },
  };
}

function serviceSchema(service: GeoService) {
  const url = absoluteUrl(`/services/${service.slug}`);

  return {
    "@type": "Service",
    "@id": `${url}#service`,
    name: service.name,
    url,
    serviceType: service.serviceType,
    description: service.description,
    provider: {
      "@id": organizationId,
    },
    areaServed: "Worldwide",
    audience: {
      "@type": "Audience",
      audienceType: service.audience,
    },
    keywords: service.keywords.join(", "),
    offers: geoOffers.map((offer) => ({
      "@id": offerId(offer.id),
    })),
  };
}

function creativeWorkSchema(work: SelectedWork, position?: number) {
  const url = absoluteUrl(`/work/${work.slug}`);

  return {
    "@type": "CreativeWork",
    "@id": `${url}#creative-work`,
    name: work.title,
    url,
    position,
    genre: work.type,
    creator: {
      "@id": organizationId,
    },
    publisher: {
      "@id": organizationId,
    },
    description: work.description,
    abstract: work.details.overview,
    keywords: [
      work.type,
      work.details.builtFor,
      work.details.runtime,
      ...work.details.formats,
    ].join(", "),
    encoding: {
      "@type": "MediaObject",
      contentUrl: absoluteUrl(work.src),
      encodingFormat: "video/mp4",
    },
  };
}

function breadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    organizationSchema(),
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: siteUrl,
      name: siteName,
      description: siteDescription,
      inLanguage: "en-US",
      publisher: {
        "@id": organizationId,
      },
    },
    {
      "@type": "WebPage",
      "@id": homepageId,
      url: siteUrl,
      name: siteTitle,
      description: siteDescription,
      inLanguage: "en-US",
      isPartOf: {
        "@id": websiteId,
      },
      about: {
        "@id": organizationId,
      },
      primaryImageOfPage: absoluteUrl(ogImage),
      mainEntity: {
        "@id": organizationId,
      },
    },
    {
      "@type": "OfferCatalog",
      "@id": offerCatalogId,
      name: "Scenekind creative production offers",
      itemListElement: geoOffers.map(offerSchema),
    },
    ...geoServices.map(serviceSchema),
    {
      "@type": "ItemList",
      "@id": `${siteUrl}/#selected-work`,
      name: "Selected Scenekind work",
      itemListElement: selectedWork.map((work, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: absoluteUrl(`/work/${work.slug}`),
        item: {
          "@id": `${absoluteUrl(`/work/${work.slug}`)}#creative-work`,
        },
      })),
    },
    ...selectedWork.map((work, index) => creativeWorkSchema(work, index + 1)),
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/#faq`,
      mainEntity: geoFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ],
};

export function servicePageJsonLd(service: GeoService) {
  const url = absoluteUrl(`/services/${service.slug}`);

  return {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema(),
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: `${service.name} | ${siteName}`,
        description: service.description,
        inLanguage: "en-US",
        isPartOf: {
          "@id": websiteId,
        },
        about: {
          "@id": `${url}#service`,
        },
      },
      serviceSchema(service),
      {
        "@type": "OfferCatalog",
        "@id": offerCatalogId,
        name: "Scenekind creative production offers",
        itemListElement: geoOffers.map(offerSchema),
      },
      breadcrumbSchema([
        { name: siteName, url: siteUrl },
        { name: "Services", url: absoluteUrl("/#services") },
        { name: service.name, url },
      ]),
    ],
  };
}

export function workPageJsonLd(work: SelectedWork) {
  const url = absoluteUrl(`/work/${work.slug}`);

  return {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema(),
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: `${work.title} | Selected Work | ${siteName}`,
        description: work.description,
        inLanguage: "en-US",
        isPartOf: {
          "@id": websiteId,
        },
        about: {
          "@id": `${url}#creative-work`,
        },
      },
      creativeWorkSchema(work),
      breadcrumbSchema([
        { name: siteName, url: siteUrl },
        { name: "Selected Work", url: absoluteUrl("/#work") },
        { name: work.title, url },
      ]),
    ],
  };
}
