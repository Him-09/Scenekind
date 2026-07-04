import { cn } from "@/lib/cn";
import Reveal from "@/components/ui/Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
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
          "mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-cream-card px-3.5 py-1.5 text-xs font-medium text-mist",
          align === "center" && "mx-auto"
        )}
      >
        <span
          aria-hidden="true"
          className="h-1.5 w-1.5 rounded-full bg-ink"
        />
        {eyebrow}
      </p>
      <h2 className="font-display text-display-lg font-medium text-ink">
        {title}
      </h2>
      {intro && (
        <p className="mt-5 text-base leading-relaxed text-mist md:text-lg">
          {intro}
        </p>
      )}
    </Reveal>
  );
}
