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
    <section className="relative py-[100px] bg-[#08121E] border-t-2 border-[#0069B8] overflow-hidden" id="showcase-benefits">
      <div className="w-[min(1172px,calc(100%-48px))] mx-auto max-sm:w-[calc(100%-32px)]">
        {/* ── PART 2: TIER-GROUPED ARCHITECTURE ─────────── */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h3 className="font-heading text-white font-bold text-[clamp(26px,3.4vw,40px)] m-0">
              Tier-Grouped Commercial <GradientText tone="teal">Structure</GradientText>
            </h3>
          </div>
          <div className="grid grid-cols-3 gap-6 max-[1024px]:grid-cols-2 max-sm:grid-cols-1">
            {partnerTiers.map((item) => (
              <article
                key={item.name}
                className="group relative p-7 border border-[#0069B8]/52 border-t-4 border-t-[#009EAD] rounded-[18px] bg-[#0D1B2E] shadow-[0_18px_40px_rgba(8,18,30,0.28)] transition-all duration-300 hover:-translate-y-1 hover:border-[#F15928] hover:border-t-[#F15928]"
              >
                <span className="inline-block text-[11px] font-bold uppercase tracking-[0.12em] text-[#009EAD] mb-3">
                  {item.tier}
                </span>
                <h4 className="font-heading m-0 mb-2.5 text-white font-bold text-[18px] leading-snug">
                  {item.name}
                </h4>
                <p className="m-0 text-white/75 text-[14.5px] leading-relaxed">
                  {item.deliverables}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* ── PART 3: CTA BANNER ── */}
        <div className="group/banner relative p-12 max-sm:p-8 border border-white/15 border-t-4 border-t-[#F15928] bg-[#0069B8] rounded-[24px] text-center overflow-hidden shadow-[0_22px_50px_rgba(0,105,184,0.28)]">
          <div className="relative z-10 flex flex-col items-center gap-6">
            <h3 className="m-0 font-heading text-white font-bold text-[clamp(28px,3.5vw,42px)] leading-tight tracking-tight">
              Put your enterprise solution directly before <br />
              <GradientText tone="white-orange">qualified banking procurement committees.</GradientText>
            </h3>

            <p className="m-0 text-white/85 text-[16px] leading-relaxed max-w-[680px]">
              Secure your commercial partnership today.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-4 w-full max-sm:flex-col max-sm:items-center">
              <a
                href="/banking/sponsorship-enquiry/"
                className="bb-btn-primary group cursor-pointer"
              >
                Enquire About Sponsorship <span className="bb-btn-arrow">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
