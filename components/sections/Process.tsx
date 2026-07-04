"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

const steps = [
  {
    step: "01",
    title: "Brief",
    body: "You tell us what you're launching, selling, or testing — we shape it into a production brief.",
  },
  {
    step: "02",
    title: "Concept",
    body: "Direction, script, and visual references, approved before production starts.",
  },
  {
    step: "03",
    title: "Production",
    body: "Our AI-first pipeline produces the scenes — no crews, casting, or location days.",
  },
  {
    step: "04",
    title: "Delivery",
    body: "Finished masters in every format and ratio your channels need.",
  },
  {
    step: "05",
    title: "Iterate",
    body: "New hooks, angles, and refreshes on a cycle that keeps pace with your media plan.",
  },
];

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  // Scroll-driven progress line alongside the steps (motion allowed only).
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced || !sectionRef.current || !lineRef.current) return;

    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          transformOrigin: "top",
          ease: "none",
          scrollTrigger: {
            trigger: "[data-steps]",
            start: "top 70%",
            end: "bottom 45%",
            scrub: 0.6,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="process"
      aria-label="Process"
      className="rule py-24 md:py-32"
    >
      <div className="mx-auto max-w-wrap px-6 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionHeading
              eyebrow="Process"
              title="A faster production workflow, built for modern campaigns."
              intro="Five stages, one pipeline. Everything a traditional production delivers — minus the waiting."
            />
          </div>

          <div data-steps className="relative">
            {/* Progress rail */}
            <div
              aria-hidden="true"
              className="absolute bottom-4 left-[7px] top-4 w-px bg-line"
            />
            <div
              ref={lineRef}
              aria-hidden="true"
              className="absolute bottom-4 left-[7px] top-4 w-px scale-y-0 bg-ink"
            />
            <ol className="space-y-12">
              {steps.map((item, i) => (
                <Reveal key={item.step} delay={i * 0.06}>
                  <li className="relative pl-10">
                    <span
                      aria-hidden="true"
                      className="absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full border-2 border-ink bg-cream"
                    />
                    <p className="text-xs font-medium uppercase tracking-[0.22em] text-mist">
                      Step {item.step}
                    </p>
                    <h3 className="mt-2 font-display text-2xl font-medium text-ink">
                      {item.title}
                    </h3>
                    <p className="mt-2 max-w-md text-sm leading-relaxed text-mist md:text-base">
                      {item.body}
                    </p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
