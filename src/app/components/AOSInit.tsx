"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function AOSInit() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Automatically attach directional data-aos (fade-up, fade-right, fade-left) to headings, text, and grid cards
    const autoDecorate = () => {
      const sections = document.querySelectorAll("main section");
      sections.forEach((sec) => {
        // Headings & standfirst paragraphs
        const headings = sec.querySelectorAll("h1, h2, h3");
        headings.forEach((h) => {
          if (h.closest(".logo-marquee-rail, .marquee-partners, .marquee-partners-reverse, .sticky")) return;
          if (!h.hasAttribute("data-aos")) {
            h.setAttribute("data-aos", "fade-up");
          }
          const nextEl = h.nextElementSibling as HTMLElement | null;
          if (
            nextEl &&
            nextEl.tagName === "P" &&
            !nextEl.hasAttribute("data-aos") &&
            !nextEl.closest("article, figure")
          ) {
            nextEl.setAttribute("data-aos", "fade-up");
            nextEl.setAttribute("data-aos-delay", "100");
          }
        });

        // Directional AOS for grid children & cards (left -> fade-right, middle -> fade-up, right -> fade-left)
        const grids = sec.querySelectorAll(".grid");
        grids.forEach((grid) => {
          if (grid.closest(".logo-marquee-rail, .marquee-partners, .marquee-partners-reverse, .sticky, summary, article")) return;
          const children = Array.from(grid.children) as HTMLElement[];
          if (children.length < 2) return;

          const cls = grid.className;
          const is2Col = cls.includes("grid-cols-2");
          const is3Col = cls.includes("grid-cols-3");
          const is4Col = cls.includes("grid-cols-4");

          children.forEach((child, idx) => {
            if (child.tagName === "SPAN" || child.tagName === "STRONG" || child.tagName === "I") return;
            if (!child.hasAttribute("data-aos")) {
              if (is2Col) {
                child.setAttribute("data-aos", idx % 2 === 0 ? "fade-right" : "fade-left");
                child.setAttribute("data-aos-delay", String((idx % 2) * 100));
              } else if (is3Col) {
                const col = idx % 3;
                child.setAttribute(
                  "data-aos",
                  col === 0 ? "fade-right" : col === 1 ? "fade-up" : "fade-left"
                );
                child.setAttribute("data-aos-delay", String(col * 100));
              } else if (is4Col) {
                const col = idx % 4;
                child.setAttribute(
                  "data-aos",
                  col === 0 ? "fade-right" : col === 3 ? "fade-left" : "fade-up"
                );
                child.setAttribute("data-aos-delay", String(col * 100));
              } else {
                child.setAttribute("data-aos", idx % 2 === 0 ? "fade-right" : "fade-left");
                child.setAttribute("data-aos-delay", String((idx % 3) * 100));
              }
            }
          });
        });
      });
    };

    autoDecorate();

    // Reset existing animate state first so animations visibly play on route change
    document.querySelectorAll<HTMLElement>("[data-aos]").forEach((el) => {
      el.removeAttribute("data-aos-animate");
    });

    document.documentElement.classList.add("aos-enabled");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            el.setAttribute("data-aos-animate", "true");
          } else {
            el.removeAttribute("data-aos-animate");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -45px 0px",
      }
    );

    const timerId = window.setTimeout(() => {
      const elements = document.querySelectorAll<HTMLElement>("[data-aos]");
      elements.forEach((el) => {
        observer.observe(el);
      });
    }, 60);

    return () => {
      window.clearTimeout(timerId);
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
