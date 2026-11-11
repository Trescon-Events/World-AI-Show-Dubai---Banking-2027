"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { GradientText } from "../Shared";

export const themeItems = [
  {
    index: "01",
    label: "Financial Crime, AML & Real-Time Fraud Defence",
    heading: "Financial Crime, AML & Real-Time Fraud Defence",
    shortDesc:
      "APP scam mitigation, real-time transaction screening, mule account tracking, synthetic identities.",
    expandedScope:
      "Mitigating Authorised Push Payment (APP) scams, sub-second transaction fraud detection, AML false-positive overhead reduction, synthetic identity resolution, behavioural biometrics, and mule account tracking.",
    clinicalFormat: "Interactive 75-minute Workshop Clinic A (60–80 delegates) & Buyer Evidence Plenary",
    video: "/banking/videos/agenda/financial-crime.mp4?v=2",
    image: "/banking/videos/agenda/financial-crime-poster.webp?v=2",
    imagePos: "object-center",
  },
  {
    index: "02",
    label: "Agentic Servicing, Frontline CX & Operational Workflow Automation",
    heading: "Agentic Servicing, Frontline CX & Operational Workflow Automation",
    shortDesc:
      "Autonomous agentic workflows with strict escalation guardrails, IDP for trade finance, automated eKYC.",
    expandedScope:
      "Autonomous agentic workflows with defensible human-in-the-loop escalation paths, customer servicing copilots, automated onboarding/eKYC, algorithmic mortgage processing, and intelligent document processing (IDP) for trade finance.",
    clinicalFormat: "Interactive 75-minute Workshop Clinic B (60–80 delegates) & Applied Case Studies",
    video: "/banking/videos/agenda/agentic-servicing.mp4",
    image: "/banking/videos/agenda/agentic-servicing-poster.webp",
    imagePos: "object-center",
  },
  {
    index: "03",
    label: "Risk Modelling, Credit Underwriting & Capital Allocation",
    heading: "Risk Modelling, Credit Underwriting & Capital Allocation",
    shortDesc:
      "AI-driven credit underwriting using alternative data, real-time risk simulation, dynamic insurance pricing.",
    expandedScope:
      "AI-driven credit underwriting using alternative data estates, real-time risk simulation, dynamic liquidity management, autonomous portfolio optimisation, and dynamic insurance claims adjudication.",
    clinicalFormat: "Applied Case Studies Plenary & Outcome Roundtables",
    video: "/banking/videos/agenda/risk-modelling.mp4",
    image: "/banking/videos/agenda/risk-modelling-poster.webp",
    imagePos: "object-center",
  },
  {
    index: "04",
    label: "Model Risk Governance, Explainability & Sovereign Infrastructure",
    heading: "Model Risk Governance, Explainability & Sovereign Infrastructure",
    shortDesc:
      "Algorithmic auditability, model drift detection, stress-testing, sovereign data residency, CBUAE/DFSA compliance.",
    expandedScope:
      "Continuous model drift detection, algorithmic auditability, stress-testing, sovereign data residency, hybrid cloud orchestration, third-party AI risk management, and compliance with onshore CBUAE and DIFC DFSA guidelines.",
    clinicalFormat: "Risk & Trust Plenary Panel & Regulatory Compliance Briefings",
    video: "/banking/videos/agenda/model-risk-governance.mp4",
    image: "/banking/videos/agenda/model-risk-governance-poster.webp",
    imagePos: "object-center",
  },
];

export const sixPartBlocks = [
  {
    num: "Block 1",
    title: "Sector Priority Brief",
    desc: "Opening executive briefing outlining macroeconomic banking pressures and ranked operational ROI priorities.",
    accent: "cyan",
  },
  {
    num: "Block 2",
    title: "Buyer Evidence",
    desc: "Unvarnished commercial bank case studies examining transferable architecture lessons and pilot post-mortems.",
    accent: "green",
  },
  {
    num: "Block 3",
    title: "Risk & Trust Plenary",
    desc: "Specialised compliance panel detailing algorithmic auditability, bias testing, and zero-trust security.",
    accent: "cyan",
  },
  {
    num: "Block 4",
    title: "Parallel Breakout Clinics",
    desc: "Two interactive 75-min workshop clinics (60–80 delegates): Clinic A (Fraud & AML) | Clinic B (Agentic Banking).",
    accent: "green",
  },
  {
    num: "Block 5",
    title: "Applied Case Studies",
    desc: "Core modernisation demonstrations and algorithmic underwriting deployments across live transactional cores.",
    accent: "cyan",
  },
  {
    num: "Block 6",
    title: "Outcome Roundtables",
    desc: "Structured peer roundtables capturing recorded procurement criteria and 2027 implementation roadmaps.",
    accent: "green",
  },
];

function AgendaPillarCard({
  theme,
  idx,
  isExpanded,
  onEnter,
  onLeave,
  onToggle,
}: {
  theme: (typeof themeItems)[number];
  idx: number;
  isExpanded: boolean;
  onEnter: () => void;
  onLeave: () => void;
  onToggle: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (isExpanded) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [isExpanded]);

  const handleMouseEnter = () => {
    onEnter();
    videoRef.current?.play().catch(() => {});
  };

  const handleMouseLeave = () => {
    onLeave();
    videoRef.current?.pause();
  };

  return (
    <article
      data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"}
      data-aos-delay={String((idx % 2) * 150)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onToggle}
      className={`agenda-pillar-card group relative flex flex-col justify-between overflow-hidden rounded-[20px] border transition-all duration-300 cursor-pointer text-left ${
        isExpanded
          ? "border-[#C0F43C]/65 bg-gradient-to-br from-[#071a33]/95 via-[#040e22]/98 to-[#030916]/98 shadow-[0_20px_50px_rgba(0,0,0,0.45),0_0_32px_rgba(192,244,60,0.14)] -translate-y-1"
          : "border-white/15 bg-gradient-to-br from-[#00ceff]/10 via-[#040c1e]/95 to-[#996cff]/10 shadow-[inset_0_0_28px_rgba(65,220,255,0.05),0_20px_50px_rgba(0,0,0,0.3)]"
      }`}
    >
      <div className="agenda-pillar-media relative w-full h-[228px] max-sm:h-[192px] overflow-hidden border-b border-white/10">
        <video
          ref={videoRef}
          src={theme.video}
          poster={theme.image}
          muted
          loop
          playsInline
          preload="metadata"
          aria-label={theme.label}
          className={`w-full h-full object-cover ${theme.imagePos} transition-transform duration-500 ease-out group-hover:scale-[1.04]`}
        />
        <span
          aria-hidden="true"
          className={`agenda-play-badge pointer-events-none absolute right-3.5 bottom-3.5 grid place-items-center w-10 h-10 rounded-full transition-all duration-300 ${
            isExpanded ? "opacity-0 scale-90" : "opacity-100 scale-100"
          }`}
        >
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current translate-x-[1px]">
            <path d="M8 5.5v13l10-6.5-10-6.5z" />
          </svg>
        </span>
      </div>

      <div className="agenda-pillar-body p-7 max-sm:p-5">
        <h3
          className={`m-0 mb-3 font-extrabold text-[21px] leading-[1.26] transition-colors duration-200 ${
            isExpanded ? "text-[#C0F43C]" : "text-white"
          }`}
        >
          {theme.label}
        </h3>

        <p className="m-0 text-white/80 text-[15.5px] leading-[1.6]">
          {theme.shortDesc}
        </p>

        <div
          className={`grid transition-all duration-300 ease-out overflow-hidden ${
            isExpanded
              ? "grid-rows-[1fr] opacity-100 mt-5 pt-4 border-t border-white/12"
              : "grid-rows-[0fr] opacity-0 mt-0 pt-0 border-t border-transparent"
          }`}
        >
          <div className="min-h-0 space-y-3 overflow-hidden">
            <div>
              <span className="block font-mono text-[11px] uppercase tracking-[1.6px] text-[#18d4ff] mb-1">
                Operational Scope &amp; Technical Focus
              </span>
              <p className="m-0 text-white/75 text-[14.5px] leading-[1.6]">
                {theme.expandedScope}
              </p>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 text-white/80 font-mono text-[11.5px]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C0F43C]" />
              Format: {theme.clinicalFormat}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export function AgendaSection({
  title = (
    <>
      Focused on Four Core <GradientText>Operational Mandates</GradientText>
    </>
  ),
  subtitle = null,
  description = null,
  showSixBlocks = false,
}: {
  title?: ReactNode;
  subtitle?: ReactNode | null;
  description?: ReactNode | null;
  showSixBlocks?: boolean;
}) {
  const [expandedPillar, setExpandedPillar] = useState<number | null>(null);

  return (
    <section
      className="relative py-[104px] bg-gradient-to-b from-[#020a18]/96 to-[#051224]/70 max-sm:py-[72px]"
      id="agenda"
    >
      <div className="w-[min(1114px,calc(100%-48px))] mx-auto max-sm:w-[min(100%-32px,1114px)]">
        {/* Headings */}
        <h2
          data-aos="fade-up"
          className="text-center font-[850] text-white leading-[1.04] tracking-[-2px] text-[clamp(36px,4.8vw,56px)] mb-[44px]"
        >
          {title}
        </h2>
        {description && (
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="max-w-[920px] mx-auto -mt-6 text-center text-muted text-[18px] leading-[1.55] mb-[44px]"
          >
            {description}
          </p>
        )}

        {/* Component C3 — Expandable Pillar Cards (4 Cards in 2x2 Grid — video plays & card expands on hover) */}
        <div className="grid grid-cols-2 gap-6 items-start max-md:grid-cols-1">
          {themeItems.map((theme, idx) => (
            <AgendaPillarCard
              key={theme.index}
              theme={theme}
              idx={idx}
              isExpanded={expandedPillar === idx}
              onEnter={() => setExpandedPillar(idx)}
              onLeave={() => setExpandedPillar(null)}
              onToggle={() => setExpandedPillar(expandedPillar === idx ? null : idx)}
            />
          ))}
        </div>

        {/* S6 · Programme Architecture (Six-Part Block Methodology) */}
        {showSixBlocks && (
          <div className="mt-24 pt-16 border-t border-white/10">
            <div className="text-center mb-12">
              <h3 className="text-center font-[850] text-white leading-[1.08] tracking-[-1.6px] text-[clamp(30px,4vw,46px)] max-w-[900px] mx-auto">
                Engineered to drive banking buyers from board priorities down to{" "}
                <GradientText>concrete procurement.</GradientText>
              </h3>
            </div>

            <div className="grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1">
              {sixPartBlocks.map((block) => {
                const isGreen = block.accent === "green";
                return (
                  <div
                    key={block.num}
                    className={`p-6 rounded-[18px] border transition-all duration-300 hover:-translate-y-1 ${
                      isGreen
                        ? "border-[#C0F43C]/35 bg-gradient-to-br from-[#C0F43C]/[0.07] via-[#041022] to-[#030917]"
                        : "border-[#18d4ff]/35 bg-gradient-to-br from-[#18d4ff]/[0.07] via-[#041022] to-[#030917]"
                    }`}
                  >
                    <span
                      className={`inline-block px-3 py-1 rounded-full font-mono text-[11px] font-bold uppercase tracking-[1.6px] mb-3 border ${
                        isGreen
                          ? "border-[#C0F43C]/40 bg-[#C0F43C]/12 text-[#C0F43C]"
                          : "border-[#18d4ff]/40 bg-[#18d4ff]/12 text-[#18d4ff]"
                      }`}
                    >
                      {block.num}
                    </span>
                    <h4 className="m-0 mb-2.5 text-white font-extrabold text-[19px] leading-snug">
                      {block.title}
                    </h4>
                    <p className="m-0 text-white/75 text-[14.5px] leading-[1.6]">
                      {block.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-10 flex justify-center">
              <a
                href="/banking/agenda/agenda/"
                className="inline-flex items-center justify-center gap-2 h-[50px] px-8 rounded-full font-extrabold text-[14.5px] text-[#06111F] [color:#06111F!important] bg-[#C0F43C] hover:shadow-[0_0_24px_rgba(192,244,60,0.35)] transition-all duration-200"
              >
                Explore Full 1-Day Master Schedule →
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
