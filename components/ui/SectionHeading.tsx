import { cn } from "@/lib/cn";
import Reveal from "@/components/ui/Reveal";
import HighlightText from "@/components/ui/HighlightText";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  accent?: string;
  intro?: string;
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  accent,
  intro,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <p
        className={cn(
          "section-heading-kicker mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-cream-card px-3.5 py-1.5 text-xs font-medium text-mist",
          align === "center" && "mx-auto"
        )}
      >
        <span
          aria-hidden="true"
          className="h-1.5 w-1.5 rounded-full bg-ink"
        />
        {eyebrow}
      </p>
      <h2 className="section-heading-title font-display text-[2.1rem] font-semibold leading-[1.06] tracking-normal text-ink sm:text-[2.65rem] lg:text-[3.6rem] xl:text-[4rem]">
        {accent && title.endsWith(accent) ? (
          <>
            {title.slice(0, -accent.length).trimEnd()}{" "}
            <HighlightText>{accent}</HighlightText>
          </>
        ) : (
          title
        )}
      </h2>
      {intro && (
        <p className="section-heading-intro mt-5 text-base leading-relaxed text-mist md:text-lg">
          {intro}
        </p>
      )}
    </Reveal>
  );
}
