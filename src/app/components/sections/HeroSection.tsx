"use client";

import { Button, GradientText } from "../Shared";

export function HeroSection({
  description = "A premier executive forum dedicated to the operational realities of deploying artificial intelligence across regulated banking, insurance, asset management, and payment operations, convening 300+ C-suite leaders and actively locking down the architecture, fraud defense, and core procurement for the future.",
}: {
  description?: string;
} = {}) {
  return (
    <section
      className="hero-bg relative min-h-[820px] -mt-[102px] grid place-items-center overflow-hidden text-center max-[980px]:min-h-[760px] max-sm:-mt-[71px] max-sm:min-h-[720px]"
      id="home"
    >
      {/* Background Video Layer (from worldaishow.com/dubai header) */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-100 brightness-[1.45] contrast-[1.08] z-0"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      >
        <source src="/banking/videos/wais-dubai-hero-banner.mp4" type="video/mp4" />
        <source src="/banking/videos/wais-mumbai-hero-banner.webm" type="video/webm" />
      </video>

      {/* Dark Slate Tint Overlay */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(8, 18, 30, 0.48) 0%, rgba(8, 18, 30, 0.78) 68%, #08121E 100%)",
        }}
        aria-hidden="true"
      />

      {/* Hero Content */}
      <div className="w-[min(1172px,calc(100%-48px))] max-sm:w-[calc(100%-32px)] relative z-10 mx-auto pt-[220px] lg:pt-[240px] pb-16 max-sm:pt-[175px] max-sm:pb-12 flex flex-col items-center">
        {/* Event Lockup Sub-label */}
        <p
          data-aos="fade-down"
          data-aos-delay="50"
          className="text-white/95 font-sans text-[14px] sm:text-[17px] lg:text-[19px] uppercase tracking-[0.14em] font-bold mb-5"
        >
          World AI Show | BFSI
        </p>

        {/* Hero Title */}
        <h1
          data-aos="fade-up"
          data-aos-delay="100"
          className="max-w-[1040px] mx-auto text-white font-bold leading-[1.15] tracking-[-0.01em] text-[clamp(36px,4.5vw,57px)] text-center mb-5"
        >
          <span className="block">Controlled AI deployment for</span>
          <span className="block"><GradientText tone="teal">regulated financial operations.</GradientText></span>
        </h1>

        {/* Standfirst */}
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="max-w-[820px] mx-auto text-[#F7F9FC] text-[clamp(15px,1.25vw,17px)] font-normal leading-[1.62] text-center mb-8"
        >
          {description}
        </p>

        <div data-aos="fade-in" data-aos-delay="250" className="w-full max-w-[780px] border-t border-[#0069B8]/48 mt-1" />

        {/* Event Meta Footer */}
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="grid grid-cols-[max-content_max-content_max-content] justify-center items-center gap-6 w-full max-w-[820px] mx-auto mt-7 text-center max-[980px]:grid-cols-1 max-sm:gap-3 max-sm:mt-5"
        >
          {/* Column 1: Dates */}
          <div className="pr-6 border-r border-white/28 text-center max-[980px]:border-r-0 max-[980px]:pr-0 max-[980px]:pb-3.5 max-[980px]:border-b max-[980px]:border-white/22 max-sm:w-full">
            <strong className="block font-display text-[34px] font-semibold text-white leading-none max-sm:text-[26px]">
              <GradientText tone="teal">24</GradientText>
            </strong>
            <span className="block mt-2 text-[12.5px] font-bold text-white/80 uppercase tracking-[0.1em] max-sm:text-[12px] max-sm:mt-1.5">
              MARCH 2027
            </span>
          </div>

          {/* Column 2: Venue */}
          <div className="pr-6 border-r border-white/28 text-center max-[980px]:border-r-0 max-[980px]:pr-0 max-[980px]:pb-3.5 max-[980px]:border-b max-[980px]:border-white/22 max-sm:w-full">
            <strong className="block font-display text-[34px] font-semibold text-white leading-none max-sm:text-[26px]">
              Dubai, <GradientText tone="teal">UAE</GradientText>
            </strong>
            <span className="block mt-2 text-[12.5px] font-bold text-white/80 uppercase tracking-[0.1em] max-sm:text-[12px] max-sm:mt-1.5">
              DAY 1 · MARCH DUBAI CLUSTER
            </span>
          </div>

          {/* Column 3: Duration */}
          <div className="text-center max-sm:w-full">
            <strong className="block font-display text-[34px] font-semibold text-white leading-none max-sm:text-[26px]">
              1-<GradientText tone="teal">Day</GradientText>
            </strong>
            <span className="block mt-2 text-[12.5px] font-bold text-white/80 uppercase tracking-[0.1em] max-sm:text-[12px] max-sm:mt-1.5">
              EXECUTIVE DECISION FORUM
            </span>
          </div>
        </div>

        {/* Hero CTA Actions */}
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="flex justify-center flex-wrap gap-3.5 mt-9 max-sm:flex-col max-sm:items-center max-sm:gap-3.5 max-sm:w-full max-sm:max-w-[340px]"
        >
          <Button href="/banking/attend/sponsor/" showArrow={true}>
            Explore Commercial Sponsorship
          </Button>
          <Button href="/banking/attend/delegate/" variant="outline" showArrow={true}>
            Apply for Business Pass
          </Button>
        </div>
      </div>
    </section>
  );
}
