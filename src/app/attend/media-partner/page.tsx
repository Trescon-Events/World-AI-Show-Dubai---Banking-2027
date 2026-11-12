import type { Metadata } from "next";
import { Header } from "../../components/sections/Header";
import { FooterSection } from "../../components/sections/FooterSection";
import { AttendMediaSection } from "../page";

export const metadata: Metadata = {
  title: "Media Accreditation | Attend | World AI Show | BFSI | Dubai 2027",
  description: "Apply for media accreditation for World AI Show | BFSI | Dubai 2027. Financial press credentials, executive interview room access, and editorial partnerships.",
};

const subNav = ["Overview", "Delegate", "Sponsor", "Media Partner", "Association Partner"];

export default function MediaPartnerPage() {
  return (
    <main className="relative min-h-screen bg-[#F7F9FC] text-[#334155] font-sans overflow-x-hidden">
      <Header activeItem="Attend" subNavItems={subNav} activeSubNavItem="Media Partner" />
      <AttendMediaSection />
      <FooterSection />
    </main>
  );
}
