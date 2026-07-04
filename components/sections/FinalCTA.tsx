import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";

export default function FinalCTA() {
  return (
    <section
      id="contact"
      aria-label="Get in touch"
      className="rule py-16 md:py-24"
    >
      <div className="mx-auto max-w-wrap px-6 lg:px-10">
        <Reveal>
          <div className="rounded-tile bg-[#171716] px-8 py-20 text-center text-[#F2F0EA] md:px-16 md:py-28">
            <p className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-[#F2F0EA]/20 px-3.5 py-1.5 text-xs font-medium text-[#F2F0EA]/70">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-[#F2F0EA]"
              />
              Free 20-min creative call
            </p>
            <h2 className="mx-auto max-w-3xl font-display text-display-lg font-medium">
              Ready to build your next campaign without the production
              bottleneck?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[#F2F0EA]/65 md:text-lg">
              Tell us what you&apos;re launching, selling, or testing. We&apos;ll come
              back with a concept direction, a scope, and a timeline — usually
              within two business days.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/contact" size="lg" variant="inverse" withArrow>
                Book a Creative Call
              </Button>
              <Button
                href="/contact"
                size="lg"
                className="border border-[#F2F0EA]/30 bg-transparent text-[#F2F0EA] hover:border-[#F2F0EA] hover:bg-[#F2F0EA] hover:text-[#171716]"
              >
                Request a Quote
              </Button>
            </div>
            <p className="mt-10 text-xs uppercase tracking-[0.22em] text-[#F2F0EA]/40">
              Commercials · Product Ads · Motion Design · Creator-Style Video
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
