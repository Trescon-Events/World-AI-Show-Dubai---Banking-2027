import type { Metadata } from "next";
import { HeaderV3 } from "../../_components/HeaderV3";
import { FooterV3 } from "../../_components/FooterV3";
import { AgendaCallForSpeakersV3, agendaSubNavV3 } from "../AgendaPageV3";

export const metadata: Metadata = {
  title: "Call for Banking & Risk Faculty | Agenda | World AI Show | BFSI | Dubai 2027 (V3 Preview)",
  description:
    "Seeking enterprise banking, insurance, risk, and regulatory leaders with verified production case studies to join the stage on 24 March 2027 in Dubai, UAE.",
  robots: { index: false, follow: false },
};

export default function CallForSpeakersPageV3() {
  return (
    <main className="page-agenda relative min-h-screen bg-[#F7F9FC] text-[#334155] font-sans overflow-x-hidden">
      <HeaderV3
        activeItem="Agenda"
        subNavItems={agendaSubNavV3}
        activeSubNavItem="Call for Speakers"
      />
      <AgendaCallForSpeakersV3 />
      <FooterV3 />
    </main>
  );
}
