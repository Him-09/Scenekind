"use client";

import { useCallback, useState } from "react";
import { Plus } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import VideoTile from "@/components/ui/VideoTile";
import WorkModal from "@/components/work/WorkModal";
import { projects, type Project } from "@/lib/projects";

export default function Work() {
  const [selected, setSelected] = useState<Project | null>(null);
  const closeModal = useCallback(() => setSelected(null), []);

  return (
    <section id="work" aria-label="Example work" className="rule py-24 md:py-32">
      <div className="mx-auto max-w-wrap px-6 lg:px-10">
        <SectionHeading
          eyebrow="Work"
          title="Example work across the formats we produce."
          intro="A sample of what we build for brands — hero films, product spotlights, demo ads, and creator-style video. Open any card for the full breakdown."
        />
        <div className="mt-14 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={(i % 3) * 0.08} className="h-full">
              <article className="group flex h-full flex-col">
                <button
                  type="button"
                  onClick={() => setSelected(project)}
                  aria-label={`View details: ${project.title}`}
                  className="relative block w-full text-left"
                >
                  <VideoTile
                    src={project.src}
                    label={project.title}
                    className="aspect-[9/16]"
                  />
                  {/* Hover affordance */}
                  <span
                    aria-hidden="true"
                    className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#F2F0EA]/90 text-[#171716] opacity-0 backdrop-blur-sm transition-all duration-300 ease-studio group-hover:opacity-100"
                  >
                    <Plus className="h-4 w-4" />
                  </span>
                </button>
                <div className="flex flex-1 flex-col pt-5">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-display text-xl font-medium text-ink">
                      <button
                        type="button"
                        onClick={() => setSelected(project)}
                        className="text-left transition-colors duration-300 hover:text-mist"
                      >
                        {project.title}
                      </button>
                    </h3>
                    <span className="shrink-0 rounded-full border border-[#DDD9CF] bg-[#FBFAF7] px-3 py-1 text-[11px] text-mist">
                      {project.type}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-mist">
                    {project.description}
                  </p>
                  <p className="mt-4 border-t border-[#DDD9CF] pt-3 text-xs text-mist/80">
                    {project.deliverables}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      <WorkModal project={selected} onClose={closeModal} />
    </section>
  );
}
