"use client";

export function SpeakerCallToStage() {
  return (
    <section className="relative py-[104px] bg-[#F7F9FC] text-[#334155] border-t border-[#0069B8]/15 overflow-hidden max-sm:py-[72px]" id="call-for-speakers">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-[radial-gradient(circle,rgba(0,105,184,0.06),transparent_60%)] pointer-events-none" />

      <div className="relative z-10 w-[min(1172px,calc(100%-48px))] mx-auto max-sm:w-[calc(100%-32px)]">
        {/* Centered section heading */}
        <h2 className="font-heading text-center font-bold text-[#08121E] leading-[1.08] tracking-[-0.02em] text-[clamp(34px,4.5vw,48px)] mb-[56px]">
          Take the Stage at{" "}
          <span className="text-[#0069B8]">
            World AI Show
          </span>
        </h2>

        {/* Two-column content */}
        <div className="grid grid-cols-[1.12fr_0.88fr] gap-[66px] items-center max-[980px]:grid-cols-1 max-[980px]:gap-[48px] mb-12">
          <div>
            <h3 className="font-heading m-0 text-[#08121E] font-bold text-[28px] leading-tight mb-4 max-sm:text-[23px]">
              Share Your Thoughts on The Future of Banking &amp; Finance
            </h3>
            <p className="m-0 text-[#334155] text-[16px] leading-[1.65] mb-5">
              We invite senior financial institutions and insurance leadership to deliver evidence-backed case studies examining real-world deployment challenges, pilot lessons, and verified operating outcomes.
            </p>
            <p className="m-0 text-[#334155] text-[16px] leading-[1.65] mb-8">
              Taking place on 24 March 2027 at DIFC District, the forum prioritises audited execution under CBUAE and DFSA oversight across our four core industry pillars.
            </p>

            {/* Value Highlights */}
            <div className="p-7 border border-[#0069B8]/22 border-t-4 border-t-[#F15928] rounded-[16px] bg-white shadow-[0_12px_32px_rgba(8,18,30,0.06)]">
              <strong className="block text-[#0069B8] text-[12px] font-bold uppercase tracking-[0.14em] mb-5">
                Why join the Banking Faculty in Dubai, UAE:
              </strong>
              <ul className="m-0 pl-0 list-none flex flex-col gap-5">
                <li className="flex items-start gap-3.5 text-[#334155] text-[15px]">
                  <span className="w-8 h-8 rounded-full bg-[#0069B8] flex items-center justify-center shrink-0 mt-0.5">
                    <img
                      src="/banking/images/agenda/icon-global.webp"
                      alt="Global icon"
                      className="w-4 h-4 object-contain brightness-0 invert select-none"
                    />
                  </span>
                  <span>
                    <strong className="text-[#08121E]">48 Global Editions of Authority:</strong> Speak on the flagship Middle East sector platform organised by Trescon, backed by 48 global editions across four continents.
                  </span>
                </li>
                <li className="flex items-start gap-3.5 text-[#334155] text-[15px]">
                  <span className="w-8 h-8 rounded-full bg-[#0069B8] flex items-center justify-center shrink-0 mt-0.5">
                    <img
                      src="/banking/images/agenda/icon-speaker.webp"
                      alt="Speaker icon"
                      className="w-4 h-4 object-contain brightness-0 invert select-none"
                    />
                  </span>
                  <span>
                    <strong className="text-[#08121E]">300+ Pre-Qualified C-Suite Leaders (80%+ Buy-Side):</strong> Address senior GCC banking, insurance, risk, and regulatory decision-makers actively locking down 2027 architectures.
                  </span>
                </li>
                <li className="flex items-start gap-3.5 text-[#334155] text-[15px]">
                  <span className="w-8 h-8 rounded-full bg-[#0069B8] flex items-center justify-center shrink-0 mt-0.5">
                    <img
                      src="/banking/images/agenda/icon-lightning.webp"
                      alt="Lightning bolt icon"
                      className="w-4 h-4 object-contain brightness-0 invert select-none"
                    />
                  </span>
                  <span>
                    <strong className="text-[#08121E]">Clinical, Peer-Led Formats:</strong> Lead 20-minute buyer evidence keynotes, regulatory risk plenaries, 75-minute breakout clinics, or Block 6 Outcome Roundtables.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Visual container */}
          <div className="relative overflow-hidden border border-[#0069B8]/25 rounded-[22px] shadow-[0_18px_40px_rgba(8,18,30,0.12)]">
            <div className="absolute inset-0 bg-gradient-to-t from-[#08121E]/35 via-transparent to-transparent pointer-events-none z-1" />
            <img
              src="/banking/images/agenda/accelerating-malaysia-audience.webp"
              alt="Speaker presenting on stage at World AI Show Dubai"
              className="w-full h-[360px] md:h-[480px] filter saturate-[0.96] brightness-[0.96]"
              style={{ objectFit: "cover", objectPosition: "top" }}
              loading="lazy"
            />
          </div>
        </div>

        {/* Centered bottom CTAs */}
        <div className="flex justify-center gap-4 mt-8 max-sm:flex-col max-sm:items-center">
          <a
            href="/banking/speaker-enquiry/"
            className="bb-btn-primary group"
          >
            Apply to Join the Dubai Banking Faculty
            <svg
              className="bb-btn-arrow w-4 h-4 flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.8"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
