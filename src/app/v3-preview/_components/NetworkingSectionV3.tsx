"use client";

import { useEffect, useRef, useState } from "react";
import { GradientText } from "./SharedV3";

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
    title: "1-on-1 Matchmaking Lounges",
    desc: "50+ pre-scheduled 1-on-1 bilateral commercial meetings in dedicated VIP matchmaking lounges, connecting buy-side banking and insurance budget holders directly with vetted AI solution providers.",
    image: "/banking/images/environment/matchmaking-lounges.jpg",
  },
  {
    num: "02",
    title: "Closed-Door CXO Boardrooms",
    desc: "Three curated 60-minute private boardroom sessions — Auditing Financial AI, Financial Crime Arms Race, and Enterprise AI Procurement — each hosting 20 pre-qualified buy-side CXOs under Chatham House Rule.",
    image: "/banking/images/environment/boardroom-discussions.jpg",
  },
  {
    num: "03",
    title: "Interactive Experience Labs",
    desc: "Seven live floor simulations including the Financial Crime Investigation Lab, Explain My Loan Decision Lab, Autonomous Payment Challenge, AI Accountability Hearing, Insurance Claim Triage, Control Room & Procurement Clinic.",
    image: "/banking/images/v3-preview/experience-labs.jpg",
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
      className="relative pt-[104px] pb-0 bg-[#F7F9FC] overflow-x-clip max-sm:pt-[72px] max-sm:pb-0"
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
    </section>
  );
}
