import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

const useCases = [
  {
    client: "DTC Brands",
    line: "Product ads, creator-style testimonials, and paid-social batches that keep your testing calendar full.",
  },
  {
    client: "SaaS",
    line: "Feature explainers, product motion, launch films, and performance creative that makes software feel tangible.",
  },
  {
    client: "Agencies",
    line: "White-label production capacity — cinematic spots and ad variations delivered under your banner, on your deadlines.",
  },
  {
    client: "Brand Teams",
    line: "Hero films, campaign refreshes, and motion systems that keep every channel on-brand between big productions.",
  },
];

export default function UseCases() {
  return (
    <section id="use-cases" aria-label="Who we work with" className="rule py-24 md:py-32">
      <div className="mx-auto max-w-wrap px-6 lg:px-10">
        <SectionHeading
          eyebrow="Who It's For"
          title="Production that fits how your team ships."
        />
        <ul className="mt-14 divide-y divide-line border-y border-line">
          {useCases.map((useCase, i) => (
            <Reveal key={useCase.client} delay={i * 0.06}>
              <li className="group grid gap-2 py-8 md:grid-cols-[220px_1fr] md:gap-10">
                <h3 className="font-display text-2xl font-medium text-ink transition-transform duration-300 ease-studio group-hover:translate-x-1">
                  {useCase.client}
                </h3>
                <p className="text-base leading-relaxed text-mist">
                  {useCase.line}
                </p>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
