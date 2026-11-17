import type { Metadata } from "next";
import { HeaderV3 } from "../_components/HeaderV3";
import { FooterV3 } from "../_components/FooterV3";
import { GradientText } from "../_components/SharedV3";
import { PartnersHeroV3, PartnerShowcaseV3 } from "../partners/PartnerComponentsV3";
import { SponsorsGrid } from "../../partners/SponsorsGrid";
import { FloorPlanTab } from "../../components/sections/FloorPlanTab";

export const metadata: Metadata = {
  title: "Exhibition & Floorplan Hub | World AI Show | BFSI | Dubai 2027 (V3 Preview)",
  description:
    "Explore the interactive concourse map for World AI Show | BFSI | Dubai 2027: 9 sqm Built Stands, 4 sqm Turnkey Stands, 2 sqm Start Up Pods, 3 Closed-Door CXO Boardrooms, and 7 Interactive Experience Labs.",
  robots: { index: false, follow: false },
};

const footprintsV3 = [
  {
    size: "9 sqm Built Stands",
    title: "9 sqm Built Stands (Powered By, Diamond, Platinum & Gold)",
    desc: "Flagship 9 sqm built stands paired with 15-minute plenary speaking positions and priority enterprise branding across the concourse.",
  },
  {
    size: "4 sqm Turnkey Stands",
    title: "4 sqm Built Stands (Silver, Bronze & Exhibitors)",
    desc: "Standardised 4 sqm turnkey built stands engineered for live banking, risk, and insurance software demonstrations and badge-scan lead capture.",
  },
  {
    size: "2 sqm Start Up Pods",
    title: "2 sqm Start Up Showcase Pods",
    desc: "Dedicated 2 sqm turnkey innovation pods showcasing emerging fintech, insurtech, and specialist AI challengers.",
  },
  {
    size: "3 CXO Boardrooms",
    title: "3 Closed-Door CXO Boardroom Suites (20 Pre-Qualified Buyers Each)",
    desc: "Private Chatham House Rule suites hosting 60-minute boardrooms on Auditing Financial AI, Financial Crime Arms Race, and Enterprise AI Procurement.",
  },
  {
    size: "7 Experience Labs",
    title: "7 Interactive Experience Labs Zone",
    desc: "Hands-on floor simulations: Financial Crime Lab, Explain My Loan Decision, Autonomous Payment Challenge, AI Accountability Hearing, Insurance Claim Triage, Control Room & Procurement Clinic.",
  },
  {
    size: "Venue Showcase",
    title: "Venue Showcase: Dubai, UAE",
    desc: "Positioned in Dubai, UAE (Subject to final technical clearance) as Day 1 of the March Dubai Cluster alongside 50+ bilateral matchmaking tables.",
  },
];

export default function ExhibitionPageV3() {
  return (
    <main className="page-exhibition relative min-h-screen bg-[#F7F9FC] text-[#334155] font-sans overflow-x-hidden">
      <HeaderV3 activeItem="Exhibition" />

      <PartnersHeroV3 />

      <section className="relative py-20 bg-[#F7F9FC] border-b border-[#0069B8]/15">
        <div className="w-[min(1172px,calc(100%-48px))] max-sm:w-[calc(100%-32px)] mx-auto">
          <div className="text-center mb-12">
            <span className="inline-flex items-center mb-3 px-4 py-1.5 border border-[#0069B8]/25 rounded-full text-[#0069B8] text-[12px] font-bold uppercase tracking-[0.14em] bg-white">
              Exhibition &amp; Concourse Hub · Dubai, UAE
            </span>
            <h2 className="font-heading font-bold text-[#08121E] leading-tight tracking-[-0.02em] text-[clamp(30px,4vw,46px)] m-0">
              Concourse Footprints, <GradientText tone="blue">Boardrooms &amp; Experience Labs</GradientText>
            </h2>
            <p className="mt-3 text-[#334155] text-[16px] max-w-[800px] mx-auto">
              Venue Showcase: Dubai, UAE (Subject to final technical clearance). Featuring 9 sqm built stands, 4 sqm turnkey stands, 2 sqm Start Up pods, 3 Closed-Door CXO Boardrooms (20 buyers each), and 7 Interactive Experience Labs.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-5 max-[980px]:grid-cols-2 max-sm:grid-cols-1 mb-16">
            {footprintsV3.map((fp) => (
              <article
                key={fp.title}
                className="p-6 rounded-[18px] border border-[#0069B8]/22 border-t-4 border-t-[#0069B8] bg-white shadow-[0_12px_32px_rgba(8,18,30,0.06)] flex flex-col justify-between hover:border-[#0069B8] hover:border-t-[#F15928] transition-all duration-300"
              >
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-[#0069B8]/10 text-[#0069B8] text-[11px] font-bold uppercase tracking-[0.08em] mb-3">
                    {fp.size}
                  </span>
                  <h3 className="font-heading text-[#08121E] font-bold text-[18px] leading-snug mb-2">
                    {fp.title}
                  </h3>
                  <p className="text-[#334155] text-[14.5px] leading-relaxed m-0">
                    {fp.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <FloorPlanTab />
        </div>
      </section>

      <SponsorsGrid />
      <PartnerShowcaseV3 />
      <FooterV3 />
    </main>
  );
}
