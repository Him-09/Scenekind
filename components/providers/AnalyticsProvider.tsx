"use client";

import { Suspense, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import {
  initAnalytics,
  trackEvent,
  trackPageView,
  type AnalyticsProperties,
} from "@/lib/analytics";

function parseAnalyticsProperties(value: string | undefined) {
  if (!value) return {};

  try {
    return JSON.parse(value) as AnalyticsProperties;
  } catch {
    return {};
  }
}

function getClickLabel(element: HTMLElement) {
  return element.textContent?.replace(/\s+/g, " ").trim().slice(0, 120);
}

function AnalyticsEvents() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    initAnalytics();
  }, []);

  useEffect(() => {
    trackPageView(pathname, searchParams);
  }, [pathname, searchParams]);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const trackedElement = target.closest<HTMLElement>(
        "[data-mixpanel-event]"
      );
      if (!trackedElement) return;

      const eventName = trackedElement.dataset.mixpanelEvent;
      if (!eventName) return;

      const properties = parseAnalyticsProperties(
        trackedElement.dataset.mixpanelProperties
      );
      const href =
        trackedElement instanceof HTMLAnchorElement
          ? trackedElement.href
          : trackedElement.getAttribute("href") ?? undefined;

      trackEvent(eventName, {
        ...properties,
        href,
        label: getClickLabel(trackedElement),
      });
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}

export default function AnalyticsProvider() {
  return (
    <Suspense fallback={null}>
      <AnalyticsEvents />
    </Suspense>
  );
}
