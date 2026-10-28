"use client";

import { useEffect, useRef, useState } from "react";
import { GradientText } from "../Shared";

const buyingUnitConstituencies = [
  {
    title: "Commercial & Retail Banking (Buy-Side 70%+)",
    desc: "CIOs, CTOs, Chief Data & AI Officers, Chief Digital Officers, Heads of Retail Banking, Heads of Core Transformation.",
    badge: "01 · COMMERCIAL & RETAIL BANKING",
  },
  {
    title: "Risk, Compliance & Financial Crime",
    desc: "Chief Risk Officers (CROs), Chief Compliance Officers (CCOs), Heads of AML, Heads of Fraud Risk, MLROs, Model Governance Leads.",
    badge: "02 · RISK, COMPLIANCE & FINCRIME",
  },
  {
    title: "Insurers, Wealth & Asset Managers",
    desc: "Chief Operating Officers (COOs), Chief Investment Officers, Heads of Underwriting, Heads of Claims Automation, Actuarial Leads.",
    badge: "03 · INSURERS, WEALTH & ASSET MGMT",
  },
  {
    title: "Institutional Hosts & Regulators",
    desc: "Central Bank of the UAE (CBUAE), Dubai Financial Services Authority (DFSA), DIFC Authority, UAE FIU, ADGM.",
    badge: "04 · REGULATORS & INSTITUTIONAL HOSTS",
  },
  {
    title: "Global Cloud, Core & AI Providers",
    desc: "Enterprise software platforms, accelerated compute providers, fraud/AML specialists, core banking modernisers, system integrators.",
    badge: "05 · CLOUD, CORE & AI PROVIDERS",
  },
];

const thrivingEnvironmentItems = [
  {
    num: "01",
    title: "1-on-1 Matchmaking Lounges",
    desc: "Pre-scheduled, 1-on-1 commercial meetings in dedicated VIP matchmaking lounges, connecting buy-side banking budget holders directly with vetted AI solution providers.",
    image: "/banking/images/environment/matchmaking-lounges.jpg",
  },
  {
    num: "02",
    title: "Closed-Door Boardroom Discussions",
    desc: "Exclusive 60-minute private boardroom sessions hosting 15 pre-qualified wishlist banking and risk CXOs along with dedicated executive moderation.",
    image: "/banking/images/environment/boardroom-discussions.jpg",
  },
  {
    num: "03",
    title: "Executive Roundtables",
    desc: "Structured peer-to-peer outcome roundtables and interactive workshop clinics designed for banking delegates to benchmark deployment architectures and 2027 procurement roadmaps.",
    image: "/banking/images/environment/executive-roundtables.jpg",
  },
  {
    num: "04",
    title: "Keynotes and Panel Sessions",
    desc: "Main-stage plenary keynotes and unvarnished panels addressing macroeconomic pressures, core banking transformation, and even live production AI outcomes.",
    image: "/banking/images/environment/keynotes.jpg",
  },
];

function ThrivingEnvironmentShowcase() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollStage, setScrollStage] = useState(0); // continuous 0 .. 3 across the 4 slides

  useEffect(() => {
    const handleScroll = () => {
      const el = trackRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const scrollable = el.offsetHeight - window.innerHeight;
      if (scrollable <= 0) return;
      const raw = -rect.top / scrollable;
      const clamped = Math.max(0, Math.min(1, raw));
      setScrollStage(clamped * (thrivingEnvironmentItems.length - 1));
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const jumpToSlide = (idx: number) => {
    const el = trackRef.current;
    if (!el) return;
    const scrollable = el.offsetHeight - window.innerHeight;
    const targetY =
      window.scrollY +
      el.getBoundingClientRect().top +
      (idx / (thrivingEnvironmentItems.length - 1)) * scrollable;
    window.scrollTo({ top: targetY, behavior: "smooth" });
  };

  const activeIndex = Math.min(
    thrivingEnvironmentItems.length - 1,
    Math.max(0, Math.round(scrollStage))
  );

  return (
    <div className="mt-24 pt-16 border-t border-white/10">
      {/* Header Block */}
      <div className="w-[min(1114px,calc(100%-48px))] mx-auto text-center mb-12 max-sm:w-[min(100%-32px,1114px)]">
        <h3
          data-aos="fade-up"
          className="m-0 text-white font-[850] text-[clamp(30px,4.4vw,54px)] leading-[1.04] tracking-[-1.8px] max-w-[820px] mx-auto"
        >
          Designed for <GradientText>Maximum Engagement</GradientText>
        </h3>
      </div>

      {/* Sticky 400vh Center-Out Curtain Reveal Track */}
      <div
        ref={trackRef}
        className="relative w-full"
        style={{ height: `${thrivingEnvironmentItems.length * 100}vh` }}
      >
        <div className="sticky top-0 h-dvh w-full overflow-hidden bg-[#020814] border-y border-white/10">
          {/* Stacked Full-Bleed Image Layers with Center-Out Horizontal Clip-Path Reveal */}
          {thrivingEnvironmentItems.map((item, idx) => {
            // Layer 0 is fully open; Layer i (1..3) opens as scrollStage goes from (i - 1) to i
            const revealProgress =
              idx === 0
                ? 1
                : Math.max(0, Math.min(1, scrollStage - (idx - 1)));
            const insetSide = (1 - revealProgress) * 50; // 50% -> 0%
            // Subtle inner zoom while active
            const nextReveal = Math.max(0, Math.min(1, scrollStage - idx));
            const imgScale = 1.08 - revealProgress * 0.08 + nextReveal * 0.05;

            return (
              <div
                key={item.title}
                className="absolute inset-0 w-full h-full overflow-hidden"
                style={{
                  clipPath: `inset(0% ${insetSide.toFixed(2)}% 0% ${insetSide.toFixed(2)}%)`,
                  zIndex: idx,
                  willChange: "clip-path",
                }}
              >
                <div className="relative w-full h-full">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    style={{
                      transform: `scale(${imgScale.toFixed(3)})`,
                      transition: "transform 120ms linear",
                    }}
                  />
                  {/* Subtle dark blue/navy atmospheric tint so typography pops */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(2, 11, 28, 0.32) 0%, rgba(2, 11, 28, 0.25) 45%, rgba(2, 10, 24, 0.92) 100%)",
                    }}
                  />
                </div>
              </div>
            );
          })}

          {/* Top-Right Interactive Slide Progress Selector Pills */}
          <div className="absolute top-24 right-[3.5vw] z-[60] flex items-center gap-2 max-sm:top-20 max-sm:right-4">
            {thrivingEnvironmentItems.map((item, idx) => {
              const isCurrent = idx === activeIndex;
              return (
                <button
                  key={item.num}
                  type="button"
                  onClick={() => jumpToSlide(idx)}
                  className={`px-3 py-1.5 rounded-full font-mono text-xs font-bold tracking-wider transition-all duration-300 cursor-pointer border ${
                    isCurrent
                      ? "bg-[#C0F43C] text-[#06111F] border-[#C0F43C] shadow-[0_0_16px_rgba(192,244,60,0.45)]"
                      : "bg-black/45 text-white/70 border-white/20 hover:border-white/50 hover:text-white backdrop-blur-md"
                  }`}
                >
                  {item.num}
                </button>
              );
            })}
          </div>

          {/* Bottom Overlay Layer (01/04 + Vertical Divider + Title & Description) */}
          {thrivingEnvironmentItems.map((item, idx) => {
            const isCurrent = idx === activeIndex;
            return (
              <div
                key={item.title}
                className={`absolute inset-0 p-[3.5vw] max-md:p-6 flex items-end justify-start bg-gradient-to-t from-[#020814]/95 via-[#020814]/45 to-transparent transition-all duration-500 ${
                  isCurrent
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 translate-y-4 pointer-events-none"
                }`}
                style={{ zIndex: 50 + idx }}
              >
                {/* Giant Index Number + /04 + Vertical Divider + Title & Description */}
                <div className="flex items-end gap-6 max-sm:flex-col max-sm:items-start max-sm:gap-3">
                  <div className="flex items-end select-none shrink-0">
                    <div className="overflow-hidden pt-4">
                      <span className="text-[#C0F43C] text-[clamp(64px,7.5vw,116px)] leading-[0.74] font-[850] block tracking-tighter drop-shadow-[0_0_24px_rgba(192,244,60,0.28)]">
                        {item.num}
                      </span>
                    </div>
                    <div className="overflow-hidden mb-1">
                      <span className="text-white/60 text-[clamp(18px,1.8vw,28px)] font-semibold ml-1 leading-none block font-mono">
                        /0{thrivingEnvironmentItems.length}
                      </span>
                    </div>
                  </div>

                  <div className="h-[84px] max-sm:hidden w-px bg-white/25 self-end mb-1.5 shrink-0" />

                  <div className="flex flex-col gap-2 self-end mb-1 max-w-[680px]">
                    <div className="text-white leading-[1.02] text-[clamp(22px,2.6vw,38px)] font-[850] uppercase tracking-[-0.8px]">
                      {item.title}
                    </div>
                    <p className="m-0 text-white/80 text-[clamp(14px,1.15vw,17px)] leading-[1.55] font-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export function NetworkingSection() {
  const [, setIsHovered] = useState(false);

  return (
    <section className="relative py-[104px] bg-[#020C21] overflow-x-clip max-sm:py-[72px]" id="networking">
      <div className="w-[min(1114px,calc(100%-48px))] mx-auto max-sm:w-[min(100%-32px,1114px)]">
        {/* S7 · Engage with Five Governed Institutional Constituencies */}
        <div className="flex flex-col items-center text-center">
          <div className="max-w-[860px] mb-12">
            <h2 className="font-[850] text-white leading-[1.06] tracking-[-1.8px] text-[clamp(32px,4.2vw,50px)] m-0">
              Engage with Five Governed{" "}
              <GradientText>Institutional Constituencies</GradientText>
            </h2>
            <p className="mt-5 mb-0 text-muted text-[18px] leading-[1.55] max-sm:text-[16px]">
              Meet with over 300 pre-qualified C-suite banking, insurance, risk, compliance, and regulatory decision-makers convening at the same place with the same goals.
            </p>
          </div>

          {/* Component C4 — Uniform 5 Constituency Blocks Grid */}
          <div className="w-full grid grid-cols-6 gap-5 max-[980px]:grid-cols-2 max-sm:grid-cols-1 text-left">
            {buyingUnitConstituencies.map((item, idx) => (
              <article
                key={item.title}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className={`group flex flex-col justify-between min-h-[210px] p-7 rounded-[18px] border border-[#18d4ff]/25 bg-gradient-to-br from-[#00ceff]/8 to-[#c0f43c]/4 shadow-[inset_0_0_28px_rgba(65,220,255,0.06),0_20px_60px_rgba(0,0,0,0.22)] hover:-translate-y-0.5 hover:border-[#C0F43C]/60 hover:shadow-[inset_0_0_28px_rgba(192,244,60,0.08),0_20px_60px_rgba(0,0,0,0.3)] transition-all duration-300 max-[980px]:col-span-1 ${
                  idx < 3 ? "col-span-2" : "col-span-3"
                }`}
              >
                <div>
                  <span className="inline-block font-mono text-[11px] uppercase tracking-[1.8px] text-cyan mb-3">
                    {item.badge}
                  </span>
                  <h3 className="text-white text-[20px] font-extrabold leading-[1.25] mb-2.5 group-hover:text-[#C0F43C] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted text-[15px] leading-[1.6] m-0">
                    {item.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Dedicated Full-Bleed Sticky Scroll Section: Creating a Thriving Environment (Layr Media /services style) */}
      <ThrivingEnvironmentShowcase />

      <div className="w-[min(1114px,calc(100%-48px))] mx-auto max-sm:w-[min(100%-32px,1114px)]">
        {/* S8 · A Summit Composed for Regulated Banking Buyers & Providers (Page 9 Top) */}
        <div className="mt-24 pt-16 border-t border-white/10">
          <div className="text-center mb-10">
            <h3 className="text-white font-[850] text-[clamp(30px,3.8vw,44px)] leading-[1.08] tracking-[-1.2px]">
              A Summit Composed for <GradientText>Regulated Banking Buyers &amp; Providers</GradientText>
            </h3>
          </div>

          <div className="grid grid-cols-2 gap-6 max-[980px]:grid-cols-1">
            {/* Door 1: Delegate Pass */}
            <div
              data-aos="fade-right"
              data-aos-delay="100"
              className="group relative flex flex-col justify-between p-8 rounded-[22px] border border-[#C0F43C]/35 bg-gradient-to-br from-[#C0F43C]/[0.09] via-[#041022] to-[#041022] shadow-[0_20px_50px_rgba(0,0,0,0.35)] overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-[#C0F43C]/80 hover:shadow-[0_28px_70px_rgba(0,0,0,0.55),0_0_42px_rgba(192,244,60,0.14)]"
            >
              <div className="pointer-events-none absolute inset-x-10 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#C0F43C]/50 to-transparent transition-all duration-500 group-hover:inset-x-4 group-hover:via-[#C0F43C] group-hover:shadow-[0_0_16px_#C0F43C]" />
              <div className="pointer-events-none absolute -top-24 -right-24 w-64 h-64 rounded-full bg-[#C0F43C]/10 blur-[60px] opacity-40 transition-all duration-500 group-hover:opacity-100 group-hover:scale-125" />
              <span className="pointer-events-none select-none absolute top-5 right-7 font-mono font-black text-[54px] leading-none tracking-[-3px] text-white/[0.03] transition-colors duration-300 group-hover:text-[#C0F43C]/[0.09]">
                01
              </span>

              <div className="relative z-10">
                <h4 className="text-white font-extrabold text-[24px] leading-[1.2] mb-3 transition-colors duration-300 group-hover:text-[#f5ffe0]">
                  Delegate Pass — complimentary, strictly by invitation and qualification
                </h4>
                <p className="text-muted text-[16px] leading-[1.6] mb-6 transition-colors duration-300 group-hover:text-white/85">
                  Senior banking, insurance, and financial services executives attend by invitation on a complimentary Delegate Pass, subject to qualification against an active operational budget or deployment mandate.
                </p>
              </div>
              <div className="relative z-10">
                <a
                  href="/banking/attend/delegate/"
                  className="inline-flex items-center justify-center gap-2.5 h-[50px] px-7 rounded-full font-extrabold text-[15px] text-[#06111F] [color:#06111F!important] bg-[#C0F43C] transition-all duration-300 group-hover:bg-[#cdfb50] group-hover:shadow-[0_0_28px_rgba(192,244,60,0.45)] hover:scale-[1.02]"
                >
                  Apply for a Delegate Pass
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>

            {/* Door 2: Business Pass */}
            <div
              data-aos="fade-left"
              data-aos-delay="200"
              className="group relative flex flex-col justify-between p-8 rounded-[22px] border border-cyan/35 bg-gradient-to-br from-cyan/[0.09] via-[#041022] to-[#041022] shadow-[0_20px_50px_rgba(0,0,0,0.35)] overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan/80 hover:shadow-[0_28px_70px_rgba(0,0,0,0.55),0_0_42px_rgba(24,212,255,0.14)]"
            >
              <div className="pointer-events-none absolute inset-x-10 top-0 h-[2px] bg-gradient-to-r from-transparent via-cyan/50 to-transparent transition-all duration-500 group-hover:inset-x-4 group-hover:via-cyan group-hover:shadow-[0_0_16px_#18d4ff]" />
              <div className="pointer-events-none absolute -top-24 -right-24 w-64 h-64 rounded-full bg-cyan/10 blur-[60px] opacity-40 transition-all duration-500 group-hover:opacity-100 group-hover:scale-125" />
              <span className="pointer-events-none select-none absolute top-5 right-7 font-mono font-black text-[54px] leading-none tracking-[-3px] text-white/[0.03] transition-colors duration-300 group-hover:text-cyan/[0.09]">
                02
              </span>

              <div className="relative z-10">
                <h4 className="text-white font-extrabold text-[24px] leading-[1.2] mb-3 transition-colors duration-300 group-hover:text-[#e6fbff]">
                  Business Pass — paid commercial access with strictly capped quota
                </h4>
                <p className="text-muted text-[16px] leading-[1.6] mb-6 transition-colors duration-300 group-hover:text-white/85">
                  Business Passes provide commercial access for technology solution providers, software vendors, and consultancies outside the invitation criteria, with ticket numbers strictly capped to protect room composition.
                </p>
              </div>
              <div className="relative z-10">
                <a
                  href="/banking/attend/"
                  className="inline-flex items-center justify-center gap-2.5 h-[50px] px-7 rounded-full font-extrabold text-[15px] text-white border border-cyan/50 bg-cyan/10 transition-all duration-300 group-hover:bg-cyan group-hover:text-[#041022] group-hover:[color:#041022!important] group-hover:border-cyan group-hover:shadow-[0_0_28px_rgba(24,212,255,0.4)] hover:scale-[1.02]"
                >
                  Purchase a Business Pass
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
