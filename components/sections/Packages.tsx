import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";

const models = [
  {
    name: "Starter Sprint",
    tagline: "A focused first project",
    bestFor: "Teams that want to see the quality before committing to more.",
    deliverables: [
      "One focused ad or a small creative batch",
      "Concept, script, and direction included",
      "Delivered in all key ratios",
      "One structured revision round",
    ],
    featured: false,
  },
  {
    name: "Campaign Build",
    tagline: "A full multi-platform launch",
    bestFor: "Launches and campaigns that need hero and performance assets together.",
    deliverables: [
      "Hero spot + platform cutdowns",
      "Paid-social variation set",
      "Motion design package",
      "Full format & ratio delivery",
    ],
    featured: true,
  },
  {
    name: "Creative Engine",
    tagline: "Ongoing monthly production",
    bestFor: "Brands running always-on paid social and continuous testing.",
    deliverables: [
      "Monthly production allocation",
      "Continuous hook & angle testing",
      "Priority turnaround",
      "Quarterly creative strategy review",
    ],
    featured: false,
  },
];

export default function Packages() {
  return (
    <section
      id="engagements"
      aria-label="Engagement models"
      className="rule py-24 md:py-32"
    >
      <div className="mx-auto max-w-wrap px-6 lg:px-10">
        <SectionHeading
          eyebrow="Engagement Models"
          title="Three ways to work with us."
          intro="Scoped to your campaign, not a rate card. Tell us what you're building and we'll shape the engagement around it."
        />
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {models.map((model, i) => (
            <Reveal key={model.name} delay={i * 0.1} className="h-full">
              <article
                className={`flex h-full flex-col rounded-tile border p-8 transition-all duration-500 ease-studio md:p-10 ${
                  model.featured
                    ? "border-[#171716] bg-[#171716] text-[#F2F0EA]"
                    : "border-line bg-cream-card hover:border-ink/30"
                }`}
              >
                {model.featured && (
                  <span className="mb-5 inline-flex w-fit rounded-full border border-[#F2F0EA]/25 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-[#F2F0EA]/80">
                    Most requested
                  </span>
                )}
                <h3
                  className={`font-display text-3xl font-medium ${
                    model.featured ? "text-[#F2F0EA]" : "text-ink"
                  }`}
                >
                  {model.name}
                </h3>
                <p
                  className={`mt-1 text-xs font-medium uppercase tracking-[0.2em] ${
                    model.featured ? "text-[#F2F0EA]/50" : "text-mist"
                  }`}
                >
                  {model.tagline}
                </p>
                <p
                  className={`mt-5 text-sm leading-relaxed ${
                    model.featured ? "text-[#F2F0EA]/75" : "text-mist"
                  }`}
                >
                  {model.bestFor}
                </p>
                <ul
                  className={`mt-6 flex-1 space-y-3 border-t pt-6 ${
                    model.featured ? "border-[#F2F0EA]/20" : "border-line"
                  }`}
                >
                  {model.deliverables.map((item) => (
                    <li
                      key={item}
                      className={`flex items-start gap-3 text-sm ${
                        model.featured ? "text-[#F2F0EA]/85" : "text-ink/80"
                      }`}
                    >
                      <span
                        aria-hidden="true"
                        className={`mt-[7px] h-1 w-1 shrink-0 rounded-full ${
                          model.featured ? "bg-[#F2F0EA]" : "bg-ink"
                        }`}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button
                    href="#contact"
                    variant={model.featured ? "inverse" : "outline"}
                    className="w-full"
                    ariaLabel={`Inquire about ${model.name}`}
                  >
                    Inquire
                  </Button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
