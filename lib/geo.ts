import { projects } from "@/lib/projects";
import {
  contactEmail,
  siteDescription,
  siteName,
  siteTitle,
  siteUrl,
} from "@/lib/site";

export function absoluteUrl(path: string) {
  if (path.startsWith("http")) return path;
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

export const sameAsUrls = ["https://www.instagram.com/scenekindstudio/"];

export const geoServices = [
  {
    slug: "ai-commercials",
    name: "AI Commercials",
    serviceType: "AI commercial production",
    headline: "AI commercials for product launches and brand campaigns.",
    description:
      "Scenekind produces directed cinematic AI commercials, launch films, hero spots, and cutdowns for product brands that need polished campaign video without a traditional shoot.",
    bestFor: "Brand launches, hero campaigns, seasonal moments, and product storytelling.",
    output: "15 to 60 second hero films with platform cutdowns.",
    audience: "DTC brands, SaaS companies, agencies, and brand teams.",
    includes: [
      "Campaign strategy and concept development",
      "Script, art direction, and visual references",
      "AI-first production with human creative direction",
      "Edit, sound design, color, and delivery in campaign ratios",
    ],
    keywords: [
      "ai commercial studio",
      "ai video production studio",
      "ai commercial production",
      "cinematic product ads",
    ],
  },
  {
    slug: "product-ads",
    name: "Product Ads",
    serviceType: "AI product ad production",
    headline: "Product ads built for paid social testing.",
    description:
      "Scenekind creates product ad batches, hook variations, product demos, and performance creative for brands testing across Meta, TikTok, YouTube, landing pages, and launch campaigns.",
    bestFor: "Paid social teams, ecommerce launches, skincare brands, beauty brands, and product marketers.",
    output: "Hook and angle batches with platform-native exports.",
    audience: "DTC brands, ecommerce teams, SaaS marketers, and growth teams.",
    includes: [
      "Hook and angle strategy",
      "Product-first visual direction",
      "Batch production for testing",
      "9:16, 4:5, 1:1, and 16:9 exports where needed",
    ],
    keywords: [
      "ai product ads studio",
      "product video ads",
      "dtc product ads",
      "paid social creative production",
    ],
  },
  {
    slug: "motion-design",
    name: "Motion Design",
    serviceType: "Motion design for product launches",
    headline: "Motion design for launches, explainers, and product polish.",
    description:
      "Scenekind builds logo animation, kinetic type, UI motion, product motion, explainers, and launch teasers that make product campaigns feel finished and campaign-ready.",
    bestFor: "Launches, product releases, brand refreshes, SaaS explainers, and motion systems.",
    output: "5 to 60 second motion pieces and cutdowns.",
    audience: "SaaS teams, DTC brands, agencies, and in-house brand teams.",
    includes: [
      "Logo and identity animation",
      "Kinetic typography",
      "Product and UI motion",
      "Launch teasers and motion systems",
    ],
    keywords: [
      "motion design studio",
      "product motion design",
      "launch teaser motion design",
      "saas motion design",
    ],
  },
  {
    slug: "creator-style-video",
    name: "Creator-Style Video",
    serviceType: "AI creator-style video production",
    headline: "Creator-style video ads without creator sourcing.",
    description:
      "Scenekind produces AI creator-style demos, avatar-led testimonials, native-feeling product explainers, and lifestyle spots for brands that need more creative volume without booking creators.",
    bestFor: "High-velocity creative testing, product education, testimonials, demos, and social launch content.",
    output: "15 to 45 second creator-style videos with multiple creators and angles.",
    audience: "DTC brands, ecommerce teams, paid social teams, and agencies.",
    includes: [
      "Creator persona and scenario direction",
      "Testimonial and demo scripts",
      "Lifestyle setups and product-use scenes",
      "Variation batches for paid social testing",
    ],
    keywords: [
      "creator style video ads",
      "ai ugc ads",
      "ai testimonial ads",
      "creator-style product demos",
    ],
  },
] as const;

export const geoOffers = [
  {
    id: "creative-teardown",
    name: "Creative Teardown",
    price: "0",
    priceCurrency: "USD",
    url: absoluteUrl("/contact?intent=teardown"),
    availability: "https://schema.org/InStock",
    description:
      "A free written audit of a brand's current ad, product page, or launch context with three untested creative angles.",
  },
  {
    id: "starter-sprint",
    name: "Starter Sprint",
    price: "295",
    priceCurrency: "USD",
    url: absoluteUrl("/contact?intent=starter-sprint"),
    availability: "https://schema.org/LimitedAvailability",
    description:
      "Three hooks on one product, delivered as three ready-to-run ads. Nothing upfront; invoiced on delivery and capped at six slots per month.",
  },
] as const;

export const geoFaqs = [
  {
    question: "What is Scenekind?",
    answer:
      "Scenekind is an AI-first creative production studio for product brands. It produces AI commercials, product ads, motion design, and creator-style video assets with human direction and fast fixed-scope workflows.",
  },
  {
    question: "Who is Scenekind best for?",
    answer:
      "Scenekind is best for DTC brands, SaaS teams, agencies, and brand teams that need commercial-quality video assets faster than a traditional shoot can usually deliver.",
  },
  {
    question: "What does the Starter Sprint include?",
    answer:
      "The Starter Sprint includes three hooks on one product, delivered as three ready-to-run ads. The price is $295, invoiced on delivery, with six slots available per month.",
  },
  {
    question: "Does Scenekind replace live-action production?",
    answer:
      "Scenekind replaces the heaviest production logistics such as crew, casting, location days, and creator sourcing. Strategy, concept, scripting, art direction, editing, sound, and grading are still human-directed.",
  },
  {
    question: "What formats does Scenekind deliver?",
    answer:
      "Scenekind can deliver common campaign ratios including 9:16, 4:5, 1:1, and 16:9, depending on the scope.",
  },
] as const;

const workSlugByTitle: Record<string, string> = {
  "Le Mieux Bio Cell Cream": "le-mieux-bio-cell-cream",
  "Fitness Wearable Launch": "fitness-wearable-launch",
  "AbsoluteJOI Night Oil": "absolutejoi-night-oil",
  "GLASSFX DUO-HYDRAfx": "glassfx-duo-hydrafx",
  "Creator-Style Refill Demo": "creator-style-refill-demo",
};

export const selectedWork = projects.map((project) => ({
  ...project,
  slug:
    workSlugByTitle[project.title] ??
    project.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, ""),
}));

export type GeoService = (typeof geoServices)[number];
export type SelectedWork = (typeof selectedWork)[number];

export function getServiceBySlug(slug: string) {
  return geoServices.find((service) => service.slug === slug);
}

export function getWorkBySlug(slug: string) {
  return selectedWork.find((work) => work.slug === slug);
}

export const publicGeoPaths = [
  "/",
  "/contact",
  ...geoServices.map((service) => `/services/${service.slug}`),
  ...selectedWork.map((work) => `/work/${work.slug}`),
  "/glassfx",
  "/absolutejoi",
] as const;

export const geoEntitySummary = {
  name: siteName,
  title: siteTitle,
  description: siteDescription,
  url: siteUrl,
  email: contactEmail,
  sameAs: sameAsUrls,
};
