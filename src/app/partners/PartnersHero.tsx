"use client";

import { GradientText } from "../components/Shared";

export function PartnersHero() {
  return (
    <section
      id="overview"
      className="relative min-h-[520px] flex items-center page-hero-top pb-[76px] overflow-hidden bg-[#08121E] bg-cover bg-[position:center_35%] bg-no-repeat border-b-2 border-[#0069B8] max-sm:min-h-[420px] max-sm:pb-[52px]"
      style={{
        backgroundImage:
          'linear-gradient(90deg, rgba(8, 18, 30, 0.94) 0%, rgba(8, 18, 30, 0.72) 45%, rgba(8, 18, 30, 0.18) 100%), url("/banking/images/sponsors/Partners-logo-banner.webp")',
      }}
    >
      <div className="relative z-10 w-[min(1172px,calc(100%-48px))] max-sm:w-[calc(100%-32px)] mx-auto">
        <h1 className="font-heading m-0 text-white font-bold leading-[1.06] tracking-[-0.02em] text-[clamp(40px,5.2vw,66px)] max-w-[820px]">
          <GradientText tone="teal">Partner With Us</GradientText> at World AI Show
        </h1>
        <p className="max-w-[740px] mt-6 mb-0 text-white/84 text-[19px] leading-relaxed max-sm:text-base">
          Commercial partnerships are structured around plenary keynotes, exclusive workshop clinics, standardised concourse booths, and private CXO closed-door boardrooms.
        </p>
      </div>
    </section>
  );
}
