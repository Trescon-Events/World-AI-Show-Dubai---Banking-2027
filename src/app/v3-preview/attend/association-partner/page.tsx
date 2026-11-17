import type { Metadata } from "next";
import { HeaderV3 } from "../../_components/HeaderV3";
import { FooterV3 } from "../../_components/FooterV3";
import { AttendAssociationSectionV3, attendSubNavV3 } from "../page";

export const metadata: Metadata = {
  title: "Association & Institutional Alliances | Attend | World AI Show | BFSI | Dubai 2027 (V3 Preview)",
  description:
    "Partner with World AI Show | BFSI | Dubai 2027 across regional fintech federations, banking & insurance associations, and risk councils.",
  robots: { index: false, follow: false },
};

export default function AssociationPartnerPageV3() {
  return (
    <main className="relative min-h-screen bg-[#F7F9FC] text-[#334155] font-sans overflow-x-hidden">
      <HeaderV3
        activeItem="Attend"
        subNavItems={attendSubNavV3}
        activeSubNavItem="Association Partner"
      />
      <AttendAssociationSectionV3 />
      <FooterV3 />
    </main>
  );
}
