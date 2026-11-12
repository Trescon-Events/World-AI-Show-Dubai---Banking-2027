"use client";

import { Header } from "../components/sections/Header";
import { FooterSection } from "../components/sections/FooterSection";
import HubspotForm from "../components/HubspotForm";

export default function AssociationPartnerOnboardingPage() {
  return (
    <main className="relative min-h-screen bg-[#08121E] text-white font-sans overflow-x-hidden">
      <div className="absolute top-[18%] left-1/2 -translate-x-1/2 w-[640px] h-[320px] bg-[radial-gradient(circle,rgba(0,105,184,0.16),transparent_70%)] pointer-events-none" />
      <div className="absolute top-[42%] left-1/2 -translate-x-1/2 w-[780px] h-[380px] bg-[radial-gradient(circle,rgba(0,158,173,0.1),transparent_70%)] pointer-events-none" />

      <Header activeItem="Partner" />

      {/* Main Content Area */}
      <section className="relative z-10 py-[140px] pt-[160px] max-sm:py-[100px] max-sm:pt-[110px]">
        <div className="w-[min(1172px,calc(100%-48px))] mx-auto max-sm:w-[calc(100%-32px)]">
          {/* Raised Brand Book Form Card */}
          <div className="relative w-full max-w-[900px] mx-auto p-12 max-sm:p-6 rounded-[24px] bg-[#0D1B2E] border border-[#0069B8]/52 border-t-4 border-t-[#F15928] shadow-[0_24px_64px_rgba(8,18,30,0.5)] overflow-hidden">
            <div className="relative z-10 flex flex-col">
              <span className="text-[#009EAD] text-[12px] font-bold uppercase tracking-[0.14em] mb-3">
                Association Partner Onboarding · Dubai 2027
              </span>
              <h1 className="font-heading m-0 text-white font-bold text-[clamp(28px,4vw,42px)] leading-tight tracking-[-0.02em] mb-4">
                Association Partner <span className="text-[#009EAD]">Onboarding</span>
              </h1>
              <p className="m-0 text-white/80 text-[16px] leading-relaxed mb-9">
                Please complete the form below to submit your association logo, branding assets, and partner onboarding details for World AI Show | BFSI | Dubai 2027 (24 March 2027 · Dubai, UAE).
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
