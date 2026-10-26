"use client";

import { GradientText } from "../components/Shared";

export function PartnersHero() {
  return (
    <section
      id="overview"
      className="relative min-h-[680px] flex items-center page-hero-top pb-[90px] overflow-hidden bg-cover bg-[position:right_center] bg-no-repeat after:absolute after:inset-x-0 after:bottom-0 after:h-24 after:bg-gradient-to-t after:from-[#020814] after:to-transparent after:z-0 max-sm:min-h-[540px] max-sm:pb-[60px]"
      style={{
        backgroundImage:
          'linear-gradient(90deg, rgba(2, 7, 19, 0.92) 0%, rgba(2, 7, 19, 0.62) 42%, rgba(2, 7, 19, 0.1) 100%), url("/banking/images/sponsors/Partners-logo-banner.webp")',
      }}
    >
      <div className="relative z-10 w-[min(1114px,calc(100%-48px))] mx-auto">
        <span className="inline-flex items-center mb-5 px-3.5 py-1.5 border border-cyan/30 rounded-full text-cyan font-mono text-[12px] uppercase tracking-[2px] bg-cyan/5">
          Partners &amp; Sponsors · DIFC District, Dubai
        </span>
        <h1 className="m-0 text-white font-[850] leading-[1.06] tracking-[-2px] text-[clamp(42px,5.4vw,72px)] max-w-[820px]">
          <GradientText>Partner</GradientText> at World AI Show Dubai
        </h1>
        <p className="max-w-[740px] mt-6 mb-0 text-white/84 text-[19px] leading-relaxed max-sm:text-base">
          Commercial partnerships are structured around 20-minute plenary keynotes, exclusive 75-minute workshop clinics, standardised 6 sqm, 9 sqm, and 12 sqm concourse booths, and private 15-buyer CXO closed-door boardrooms.
        </p>
      </div>
    </section>
  );
}
