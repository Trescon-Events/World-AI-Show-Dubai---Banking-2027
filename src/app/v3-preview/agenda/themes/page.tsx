import type { Metadata } from "next";
import { HeaderV3 } from "../../_components/HeaderV3";
import { FooterV3 } from "../../_components/FooterV3";
import { AgendaThemesV3, agendaSubNavV3 } from "../AgendaPageV3";

export const metadata: Metadata = {
  title: "The 6 Core Content Pillars | Agenda | World AI Show | BFSI | Dubai 2027 (V3 Preview)",
  description:
    "Six operational mandates. One decisive day. Explore the 6 Core Sector Content Pillars of World AI Show | BFSI | Dubai 2027.",
  robots: { index: false, follow: false },
};

export default function ThemesPageV3() {
  return (
    <main className="page-agenda relative min-h-screen bg-[#F7F9FC] text-[#334155] font-sans overflow-x-hidden">
      <HeaderV3 activeItem="Agenda" subNavItems={agendaSubNavV3} activeSubNavItem="Themes" />
      <AgendaThemesV3 />
      <FooterV3 />
    </main>
  );
}
