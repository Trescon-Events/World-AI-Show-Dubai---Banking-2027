"use client";

import { useEffect } from "react";

const DARK = "/banking/images/test-brand/logo-dark.svg";
const WHITE = "/banking/images/test-brand/logo-white.svg?v=1";

/** Preview-only: swaps the live logo for the brand-book dark/white variants (header = dark, hero/footer = white). */
export function LogoSwap() {
  useEffect(() => {
    const root = document.querySelector(".ai2047-brandbook-v1");
    if (!root) return;

    const swap = () => {
      root.querySelectorAll<HTMLImageElement>('img[src*="wais-27-banking"]').forEach((img) => {
        const dark = !!img.closest("header");
        img.src = dark ? DARK : WHITE;
      });
      // Footer logo should use the white lockup.
      root.querySelectorAll<HTMLImageElement>('#footer img[src*="wais-27"]').forEach((img) => {
        img.src = WHITE;
      });
      // Swap baked cyan/lime benchmark artwork to AI 2047 Brand Book V1.0 palette assets.
      root.querySelectorAll<HTMLImageElement>('#ecosystem img[src*="/images/benchmarks/benchmark-"]').forEach((img) => {
        const next = img.src.replace("/images/benchmarks/", "/images/test-brand/");
        if (img.src !== next) img.src = next;
      });
      // Strip leading index numbers ("01 · " .. "05 · ") on Networking constituency cards.
      root.querySelectorAll<HTMLElement>("#networking article span.font-mono").forEach((el) => {
        const cleaned = (el.textContent || "").replace(/^\s*\d+\s*·\s*/, "");
        if (el.textContent !== cleaned) el.textContent = cleaned;
      });
      // Remove redundant "Trescon" word above the Trescon logo in #organizer.
      root.querySelectorAll<HTMLElement>("#organizer span.font-mono").forEach((el) => {
        if (/organised by trescon/i.test(el.textContent || "") && el.textContent !== "Organised by") {
          el.textContent = "Organised by";
        }
      });
    };

    swap();
    const obs = new MutationObserver(swap);
    obs.observe(root, { childList: true, subtree: true, attributes: true, attributeFilter: ["src"] });
    return () => obs.disconnect();
  }, []);

  return null;
}
