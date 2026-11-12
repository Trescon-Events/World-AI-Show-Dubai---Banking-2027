import type { Metadata } from "next";
import { Header } from "../components/sections/Header";
import { SpeakersHero } from "./SpeakersHero";
import { SpeakersList } from "./SpeakersList";
import { SpeakersCTASection } from "./SpeakersCTASection";
import { FooterSection } from "../components/sections/FooterSection";

export const metadata: Metadata = {
  title: "Speakers Hub | World AI Show | BFSI | Dubai 2027",
  description:
    "Explore the Banking & Risk Faculty and past global series speakers for World AI Show | BFSI | Dubai 2027 (40+ Expert Faculty Speakers).",
};


export default function SpeakersPage() {
  return (
    <main className="page-speakers relative min-h-screen bg-[#F7F9FC] text-[#334155] font-sans overflow-x-hidden">
      <Header activeItem="Speakers" />
      <SpeakersHero />
      <SpeakersList />
      <SpeakersCTASection />
      <FooterSection />
    </main>
  );
}
