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
          className="fixed inset-0 z-[80] flex items-center justify-center p-4 md:p-8"
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
            className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-[28px] bg-[#FBFAF7] shadow-[0_40px_120px_-24px_rgba(0,0,0,0.45)]"
          >
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-[#DDD9CF] bg-[#FBFAF7] text-[#171716] transition-all duration-300 ease-studio hover:border-[#171716] hover:bg-[#171716] hover:text-[#F2F0EA]"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>

            <div className="grid gap-8 p-6 md:grid-cols-[minmax(0,320px)_1fr] md:gap-12 md:p-10 lg:p-12">
              {/* Video — 9:16 */}
              <div className="mx-auto w-full max-w-[320px] md:mx-0">
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
                  className="mt-4 font-display text-3xl font-medium text-ink md:text-4xl"
                >
                  {project.title}
                </h3>
                <p
                  id="work-modal-description"
                  className="mt-4 text-sm leading-relaxed text-mist md:text-base"
                >
                  {project.details.overview}
                </p>

                <div className="mt-8 space-y-8">
                  <div>
                    <h4 className="text-xs font-medium uppercase tracking-[0.2em] text-mist">
                      Approach
                    </h4>
                    <ul className="mt-3 space-y-2.5">
                      {project.details.approach.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-sm text-ink/85"
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
                    <h4 className="text-xs font-medium uppercase tracking-[0.2em] text-mist">
                      Deliverables
                    </h4>
                    <ul className="mt-3 space-y-2.5">
                      {project.details.deliverables.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-sm text-ink/85"
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
                    <h4 className="text-xs font-medium uppercase tracking-[0.2em] text-mist">
                      Formats
                    </h4>
                    <div className="mt-3 flex flex-wrap gap-2">
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
                </div>

                <div className="mt-10 border-t border-[#DDD9CF] pt-6">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-2 rounded-full bg-[#171716] px-6 py-3 text-sm font-medium text-[#F2F0EA] transition-all duration-300 ease-studio hover:bg-[#3D3C38]"
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
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
