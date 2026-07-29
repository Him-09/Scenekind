"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useReducedMotion } from "framer-motion";
import Button from "@/components/ui/Button";
import HeroCarousel, { type CarouselItem } from "@/components/ui/HeroCarousel";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp = (reduced: boolean, delay: number) => ({
  initial: { opacity: 1, y: 0 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: reduced ? 0.2 : 0.9, delay, ease },
});

/**
 * Hero media reel. Files live in /public/videos; missing files show
 * labeled placeholder tiles until the real videos are added.
 */
const reel: CarouselItem[] = [
  { src: "/videos/beauty-hero-film.mp4", label: "Lip Tint Hero Film", caption: "AI Commercial" },
  { src: "/videos/creator-testimonial-batch.mp4", label: "Creator-Style Refill Demo", caption: "Creator-Style Video" },
  { src: "/videos/fitness-wearable-launch.mp4", label: "Fitness Wearable Launch", caption: "AI Commercial" },
  { src: "/videos/skincare-paid-social.mp4", label: "Skincare Application Demo", caption: "Product Ads" },
  { src: "/videos/skincare-product-spotlight.mp4", label: "Skincare Product Spotlight", caption: "Product Ads" },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  // Gentle scroll-driven drift on the headline block.
  useEffect(() => {
    if (reduced || !sectionRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.to("[data-hero-content]", {
        yPercent: -6,
        opacity: 0.35,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom 40%",
          scrub: 0.8,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <section
      ref={sectionRef}
      id="top"
      aria-label="Introduction"
      className="relative overflow-hidden pb-12 pt-24 md:pb-16 md:pt-40"
    >
      <div
        data-hero-content
        className="mx-auto w-full max-w-wrap px-6 lg:px-10"
      >
        <motion.p
          {...fadeUp(!!reduced, 0.05)}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-cream-card px-3.5 py-1.5 text-xs font-medium text-mist md:mb-8"
        >
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-ink" />
          5-day ad sprint for product brands
        </motion.p>

        <motion.h1
          {...fadeUp(!!reduced, 0.15)}
          className="max-w-[21rem] text-balance font-display text-[2.35rem] font-medium leading-[1.02] text-ink md:max-w-5xl md:text-display-xl"
        >
          Scroll-stopping product ads, live in 5 days.
        </motion.h1>

        <motion.div
          {...fadeUp(!!reduced, 0.28)}
          className="-mx-6 mt-8 md:hidden"
        >
          <HeroCarousel items={reel} compact />
        </motion.div>

        <div className="mt-8 flex flex-col gap-8 md:mt-10 md:flex-row md:items-end md:justify-between md:gap-10">
          <motion.p
            {...fadeUp(!!reduced, 0.3)}
            className="max-w-[21rem] text-base leading-relaxed text-mist md:max-w-xl md:text-lg"
          >
            Get a polished product ad, creator-style demo, or launch film
            without hiring a crew, sourcing creators, or waiting through a
            month-long production cycle.
          </motion.p>

          <motion.div
            {...fadeUp(!!reduced, 0.4)}
            className="flex shrink-0 flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Button href="/contact?intent=starter-sprint" size="lg" withArrow>
              Start the $295 Sprint
            </Button>
            <Button href="/contact?intent=teardown" size="lg" variant="outline">
              Get a Free Teardown
            </Button>
          </motion.div>
        </div>

        <motion.div
          {...fadeUp(!!reduced, 0.48)}
          className="mt-8 grid max-w-3xl grid-cols-3 border-y border-line py-5 md:mt-12"
        >
          {[
            ["3", "brands in pilot"],
            ["40+", "assets produced"],
            ["5 days", "sprint turnaround"],
          ].map(([value, label]) => (
            <div key={label} className="pr-4">
              <p className="font-display text-2xl font-medium text-ink md:text-3xl">
                {value}
              </p>
              <p className="mt-1 text-[11px] uppercase tracking-[0.16em] text-mist">
                {label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Media carousel */}
      <motion.div {...fadeUp(!!reduced, 0.55)} className="mt-16 hidden md:block">
        <HeroCarousel items={reel} />
      </motion.div>

      <motion.p
        {...fadeUp(!!reduced, 0.7)}
        className="mx-auto mt-10 max-w-wrap px-6 text-sm text-mist lg:px-10"
      >
        Fixed-scope sprint, campaign builds, and ongoing creative batches for
        brands that need quality video without agency drag.
      </motion.p>
    </section>
  );
}
