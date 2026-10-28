"use client";

import { Button, GradientText } from "../Shared";

export function HeroSection() {
  return (
    <section
      className="hero-bg relative min-h-[820px] -mt-[102px] grid place-items-center overflow-hidden text-center max-[980px]:min-h-[760px] max-sm:-mt-[71px] max-sm:min-h-[720px]"
      id="home"
    >
      {/* Background Video Layer (from worldaishow.com/dubai header) */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-100 brightness-[1.15] contrast-[1.12] z-0"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      >
        <source src="/banking/videos/wais-dubai-hero-banner.mp4" type="video/mp4" />
        <source src="/banking/videos/wais-mumbai-hero-banner.webm" type="video/webm" />
      </video>

      {/* Deep Navy / Dark Blue Color Tint Layer (gives the monochrome video the rich blue WAIS tone while keeping subjects visible) */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none mix-blend-multiply"
        style={{
          background:
            "linear-gradient(180deg, rgba(6, 36, 88, 0.72) 0%, rgba(4, 28, 72, 0.65) 55%, rgba(2, 14, 38, 0.88) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Dark Blue Atmospheric Overlay & Smooth Bottom Transition */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 38%, rgba(4, 24, 62, 0.38) 0%, rgba(2, 12, 32, 0.68) 70%, rgba(2, 11, 28, 0.92) 100%), linear-gradient(180deg, rgba(2, 11, 28, 0.35) 0%, rgba(2, 11, 28, 0.20) 55%, rgba(2, 11, 28, 0.95) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Hero Content */}
      <div className="container relative z-10 mx-auto px-6 pt-[220px] lg:pt-[240px] pb-16 max-sm:pt-[175px] max-sm:pb-12 max-sm:px-4 flex flex-col items-center">
        {/* Event Lockup Sub-label */}
        <p className="text-white/95 font-mono text-[14px] sm:text-[17px] lg:text-[19px] uppercase tracking-[2.2px] font-bold mb-5">
          World AI Show | Banking and Financial Services
        </p>

        {/* Hero Title */}
        <h1 className="max-w-[1040px] mx-auto text-white font-[850] leading-[1.08] xl:leading-[72px] tracking-[-1.8px] text-[clamp(34px,4.8vw,66px)] xl:text-[66px] text-center mb-5">
          <span className="block">Controlled AI deployment for</span>
          <span className="block"><GradientText>regulated financial operations.</GradientText></span>
        </h1>

        {/* Standfirst (20px, 33px line-height, 0 tracking, 400 weight, #CBD5E1) */}
        <p className="max-w-[880px] mx-auto text-[#CBD5E1] text-[clamp(15px,1.6vw,19px)] xl:text-[19px] font-normal leading-relaxed xl:leading-[31px] tracking-normal text-center mb-8">
          A premier executive forum dedicated to the operational realities of deploying artificial intelligence across regulated banking, insurance, asset management, and payment operations, convening 300+ C-suite leaders and actively locking down the architecture, fraud defense, and core procurement for the future.
        </p>

        <div className="w-full max-w-[780px] border-t border-white/20 opacity-60 mt-1" />

        {/* Event Meta Footer */}
        <div className="grid grid-cols-[max-content_max-content_max-content] justify-center items-center gap-6 w-full max-w-[820px] mx-auto mt-7 text-center max-[980px]:grid-cols-1 max-sm:gap-3 max-sm:mt-5">
          {/* Column 1: Dates */}
          <div className="pr-6 border-r border-white/27 text-center max-[980px]:border-r-0 max-[980px]:pr-0 max-sm:w-full max-sm:pb-3 max-sm:border-b max-sm:border-white/20">
            <strong className="block text-[34px] font-[850] text-white leading-none max-sm:text-[26px]">
              <GradientText>24</GradientText>
            </strong>
            <span className="block mt-2 text-[13px] font-bold text-white/80 uppercase tracking-[1.5px] max-sm:text-[12px] max-sm:mt-1.5">
              MARCH 2027
            </span>
          </div>

          {/* Column 2: Venue */}
          <div className="pr-6 border-r border-white/27 text-center max-[980px]:border-r-0 max-[980px]:pr-0 max-sm:w-full max-sm:pb-3 max-sm:border-b max-sm:border-white/20">
            <strong className="block text-[34px] font-[850] text-white leading-none max-sm:text-[26px]">
              DIFC District, <GradientText>Dubai</GradientText>
            </strong>
            <span className="block mt-2 text-[13px] font-bold text-white/80 uppercase tracking-[1.5px] max-sm:text-[12px] max-sm:mt-1.5">
              DAY 1 · MARCH DUBAI CLUSTER
            </span>
          </div>

          {/* Column 3: Duration */}
          <div className="text-left max-[980px]:text-center max-sm:w-full">
            <strong className="block text-[34px] font-[850] text-white leading-none max-sm:text-[26px]">
              1-<GradientText>Day</GradientText>
            </strong>
            <span className="block mt-2 text-[13px] font-bold text-white/80 uppercase tracking-[1.5px] max-sm:text-[12px] max-sm:mt-1.5">
              EXECUTIVE DECISION FORUM
            </span>
          </div>
        </div>

        {/* Hero CTA Actions */}
        <div className="flex justify-center flex-wrap gap-3.5 mt-9 max-sm:flex-col max-sm:items-center max-sm:gap-3.5 max-sm:w-full max-sm:max-w-[340px]">
          <Button href="/banking/attend/delegate/" showArrow={true}>
            Apply for Delegate Pass (Complimentary)
          </Button>
          <Button href="/banking/attend/sponsor/" variant="outline" showArrow={true}>
            Explore Commercial Sponsorship
          </Button>
          <a
            href="/banking/agenda/agenda/"
            className="inline-flex items-center justify-center gap-2 min-w-[156px] h-[49px] rounded-full font-extrabold text-sm text-white/85 hover:text-[#18d4ff] border border-white/15 bg-white/5 hover:border-[#18d4ff]/50 transition-all duration-200 px-6"
          >
            View Master Schedule →
          </a>
        </div>
      </div>
    </section>
  );
}
