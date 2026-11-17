"use client";

import { useEffect, useRef, useState } from "react";

interface StatRowItem {
  startNum?: number;
  endNum: number;
  suffix?: string;
  label: string;
}

function RangeCounter({
  startNum,
  endNum,
  suffix = "",
  duration = 1500,
}: {
  startNum?: number;
  endNum: number;
  suffix?: string;
  duration?: number;
}) {
  const [startCount, setStartCount] = useState(0);
  const [endCount, setEndCount] = useState(0);
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
      if (startNum !== undefined) {
        setStartCount(Math.floor(progress * startNum));
      }
      setEndCount(Math.floor(progress * endNum));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [hasStarted, startNum, endNum, duration]);

  return (
    <span ref={elementRef}>
      {startNum !== undefined ? `${startCount}–${endCount}` : endCount}
      {suffix}
    </span>
  );
}

const statsData: StatRowItem[] = [
  { startNum: 300, endNum: 400, suffix: "", label: "Pre-Qualified C-Suite Leaders" },
  { endNum: 80, suffix: "%+", label: "Buy-Side Institutional Ratio" },
  { startNum: 30, endNum: 40, suffix: "", label: "Expert Faculty Speakers" },
  { endNum: 6, suffix: "", label: "Core Sector Content Pillars" },
  { endNum: 48, suffix: "", label: "Global Series Editions" },
];

export function AttendStatsV3() {
  return (
    <div className="grid grid-cols-5 gap-4 mt-9 max-[980px]:grid-cols-2 max-sm:grid-cols-1">
      {statsData.map((stat) => (
        <article
          className="min-h-[143px] p-6 text-center flex flex-col items-center justify-center border border-[#0069B8]/22 border-t-4 border-t-[#0069B8] rounded-[14px] bg-white shadow-[0_12px_32px_rgba(8,18,30,0.06)] group hover:border-t-[#F15928] hover:-translate-y-1 transition-all duration-300"
          key={stat.label}
        >
          <strong className="font-heading block text-[#009EAD] group-hover:text-[#F15928] transition-colors text-[32px] font-bold leading-none tabular-nums">
            <RangeCounter startNum={stat.startNum} endNum={stat.endNum} suffix={stat.suffix} />
          </strong>
          <span className="block mt-[18px] text-[#334155] text-[14.5px] font-medium leading-snug">
            {stat.label}
          </span>
        </article>
      ))}
    </div>
  );
}
