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
              Free Creative Teardown
            </p>
            <h2 className="mx-auto max-w-3xl font-display text-display-lg font-medium">
              See what your next ad should test before you buy anything.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[#F2F0EA]/65 md:text-lg">
              Send your best current ad, product page, or launch context. We
              send back a written Creative Teardown with three untested angles.
            </p>
            <div className="mt-10 flex justify-center">
              <Button
                href="/contact?intent=teardown"
                size="lg"
                variant="inverse"
                withArrow
              >
                Get a Free Teardown
              </Button>
            </div>
            <p className="mt-10 text-xs uppercase tracking-[0.22em] text-[#F2F0EA]/40">
              Product Ads | Creator-Style Video | Launch Spots
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
