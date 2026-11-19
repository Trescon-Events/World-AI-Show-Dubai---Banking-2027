"use client";

import { HeaderV3 } from "../_components/HeaderV3";
import { FooterV3 } from "../_components/FooterV3";
import { V3_BASE } from "../_components/SharedV3";
import HubspotForm from "../../components/HubspotForm";

export default function SponsorshipEnquiryPageV3() {
  return (
    <main className="relative min-h-screen bg-[#08121E] text-white font-sans overflow-x-hidden">
      <div className="absolute top-[18%] left-1/2 -translate-x-1/2 w-[640px] h-[320px] bg-[radial-gradient(circle,rgba(0,105,184,0.16),transparent_70%)] pointer-events-none" />
      <div className="absolute top-[42%] left-1/2 -translate-x-1/2 w-[780px] h-[380px] bg-[radial-gradient(circle,rgba(0,158,173,0.1),transparent_70%)] pointer-events-none" />

      <HeaderV3 activeItem="Partner" />

      <section className="relative z-10 py-[140px] pt-[180px] max-sm:py-[100px] max-sm:pt-[120px]">
        <div className="w-[min(1172px,calc(100%-48px))] mx-auto max-sm:w-[calc(100%-32px)]">
          <div className="mb-8">
            <a
              href={`${V3_BASE}/`}
              className="inline-flex items-center gap-2 text-white/75 hover:text-[#F15928] text-[15px] font-medium transition-colors duration-200"
            >
              <span>←</span> Back to Home
            </a>
          </div>

          <div className="relative w-full max-w-[900px] mx-auto p-12 max-sm:p-6 rounded-[24px] bg-[#0D1B2E] border border-[#0069B8]/52 border-t-4 border-t-[#F15928] shadow-[0_24px_64px_rgba(8,18,30,0.5)] overflow-hidden">
            <div className="relative z-10 flex flex-col">
              <span className="text-[#009EAD] text-[12px] font-bold uppercase tracking-[0.14em] mb-3">
                7-Tier Commercial Inventory · Dubai 2027
              </span>
              <h1 className="font-heading m-0 text-white font-bold text-[clamp(28px,4vw,42px)] leading-tight tracking-[-0.02em] mb-4">
                Engage Middle East &amp; African BFSI{" "}
                <span className="text-[#009EAD]">Decision-Makers in Dubai</span>
              </h1>
              <p className="m-0 text-white/80 text-[16px] leading-relaxed mb-9">
                Request our private commercial infopack covering all seven partnership tiers — Headline Sponsor, Platinum, Gold, Boardroom Partner, Silver, Concourse Exhibitor, and Start Up Pod — including 15-minute plenary speaking slots, 60-minute CXO boardrooms (20 pre-qualified delegates), 75-minute workshops, and 9 sqm, 4 sqm &amp; 2 sqm stands at World AI Show | BFSI | Dubai 2027 (24 March 2027 · Dubai, UAE).
              </p>

              <HubspotForm
                portalId="2953901"
                formId="d883e420-396f-417a-8136-8f314aa7307d"
                region="na1"
              />
            </div>
          </div>
        </div>
      </section>

      <FooterV3 />
    </main>
  );
}
