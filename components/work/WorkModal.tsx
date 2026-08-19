"use client";

import { useEffect, useRef } from "react";
import { X, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import VideoTile from "@/components/ui/VideoTile";
import type { Project } from "@/lib/projects";

type WorkModalProps = {
  project: Project | null;
  onClose: () => void;
};

/**
 * Case-study popup for a portfolio item. Closes on Escape, backdrop
 * click, or the close button. Locks page scroll while open.
 */
export default function WorkModal({ project, onClose }: WorkModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!project) return;
    previousFocusRef.current =
      document.activeElement instanceof HTMLElement ? document.activeElement : null;

    const previousOverflow = document.body.style.overflow;
    const focusableSelector = [
      "a[href]",
      "button:not([disabled])",
      "input:not([disabled])",
      "select:not([disabled])",
      "textarea:not([disabled])",
      '[tabindex]:not([tabindex="-1"])',
    ].join(",");

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }

      if (e.key !== "Tab" || !panelRef.current) return;

      const focusable = Array.from(
        panelRef.current.querySelectorAll<HTMLElement>(focusableSelector)
      ).filter((el) => el.tabIndex !== -1);

      if (focusable.length === 0) {
        e.preventDefault();
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement;
      const activeIsInside = active ? panelRef.current.contains(active) : false;

      if (e.shiftKey && (!activeIsInside || active === first)) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    const focusFrame = window.requestAnimationFrame(() => {
      closeRef.current?.focus({ preventScroll: true });
    });

    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
      previousFocusRef.current?.focus({ preventScroll: true });
      previousFocusRef.current = null;
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduced ? 0.1 : 0.25 }}
          className="fixed inset-0 z-[80] flex items-center justify-center p-3 sm:p-4 lg:p-6 xl:p-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby="work-modal-title"
          aria-describedby="work-modal-description"
        >
          {/* Backdrop */}
          <button
            type="button"
            aria-label="Close details"
            tabIndex={-1}
            onClick={onClose}
            className="absolute inset-0 cursor-default bg-black/60 backdrop-blur-sm"
          />

          {/* Panel */}
          <motion.div
            ref={panelRef}
            tabIndex={-1}
            initial={{ opacity: 0, y: reduced ? 0 : 32, scale: reduced ? 1 : 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: reduced ? 0 : 24, scale: reduced ? 1 : 0.98 }}
            transition={{ duration: reduced ? 0.1 : 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative max-h-[calc(100dvh-1.5rem)] w-full max-w-6xl overflow-y-auto rounded-[22px] bg-[#FBFAF7] shadow-[0_40px_120px_-24px_rgba(0,0,0,0.45)] sm:max-h-[90vh] lg:max-h-[calc(100dvh-3rem)] md:rounded-[28px]"
          >
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-[#DDD9CF] bg-[#FBFAF7] text-[#171716] transition-all duration-300 ease-studio hover:border-[#171716] hover:bg-[#171716] hover:text-[#F2F0EA] sm:right-5 sm:top-5"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>

            <div className="grid gap-8 p-5 sm:p-6 lg:grid-cols-[minmax(0,280px)_1fr] lg:gap-8 lg:p-8 xl:grid-cols-[minmax(0,320px)_1fr] xl:gap-12 xl:p-10">
              {/* Video — 9:16 */}
              <div className="mx-auto w-full max-w-[260px] sm:max-w-[320px] lg:mx-0 lg:max-w-[280px] xl:max-w-[320px]">
                <VideoTile
                  src={project.src}
                  label={project.title}
                  className="aspect-[9/16]"
                />
              </div>

              {/* Details */}
              <div className="min-w-0">
                <span className="inline-flex rounded-full border border-[#DDD9CF] px-3 py-1 text-[11px] text-mist">
                  {project.type}
                </span>
                <h3
                  id="work-modal-title"
                  className="mt-4 font-display text-2xl font-medium leading-[1.08] tracking-normal text-ink sm:text-3xl xl:text-4xl"
                >
                  {project.title}
                </h3>
                <p
                  id="work-modal-description"
                  className="mt-4 text-sm leading-relaxed text-mist xl:text-base"
                >
                  {project.details.overview}
                </p>

                <div className="mt-7 grid gap-5 border-y border-[#DDD9CF] py-6 sm:grid-cols-2">
                  <div>
                    <h4 className="text-[10px] font-medium uppercase tracking-[0.2em] text-mist">
                      Built for
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-ink/85">
                      {project.details.builtFor}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-[10px] font-medium uppercase tracking-[0.2em] text-mist">
                      Runtime
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-ink/85">
                      {project.details.runtime}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#F2F0EA] p-4 sm:col-span-2">
                    <h4 className="text-[10px] font-medium uppercase tracking-[0.2em] text-mist">
                      The hook
                    </h4>
                    <p className="mt-2 font-display text-lg leading-snug text-ink sm:text-xl">
                      “{project.details.hook}”
                    </p>
                  </div>
                </div>

                <div className="mt-7 grid gap-7 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-7">
                  <div>
                    <h4 className="text-xs font-medium uppercase tracking-[0.2em] text-mist">
                      Visual direction
                    </h4>
                    <p className="mt-3 text-sm leading-relaxed text-ink/85">
                      {project.details.direction}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-medium uppercase tracking-[0.2em] text-mist">
                      Sequence
                    </h4>
                    <ol className="mt-3 space-y-2">
                      {project.details.sequence.map((item, index) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-sm leading-relaxed text-ink/85 lg:gap-2.5"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#DDD9CF] text-[10px] text-mist"
                          >
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          {item}
                        </li>
                      ))}
                    </ol>
                  </div>

                  <div>
                    <h4 className="text-xs font-medium uppercase tracking-[0.2em] text-mist">
                      Deliverables
                    </h4>
                    <ul className="mt-3 space-y-2">
                      {project.details.deliverables.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-sm leading-relaxed text-ink/85 lg:gap-2.5"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-[#171716]"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div>
                      <h4 className="text-xs font-medium uppercase tracking-[0.2em] text-mist">
                        Sound
                      </h4>
                      <p className="mt-3 text-sm leading-relaxed text-ink/85">
                        {project.details.sound}
                      </p>
                    </div>
                    <div className="mt-5">
                      <h4 className="text-xs font-medium uppercase tracking-[0.2em] text-mist">
                        On-screen type
                      </h4>
                      <p className="mt-3 text-sm leading-relaxed text-ink/85">
                        {project.details.onScreenType}
                      </p>
                    </div>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.details.formats.map((format) => (
                        <span
                          key={format}
                          className="rounded-full border border-[#DDD9CF] px-3 py-1.5 text-xs text-mist"
                        >
                          {format}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-[#DDD9CF] pt-6 lg:col-span-2">
                    <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
                      {project.specKitHref && (
                        <Link
                          href={project.specKitHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          data-mixpanel-event="CTA Clicked"
                          data-mixpanel-properties={JSON.stringify({
                            cta_name: "Full Spec Kit",
                            cta_location: "Work Modal",
                            cta_intent: "case-study-spec-kit",
                            destination: project.specKitHref,
                            work_name: project.title,
                          })}
                          className="group inline-flex items-center justify-center gap-2 rounded-full border border-[#171716] px-6 py-3 text-sm font-medium text-[#171716] transition-all duration-300 ease-studio hover:bg-[#171716] hover:text-[#F2F0EA]"
                        >
                          View full spec kit
                          <ArrowUpRight
                            className="h-4 w-4 transition-transform duration-300 ease-studio group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                            aria-hidden="true"
                          />
                        </Link>
                      )}
                      <Link
                        href="/contact"
                        data-mixpanel-event="CTA Clicked"
                        data-mixpanel-properties={JSON.stringify({
                          cta_name: "Work Inquiry",
                          cta_location: "Work Modal",
                          cta_intent: "case-study-inquiry",
                          destination: "/contact",
                        })}
                        className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#171716] px-6 py-3 text-sm font-medium text-[#F2F0EA] transition-all duration-300 ease-studio hover:bg-[#3D3C38]"
                      >
                        Want something like this?
                        <ArrowUpRight
                          className="h-4 w-4 transition-transform duration-300 ease-studio group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                          aria-hidden="true"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
