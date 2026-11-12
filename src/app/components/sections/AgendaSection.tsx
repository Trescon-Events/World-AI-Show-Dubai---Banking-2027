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
          ? "border-[#0069B8] bg-white shadow-[0_20px_44px_rgba(0,105,184,0.16)] -translate-y-1"
          : "border-[#0069B8]/22 bg-white shadow-[0_12px_32px_rgba(8,18,30,0.06)] hover:border-[#0069B8] hover:-translate-y-1 hover:shadow-[0_20px_44px_rgba(0,105,184,0.16)]"
      }`}
    >
      <div className="agenda-pillar-media relative w-full h-[228px] max-sm:h-[192px] overflow-hidden bg-[#08121E] border-b border-[#0069B8]/18">
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
          className={`agenda-play-badge pointer-events-none absolute right-3.5 bottom-3.5 grid place-items-center w-10 h-10 rounded-full bg-[#08121E]/72 text-white border border-white/38 backdrop-blur-[6px] transition-all duration-300 ${
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
          className={`m-0 mb-3 font-medium text-[21px] leading-[1.3] transition-colors duration-200 ${
            isExpanded ? "text-[#0069B8]" : "text-[#08121E] group-hover:text-[#0069B8]"
          }`}
        >
          {theme.label}
        </h3>

        <p className="m-0 text-[#334155] text-[15.5px] leading-[1.6]">
          {theme.shortDesc}
        </p>

        <div
          className={`grid transition-all duration-300 ease-out overflow-hidden ${
            isExpanded
              ? "grid-rows-[1fr] opacity-100 mt-5 pt-4 border-t border-[#0069B8]/18"
              : "grid-rows-[0fr] opacity-0 mt-0 pt-0 border-t border-transparent"
          }`}
        >
          <div className="min-h-0 space-y-3 overflow-hidden">
            <div>
              <span className="block text-[11px] font-bold uppercase tracking-[0.08em] text-[#0069B8] mb-1">
                Operational Scope &amp; Technical Focus
              </span>
              <p className="m-0 text-[#334155] text-[14.5px] leading-[1.6]">
                {theme.expandedScope}
              </p>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#F7F9FC] border border-[#0069B8]/22 text-[#08121E] text-[12px] font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#F15928]" />
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
      Focused on Four Core <GradientText tone="blue">Operational Mandates</GradientText>
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
      className="relative py-[104px] bg-[#F7F9FC] max-sm:py-[72px]"
      id="agenda"
    >
      <div className="w-[min(1172px,calc(100%-48px))] mx-auto max-sm:w-[calc(100%-32px)]">
        {/* Headings */}
        <h2
          data-aos="fade-up"
          className="text-center font-semibold text-[#08121E] leading-[1.2] tracking-[-0.01em] text-[clamp(30px,3.8vw,48px)] mb-[44px]"
        >
          {title}
        </h2>
        {description && (
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="max-w-[920px] mx-auto -mt-6 text-center text-[#334155] text-[clamp(16px,1.5vw,19px)] leading-[1.45] mb-[44px]"
          >
            {description}
          </p>
        )}

        {/* Component C3 — Expandable Pillar Cards (4 Cards in 2x2 Grid) */}
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
          <div className="mt-24 pt-16 border-t border-[#0069B8]/20">
            <div className="text-center mb-12">
              <h3 className="text-center font-semibold text-[#08121E] leading-[1.2] tracking-[-0.01em] text-[clamp(26px,3vw,40px)] max-w-[900px] mx-auto">
                Engineered to drive banking buyers from board priorities down to{" "}
                <GradientText tone="blue">concrete procurement.</GradientText>
              </h3>
            </div>

            <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-sm:grid-cols-1">
              {sixPartBlocks.map((block) => {
                const isOrange = block.accent === "green";
                return (
                  <div
                    key={block.num}
                    className="p-6 rounded-[18px] border border-[#0069B8]/22 bg-white shadow-[0_12px_32px_rgba(8,18,30,0.06)] hover:border-[#0069B8] transition-all duration-300 hover:-translate-y-1"
                  >
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-[0.08em] mb-3 border ${
                        isOrange
                          ? "border-[#F15928]/35 bg-[#F15928]/10 text-[#F15928]"
                          : "border-[#0069B8]/30 bg-[#0069B8]/10 text-[#0069B8]"
                      }`}
                    >
                      {block.num}
                    </span>
                    <h4 className="m-0 mb-2.5 text-[#08121E] font-semibold text-[19px] leading-snug">
                      {block.title}
                    </h4>
                    <p className="m-0 text-[#334155] text-[14.5px] leading-[1.6]">
                      {block.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-10 flex justify-center">
              <a
                href="/banking/agenda/agenda/"
                className="bb-btn-primary inline-flex items-center justify-center gap-2 h-[50px] px-8 font-bold text-[14.5px]"
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
