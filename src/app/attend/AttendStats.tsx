"use client";

import { useEffect, useRef, useState } from "react";

function Counter({ end, prefix = "", suffix = "", duration = 1500 }: { end: number; prefix?: string; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [hasStarted, end, duration]);

  return (
    <span ref={elementRef}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

const statsData = [
  { number: 300, prefix: "", suffix: "+", label: "Pre-Qualified C-Suite Leaders" },
  { number: 80, prefix: "", suffix: "%+", label: "Buy-Side Enterprise Ratio" },
  { number: 40, prefix: "", suffix: "+", label: "Expert Faculty Speakers" },
  { number: 4, prefix: "", suffix: "", label: "Core Sector Content Pillars" },
  { number: 48, prefix: "", suffix: "", label: "Global Series Editions" },
];

export function AttendStats() {
  return (
    <div className="grid grid-cols-5 gap-4 mt-9 max-[980px]:grid-cols-2 max-sm:grid-cols-1">
      {statsData.map((stat) => (
        <article
          className="min-h-[143px] p-6 text-center flex flex-col items-center justify-center border border-[#0069B8]/22 border-t-4 border-t-[#0069B8] rounded-[14px] bg-white shadow-[0_12px_32px_rgba(8,18,30,0.06)] group hover:border-t-[#F15928] hover:-translate-y-1 transition-all duration-300"
          key={stat.label}
        >
          <strong className="font-heading block text-[#0069B8] group-hover:text-[#F15928] transition-colors text-[34px] font-bold leading-none">
            <Counter end={stat.number} prefix={stat.prefix} suffix={stat.suffix} />
          </strong>
          <span className="block mt-[18px] text-[#334155] text-[14.5px] font-medium leading-snug">{stat.label}</span>
        </article>
      ))}
    </div>
  );
}
