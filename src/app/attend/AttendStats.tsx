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
  { number: 70, prefix: "", suffix: "%+", label: "Buy-Side Enterprise Ratio" },
  { number: 45, prefix: "35–", suffix: "", label: "Expert Faculty Speakers" },
  { number: 4, prefix: "", suffix: "", label: "Core Sector Content Pillars" },
  { number: 48, prefix: "", suffix: "", label: "Global Series Editions" },
];

export function AttendStats() {
  return (
    <div className="grid grid-cols-5 gap-4 mt-9 max-[980px]:grid-cols-2 max-sm:grid-cols-1">
      {statsData.map((stat) => (
        <article
          className="min-h-[143px] p-6 text-center flex flex-col items-center justify-center border border-[#77d1ff]/16 rounded-[14px] bg-[#040c1c]/72 shadow-[inset_0_0_28px_rgba(65,220,255,0.06),0_20px_60px_rgba(0,0,0,0.22)] group hover:-translate-y-1 transition-all duration-300"
          key={stat.label}
        >
          <strong className="block bg-gradient-to-r from-[#18d4ff] to-[#b9f82d] bg-clip-text text-transparent text-[34px] font-[850] leading-none">
            <Counter end={stat.number} prefix={stat.prefix} suffix={stat.suffix} />
          </strong>
          <span className="block mt-[18px] text-white/68 text-[15px] leading-snug">{stat.label}</span>
        </article>
      ))}
    </div>
  );
}
