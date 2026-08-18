"use client";

import { useRef } from "react";
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
 * scrolling use snap points without cloning items or adding desktop controls.
 */
export default function HeroCarousel({
  items,
  className,
  compact = false,
}: HeroCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);

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
    </div>
  );
}
