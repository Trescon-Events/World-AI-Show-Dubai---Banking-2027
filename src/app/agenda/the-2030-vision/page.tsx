import type { Metadata } from "next";
import { Header } from "../../components/sections/Header";
import { FooterSection } from "../../components/sections/FooterSection";
import { AgendaVision } from "../AgendaPage";

export const metadata: Metadata = {
  title: "Regulatory Framework & Regional Catalysts | Agenda | World AI Show | BFSI | Dubai 2027",
  description: "Explore onshore CBUAE and offshore DIFC DFSA AI governance mandates and the regional catalysts driving 2027 banking procurement in Dubai.",
};

const subNav = ["Overview", "The Vision", "Agenda", "Themes", "Call for Speakers"];

export default function VisionPage() {
  return (
    <main className="page-agenda relative min-h-screen bg-[#F7F9FC] text-[#334155] font-sans overflow-x-hidden">
      <Header activeItem="Agenda" subNavItems={subNav} activeSubNavItem="The Vision" />
      <AgendaVision />
      <FooterSection />
    </main>
  );
}
