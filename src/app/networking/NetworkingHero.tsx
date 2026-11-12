"use client";

import { GradientText } from "../components/Shared";

export function NetworkingHero() {
  return (
    <section id="overview" className="relative min-h-[460px] flex items-start page-hero-top pb-[78px] overflow-hidden bg-[#08121E] bg-cover bg-center bg-no-repeat border-b-2 border-[#0069B8] max-sm:min-h-[400px] max-sm:pb-[50px]"
      style={{
        backgroundImage: 'linear-gradient(90deg, rgba(8,18,30,0.96) 0%, rgba(8,18,30,0.78) 47%, rgba(8,18,30,0.28) 100%), url("/banking/images/networking/networking-hero-bg.webp")'
      }}
    >
      <div className="relative z-10 w-[min(1172px,calc(100%-48px))] max-sm:w-[calc(100%-32px)] mx-auto">
        <span className="inline-flex items-center mb-5 px-4 py-1.5 border border-[#009EAD]/45 rounded-full text-[#009EAD] text-[12px] font-bold uppercase tracking-[0.14em] bg-[#0D1B2E]">
          High-Value Networking
        </span>
        <h1 className="font-heading m-0 text-white font-bold leading-[1.06] tracking-[-0.02em] text-[clamp(44px,5.4vw,68px)]">
          Where Middle East <br />
          <GradientText tone="teal">banking AI leaders connect.</GradientText>
        </h1>
        <p className="max-w-[700px] mt-6 mb-0 text-white/84 text-[19px] leading-relaxed max-sm:text-base">
          A dedicated networking environment in Dubai, UAE designed to foster institutional partnerships. Connect with central bank regulators, banking CXOs, CROs, CCOs, and enterprise AI architects without spectators.
        </p>
      </div>
    </section>
  );
}
