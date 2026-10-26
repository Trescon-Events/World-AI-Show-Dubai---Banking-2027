import type { Metadata } from "next";
import { Header } from "../components/sections/Header";
import { FooterSection } from "../components/sections/FooterSection";
import { GradientText } from "../components/Shared";

export const metadata: Metadata = {
  title: "Networking Suite & Attendee App | World AI Show | AI in Banking and Financial Services | Dubai 2027",
  description: "Explore the Networking Suite for World AI Show | AI in Banking and Financial Services | Dubai 2027: Algorithmic pre-scheduled 1-on-1 meetings, personalised 1-day agenda builder, clinic selection, digital business card exchange, and executive photo gallery.",
};

const subNav = ["Overview", "Attendee APP", "AI Matchmaking", "Photo Gallery"];

export default function NetworkingPage() {
  const waysToConnect = [
    {
      title: "Attendee App",
      desc: "Personalised 1-day agenda builder, clinic selection, and digital business card exchange — all from a single AI-powered executive app.",
      href: "/banking/networking/attendee-app",
      action: "Explore",
      badgeBg: "bg-[#00ceff]",
      actionColor: "text-[#00ceff]",
      borderColor: "border-[#00ceff]/15",
      hoverBorder: "hover:border-[#00ceff]/45",
      hoverTitle: "group-hover:text-[#00ceff]"
    },
    {
      title: "AI Matchmaking",
      desc: "Algorithmic pre-scheduled 1-on-1 meetings connecting buy-side banking leaders with vetted financial AI infrastructure providers.",
      href: "/banking/networking/ai-matchmaking",
      action: "Explore",
      badgeBg: "bg-[#C0F43C]",
      actionColor: "text-[#C0F43C]",
      borderColor: "border-[#C0F43C]/15",
      hoverBorder: "hover:border-[#C0F43C]/45",
      hoverTitle: "group-hover:text-[#C0F43C]"
    },
    {
      title: "AI Photo Gallery",
      desc: "High-resolution executive photography from the global series, indexed instantly using AI face recognition.",
      href: "/banking/networking/photo-gallery",
      action: "Explore",
      badgeBg: "bg-[#926DFF]",
      actionColor: "text-[#926DFF]",
      borderColor: "border-[#926DFF]/15",
      hoverBorder: "hover:border-[#926DFF]/45",
      hoverTitle: "group-hover:text-[#926DFF]"
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
    "border-[#C0F43C]/20",
    "border-[#926DFF]/20",
    "border-[#00CEFF]/20",
    "border-[#3b82f6]/20",
    "border-[#C0F43C]/20",
    "border-[#00CEFF]/20",
    "border-[#C0F43C]/20",
    "border-[#C0F43C]/20",
    "border-[#926DFF]/20",
    "border-[#C0F43C]/20",
    "border-[#00CEFF]/20",
    "border-[#3b82f6]/20"
  ];

  return (
    <main className="page-networking relative min-h-screen bg-gradient-to-b from-[#020814] via-[#031022] to-[#020a18] text-white font-space-grotesk overflow-x-hidden">
      <Header activeItem="Networking" subNavItems={subNav} activeSubNavItem="Overview" />

      {/* ── Section 1: Hero ── */}
      <section
        className="relative pt-[220px] pb-[120px] overflow-hidden bg-cover bg-center flex items-center min-h-[700px] max-md:pt-[170px]"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(2, 7, 19, 0.96) 0%, rgba(2, 7, 19, 0.8) 45%, rgba(2, 7, 19, 0.25) 100%), url('/banking/images/networking/networking-hero-bg.webp')`
        }}
      >
        <div className="w-[min(1114px,calc(100%-48px))] mx-auto relative z-10">
          <div className="max-w-[640px] w-full">
            <span className="inline-flex items-center mb-5 px-3.5 py-1.5 border border-cyan/30 rounded-full text-cyan font-mono text-[12px] uppercase tracking-[2px] bg-cyan/5">
              Networking Suite &amp; Concierge · Dubai 2027
            </span>
            <h1 className="m-0 text-white font-[850] leading-[1.03] tracking-[-2.5px] text-[clamp(44px,5.8vw,74px)]">
              Every <br />
              Conversation. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ceff] to-[#C0F43C]">By Design.</span>
            </h1>
            <p className="m-0 mt-6 text-white/75 text-[18px] leading-relaxed max-sm:text-[15px]">
              300+ pre-qualified C-suite banking, risk, compliance, and technology leaders at the 1-Day Executive Decision Forum in the DIFC District, Dubai (24 March 2027 · Day 1 of the March Dubai Cluster). Algorithmic pre-scheduled 1-on-1 meetings, closed-door 15-buyer CXO boardrooms, and a personalised 1-day agenda builder.
            </p>

            {/* Quick links buttons */}
            <div className="flex flex-wrap items-center gap-4 mt-9 max-sm:flex-col max-sm:items-stretch">
              <a
                href="/banking/attend/delegate"
                className="px-8 py-[15px] rounded-full !text-black [color:#06111f!important] bg-[#C0F43C] shadow-[0_0_24px_rgba(192,244,60,0.24)] hover:shadow-[0_0_32px_rgba(192,244,60,0.4)] font-extrabold text-[14.5px] text-center transition-all duration-200 hover:-translate-y-0.5"
              >
                Apply for a Delegate Pass ➔
              </a>
              <a
                href="/banking/sponsorship-enquiry"
                className="px-8 py-[15px] rounded-full text-white border border-white/25 bg-white/5 hover:border-cyan font-extrabold text-[14.5px] text-center transition-all duration-200 hover:-translate-y-0.5"
              >
                Enquire about sponsorship ➔
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Row */}
      <section className="relative py-12 border-y border-white/5 bg-[#020814]">
        <div className="w-[min(1114px,calc(100%-48px))] mx-auto">
          <div className="grid grid-cols-3 gap-8 max-md:grid-cols-2 max-sm:grid-cols-1 text-center divide-x divide-white/10">
            <div className="flex flex-col">
              <span className="text-[40px] font-[900] text-[#C0F43C] tracking-tight">
                300+
              </span>
              <span className="text-[12.5px] text-white/50 uppercase tracking-widest font-mono font-bold mt-1.5">Pre-Qualified C-Suite Leaders</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[40px] font-[900] text-[#C0F43C] tracking-tight">
                70%+
              </span>
              <span className="text-[12.5px] text-white/50 uppercase tracking-widest font-mono font-bold mt-1.5">Buy-Side Enterprise Ratio</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[40px] font-[900] text-[#C0F43C] tracking-tight">15 CXOs</span>
              <span className="text-[12.5px] text-white/50 uppercase tracking-widest font-mono font-bold mt-1.5">Per Closed-Door Boardroom</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: Ways to Connect ── */}
      <section className="relative py-24 bg-[#030b19]">
        <div className="w-[min(1114px,calc(100%-48px))] mx-auto">

          {/* Header */}
          <div className="text-center mb-16 max-w-[760px] mx-auto">
            <span className="px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-[2px] bg-[#18d4ff]/10 text-[#18d4ff] border border-[#18d4ff]/20 mb-5 inline-block">
              Section 12 · Networking Suite &amp; Attendee App
            </span>
            <h2 className="font-[850] text-white leading-tight tracking-[-1.5px] text-[clamp(32px,4vw,44px)] m-0">
              Engineered for the <GradientText>Regulated Banking Buying Unit</GradientText>
            </h2>
            <p className="m-0 mt-5 text-white/60 text-[16px] leading-relaxed max-sm:text-[14px]">
              Banking AI procurement requires alignment across retail/corporate line-of-business heads, CROs, CCOs, CDOs, CAIOs, and CISOs. Our networking suite connects all 5 governed institutional constituencies during the 1-Day Executive Decision Forum.
            </p>
          </div>

          {/* 3 Cards Grid */}
          <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-sm:grid-cols-1">
            {waysToConnect.map((way) => (
              <a
                key={way.title}
                href={way.href}
                className={`group relative overflow-hidden p-8 border ${way.borderColor} ${way.hoverBorder} rounded-[24px] bg-[#050c1c]/50 hover:bg-[#050c1c]/80 shadow-[0_12px_24px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between no-underline cursor-pointer`}
              >
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className={`w-12 h-12 rounded-2xl flex items-center justify-center ${way.badgeBg}`}>
                      <img
                        src="/banking/images/networking/Icon.webp"
                        alt="Icon"
                        className="w-[18px] h-[18px] object-contain brightness-0 invert-0 select-none"
                      />
                    </span>
                  </div>

                  <h3 className={`m-0 text-white font-extrabold text-[19px] tracking-tight ${way.hoverTitle} transition-colors`}>
                    {way.title}
                  </h3>
                  <p className="m-0 mt-3 text-white/60 text-[14px] leading-relaxed">
                    {way.desc}
                  </p>
                </div>

                <div className="mt-8 border-t border-white/10 pt-4">
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
      <section className="relative py-24 bg-[#020814]">
        <div className="w-[min(1114px,calc(100%-48px))] mx-auto">

          <div className="grid grid-cols-[1.1fr_0.9fr] gap-12 max-[980px]:grid-cols-1 max-[980px]:gap-12">

            {/* Left Column: Heading and Roles List */}
            <div className="flex flex-col">
              <span className="text-white/40 text-[13px] font-bold font-mono tracking-[2px] uppercase mb-3 block">
                Who Is In The Room
              </span>
              <h2 className="font-[850] text-white leading-[1.1] tracking-[-2px] text-[clamp(36px,4.5vw,52px)] m-0 mb-8">
                300+ Pre-Qualified Leaders.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ceff] to-[#C0F43C]">The Banking Buying Unit.</span>
              </h2>

              {/* Roles List */}
              <div className="flex flex-col gap-3">
                {roles.map((role) => (
                  <div
                    key={role}
                    className="px-6 py-4 text-[14.5px] font-bold text-white/80 border border-[#2a2c4e] rounded-[14px] bg-[#050c1c]/10 hover:border-cyan/30 hover:bg-[#050c1c]/30 hover:text-white transition-all duration-200"
                  >
                    {role}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Industries represented & Starts Before Day One panel */}
            <div className="flex flex-col gap-8">

              <div>
                <h3 className="m-0 mb-5 text-white font-extrabold text-[18px] tracking-tight">
                  Financial Sub-Sectors &amp; Constituencies Represented
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {industries.map((ind, i) => {
                    const borderColor = industryBorders[i % industryBorders.length];
                    return (
                      <span
                        key={ind}
                        className={`px-5 py-2.5 rounded-full text-[13.5px] font-bold border ${borderColor} text-white/90 hover:text-white transition-all duration-200`}
                        style={{ backgroundColor: "#4d6f998c" }}
                      >
                        {ind}
                      </span>
                    );
                  })}
                </div>
              </div>

              {/* Starts Before Day One Panel */}
              <div
                className="p-8 border border-[#926DFF]/30 rounded-[24px] shadow-[0_12px_32px_rgba(146,109,255,0.04)] relative overflow-hidden group hover:border-[#926DFF]/50 transition-all duration-300"
                style={{
                  background: "linear-gradient(135deg, rgba(146, 109, 255, 0.12) 0%, rgba(146, 109, 255, 0.02) 100%), #040b1e"
                }}
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-[radial-gradient(circle_at_80%_20%,rgba(146,109,255,0.08),transparent_70%)] pointer-events-none"></div>
                <h3 className="m-0 text-white font-[850] text-[19px] tracking-tight mb-3">
                  Your Network Starts <span className="text-[#a78bfa]">Before Forum Day</span>
                </h3>
                <p className="m-0 text-white/70 text-[14px] leading-relaxed">
                  Qualified delegates and commercial partners receive early access to the attendee app ahead of 24 March 2027 — build your personalised 1-day agenda, select your parallel breakout clinic, and pre-schedule 1-on-1 meetings.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ── Section 4: Closing CTA ── */}
      <section className="relative py-24 bg-[#030b19] border-t border-white/5">
        <div className="w-[min(820px,calc(100%-48px))] mx-auto relative overflow-hidden p-12 border border-[#C0F43C]/20 rounded-[28px] bg-gradient-to-br from-[#040d1f] to-[#020713] text-center shadow-[0_24px_62px_rgba(0,0,0,0.5)] max-sm:p-8">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C0F43C]/60 to-transparent"></div>

          <h2 className="font-[850] text-white leading-tight tracking-[-1.5px] text-[clamp(28px,3.5vw,38px)] m-0">
            Be in the room where <GradientText>regulated banking AI gets decided.</GradientText>
          </h2>
          <p className="m-0 mt-4 text-white/58 text-[15px] leading-relaxed max-w-[580px] mx-auto">
            Apply for a complimentary Delegate Pass (by invitation and qualification) or enquire about commercial sponsorship for World AI Show | AI in Banking and Financial Services | Dubai 2027 (24 March 2027 · DIFC District, Dubai, UAE · 1-Day Executive Decision Forum).
          </p>

          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <a
              href="/banking/attend/delegate"
              className="px-8 py-3.5 rounded-full text-black [color:#06111f!important] bg-[#C0F43C] font-extrabold text-sm shadow-[0_0_24px_rgba(192,244,60,0.24)] hover:shadow-[0_0_32px_rgba(192,244,60,0.4)] transition-all duration-200 hover:-translate-y-0.5"
            >
              Apply for a Delegate Pass ➔
            </a>
            <a
              href="/banking/sponsorship-enquiry"
              className="px-8 py-3.5 rounded-full text-white border border-white/25 bg-white/5 hover:border-cyan font-extrabold text-sm transition-all duration-200 hover:-translate-y-0.5"
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
