import type { Metadata } from "next";
import { AgendaPageV3 } from "./AgendaPageV3";

export const metadata: Metadata = {
  title: "Overview & Curriculum | Agenda | World AI Show | BFSI | Dubai 2027 (V3 Preview)",
  description:
    "From AI pilots to proven financial performance. Explore the 1-Day Executive Decision Forum curriculum for World AI Show | BFSI | Dubai 2027 (24 March 2027 · Dubai, UAE).",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <AgendaPageV3 />;
}
