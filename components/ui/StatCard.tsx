"use client";

import { motion } from "framer-motion";
import { fadeUpVariants } from "@/lib/animations";
import AnimatedCounter from "./AnimatedCounter";

interface StatCardProps {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  decimals?: number;
  dark?: boolean;
  displayValue?: string;
}

export default function StatCard({
  value,
  prefix = "",
  suffix = "",
  label,
  decimals = 0,
  dark = false,
  displayValue,
}: StatCardProps) {
  return (
    <motion.div variants={fadeUpVariants} className="text-center">
      <div
        className={`font-display text-3xl md:text-4xl lg:text-5xl font-bold ${
          dark ? "text-cream" : "text-charcoal"
        }`}
      >
        {displayValue ? (
          <span>{displayValue}</span>
        ) : (
          <AnimatedCounter
            end={value}
            prefix={prefix}
            suffix={suffix}
            decimals={decimals}
          />
        )}
      </div>
      <p
        className={`mt-2 text-sm md:text-base tracking-wide ${
          dark ? "text-cream/60" : "text-charcoal/50"
        }`}
      >
        {label}
      </p>
    </motion.div>
  );
}
