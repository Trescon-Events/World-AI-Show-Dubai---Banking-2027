import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ScrollToTop } from "./components/ScrollToTop";
import { AOSInit } from "./components/AOSInit";
import { VortexCursor } from "./components/VortexCursor";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-jakarta",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "World AI Show | BFSI | Dubai 2027",
  description:
    "The premier buyer-led executive forum dedicated to the operational realities of deploying artificial intelligence across regulated banking, insurance, asset management, and payment operations. 24 March 2027 · Dubai, UAE · 1-Day Executive Decision Forum. Organised by Trescon.",
  icons: {
    icon: "/banking/images/brand/favicon-vortex.svg",
  },
  openGraph: {
    title: "World AI Show | BFSI | Dubai 2027",
    description:
      "Controlled AI deployment for regulated financial operations. From use case to operating outcome. 24 March 2027 · Dubai, UAE · Day 1 · March Dubai Cluster. Organised by Trescon.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${spaceGrotesk.variable} h-full antialiased`}>
      <body suppressHydrationWarning className="min-h-full flex flex-col font-sans bg-[#F7F9FC] text-[#334155]">
        <AOSInit />
        <VortexCursor />
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
