import type { Metadata } from "next";
import { HeaderV3 } from "../../_components/HeaderV3";
import { FooterV3 } from "../../_components/FooterV3";
import { AttendDelegateSectionV3, attendSubNavV3 } from "../page";

export const metadata: Metadata = {
  title: "Delegate Pass | Attend | World AI Show | BFSI | Dubai 2027 (V3 Preview)",
  description:
    "Complimentary Delegate Pass by invitation and qualification (80%+ buy-side institutional ratio) for C-suite banking, insurance, risk, and regulatory leaders.",
  robots: { index: false, follow: false },
};

export default function DelegatePageV3() {
  return (
    <main className="relative min-h-screen bg-[#F7F9FC] text-[#334155] font-sans overflow-x-hidden">
      <HeaderV3 activeItem="Attend" subNavItems={attendSubNavV3} activeSubNavItem="Delegate" />
      <AttendDelegateSectionV3 />
      <FooterV3 />
    </main>
  );
}
