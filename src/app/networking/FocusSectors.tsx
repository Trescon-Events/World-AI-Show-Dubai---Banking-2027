"use client";

import { useState } from "react";
import { GradientText } from "../components/Shared";

const industries = [
  ["Banking, Financial Services and Insurance", "banking.webp"],
  ["Manufacturing", "manufacturing.webp"],
  ["Retail and Ecommerce", "retail.webp"],
  ["Healthcare and Pharma", "health.webp"],
  ["Telecommunications", "telecomunication.webp"],
  ["Supply Chain and Logistics", "logistic.webp"],
  ["Government, Public Sector and Smart Cities", "Government.webp"],
  ["Energy and Utilities", "energy.webp"],
  ["Media and Entertainment", "Media.webp"],
  ["Travel and Tourism", "Travel.webp"],
  ["Education", "Education.webp"],
  ["Agriculture", "Agriculture.webp"],
] as const;

const cLevelRoles = [
  "Chief Operating Officer (COO)",
  "Chief Risk Officer (CRO)",
  "Chief Compliance Officer (CCO)",
  "Chief Data & AI Officer (CDO / CAIO)",
  "Chief Information Security Officer (CISO)",
];

const seniorRoles = [
  "Head of Retail & Corporate Banking",
  "Head of Model Risk Management",
  "Head of Financial Crime & AML",
  "Head of Credit Underwriting & Treasury",
  "Central Bank & Regulatory Supervisor",
];

export function FocusSectors() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative py-[104px] bg-[#08121E] border-t-2 border-[#0069B8] overflow-hidden max-sm:py-[72px]" id="focus-sectors">
      <div className="w-[min(1172px,calc(100%-48px))] mx-auto max-sm:w-[calc(100%-32px)]">
        
        {/* Industry Focus and Meet grid */}
        <div className="grid grid-cols-[0.72fr_1fr] gap-9 items-center max-[980px]:grid-cols-1 max-[980px]:gap-12">
          
          {/* Headline Column */}
          <div>
            <h2 className="font-heading text-left font-bold text-white leading-[1.06] tracking-[-0.02em] text-[clamp(36px,4.8vw,54px)] max-[980px]:text-center">
              Ecosystem &amp; <br />
              <GradientText tone="teal">sectors.</GradientText>
            </h2>
            <p className="mt-6 mb-8 text-white/80 text-[18px] leading-[1.5] max-[980px]:text-center max-sm:text-[16px]">
              A single curated frame - no spectators, no fluff. Just the people writing the cheques, shipping the systems and shaping the policy.
            </p>
            <div 
              className="group relative mt-6 rounded-[20px] border border-[#0069B8]/40 overflow-hidden max-sm:max-w-md max-sm:mx-auto cursor-pointer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Subtle Brand Tint Overlay */}
              <div 
                className={`absolute inset-0 z-10 pointer-events-none mix-blend-color transition-colors duration-500 ease-out ${
                  isHovered ? "bg-[#009EAD]/30" : "bg-[#0069B8]/25"
                }`} 
              />
              <img
                className="w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                src="/banking/images/networking/meet-leaders.webp"
                alt="Networking event attendees"
                loading="lazy"
                width={450}
                height={300}
              />
            </div>
          </div>

          {/* Industry Cards Grid */}
          <div className="grid grid-cols-3 gap-3.5 max-[980px]:grid-cols-2 max-sm:grid-cols-1">
            {industries.map(([item, icon]) => (
              <article
                key={item}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="group flex flex-col min-h-[100px] p-[14px] rounded-[12px] border border-[#0069B8]/45 bg-[#0D1B2E] shadow-[0_12px_28px_rgba(8,18,30,0.22)] select-none hover:-translate-y-0.5 hover:border-[#F15928] transition-all duration-300 cursor-pointer"
              >
                <span className="grid place-items-center w-10 h-10 mb-2 rounded-[8px] text-white bg-[#0069B8] group-hover:bg-[#F15928] transition-all duration-300">
                  <img
                    src={`/banking/icons/networking/${icon}`}
                    alt=""
                    width={22}
                    height={22}
                    className="w-[22px] h-[22px] object-contain brightness-0 invert transition-all duration-300"
                    aria-hidden="true"
                  />
                </span>
                <strong className="block text-white text-[14px] font-bold leading-[1.3] mt-1">
                  {item}
                </strong>
              </article>
            ))}
          </div>

        </div>

        {/* Roles slider marquee 1: C-Level */}
        <section className="mt-[78px] text-center" aria-labelledby="c-level-title">
          <h3 id="c-level-title" className="font-heading m-0 mb-5 text-white text-[24px] font-bold leading-none">
            C-level Executives
          </h3>
          <div className="w-[100vw] ml-[calc((100vw-100%)/-2)] overflow-hidden" aria-label="C-level Executives carousel">
            <div className="move-left flex w-max gap-6 px-7 pb-1.5 will-change-transform">
              {[...cLevelRoles, ...cLevelRoles, ...cLevelRoles].map((role, index) => (
                <span
                  key={`${role}-${index}`}
                  className="flex-none min-w-[250px] p-[15px_24px] rounded-[10px] text-white bg-[#0069B8] border border-white/15 text-center font-bold text-[14px]"
                >
                  {role}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Roles slider marquee 2: Senior Executives */}
        <section className="mt-8 text-center" aria-labelledby="senior-title">
          <h3 id="senior-title" className="font-heading m-0 mb-4 text-white text-[24px] font-bold leading-none">
            Other Senior Executives
          </h3>
          <div className="w-[100vw] ml-[calc((100vw-100%)/-2)] overflow-hidden" aria-label="Other Senior Executives carousel">
            <div className="move-right flex w-max gap-6 px-7 pb-1.5 will-change-transform">
              {[...seniorRoles, ...seniorRoles, ...seniorRoles].map((role, index) => (
                <span
                  key={`${role}-${index}`}
                  className="flex-none min-w-[250px] p-[15px_24px] rounded-[10px] text-white bg-[#0D1B2E] border border-[#009EAD] text-center font-bold text-[14px]"
                >
                  {role}
                </span>
              ))}
            </div>
          </div>
        </section>

      </div>
    </section>
  );
}
