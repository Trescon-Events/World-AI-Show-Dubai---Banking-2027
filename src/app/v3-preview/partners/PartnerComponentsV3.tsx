"use client";

import { GradientText, V3_BASE } from "../_components/SharedV3";

export function PartnersHeroV3() {
  return (
    <section
      id="overview"
      className="relative min-h-[520px] flex items-center page-hero-top pb-[76px] overflow-hidden bg-[#08121E] bg-cover bg-[position:center_35%] bg-no-repeat border-b-2 border-[#0069B8] max-sm:min-h-[420px] max-sm:pb-[52px]"
      style={{
        backgroundImage:
          'linear-gradient(90deg, rgba(8, 18, 30, 0.94) 0%, rgba(8, 18, 30, 0.72) 45%, rgba(8, 18, 30, 0.18) 100%), url("/banking/images/sponsors/Partners-logo-banner.webp")',
      }}
    >
      <div className="relative z-10 w-[min(1172px,calc(100%-48px))] max-sm:w-[calc(100%-32px)] mx-auto">
        <h1 className="font-heading m-0 text-white font-bold leading-[1.06] tracking-[-0.02em] text-[clamp(40px,5.2vw,66px)] max-w-[820px]">
          <GradientText tone="teal">Partner With Us</GradientText> at World AI Show
        </h1>
        <p className="max-w-[760px] mt-6 mb-0 text-white/84 text-[19px] leading-relaxed max-sm:text-base">
          Engage 25+ UAE banks and insurers and 15+ GCC and African financial groups through our revamped 9-tier commercial partnership structure — combining 15-minute plenary keynotes, 60-minute CXO boardrooms (20 buyers), 75-minute workshops, and 9 sqm, 4 sqm &amp; 2 sqm stands.
        </p>
      </div>
    </section>
  );
}

const partnerTiersV3 = [
  {
    tier: "Tier 1 · Exclusive Headline Partner",
    name: "Powered By",
    deliverables:
      "Exclusive Headline Partner · 15-minute Plenary Keynote + Plenary Panel Seat, 60-minute Closed-Door CXO Boardroom (20 Pre-Qualified Buyers), and 9 sqm Built Stand.",
  },
  {
    tier: "Tier 2 · Executive Thought Leadership",
    name: "Diamond Sponsor",
    deliverables:
      "15-minute Plenary Keynote, 60-minute Closed-Door CXO Boardroom (20 Pre-Qualified Buyers), 9 sqm Built Stand, and 3× Multi-Channel Branding Amplification.",
  },
  {
    tier: "Tier 3 · Plenary & Concourse Presence",
    name: "Platinum Sponsor",
    deliverables:
      "15-minute Plenary Keynote + Plenary Panel Seat, 9 sqm Built Stand, and 2× Multi-Channel Branding Amplification.",
  },
  {
    tier: "Tier 4 · Target Wishlist Curation",
    name: "Gold Sponsor",
    deliverables:
      "15-minute Plenary Keynote, 9 sqm Built Stand, and Dedicated 50-Account Target Wishlist Curation.",
  },
  {
    tier: "Tier 5 · Chatham House Rule Convening",
    name: "Boardroom Partner",
    deliverables:
      "Exclusive 60-minute Closed-Door CXO Boardroom for 20 Pre-Qualified Banking, Insurance & Risk Buyers under Chatham House Rule.",
  },
  {
    tier: "Tier 6 · Panel & Demonstration Stand",
    name: "Silver Sponsor",
    deliverables:
      "Plenary Panel Speaking Seat paired with a standardised 4 sqm Built Stand in the concourse showcase.",
  },
  {
    tier: "Tier 7 · Concourse & Lead Intelligence",
    name: "Bronze Sponsor",
    deliverables:
      "Standardised 4 sqm Built Stand paired with WebApp Badge Scan & UAE PDPL Consented Directory Access.",
  },
  {
    tier: "Tier 8 · Turnkey Concourse Showcase",
    name: "Concourse Exhibitor",
    deliverables:
      "Standardised 4 sqm Turnkey Showcase Stand positioned in the high-traffic networking and matchmaking concourse.",
  },
  {
    tier: "Tier 9 · Emerging Fintech & Insurtech",
    name: "Start Up Pod",
    deliverables:
      "Dedicated 2 sqm Turnkey Innovation Pod engineered for high-growth fintech, insurtech, and regulated AI innovators.",
  },
];

export function PartnerShowcaseV3() {
  return (
    <section
      className="relative py-[100px] bg-[#08121E] border-t-2 border-[#0069B8] overflow-hidden"
      id="showcase-benefits"
    >
      <div className="w-[min(1172px,calc(100%-48px))] mx-auto max-sm:w-[calc(100%-32px)]">
        {/* 9-Tier Commercial Logo Showcase (No public pricing displayed) */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <span className="inline-block text-[#009EAD] text-[12px] font-bold uppercase tracking-[0.14em] mb-2">
              Revamped 9-Tier Inventory · Dubai 2027
            </span>
            <h3 className="font-heading text-white font-bold text-[clamp(26px,3.4vw,40px)] m-0">
              9-Tier Commercial <GradientText tone="teal">Partnership Structure</GradientText>
            </h3>
          </div>

          <div className="grid grid-cols-3 gap-6 max-[1024px]:grid-cols-2 max-sm:grid-cols-1">
            {partnerTiersV3.map((item) => (
              <article
                key={item.name}
                className="group relative p-7 border border-[#0069B8]/52 border-t-4 border-t-[#009EAD] rounded-[18px] bg-[#0D1B2E] shadow-[0_18px_40px_rgba(8,18,30,0.28)] transition-all duration-300 hover:-translate-y-1 hover:border-[#F15928] hover:border-t-[#F15928]"
              >
                <span className="inline-block text-[11px] font-bold uppercase tracking-[0.12em] text-[#009EAD] mb-3">
                  {item.tier}
                </span>
                <h4 className="font-heading m-0 mb-2.5 text-white font-bold text-[19px] leading-snug">
                  {item.name}
                </h4>
                <p className="m-0 text-white/75 text-[14.5px] leading-relaxed">
                  {item.deliverables}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="group/banner relative p-12 max-sm:p-8 border border-white/15 border-t-4 border-t-[#F15928] bg-[#0069B8] rounded-[24px] text-center overflow-hidden shadow-[0_22px_50px_rgba(0,105,184,0.28)]">
          <div className="relative z-10 flex flex-col items-center gap-6">
            <h3 className="m-0 font-heading text-white font-bold text-[clamp(28px,3.5vw,42px)] leading-tight tracking-tight">
              Put your enterprise solution directly before <br />
              <GradientText tone="white-orange">
                qualified BFSI procurement committees.
              </GradientText>
            </h3>

            <p className="m-0 text-white/85 text-[16px] leading-relaxed max-w-[680px]">
              Request the private commercial infopack for full deliverables and availability across all nine partnership tiers.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-2 w-full max-sm:flex-col max-sm:items-center">
              <a
                href={`${V3_BASE}/sponsorship-enquiry/`}
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
