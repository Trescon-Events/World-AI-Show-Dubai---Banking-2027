"use client";

import { useState } from "react";
import { HeaderV3 } from "../../_components/HeaderV3";
import { FooterV3 } from "../../_components/FooterV3";
import { GradientText } from "../../_components/SharedV3";

const subNav = ["Overview", "Attendee APP", "AI Matchmaking", "Photo Gallery"];

const focusAreas = [
  "Fighting Financial Crime & AML",
  "Responsible AI & CBUAE / DFSA Compliance",
  "Intelligent Banking Operations",
  "Smarter Lending & Credit Underwriting",
  "Insurance & FNOL Claims Automation",
  "Future Payments (Aani & AlTareq)",
  "Sovereign Cloud & Mainframe Decoupling",
  "Third-Party Vendor AI Governance",
  "Bounded Agentic Workflows",
];

export default function AIMatchmakingPageV3() {
  const [selectedFocus, setSelectedFocus] = useState<string>("Fighting Financial Crime & AML");

  return (
    <main className="page-networking relative min-h-screen bg-[#F7F9FC] text-[#334155] font-sans overflow-x-hidden">
      <HeaderV3 activeItem="Networking" subNavItems={subNav} activeSubNavItem="AI Matchmaking" />

      <div className="relative w-full text-white font-sans">
        <section
          className="relative net-inner-hero pt-[220px] pb-24 overflow-hidden bg-[#08121E] border-b-2 border-[#0069B8]"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(8,18,30,0.96) 0%, rgba(8,18,30,0.8) 52%, rgba(8,18,30,0.35) 100%), url('/banking/images/networking/ai-matchmaking-bg.webp')`,
            backgroundPosition: "right center",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="w-[min(1172px,calc(100%-48px))] max-sm:w-[calc(100%-32px)] mx-auto relative z-10 text-left flex flex-col items-start">
            <div className="max-w-[660px] w-full">
              <span className="text-[#009EAD] text-[12px] uppercase tracking-[0.14em] font-bold block mb-3">
                AI-Powered Matchmaking · 50+ Bilateral Meetings
              </span>
              <h1 className="font-heading font-bold text-white leading-[1.06] tracking-[-0.02em] text-[clamp(40px,5.2vw,64px)] m-0">
                Algorithmic Buyer–Supplier <br />
                <GradientText tone="teal">Scheduling.</GradientText>
              </h1>
              <p className="m-0 mt-6 text-white/80 text-[18px] leading-relaxed max-sm:text-[15px]">
                Set your 2027 operational mandates once. Our matchmaking engine maps your role, regulatory jurisdiction, and procurement priorities across all six BFSI pillars to pre-schedule high-intent 1-on-1 bilateral meetings.
              </p>

              <div className="mt-8 w-full text-left">
                <span className="block text-[11px] uppercase tracking-[0.14em] font-bold text-white/60 mb-4">
                  Select operational mandates — AI schedules the bilateral matches
                </span>
                <div className="flex flex-wrap gap-[10px] max-w-[660px]">
                  {focusAreas.map((area) => (
                    <button
                      key={area}
                      onClick={() => setSelectedFocus(area)}
                      className={`flex items-center justify-center h-[38px] px-[16px] text-[12px] font-bold uppercase tracking-[0.06em] rounded-full cursor-pointer transition-all duration-200 outline-none select-none ${
                        selectedFocus === area
                          ? "bg-[#F15928] text-white border border-[#F15928] shadow-[0_8px_20px_rgba(241,89,40,0.3)]"
                          : "text-white/85 border border-[#0069B8]/55 bg-[#0D1B2E] hover:border-[#009EAD] hover:text-white"
                      }`}
                    >
                      <span className="leading-none whitespace-nowrap">{area}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-24 bg-[#F7F9FC]">
          <div className="w-[min(1172px,calc(100%-48px))] max-sm:w-[calc(100%-32px)] mx-auto">
            <div className="text-center mb-16 max-w-[760px] mx-auto">
              <span className="px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-[0.14em] bg-white text-[#0069B8] border border-[#0069B8]/25 mb-5 inline-block">
                Algorithmic Matchmaking · KonfHub
              </span>
              <h2 className="font-heading font-bold text-[#08121E] leading-tight tracking-[-0.02em] text-[clamp(32px,4vw,44px)] m-0">
                Right Decision-Makers. <GradientText tone="blue">Verified Intent.</GradientText>
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-8 max-[980px]:grid-cols-1 max-sm:gap-6">
              <div className="p-10 rounded-[24px] border border-[#0069B8]/52 border-t-4 border-t-[#F15928] bg-[#0D1B2E] shadow-[0_18px_40px_rgba(8,18,30,0.18)] max-sm:p-6">
                <span className="inline-flex items-center gap-2 px-[14px] py-[6px] rounded-full text-[12.5px] font-bold bg-[#F15928] text-white mb-6">
                  <img
                    src="/banking/images/networking/Icon.webp"
                    alt="Buyers"
                    className="w-[14px] h-[14px] object-contain brightness-0 invert"
                  />
                  For Institutional Buyers (80%+)
                </span>
                <h3 className="font-heading m-0 text-white font-bold text-[26px] tracking-tight mb-8">
                  Evaluate vetted architectures efficiently
                </h3>

                <div className="flex flex-col gap-6">
                  <div className="flex gap-4 items-start">
                    <img
                      src="/banking/icons/attendee-app/tick-1.webp"
                      alt=""
                      className="w-[24px] h-[24px] object-contain flex-none"
                    />
                    <p className="m-0 text-white/80 text-[15px] leading-relaxed">
                      Match with specialist banking, insurance, fraud, and sovereign cloud providers aligned with CBUAE and DFSA expectations
                    </p>
                  </div>
                  <div className="flex gap-4 items-start">
                    <img
                      src="/banking/icons/attendee-app/tick-1.webp"
                      alt=""
                      className="w-[24px] h-[24px] object-contain flex-none"
                    />
                    <p className="m-0 text-white/80 text-[15px] leading-relaxed">
                      Benchmark peer deployment roadmaps across 25+ UAE banks/insurers and 15+ GCC &amp; African financial groups
                    </p>
                  </div>
                  <div className="flex gap-4 items-start">
                    <img
                      src="/banking/icons/attendee-app/tick-1.webp"
                      alt=""
                      className="w-[24px] h-[24px] object-contain flex-none"
                    />
                    <p className="m-0 text-white/80 text-[15px] leading-relaxed">
                      Accelerate vendor shortlisting with structured 1-on-1 bilateral briefings
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-10 rounded-[24px] border border-[#0069B8]/52 border-t-4 border-t-[#009EAD] bg-[#0D1B2E] shadow-[0_18px_40px_rgba(8,18,30,0.18)] max-sm:p-6">
                <span className="inline-flex items-center gap-2 px-[14px] py-[6px] rounded-full text-[12.5px] font-bold bg-[#0069B8] text-white mb-6">
                  <img
                    src="/banking/icons/attendee-app/exhibitor.webp"
                    alt="Sponsors"
                    className="w-[14px] h-[14px] object-contain brightness-0 invert"
                  />
                  For Commercial Sponsors
                </span>
                <h3 className="font-heading m-0 text-white font-bold text-[26px] tracking-tight mb-8">
                  50-account wishlist &amp; bilateral meetings
                </h3>

                <div className="flex flex-col gap-6">
                  <div className="flex gap-4 items-start">
                    <img
                      src="/banking/icons/attendee-app/tick-2.webp"
                      alt=""
                      className="w-[24px] h-[24px] object-contain flex-none"
                    />
                    <p className="m-0 text-white/80 text-[15px] leading-relaxed">
                      Align your 50-account target wishlist with active banking, insurance, and risk budget holders
                    </p>
                  </div>
                  <div className="flex gap-4 items-start">
                    <img
                      src="/banking/icons/attendee-app/tick-2.webp"
                      alt=""
                      className="w-[24px] h-[24px] object-contain flex-none"
                    />
                    <p className="m-0 text-white/80 text-[15px] leading-relaxed">
                      Maximise ROI across 60-minute CXO boardrooms (20 buyers) and dedicated matchmaking lounges
                    </p>
                  </div>
                  <div className="flex gap-4 items-start">
                    <img
                      src="/banking/icons/attendee-app/tick-2.webp"
                      alt=""
                      className="w-[24px] h-[24px] object-contain flex-none"
                    />
                    <p className="m-0 text-white/80 text-[15px] leading-relaxed">
                      75% of surveyed generative AI adopters rely on third-party vendor solutions (DFSA AI Survey, 2 November 2026)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <FooterV3 />
    </main>
  );
}
