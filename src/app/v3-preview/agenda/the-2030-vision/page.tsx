import type { Metadata } from "next";
import { HeaderV3 } from "../../_components/HeaderV3";
import { FooterV3 } from "../../_components/FooterV3";
import { AgendaVisionV3, agendaSubNavV3 } from "../AgendaPageV3";

export const metadata: Metadata = {
  title: "The Vision & Catalysts | Agenda | World AI Show | BFSI | Dubai 2027 (V3 Preview)",
  description:
    "Explore the DFSA November 2026 AI Survey benchmarks, onshore CBUAE and offshore DIFC DFSA frameworks, and regional BFSI adoption catalysts.",
  robots: { index: false, follow: false },
};

export default function VisionPageV3() {
  return (
    <main className="page-agenda relative min-h-screen bg-[#F7F9FC] text-[#334155] font-sans overflow-x-hidden">
      <HeaderV3 activeItem="Agenda" subNavItems={agendaSubNavV3} activeSubNavItem="The Vision" />
      <AgendaVisionV3 />
      <FooterV3 />
    </main>
  );
}
