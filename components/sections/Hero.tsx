"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useReducedMotion } from "framer-motion";
import Button from "@/components/ui/Button";
import HeroCarousel, { type CarouselItem } from "@/components/ui/HeroCarousel";
import HighlightText from "@/components/ui/HighlightText";

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
  {
    src: "/videos/skincare-product-spotlight.mp4",
    label: "Le Mieux Bio Cell Cream",
    caption: "Product Ad",
  },
  {
    src: "/videos/absolutejoi-night-oil.mp4",
    label: "AbsoluteJOI Night Oil",
    caption: "AI Commercial",
  },
  {
    src: "/videos/glassfx-duo-hydrafx.mp4",
    label: "GLASSFX DUO-HYDRAfx",
    caption: "AI Commercial",
  },
  {
    src: "/videos/creator-testimonial-batch.mp4",
    label: "Creator-Style Refill Demo",
    caption: "Creator-Style Video",
  },
  {
    src: "/videos/fitness-wearable-launch.mp4",
    label: "Fitness Wearable Launch",
    caption: "AI Commercial",
  },
  {
    src: "/videos/skincare-paid-social.mp4",
    label: "Skincare Application Demo",
    caption: "Product Ad",
  },
  {
    src: "/videos/rhode-glazing-milk.mp4",
    label: "Rhode Glazing Milk",
    caption: "Product Ad",
  },
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
      className="compact-laptop-hero relative overflow-hidden pb-12 pt-24 md:pb-16 md:pt-32 lg:pt-40"
    >
      <div
        data-hero-content
        className="mx-auto w-full max-w-wrap px-6 lg:px-10"
      >
        <motion.p
          {...fadeUp(!!reduced, 0.05)}
          className="compact-laptop-hero-kicker mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-cream-card px-3.5 py-1.5 text-xs font-medium text-mist md:mb-8"
        >
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-ink" />
          Free creative teardown for product brands
        </motion.p>

        <motion.h1
          {...fadeUp(!!reduced, 0.15)}
          className="compact-laptop-hero-title max-w-[21rem] text-balance font-display text-[2.35rem] font-semibold leading-[1.02] tracking-normal text-ink sm:max-w-[38rem] sm:text-[3.3rem] md:max-w-[46rem] md:text-[4.2rem] lg:max-w-6xl lg:text-[5.4rem] xl:text-[6.5rem]"
        >
          Cinematic product films,{" "}
          <HighlightText>built to move fast.</HighlightText>
        </motion.h1>

        <motion.div
          {...fadeUp(!!reduced, 0.28)}
          className="-mx-6 mt-8 lg:hidden"
        >
          <HeroCarousel items={reel} compact />
        </motion.div>

        <div className="compact-laptop-hero-body mt-8 flex flex-col gap-8 md:mt-10 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
          <motion.p
            {...fadeUp(!!reduced, 0.3)}
            className="max-w-[21rem] text-base leading-relaxed text-mist sm:max-w-[34rem] md:max-w-xl md:text-lg"
          >
            Get a polished product ad, creator-style demo, or launch film
            without hiring a crew, sourcing creators, or waiting through a
            month-long production cycle.
          </motion.p>

          <motion.div
            {...fadeUp(!!reduced, 0.4)}
            className="flex shrink-0 flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Button
              href="/contact?intent=teardown"
              size="lg"
              className="w-full sm:w-auto"
              analyticsEvent="CTA Clicked"
              analyticsProperties={{
                cta_name: "Free Teardown",
                cta_location: "Hero",
                cta_intent: "teardown",
                destination: "/contact",
              }}
              withArrow
            >
              Get a Free Teardown
            </Button>
            <Button
              href="/contact?intent=starter-sprint"
              size="lg"
              variant="outline"
              className="w-full sm:w-auto"
              analyticsEvent="CTA Clicked"
              analyticsProperties={{
                cta_name: "Starter Sprint",
                cta_location: "Hero",
                cta_intent: "starter-sprint",
                destination: "/contact",
              }}
            >
              Start the $295 Sprint
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Media carousel */}
      <motion.div
        {...fadeUp(!!reduced, 0.55)}
        className="compact-laptop-hero-carousel mt-16 hidden lg:block"
      >
        <HeroCarousel items={reel} />
      </motion.div>

      <motion.p
        {...fadeUp(!!reduced, 0.7)}
        className="compact-laptop-hero-caption mx-auto mt-10 max-w-wrap px-6 text-sm text-mist lg:px-10"
      >
        Start with a free teardown. Move into the sprint only when there is a
        clear angle worth making.
      </motion.p>
    </section>
  );
}
