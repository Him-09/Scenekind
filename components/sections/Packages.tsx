import RateCardForm from "@/components/pricing/RateCardForm";
import Reveal from "@/components/ui/Reveal";
import HighlightText from "@/components/ui/HighlightText";

export default function Packages() {
  return (
    <section
      id="engagements"
      aria-label="Packages and pricing"
      className="rule bg-[#171716] py-20 text-[#F2F0EA] md:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-wrap px-6 lg:px-10">
        <Reveal>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#F2F0EA]/15 px-3.5 py-1.5 text-xs font-medium text-[#F2F0EA]/65">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-[#F2F0EA]"
            />
            Packages
          </p>
          <h2 className="max-w-3xl font-display text-[2.1rem] font-semibold leading-[1.06] tracking-normal sm:text-[2.65rem] lg:text-[3.6rem] xl:text-[4rem]">
            The sprint is the audition{" "}
            <HighlightText inverse>after the free teardown.</HighlightText>
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#F2F0EA]/60 md:text-lg">
            The teardown is the opener. If the angle is worth making, the
            Starter Sprint turns it into three ready-to-run ads.
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <article className="mt-12 rounded-tile border border-[#F2F0EA]/18 bg-[#262623] p-5 sm:p-6 md:p-8">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-start">
              <div>
                <span className="inline-flex rounded-full bg-[#F2F0EA]/10 px-3 py-1 text-xs font-medium text-[#F2F0EA]/75">
                  Six slots a month - one per brand
                </span>
                <h3 className="mt-4 font-display text-2xl font-medium">
                  Starter Sprint
                </h3>
                <p className="mt-2 text-sm font-medium text-[#F2F0EA]/70 md:text-base">
                  Three hooks on one product, five business days.
                </p>
                <p className="mt-3 text-sm font-semibold leading-relaxed md:text-base">
                  Nothing upfront. You pay on delivery - and only if you&apos;d
                  actually run it.
                </p>
              </div>

              <div className="lg:text-right">
                <p className="font-display text-4xl font-medium tracking-normal sm:text-5xl">$295</p>
                <p className="mt-1 text-sm text-[#F2F0EA]/45">
                  invoiced on delivery
                </p>
              </div>
            </div>

            <p className="mt-6 max-w-3xl border-t border-[#F2F0EA]/12 pt-5 text-sm leading-relaxed text-[#F2F0EA]/62 md:text-base">
              We launched Scenekind this year. We would rather have ten brands
              holding finished work — and a case study each — than a price list
              nobody has tested.
            </p>
          </article>
        </Reveal>

        <Reveal delay={0.16}>
          <RateCardForm />
        </Reveal>
      </div>
    </section>
  );
}
