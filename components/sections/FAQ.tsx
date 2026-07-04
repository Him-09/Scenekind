"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

const faqs = [
  {
    q: "Is the work fully AI-generated?",
    a: "No — it's AI-produced, human-directed. Strategy, concept, scripting, art direction, editing, sound, and grading are handled by our creative team. AI replaces the shoot, not the judgment. Every asset goes through the same review standards as a traditional commercial before delivery.",
  },
  {
    q: "Can you match our brand?",
    a: "Yes. We start every engagement with your brand guidelines — palette, typography, tone, product accuracy, and any visual references you share. The first concept round exists precisely so we can lock the look before production. If something drifts off-brand, it doesn't ship.",
  },
  {
    q: "Do we need to ship products or book creators?",
    a: "No. That's the point. We work from product photography, 3D references, or existing brand assets — no samples in the mail, no creator contracts, no location bookings. If you have great product shots, we can start from those; if not, we'll advise on what to capture.",
  },
  {
    q: "Can we get multiple variations?",
    a: "Yes — variations are where the pipeline earns its keep. Different hooks, openings, creators, angles, and end cards can be produced from the same core concept, which is exactly what paid-social testing needs. Variation batches are built into most engagements.",
  },
  {
    q: "What formats do you deliver?",
    a: "All standard ratios: 9:16 for Stories, Reels, and TikTok; 1:1 and 4:5 for feed; 16:9 for YouTube, web, and CTV. Masters are delivered in high-resolution formats, with platform-ready compressions on request.",
  },
  {
    q: "Who is Scenekind best for?",
    a: "Brands, agencies, DTC, and SaaS teams that need commercial-quality video on modern timelines — a launch next month, a testing calendar that never stops, or more formats than a traditional production budget can cover. If you need a full live-action shoot with real talent on location, we'll tell you honestly — that's not us.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const reduced = useReducedMotion();

  return (
    <section id="faq" aria-label="Frequently asked questions" className="rule py-24 md:py-32">
      <div className="mx-auto max-w-wrap px-6 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionHeading
              eyebrow="FAQ"
              title="Questions worth asking."
              intro="Straight answers about how AI-first production actually works."
            />
          </div>

          <div className="divide-y divide-line border-y border-line">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <Reveal key={faq.q} delay={i * 0.04}>
                  <div>
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${i}`}
                      id={`faq-button-${i}`}
                      className="flex w-full items-center justify-between gap-6 py-6 text-left"
                    >
                      <span className="font-display text-lg font-medium text-ink md:text-xl">
                        {faq.q}
                      </span>
                      <span
                        aria-hidden="true"
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ease-studio ${
                          isOpen
                            ? "rotate-45 border-[#171716] bg-[#171716] text-[#F2F0EA]"
                            : "border-line text-ink"
                        }`}
                      >
                        <Plus className="h-4 w-4" />
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={`faq-panel-${i}`}
                          role="region"
                          aria-labelledby={`faq-button-${i}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            duration: reduced ? 0.1 : 0.4,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="overflow-hidden"
                        >
                          <p className="max-w-2xl pb-7 text-sm leading-relaxed text-mist md:text-base">
                            {faq.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
