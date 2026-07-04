import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

const steps = [
  {
    step: "01",
    title: "Campaign Strategy",
    body: "We align on the objective, audience, and message before anything gets made.",
  },
  {
    step: "02",
    title: "Concept + Script",
    body: "Hooks, narratives, and scripts built for the platform they'll live on.",
  },
  {
    step: "03",
    title: "Art Direction",
    body: "Look, tone, casting, and framing — locked down like any commercial shoot.",
  },
  {
    step: "04",
    title: "AI Production",
    body: "Scenes, talent, and environments produced through our AI-first pipeline.",
  },
  {
    step: "05",
    title: "Edit + Motion",
    body: "Professional edit, sound, motion design, and grade for a finished commercial feel.",
  },
  {
    step: "06",
    title: "Delivery + Variations",
    body: "Final masters plus cutdowns, ratios, and variations, ready for every channel.",
  },
];

export default function Solution() {
  return (
    <section
      id="solution"
      aria-label="Our approach"
      className="rule py-24 md:py-32"
    >
      <div className="mx-auto max-w-wrap px-6 lg:px-10">
        <SectionHeading
          eyebrow="The Approach"
          title="We compress the path from idea to finished asset."
          intro="Scenekind replaces the heaviest parts of production — sourcing, shooting, logistics — with an AI-first pipeline, while keeping the parts that make work great: strategy, direction, and craft. The result is commercial-grade creative on a timeline built for modern campaigns."
        />
        <ol className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((item, i) => (
            <Reveal key={item.step} delay={i * 0.07}>
              <li className="group border-t border-line pt-6 transition-colors duration-500 hover:border-ink/40">
                <span className="font-display text-sm font-medium tracking-widest text-mist">
                  {item.step}
                </span>
                <h3 className="mt-3 font-display text-2xl font-medium text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-mist">
                  {item.body}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
