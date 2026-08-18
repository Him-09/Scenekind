"use client";

import mixpanel from "mixpanel-browser/src/loaders/loader-module-core";

type AnalyticsValue = string | number | boolean | null | undefined;
export type AnalyticsProperties = Record<string, AnalyticsValue>;
type MixpanelWithPageView = typeof mixpanel & {
  track_pageview: (properties?: AnalyticsProperties) => void;
};

const mixpanelToken =
  process.env.NEXT_PUBLIC_MIXPANEL_TOKEN ??
  "b2b7c0cf5b0b348d217c884f03c28168";
const mixpanelApiHost =
  process.env.NEXT_PUBLIC_MIXPANEL_API_HOST ?? "https://api-eu.mixpanel.com";
const mixpanelWithPageView = mixpanel as MixpanelWithPageView;

let initialized = false;

function cleanProperties(properties: AnalyticsProperties = {}) {
  return Object.fromEntries(
    Object.entries(properties).filter(([, value]) => {
      if (value === null || value === undefined) return false;
      if (typeof value === "string" && value.trim() === "") return false;
      return true;
    })
  );
}

function getUtmProperties(searchParams: URLSearchParams) {
  return cleanProperties({
    utm_source: searchParams.get("utm_source"),
    utm_medium: searchParams.get("utm_medium"),
    utm_campaign: searchParams.get("utm_campaign"),
    utm_content: searchParams.get("utm_content"),
    utm_term: searchParams.get("utm_term"),
  });
}

export function initAnalytics() {
  if (initialized || typeof window === "undefined" || !mixpanelToken) return;

  mixpanel.init(mixpanelToken, {
    autocapture: false,
    api_host: mixpanelApiHost,
    debug: process.env.NODE_ENV !== "production",
    persistence: "localStorage",
    track_pageview: false,
  });

  mixpanel.register({
    site: "scenekind.studio",
    platform: "web",
  });

  initialized = true;
}

export function trackEvent(
  eventName: string,
  properties: AnalyticsProperties = {}
) {
  initAnalytics();
  if (!initialized) return;

  mixpanel.track(eventName, cleanProperties(properties));
}

export function trackPageView(pathname: string, searchParams: URLSearchParams) {
  const path = `${pathname}${searchParams.toString() ? `?${searchParams}` : ""}`;
  const properties = cleanProperties({
    path,
    page_title: document.title,
    referrer: document.referrer,
    ...getUtmProperties(searchParams),
  });

  initAnalytics();
  if (!initialized) return;

  mixpanelWithPageView.track_pageview(properties);
}
