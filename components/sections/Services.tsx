import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";

const services = [
  {
    number: "01",
    flagship: true,
    title: "AI Commercials",
    subtitle: "The flagship",
    description:
      "Fully-directed cinematic brand films and hero spots — the kind that make people ask how you shot it without a crew.",
    bestFor: "Brand launches, hero campaigns, seasonal moments",
    output: "15–60s hero film + platform cutdowns",
    includes: [
      "Creative direction & scripting",
      "Cinematic AI production",
      "Sound design & color grade",
      "Cutdowns in every ratio",
    ],
  },
  {
    number: "02",
    title: "Product Ads",
    subtitle: "The performance workhorse",
    description:
      "Conversion creative built for paid social — batches of hooks and angles for DTC and SaaS across Meta, TikTok, and YouTube.",
    bestFor: "Paid social teams that live on iteration",
    output: "Hook + angle batches, refreshed on cycle",
    includes: [
      "Hook & angle strategy",
      "Batch production",
      "Platform-native formats",
      "Fast variation rounds",
    ],
  },
  {
    number: "03",
    title: "Motion Design",
    subtitle: "The polish layer",
    description:
      "Logo animation, kinetic type, explainers, UI and product motion, launch teasers — the finish that makes a brand feel considered.",
    bestFor: "Launches, product releases, brand refreshes",
    output: "5–60s motion pieces",
    includes: [
      "Logo & identity animation",
      "Kinetic typography",
      "Product / UI motion",
      "Launch teasers",
    ],
  },
  {
    number: "04",
    title: "Creator-Style Video",
    subtitle: "Native feed format",
    description:
      "AI creator and avatar-led testimonials, demos, and lifestyle spots — high-volume testing without creator sourcing or logistics.",
    bestFor: "High-velocity creative testing",
    output: "15–45s, multiple creators & angles",
    includes: [
      "Multiple creator personas",
      "Testimonial & demo formats",
      "Lifestyle scenarios",
      "Volume batches for testing",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" aria-label="Services" className="rule py-24 md:py-32">
      <div className="mx-auto max-w-wrap px-6 lg:px-10">
        <SectionHeading
          eyebrow="Services"
          title="Four ways we produce for you."
          intro="Every engagement is directed like a commercial project — strategy first, then craft. The pipeline is AI-first; the standards aren't any different."
        />
        <div className="mt-14 space-y-5">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.06}>
              <article
                className={`group relative grid gap-8 rounded-tile border p-8 transition-all duration-500 ease-studio md:grid-cols-[80px_1.1fr_1fr] md:p-12 ${
                  service.flagship
                    ? "border-[#171716] bg-[#171716] text-[#F2F0EA]"
                    : "border-line bg-cream-card hover:border-ink/30"
                }`}
              >
                <span
                  className={`font-display text-sm font-medium tracking-widest ${
                    service.flagship ? "text-[#F2F0EA]/50" : "text-mist"
                  }`}
                >
                  {service.number}
                </span>

                <div>
                  {service.flagship && (
                    <span className="mb-4 inline-flex rounded-full border border-[#F2F0EA]/25 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-[#F2F0EA]/80">
                      Flagship
                    </span>
                  )}
                  <h3
                    className={`font-display text-3xl font-medium md:text-4xl ${
                      service.flagship ? "text-[#F2F0EA]" : "text-ink"
                    }`}
                  >
                    {service.title}
                  </h3>
                  <p
                    className={`mt-1 text-xs font-medium uppercase tracking-[0.2em] ${
                      service.flagship ? "text-[#F2F0EA]/50" : "text-mist"
                    }`}
                  >
                    {service.subtitle}
                  </p>
                  <p
                    className={`mt-5 max-w-md text-sm leading-relaxed md:text-base ${
                      service.flagship ? "text-[#F2F0EA]/75" : "text-mist"
                    }`}
                  >
                    {service.description}
                  </p>
                </div>

                <div className="flex flex-col justify-between gap-6">
                  <dl
                    className={`space-y-3 text-sm ${
                      service.flagship ? "text-[#F2F0EA]/80" : "text-ink/80"
                    }`}
                  >
                    <div className="flex gap-3">
                      <dt
                        className={`w-20 shrink-0 ${
                          service.flagship ? "text-[#F2F0EA]/45" : "text-mist"
                        }`}
                      >
                        Best for
                      </dt>
                      <dd>{service.bestFor}</dd>
                    </div>
                    <div className="flex gap-3">
                      <dt
                        className={`w-20 shrink-0 ${
                          service.flagship ? "text-[#F2F0EA]/45" : "text-mist"
                        }`}
                      >
                        Output
                      </dt>
                      <dd>{service.output}</dd>
                    </div>
                  </dl>
                  <ul className="flex flex-wrap gap-2">
                    {service.includes.map((item) => (
                      <li
                        key={item}
                        className={`rounded-full border px-3 py-1.5 text-xs ${
                          service.flagship
                            ? "border-[#F2F0EA]/25 text-[#F2F0EA]/75"
                            : "border-line bg-cream text-mist"
                        }`}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2} className="mt-12 text-center">
          <Button href="#contact" variant="outline" size="lg" withArrow>
            Request a Quote
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
