import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost" | "inverse";
  size?: "md" | "lg";
  withArrow?: boolean;
  className?: string;
  ariaLabel?: string;
};

/**
 * Colors are hardcoded (not theme tokens) on purpose: buttons sit on both
 * light and dark surfaces and must never lose contrast.
 */
export default function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  withArrow = false,
  className,
  ariaLabel,
}: ButtonProps) {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-all duration-300 ease-studio",
        size === "md" && "px-6 py-3 text-sm",
        size === "lg" && "px-8 py-4 text-base",
        variant === "primary" &&
          "bg-[#171716] text-[#F2F0EA] hover:bg-[#3D3C38]",
        variant === "outline" &&
          "border border-[#171716]/20 text-[#171716] hover:border-[#171716] hover:bg-[#171716] hover:text-[#F2F0EA]",
        variant === "ghost" && "text-[#171716]/70 hover:text-[#171716]",
        variant === "inverse" &&
          "bg-[#F2F0EA] text-[#171716] hover:bg-[#E8E5DD]",
        className
      )}
    >
      {children}
      {withArrow && (
        <ArrowUpRight
          className="h-4 w-4 transition-transform duration-300 ease-studio group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      )}
    </Link>
  );
}
