"use client";

import { useEffect, useRef, useState } from "react";
import { GradientText, V3_BASE } from "./SharedV3";

const buyingUnitConstituencies = [
  {
    title: "Commercial, Retail & Islamic Banking (Buy-Side 80%+)",
    desc: "Group CEOs, CIOs, CTOs, CDAIOs, Heads of Core Banking, Digital Channels, Retail & Corporate Payments.",
    badge: "COMMERCIAL, RETAIL & ISLAMIC BANKING",
  },
  {
    title: "Risk, Compliance & Financial Crime",
    desc: "Chief Risk Officers (CROs), Chief Compliance Officers (CCOs), MLROs, Heads of AML, Heads of Fraud & Model Risk.",
    badge: "RISK, COMPLIANCE & FINCRIME",
  },
  {
    title: "Insurers, Wealth & Asset Managers",
    desc: "Insurance CEOs, COOs, Chief Claims & Underwriting Officers, Actuarial Leads, and Chief Investment Officers (CIOs).",
    badge: "INSURERS, WEALTH & ASSET MGMT",
  },
  {
    title: "Institutional Hosts & Regulators",
    desc: "Central Bank of the UAE (CBUAE), Dubai Financial Services Authority (DFSA), DIFC Authority, UAE MoF, UAE AI Office, ADGM FSRA.",
    badge: "REGULATORS & INSTITUTIONAL HOSTS",
  },
  {
    title: "Specialist Technology & Cloud Providers",
    desc: "Fraud/AML engines, model governance & explainability suites, sovereign cloud infrastructure, core banking & insurance AI specialists.",
    badge: "SPECIALIST TECH & CLOUD PROVIDERS",
  },
];

const thrivingEnvironmentItems = [
  {
    num: "01",
    title: "1-on-1 Matchmaking Lounges (50+ Qualified Bilateral Meetings)",
    desc: "50+ pre-scheduled 1-on-1 bilateral commercial meetings in dedicated VIP matchmaking lounges, connecting buy-side banking and insurance budget holders directly with vetted AI solution providers.",
    image: "/banking/images/environment/matchmaking-lounges.jpg",
  },
  {
    num: "02",
    title: "Closed-Door CXO Boardrooms (3 Sessions · 20 Pre-Qualified Buyers Each)",
    desc: "Three curated 60-minute private boardroom sessions — Auditing Financial AI, Financial Crime Arms Race, and Enterprise AI Procurement — each hosting 20 pre-qualified buy-side CXOs under Chatham House Rule.",
    image: "/banking/images/environment/boardroom-discussions.jpg",
  },
  {
    num: "03",
    title: "Interactive Experience Labs (7 Hands-On Floor Simulations)",
    desc: "Seven live floor simulations including the Financial Crime Investigation Lab, Explain My Loan Decision Lab, Autonomous Payment Challenge, AI Accountability Hearing, Insurance Claim Triage, Control Room & Procurement Clinic.",
    image: "/banking/images/environment/executive-roundtables.jpg",
  },
  {
    num: "04",
    title: "Keynotes, Panels & Clinical Workshops",
    desc: "15-minute headline buyer keynotes, regulatory plenaries, and two parallel 75-minute clinical workshops (Workshop A: Bank-Ready Deployment & Workshop B: Intelligent Lending, Fraud & Insurance Operations).",
    image: "/banking/images/environment/keynotes.jpg",
  },
];

function ThrivingEnvironmentShowcase() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollStage, setScrollStage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = trackRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const scrollable = el.offsetHeight - window.innerHeight;
      if (scrollable <= 0) return;
      const raw = -rect.top / scrollable;
      const clamped = Math.max(0, Math.min(1, raw));
      setScrollStage(clamped * (thrivingEnvironmentItems.length - 1));
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const activeIndex = Math.min(
    thrivingEnvironmentItems.length - 1,
    Math.max(0, Math.round(scrollStage))
  );

  return (
    <div className="mt-24 pt-16 border-t border-[#0069B8]/20">
      <div className="w-[min(1172px,calc(100%-48px))] max-sm:w-[calc(100%-32px)] mx-auto text-center mb-12">
        <h3
          data-aos="fade-up"
          className="m-0 text-[#08121E] font-semibold text-[clamp(30px,3.8vw,48px)] leading-[1.2] tracking-[-0.01em] max-w-[820px] mx-auto"
        >
          Designed for <GradientText tone="blue">Maximum Engagement</GradientText>
        </h3>
      </div>

      <div
        ref={trackRef}
        className="relative w-full"
        style={{ height: `${thrivingEnvironmentItems.length * 100}vh` }}
      >
        <div className="sticky top-0 h-dvh w-full overflow-hidden bg-[#08121E] border-y border-[#0069B8]">
          {thrivingEnvironmentItems.map((item, idx) => {
            const revealProgress =
              idx === 0 ? 1 : Math.max(0, Math.min(1, scrollStage - (idx - 1)));
            const insetSide = (1 - revealProgress) * 50;
            const nextReveal = Math.max(0, Math.min(1, scrollStage - idx));
            const imgScale = 1.08 - revealProgress * 0.08 + nextReveal * 0.05;

            return (
              <div
                key={item.title}
                className="absolute inset-0 w-full h-full overflow-hidden"
                style={{
                  clipPath: `inset(0% ${insetSide.toFixed(2)}% 0% ${insetSide.toFixed(2)}%)`,
                  zIndex: idx,
                  willChange: "clip-path",
                }}
              >
                <div className="relative w-full h-full">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    style={{
                      transform: `scale(${imgScale.toFixed(3)})`,
                      transition: "transform 120ms linear",
                    }}
                  />
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(8, 18, 30, 0.90), rgba(8, 18, 30, 0.35), transparent)",
                    }}
                  />
                </div>
              </div>
            );
          })}

          {thrivingEnvironmentItems.map((item, idx) => {
            const isCurrent = idx === activeIndex;
            return (
              <div
                key={item.title}
                className={`absolute inset-0 p-[3.5vw] max-md:p-6 flex items-end justify-start bg-gradient-to-t from-[#08121E]/95 via-[#08121E]/45 to-transparent transition-all duration-500 ${
                  isCurrent
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 translate-y-4 pointer-events-none"
                }`}
                style={{ zIndex: 50 + idx }}
              >
                <div className="flex flex-col gap-2.5 self-end mb-1 max-w-[820px]">
                  <span className="inline-block w-fit px-3 py-1 rounded-full bg-[#F15928] text-white font-mono text-[11.5px] font-bold tracking-[0.08em]">
                    {item.num}
                  </span>
                  <div className="leading-[1.15] text-[clamp(22px,2.6vw,38px)] font-display font-semibold uppercase tracking-[-0.01em]">
                    <GradientText tone="teal">{item.title}</GradientText>
                  </div>
                  <p className="m-0 text-[#F7F9FC]/90 text-[clamp(14.5px,1.15vw,17.5px)] leading-[1.55] font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export function NetworkingSectionV3() {
  return (
    <section
      className="relative py-[104px] bg-[#F7F9FC] overflow-x-clip max-sm:py-[72px]"
      id="networking"
    >
      <div className="w-[min(1172px,calc(100%-48px))] mx-auto max-sm:w-[calc(100%-32px)]">
        <div className="flex flex-col items-center text-center">
          <div className="max-w-[880px] mb-12">
            <h2 className="font-semibold text-[#08121E] leading-[1.2] tracking-[-0.01em] text-[clamp(30px,3.8vw,48px)] m-0">
              A Summit Composed for{" "}
              <GradientText tone="blue">Regulated Financial Buyers &amp; Providers</GradientText>
            </h2>
            <p className="mt-5 mb-0 text-[#334155] text-[clamp(16px,1.5vw,19px)] leading-[1.45]">
              Convene with 300–400 pre-qualified C-suite banking, insurance, risk, compliance, and regulatory decision-makers across the UAE, GCC, and selected African markets under a governed 80%+ buy-side institutional ratio.
            </p>
          </div>

          {/* Component C4 — Five Governed Constituencies Grid */}
          <div className="w-full grid grid-cols-6 gap-6 max-[980px]:grid-cols-2 max-sm:grid-cols-1 text-left">
            {buyingUnitConstituencies.map((item, idx) => (
              <article
                key={item.title}
                className={`group flex flex-col justify-between min-h-[210px] p-7 rounded-[18px] border border-[#0069B8]/22 bg-white shadow-[0_12px_32px_rgba(8,18,30,0.06)] hover:-translate-y-0.5 hover:border-[#0069B8] transition-all duration-300 max-[980px]:col-span-1 ${
                  idx < 3 ? "col-span-2" : "col-span-3"
                }`}
              >
                <div>
                  <span className="inline-block text-[12px] font-bold uppercase tracking-[0.08em] text-[#0069B8] mb-3">
                    {item.badge}
                  </span>
                  <h3 className="text-[#08121E] text-[20px] font-semibold leading-[1.3] mb-2.5 group-hover:text-[#0069B8] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[#334155] text-[15px] leading-[1.6] m-0">
                    {item.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Sticky Scroll 4-Slide Feature */}
      <ThrivingEnvironmentShowcase />

      {/* Two-Door Attendance Model */}
      <div className="w-[min(1172px,calc(100%-48px))] mx-auto max-sm:w-[calc(100%-32px)]">
        <div className="mt-24 pt-16 border-t border-[#0069B8]/20">
          <div className="text-center mb-10">
            <h3 className="text-[#08121E] font-semibold text-[clamp(26px,3vw,40px)] leading-[1.2] tracking-[-0.01em]">
              Two-Door <GradientText tone="blue">Institutional Attendance Model</GradientText>
            </h3>
          </div>

          <div className="grid grid-cols-2 gap-6 max-[980px]:grid-cols-1">
            {/* Door 1: Delegate Pass */}
            <div
              data-aos="fade-right"
              data-aos-delay="100"
              className="group relative flex flex-col justify-between p-8 rounded-[22px] border border-[#0069B8]/22 border-t-4 border-t-[#F15928] bg-white shadow-[0_12px_32px_rgba(8,18,30,0.06)] overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-[#0069B8]"
            >
              <div className="relative z-10">
                <span className="inline-block text-[11.5px] font-mono font-bold uppercase tracking-[0.1em] text-[#F15928] mb-2">
                  Door 1 · Buy-Side 80%+
                </span>
                <h4 className="text-[#08121E] font-semibold text-[22px] leading-[1.3] mb-3 transition-colors duration-300 group-hover:text-[#0069B8]">
                  Delegate Pass — complimentary by invitation &amp; qualification
                </h4>
                <p className="text-[#334155] text-[16px] leading-[1.6] mb-6">
                  Complimentary Delegate Passes are reserved by invitation and qualification for senior buy-side C-suite leaders across commercial and Islamic banks, insurers, wealth and asset managers, and financial regulators holding active deployment mandates.
                </p>
              </div>
              <div className="relative z-10">
                <a
                  href={`${V3_BASE}/attend/delegate/`}
                  className="bb-btn-primary inline-flex items-center justify-center gap-2.5 h-[50px] px-7 font-bold text-[15px]"
                >
                  Buy Tickets
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </div>

            {/* Door 2: Business Pass */}
            <div
              data-aos="fade-left"
              data-aos-delay="200"
              className="group relative flex flex-col justify-between p-8 rounded-[22px] border border-[#0069B8]/22 border-t-4 border-t-[#0069B8] bg-white shadow-[0_12px_32px_rgba(8,18,30,0.06)] overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-[#0069B8]"
            >
              <div className="relative z-10">
                <span className="inline-block text-[11.5px] font-mono font-bold uppercase tracking-[0.1em] text-[#0069B8] mb-2">
                  Door 2 · Strictly Capped Quota
                </span>
                <h4 className="text-[#08121E] font-semibold text-[22px] leading-[1.3] mb-3 transition-colors duration-300 group-hover:text-[#0069B8]">
                  Business Pass — paid commercial vendor access with strictly capped quota
                </h4>
                <p className="text-[#334155] text-[16px] leading-[1.6] mb-6">
                  Paid Business Passes provide commercial access for specialist technology providers, cloud platforms, software vendors, and consultancies, with allocations strictly capped to preserve the 80%+ institutional buy-side ratio.
                </p>
              </div>
              <div className="relative z-10">
                <a
                  href={`${V3_BASE}/attend/`}
                  className="bb-btn-outline-light inline-flex items-center justify-center gap-2.5 h-[50px] px-7 font-bold text-[15px]"
                >
                  Explore Business Pass Access
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
