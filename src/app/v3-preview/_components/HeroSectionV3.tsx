"use client";

import { ButtonV3, GradientText, V3_BASE } from "./SharedV3";

export function HeroSectionV3() {
  return (
    <section
      className="hero-bg relative min-h-[835px] -mt-[102px] grid place-items-center overflow-hidden text-center max-[980px]:min-h-[780px] max-sm:-mt-[71px] max-sm:min-h-[740px]"
      id="home"
    >
      {/* Background Video Layer */}
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
      <div className="w-[min(1172px,calc(100%-48px))] max-sm:w-[calc(100%-32px)] relative z-10 mx-auto pt-[220px] lg:pt-[246px] pb-16 max-sm:pt-[175px] max-sm:pb-12 flex flex-col items-center">
        {/* Hero Event Logo Lockup */}
        <img
          data-aos="fade-down"
          data-aos-delay="50"
          src="/banking/images/v3-preview/wais-27-bfsi.svg"
          alt="World AI Show | Banking, Financial Services & Insurance · 24 March 2027 · Dubai, UAE · Middle East"
          width={430}
          height={174}
          className="w-[min(330px,84vw)] sm:w-[390px] lg:w-[430px] h-auto object-contain mx-auto mb-6 select-none"
        />

        {/* Hero Title */}
        <h1
          data-aos="fade-up"
          data-aos-delay="100"
          className="max-w-[1040px] mx-auto text-white font-bold leading-[1.15] tracking-[-0.01em] text-[clamp(36px,4.5vw,57px)] text-center mb-5"
        >
          <span className="block">From AI Pilots to</span>
          <span className="block">
            <GradientText tone="teal">Proven Financial Performance.</GradientText>
          </span>
        </h1>

        {/* Standfirst */}
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="max-w-[850px] mx-auto text-[#F7F9FC] text-[clamp(15px,1.25vw,17px)] font-normal leading-[1.62] text-center mb-2"
        >
          A dedicated executive decision forum convening 300–400 C-suite banking, insurance, risk, and regulatory leaders across the UAE, GCC, and selected African markets to shape architecture, fraud defence, and procurement.
        </p>

        {/* Hero CTA Actions */}
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="flex justify-center flex-wrap gap-3.5 mt-7 max-sm:flex-col max-sm:items-center max-sm:gap-3.5 max-sm:w-full max-sm:max-w-[340px]"
        >
          <ButtonV3 href={`${V3_BASE}/attend/sponsor/`} showArrow={true}>
            Explore Commercial Sponsorship
          </ButtonV3>
          <ButtonV3 href={`${V3_BASE}/attend/delegate/`} variant="outline" showArrow={true}>
            Buy Tickets
          </ButtonV3>
        </div>
      </div>
    </section>
  );
}
