"use client";

import { useState } from "react";
import { GradientText } from "../../components/Shared";

export function AIMatchmakingContent() {
  const [selectedFocus, setSelectedFocus] = useState<string>("Real-Time Fraud & AML");

  const focusAreas = [
    "Real-Time Fraud & AML",
    "Agentic Servicing & CX",
    "Risk & Credit Underwriting",
    "Model Risk & Governance",
    "Core Banking Modernisation",
    "Cloud & Data Sovereignty",
    "Open Finance & Instant Payments",
    "Wealth & Asset Management",
    "InsurTech & Claims Automation"
  ];

  return (
    <div className="relative w-full text-white font-sans">
      <section 
        className="relative net-inner-hero pt-[220px] pb-24 overflow-hidden bg-[#08121E] border-b-2 border-[#0069B8]"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(8,18,30,0.96) 0%, rgba(8,18,30,0.8) 52%, rgba(8,18,30,0.35) 100%), url('/banking/images/networking/ai-matchmaking-bg.webp')`,
          backgroundPosition: 'right center',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="w-[min(1172px,calc(100%-48px))] max-sm:w-[calc(100%-32px)] mx-auto relative z-10 text-left flex flex-col items-start">
          <div className="max-w-[620px] w-full">
            <span className="text-[#009EAD] text-[12px] uppercase tracking-[0.14em] font-bold block mb-3">
              AI-Powered Matchmaking
            </span>
            <h1 className="font-heading font-bold text-white leading-[1.06] tracking-[-0.02em] text-[clamp(40px,5.2vw,64px)] m-0">
              Meet the Right People. <br />
              <GradientText tone="teal">Every Time.</GradientText>
            </h1>
            <p className="m-0 mt-6 text-white/80 text-[18px] leading-relaxed max-sm:text-[15px]">
              Set your goals once. Our AI reads your role, interests, and intent — then surfaces the connections most likely to matter. No cold introductions. No wasted handshakes.
            </p>

            <div className="mt-8 w-full text-left">
              <span className="block text-[11px] uppercase tracking-[0.14em] font-bold text-white/60 mb-4">
                Pick your focus areas — AI does the rest
              </span>
              <div className="flex flex-wrap gap-[10px] max-w-[620px]">
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
                    <span className="leading-none whitespace-nowrap">
                      {area}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Right People. Real Connections. Section */}
      <section className="relative py-24 bg-[#F7F9FC]">
        <div className="w-[min(1172px,calc(100%-48px))] max-sm:w-[calc(100%-32px)] mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16 max-w-[760px] mx-auto">
            <span className="px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-[0.14em] bg-white text-[#0069B8] border border-[#0069B8]/25 mb-5 inline-block">
              AI Powered Platform · KonfHub
            </span>
            <h2 className="font-heading font-bold text-[#08121E] leading-tight tracking-[-0.02em] text-[clamp(32px,4vw,44px)] m-0">
              Right People. <GradientText tone="blue">Real Connections.</GradientText>
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-8 max-[980px]:grid-cols-1 max-sm:gap-6">
            
            {/* Card 1: For Attendees */}
            <div className="p-10 rounded-[24px] border border-[#0069B8]/52 border-t-4 border-t-[#F15928] bg-[#0D1B2E] shadow-[0_18px_40px_rgba(8,18,30,0.18)] transition-all duration-300 relative group overflow-hidden max-sm:p-6">
              <span className="inline-flex items-center gap-2 px-[14px] py-[6px] rounded-full text-[12.5px] font-bold bg-[#F15928] text-white mb-6">
                <img 
                  src="/banking/images/networking/Icon.webp" 
                  alt="Attendees" 
                  className="w-[14px] h-[14px] object-contain brightness-0 invert" 
                />
                For Attendees
              </span>
              <h3 className="font-heading m-0 text-white font-bold text-[26px] tracking-tight mb-8">
                Meet the right people, not just more people
              </h3>
              
              <div className="flex flex-col gap-6">
                <div className="flex gap-4 items-start">
                  <img
                    src="/banking/icons/attendee-app/tick-1.webp"
                    alt="Checkmark Icon"
                    className="w-[24px] h-[24px] object-contain flex-none"
                  />
                  <p className="m-0 text-white/80 text-[15px] leading-relaxed">Get personalised recommendations based on banking domain, regulatory focus, and procurement goals</p>
                </div>
                <div className="flex gap-4 items-start">
                  <img
                    src="/banking/icons/attendee-app/tick-1.webp"
                    alt="Checkmark Icon"
                    className="w-[24px] h-[24px] object-contain flex-none"
                  />
                  <p className="m-0 text-white/80 text-[15px] leading-relaxed">Have meaningful, high-quality conversations instead of random networking</p>
                </div>
                <div className="flex gap-4 items-start">
                  <img
                    src="/banking/icons/attendee-app/tick-1.webp"
                    alt="Checkmark Icon"
                    className="w-[24px] h-[24px] object-contain flex-none"
                  />
                  <p className="m-0 text-white/80 text-[15px] leading-relaxed">Leave with valuable connections and real opportunities</p>
                </div>
              </div>
            </div>

            {/* Card 2: For Sponsors & Exhibitors */}
            <div className="p-10 rounded-[24px] border border-[#0069B8]/52 border-t-4 border-t-[#009EAD] bg-[#0D1B2E] shadow-[0_18px_40px_rgba(8,18,30,0.18)] transition-all duration-300 relative group overflow-hidden max-sm:p-6">
              <span className="inline-flex items-center gap-2 px-[14px] py-[6px] rounded-full text-[12.5px] font-bold bg-[#0069B8] text-white mb-6">
                <img 
                  src="/banking/icons/attendee-app/exhibitor.webp" 
                  alt="Sponsors & Exhibitors" 
                  className="w-[14px] h-[14px] object-contain brightness-0 invert" 
                />
                For Sponsors &amp; Exhibitors
              </span>
              <h3 className="font-heading m-0 text-white font-bold text-[26px] tracking-tight mb-8">
                Connect with high-intent, relevant prospects
              </h3>
              
              <div className="flex flex-col gap-6">
                <div className="flex gap-4 items-start">
                  <img
                    src="/banking/icons/attendee-app/tick-2.webp"
                    alt="Checkmark Icon"
                    className="w-[24px] h-[24px] object-contain flex-none"
                  />
                  <p className="m-0 text-white/80 text-[15px] leading-relaxed">Focus on quality leads, not just volume</p>
                </div>
                <div className="flex gap-4 items-start">
                  <img
                    src="/banking/icons/attendee-app/tick-2.webp"
                    alt="Checkmark Icon"
                    className="w-[24px] h-[24px] object-contain flex-none"
                  />
                  <p className="m-0 text-white/80 text-[15px] leading-relaxed">Maximise ROI through pre-qualified 1-on-1 interactions</p>
                </div>
                <div className="flex gap-4 items-start">
                  <img
                    src="/banking/icons/attendee-app/tick-2.webp"
                    alt="Checkmark Icon"
                    className="w-[24px] h-[24px] object-contain flex-none"
                  />
                  <p className="m-0 text-white/80 text-[15px] leading-relaxed">Increase booth engagement via targeted attendee recommendations</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}