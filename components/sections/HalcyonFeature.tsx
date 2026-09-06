"use client";

import { useCallback, useState } from "react";
import Image from "next/image";
import { Play, Volume2 } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import VideoTile from "@/components/ui/VideoTile";
import WorkModal from "@/components/work/WorkModal";
import { halcyonProject, type Project } from "@/lib/projects";
import { trackEvent } from "@/lib/analytics";

const soundStates = [
  {
    time: "00—12",
    label: "Pressure",
    copy: "Seven close-mic’d noise sources stack until the street becomes genuinely unpleasant.",
  },
  {
    time: "12—20",
    label: "Calm",
    copy: "The earcups seal on one frame. A low cancelled tone leaves only breath, coat, and footsteps.",
  },
  {
    time: "20—30",
    label: "Proof + payoff",
    copy: "One lifted earcup brings the full wall back before the alien lands the parking question.",
  },
] as const;

const referenceFrames = [
  {
    src: "/images/halcyon/listener.webp",
    alt: "HALCYON listener casting and wardrobe reference",
    label: "Listener study",
    className: "xl:col-span-3",
  },
  {
    src: "/images/halcyon/headphones.webp",
    alt: "HALCYON over-ear headphone product reference",
    label: "Product lock",
    className: "xl:col-span-3",
  },
  {
    src: "/images/halcyon/street.webp",
    alt: "Urban street environment reference for the HALCYON commercial",
    label: "Chaos plate",
    className: "xl:col-span-2",
  },
  {
    src: "/images/halcyon/alien.webp",
    alt: "Alien character reference for the HALCYON commercial",
    label: "Final character",
    className: "xl:col-span-2",
  },
  {
    src: "/images/halcyon/ship.webp",
    alt: "Spaceship prop reference for the HALCYON commercial",
    label: "The button",
    className: "xl:col-span-2",
  },
] as const;

export default function HalcyonFeature() {
  const [selected, setSelected] = useState<Project | null>(null);
  const closeModal = useCallback(() => setSelected(null), []);

  const openFilm = useCallback(() => {
    trackEvent("Work Opened", {
      work_name: halcyonProject.title,
      work_category: halcyonProject.type,
      work_location: "HALCYON Feature",
    });
    setSelected(halcyonProject);
  }, []);

  return (
    <section
      id="halcyon"
      aria-labelledby="halcyon-title"
      className="rule overflow-hidden bg-[#101513] py-20 text-[#F2F0EA] md:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-wrap px-6 lg:px-10">
        <Reveal>
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/15 pb-5">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-white/55">
              Featured commercial
            </p>
            <p className="text-xs uppercase tracking-[0.2em] text-[#63D7CE]">
              05 · Audio · Consumer tech
            </p>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(18rem,0.65fr)] lg:items-end">
            <div>
              <h2
                id="halcyon-title"
                className="font-display text-[3.2rem] font-semibold leading-[0.92] tracking-[-0.03em] sm:text-[4.8rem] lg:text-[6.8rem]"
              >
                HALCYON
              </h2>
              <p className="mt-4 font-display text-2xl text-white/78 sm:text-3xl">
                Is parking free here?
              </p>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-white/58 md:text-base">
              A noise-cancelling headphone spot where the city becomes
              impossible, the product restores calm, and a spaceship arrives
              without earning so much as a flinch.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="group relative mt-12 overflow-hidden rounded-[1.75rem] border border-white/12 bg-black shadow-[0_32px_100px_-38px_rgba(0,0,0,0.9)]">
            <VideoTile
              src={halcyonProject.src}
              poster="/images/halcyon/poster.webp"
              label={halcyonProject.title}
              className="aspect-video rounded-none bg-black"
            />
            <button
              type="button"
              onClick={openFilm}
              aria-label="Open HALCYON commercial with sound"
              className="absolute inset-0 z-10 flex items-end justify-between gap-4 p-5 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-white sm:p-7"
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-[#F2F0EA] px-4 py-2.5 text-xs font-semibold text-[#171716] shadow-lg transition-transform duration-300 group-hover:-translate-y-1 sm:px-5 sm:text-sm">
                <Play className="h-4 w-4 fill-current" aria-hidden="true" />
                Watch the film
              </span>
              <span className="hidden items-center gap-2 rounded-full border border-white/25 bg-black/45 px-4 py-2 text-xs text-white/82 backdrop-blur-sm sm:inline-flex">
                <Volume2 className="h-4 w-4" aria-hidden="true" />
                Sound opens in case study
              </span>
            </button>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
          <Reveal>
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#63D7CE]">
              Director’s note
            </p>
            <blockquote className="mt-5 max-w-xl font-display text-3xl font-medium leading-[1.08] sm:text-4xl">
              “Calm is the product; a flinch sells nothing.”
            </blockquote>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-white/55 md:text-base">
              The decisive product demo happens twice: first when the earcups
              seal, then when one cup lifts and the complete noise wall slams
              back. The audience feels the difference instead of being told.
            </p>
          </Reveal>

          <div className="divide-y divide-white/14 border-y border-white/14">
            {soundStates.map((state, index) => (
              <Reveal key={state.label} delay={index * 0.07}>
                <article className="grid gap-3 py-6 sm:grid-cols-[5rem_8rem_1fr] sm:gap-6">
                  <p className="font-display text-xl text-[#63D7CE]">
                    {state.time}
                  </p>
                  <h3 className="font-display text-lg font-medium">
                    {state.label}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/55">
                    {state.copy}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.12}>
          <div className="mt-16 flex items-end justify-between gap-5 border-t border-white/15 pt-6">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#63D7CE]">
                Production system
              </p>
              <h3 className="mt-3 font-display text-2xl font-medium sm:text-3xl">
                Designed before the first frame.
              </h3>
            </div>
            <p className="hidden max-w-sm text-right text-sm leading-relaxed text-white/45 md:block">
              Character, product, environment, and final-button references
              kept the escalating world coherent across twelve cuts.
            </p>
          </div>

          <div className="mt-7 grid gap-3 md:grid-cols-2 xl:grid-cols-6">
            {referenceFrames.map((frame) => (
              <figure
                key={frame.src}
                className={`group/reference relative aspect-video overflow-hidden rounded-2xl bg-white/5 ${frame.className}`}
              >
                <Image
                  src={frame.src}
                  alt={frame.alt}
                  fill
                  sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-studio group-hover/reference:scale-[1.025]"
                />
                <figcaption className="absolute bottom-3 left-3 rounded-full bg-black/55 px-3 py-1.5 text-[10px] uppercase tracking-[0.16em] text-white/80 backdrop-blur-sm">
                  {frame.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </Reveal>
      </div>

      <WorkModal project={selected} onClose={closeModal} />
    </section>
  );
}
