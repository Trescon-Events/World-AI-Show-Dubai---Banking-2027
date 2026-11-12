import type { Metadata } from "next";
import { Header } from "../../components/sections/Header";
import { FooterSection } from "../../components/sections/FooterSection";
import { AttendAssociationSection } from "../page";

export const metadata: Metadata = {
  title: "Institutional Partnerships | Attend | World AI Show | BFSI | Dubai 2027",
  description: "Partner with World AI Show | BFSI | Dubai 2027. Regional banking federations, fintech associations, and risk & compliance institutes.",
};

const subNav = ["Overview", "Delegate", "Sponsor", "Media Partner", "Association Partner"];

export default function AssociationPartnerPage() {
  return (
    <main className="relative min-h-screen bg-[#F7F9FC] text-[#334155] font-sans overflow-x-hidden">
      <Header activeItem="Attend" subNavItems={subNav} activeSubNavItem="Association Partner" />
      <AttendAssociationSection />
      <FooterSection />
    </main>
  );
}
