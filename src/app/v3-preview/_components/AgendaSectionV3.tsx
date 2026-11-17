"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { GradientText, V3_BASE } from "./SharedV3";

export interface ThemeItemV3 {
  index: string;
  label: string;
  heading: string;
  shortDesc: string;
  expandedScope: string;
  clinicalFormat: string;
  video?: string;
  image: string;
  imagePos: string;
}

export const themeItemsV3: ThemeItemV3[] = [
  {
    index: "01",
    label: "Fighting Financial Crime with Intelligent Technology",
    heading: "Fighting Financial Crime with Intelligent Technology",
    shortDesc:
      "Real-time transaction fraud defence, APP scam mitigation, AML alert prioritisation, behavioural biometrics.",
    expandedScope:
      "Sub-second transaction fraud defence, Authorised Push Payment (APP) scam mitigation, intelligent AML alert prioritisation, synthetic identity resolution, mule account network mapping, and behavioural biometrics.",
    clinicalFormat:
      "Financial Crime Plenary & Interactive Financial Crime Investigation Lab",
    video: "/banking/videos/agenda/financial-crime.mp4?v=2",
    image: "/banking/videos/agenda/financial-crime-poster.webp?v=2",
    imagePos: "object-center",
  },
  {
    index: "02",
    label: "Responsible AI and Regulatory Confidence",
    heading: "Responsible AI and Regulatory Confidence",
    shortDesc:
      "Algorithmic auditability, drift monitoring, fairness testing, human oversight, CBUAE & DFSA compliance.",
    expandedScope:
      "Algorithmic auditability, continuous model drift monitoring, fairness and bias testing, third-party vendor AI risk oversight, human-in-the-loop controls, and dual-jurisdiction alignment across onshore CBUAE and DIFC DFSA frameworks.",
    clinicalFormat:
      "Responsible AI Plenary, AI Accountability Hearing & Governance Boardroom",
    video: "/banking/videos/agenda/model-risk-governance.mp4",
    image: "/banking/videos/agenda/model-risk-governance-poster.webp",
    imagePos: "object-center",
  },
  {
    index: "03",
    label: "Intelligent Banking Operations",
    heading: "Intelligent Banking Operations",
    shortDesc:
      "Bounded agentic workflows, next-generation banking assistants, automated eKYC, trade-finance IDP.",
    expandedScope:
      "Bounded agentic servicing workflows with strict escalation guardrails, next-generation retail and corporate banking assistants, automated digital onboarding and eKYC, and intelligent document processing (IDP) for trade finance.",
    clinicalFormat:
      "Intelligent Banking Plenary & Workshop A: Bank-Ready Deployment",
    video: "/banking/videos/agenda/agentic-servicing.mp4",
    image: "/banking/videos/agenda/agentic-servicing-poster.webp",
    imagePos: "object-center",
  },
  {
    index: "04",
    label: "Smarter Lending and Financial Inclusion",
    heading: "Smarter Lending and Financial Inclusion",
    shortDesc:
      "Alternative-data credit underwriting, explainable SME lending, real-time credit risk simulation.",
    expandedScope:
      "Alternative-data credit underwriting for retail and thin-file borrowers, explainable SME and commercial lending decision engines, dynamic credit limit optimisation, and real-time portfolio risk stress simulation.",
    clinicalFormat:
      "Workshop B: Intelligent Lending, Fraud & Insurance Operations + Explain My Loan Decision Lab",
    video: "/banking/videos/agenda/risk-modelling.mp4",
    image: "/banking/videos/agenda/risk-modelling-poster.webp",
    imagePos: "object-center",
  },
  {
    index: "05",
    label: "Intelligent Insurance and Claims Transformation",
    heading: "Intelligent Insurance and Claims Transformation",
    shortDesc:
      "Automated motor, health & life claims intake (FNOL) via computer vision/IDP, claims fraud & actuarial pricing.",
    expandedScope:
      "Automated motor, health, and life First Notice of Loss (FNOL) intake via computer vision and IDP, medical and repair claims fraud detection, Straight-Through Processing (STP) triage, and dynamic actuarial risk pricing.",
    clinicalFormat:
      "Workshop B: Insurance Operations & Claims Simulation Demo",
    image: "/banking/images/v3-preview/insurance-claims-poster.jpg",
    imagePos: "object-center",
  },
  {
    index: "06",
    label: "Future Payments, Sovereign Infrastructure & Autonomous Banking",
    heading: "Future Payments, Sovereign Infrastructure & Autonomous Banking",
    shortDesc:
      "Agentic commerce permissioning, Aani & AlTareq open-finance security, sovereign cloud, mainframe decoupling.",
    expandedScope:
      "Agentic commerce payment permissioning, real-time Aani instant payment and AlTareq open-finance API security, sovereign cloud data residency, hybrid compute orchestration, and core mainframe decoupling.",
    clinicalFormat:
      "Future Payments Plenary & Autonomous Payment Challenge Lab",
    image: "/banking/images/v3-preview/future-payments-poster.jpg",
    imagePos: "object-center",
  },
];

export const sixPartBlocksV3 = [
  {
    num: "Block 1",
    title: "Sector Priority & DFSA Survey Brief",
    desc: "Opening executive briefing examining the DFSA November 2026 AI Survey (71% adoption vs 14% live agents) and ranked BFSI ROI mandates.",
    accent: "cyan",
  },
  {
    num: "Block 2",
    title: "Buyer Evidence & 15-Min Keynotes",
    desc: "Unvarnished 15-minute plenary keynotes and fireside case studies from commercial bank and insurance CXOs sharing live architecture outcomes.",
    accent: "green",
  },
  {
    num: "Block 3",
    title: "Responsible AI & Regulatory Plenary",
    desc: "CROs, CCOs, and supervisory leaders detailing algorithmic auditability, fairness testing, and compliance across onshore CBUAE and DIFC DFSA rules.",
    accent: "cyan",
  },
  {
    num: "Block 4",
    title: "75-Min Parallel Clinical Workshops",
    desc: "Workshop A (Bank-Ready Deployment) and Workshop B (Intelligent Lending, Fraud & Insurance Operations) running alongside 3 Closed-Door CXO Boardrooms.",
    accent: "green",
  },
  {
    num: "Block 5",
    title: "7 Interactive Synthetic Experience Labs",
    desc: "Hands-on floor simulations: Financial Crime Lab, Explain My Loan Decision, Autonomous Payment Challenge, AI Accountability Hearing & Insurance Triage.",
    accent: "cyan",
  },
  {
    num: "Block 6",
    title: "Future Payments & Procurement Synthesis",
    desc: "Plenary sessions on Aani & AlTareq open-finance security, sovereign infrastructure, and recorded 2027 enterprise vendor shortlisting.",
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
  theme: ThemeItemV3;
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
      data-aos={idx % 3 === 0 ? "fade-right" : idx % 3 === 1 ? "fade-up" : "fade-left"}
      data-aos-delay={String((idx % 3) * 120)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onToggle}
      className={`agenda-pillar-card group relative flex h-full flex-col overflow-hidden rounded-[20px] border transition-all duration-300 cursor-pointer text-left ${
        isExpanded
          ? "border-[#0069B8] bg-white shadow-[0_20px_44px_rgba(0,105,184,0.16)] -translate-y-1"
          : "border-[#0069B8]/22 bg-white shadow-[0_12px_32px_rgba(8,18,30,0.06)] hover:border-[#0069B8] hover:-translate-y-1 hover:shadow-[0_20px_44px_rgba(0,105,184,0.16)]"
      }`}
    >
      <div className="agenda-pillar-media relative w-full h-[204px] max-sm:h-[184px] overflow-hidden bg-[#08121E] border-b border-[#0069B8]/18">
        {theme.video ? (
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
        ) : (
          <img
            src={theme.image}
            alt={theme.label}
            loading="lazy"
            className={`w-full h-full object-cover ${theme.imagePos} transition-transform duration-500 ease-out group-hover:scale-[1.04]`}
          />
        )}

        {/* Orange Numbered Pill (01–06 per Component C3 spec; no video play badge) */}
        <span className="absolute top-4 left-4 z-10 inline-flex items-center justify-center px-3 py-1 rounded-full bg-[#F15928] text-white font-mono text-[12px] font-bold tracking-[0.08em] shadow-[0_6px_16px_rgba(241,89,40,0.4)]">
          {theme.index}
        </span>
      </div>

      <div className="agenda-pillar-body flex-1 flex flex-col justify-between p-6 max-sm:p-5">
        <div>
          <h3
            className={`m-0 mb-2.5 font-semibold text-[19.5px] leading-[1.3] transition-colors duration-200 ${
              isExpanded ? "text-[#0069B8]" : "text-[#08121E] group-hover:text-[#0069B8]"
            }`}
          >
            {theme.label}
          </h3>

          <p className="m-0 text-[#334155] text-[15px] leading-[1.6]">
            {theme.shortDesc}
          </p>
        </div>

        <div className="mt-4 pt-3.5 border-t border-[#0069B8]/14">
          <div className="inline-flex items-start gap-2 px-3 py-1.5 rounded-lg bg-[#F7F9FC] border border-[#0069B8]/20 text-[#08121E] text-[11.5px] font-semibold leading-snug">
            <span className="w-2 h-2 rounded-full bg-[#F15928] shrink-0 mt-1" />
            <span>{theme.clinicalFormat}</span>
          </div>

          <div
            className={`grid transition-all duration-300 ease-out overflow-hidden ${
              isExpanded
                ? "grid-rows-[1fr] opacity-100 mt-4 pt-3.5 border-t border-[#0069B8]/18"
                : "grid-rows-[0fr] opacity-0 mt-0 pt-0 border-t border-transparent"
            }`}
          >
            <div className="min-h-0 overflow-hidden">
              <span className="block text-[11px] font-bold uppercase tracking-[0.08em] text-[#0069B8] mb-1">
                Operational Scope &amp; Technical Focus
              </span>
              <p className="m-0 text-[#334155] text-[14px] leading-[1.6]">
                {theme.expandedScope}
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export function AgendaSectionV3({
  title = (
    <>
      Focused on Six Core <GradientText tone="blue">Operational Mandates</GradientText>
    </>
  ),
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

        {/* Component C3 — Six Equal-Height Cards in Balanced 3x2 Responsive Grid */}
        <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 auto-rows-fr gap-6 items-stretch max-md:auto-rows-auto">
          {themeItemsV3.map((theme, idx) => (
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

        {showSixBlocks && (
          <div className="mt-24 pt-16 border-t border-[#0069B8]/20">
            <div className="text-center mb-12">
              <h3 className="text-center font-semibold text-[#08121E] leading-[1.2] tracking-[-0.01em] text-[clamp(26px,3vw,40px)] max-w-[900px] mx-auto">
                Engineered to drive BFSI buyers from board priorities down to{" "}
                <GradientText tone="blue">concrete procurement.</GradientText>
              </h3>
            </div>

            <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-sm:grid-cols-1">
              {sixPartBlocksV3.map((block) => {
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
                href={`${V3_BASE}/agenda/agenda/`}
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
