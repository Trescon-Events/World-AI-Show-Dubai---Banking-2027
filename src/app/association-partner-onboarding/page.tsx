"use client";

import { Header } from "../components/sections/Header";
import { FooterSection } from "../components/sections/FooterSection";
import HubspotForm from "../components/HubspotForm";

export default function AssociationPartnerOnboardingPage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-[#020814] via-[#031022] to-[#020a18] text-white font-space-grotesk overflow-x-hidden">
      {/* Background glow graphics */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[radial-gradient(circle,rgba(192,244,60,0.04),transparent_70%)] pointer-events-none" />
      <div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(circle,rgba(24,212,255,0.03),transparent_70%)] pointer-events-none" />

      <Header activeItem="Partner" />

      {/* Main Content Area */}
      <section className="relative z-10 py-[140px] pt-[150px] max-sm:py-[100px] max-sm:pt-[110px]">
        <div className="w-[min(1114px,calc(100%-48px))] mx-auto max-sm:w-[min(100%-32px,1114px)]">
          {/* Premium Glass Form Card */}
          <div
            className="relative w-full max-w-[900px] mx-auto p-12 max-sm:p-6 rounded-[32px] backdrop-blur-[24px] overflow-hidden"
            style={{
              background:
                "linear-gradient(125.2deg, rgba(0, 206, 255, 0.064) 0%, rgba(192, 244, 60, 0.012) 100%), rgba(4, 14, 33, 0.85)",
              boxShadow:
                "0 0 40px 0 rgba(192, 244, 60, 0.18), 0 0 0 1px rgba(192, 244, 60, 0.40), 0 24px 64px 0 rgba(0, 0, 0, 0.5)",
            }}
          >
            {/* Top border highlight */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-[#2E3C4D]/55" />

            <div className="relative z-10 flex flex-col">
              <span className="text-[#C0F43C] font-mono text-[11px] font-extrabold uppercase tracking-[0.25em] mb-3">
                Association Partner Onboarding · Dubai 2027
              </span>
              <h1 className="m-0 text-white font-[850] text-[clamp(28px,4vw,42px)] leading-tight tracking-[-1px] mb-4">
                Association Partner <span className="text-[#18d4ff]">Onboarding</span>
              </h1>
              <p className="m-0 text-white/70 text-[16px] leading-relaxed mb-9">
                Please complete the form below to submit your association logo, branding assets, and partner onboarding details for World AI Show | BFSI | Dubai 2027 (24 March 2027 · DIFC District, Dubai, UAE).
              </p>

              {/* Hubspot Form Embedded Container */}
              <HubspotForm portalId="2953901" formId="273d11f3-aaf3-43c8-a1cd-5ec3c2ce48ed" region="na1" />
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
