"use client";

import { ReactNode, useEffect, useState, useRef } from "react";

interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

export function Counter({ end, suffix = "", duration = 1500 }: CounterProps) {
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
      {count}
      {suffix}
    </span>
  );
}

export function GradientText({
  children,
  tone = "blue",
}: {
  children: ReactNode;
  tone?: "blue" | "teal" | "white-orange";
}) {
  const toneClass =
    tone === "teal"
      ? "text-[#009EAD]"
      : tone === "white-orange"
      ? "text-white underline decoration-[#F15928] decoration-[3px] underline-offset-[6px]"
      : "text-[#0069B8]";
  return <span className={toneClass}>{children}</span>;
}

export function Logo({
  variant = "dark",
  className = "",
}: {
  variant?: "dark" | "white";
  className?: string;
}) {
  const src =
    variant === "white"
      ? "/banking/images/brand/logo-white.svg"
      : "/banking/images/brand/logo-dark.svg";
  return (
    <a
      className={`flex items-center w-[176px] h-[56px] hover:opacity-90 transition-opacity duration-200 ${className}`}
      href="/banking/"
      aria-label="World AI Show | BFSI | Dubai 2027"
    >
      <img
        src={src}
        alt="World AI Show | BFSI | Dubai 2027"
        width={176}
        height={56}
        className="w-full h-full object-contain object-left"
      />
    </a>
  );
}

interface ButtonProps {
  children: ReactNode;
  variant?: "solid" | "outline" | "outline-light";
  href?: string;
  showArrow?: boolean;
}

export function Button({ children, variant = "solid", href = "#cta", showArrow = false }: ButtonProps) {
  const baseClasses =
    "group inline-flex items-center justify-center gap-2.5 min-w-[156px] h-[49px] rounded-full font-bold text-[14.5px] px-6 cursor-pointer";

  const variants = {
    solid: "bb-btn-primary text-white",
    outline: "bb-btn-outline-dark text-white",
    "outline-light": "bb-btn-outline-light",
  };

  return (
    <a className={`${baseClasses} ${variants[variant]}`} href={href}>
      {children}
      {showArrow && (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 object-contain transition-transform duration-200 group-hover:translate-x-1"
          aria-hidden="true"
        >
          <path
            d="M3.33334 8H12.6667"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.66666 4L12.6667 8L8.66666 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </a>
  );
}
