"use client";

import { useAnimatedCounter } from "@/hooks/useAnimatedCounter";

interface AnimatedCounterProps {
  end: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
}

export default function AnimatedCounter({
  end,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration = 1500,
  className = "",
}: AnimatedCounterProps) {
  const { ref, displayValue } = useAnimatedCounter({
    end,
    prefix,
    suffix,
    decimals,
    duration,
  });

  return (
    <span ref={ref} className={className}>
      {displayValue}
    </span>
  );
}
