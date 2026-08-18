"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import VideoTile from "@/components/ui/VideoTile";
import { cn } from "@/lib/cn";

export type CarouselItem = {
  src: string;
  label: string;
  caption: string;
};

type HeroCarouselProps = {
  items: CarouselItem[];
  className?: string;
  compact?: boolean;
};

type LoopMetrics = {
  start: number;
  length: number;
};

/**
 * Hero media carousel: a time-based infinite loop with touch scrolling and
 * measured previous/next navigation. Three copies keep both directions
 * seamless; duplicate sets are hidden from assistive technology.
 */
export default function HeroCarousel({
  items,
  className,
  compact = false,
}: HeroCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const hoveringRef = useRef(false);
  const interactingRef = useRef(false);
  const resumeAtRef = useRef(0);
  const normalizeTimerRef = useRef<number | null>(null);
  const [reduced, setReduced] = useState(false);

  const renderedItems = useMemo(
    () => (items.length < 2 ? items : [...items, ...items, ...items]),
    [items]
  );

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  const getLoopMetrics = useCallback((): LoopMetrics | null => {
    const track = trackRef.current;
    if (!track || items.length < 2) return null;

    const tiles = track.querySelectorAll<HTMLElement>("[data-carousel-tile]");
    const middleStart = tiles[items.length];
    const finalStart = tiles[items.length * 2];
    if (!middleStart || !finalStart) return null;

    const length = finalStart.offsetLeft - middleStart.offsetLeft;
    if (length <= 0) return null;

    return { start: middleStart.offsetLeft, length };
  }, [items.length]);

  const normalizeLoop = useCallback(() => {
    const track = trackRef.current;
    const metrics = getLoopMetrics();
    if (!track || !metrics || interactingRef.current) return;

    const { start, length } = metrics;
    if (track.scrollLeft < start) {
      track.scrollLeft += length;
    } else if (track.scrollLeft >= start + length) {
      track.scrollLeft -= length;
    }
  }, [getLoopMetrics]);

  const scheduleNormalize = useCallback(() => {
    if (normalizeTimerRef.current !== null) {
      window.clearTimeout(normalizeTimerRef.current);
    }
    normalizeTimerRef.current = window.setTimeout(() => {
      normalizeLoop();
      normalizeTimerRef.current = null;
    }, 180);
  }, [normalizeLoop]);

  // Begin on the middle copy so previous and next both loop cleanly.
  useEffect(() => {
    const track = trackRef.current;
    if (!track || items.length < 2) return;

    const positionAtMiddle = () => {
      const metrics = getLoopMetrics();
      if (metrics) track.scrollLeft = metrics.start;
    };

    const frame = window.requestAnimationFrame(positionAtMiddle);
    const resizeObserver = new ResizeObserver(positionAtMiddle);
    resizeObserver.observe(track);

    return () => {
      window.cancelAnimationFrame(frame);
      resizeObserver.disconnect();
    };
  }, [getLoopMetrics, items.length]);

  // Time-based motion stays consistent across displays and frame rates.
  useEffect(() => {
    if (reduced || items.length < 2) return;
    const track = trackRef.current;
    if (!track) return;

    let raf = 0;
    let previousTime = performance.now();
    const step = (time: number) => {
      const elapsed = Math.min(time - previousTime, 40);
      previousTime = time;

      const paused =
        hoveringRef.current ||
        interactingRef.current ||
        time < resumeAtRef.current ||
        document.visibilityState !== "visible";

      if (!paused) {
        track.scrollLeft += elapsed * 0.035;
        normalizeLoop();
      }
      raf = window.requestAnimationFrame(step);
    };

    raf = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(raf);
  }, [items.length, normalizeLoop, reduced]);

  useEffect(
    () => () => {
      if (normalizeTimerRef.current !== null) {
        window.clearTimeout(normalizeTimerRef.current);
      }
    },
    []
  );

  const scrollByTile = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;

    normalizeLoop();
    const firstTile = track.querySelector<HTMLElement>("[data-carousel-tile]");
    const gap = Number.parseFloat(window.getComputedStyle(track).columnGap) || 0;
    const distance = (firstTile?.offsetWidth ?? 320) + gap;

    resumeAtRef.current = performance.now() + 2500;
    track.scrollBy({
      left: direction * distance,
      behavior: reduced ? "auto" : "smooth",
    });
    scheduleNormalize();
  };

  if (items.length === 0) return null;

  return (
    <div className={cn("relative", className)}>
      <div
        ref={trackRef}
        role="region"
        aria-label="Selected work carousel"
        onMouseEnter={() => (hoveringRef.current = true)}
        onMouseLeave={() => (hoveringRef.current = false)}
        onPointerDown={() => (interactingRef.current = true)}
        onPointerUp={() => {
          interactingRef.current = false;
          resumeAtRef.current = performance.now() + 2000;
          scheduleNormalize();
        }}
        onPointerCancel={() => {
          interactingRef.current = false;
          scheduleNormalize();
        }}
        onScroll={scheduleNormalize}
        className={cn(
          "scrollbar-none flex touch-pan-x overflow-x-auto overscroll-x-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
          compact ? "gap-3 px-6" : "gap-4 px-6 lg:gap-5 lg:px-10"
        )}
      >
        {renderedItems.map((item, index) => {
          const duplicate = items.length > 1 &&
            (index < items.length || index >= items.length * 2);

          return (
            <div
              key={`${item.label}-${index}`}
              data-carousel-tile
              aria-hidden={duplicate || undefined}
              className={cn(
                "relative shrink-0",
                compact
                  ? "w-[156px] sm:w-[190px] md:w-[220px]"
                  : "w-[220px] lg:w-[260px] xl:w-[300px] 2xl:w-[320px]"
              )}
            >
              <VideoTile
                src={item.src}
                label={item.label}
                className="aspect-[9/16]"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 rounded-b-tile bg-gradient-to-t from-black/55 via-black/20 to-transparent p-4 pt-10 sm:p-5 sm:pt-12"
              >
                <p className="text-sm font-medium text-white">{item.label}</p>
                <p className="mt-0.5 text-xs text-white/70">{item.caption}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div
        className={cn(
          "mt-6 justify-end gap-3 px-6 lg:px-10",
          compact ? "hidden" : "flex"
        )}
      >
        <button
          type="button"
          onClick={() => scrollByTile(-1)}
          aria-label="Previous work"
          disabled={items.length < 2}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[#DDD9CF] bg-[#FBFAF7] text-[#171716] transition-all duration-300 ease-studio hover:border-[#171716] hover:bg-[#171716] hover:text-[#F2F0EA] disabled:cursor-not-allowed disabled:opacity-40"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={() => scrollByTile(1)}
          aria-label="Next work"
          disabled={items.length < 2}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[#DDD9CF] bg-[#FBFAF7] text-[#171716] transition-all duration-300 ease-studio hover:border-[#171716] hover:bg-[#171716] hover:text-[#F2F0EA] disabled:cursor-not-allowed disabled:opacity-40"
        >
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
