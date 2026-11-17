import type { Metadata } from "next";
import { HeaderV3 } from "../_components/HeaderV3";
import { FooterV3 } from "../_components/FooterV3";
import { GradientText, V3_BASE } from "../_components/SharedV3";

export const metadata: Metadata = {
  title: "Executive Networking & Attendee App | World AI Show | BFSI | Dubai 2027 (V3 Preview)",
  description:
    "Explore Executive Concierge & 50+ pre-scheduled bilateral meetings, AI-powered matchmaking, the official Attendee App, and executive photo gallery at World AI Show | BFSI | Dubai 2027.",
  robots: { index: false, follow: false },
};

const subNav = ["Overview", "Attendee APP", "AI Matchmaking", "Photo Gallery"];

export default function NetworkingPageV3() {
  const waysToConnect = [
    {
      title: "Attendee App",
      desc: "Personalised 1-day agenda builder, 75-minute clinical workshop selection, and UAE PDPL-consented badge-scan lead capture — unified in one executive app.",
      href: `${V3_BASE}/networking/attendee-app/`,
      action: "Explore",
      badgeBg: "bg-[#0069B8]",
      actionColor: "text-[#0069B8]",
      borderColor: "border-[#0069B8]/22 border-t-4 border-t-[#0069B8]",
      hoverBorder: "hover:border-[#0069B8] hover:border-t-[#F15928]",
      hoverTitle: "group-hover:text-[#0069B8]",
    },
    {
      title: "AI Matchmaking",
      desc: "Algorithmic buyer-supplier scheduling facilitating 50+ pre-scheduled bilateral 1-on-1 meetings between institutional BFSI buyers and vetted providers.",
      href: `${V3_BASE}/networking/ai-matchmaking/`,
      action: "Explore",
      badgeBg: "bg-[#F15928]",
      actionColor: "text-[#F15928]",
      borderColor: "border-[#0069B8]/22 border-t-4 border-t-[#F15928]",
      hoverBorder: "hover:border-[#F15928]",
      hoverTitle: "group-hover:text-[#F15928]",
    },
    {
      title: "AI Photo Gallery",
      desc: "High-resolution executive photography from the global series, indexed instantly using AI facial recognition.",
      href: `${V3_BASE}/networking/photo-gallery/`,
      action: "Explore",
      badgeBg: "bg-[#009EAD]",
      actionColor: "text-[#009EAD]",
      borderColor: "border-[#0069B8]/22 border-t-4 border-t-[#009EAD]",
      hoverBorder: "hover:border-[#009EAD] hover:border-t-[#F15928]",
      hoverTitle: "group-hover:text-[#009EAD]",
    },
  ];

  const roles = [
    "Group CEO, COO & Head of Commercial, Retail & Islamic Banking",
    "Insurance CEO, COO & Chief Claims / Underwriting Officer",
    "Chief Risk Officer (CRO) & Head of Model Risk Governance",
    "Chief Compliance Officer (CCO), MLRO & Head of Fraud / AML",
    "Chief Data & AI Officer (CDAIO), CIO & CTO",
    "Chief Information Security Officer (CISO) & Sovereign Cloud Lead",
    "Head of SME Lending, Credit Underwriting & Actuarial Pricing",
    "Central Bank, Free-Zone & Financial Regulatory Authority",
  ];

  const industries = [
    "Tier-1 Commercial & Retail Banks",
    "Islamic Banking & Takaful Groups",
    "Motor, Health & Life Insurers",
    "Reinsurance & Actuarial Carriers",
    "Sovereign Wealth & Asset Managers",
    "Private Wealth & Family Offices",
    "Central Banks & Financial Regulators",
    "Instant Payment & Open-Finance Rails",
    "Digital-First & Challenger Banks",
    "Financial Crime, Fraud & AML Teams",
    "Model Risk & Algorithmic Audit",
    "Specialist Banking & Insurance AI",
  ];

  const industryBorders = [
    "border-[#0069B8]/45 hover:border-[#009EAD]",
    "border-[#0069B8]/45 hover:border-[#F15928]",
    "border-[#009EAD]/45 hover:border-[#0069B8]",
  ];

  return (
    <main className="page-networking relative min-h-screen bg-[#F7F9FC] text-[#334155] font-sans overflow-x-hidden">
      <HeaderV3 activeItem="Networking" subNavItems={subNav} activeSubNavItem="Overview" />

      {/* Hero */}
      <section
        className="relative min-h-[560px] flex items-center pt-[190px] pb-[84px] overflow-hidden bg-[#08121E] bg-cover bg-[position:center_top] border-b-2 border-[#0069B8] max-[1200px]:pt-[150px] max-sm:min-h-[460px] max-sm:pt-[126px] max-sm:pb-[56px]"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(8, 18, 30, 0.96) 0%, rgba(8, 18, 30, 0.82) 45%, rgba(8, 18, 30, 0.25) 100%), url('/banking/images/networking/networking-hero-bg.webp')`,
        }}
      >
        <div className="w-[min(1172px,calc(100%-48px))] max-sm:w-[calc(100%-32px)] mx-auto relative z-10">
          <div className="max-w-[660px] w-full">
            <span className="inline-flex items-center mb-5 px-4 py-1.5 border border-[#009EAD]/45 rounded-full text-[#009EAD] text-[12px] font-bold uppercase tracking-[0.14em] bg-[#0D1B2E]">
              Executive Concierge &amp; 50+ Bilateral Meetings · Dubai 2027
            </span>
            <h1 className="font-heading m-0 text-white font-bold leading-[1.06] tracking-[-0.02em] text-[clamp(42px,5.4vw,66px)]">
              Every <br />
              Conversation. <br />
              <GradientText tone="teal">By Design.</GradientText>
            </h1>
            <p className="m-0 mt-6 text-white/82 text-[18px] leading-relaxed max-sm:text-[15px]">
              Engineered for senior banking, insurance, risk, and regulatory leaders across 25+ UAE banks and insurers and 15+ GCC and African financial groups — uniting 50+ pre-scheduled bilateral meetings, 3 Closed-Door CXO Boardrooms (20 buyers each), and 7 Synthetic Experience Labs.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-9 max-sm:flex-col max-sm:items-stretch">
              <a href={`${V3_BASE}/attend/delegate/`} className="bb-btn-primary text-center">
                Apply for Delegate Pass ➔
              </a>
              <a
                href={`${V3_BASE}/sponsorship-enquiry/`}
                className="bb-btn-outline-dark text-center"
              >
                Enquire about sponsorship ➔
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Row */}
      <section className="relative py-12 border-y-2 border-[#0069B8] bg-[#0D1B2E]">
        <div className="w-[min(1172px,calc(100%-48px))] max-sm:w-[calc(100%-32px)] mx-auto">
          <div className="grid grid-cols-4 gap-6 max-md:grid-cols-2 max-sm:grid-cols-1 text-center divide-x divide-[#0069B8]/35 max-md:divide-x-0">
            <div className="flex flex-col">
              <span className="font-heading text-[36px] font-bold text-[#009EAD] tracking-tight tabular-nums">
                300–400
              </span>
              <span className="text-[12px] text-white/75 uppercase tracking-[0.12em] font-bold mt-1.5">
                Pre-Qualified C-Suite Leaders
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-[36px] font-bold text-[#F15928] tracking-tight tabular-nums">
                80%+
              </span>
              <span className="text-[12px] text-white/75 uppercase tracking-[0.12em] font-bold mt-1.5">
                Buy-Side Institutional Ratio
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-[36px] font-bold text-white tracking-tight tabular-nums">
                50+
              </span>
              <span className="text-[12px] text-white/75 uppercase tracking-[0.12em] font-bold mt-1.5">
                Pre-Scheduled Bilateral Meetings
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-[36px] font-bold text-[#009EAD] tracking-tight tabular-nums">
                20 Buyers
              </span>
              <span className="text-[12px] text-white/75 uppercase tracking-[0.12em] font-bold mt-1.5">
                Per Closed-Door CXO Boardroom
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Ways to Connect */}
      <section className="relative py-24 bg-[#F7F9FC]">
        <div className="w-[min(1172px,calc(100%-48px))] max-sm:w-[calc(100%-32px)] mx-auto">
          <div className="text-center mb-16 max-w-[780px] mx-auto">
            <span className="px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-[0.14em] bg-white text-[#0069B8] border border-[#0069B8]/25 mb-5 inline-block">
              Networking Suite &amp; Attendee App
            </span>
            <h2 className="font-heading font-bold text-[#08121E] leading-tight tracking-[-0.02em] text-[clamp(32px,4vw,44px)] m-0">
              Engineered for the{" "}
              <GradientText tone="blue">Regulated BFSI Buying Unit</GradientText>
            </h2>
            <p className="m-0 mt-5 text-[#334155] text-[16px] leading-relaxed max-sm:text-[14px]">
              Financial AI procurement demands alignment across banking and insurance business heads, CROs, CCOs, CDAIOs, and CISOs. Our networking suite connects all five governed institutional constituencies during the 1-Day Executive Decision Forum.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-sm:grid-cols-1">
            {waysToConnect.map((way) => (
              <a
                key={way.title}
                href={way.href}
                className={`group relative overflow-hidden p-8 border ${way.borderColor} ${way.hoverBorder} rounded-[20px] bg-white shadow-[0_12px_32px_rgba(8,18,30,0.06)] transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between no-underline cursor-pointer`}
              >
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className={`w-12 h-12 rounded-2xl flex items-center justify-center ${way.badgeBg}`}>
                      <img
                        src="/banking/images/networking/Icon.webp"
                        alt="Icon"
                        className="w-[18px] h-[18px] object-contain brightness-0 invert select-none"
                      />
                    </span>
                  </div>

                  <h3 className={`font-heading m-0 text-[#08121E] font-bold text-[20px] tracking-tight ${way.hoverTitle} transition-colors`}>
                    {way.title}
                  </h3>
                  <p className="m-0 mt-3 text-[#334155] text-[14.5px] leading-relaxed">
                    {way.desc}
                  </p>
                </div>

                <div className="mt-8 border-t border-[#0069B8]/15 pt-4">
                  <span className={`inline-flex items-center gap-1.5 text-[14px] font-bold transition-all ${way.actionColor}`}>
                    {way.action}{" "}
                    <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                      ➔
                    </span>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Who Is In The Room */}
      <section className="relative py-24 bg-[#08121E] border-t-2 border-[#0069B8]">
        <div className="w-[min(1172px,calc(100%-48px))] max-sm:w-[calc(100%-32px)] mx-auto">
          <div className="grid grid-cols-[1.1fr_0.9fr] gap-12 max-[980px]:grid-cols-1 max-[980px]:gap-12">
            <div className="flex flex-col">
              <span className="text-[#009EAD] text-[12px] font-bold tracking-[0.14em] uppercase mb-3 block">
                Who Is In The Room
              </span>
              <h2 className="font-heading font-bold text-white leading-[1.1] tracking-[-0.02em] text-[clamp(34px,4.4vw,48px)] m-0 mb-8">
                300–400 Pre-Qualified Leaders.<br />
                <GradientText tone="teal">The BFSI Buying Unit.</GradientText>
              </h2>

              <div className="flex flex-col gap-3">
                {roles.map((role) => (
                  <div
                    key={role}
                    className="px-6 py-4 text-[14.5px] font-semibold text-white/90 border border-[#0069B8]/40 rounded-[12px] bg-[#0D1B2E] hover:border-[#009EAD] hover:text-white transition-all duration-200"
                  >
                    {role}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-8">
              <div>
                <h3 className="font-heading m-0 mb-5 text-white font-bold text-[19px] tracking-tight">
                  Financial &amp; Insurance Sub-Sectors Represented
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {industries.map((ind, i) => {
                    const borderColor = industryBorders[i % industryBorders.length];
                    return (
                      <span
                        key={ind}
                        className={`px-4 py-2 rounded-full text-[13px] font-semibold border ${borderColor} bg-[#0D1B2E] text-white/90 hover:text-white transition-all duration-200`}
                      >
                        {ind}
                      </span>
                    );
                  })}
                </div>
              </div>

              <div className="p-8 border border-white/15 border-t-4 border-t-[#F15928] bg-[#0069B8] rounded-[20px] shadow-[0_18px_40px_rgba(0,105,184,0.24)] relative overflow-hidden">
                <h3 className="font-heading m-0 text-white font-bold text-[20px] tracking-tight mb-3">
                  Your Network Starts Before Forum Day
                </h3>
                <p className="m-0 text-white/90 text-[14.5px] leading-relaxed">
                  Qualified delegates and commercial partners receive early access to the official Attendee App ahead of 24 March 2027 — build your personalised 1-day agenda, select Workshop A or B, and pre-schedule 1-on-1 bilateral meetings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="relative py-24 bg-[#0069B8]">
        <div className="w-[min(860px,calc(100%-48px))] max-sm:w-[calc(100%-32px)] mx-auto relative overflow-hidden p-12 border border-white/15 border-t-4 border-t-[#F15928] rounded-[24px] bg-white text-center shadow-[0_24px_62px_rgba(8,18,30,0.24)] max-sm:p-8">
          <h2 className="font-heading font-bold text-[#08121E] leading-tight tracking-[-0.02em] text-[clamp(28px,3.6vw,40px)] m-0">
            Be in the room where{" "}
            <GradientText tone="blue">2027 BFSI AI architecture gets decided.</GradientText>
          </h2>
          <p className="m-0 mt-4 text-[#334155] text-[15.5px] leading-relaxed max-w-[600px] mx-auto">
            Apply for a complimentary Delegate Pass (by invitation &amp; qualification) or enquire about commercial sponsorship for World AI Show | BFSI | Dubai 2027 (24 March 2027 · Dubai, UAE).
          </p>

          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <a href={`${V3_BASE}/attend/delegate/`} className="bb-btn-primary max-sm:w-full">
              Apply for Delegate Pass ➔
            </a>
            <a
              href={`${V3_BASE}/sponsorship-enquiry/`}
              className="bb-btn-outline-light max-sm:w-full"
            >
              Enquire about sponsorship ➔
            </a>
          </div>
        </div>
      </section>

      <FooterV3 />
    </main>
  );
}
