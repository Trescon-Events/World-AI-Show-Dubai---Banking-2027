import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import { Header } from "../../components/sections/Header";
import { HeroSection } from "../../components/sections/HeroSection";
import { StatsSection } from "../../components/sections/StatsSection";
import { EcosystemSectionDemo as EcosystemSection } from "../../components/sections/EcosystemSectionDemo";
import { AgendaSection } from "../../components/sections/AgendaSection";
import { SpeakersSection } from "../../components/sections/SpeakersSection";
import { NetworkingSection } from "../../components/sections/NetworkingSection";
import { SponsorsSection } from "../../components/sections/SponsorsSection";
import { FAQSection } from "../../components/sections/FAQSection";
import { OrganizerSection } from "../../components/sections/OrganizerSection";
import { FooterSection } from "../../components/sections/FooterSection";
import { Ai2047BrandBookV1System } from "../_design-system/Ai2047BrandBookV1System";
import { LogoSwap } from "../_design-system/LogoSwap";
import { TestimonialsPreview } from "../_design-system/TestimonialsPreview";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"], display: "swap", variable: "--font-jakarta" });
const grotesk = Space_Grotesk({ subsets: ["latin"], weight: ["400", "500", "600", "700"], display: "swap", variable: "--font-grotesk" });

export const metadata: Metadata = {
  title: "AI 2047 Brand Book Preview | World AI Show | BFSI | Dubai 2027",
  description: "Isolated preview of the live homepage styled to the AI 2047 Brand Book V1.0.",
  robots: { index: false, follow: false },
  icons: { icon: "/banking/images/test-brand/favicon-vortex.svg" },
};

/**
 * Mirrors src/app/page.tsx section-for-section. The only preview-only swap is the testimonials
 * section (redesigned in _design-system) — same quotes and video as the live page.
 */
export default function BrandBookHomePreview() {
  return (
    <div className={`ai2047-brandbook-v1 ${jakarta.variable} ${grotesk.variable}`}>
      <Ai2047BrandBookV1System />
      <LogoSwap />
      <main className="relative flex flex-col min-h-screen overflow-x-clip">
        <Header activeItem="Home" />
        <HeroSection />
        <StatsSection />
        <EcosystemSection />
        <AgendaSection />
        <SpeakersSection />
        <NetworkingSection />
        <TestimonialsPreview />
        <SponsorsSection />
        <OrganizerSection />
        <FAQSection />
        <FooterSection />
      </main>
    </div>
  );
}
