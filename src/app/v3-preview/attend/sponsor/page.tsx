import type { Metadata } from "next";
import { HeaderV3 } from "../../_components/HeaderV3";
import { FooterV3 } from "../../_components/FooterV3";
import { AttendSponsorSectionV3, attendSubNavV3 } from "../page";

export const metadata: Metadata = {
  title: "Commercial Sponsorship Prospectus | Attend | World AI Show | BFSI | Dubai 2027 (V3 Preview)",
  description:
    "Explore the 7-tier Commercial Sponsorship inventory (Headline Sponsor to Start Up Pod) for World AI Show | BFSI | Dubai 2027.",
  robots: { index: false, follow: false },
};

export default function SponsorPageV3() {
  return (
    <main className="relative min-h-screen bg-[#F7F9FC] text-[#334155] font-sans overflow-x-hidden">
      <HeaderV3 activeItem="Attend" subNavItems={attendSubNavV3} activeSubNavItem="Sponsor" />
      <AttendSponsorSectionV3 />
      <FooterV3 />
    </main>
  );
}
