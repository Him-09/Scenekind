"use client";

import { useCallback, useState } from "react";
import { Plus } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import VideoTile from "@/components/ui/VideoTile";
import WorkModal from "@/components/work/WorkModal";
import { trackEvent } from "@/lib/analytics";
import { projects, type Project } from "@/lib/projects";

const mosaicColumns = [
  [0, 1],
  [2],
  [3, 4],
  [5],
];

const mosaicColumnOffsets = [
  "min-[1280px]:pt-16",
  "min-[1280px]:pt-28",
  "min-[1280px]:pt-0",
  "min-[1280px]:pt-20",
];

const mosaicRatios = [
  "min-[1280px]:aspect-[4/5]",
  "min-[1280px]:aspect-[3/4]",
  "min-[1280px]:aspect-[2/3]",
  "min-[1280px]:aspect-[4/5]",
  "min-[1280px]:aspect-[3/4]",
  "min-[1280px]:aspect-[2/3]",
  "min-[1280px]:aspect-[4/5]",
];

export default function Work() {
  const [selected, setSelected] = useState<Project | null>(null);
  const closeModal = useCallback(() => setSelected(null), []);
  const openProject = useCallback((project: Project) => {
    trackEvent("Work Opened", {
      work_name: project.title,
      work_category: project.type,
    });
    setSelected(project);
  }, []);

  return (
    <section id="work" aria-label="Selected work" className="rule py-20 md:py-24 lg:py-32">
      <div className="mx-auto max-w-wrap px-6 lg:px-10">
        <SectionHeading
          eyebrow="Work"
          title="Selected work across the formats we produce."
          accent="the formats we produce."
          intro="Hero films, product spotlights, demo ads, and creator-style video built to show the range of campaigns we can ship. Open any card for the full breakdown."
        />
        <div className="work-grid mt-12 grid items-start gap-x-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 min-[1280px]:mx-auto min-[1280px]:max-w-[60rem] min-[1280px]:grid-cols-4">
          {mosaicColumns.map((column, columnIndex) => (
            <div
              key={column.join("-")}
              className={`contents min-[1280px]:flex min-[1280px]:flex-col min-[1280px]:gap-8 ${mosaicColumnOffsets[columnIndex]}`}
            >
              {column.map((projectIndex) => {
                const project = projects[projectIndex];

                return (
                  <Reveal
                    key={project.title}
                    delay={(projectIndex % projects.length) * 0.06}
                  >
                    <article className="group">
                      <div className="relative w-full">
                        <VideoTile
                          src={project.src}
                          label={project.title}
                          className={`work-preview aspect-[2/3] ${mosaicRatios[projectIndex % mosaicRatios.length]}`}
                        />
                        <button
                          type="button"
                          onClick={() => openProject(project)}
                          aria-label={`View details: ${project.title}`}
                          className="absolute inset-0 z-10 rounded-tile focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
                        />
                        <span
                          aria-hidden="true"
                          className="pointer-events-none absolute bottom-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[#F2F0EA]/90 text-[#171716] opacity-0 backdrop-blur-sm transition-all duration-300 ease-studio group-hover:opacity-100"
                        >
                          <Plus className="h-4 w-4" />
                        </span>
                      </div>
                      <div className="pt-4">
                        <div className="flex flex-col items-start gap-2">
                          <h3 className="font-display text-base font-semibold leading-snug text-ink 2xl:text-lg">
                            <button
                              type="button"
                              onClick={() => openProject(project)}
                              className="text-left transition-colors duration-300 hover:text-mist"
                            >
                              {project.title}
                            </button>
                          </h3>
                          <span className="shrink-0 rounded-full border border-[#DDD9CF] bg-[#FBFAF7] px-3 py-1 text-[11px] text-mist">
                            {project.type}
                          </span>
                        </div>
                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      <WorkModal project={selected} onClose={closeModal} />
    </section>
  );
}
