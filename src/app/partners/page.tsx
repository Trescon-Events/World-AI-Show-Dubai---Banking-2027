import type { Metadata } from "next";
import { Header } from "../components/sections/Header";
import { PartnersHero } from "./PartnersHero";
import { SponsorsGrid } from "./SponsorsGrid";
import { PartnerShowcase } from "./PartnerShowcase";
import { FooterSection } from "../components/sections/FooterSection";

export const metadata: Metadata = {
  title: "Partners & Sponsors | World AI Show | BFSI | Dubai 2027",
  description:
    "Explore the Tier-Grouped Partner & Sponsor Showcase for World AI Show | BFSI | Dubai 2027: Speaking Sponsors (12 sqm), Engagement & Industry Partners (9 sqm), CXO Closed-Door Boardrooms, and Concourse Exhibitors (6 sqm).",
};

const subNav = ["Overview", "Sponsors", "Exhibitors", "Media", "Associations"];

export default function PartnersPage() {
  return (
    <main className="page-partners relative min-h-screen bg-[#F7F9FC] text-[#334155] font-sans overflow-x-hidden">
      <Header activeItem="Partner" />
      <PartnersHero />
      <SponsorsGrid />
      <PartnerShowcase />
      <FooterSection />
    </main>
  );
}
