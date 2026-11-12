import type { Metadata } from "next";
import { Header } from "../../components/sections/Header";
import { FooterSection } from "../../components/sections/FooterSection";
import { AgendaThemes } from "../AgendaPage";

export const metadata: Metadata = {
  title: "The 4 Core Content Pillars | Agenda | World AI Show | BFSI | Dubai 2027",
  description: "Four operational mandates. One day. Explore the 4 Core Sector Content Pillars of World AI Show | BFSI | Dubai 2027.",
};

const subNav = ["Overview", "The Vision", "Agenda", "Themes", "Call for Speakers"];

export default function ThemesPage() {
  return (
    <main className="page-agenda relative min-h-screen bg-[#F7F9FC] text-[#334155] font-sans overflow-x-hidden">
      <Header activeItem="Agenda" subNavItems={subNav} activeSubNavItem="Themes" />
      <AgendaThemes />
      <FooterSection />
    </main>
  );
}
