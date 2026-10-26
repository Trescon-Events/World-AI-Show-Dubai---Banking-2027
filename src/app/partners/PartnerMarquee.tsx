"use client";

import { GradientText } from "../components/Shared";

/* ── All logos combined for marquee rows ─────────────────────── */
const row1 = [
  { path: "/banking/images/sponsors/strategic/mdec.webp", alt: "MDEC" },
  { path: "/banking/images/sponsors/strategic/mida.webp", alt: "MIDA" },
  { path: "/banking/images/sponsors/gold/datadog.webp", alt: "Datadog" },
  { path: "/banking/images/sponsors/gold/quantexa.webp", alt: "Quantexa" },
  { path: "/banking/images/sponsors/gold/denodo.webp", alt: "Denodo" },
  { path: "/banking/images/sponsors/gold/Alibaba-cloud.webp", alt: "Alibaba Cloud" },
  { path: "/banking/images/sponsors/gold/ey.webp", alt: "EY" },
];

const row2 = [
  { path: "/banking/images/sponsors/gold/Magure.webp", alt: "Magure" },
  { path: "/banking/images/sponsors/gold/avatai.webp", alt: "Avatai" },
  { path: "/banking/images/sponsors/gold/darwin.webp", alt: "Darwinbox" },
  { path: "/banking/images/sponsors/gold/Bluepower.webp", alt: "Bluepower" },
  { path: "/banking/images/sponsors/gold/Tcloud_logo.webp", alt: "TCloud" },
  { path: "/banking/images/sponsors/gold/ucloud.webp", alt: "UCloud" },
  { path: "/banking/images/sponsors/gold/asix.webp", alt: "ASIX" },
];

/* White-banner media & association logos */
const partnerLogos = [
  "/banking/images/sponsors/association/starfindo.webp",
  "/banking/images/sponsors/association/kumpul.webp",
  "/banking/images/sponsors/association/forums.webp",
  "/banking/images/sponsors/association/ddas.webp",
  "/banking/images/sponsors/association/belux.webp",
  "/banking/images/sponsors/association/lafrench.webp",
  "/banking/images/sponsors/media/abo.webp",
  "/banking/images/sponsors/media/analytic.webp",
  "/banking/images/sponsors/media/asia.webp",
  "/banking/images/sponsors/media/breakingai.webp",
  "/banking/images/sponsors/media/cio.webp",
  "/banking/images/sponsors/media/techdogs.webp",
  "/banking/images/sponsors/media/techrevolt.webp",
  "/banking/images/sponsors/media/techstorm.webp",
  "/banking/images/sponsors/media/trp.webp",
  "/banking/images/sponsors/media/wb.webp",
];

export function PartnerMarquee() {
  return (
    <section className="relative py-[92px] pb-0 bg-[#030b19] overflow-hidden max-sm:py-[62px]" id="exhibitors">
      <div className="w-[min(1114px,calc(100%-48px))] mx-auto max-sm:w-[min(100%-32px,1114px)] text-center mb-14">
        <h2 className="font-[850] text-white leading-tight tracking-[-1.5px] text-[clamp(36px,4.5vw,52px)]">
          The ecosystem, <GradientText>in motion.</GradientText>
        </h2>
        <p className="max-w-[620px] mx-auto mt-4 text-white/58 text-[16px] leading-relaxed">
          Hover over any row to pause the scrolling and inspect our confirmed summit sponsors and associate organizations.
        </p>
      </div>

      {/* Two offset scrolling sponsor rows */}
      <div className="flex flex-col gap-5 w-full overflow-hidden">
        {/* Row 1 — slides right-to-left */}
        <div className="relative w-full overflow-hidden">
          <div className="logo-marquee-rail flex gap-5 will-change-transform">
            {[...row1, ...row1, ...row1, ...row1].map((logo, index) => (
              <span
                key={`${logo.alt}-r1-${index}`}
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

        {/* Row 2 — slides left-to-right */}
        <div className="relative w-full overflow-hidden">
          <div className="marquee-partners-reverse flex gap-5 will-change-transform">
            {[...row2, ...row2, ...row2, ...row2].map((logo, index) => (
              <span
                key={`${logo.alt}-r2-${index}`}
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

      {/* Partners white banner slider */}
      <div id="media-marquee" className="mt-[92px] p-[28px_0_34px] bg-white text-center overflow-hidden">
        <p className="m-0 mb-[26px] text-[18px] font-bold text-[#151923] uppercase tracking-[1.5px] select-none">
          Media &amp; Association Partners
        </p>
        <div className="relative w-full overflow-hidden">
          <div className="marquee-partners flex items-center gap-[56px]">
            {[...partnerLogos, ...partnerLogos, ...partnerLogos].map((logo, index) => (
              <div
                key={`${logo}-mp-${index}`}
                className="flex-none w-[130px] h-[50px] flex items-center justify-center select-none"
              >
                <img
                  src={logo}
                  alt="Partner Logo"
                  className="max-w-full max-h-full object-contain filter hover:brightness-105 transition-all duration-300"
                  loading="lazy"
                  width={130}
                  height={50}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
