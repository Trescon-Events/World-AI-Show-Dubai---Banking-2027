"use client";

import { useEffect, useRef, useState } from "react";

const testimonials = [
  { id: "01", quote: "We'd like to acknowledge Trescon for all the great efforts and structured organisation with thorough follow ups and accommodation.", name: "Microsoft", category: "Enterprise Cloud & AI Partner", highlight: "Structured Organisation & Follow-Up" },
  { id: "02", quote: "It was a great experience to work with Trescon. The team is super-efficient, proactive, and goes above and beyond to make the most out of the situation.", name: "Cloudflare", category: "Connectivity & Security Partner", highlight: "Proactive Execution & Delivery" },
  { id: "03", quote: "Ridiculously efficient is the phrase that comes to mind when I think about the team at Trescon. They have a sense of strong motivation and aims for excellence all the time. The team is creative, energetic, solution-oriented and highly motivated with great communication skills.", name: "SAP", category: "Enterprise Applications Partner", highlight: "Solution-Oriented Excellence" },
  { id: "04", quote: "The thing I like the most is that Trescon has the right mix of users who are exploring AI, and the vendors who have the solutions.", name: "DDN Storage", category: "AI Data Infrastructure Partner", highlight: "Curated Buyer & Solution Mix" },
];

const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

function VideoZoom() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("is-in");
      return;
    }
    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = Math.max(0, Math.min(1, (vh - rect.top) / (vh * 0.75)));
      const e = easeOut(p);
      el.style.opacity = String(0.65 + 0.35 * e);
      el.style.transform = `translateY(${(1 - e) * 34}px) rotateX(${(1 - e) * 8}deg) scale(${0.78 + 0.22 * e})`;
      el.classList.toggle("is-in", p > 0.9);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="tp-video-wrap">
      <div className="tp-video" ref={ref}>
        <div className="tp-vbar"><i /><i /><i /><span>World AI Show Testimonial Video</span></div>
        <div className="tp-frame">
          <iframe
            src="https://www.youtube.com/embed/1Trq5urDZM8?rel=0&modestbranding=1"
            title="World AI Show Testimonial Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
          />
        </div>
        <span className="tp-corner tl" /><span className="tp-corner tr" /><span className="tp-corner bl" /><span className="tp-corner br" />
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [cycle, setCycle] = useState(0);
  const t = testimonials[active];

  useEffect(() => {
    if (paused) return;
    const id = setTimeout(() => setActive((c) => (c === testimonials.length - 1 ? 0 : c + 1)), 5500);
    return () => clearTimeout(id);
  }, [active, paused, cycle]);

  const go = (i: number) => {
    setActive(i);
    setCycle((c) => c + 1);
  };

  return (
    <section
      className="tp-section"
      id="testimonials"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => {
        setPaused(false);
        setCycle((c) => c + 1);
      }}
    >
      <div className="tp-wrap">
        <div className="tp-head">
          <div>
            <span className="tp-eyebrow"><i />Partner &amp; Industry Endorsements</span>
            <h2>
              What industry <br />
              leaders <span className="tp-hl">are saying.</span>
            </h2>
          </div>
          <div className="tp-ctrl" aria-label="Testimonial controls">
            <button type="button" className="tp-btn" aria-label="Previous testimonial" onClick={() => go(active === 0 ? testimonials.length - 1 : active - 1)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
            </button>
            <button type="button" className="tp-btn" aria-label="Next testimonial" onClick={() => go(active === testimonials.length - 1 ? 0 : active + 1)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
            </button>
          </div>
        </div>

        <article className="tp-card">
          <div className="tp-grid">
            <div className="tp-quote">
              <div className="tp-meta">
                <span className="tp-qico" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
                </span>
                <span className="tp-tag">{t.highlight}</span>
              </div>
              <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
            </div>
            <div className="tp-partner">
              <span className="tp-verified">Verified Partner</span>
              <strong className="tp-name">{t.name}</strong>
              <span className="tp-cat">{t.category}</span>
            </div>
          </div>
          <div
            className="tp-bar"
            key={`${active}-${cycle}`}
            style={{ animationPlayState: paused ? "paused" : "running" }}
          />
        </article>

        <div className="tp-strip">
          {testimonials.map((item, i) => (
            <button key={item.name} type="button" className={`tp-pick${i === active ? " is-active" : ""}`} onClick={() => go(i)}>
              <strong>{item.name}</strong>
              <span>{item.highlight}</span>
            </button>
          ))}
        </div>

        <VideoZoom />
      </div>
    </section>
  );
}
