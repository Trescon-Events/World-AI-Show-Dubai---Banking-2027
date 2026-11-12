import type { Metadata } from "next";
import { Header } from "../../components/sections/Header";
import { FooterSection } from "../../components/sections/FooterSection";
import { AIMatchmakingContent } from "./AIMatchmakingContent";

export const metadata: Metadata = {
  title: "AI Matchmaking | Networking | World AI Show | BFSI | Dubai 2027",
  description: "Algorithmic pre-scheduled 1-on-1 meetings at World AI Show | BFSI | Dubai 2027 (24 March 2027 · Dubai, UAE).",
};

const subNav = ["Overview", "Attendee APP", "AI Matchmaking", "Photo Gallery"];

export default function AIMatchmakingPage() {
  return (
    <main className="relative min-h-screen bg-[#F7F9FC] text-[#334155] font-sans overflow-x-hidden">
      <Header activeItem="Networking" subNavItems={subNav} activeSubNavItem="AI Matchmaking" />
      <AIMatchmakingContent />
      <FooterSection />
    </main>
  );
}
