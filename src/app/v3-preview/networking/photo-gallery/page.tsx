import type { Metadata } from "next";
import { HeaderV3 } from "../../_components/HeaderV3";
import { FooterV3 } from "../../_components/FooterV3";
import { PhotoGalleryContent } from "../../../networking/photo-gallery/PhotoGalleryContent";

export const metadata: Metadata = {
  title: "Executive Photo Gallery | Networking | World AI Show | BFSI | Dubai 2027 (V3 Preview)",
  description:
    "Executive photography indexed via AI facial recognition at World AI Show | BFSI | Dubai 2027.",
  robots: { index: false, follow: false },
};

const subNav = ["Overview", "Attendee APP", "AI Matchmaking", "Photo Gallery"];

export default function PhotoGalleryPageV3() {
  return (
    <main className="page-networking relative min-h-screen bg-[#F7F9FC] text-[#334155] font-sans overflow-x-hidden">
      <HeaderV3 activeItem="Networking" subNavItems={subNav} activeSubNavItem="Photo Gallery" />
      <PhotoGalleryContent />
      <FooterV3 />
    </main>
  );
}
