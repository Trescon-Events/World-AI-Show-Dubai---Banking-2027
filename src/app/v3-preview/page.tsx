import type { Metadata } from "next";
import { HeaderV3 } from "./_components/HeaderV3";
import { HeroSectionV3 } from "./_components/HeroSectionV3";
import { StatsSectionV3 } from "./_components/StatsSectionV3";
import { EcosystemSectionV3 } from "./_components/EcosystemSectionV3";
import { AgendaSectionV3 } from "./_components/AgendaSectionV3";
import { SpeakersSectionV3 } from "./_components/SpeakersSectionV3";
import { NetworkingSectionV3 } from "./_components/NetworkingSectionV3";
import { TestimonialsSection } from "../components/sections/TestimonialsSection";
import { SponsorsSectionV3 } from "./_components/SponsorsSectionV3";
import { OrganizerSectionV3 } from "./_components/OrganizerSectionV3";
import { FAQSectionV3 } from "./_components/FAQSectionV3";
import { FooterV3 } from "./_components/FooterV3";

export const metadata: Metadata = {
  title: "World AI Show | BFSI | Dubai 2027 — V3 Preview",
  description:
    "From AI Pilots to Proven Financial Performance. Building intelligent, trusted and resilient financial institutions. 24 March 2027 · Dubai, UAE · 1-Day Executive Decision Forum. Organised by Trescon.",
  robots: { index: false, follow: false },
};

export default function V3PreviewHome() {
  return (
    <main className="relative flex flex-col min-h-screen overflow-x-clip bg-[#F7F9FC]">
      <HeaderV3 activeItem="Home" />
      <HeroSectionV3 />
      <StatsSectionV3 />
      <EcosystemSectionV3 />
      <AgendaSectionV3 />
      <SpeakersSectionV3 />
      <NetworkingSectionV3 />
      <TestimonialsSection />
      <SponsorsSectionV3 />
      <OrganizerSectionV3 />
      <FAQSectionV3 />
      <FooterV3 />
    </main>
  );
}
