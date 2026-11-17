import type { Metadata } from "next";
import { HeaderV3 } from "../../_components/HeaderV3";
import { FooterV3 } from "../../_components/FooterV3";
import { AttendMediaSectionV3, attendSubNavV3 } from "../page";

export const metadata: Metadata = {
  title: "Media Partner Accreditation | Attend | World AI Show | BFSI | Dubai 2027 (V3 Preview)",
  description:
    "Apply for media accreditation for World AI Show | BFSI | Dubai 2027 in Dubai, UAE.",
  robots: { index: false, follow: false },
};

export default function MediaPartnerPageV3() {
  return (
    <main className="relative min-h-screen bg-[#F7F9FC] text-[#334155] font-sans overflow-x-hidden">
      <HeaderV3 activeItem="Attend" subNavItems={attendSubNavV3} activeSubNavItem="Media Partner" />
      <AttendMediaSectionV3 />
      <FooterV3 />
    </main>
  );
}
