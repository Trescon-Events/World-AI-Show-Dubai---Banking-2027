import type { Metadata } from "next";
import { Header } from "../../components/sections/Header";
import { FooterSection } from "../../components/sections/FooterSection";
import { AttendDelegateSection } from "../page";

export const metadata: Metadata = {
  title: "Business Pass | Attend | World AI Show | BFSI | Dubai 2027",
  description: "Business Pass — by qualification for CIOs, CTOs, CROs, CCOs, CDAIOs, Heads of Fraud, MLROs, and Regulators at World AI Show | BFSI | Dubai 2027.",
};

const subNav = ["Overview", "Delegate", "Sponsor", "Media Partner", "Association Partner"];

export default function DelegatePage() {
  return (
    <main className="relative min-h-screen bg-[#F7F9FC] text-[#334155] font-sans overflow-x-hidden">
      <Header activeItem="Attend" subNavItems={subNav} activeSubNavItem="Delegate" />
      <AttendDelegateSection />
      <FooterSection />
    </main>
  );
}
