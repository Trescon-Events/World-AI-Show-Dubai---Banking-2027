import type { Metadata } from "next";
import { Header } from "../components/sections/Header";
import { FooterSection } from "../components/sections/FooterSection";
import { GradientText } from "../components/Shared";

export const metadata: Metadata = {
  title: "Networking Suite & Attendee App | World AI Show | BFSI | Dubai 2027",
  description: "Explore the Networking Suite for World AI Show | BFSI | Dubai 2027: Algorithmic pre-scheduled 1-on-1 meetings, personalised 1-day agenda builder, clinic selection, digital business card exchange, and executive photo gallery.",
};

const subNav = ["Overview", "Attendee APP", "AI Matchmaking", "Photo Gallery"];

export default function NetworkingPage() {
  const waysToConnect = [
    {
      title: "Attendee App",
      desc: "Personalised 1-day agenda builder, clinic selection, and digital business card exchange — all from a single AI-powered executive app.",
      href: "/banking/networking/attendee-app",
      action: "Explore",
      badgeBg: "bg-[#0069B8]",
      actionColor: "text-[#0069B8]",
      borderColor: "border-[#0069B8]/22 border-t-4 border-t-[#0069B8]",
      hoverBorder: "hover:border-[#0069B8] hover:border-t-[#F15928]",
      hoverTitle: "group-hover:text-[#0069B8]"
    },
    {
      title: "AI Matchmaking",
      desc: "Algorithmic pre-scheduled 1-on-1 meetings connecting buy-side banking leaders with vetted financial AI infrastructure providers.",
      href: "/banking/networking/ai-matchmaking",
      action: "Explore",
      badgeBg: "bg-[#F15928]",
      actionColor: "text-[#F15928]",
      borderColor: "border-[#0069B8]/22 border-t-4 border-t-[#F15928]",
      hoverBorder: "hover:border-[#F15928]",
      hoverTitle: "group-hover:text-[#F15928]"
    },
    {
      title: "AI Photo Gallery",
      desc: "High-resolution executive photography from the global series, indexed instantly using AI face recognition.",
      href: "/banking/networking/photo-gallery",
      action: "Explore",
      badgeBg: "bg-[#009EAD]",
      actionColor: "text-[#009EAD]",
      borderColor: "border-[#0069B8]/22 border-t-4 border-t-[#009EAD]",
      hoverBorder: "hover:border-[#009EAD] hover:border-t-[#F15928]",
      hoverTitle: "group-hover:text-[#009EAD]"
    }
  ];

  const roles = [
    "Chief Operating Officer (COO) & Head of Retail/Corporate Banking",
    "Chief Risk Officer (CRO) & Head of Model Risk",
    "Chief Compliance Officer (CCO) & Head of Financial Crime / AML",
    "Chief Data Officer (CDO), Chief AI Officer (CAIO) & CTO",
    "Chief Information Security Officer (CISO) & Cloud Architect",
    "Head of Credit Underwriting & Treasury Operations",
    "Central Bank Regulator & Supervisory Authority",
    "Tier-1 Financial AI & RegTech Infrastructure Executive"
  ];

  const industries = [
    "Tier-1 Retail & Commercial Banks",
    "Corporate & Investment Banking",
    "Islamic Banking & Takaful Institutions",
    "Sovereign Wealth Funds & Asset Managers",
    "Private Wealth & Family Offices",
    "Insurance & Reinsurance Carriers",
    "Central Banks & Financial Regulators",
    "Payment Networks & Instant Settlement Rails",
    "Digital-First & Neo-Banking Institutions",
    "Financial Crime, AML & Sanctions Supervision",
    "Model Risk Management & Internal Audit",
    "Enterprise AI & RegTech Infrastructure"
  ];

  const industryBorders = [
    "border-[#0069B8]/45 hover:border-[#009EAD]",
    "border-[#0069B8]/45 hover:border-[#F15928]",
    "border-[#009EAD]/45 hover:border-[#0069B8]",
  ];

  return (
    <main className="page-networking relative min-h-screen bg-[#F7F9FC] text-[#334155] font-sans overflow-x-hidden">
      <Header activeItem="Networking" subNavItems={subNav} activeSubNavItem="Overview" />

      {/* ── Section 1: Hero ── */}
      <section
        className="relative pt-[210px] pb-[112px] overflow-hidden bg-[#08121E] bg-cover bg-[position:center_top] flex items-center min-h-[640px] max-md:pt-[160px]"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(8, 18, 30, 0.96) 0%, rgba(8, 18, 30, 0.82) 45%, rgba(8, 18, 30, 0.25) 100%), url('/banking/images/networking/networking-hero-bg.webp')`
        }}
      >
        <div className="w-[min(1172px,calc(100%-48px))] max-sm:w-[calc(100%-32px)] mx-auto relative z-10">
          <div className="max-w-[640px] w-full">
            <span className="inline-flex items-center mb-5 px-4 py-1.5 border border-[#009EAD]/45 rounded-full text-[#009EAD] text-[12px] font-bold uppercase tracking-[0.14em] bg-[#0D1B2E]">
              Networking Suite &amp; Concierge · Dubai 2027
            </span>
            <h1 className="font-heading m-0 text-white font-bold leading-[1.06] tracking-[-0.02em] text-[clamp(42px,5.4vw,66px)]">
              Every <br />
              Conversation. <br />
              <GradientText tone="teal">By Design.</GradientText>
            </h1>
            <p className="m-0 mt-6 text-white/82 text-[18px] leading-relaxed max-sm:text-[15px]">
              Designed for senior banking, risk, and insurance leaders, the forum facilitates high-impact connections through pre-scheduled meetings, private boardroom discussions, and collaborative sessions focused on procurement and institutional priorities.
            </p>

            {/* Quick links buttons */}
            <div className="flex flex-wrap items-center gap-4 mt-9 max-sm:flex-col max-sm:items-stretch">
              <a
                href="/banking/attend/delegate/"
                className="bb-btn-primary text-center"
              >
                Apply for a Business Pass ➔
              </a>
              <a
                href="/banking/sponsorship-enquiry/"
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
          <div className="grid grid-cols-3 gap-8 max-md:grid-cols-2 max-sm:grid-cols-1 text-center divide-x divide-[#0069B8]/35 max-sm:divide-x-0 max-sm:divide-y">
            <div className="flex flex-col max-sm:pb-4">
              <span className="font-heading text-[40px] font-bold text-[#009EAD] tracking-tight">
                300+
              </span>
              <span className="text-[12px] text-white/75 uppercase tracking-[0.12em] font-bold mt-1.5">Pre-Qualified C-Suite Leaders</span>
            </div>
            <div className="flex flex-col max-sm:py-4">
              <span className="font-heading text-[40px] font-bold text-[#F15928] tracking-tight">
                80%+
              </span>
              <span className="text-[12px] text-white/75 uppercase tracking-[0.12em] font-bold mt-1.5">Buy-Side Enterprise Ratio</span>
            </div>
            <div className="flex flex-col max-sm:pt-4">
              <span className="font-heading text-[40px] font-bold text-white tracking-tight">15 CXOs</span>
              <span className="text-[12px] text-white/75 uppercase tracking-[0.12em] font-bold mt-1.5">Per Closed-Door Boardroom</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: Ways to Connect ── */}
      <section className="relative py-24 bg-[#F7F9FC]">
        <div className="w-[min(1172px,calc(100%-48px))] max-sm:w-[calc(100%-32px)] mx-auto">

          {/* Header */}
          <div className="text-center mb-16 max-w-[760px] mx-auto">
            <span className="px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-[0.14em] bg-white text-[#0069B8] border border-[#0069B8]/25 mb-5 inline-block">
              Section 12 · Networking Suite &amp; Attendee App
            </span>
            <h2 className="font-heading font-bold text-[#08121E] leading-tight tracking-[-0.02em] text-[clamp(32px,4vw,44px)] m-0">
              Engineered for the <GradientText tone="blue">Regulated Banking Buying Unit</GradientText>
            </h2>
            <p className="m-0 mt-5 text-[#334155] text-[16px] leading-relaxed max-sm:text-[14px]">
              Banking AI procurement requires alignment across retail/corporate line-of-business heads, CROs, CCOs, CDOs, CAIOs, and CISOs. Our networking suite connects all 5 governed institutional constituencies during the 1-Day Executive Decision Forum.
            </p>
          </div>

          {/* 3 Cards Grid */}
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
                    {way.action} <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">➔</span>
                  </span>
                </div>
              </a>
            ))}
          </div>

        </div>
      </section>

      {/* ── Section 3: 300 Qualified CXOs. One Room. ── */}
      <section className="relative py-24 bg-[#08121E] border-t-2 border-[#0069B8]">
        <div className="w-[min(1172px,calc(100%-48px))] max-sm:w-[calc(100%-32px)] mx-auto">

          <div className="grid grid-cols-[1.1fr_0.9fr] gap-12 max-[980px]:grid-cols-1 max-[980px]:gap-12">

            {/* Left Column: Heading and Roles List */}
            <div className="flex flex-col">
              <span className="text-[#009EAD] text-[12px] font-bold tracking-[0.14em] uppercase mb-3 block">
                Who Is In The Room
              </span>
              <h2 className="font-heading font-bold text-white leading-[1.1] tracking-[-0.02em] text-[clamp(34px,4.4vw,48px)] m-0 mb-8">
                300+ Pre-Qualified Leaders.<br />
                <GradientText tone="teal">The Banking Buying Unit.</GradientText>
              </h2>

              {/* Roles List */}
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

            {/* Right Column: Industries represented & Starts Before Day One panel */}
            <div className="flex flex-col gap-8">

              <div>
                <h3 className="font-heading m-0 mb-5 text-white font-bold text-[19px] tracking-tight">
                  Financial Sub-Sectors &amp; Constituencies Represented
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

              {/* Starts Before Day One Panel */}
              <div className="p-8 border border-white/15 border-t-4 border-t-[#F15928] bg-[#0069B8] rounded-[20px] shadow-[0_18px_40px_rgba(0,105,184,0.24)] relative overflow-hidden">
                <h3 className="font-heading m-0 text-white font-bold text-[20px] tracking-tight mb-3">
                  Your Network Starts Before Forum Day
                </h3>
                <p className="m-0 text-white/90 text-[14.5px] leading-relaxed">
                  Qualified delegates and commercial partners receive early access to the attendee app ahead of 24 March 2027 — build your personalised 1-day agenda, select your parallel breakout clinic, and pre-schedule 1-on-1 meetings.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ── Section 4: Closing CTA ── */}
      <section className="relative py-24 bg-[#0069B8]">
        <div className="w-[min(860px,calc(100%-48px))] max-sm:w-[calc(100%-32px)] mx-auto relative overflow-hidden p-12 border border-white/15 border-t-4 border-t-[#F15928] rounded-[24px] bg-white text-center shadow-[0_24px_62px_rgba(8,18,30,0.24)] max-sm:p-8">
          <h2 className="font-heading font-bold text-[#08121E] leading-tight tracking-[-0.02em] text-[clamp(28px,3.6vw,40px)] m-0">
            Be in the room where <GradientText tone="blue">regulated banking AI gets decided.</GradientText>
          </h2>
          <p className="m-0 mt-4 text-[#334155] text-[15.5px] leading-relaxed max-w-[580px] mx-auto">
            Apply for a Business Pass or enquire about commercial sponsorship for World AI Show | BFSI | Dubai 2027 (24 March 2027 · Dubai, UAE · 1-Day Executive Decision Forum).
          </p>

          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <a
              href="/banking/attend/delegate/"
              className="bb-btn-primary max-sm:w-full"
            >
              Apply for a Business Pass ➔
            </a>
            <a
              href="/banking/sponsorship-enquiry/"
              className="bb-btn-outline-light max-sm:w-full"
            >
              Enquire about sponsorship ➔
            </a>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
