"use client";

import { ReactNode } from "react";
import { GradientText } from "../../components/Shared";

export { GradientText };

export const V3_BASE = "/banking/v3-preview";

export function v3Href(path: string): string {
  if (!path || path === "/") return `${V3_BASE}/`;
  if (path.startsWith("http") || path.startsWith("#") || path.startsWith("mailto:")) {
    return path;
  }
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${V3_BASE}${normalized}`;
}

export function LogoV3({
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
      href={`${V3_BASE}/`}
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

export function ButtonV3({
  children,
  variant = "solid",
  href = "#cta",
  showArrow = false,
}: ButtonProps) {
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
