"use client";
import { useState, useEffect, useRef } from "react";

function easeOutQuart(t: number): number {
  return 1 - Math.pow(1 - t, 4);
}

export function useCountUp(
  target: number,
  duration: number = 2000,
  startWhen: boolean = true
): { count: number; ref: React.RefObject<HTMLElement | null> } {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLElement>(null);
  const hasStarted = useRef(false);

  useEffect(() => {
    if (!startWhen) return;

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted.current) {
          hasStarted.current = true;
          observer.disconnect();

          const startTime = performance.now();

          const tick = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = easeOutQuart(progress);

            setCount(Math.round(eased * target));

            if (progress < 1) {
              requestAnimationFrame(tick);
            }
          };

          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [target, duration, startWhen]);

  return { count, ref };
}
