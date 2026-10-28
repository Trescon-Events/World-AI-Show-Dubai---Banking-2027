"use client";

import { Counter, GradientText } from "../Shared";

const seriesCredibilityStats = [
  { end: 48, suffix: "", label: "Completed World AI Show editions across four continents" },
  { end: 42000, suffix: "+", label: "C-level executives and enterprise decision-makers convened" },
  { end: 2600, suffix: "+", label: "Expert speakers and global technology authorities hosted" },
  { end: 4, suffix: "", label: "Continents across the global World AI Show footprint" },
];

export function OrganizerSection() {
  return (
    <section className="relative py-[104px] pt-[80px] bg-[#020713] overflow-hidden" id="organizer">
      <div className="w-[min(1114px,calc(100%-48px))] mx-auto max-sm:w-[min(100%-32px,1114px)] space-y-12">
        {/* S11 · Twin Closing CTA Bands (Moved above Trescon section & top lines removed per Page 11) */}
        <div className="grid grid-cols-2 gap-6 max-[980px]:grid-cols-1">
          {/* Band 1: Delegate Pass */}
          <div
            data-aos="fade-right"
            data-aos-delay="100"
            className="flex flex-col justify-between p-8 rounded-[24px] border border-white/15 bg-gradient-to-br from-[#06182e] via-[#041022] to-[#030917] shadow-[0_20px_50px_rgba(0,0,0,0.45)]"
          >
            <div>
              <h3 className="m-0 mb-6 text-white font-[850] text-[clamp(24px,2.8vw,32px)] leading-[1.15] tracking-[-0.8px]">
                Be in the room where 2027s banking AI architecture gets finalised
              </h3>
            </div>
            <div>
              <a
                href="/banking/attend/delegate/"
                className="inline-flex items-center justify-center gap-2 h-[50px] px-7 rounded-full font-extrabold text-[15px] text-[#06111F] [color:#06111F!important] bg-[#C0F43C] hover:shadow-[0_0_24px_rgba(192,244,60,0.4)] transition-all duration-200"
              >
                Apply for a Delegate Pass →
              </a>
            </div>
          </div>

          {/* Band 2: Sponsorship */}
          <div
            data-aos="fade-left"
            data-aos-delay="200"
            className="flex flex-col justify-between p-8 rounded-[24px] border border-white/15 bg-gradient-to-br from-[#06182e] via-[#041022] to-[#030917] shadow-[0_20px_50px_rgba(0,0,0,0.45)]"
          >
            <div>
              <h3 className="m-0 mb-6 text-white font-[850] text-[clamp(24px,2.8vw,32px)] leading-[1.15] tracking-[-0.8px]">
                Put your enterprise solution directly before qualified banking procurement committees
              </h3>
            </div>
            <div>
              <a
                href="/banking/sponsorship-enquiry/"
                className="inline-flex items-center justify-center gap-2 h-[50px] px-7 rounded-full font-extrabold text-[15px] text-white border border-[#18d4ff]/60 bg-[#18d4ff]/12 hover:bg-[#18d4ff] hover:text-[#06111F] hover:[color:#06111F!important] transition-all duration-200"
              >
                Enquire About Sponsorship →
              </a>
            </div>
          </div>
        </div>

        {/* S10 · Credibility & Series Heritage */}
        <div
          data-aos="fade-up"
          className="p-9 sm:p-11 rounded-[28px] border border-white/10 bg-gradient-to-b from-[#061428]/90 via-[#040d1d]/95 to-[#030915]/95 shadow-[0_24px_60px_rgba(0,0,0,0.45)]"
        >
          <div className="text-center mb-10">
            <h2 className="text-center font-[850] text-white text-[clamp(28px,3.8vw,46px)] leading-[1.08] tracking-[-1.5px] max-w-[900px] mx-auto mb-5">
              48 global editions. <GradientText>The world&apos;s longest-running enterprise AI series.</GradientText>
            </h2>
            <p className="max-w-[820px] mx-auto text-white/75 text-[18px] leading-[1.6]">
              World AI Show | BFSI | Dubai 2027 is organised by Trescon, bringing an unrivalled international pedigree in artificial intelligence executive convening.
            </p>
          </div>

          <div className="grid grid-cols-4 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1">
            {seriesCredibilityStats.map((item) => (
              <div
                key={item.label}
                className="p-6 rounded-2xl border border-white/10 bg-white/[0.025] hover:border-[#C0F43C]/45 hover:bg-white/[0.04] transition-all duration-300 text-center"
              >
                <strong className="block text-[#C0F43C] font-[850] text-[clamp(32px,3.5vw,42px)] leading-none mb-3">
                  <Counter end={item.end} suffix={item.suffix} />
                </strong>
                <span className="block text-white/75 font-mono text-[12px] uppercase tracking-[1.2px] leading-relaxed font-semibold">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Main Organizer Attribution Panel */}
        <div
          data-aos="zoom-in-up"
          className="grid grid-cols-[0.68fr_1fr] gap-[56px] items-center min-h-[240px] p-[48px_56px] border border-white/10 border-t-[#00CEFF]/60 rounded-[28px] backdrop-blur-[16px] shadow-[0_16px_48px_rgba(0,0,0,0.4),0_0_32px_rgba(192,244,60,0.04)] max-[980px]:grid-cols-1 max-sm:p-[34px_22px] max-sm:gap-[32px]"
          style={{
            background:
              "linear-gradient(104.71deg, rgba(0, 206, 255, 0.12) 0%, rgba(192, 244, 60, 0.054) 100%), rgba(4, 14, 34, 0.8)",
          }}
        >
          <div className="flex flex-col">
            <span className="text-white/74 font-mono text-[12px] uppercase tracking-[3px] select-none">
              Organised by Trescon
            </span>
            <img
              className="block mt-[12px] h-auto object-contain select-none"
              style={{ width: "55%" }}
              src="/banking/logos/Trescon-org.svg"
              alt="Trescon"
              width={270}
              height={80}
            />
            <h3 className="mt-6 text-white font-[850] text-[clamp(22px,2.5vw,30px)] leading-[1.15] tracking-[-0.8px]">
              Day 1 of the March Dubai Cluster · DIFC District, Dubai.
            </h3>
          </div>

          <div className="flex flex-col">
            <p className="m-0 text-[#a4adbd] text-[16px] leading-[1.65]">
              World AI Show | BFSI | Dubai 2027 is organised by Trescon. Positioned as Day 1 of the March Dubai Cluster (paired back-to-back with AI in Healthcare &amp; Life Sciences on 25 March 2027), the forum shares enterprise venue infrastructure while maintaining a strictly dedicated banking P&amp;L, regulatory agenda, and pre-qualified financial services buyer audience.
            </p>

            <a
              href="https://www.tresconglobal.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 mt-7 text-[#C0F43C] font-extrabold text-[15px] hover:underline"
            >
              Learn more about Trescon
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-3.5 h-3.5 object-contain"
                aria-hidden="true"
              >
                <path
                  d="M7 17L17 7M17 7H7M17 7V17"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
