import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";

const packageOffers = [
  {
    name: "Starter Sprint",
    badge: "Start here",
    price: "$295",
    priceNote: "invoiced on delivery",
    tagline: "Three ads in five business days",
    bestFor: "Testing Scenekind on one product before you commit to a larger package.",
    credits: "Limited launch offer",
    delivery: "5 business days",
    terms: "Nothing upfront. Pay only on delivery, and only if you would run it.",
    deliverables: [
      "Three different hooks on one product, cut as three separate ads",
      "All four ratios: 9:16, 1:1, 4:5, 16:9",
      "One revision round",
      "Free Creative Teardown included ($150 value)",
      "One per brand, six sprint slots per month",
    ],
    cta: "Start the $295 Sprint",
    href: "/contact?intent=starter-sprint",
    featured: true,
  },
  {
    name: "Launch Pack",
    badge: "Fixed package",
    price: "$2,400",
    priceNote: "10 credits",
    tagline: "Launch one product",
    bestFor: "A focused launch that needs one hero piece and performance ads.",
    credits: "$240 per credit - 20% below a la carte",
    delivery: "10 business days",
    terms: "50% to start, 50% on delivery.",
    deliverables: [
      "1 x AI Commercial 15s",
      "3 x Product Ad 15s",
      "1 x Logo Animation",
      "All ratios included",
      "Two revision rounds",
    ],
    cta: "Start a Launch Pack",
    href: "/contact?intent=launch-pack",
    featured: false,
  },
  {
    name: "Campaign Build",
    badge: "Most requested",
    price: "$4,900",
    priceNote: "20.5 credits",
    tagline: "Hero film plus ad system",
    bestFor: "A full campaign that needs brand impact and paid-social volume together.",
    credits: "$240 per credit - 20% below a la carte",
    delivery: "15 business days",
    terms: "50% to start, 50% on delivery.",
    deliverables: [
      "1 x AI Commercial 30s",
      "6 x Product Ad 15s",
      "2 x Creator-Style 30s",
      "1 x Kinetic / Product Motion",
      "All ratios and two revision rounds",
    ],
    cta: "Scope Campaign Build",
    href: "/contact?intent=campaign-build",
    featured: false,
  },
  {
    name: "Flagship Film",
    badge: "Full brand piece",
    price: "$5,900",
    priceNote: "24.75 credits",
    tagline: "The largest fixed scope",
    bestFor: "A premium brand film with supporting product ads and motion design.",
    credits: "$240 per credit - 20% below a la carte",
    delivery: "20 business days",
    terms: "50% to start, 50% on delivery.",
    deliverables: [
      "1 x AI Commercial 60s",
      "1 x Motion Explainer",
      "4 x Product Ad 15s",
      "Sound design upgrade",
      "All ratios and two revision rounds",
    ],
    cta: "Plan Flagship Film",
    href: "/contact?intent=flagship-film",
    featured: false,
  },
];

const enginePlans = [
  {
    name: "Engine 10",
    price: "$2,250/mo",
    credits: "10 credits/mo",
    rate: "$225 per credit",
    discount: "25% off",
    included: "Priority queue + monthly hook and angle review",
  },
  {
    name: "Engine 20",
    price: "$4,200/mo",
    credits: "20 credits/mo",
    rate: "$210 per credit",
    discount: "30% off",
    included: "Dedicated Slack channel + quarterly strategy review",
  },
  {
    name: "Engine 40",
    price: "$7,200/mo",
    credits: "40 credits/mo",
    rate: "$180 per credit",
    discount: "40% off",
    included: "48-hour priority turnaround + named creative director",
  },
];

const pricingRules = [
  ["Credit rule", "1 credit = one 15-second product ad."],
  ["A la carte rate", "$300 per credit when you buy one item at a time."],
  ["Package rate", "$240 per credit on fixed packages."],
  ["Monthly rate", "$225, $210, or $180 per credit by plan size."],
];

const details = [
  "Every deliverable includes 9:16, 1:1, 4:5, and 16:9 masters.",
  "Packages include two asset revision rounds. Starter Sprint includes one.",
  "Extra revision rounds are $150 each.",
  "You own full commercial rights on final payment. No usage fees, expiry dates, or per-platform licensing.",
];

const aLaCarteExamples = [
  ["Product Ad 15s", "$300"],
  ["Product Ad 30s", "$450"],
  ["Creator-Style 30s", "$450"],
  ["AI Commercial 15s", "$1,500"],
  ["AI Commercial 30s", "$2,400"],
  ["AI Commercial 60s", "$3,900"],
  ["Creative Teardown", "$150"],
  ["Rush delivery", "+50%"],
];

export default function Packages() {
  return (
    <section
      id="engagements"
      aria-label="Transparent packages and pricing"
      className="rule py-24 md:py-32"
    >
      <div className="mx-auto max-w-wrap px-6 lg:px-10">
        <SectionHeading
          eyebrow="Transparent Pricing"
          title="Fixed packages, printed prices, no hidden fees."
          intro="Everything starts from one unit: 1 credit equals one 15-second product ad. Packages are discounted from the same a la carte rate, so the math stays visible."
        />

        <div className="mt-10 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {pricingRules.map(([label, value], i) => (
            <Reveal key={label} delay={i * 0.04}>
              <div className="h-full rounded-tile border border-line bg-cream-card p-5">
                <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-mist">
                  {label}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink/80">
                  {value}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
          {packageOffers.map((model, i) => (
            <Reveal key={model.name} delay={i * 0.08} className="h-full">
              <article
                className={`flex h-full flex-col rounded-tile border p-7 transition-all duration-500 ease-studio md:p-8 ${
                  model.featured
                    ? "border-[#171716] bg-[#171716] text-[#F2F0EA]"
                    : "border-line bg-cream-card hover:border-ink/30"
                }`}
              >
                <span
                  className={`mb-5 inline-flex w-fit rounded-full border px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] ${
                    model.featured
                      ? "border-[#F2F0EA]/25 text-[#F2F0EA]/80"
                      : "border-line text-mist"
                  }`}
                >
                  {model.badge}
                </span>
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
                <div
                  className={`mt-5 border-t pt-5 ${
                    model.featured ? "border-[#F2F0EA]/20" : "border-line"
                  }`}
                >
                  <p
                    className={`font-display text-5xl font-medium ${
                      model.featured ? "text-[#F2F0EA]" : "text-ink"
                    }`}
                  >
                    {model.price}
                  </p>
                  <p
                    className={`mt-1 text-xs uppercase tracking-[0.2em] ${
                      model.featured ? "text-[#F2F0EA]/50" : "text-mist"
                    }`}
                  >
                    {model.priceNote}
                  </p>
                </div>
                <dl
                  className={`mt-5 space-y-2 text-sm ${
                    model.featured ? "text-[#F2F0EA]/75" : "text-ink/75"
                  }`}
                >
                  <div>
                    <dt
                      className={`text-[10px] uppercase tracking-[0.18em] ${
                        model.featured ? "text-[#F2F0EA]/45" : "text-mist"
                      }`}
                    >
                      Best for
                    </dt>
                    <dd className="mt-1 leading-relaxed">{model.bestFor}</dd>
                  </div>
                  <div className="grid grid-cols-2 gap-4 pt-2">
                    <div>
                      <dt
                        className={`text-[10px] uppercase tracking-[0.18em] ${
                          model.featured ? "text-[#F2F0EA]/45" : "text-mist"
                        }`}
                      >
                        Delivery
                      </dt>
                      <dd className="mt-1">{model.delivery}</dd>
                    </div>
                    <div>
                      <dt
                        className={`text-[10px] uppercase tracking-[0.18em] ${
                          model.featured ? "text-[#F2F0EA]/45" : "text-mist"
                        }`}
                      >
                        Rate
                      </dt>
                      <dd className="mt-1">{model.credits}</dd>
                    </div>
                  </div>
                </dl>
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
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p
                  className={`mt-6 border-t pt-5 text-xs leading-relaxed ${
                    model.featured
                      ? "border-[#F2F0EA]/20 text-[#F2F0EA]/60"
                      : "border-line text-mist"
                  }`}
                >
                  {model.terms}
                </p>
                <div className="mt-7">
                  <Button
                    href={model.href}
                    variant={model.featured ? "inverse" : "outline"}
                    className="w-full"
                    ariaLabel={`Inquire about ${model.name}`}
                  >
                    {model.cta}
                  </Button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-mist">
                Monthly Creative Engine
              </p>
              <h3 className="mt-4 max-w-xl font-display text-4xl font-medium text-ink">
                Always-on testing with credit rates that get cheaper as output
                rises.
              </h3>
              <p className="mt-5 max-w-xl text-sm leading-relaxed text-mist md:text-base">
                Monthly plans are for brands running paid social every week.
                Credits can be spent on anything from the rate card, unused
                credits roll over one month, and plans are month-to-month with
                30 days notice.
              </p>
              <Button
                href="/contact?intent=creative-engine"
                variant="outline"
                size="lg"
                className="mt-8"
                withArrow
              >
                Plan Monthly Output
              </Button>
            </div>
          </Reveal>

          <div className="grid gap-4">
            {enginePlans.map((plan, i) => (
              <Reveal key={plan.name} delay={i * 0.06}>
                <article className="rounded-tile border border-line bg-cream-card p-6">
                  <div className="grid gap-4 md:grid-cols-[0.8fr_1fr] md:items-start">
                    <div>
                      <h4 className="font-display text-2xl font-medium text-ink">
                        {plan.name}
                      </h4>
                      <p className="mt-1 text-sm text-mist">{plan.included}</p>
                    </div>
                    <dl className="grid grid-cols-2 gap-4 text-sm md:grid-cols-4">
                      {[
                        ["Price", plan.price],
                        ["Credits", plan.credits],
                        ["Rate", plan.rate],
                        ["Discount", plan.discount],
                      ].map(([label, value]) => (
                        <div key={label}>
                          <dt className="text-[10px] uppercase tracking-[0.18em] text-mist">
                            {label}
                          </dt>
                          <dd className="mt-1 font-medium text-ink">{value}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-8 border-t border-line pt-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-mist">
                A la carte checks
              </p>
              <h3 className="mt-4 font-display text-3xl font-medium text-ink">
                Need one thing at a time? These are the base prices.
              </h3>
              <p className="mt-5 text-sm leading-relaxed text-mist">
                Single-project work is priced at $300 per credit. Packages and
                monthly plans are discounted against these exact prices.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="rounded-tile border border-line bg-cream-card p-6">
              <div className="grid gap-x-6 gap-y-3 sm:grid-cols-2">
                {aLaCarteExamples.map(([item, price]) => (
                  <div
                    key={item}
                    className="flex items-baseline justify-between gap-4 border-b border-line pb-3 text-sm last:border-b-0 sm:[&:nth-last-child(2)]:border-b-0"
                  >
                    <span className="text-ink/75">{item}</span>
                    <span className="font-medium text-ink">{price}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-3 md:grid-cols-2">
          {details.map((detail, i) => (
            <Reveal key={detail} delay={i * 0.04}>
              <p className="rounded-tile border border-line bg-cream-card p-5 text-sm leading-relaxed text-ink/75">
                {detail}
              </p>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-xs leading-relaxed text-mist">
          USD shown. EUR and GBP invoice figures are available on request. Rate
          card valid through 31 Oct 2026.
        </p>
      </div>
    </section>
  );
}
