import { CalendarClock, Receipt, RefreshCcw, Layers } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

const pains = [
  {
    icon: CalendarClock,
    title: "Weeks lost before frame one",
    body: "Sourcing creators, crews, locations, and props eats the calendar before a single shot exists.",
  },
  {
    icon: Receipt,
    title: "Logistics costs stack up early",
    body: "Travel, gear, permits, and day rates burn budget long before the first edit lands in review.",
  },
  {
    icon: RefreshCcw,
    title: "Iteration is too slow for paid social",
    body: "Testing new hooks and angles means re-shooting. By the time v2 arrives, the learning window has closed.",
  },
  {
    icon: Layers,
    title: "Demand outpaces supply",
    body: "Modern channels need more formats, more variations, and more refreshes than traditional production can deliver.",
  },
];

export default function Problem() {
  return (
    <section id="problem" aria-label="The problem" className="rule py-24 md:py-32">
      <div className="mx-auto max-w-wrap px-6 lg:px-10">
        <SectionHeading
          eyebrow="The Problem"
          title="Traditional production wasn't built for the speed brands need now."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pains.map((pain, i) => (
            <Reveal key={pain.title} delay={i * 0.08} className="h-full">
              <article className="flex h-full flex-col gap-4 rounded-tile border border-line bg-cream-card p-8 transition-all duration-500 ease-studio hover:-translate-y-1 hover:shadow-[0_16px_40px_-24px_rgba(23,23,22,0.25)]">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cream-sunken">
                  <pain.icon className="h-[18px] w-[18px] text-ink" aria-hidden="true" />
                </span>
                <h3 className="font-display text-xl font-medium text-ink">
                  {pain.title}
                </h3>
                <p className="text-sm leading-relaxed text-mist">{pain.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
