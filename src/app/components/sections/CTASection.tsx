"use client";

export function CTASection() {
  return (
    <section className="relative py-[92px] bg-[#08121E] border-t-2 border-[#0069B8] overflow-hidden" id="cta">
      <div className="w-[min(1172px,calc(100%-48px))] mx-auto max-sm:w-[calc(100%-32px)] space-y-8">
        {/* Twin closing CTA bands */}
        <div className="grid grid-cols-2 gap-6 max-[980px]:grid-cols-1">
          {/* Band 1: Business Pass */}
          <div className="relative flex flex-col justify-between p-10 max-sm:p-7 rounded-[24px] bg-[#0D1B2E] border border-[#0069B8]/52 overflow-hidden">
            <div>
              <span className="inline-block text-[12px] font-bold uppercase tracking-[0.08em] text-[#009EAD] mb-3">
                Dubai · 24 March 2027 · 1-Day Executive Forum · 300+ Banking Leaders
              </span>
              <h2 className="m-0 font-semibold text-white leading-[1.2] tracking-[-0.01em] text-[clamp(24px,3vw,34px)]">
                Be in the room where regulated banking AI gets decided
              </h2>
            </div>
            <div className="mt-8">
              <a
                href="/banking/attend/delegate"
                className="bb-btn-primary inline-flex items-center gap-2 px-7 py-3.5 text-[15px] font-bold"
              >
                Apply for a Business Pass
                <span className="font-bold">→</span>
              </a>
            </div>
          </div>

          {/* Band 2: Sponsorship Enquiry */}
          <div className="relative flex flex-col justify-between p-10 max-sm:p-7 rounded-[24px] bg-[#0D1B2E] border border-[#0069B8]/52 overflow-hidden">
            <div>
              <span className="inline-block text-[12px] font-bold uppercase tracking-[0.08em] text-[#009EAD] mb-3">
                4 Content Pillars · 20-Min Keynotes · 75-Min Clinics · 6, 9 &amp; 12 sqm Booths
              </span>
              <h2 className="m-0 font-semibold text-white leading-[1.2] tracking-[-0.01em] text-[clamp(24px,3vw,34px)]">
                Put your financial AI architecture in front of Middle East banking decision-makers
              </h2>
            </div>
            <div className="mt-8">
              <a
                href="/banking/sponsorship-enquiry"
                className="bb-btn-outline-dark inline-flex items-center gap-2 px-7 py-3.5 text-[15px] font-bold"
              >
                Enquire about sponsorship
                <span className="font-bold">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Speak at the conference */}
        <div className="relative p-12 px-14 max-sm:p-8 rounded-[24px] bg-[#0069B8] border-[1.5px] border-[#009EAD] overflow-hidden surface-blue">
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/30 bg-white/12 text-white text-[12px] font-bold uppercase tracking-[0.12em] mb-4">
              <span className="w-2 h-2 rounded-full bg-[#F15928]" />
              Faculty
            </div>

            <h2 className="m-0 font-semibold text-white leading-[1.2] tracking-[-0.01em] text-[clamp(28px,3.8vw,44px)] max-w-[780px]">
              If you have deployed AI into core regulated banking,{" "}
              <span className="text-white underline decoration-[#F15928] decoration-[3px] underline-offset-[6px]">
                we want you on stage
              </span>
            </h2>

            <p className="m-0 mt-5 text-[#F7F9FC]/90 text-[17px] leading-[1.6] max-w-[720px] max-sm:text-[15px]">
              We are recruiting banking COOs, CROs, CCOs, CDOs, CAIOs, and regulatory supervisors with verified production deployment evidence across the Middle East.
            </p>

            <div className="flex flex-wrap justify-center items-center gap-4 mt-8">
              <a
                href="/banking/agenda/call-for-speakers"
                className="bb-btn-primary inline-flex items-center gap-2 px-[30px] py-[14px] text-[15px] font-bold"
              >
                Apply to speak
                <span className="font-bold">→</span>
              </a>
            </div>

            <div className="w-full h-[1px] bg-white/25 my-10" />

            <div className="grid grid-cols-3 w-full gap-8 max-sm:grid-cols-1 max-sm:gap-6">
              <div className="flex flex-col items-center">
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#F7F9FC]/75 mb-2">
                  Date
                </span>
                <strong className="text-[18px] font-bold text-white tracking-wide">
                  24 March 2027 · 1-Day Forum
                </strong>
              </div>

              <div className="flex flex-col items-center border-l border-white/25 max-sm:border-l-0 max-sm:border-t max-sm:pt-4 max-sm:mt-2">
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#F7F9FC]/75 mb-2">
                  Location
                </span>
                <strong className="text-[18px] font-bold text-white tracking-wide text-center">
                  Dubai, UAE
                </strong>
              </div>

              <div className="flex flex-col items-center border-l border-white/25 max-sm:border-l-0 max-sm:border-t max-sm:pt-4 max-sm:mt-2">
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#F7F9FC]/75 mb-2">
                  Series Edition
                </span>
                <strong className="text-[18px] font-bold text-white tracking-wide">
                  Day 1 · March Dubai Cluster
                </strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
