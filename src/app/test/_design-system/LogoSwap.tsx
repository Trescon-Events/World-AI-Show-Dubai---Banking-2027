"use client";

import { useEffect } from "react";

const DARK = "/banking/images/test-brand/logo-dark.svg";
const WHITE = "/banking/images/test-brand/logo-white.svg";

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
      // Footer / hero logos that are not the live header asset but should still be the white lockup.
      root.querySelectorAll<HTMLImageElement>('#footer img[src*="wais-27"], #home img[src*="wais-27"]').forEach((img) => {
        img.src = WHITE;
      });
    };

    swap();
    const obs = new MutationObserver(swap);
    obs.observe(root, { childList: true, subtree: true, attributes: true, attributeFilter: ["src"] });
    return () => obs.disconnect();
  }, []);

  return null;
}
