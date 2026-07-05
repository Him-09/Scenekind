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
 * Hero media carousel: auto-scrolls in a seamless loop, draggable by
 * touch/scroll, with previous/next arrow controls. Auto-scroll pauses on
 * hover and interaction, and is disabled for prefers-reduced-motion.
 */
export default function HeroCarousel({
  items,
  className,
  compact = false,
}: HeroCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setReduced(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }, []);

  // Gentle auto-scroll with seamless wrap (items are rendered twice).
  useEffect(() => {
    if (reduced) return;
    const track = trackRef.current;
    if (!track) return;

    let raf = 0;
    const step = () => {
      if (!pausedRef.current) {
        track.scrollLeft += 0.6;
        const half = track.scrollWidth / 2;
        if (track.scrollLeft >= half) {
          track.scrollLeft -= half;
        }
      }
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [reduced]);

  const scrollByTile = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    pausedRef.current = true;
    track.scrollBy({ left: direction * 340, behavior: "smooth" });
    // Resume auto-scroll shortly after manual navigation.
    window.setTimeout(() => {
      pausedRef.current = false;
    }, 2500);
  };

  return (
    <div className={cn("relative", className)}>
      <div
        ref={trackRef}
        role="region"
        aria-label="Selected work carousel"
        onMouseEnter={() => (pausedRef.current = true)}
        onMouseLeave={() => (pausedRef.current = false)}
        onTouchStart={() => (pausedRef.current = true)}
        onTouchEnd={() =>
          window.setTimeout(() => (pausedRef.current = false), 2000)
        }
        className={cn(
          "scrollbar-none flex overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
          compact ? "gap-3 px-6" : "gap-5 px-6 lg:px-10"
        )}
      >
        {[...items, ...items].map((item, i) => (
          <div
            key={`${item.label}-${i}`}
            aria-hidden={i >= items.length}
            className={cn(
              "relative shrink-0",
              compact
                ? "w-[164px] sm:w-[200px]"
                : "w-[220px] md:w-[260px] 2xl:w-[320px]"
            )}
          >
            <VideoTile
              src={item.src}
              label={item.label}
              className="aspect-[9/16]"
            />
            {/* Caption overlay, orchid-style: bottom gradient + text */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-0 rounded-b-tile bg-gradient-to-t from-black/55 via-black/20 to-transparent p-5 pt-12"
            >
              <p className="text-sm font-medium text-white">{item.label}</p>
              <p className="mt-0.5 text-xs text-white/70">{item.caption}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Arrow controls */}
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
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[#DDD9CF] bg-[#FBFAF7] text-[#171716] transition-all duration-300 ease-studio hover:border-[#171716] hover:bg-[#171716] hover:text-[#F2F0EA]"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={() => scrollByTile(1)}
          aria-label="Next work"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[#DDD9CF] bg-[#FBFAF7] text-[#171716] transition-all duration-300 ease-studio hover:border-[#171716] hover:bg-[#171716] hover:text-[#F2F0EA]"
        >
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
