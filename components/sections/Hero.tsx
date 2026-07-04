"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useReducedMotion } from "framer-motion";
import Button from "@/components/ui/Button";
import HeroCarousel, { type CarouselItem } from "@/components/ui/HeroCarousel";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp = (reduced: boolean, delay: number) => ({
  initial: { opacity: 0, y: reduced ? 0 : 34 },
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
      className="relative overflow-hidden pb-16 pt-32 md:pt-40"
    >
      <div
        data-hero-content
        className="mx-auto w-full max-w-wrap px-6 lg:px-10"
      >
        <motion.p
          {...fadeUp(!!reduced, 0.05)}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-line bg-cream-card px-3.5 py-1.5 text-xs font-medium text-mist"
        >
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-ink" />
          AI-First Creative Production Studio
        </motion.p>

        <motion.h1
          {...fadeUp(!!reduced, 0.15)}
          className="max-w-5xl font-display text-display-xl font-medium text-ink"
        >
          Cinematic ad production, without the traditional production drag.
        </motion.h1>

        <div className="mt-10 flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <motion.p
            {...fadeUp(!!reduced, 0.3)}
            className="max-w-xl text-lg leading-relaxed text-mist"
          >
            We turn campaign ideas into realistic commercials, product ads,
            motion design, and creator-style assets through AI-first workflows
            — faster, without sacrificing direction or polish.
          </motion.p>

          <motion.div
            {...fadeUp(!!reduced, 0.4)}
            className="flex shrink-0 flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Button href="/contact" size="lg" withArrow>
              Book a Creative Call
            </Button>
            <Button href="/#services" size="lg" variant="outline">
              Explore Services
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Media carousel */}
      <motion.div {...fadeUp(!!reduced, 0.55)} className="mt-16">
        <HeroCarousel items={reel} />
      </motion.div>

      <motion.p
        {...fadeUp(!!reduced, 0.7)}
        className="mx-auto mt-10 max-w-wrap px-6 text-sm text-mist lg:px-10"
      >
        AI-first creative production for commercials, product ads, motion
        design, and creator-style campaigns.
      </motion.p>
    </section>
  );
}
