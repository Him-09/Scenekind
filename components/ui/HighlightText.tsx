"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";

type HighlightTextProps = {
  children: React.ReactNode;
  inverse?: boolean;
  className?: string;
};

const highlightEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function HighlightText({
  children,
  inverse = false,
  className,
}: HighlightTextProps) {
  const reduced = useReducedMotion();

  return (
    <motion.span
      className={cn(
        "heading-highlight",
        inverse && "heading-highlight-inverse",
        className
      )}
      initial={{ backgroundSize: reduced ? "100% 100%" : "0% 100%" }}
      whileInView={{ backgroundSize: "100% 100%" }}
      viewport={{ once: true, amount: 0.65 }}
      transition={{
        duration: reduced ? 0 : 0.9,
        delay: reduced ? 0 : 0.12,
        ease: highlightEase,
      }}
    >
      {children}
    </motion.span>
  );
}
