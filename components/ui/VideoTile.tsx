"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Clapperboard, Play, Volume2, VolumeX } from "lucide-react";
import { cn } from "@/lib/cn";

const videoUnmutedEvent = "scenekind:video-unmuted";

type VideoTileProps = {
  src: string;
  label: string;
  poster?: string;
  className?: string;
};

/**
 * Portfolio video tile: starts muted, loops, and offers an explicit sound toggle.
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
  const instanceId = useId();
  const [failed, setFailed] = useState(false);
  const [inView, setInView] = useState(false);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin: "160px 0px", threshold: 0.12 }
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

  // Keep only one portfolio video audible at a time.
  useEffect(() => {
    const muteWhenAnotherStarts = (event: Event) => {
      if ((event as CustomEvent<string>).detail === instanceId) return;
      const video = videoRef.current;
      if (video) video.muted = true;
      setMuted(true);
    };

    window.addEventListener(videoUnmutedEvent, muteWhenAnotherStarts);
    return () =>
      window.removeEventListener(videoUnmutedEvent, muteWhenAnotherStarts);
  }, [instanceId]);

  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;

    const nextMuted = !muted;
    video.muted = nextMuted;
    setMuted(nextMuted);

    if (!nextMuted) {
      window.dispatchEvent(
        new CustomEvent<string>(videoUnmutedEvent, { detail: instanceId })
      );
      video.play().catch(() => {
        video.muted = true;
        setMuted(true);
      });
    }
  };

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
          autoPlay
          muted={muted}
          loop
          playsInline
          preload="auto"
          aria-label={label}
          onLoadedData={() => {
            if (inView) videoRef.current?.play().catch(() => {});
          }}
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

      {!failed && (
        <button
          type="button"
          onClick={toggleSound}
          aria-label={muted ? `Turn on sound for ${label}` : `Mute ${label}`}
          aria-pressed={!muted}
          title={muted ? "Turn on sound" : "Mute video"}
          className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-black/50 text-white shadow-sm backdrop-blur-sm transition-colors duration-200 hover:bg-black/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          {muted ? (
            <VolumeX className="h-4 w-4" aria-hidden="true" />
          ) : (
            <Volume2 className="h-4 w-4" aria-hidden="true" />
          )}
        </button>
      )}
    </div>
  );
}
