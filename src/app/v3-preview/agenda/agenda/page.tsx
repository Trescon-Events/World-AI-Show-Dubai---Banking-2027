import type { Metadata } from "next";
import { HeaderV3 } from "../../_components/HeaderV3";
import { FooterV3 } from "../../_components/FooterV3";
import { AgendaLiveTimelineV3, agendaSubNavV3 } from "../AgendaPageV3";

export const metadata: Metadata = {
  title: "Event Schedule | Agenda | World AI Show | BFSI | Dubai 2027 (V3 Preview)",
  description:
    "A look at the schedule for World AI Show | BFSI on 24 March 2027 in Dubai, UAE, including Workshop A, Workshop B, 3 Closed-Door CXO Boardrooms, and 7 Interactive Experience Labs.",
  robots: { index: false, follow: false },
};

export default function AgendaSessionsPageV3() {
  return (
    <main className="page-agenda relative min-h-screen bg-[#F7F9FC] text-[#334155] font-sans overflow-x-hidden">
      <HeaderV3 activeItem="Agenda" subNavItems={agendaSubNavV3} activeSubNavItem="Agenda" />
      <AgendaLiveTimelineV3 />
      <FooterV3 />
    </main>
  );
}
