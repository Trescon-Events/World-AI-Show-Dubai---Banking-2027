import type { Metadata } from "next";
import { Header } from "../../components/sections/Header";
import { FooterSection } from "../../components/sections/FooterSection";
import { AgendaLiveTimeline } from "../AgendaPage";

export const metadata: Metadata = {
  title: "1-Day Master Schedule | Agenda | World AI Show | AI in Banking and Financial Services | Dubai 2027",
  description: "Explore the full 1-day master schedule for Wednesday 24 March 2027: Execution Under Regulation in DIFC District, Dubai, UAE.",
};

const subNav = ["Overview", "The 2030 Vision", "Agenda", "Themes", "Call for Speakers"];

export default function AgendaSessionsPage() {
  return (
    <main className="page-agenda relative min-h-screen bg-gradient-to-b from-[#020814] via-[#031022] to-[#020a18] text-white font-space-grotesk overflow-x-hidden">
      <Header activeItem="Agenda" subNavItems={subNav} activeSubNavItem="Agenda" />
      <AgendaLiveTimeline />
      <FooterSection />
    </main>
  );
}
