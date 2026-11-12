"use client";

import { GradientText } from "../components/Shared";

export function SpeakersHero() {
  return (
    <section
      className="relative min-h-[520px] flex items-center page-hero-top pb-[76px] overflow-hidden bg-[#08121E] bg-cover bg-[position:right_center] bg-no-repeat border-b-2 border-[#0069B8] max-sm:min-h-[420px] max-sm:pb-[52px]"
      style={{
        backgroundImage:
          'linear-gradient(90deg, rgba(8, 18, 30, 0.94) 0%, rgba(8, 18, 30, 0.72) 46%, rgba(8, 18, 30, 0.2) 100%), url("/banking/images/speakers/Speaker-banner.webp")',
      }}
    >
      <div className="relative z-10 w-[min(1172px,calc(100%-48px))] max-sm:w-[calc(100%-32px)] mx-auto">
        <h1 className="font-heading m-0 text-white font-bold leading-[1.08] tracking-[-0.02em] text-[clamp(34px,4.5vw,58px)] max-w-[960px] uppercase">
          MEET THE <GradientText tone="teal">AI ARCHITECTS</GradientText> OF THE BANKING AND FINANCIAL SECTOR IN THE MIDDLE EAST
        </h1>
      </div>
    </section>
  );
}

