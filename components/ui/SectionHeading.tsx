"use client";

import { motion } from "framer-motion";
import { fadeUpVariants } from "@/lib/animations";

interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  description?: string;
  dark?: boolean;
  centered?: boolean;
}

export default function SectionHeading({
  subtitle,
  title,
  description,
  dark = false,
  centered = true,
}: SectionHeadingProps) {
  return (
    <motion.div
      variants={fadeUpVariants}
      className={`mb-16 ${centered ? "text-center" : ""}`}
    >
      {subtitle && (
        <p
          className={`text-sm font-medium tracking-[0.2em] uppercase mb-4 ${
            dark ? "text-cream" : "text-forest"
          }`}
        >
          {subtitle}
        </p>
      )}
      <h2
        className={`font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight ${
          dark ? "text-cream" : "text-charcoal"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-6 text-lg md:text-xl max-w-3xl leading-relaxed ${
            centered ? "mx-auto" : ""
          } ${dark ? "text-cream/70" : "text-charcoal/60"}`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
