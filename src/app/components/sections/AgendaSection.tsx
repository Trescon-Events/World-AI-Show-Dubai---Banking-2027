"use client";

import { useState, type ReactNode } from "react";
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
    image: "/banking/images/agenda/keynotes.webp",
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
    image: "/banking/images/agenda/panel-discussion.webp",
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
    image: "/banking/images/agenda/driving-malaysia-stage.webp",
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
    image: "/banking/images/agenda/Fireside.webp",
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

function ThemeIcon({ index }: { index: number }) {
  const normalized = ((index % 4) + 4) % 4;
  if (normalized === 0) {
    return (
      <svg className="w-[23px] h-[23px] fill-none stroke-current stroke-[1.8] stroke-linecap-round stroke-linejoin-round" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3 4 7v6c0 5 3.4 8.8 8 10 4.6-1.2 8-5 8-10V7l-8-4Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    );
  }
  if (normalized === 1) {
    return (
      <svg className="w-[23px] h-[23px] fill-none stroke-current stroke-[1.8] stroke-linecap-round stroke-linejoin-round" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 4 4 8l8 4 8-4-8-4Z" />
        <path d="m4 12 8 4 8-4" />
        <path d="m4 16 8 4 8-4" />
      </svg>
    );
  }
  if (normalized === 2) {
    return (
      <svg className="w-[23px] h-[23px] fill-none stroke-current stroke-[1.8] stroke-linecap-round stroke-linejoin-round" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 20h16" />
        <path d="M6 20V9h5v11" />
        <path d="M13 20V4h5v16" />
        <path d="M8 12h1M8 15h1M15 8h1M15 11h1M15 14h1" />
      </svg>
    );
  }
  return (
    <svg className="w-[23px] h-[23px] fill-none stroke-current stroke-[1.8] stroke-linecap-round stroke-linejoin-round" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 4v5" />
      <path d="M6 14h12" />
      <path d="M8 20h8" />
      <path d="M12 9 6 14l6 5 6-5-6-5Z" />
    </svg>
  );
}

export function AgendaSection({
  title = (
    <>
      Four operational mandates. <GradientText>One day.</GradientText>
    </>
  ),
  subtitle = "Specialised Curriculum",
  description = "Universal Themes: Core banking mainframe modernisation, data fabric architectures, ethical AI, and workforce reskilling.",
  showSixBlocks = true,
}: {
  title?: ReactNode;
  subtitle?: ReactNode | null;
  description?: ReactNode;
  showSixBlocks?: boolean;
}) {
  const [expandedPillar, setExpandedPillar] = useState<number | null>(0);

  return (
    <section
      className="relative py-[104px] bg-gradient-to-b from-[#020a18]/96 to-[#051224]/70 max-sm:py-[72px]"
      id="agenda"
    >
      <div className="w-[min(1114px,calc(100%-48px))] mx-auto max-sm:w-[min(100%-32px,1114px)]">
        {/* S5 · Four Core Content Pillars */}
        {subtitle && (
          <div className="text-center mb-4">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-cyan/30 bg-cyan/10 text-cyan text-xs font-mono uppercase tracking-[2px]">
              {subtitle}
            </span>
          </div>
        )}

        {/* Headings */}
        <h2 className="text-center font-[850] text-white leading-[1.04] tracking-[-2px] text-[clamp(36px,4.8vw,56px)]">
          {title}
        </h2>
        {description && (
          <p className="max-w-[920px] mx-auto mt-5 text-center text-muted text-[18px] leading-[1.55] mb-[44px]">
            {description}
          </p>
        )}

        {/* Component C3 — Expandable Pillar Cards (4 Cards in 2x2 Grid) */}
        <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1">
          {themeItems.map((theme, idx) => {
            const isExpanded = expandedPillar === idx;
            return (
              <article
                key={theme.index}
                onClick={() => setExpandedPillar(isExpanded ? null : idx)}
                className={`group relative flex flex-col justify-between p-7 rounded-[20px] border transition-all duration-300 cursor-pointer text-left ${
                  isExpanded
                    ? "border-[#C0F43C]/65 bg-gradient-to-br from-[#071a33]/95 via-[#040e22]/98 to-[#030916]/98 shadow-[0_20px_50px_rgba(0,0,0,0.45),0_0_32px_rgba(192,244,60,0.14)]"
                    : "border-white/15 bg-gradient-to-br from-[#00ceff]/10 via-[#040c1e]/95 to-[#996cff]/10 shadow-[inset_0_0_28px_rgba(65,220,255,0.05),0_20px_50px_rgba(0,0,0,0.3)] hover:-translate-y-1 hover:border-[#18d4ff]/55"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <span
                      className={`grid place-items-center w-[48px] h-[48px] border rounded-[14px] transition-all duration-300 ${
                        isExpanded
                          ? "border-[#C0F43C]/60 bg-[#C0F43C]/18 text-[#C0F43C]"
                          : "border-cyan/30 bg-cyan/10 text-cyan group-hover:border-[#C0F43C]/50 group-hover:bg-[#C0F43C]/18 group-hover:text-[#C0F43C]"
                      }`}
                    >
                      <ThemeIcon index={idx} />
                    </span>
                    <div className="flex items-center gap-2">
                      <span
                        className={`px-3 py-1 rounded-full border font-mono text-[11px] font-bold uppercase tracking-[1.8px] transition-colors duration-300 ${
                          isExpanded
                            ? "border-[#C0F43C]/50 bg-[#C0F43C]/15 text-[#C0F43C]"
                            : "border-white/10 bg-white/5 text-cyan group-hover:border-[#C0F43C]/40 group-hover:bg-[#C0F43C]/15 group-hover:text-[#C0F43C]"
                        }`}
                      >
                        Pillar / {theme.index}
                      </span>
                      <span className="text-white/60 font-mono text-xs px-2 py-0.5 rounded border border-white/10">
                        {isExpanded ? "− Collapse" : "+ Expand Scope"}
                      </span>
                    </div>
                  </div>

                  <h3
                    className={`m-0 mb-3 font-extrabold text-[21px] leading-[1.26] transition-colors duration-200 ${
                      isExpanded ? "text-[#C0F43C]" : "text-white group-hover:text-[#C0F43C]"
                    }`}
                  >
                    {theme.label}
                  </h3>

                  <p className="m-0 text-white/80 text-[15.5px] leading-[1.6]">
                    {theme.shortDesc}
                  </p>

                  {isExpanded && (
                    <div className="mt-5 pt-4 border-t border-white/12 space-y-3 animate-fadeIn">
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
                  )}
                </div>
              </article>
            );
          })}
        </div>

        {/* Universal Themes Footer Bar */}
        <div className="mt-8 p-5 rounded-[16px] border border-[#18d4ff]/25 bg-[#041022]/85 text-center">
          <p className="m-0 text-white/85 text-[15px] leading-relaxed">
            <strong className="text-[#C0F43C] font-mono text-xs uppercase tracking-[1.8px] mr-2">
              Universal Themes:
            </strong>
            Core banking mainframe modernisation, data fabric architectures, ethical AI, and workforce reskilling.
          </p>
        </div>

        {/* S6 · Programme Architecture (Trescon Six-Part Block Methodology) */}
        {showSixBlocks && (
          <div className="mt-24 pt-16 border-t border-white/10">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#C0F43C]/35 bg-[#C0F43C]/10 text-[#C0F43C] text-xs font-mono uppercase tracking-[2px] mb-4">
                Trescon Six-Part Block Methodology
              </span>
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
