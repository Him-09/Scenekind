"use client";

import { useEffect, useRef, useState } from "react";
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

/**
 * A finite carousel that renders every project exactly once. Touch and trackpad
 * scrolling use snap points; the arrow controls wrap between the first and last
 * real cards without cloning any items.
 */
export default function HeroCarousel({
  items,
  className,
  compact = false,
}: HeroCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  const scrollByTile = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track || items.length < 2) return;

    const firstTile = track.querySelector<HTMLElement>("[data-carousel-tile]");
    const styles = window.getComputedStyle(track);
    const gap = Number.parseFloat(styles.columnGap) || 0;
    const distance = (firstTile?.offsetWidth ?? 320) + gap;
    const maxScroll = Math.max(0, track.scrollWidth - track.clientWidth);
    const atStart = track.scrollLeft <= 1;
    const atEnd = track.scrollLeft >= maxScroll - 1;

    let left = track.scrollLeft + direction * distance;
    if (direction === 1 && atEnd) left = 0;
    if (direction === -1 && atStart) left = maxScroll;

    track.scrollTo({
      left,
      behavior: reduced ? "auto" : "smooth",
    });
  };

  if (items.length === 0) return null;

  return (
    <div className={cn("relative", className)}>
      <div
        ref={trackRef}
        role="region"
        aria-label="All portfolio projects"
        className={cn(
          "scrollbar-none flex snap-x snap-mandatory touch-pan-x overflow-x-auto overscroll-x-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
          compact ? "gap-3 px-6" : "gap-4 px-6 lg:gap-5 lg:px-10"
        )}
      >
        {items.map((item) => (
          <div
            key={item.src}
            data-carousel-tile
            className={cn(
              "relative shrink-0 snap-start",
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
        ))}
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
