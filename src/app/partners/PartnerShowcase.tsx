"use client";

import { GradientText } from "../components/Shared";

const partnerTiers = [
  {
    tier: "Tier 1 · Plenary Thought Leadership & Prime Island",
    name: "Speaking Sponsors (20-Min Plenary Keynote — 12 sqm Booth)",
    deliverables:
      "20-Minute Plenary Keynote or Fireside Chat + 12 sqm Premium Island Concourse Booth + 12 Executive Passes.",
  },
  {
    tier: "Tier 2 · Interactive Workshop Leadership",
    name: "Engagement Partners (Clinic Leaders: Fraud & AML / Agentic Banking — 9 sqm Booth)",
    deliverables:
      "Exclusive Leadership of a 75-Minute Workshop Clinic (60–80 delegates) + 9 sqm Prominent Concourse Booth + 8 Passes.",
  },
  {
    tier: "Tier 3 · Private Executive Convening",
    name: "CXO Closed-Door Boardroom Partners (15 Wishlist Banking Leaders)",
    deliverables:
      "60-Minute Curated Session with 15 Pre-Qualified Wishlist Banking CXOs + 5-Minute Sponsor Opening Address under Chatham House Rule.",
  },
  {
    tier: "Tier 4 · Plenary Panel & Concourse Presence",
    name: "Industry Partners (Plenary Panellists — 9 sqm Booth)",
    deliverables:
      "Plenary Panel Speaking Seat (Block 3 or Block 5) + 9 sqm Prominent Concourse Booth + 6 Executive Passes.",
  },
  {
    tier: "Tier 5 · Technology Demonstration Concourse",
    name: "Concourse Turnkey Exhibitors (6 sqm Booth)",
    deliverables:
      "6 sqm Standard Turnkey Concourse Booth in the high-traffic networking and bilateral meeting arena + 4 Passes.",
  },
  {
    tier: "Ecosystem & Media Alliances",
    name: "Institutional Regulators & Supporting Financial Media",
    deliverables:
      "Regional banking federations, fintech associations, risk & compliance institutes, and accredited financial press.",
  },
];

export function PartnerShowcase() {
  return (
    <section className="relative py-[100px] bg-[#020814] overflow-hidden" id="showcase-benefits">
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] rounded-full bg-cyan/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] rounded-full bg-purple-500/5 blur-[120px] pointer-events-none" />

      <div className="w-[min(1114px,calc(100%-48px))] mx-auto max-sm:w-[min(100%-32px,1114px)]">
        {/* ── PART 2: TIER-GROUPED ARCHITECTURE (Section 10) ─────────── */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h3 className="text-white font-[850] text-[clamp(26px,3.4vw,38px)] m-0">
              Tier-Grouped Commercial <GradientText>Structure</GradientText>
            </h3>
          </div>
          <div className="grid grid-cols-3 gap-6 max-[1024px]:grid-cols-2 max-sm:grid-cols-1">
            {partnerTiers.map((item) => (
              <article
                key={item.name}
                className="group relative p-7 border border-white/[0.1] rounded-[22px] bg-[#040a17]/75 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#00ceff]/50"
              >
                <span className="inline-block font-mono text-[11px] uppercase tracking-[1.6px] text-[#C0F43C] mb-3">
                  {item.tier}
                </span>
                <h4 className="m-0 mb-2.5 text-white font-[800] text-[18px] leading-snug">
                  {item.name}
                </h4>
                <p className="m-0 text-white/65 text-[14.5px] leading-relaxed">
                  {item.deliverables}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* ── PART 3: CTA BANNER ── */}
        <div
          className="group/banner relative p-12 max-sm:p-8 border border-[#c0f43c]/20 rounded-[28px] text-center overflow-hidden transition-all duration-300 hover:border-[#c0f43c]/40"
          style={{
            background: "linear-gradient(135deg, rgba(192, 244, 60, 0.04) 0%, rgba(4, 10, 24, 0.96) 50%, rgba(0, 206, 255, 0.02) 100%)",
          }}
        >
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#c0f43c]/20 to-transparent pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center gap-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-white/10 rounded-full text-[11px] font-mono font-extrabold uppercase tracking-widest text-[#00ceff] bg-white/5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00ceff] animate-pulse" />
              4 Sector Content Pillars · 20-Min Keynotes · 75-Min Clinics · 6, 9 &amp; 12 sqm Booths
            </div>

            <h3 className="m-0 font-space-grotesk text-white font-[850] text-[clamp(28px,3.5vw,42px)] leading-tight tracking-tight">
              Put your enterprise solution directly before <br />
              <GradientText>qualified banking procurement committees.</GradientText>
            </h3>

            <p className="m-0 text-white/70 text-[16px] leading-relaxed max-w-[680px] font-sans">
              Secure your commercial partnership today.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-4 w-full max-sm:flex-col max-sm:items-center">
              <a
                href="/banking/sponsorship-enquiry/"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-[14px] font-extrabold text-[#06111F] [color:#06111F!important] bg-[#C0F43C] hover:shadow-[0_0_24px_rgba(192,244,60,0.35)] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
              >
                Enquire About Sponsorship <span className="font-mono">→</span>
              </a>
              <a
                href="/banking/attend/sponsor/"
                className="inline-flex items-center justify-center px-7 py-3.5 border border-white/20 rounded-full text-[14px] font-extrabold text-white bg-white/5 hover:bg-white/10 hover:border-white/35 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
              >
                View Commercial Standards
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
