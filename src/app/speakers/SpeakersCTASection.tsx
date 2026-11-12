"use client";

import React from "react";
import { GradientText } from "../components/Shared";

export function SpeakersCTASection() {
  return (
    <section className="relative py-[104px] max-sm:py-[72px] bg-[#08121E] overflow-hidden border-t-2 border-[#0069B8]" id="cta">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0, 158, 173, 0.16) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 158, 173, 0.16) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse 80% 70% at 50% 50%, black 20%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 50% 50%, black 20%, transparent 100%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[560px] h-[380px] rounded-full bg-[#0069B8]/[0.16] blur-[130px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-[560px] h-[380px] rounded-full bg-[#009EAD]/[0.14] blur-[130px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 w-[min(1172px,calc(100%-48px))] mx-auto max-sm:w-[calc(100%-32px)]">
        <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-7 items-stretch">
          {/* ── Card 1: Business Pass (Pulse Orange Top Rule) ── */}
          <article className="group relative p-10 max-sm:p-7 rounded-[24px] border border-[#0069B8]/52 border-t-4 border-t-[#F15928] bg-[#0D1B2E] shadow-[0_24px_64px_rgba(0,0,0,0.4)] hover:border-[#F15928] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden">
            <div>
              <div className="grid grid-cols-3 gap-3 mb-8 p-4 rounded-2xl border border-[#0069B8]/35 bg-[#08121E]/80 max-sm:grid-cols-1">
                <div className="flex flex-col pr-2 border-r border-[#0069B8]/35 max-sm:border-r-0 max-sm:border-b max-sm:pb-3">
                  <strong className="font-heading text-[24px] xl:text-[26px] font-bold leading-none text-[#F15928] tracking-tight tabular-nums">
                    300+
                  </strong>
                  <span className="mt-1.5 text-[10.5px] font-bold uppercase tracking-[0.08em] text-white/70 leading-snug">
                    C-Suite Leaders
                  </span>
                </div>

                <div className="flex flex-col px-1 border-r border-[#0069B8]/35 max-sm:border-r-0 max-sm:border-b max-sm:pb-3 max-sm:px-0">
                  <strong className="font-heading text-[24px] xl:text-[26px] font-bold leading-none text-[#009EAD] tracking-tight tabular-nums">
                    40+
                  </strong>
                  <span className="mt-1.5 text-[10.5px] font-bold uppercase tracking-[0.08em] text-white/70 leading-snug">
                    Faculty Speakers
                  </span>
                </div>

                <div className="flex flex-col pl-1 max-sm:pl-0">
                  <strong className="font-heading text-[24px] xl:text-[26px] font-bold leading-none text-white tracking-tight">
                    1-Day
                  </strong>
                  <span className="mt-1.5 text-[10.5px] font-bold uppercase tracking-[0.08em] text-white/70 leading-snug">
                    24 Mar 2027
                  </span>
                </div>
              </div>

              <h2 className="font-heading m-0 text-white font-bold leading-[1.12] tracking-[-0.02em] text-[clamp(26px,3.1vw,36px)]">
                Be in the room where{" "}
                <GradientText tone="teal">2027s banking AI architecture gets finalised</GradientText>
              </h2>

              <p className="m-0 mt-4 text-white/80 text-[15.5px] leading-[1.65]">
                Business Pass — by qualification for senior banking, insurance, and financial services executives.
              </p>
            </div>

            <div className="mt-9 pt-6 border-t border-[#0069B8]/30">
              <a
                href="/banking/attend/delegate/"
                className="bb-btn-primary max-sm:w-full"
              >
                Apply for a Business Pass
                <svg
                  className="bb-btn-arrow w-4 h-4 flex-shrink-0"
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

          {/* ── Card 2: Commercial Partnerships (Horizon Teal Top Rule) ── */}
          <article className="group relative p-10 max-sm:p-7 rounded-[24px] border border-[#0069B8]/52 border-t-4 border-t-[#009EAD] bg-[#0D1B2E] shadow-[0_24px_64px_rgba(0,0,0,0.4)] hover:border-[#009EAD] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden">
            <div>
              <div className="grid grid-cols-[1fr_1.15fr] gap-4 mb-8 p-4 rounded-2xl border border-[#0069B8]/35 bg-[#08121E]/80 max-sm:grid-cols-1">
                <div className="flex flex-col pr-3 border-r border-[#0069B8]/35 max-sm:border-r-0 max-sm:border-b max-sm:pb-3">
                  <strong className="font-heading text-[24px] xl:text-[26px] font-bold leading-none text-[#009EAD] tracking-tight tabular-nums">
                    20 &amp; 75 Min
                  </strong>
                  <span className="mt-1.5 text-[10.5px] font-bold uppercase tracking-[0.08em] text-white/70 leading-snug">
                    Plenary Keynotes &amp; Workshop Clinics
                  </span>
                </div>

                <div className="flex flex-col pl-1 max-sm:pl-0">
                  <strong className="font-heading text-[24px] xl:text-[26px] font-bold leading-none text-[#F15928] tracking-tight">
                    6, 9 &amp; 12 sqm
                  </strong>
                  <span className="mt-1.5 text-[10.5px] font-bold uppercase tracking-[0.08em] text-white/70 leading-snug">
                    Standardised Concourse Booths
                  </span>
                </div>
              </div>

              <h2 className="font-heading m-0 text-white font-bold leading-[1.12] tracking-[-0.02em] text-[clamp(26px,3.1vw,36px)]">
                Put your enterprise solution directly before{" "}
                <GradientText tone="teal">qualified banking procurement committees</GradientText>
              </h2>

              <p className="m-0 mt-4 text-white/80 text-[15.5px] leading-[1.65]">
                Commercial partnerships are structured around 20-minute plenary keynotes, exclusive 75-minute workshop clinics, standardised 6 sqm, 9 sqm, and 12 sqm concourse booths, and private 15-buyer CXO closed-door boardrooms.
              </p>
            </div>

            <div className="mt-9 pt-6 border-t border-[#0069B8]/30">
              <a
                href="/banking/sponsorship-enquiry/"
                className="bb-btn-outline-dark max-sm:w-full"
              >
                Enquire About Sponsorship
                <svg
                  className="bb-btn-arrow w-4 h-4 flex-shrink-0"
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
