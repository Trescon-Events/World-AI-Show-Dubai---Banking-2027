"use client";

import React from "react";
import { GradientText } from "../components/Shared";

export function SpeakersCTASection() {
  return (
    <section className="relative py-[104px] max-sm:py-[72px] bg-[#020814] overflow-hidden border-t border-white/[0.06]" id="cta">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.14]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(24, 212, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(24, 212, 255, 0.1) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse 80% 70% at 50% 50%, black 20%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 50% 50%, black 20%, transparent 100%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[560px] h-[380px] rounded-full bg-[#C0F43C]/[0.06] blur-[130px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-[560px] h-[380px] rounded-full bg-[#18d4ff]/[0.06] blur-[130px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 w-[min(1114px,calc(100%-48px))] mx-auto max-sm:w-[min(100%-32px,1114px)]">
        <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-7 items-stretch">
          {/* ── Card 1: Delegate Pass (Lime Accent Glass Card) ── */}
          <article className="group relative p-10 max-sm:p-7 rounded-[28px] border border-[#C0F43C]/35 bg-gradient-to-br from-[#0a1e2e]/90 via-[#051122]/95 to-[#030915]/98 backdrop-blur-xl shadow-[0_24px_64px_rgba(0,0,0,0.5),0_0_32px_rgba(192,244,60,0.08),inset_0_1px_0_rgba(255,255,255,0.12)] hover:border-[#C0F43C]/65 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden">
            <div className="absolute top-0 left-10 right-10 h-[2px] bg-gradient-to-r from-transparent via-[#C0F43C] to-transparent opacity-85" />
            <div className="absolute -top-20 -right-20 w-52 h-52 rounded-full bg-[#C0F43C]/10 blur-3xl pointer-events-none" />

            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#C0F43C]/35 bg-[#C0F43C]/10 text-[#C0F43C] font-mono text-[11px] font-bold uppercase tracking-[1.8px] mb-7">
                <span className="w-2 h-2 rounded-full bg-[#C0F43C] animate-pulse" />
                Dubai · 24 March 2027 · 300+ Senior Banking Leaders · 70%+ Buy-Side
              </div>

              <div className="grid grid-cols-3 gap-3 mb-8 p-4 rounded-2xl border border-white/[0.08] bg-[#020814]/65 max-sm:grid-cols-1">
                <div className="flex flex-col pr-2 border-r border-white/10 max-sm:border-r-0 max-sm:border-b max-sm:pb-3">
                  <strong className="text-[24px] xl:text-[26px] font-[850] leading-none text-[#C0F43C] tracking-tight tabular-nums">
                    300+
                  </strong>
                  <span className="mt-1.5 text-[10.5px] font-mono font-bold uppercase tracking-[1px] text-white/65 leading-snug">
                    C-Suite Leaders
                  </span>
                </div>

                <div className="flex flex-col px-1 border-r border-white/10 max-sm:border-r-0 max-sm:border-b max-sm:pb-3 max-sm:px-0">
                  <strong className="text-[24px] xl:text-[26px] font-[850] leading-none text-[#C0F43C] tracking-tight tabular-nums">
                    35–45
                  </strong>
                  <span className="mt-1.5 text-[10.5px] font-mono font-bold uppercase tracking-[1px] text-white/65 leading-snug">
                    Faculty Speakers
                  </span>
                </div>

                <div className="flex flex-col pl-1 max-sm:pl-0">
                  <strong className="text-[24px] xl:text-[26px] font-[850] leading-none text-white tracking-tight">
                    1-Day
                  </strong>
                  <span className="mt-1.5 text-[10.5px] font-mono font-bold uppercase tracking-[1px] text-white/65 leading-snug">
                    24 Mar 2027
                  </span>
                </div>
              </div>

              <h2 className="m-0 text-white font-[850] leading-[1.1] tracking-[-1.4px] text-[clamp(26px,3.1vw,38px)]">
                Be in the room where{" "}
                <GradientText>2027 banking AI architecture gets finalised</GradientText>
              </h2>

              <p className="m-0 mt-4 text-white/75 text-[15.5px] leading-[1.65]">
                Delegate Pass — complimentary, strictly by invitation and qualification for senior banking, insurance, and financial services executives.
              </p>
            </div>

            <div className="mt-9 pt-6 border-t border-white/[0.08]">
              <a
                href="/banking/attend/delegate/"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-[15px] font-extrabold text-[#06111F] [color:#06111F!important] bg-[#C0F43C] shadow-[0_8px_24px_rgba(192,244,60,0.25)] hover:shadow-[0_12px_32px_rgba(192,244,60,0.45)] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer max-sm:w-full"
              >
                Apply for a Delegate Pass
                <svg
                  className="w-4 h-4 flex-shrink-0 text-[#06111F]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.8"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </article>

          {/* ── Card 2: Commercial Partnerships (Cyan Accent Glass Card) ── */}
          <article className="group relative p-10 max-sm:p-7 rounded-[28px] border border-[#18d4ff]/35 bg-gradient-to-br from-[#071c36]/90 via-[#051122]/95 to-[#030915]/98 backdrop-blur-xl shadow-[0_24px_64px_rgba(0,0,0,0.5),0_0_32px_rgba(24,212,255,0.08),inset_0_1px_0_rgba(255,255,255,0.12)] hover:border-[#18d4ff]/65 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden">
            <div className="absolute top-0 left-10 right-10 h-[2px] bg-gradient-to-r from-transparent via-[#18d4ff] to-transparent opacity-85" />
            <div className="absolute -top-20 -right-20 w-52 h-52 rounded-full bg-[#18d4ff]/10 blur-3xl pointer-events-none" />

            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#18d4ff]/35 bg-[#18d4ff]/10 text-[#18d4ff] font-mono text-[11px] font-bold uppercase tracking-[1.8px] mb-7">
                <span className="w-2 h-2 rounded-full bg-[#18d4ff] animate-pulse" />
                4 Sector Content Pillars · Curated Tech Showcase · Closed-Door CXO Boardrooms
              </div>

              <div className="grid grid-cols-[1fr_1.15fr] gap-4 mb-8 p-4 rounded-2xl border border-white/[0.08] bg-[#020814]/65 max-sm:grid-cols-1">
                <div className="flex flex-col pr-3 border-r border-white/10 max-sm:border-r-0 max-sm:border-b max-sm:pb-3">
                  <strong className="text-[24px] xl:text-[26px] font-[850] leading-none text-[#18d4ff] tracking-tight tabular-nums">
                    20 &amp; 75 Min
                  </strong>
                  <span className="mt-1.5 text-[10.5px] font-mono font-bold uppercase tracking-[1px] text-white/65 leading-snug">
                    Plenary Keynotes &amp; Workshop Clinics
                  </span>
                </div>

                <div className="flex flex-col pl-1 max-sm:pl-0">
                  <strong className="text-[24px] xl:text-[26px] font-[850] leading-none text-[#C0F43C] tracking-tight">
                    6, 9 &amp; 12 sqm
                  </strong>
                  <span className="mt-1.5 text-[10.5px] font-mono font-bold uppercase tracking-[1px] text-white/65 leading-snug">
                    Standardised Concourse Booths
                  </span>
                </div>
              </div>

              <h2 className="m-0 text-white font-[850] leading-[1.1] tracking-[-1.4px] text-[clamp(26px,3.1vw,38px)]">
                Put your enterprise solution directly before{" "}
                <GradientText>qualified banking procurement committees</GradientText>
              </h2>

              <p className="m-0 mt-4 text-white/75 text-[15.5px] leading-[1.65]">
                Commercial partnerships are structured around 20-minute plenary keynotes, exclusive 75-minute workshop clinics, standardised 6 sqm, 9 sqm, and 12 sqm concourse booths, and private 15-buyer CXO closed-door boardrooms.
              </p>
            </div>

            <div className="mt-9 pt-6 border-t border-white/[0.08]">
              <a
                href="/banking/sponsorship-enquiry/"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-[15px] font-extrabold text-[#06111F] [color:#06111F!important] bg-[#18d4ff] shadow-[0_8px_24px_rgba(24,212,255,0.25)] hover:shadow-[0_12px_32px_rgba(24,212,255,0.45)] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer max-sm:w-full"
              >
                Enquire About Sponsorship
                <svg
                  className="w-4 h-4 flex-shrink-0 text-[#06111F]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.8"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
