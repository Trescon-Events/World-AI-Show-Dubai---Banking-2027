import type { Metadata } from "next";
import { Header } from "../../components/sections/Header";
import { FooterSection } from "../../components/sections/FooterSection";
import { PhotoGalleryContent } from "./PhotoGalleryContent";

export const metadata: Metadata = {
  title: "Photo Gallery | Networking | World AI Show | BFSI | Dubai 2027",
  description: "High-resolution executive photography from World AI Show | BFSI | Dubai 2027 and the global World AI Show series.",
};

const subNav = ["Overview", "Attendee APP", "AI Matchmaking", "Photo Gallery"];

export default function PhotoGalleryPage() {
  return (
    <main className="relative min-h-screen bg-[#F7F9FC] text-[#334155] font-sans overflow-x-hidden">
      <Header activeItem="Networking" subNavItems={subNav} activeSubNavItem="Photo Gallery" />
      <PhotoGalleryContent />
      <FooterSection />
    </main>
  );
}
