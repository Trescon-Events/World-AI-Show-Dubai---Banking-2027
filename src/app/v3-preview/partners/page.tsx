import type { Metadata } from "next";
import { HeaderV3 } from "../_components/HeaderV3";
import { FooterV3 } from "../_components/FooterV3";
import { PartnersHeroV3, PartnerShowcaseV3 } from "./PartnerComponentsV3";
import { SponsorsGrid } from "../../partners/SponsorsGrid";

export const metadata: Metadata = {
  title: "Partners & Sponsors | World AI Show | BFSI | Dubai 2027 (V3 Preview)",
  description:
    "Explore the 7-Tier Commercial Partnership Showcase for World AI Show | BFSI | Dubai 2027: Headline Sponsor, Platinum, Gold, Boardroom Partner, Silver, Concourse Exhibitor, and Start Up Pod.",
  robots: { index: false, follow: false },
};

export default function PartnersPageV3() {
  return (
    <main className="page-partners relative min-h-screen bg-[#F7F9FC] text-[#334155] font-sans overflow-x-hidden">
      <HeaderV3 activeItem="Partner" />
      <PartnersHeroV3 />
      <SponsorsGrid />
      <PartnerShowcaseV3 />
      <FooterV3 />
    </main>
  );
}
