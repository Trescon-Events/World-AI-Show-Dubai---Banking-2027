import type { Metadata } from "next";
import { Header } from "../../components/sections/Header";
import { FooterSection } from "../../components/sections/FooterSection";
import { PhotoGalleryContent } from "./PhotoGalleryContent";

export const metadata: Metadata = {
  title: "Photo Gallery | Networking | World AI Show | AI in Banking and Financial Services | Dubai 2027",
  description: "High-resolution executive photography from World AI Show | AI in Banking and Financial Services | Dubai 2027 and the global World AI Show series.",
};

const subNav = ["Overview", "Attendee APP", "AI Matchmaking", "Photo Gallery"];

export default function PhotoGalleryPage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-[#020814] via-[#031022] to-[#020a18] text-white font-space-grotesk overflow-x-hidden">
      <Header activeItem="Networking" subNavItems={subNav} activeSubNavItem="Photo Gallery" />
      <PhotoGalleryContent />
      <FooterSection />
    </main>
  );
}
