import type { Metadata } from "next";
import { Header } from "../components/sections/Header";
import { PartnersHero } from "../partners/PartnersHero";
import { SponsorsGrid } from "../partners/SponsorsGrid";
import { PartnerShowcase } from "../partners/PartnerShowcase";
import { FloorPlanTab } from "../components/sections/FloorPlanTab";
import { FooterSection } from "../components/sections/FooterSection";
import { GradientText } from "../components/Shared";

export const metadata: Metadata = {
  title: "Exhibition & Concourse Hub | World AI Show | AI in Banking and Financial Services | Dubai 2027",
  description:
    "Explore the interactive concourse floorplan and 360° virtual tour for World AI Show | AI in Banking and Financial Services | Dubai 2027: 12 sqm Premium Island, 9 sqm Prominent Booths, 6 sqm Turnkey Booths, and 2 CXO Closed-Door Boardroom Suites.",
};

const footprints = [
  {
    size: "12 sqm",
    title: "12 sqm Premium Island (Speaking Sponsor)",
    desc: "Prime concourse island footprint paired with a 20-Minute Plenary Keynote or Fireside Chat and 12 Executive Passes.",
  },
  {
    size: "9 sqm",
    title: "9 sqm Prominent Booths (Engagement & Industry Partners)",
    desc: "Prominent 9 sqm executive demonstration booth paired with either a 75-Minute Workshop Clinic leadership role or a Plenary Panel seat.",
  },
  {
    size: "6 sqm",
    title: "6 sqm Turnkey Booths (Exhibitors)",
    desc: "Standardised 6 sqm turnkey concourse booth engineered for live enterprise architecture demonstrations and bilateral buyer meetings.",
  },
  {
    size: "Boardrooms",
    title: "2 CXO Private Closed-Door Boardroom Suites",
    desc: "Chatham House Rule executive boardroom suites hosting 15 pre-qualified wishlist banking CXOs for 60-minute curated sessions.",
  },
  {
    size: "Concourse",
    title: "Dedicated Technology Demonstration Concourse & Bilateral Meeting Lounge",
    desc: "High-density networking concourse hosting 1-on-1 AI matchmaking tables, coffee breaks, and the Closing Executive Reception.",
  },
  {
    size: "Venue Showcase",
    title: "DIFC District Event Facility / Jumeirah Emirates Towers",
    desc: "Positioned in the heart of Dubai's financial district (Subject to final technical clearance) for Day 1 of the March Dubai Cluster.",
  },
];

export default function ExhibitionPage() {
  return (
    <main className="page-exhibition relative min-h-screen bg-gradient-to-b from-[#020814] via-[#031022] to-[#020a18] text-white font-space-grotesk overflow-x-hidden">
      <Header activeItem="Exhibition" />

      <PartnersHero />

      {/* Section 11 · Standardised Booth Footprints & Interactive Concourse Map */}
      <section className="relative py-20 bg-[#020b1c] border-y border-white/10">
        <div className="w-[min(1114px,calc(100%-48px))] mx-auto">
          <div className="text-center mb-12">
            <span className="inline-flex items-center mb-3 px-3.5 py-1.5 border border-cyan/30 rounded-full text-cyan font-mono text-[12px] uppercase tracking-[2px] bg-cyan/5">
              Exhibition &amp; Concourse Hub · DIFC District, Dubai
            </span>
            <h2 className="font-[850] text-white leading-tight tracking-[-1.5px] text-[clamp(30px,4vw,46px)] m-0">
              Standardised Concourse <GradientText>Footprints &amp; Floorplan</GradientText>
            </h2>
            <p className="mt-3 text-white/70 text-[16px] max-w-[760px] mx-auto">
              Venue Showcase: DIFC District Event Facility / Jumeirah Emirates Towers (Subject to final technical clearance). Standardised 6 sqm, 9 sqm, and 12 sqm concourse booths alongside 2 private CXO Closed-Door Boardroom Suites.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-5 max-[980px]:grid-cols-2 max-sm:grid-cols-1 mb-16">
            {footprints.map((fp) => (
              <article
                key={fp.title}
                className="p-6 rounded-[18px] border border-white/12 bg-[#041022]/85 flex flex-col justify-between hover:border-[#C0F43C]/45 transition-all duration-300"
              >
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-[#C0F43C]/15 border border-[#C0F43C]/40 text-[#C0F43C] font-mono text-[11px] uppercase tracking-[1.5px] mb-3">
                    {fp.size}
                  </span>
                  <h3 className="text-white font-extrabold text-[18px] leading-snug mb-2">
                    {fp.title}
                  </h3>
                  <p className="text-white/65 text-[14px] leading-relaxed m-0">
                    {fp.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* Interactive Concourse & 360° Floorplan Viewer */}
          <FloorPlanTab />
        </div>
      </section>

      <SponsorsGrid />
      <PartnerShowcase />
      <FooterSection />
    </main>
  );
}
