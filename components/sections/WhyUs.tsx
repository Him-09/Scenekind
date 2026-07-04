import {
  Timer,
  MapPinOff,
  Clapperboard,
  Crosshair,
  Ratio,
  TrendingUp,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

const benefits = [
  {
    icon: Timer,
    title: "Faster than traditional production",
    body: "Production cycles measured in days, not months — without cutting the strategy or the craft.",
  },
  {
    icon: MapPinOff,
    title: "No sourcing, no logistics",
    body: "No creator outreach, casting calls, location scouts, or prop runs. The heaviest parts of production simply aren't on the schedule.",
  },
  {
    icon: Clapperboard,
    title: "Cinematic realism, commercial direction",
    body: "Every project is directed like a commercial — lighting, framing, pacing, and grade held to broadcast standards.",
  },
  {
    icon: Crosshair,
    title: "Hero and performance ready",
    body: "One pipeline covers both the brand film for your homepage and the ad set for your media buyer.",
  },
  {
    icon: Ratio,
    title: "Every format and ratio",
    body: "9:16, 1:1, 4:5, 16:9 — masters and cutdowns delivered for each channel, not adapted as an afterthought.",
  },
  {
    icon: TrendingUp,
    title: "Output that scales",
    body: "When testing demands ten more variations, the pipeline produces ten more — the timeline barely moves.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" aria-label="Why Scenekind" className="rule py-24 md:py-32">
      <div className="mx-auto max-w-wrap px-6 lg:px-10">
        <SectionHeading
          eyebrow="Why Scenekind"
          title="Built for brands that need quality and speed."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, i) => (
            <Reveal key={benefit.title} delay={(i % 3) * 0.08} className="h-full">
              <article className="group h-full rounded-tile border border-line bg-cream-card p-8 transition-all duration-500 ease-studio hover:-translate-y-1 hover:shadow-[0_16px_40px_-24px_rgba(23,23,22,0.25)]">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cream-sunken">
                  <benefit.icon
                    className="h-[18px] w-[18px] text-ink"
                    aria-hidden="true"
                  />
                </span>
                <h3 className="mt-5 font-display text-xl font-medium text-ink">
                  {benefit.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-mist">
                  {benefit.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
