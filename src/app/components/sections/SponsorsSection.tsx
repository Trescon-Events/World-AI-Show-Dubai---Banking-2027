"use client";

import { GradientText } from "../Shared";

// Sponsor Row 1 Logos (Past World AI Show India Sponsors)
const sponsorRow1 = [
  { path: "/banking/images/sponsors/india-past/google-cloud.webp", alt: "Google Cloud" },
  { path: "/banking/images/sponsors/india-past/Dell-Technologies-Intel.webp", alt: "Dell Technologies & Intel" },
  { path: "/banking/images/sponsors/india-past/hewlett-packard.webp", alt: "Hewlett Packard Enterprise" },
  { path: "/banking/images/sponsors/india-past/hcl.webp", alt: "HCLTech" },
  { path: "/banking/images/sponsors/india-past/happiest-minds.webp", alt: "Happiest Minds" },
  { path: "/banking/images/sponsors/india-past/kpmg.webp", alt: "KPMG" },
  { path: "/banking/images/sponsors/india-past/sap.webp", alt: "SAP" },
  { path: "/banking/images/sponsors/india-past/oracle.webp", alt: "Oracle" },
];

// Sponsor Row 2 Logos (Past World AI Show India Sponsors)
const sponsorRow2 = [
  { path: "/banking/images/sponsors/india-past/cisco.webp", alt: "Cisco" },
  { path: "/banking/images/sponsors/india-past/Snowflake.webp", alt: "Snowflake" },
  { path: "/banking/images/sponsors/india-past/ui-path.webp", alt: "UiPath" },
  { path: "/banking/images/sponsors/india-past/automation-anywhere.webp", alt: "Automation Anywhere" },
  { path: "/banking/images/sponsors/india-past/eclerx.webp", alt: "eClerx" },
  { path: "/banking/images/sponsors/india-past/Searce.webp", alt: "Searce" },
  { path: "/banking/images/sponsors/india-past/vernacular-ai.webp", alt: "Vernacular.ai" },
  { path: "/banking/images/sponsors/india-past/Denodo.webp", alt: "Denodo" },
];

// Strategic & Association Partners Logos (Path: association subfolder)
const partnerLogos = [
  "/banking/images/sponsors/association/starfindo.webp",
  "/banking/images/sponsors/association/kumpul.webp",
  "/banking/images/sponsors/association/forums.webp",
  "/banking/images/sponsors/association/ddas.webp",
  "/banking/images/sponsors/association/belux.webp",
  "/banking/images/sponsors/association/lafrench.webp",
];

// Governments & Associations Who Have Worked With Us In The Past (matching worldaishow.com)
const governmentLogos = [
  { path: "/banking/images/sponsors/governments/meit.webp", alt: "Ministry of Electronics and Information Technology, Government of India" },
  { path: "/banking/images/sponsors/governments/mrt-govt-of-india.webp", alt: "Ministry of Road Transport & Highways, Government of India" },
  { path: "/banking/images/sponsors/governments/niti-aayog.webp", alt: "NITI Aayog" },
  { path: "/banking/images/sponsors/governments/NeGD.webp", alt: "National e-Governance Division (NeGD)" },
  { path: "/banking/images/sponsors/governments/digital-india.webp", alt: "Digital India" },
  { path: "/banking/images/sponsors/governments/govt-maharashtra.webp", alt: "Government of Maharashtra" },
  { path: "/banking/images/sponsors/governments/govt-andhra-pradesh.webp", alt: "Government of Andhra Pradesh" },
  { path: "/banking/images/sponsors/governments/dubai-police.webp", alt: "Dubai Police" },
  { path: "/banking/images/sponsors/governments/difc.webp", alt: "DIFC" },
  { path: "/banking/images/sponsors/governments/dubai-economy.webp", alt: "Dubai Economy" },
  { path: "/banking/images/sponsors/governments/supreme-council.webp", alt: "Supreme Council of Energy" },
  { path: "/banking/images/sponsors/governments/ministry-of-finance.webp", alt: "Ministry of Finance" },
  { path: "/banking/images/sponsors/governments/petroleum-development-oman.webp", alt: "Petroleum Development Oman" },
  { path: "/banking/images/sponsors/governments/oman-chmaber-of-commerce.webp", alt: "Oman Chamber of Commerce and Industry" },
  { path: "/banking/images/sponsors/governments/oman-banks-association.webp", alt: "Oman Banks Association" },
  { path: "/banking/images/sponsors/governments/qfc.webp", alt: "Qatar Financial Centre" },
];

export function SponsorsSection() {
  return (
    <section className="relative py-[100px] pb-0 bg-[#030b19] overflow-hidden max-sm:py-[72px] max-sm:pb-0" id="partners">
      <div className="w-[min(1114px,calc(100%-48px))] mx-auto max-sm:w-[min(100%-32px,1114px)]">
        {/* S9 · Sponsor band */}
        <div className="text-center mb-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-cyan/30 bg-cyan/10 text-cyan text-xs font-mono uppercase tracking-[2px]">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse"></span>
            Commercial Partnerships
          </div>
        </div>

        {/* Title */}
        <h2 className="text-center font-[850] text-white leading-[1.06] tracking-[-2px] text-[clamp(36px,4.6vw,56px)] max-w-[940px] mx-auto">
          Where Middle East banking leaders specify, procure, and{" "}
          <GradientText>deploy production AI</GradientText>
        </h2>

        <p className="mt-6 max-w-[820px] mx-auto text-center text-muted text-[18px] leading-[1.6] max-sm:text-[16px]">
          Middle East banks are finalising their 2027 technology procurement decisions now. Commercial partnerships are structured around 20-minute plenary keynotes, exclusive 75-minute workshop clinics, standardised 6 sqm, 9 sqm, and 12 sqm concourse booths, and private 15-buyer CXO closed-door boardrooms.
        </p>

        <div className="mt-8 flex justify-center">
          <a
            href="/banking/attend/sponsor/"
            className="inline-flex items-center justify-center gap-2 h-[52px] px-8 rounded-full font-extrabold text-[15px] text-[#06111F] [color:#06111F!important] bg-[#C0F43C] hover:shadow-[0_0_24px_rgba(192,244,60,0.35)] transition-all duration-200"
          >
            Explore Sponsorship Tiers <span>→</span>
          </a>
        </div>

        <p className="mt-14 mb-0 text-center font-mono text-xs uppercase tracking-[2px] text-white/55">
          Past Series Partners &amp; Sponsors
        </p>
      </div>

      {/* Two offset scrolling sponsor rows */}
      <div className="flex flex-col gap-5 mt-6 w-full overflow-hidden">
        {/* Row 1: MDEC, MIDA, Datadog, Quantexa, Denodo (slides right-to-left) */}
        <div className="relative w-full overflow-hidden">
          <div className="logo-marquee-rail flex gap-5 will-change-transform">
            {[...sponsorRow1, ...sponsorRow1, ...sponsorRow1].map((logo, index) => (
              <span
                key={`${logo.alt}-${index}`}
                className="flex-none grid place-items-center w-[190px] h-[82px] rounded-[12px] bg-white shadow-[0_0_28px_rgba(20,212,255,0.16)] select-none px-4"
              >
                <img
                  src={logo.path}
                  alt={logo.alt}
                  className="max-w-[140px] max-h-[50px] object-contain transition-all duration-300"
                  loading="lazy"
                  width={140}
                  height={50}
                />
              </span>
            ))}
          </div>
        </div>

        {/* Row 2: Magure, Alibaba-cloud, ey, avatai, darwin (slides left-to-right) */}
        <div className="relative w-full overflow-hidden">
          <div className="marquee-partners-reverse flex gap-5 will-change-transform">
            {[...sponsorRow2, ...sponsorRow2, ...sponsorRow2].map((logo, index) => (
              <span
                key={`${logo.alt}-${index}`}
                className="flex-none grid place-items-center w-[190px] h-[82px] rounded-[12px] bg-white shadow-[0_0_28px_rgba(20,212,255,0.16)] select-none px-4"
              >
                <img
                  src={logo.path}
                  alt={logo.alt}
                  className="max-w-[140px] max-h-[50px] object-contain transition-all duration-300"
                  loading="lazy"
                  width={140}
                  height={50}
                />
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Governments and Associations Who Have Worked With Us In The Past (4x4 Grid from worldaishow.com) */}
      <div className="mt-20 py-16 bg-white text-center">
        <div className="w-[min(1114px,calc(100%-48px))] mx-auto max-sm:w-[min(100%-32px,1114px)]">
          <h3 className="m-0 mb-10 text-[#151923] font-[850] text-[clamp(22px,2.8vw,32px)] leading-[1.2] tracking-[-0.5px] uppercase max-w-[820px] mx-auto">
            Governments and Associations Who Have Worked With Us In The Past
          </h3>

          <div className="grid grid-cols-4 border border-slate-200 rounded-[16px] overflow-hidden max-md:grid-cols-2">
            {governmentLogos.map((logo) => (
              <div
                key={logo.alt}
                className="flex items-center justify-center h-[126px] p-5 border-r border-b border-slate-200 bg-white hover:bg-slate-50 transition-colors duration-200"
              >
                <img
                  src={logo.path}
                  alt={logo.alt}
                  className="max-w-[165px] max-h-[82px] object-contain"
                  loading="lazy"
                  width={165}
                  height={82}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Partners single row horizontal infinite marquee slider with hover pause */}
      <div className="p-[28px_0_34px] bg-slate-50 border-t border-slate-200 text-center overflow-hidden">
        <p className="m-0 mb-[26px] text-[18px] font-bold text-[#151923] uppercase tracking-[1.5px] select-none">
          Strategic &amp; Media Partners
        </p>
        <div className="relative w-full overflow-hidden">
          <div className="marquee-partners flex items-center gap-[64px]">
            {[...partnerLogos, ...partnerLogos].map((logo, index) => (
              <div
                key={`${logo}-${index}`}
                className="flex-none w-[140px] h-[52px] flex items-center justify-center select-none"
              >
                <img
                  src={logo}
                  alt="Partner Logo"
                  className="max-w-full max-h-full object-contain filter hover:brightness-105 transition-all duration-300"
                  loading="lazy"
                  width={140}
                  height={52}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
