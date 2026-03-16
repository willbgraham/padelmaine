"use client";

import { useEffect, useRef, useState } from "react";

interface UseAnimatedCounterOptions {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}

export function useAnimatedCounter({
  end,
  duration = 1500,
  prefix = "",
  suffix = "",
  decimals = 0,
}: UseAnimatedCounterOptions) {
  const [displayValue, setDisplayValue] = useState(`${prefix}0${suffix}`);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            animate();
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(element);

    function animate() {
      const startTime = performance.now();

      function step(currentTime: number) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Ease out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = eased * end;

        const formatted = decimals > 0 ? current.toFixed(decimals) : Math.round(current).toString();
        setDisplayValue(`${prefix}${formatted}${suffix}`);

        if (progress < 1) {
          requestAnimationFrame(step);
        }
      }

      requestAnimationFrame(step);
    }

    return () => observer.disconnect();
  }, [end, duration, prefix, suffix, decimals]);

  return { ref, displayValue };
}
