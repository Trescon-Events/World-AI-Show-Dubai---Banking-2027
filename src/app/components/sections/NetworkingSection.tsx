"use client";

import { useState } from "react";
import { GradientText } from "../Shared";

const buyingUnitConstituencies = [
  {
    title: "Commercial & Retail Banking (Buy-Side 70%+)",
    desc: "CIOs, CTOs, Chief Data & AI Officers, Chief Digital Officers, Heads of Retail Banking, Heads of Core Transformation.",
    badge: "01 · COMMERCIAL & RETAIL BANKING",
  },
  {
    title: "Risk, Compliance & Financial Crime",
    desc: "Chief Risk Officers (CROs), Chief Compliance Officers (CCOs), Heads of AML, Heads of Fraud Risk, MLROs, Model Governance Leads.",
    badge: "02 · RISK, COMPLIANCE & FINCRIME",
  },
  {
    title: "Insurers, Wealth & Asset Managers",
    desc: "Chief Operating Officers (COOs), Chief Investment Officers, Heads of Underwriting, Heads of Claims Automation, Actuarial Leads.",
    badge: "03 · INSURERS, WEALTH & ASSET MGMT",
  },
  {
    title: "Institutional Hosts & Regulators",
    desc: "Central Bank of the UAE (CBUAE), Dubai Financial Services Authority (DFSA), DIFC Authority, UAE FIU, ADGM.",
    badge: "04 · REGULATORS & INSTITUTIONAL HOSTS",
  },
  {
    title: "Global Cloud, Core & AI Providers",
    desc: "Enterprise software platforms, accelerated compute providers, fraud/AML specialists, core banking modernisers, system integrators.",
    badge: "05 · CLOUD, CORE & AI PROVIDERS",
  },
];

const thrivingEnvironmentItems = [
  {
    title: "Keynotes and Panel Sessions",
    image: "/banking/images/agenda/keynotes.webp",
  },
  {
    title: "Executive Roundtables",
    image: "/banking/images/Attend/AI-decision-maker.webp",
  },
  {
    title: "Closed-Door Boardroom Discussions",
    image: "/banking/images/agenda/Fireside.webp",
  },
  {
    title: "1-on-1 Matchmaking Lounges",
    image: "/banking/images/Attend/partner-with.webp",
  },
];

export function NetworkingSection() {
  const [, setIsHovered] = useState(false);

  return (
    <section className="relative py-[104px] bg-[#020C21] overflow-hidden max-sm:py-[72px]" id="networking">
      <div className="w-[min(1114px,calc(100%-48px))] mx-auto max-sm:w-[min(100%-32px,1114px)]">
        {/* S7 · Engage with Five Governed Institutional Constituencies */}
        <div className="flex flex-col items-center text-center">
          <div className="max-w-[860px] mb-12">
            <h2 className="font-[850] text-white leading-[1.06] tracking-[-1.8px] text-[clamp(32px,4.2vw,50px)] m-0">
              Engage with Five Governed{" "}
              <GradientText>Institutional Constituencies</GradientText>
            </h2>
            <p className="mt-5 mb-0 text-muted text-[18px] leading-[1.55] max-sm:text-[16px]">
              Meet with over 300 pre-qualified C-suite banking, insurance, risk, compliance, and regulatory decision-makers convening at the same place with the same goals.
            </p>
          </div>

          {/* Component C4 — Uniform 5 Constituency Blocks Grid */}
          <div className="w-full grid grid-cols-6 gap-5 max-[980px]:grid-cols-2 max-sm:grid-cols-1 text-left">
            {buyingUnitConstituencies.map((item, idx) => (
              <article
                key={item.title}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className={`group flex flex-col justify-between min-h-[210px] p-7 rounded-[18px] border border-[#18d4ff]/25 bg-gradient-to-br from-[#00ceff]/8 to-[#c0f43c]/4 shadow-[inset_0_0_28px_rgba(65,220,255,0.06),0_20px_60px_rgba(0,0,0,0.22)] hover:-translate-y-0.5 hover:border-[#C0F43C]/60 hover:shadow-[inset_0_0_28px_rgba(192,244,60,0.08),0_20px_60px_rgba(0,0,0,0.3)] transition-all duration-300 max-[980px]:col-span-1 ${
                  idx < 3 ? "col-span-2" : "col-span-3"
                }`}
              >
                <div>
                  <span className="inline-block font-mono text-[11px] uppercase tracking-[1.8px] text-cyan mb-3">
                    {item.badge}
                  </span>
                  <h3 className="text-white text-[20px] font-extrabold leading-[1.25] mb-2.5 group-hover:text-[#C0F43C] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted text-[15px] leading-[1.6] m-0">
                    {item.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Dedicated 2x2 Section: Creating a Thriving Environment (Page 8 Bottom) */}
        <div className="mt-24 pt-16 border-t border-white/10">
          <div className="text-center mb-12">
            <h3 className="text-white font-[850] text-[clamp(30px,3.8vw,46px)] leading-[1.08] tracking-[-1.4px] m-0">
              Creating a <GradientText>Thriving Environment</GradientText>
            </h3>
          </div>
          <div className="grid grid-cols-2 gap-6 max-sm:grid-cols-1">
            {thrivingEnvironmentItems.map((item) => (
              <figure
                key={item.title}
                className="group relative m-0 rounded-[20px] border border-white/15 bg-[#041022] overflow-hidden shadow-[0_18px_45px_rgba(0,0,0,0.38)] hover:border-[#C0F43C]/50 transition-all duration-300"
              >
                <div className="aspect-[16/10] w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    width={800}
                    height={500}
                    loading="lazy"
                    className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  />
                </div>
                <div className="p-5 bg-[#041022]/95 border-t border-white/10 text-left">
                  <strong className="block text-white text-[18px] font-extrabold leading-snug group-hover:text-[#C0F43C] transition-colors">
                    {item.title}
                  </strong>
                </div>
              </figure>
            ))}
          </div>
        </div>

        {/* S8 · A Summit Composed for Regulated Banking Buyers & Providers (Page 9 Top) */}
        <div className="mt-24 pt-16 border-t border-white/10">
          <div className="text-center mb-10">
            <h3 className="text-white font-[850] text-[clamp(30px,3.8vw,44px)] leading-[1.08] tracking-[-1.2px]">
              A Summit Composed for <GradientText>Regulated Banking Buyers &amp; Providers</GradientText>
            </h3>
          </div>

          <div className="grid grid-cols-2 gap-6 max-[980px]:grid-cols-1">
            {/* Door 1: Delegate Pass */}
            <div className="group relative flex flex-col justify-between p-8 rounded-[22px] border border-[#C0F43C]/35 bg-gradient-to-br from-[#C0F43C]/[0.09] via-[#041022] to-[#041022] shadow-[0_20px_50px_rgba(0,0,0,0.35)] overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-[#C0F43C]/80 hover:shadow-[0_28px_70px_rgba(0,0,0,0.55),0_0_42px_rgba(192,244,60,0.14)]">
              <div className="pointer-events-none absolute inset-x-10 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#C0F43C]/50 to-transparent transition-all duration-500 group-hover:inset-x-4 group-hover:via-[#C0F43C] group-hover:shadow-[0_0_16px_#C0F43C]" />
              <div className="pointer-events-none absolute -top-24 -right-24 w-64 h-64 rounded-full bg-[#C0F43C]/10 blur-[60px] opacity-40 transition-all duration-500 group-hover:opacity-100 group-hover:scale-125" />
              <span className="pointer-events-none select-none absolute top-5 right-7 font-mono font-black text-[54px] leading-none tracking-[-3px] text-white/[0.03] transition-colors duration-300 group-hover:text-[#C0F43C]/[0.09]">
                01
              </span>

              <div className="relative z-10">
                <h4 className="text-white font-extrabold text-[24px] leading-[1.2] mb-3 transition-colors duration-300 group-hover:text-[#f5ffe0]">
                  Delegate Pass — complimentary, strictly by invitation and qualification
                </h4>
                <p className="text-muted text-[16px] leading-[1.6] mb-6 transition-colors duration-300 group-hover:text-white/85">
                  Senior banking, insurance, and financial services executives attend by invitation on a complimentary Delegate Pass, subject to qualification against an active operational budget or deployment mandate.
                </p>
              </div>
              <div className="relative z-10">
                <a
                  href="/banking/attend/delegate/"
                  className="inline-flex items-center justify-center gap-2.5 h-[50px] px-7 rounded-full font-extrabold text-[15px] text-[#06111F] [color:#06111F!important] bg-[#C0F43C] transition-all duration-300 group-hover:bg-[#cdfb50] group-hover:shadow-[0_0_28px_rgba(192,244,60,0.45)] hover:scale-[1.02]"
                >
                  Apply for a Delegate Pass
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>

            {/* Door 2: Business Pass */}
            <div className="group relative flex flex-col justify-between p-8 rounded-[22px] border border-cyan/35 bg-gradient-to-br from-cyan/[0.09] via-[#041022] to-[#041022] shadow-[0_20px_50px_rgba(0,0,0,0.35)] overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan/80 hover:shadow-[0_28px_70px_rgba(0,0,0,0.55),0_0_42px_rgba(24,212,255,0.14)]">
              <div className="pointer-events-none absolute inset-x-10 top-0 h-[2px] bg-gradient-to-r from-transparent via-cyan/50 to-transparent transition-all duration-500 group-hover:inset-x-4 group-hover:via-cyan group-hover:shadow-[0_0_16px_#18d4ff]" />
              <div className="pointer-events-none absolute -top-24 -right-24 w-64 h-64 rounded-full bg-cyan/10 blur-[60px] opacity-40 transition-all duration-500 group-hover:opacity-100 group-hover:scale-125" />
              <span className="pointer-events-none select-none absolute top-5 right-7 font-mono font-black text-[54px] leading-none tracking-[-3px] text-white/[0.03] transition-colors duration-300 group-hover:text-cyan/[0.09]">
                02
              </span>

              <div className="relative z-10">
                <h4 className="text-white font-extrabold text-[24px] leading-[1.2] mb-3 transition-colors duration-300 group-hover:text-[#e6fbff]">
                  Business Pass — paid commercial access with strictly capped quota
                </h4>
                <p className="text-muted text-[16px] leading-[1.6] mb-6 transition-colors duration-300 group-hover:text-white/85">
                  Business Passes provide commercial access for technology solution providers, software vendors, and consultancies outside the invitation criteria, with ticket numbers strictly capped to protect room composition.
                </p>
              </div>
              <div className="relative z-10">
                <a
                  href="/banking/attend/"
                  className="inline-flex items-center justify-center gap-2.5 h-[50px] px-7 rounded-full font-extrabold text-[15px] text-white border border-cyan/50 bg-cyan/10 transition-all duration-300 group-hover:bg-cyan group-hover:text-[#041022] group-hover:[color:#041022!important] group-hover:border-cyan group-hover:shadow-[0_0_28px_rgba(24,212,255,0.4)] hover:scale-[1.02]"
                >
                  Purchase a Business Pass
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
