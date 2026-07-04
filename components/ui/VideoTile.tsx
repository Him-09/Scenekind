"use client";

import { useEffect, useRef, useState } from "react";
import { Clapperboard, Play } from "lucide-react";
import { cn } from "@/lib/cn";

type VideoTileProps = {
  src: string;
  label: string;
  poster?: string;
  className?: string;
};

/**
 * Portfolio video tile: muted, looping, playsInline.
 * Plays while in view (and on hover/focus), pauses off-screen.
 * If the file is missing, falls back to a labeled placeholder.
 */
export default function VideoTile({
  src,
  label,
  poster,
  className,
}: VideoTileProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const [failed, setFailed] = useState(false);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.35 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || failed) return;
    if (inView) {
      video.play().catch(() => {
        /* autoplay blocked — poster stays visible */
      });
    } else {
      video.pause();
    }
  }, [inView, failed]);

  return (
    <div
      ref={wrapRef}
      className={cn(
        "group/tile relative aspect-video overflow-hidden rounded-tile bg-cream-sunken",
        className
      )}
      onMouseEnter={() => videoRef.current?.play().catch(() => {})}
    >
      {!failed ? (
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          muted
          loop
          playsInline
          preload="metadata"
          aria-label={label}
          onError={() => setFailed(true)}
          className="h-full w-full object-cover transition-transform duration-700 ease-studio group-hover/tile:scale-[1.03]"
        />
      ) : (
        /* Fallback placeholder — appears until the real file exists in /public/videos */
        <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-[linear-gradient(160deg,#EDEAE2_0%,#DFDBD1_100%)]">
          <Clapperboard className="h-7 w-7 text-ink/50" aria-hidden="true" />
          <p className="px-6 text-center text-xs font-medium uppercase tracking-[0.18em] text-mist">
            {label}
          </p>
          <span className="inline-flex items-center gap-1.5 text-[11px] text-ink/35">
            <Play className="h-3 w-3" aria-hidden="true" /> video preview
          </span>
        </div>
      )}
    </div>
  );
}
