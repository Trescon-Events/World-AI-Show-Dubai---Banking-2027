"use client";

import { GradientText } from "../components/Shared";

type BenefitItem = {
  title: string;
  desc: string;
};

const benefits: BenefitItem[] = [
  {
    title: "Brand Visibility at Scale",
    desc: "Amplify your presence across the main stage, official digital channels, global newsletters, attendee guidebooks, and post-summit materials.",
  },
  {
    title: "Qualified Lead Generation",
    desc: "Engage in pre-scheduled business matchmaking with verified enterprise buyers, federal CTOs, and state innovation hubs seeking solutions.",
  },
  {
    title: "Product Showcase Floor",
    desc: "Demonstrate live hardware, AI platforms, compute layers, and automated algorithms to decision-makers walking the exhibition halls.",
  },
  {
    title: "Speaking Opportunities",
    desc: "Position your principal directors as pioneers by leading main-stage keynotes, expert panel conversations, or private technical workshops.",
  },
  {
    title: "1:1 Hosted Meetings",
    desc: "Receive customized itineraries aligned to your ideal customer profile, matching your sales teams with target clients in isolated lounges.",
  },
  {
    title: "Exclusive Sponsorship Branding",
    desc: "Align your enterprise with custom premium segments (VIP Lounges, Delegate Badges, Registration Zones, or Evening Cocktail hours).",
  },
  {
    title: "Networking Lunch Branding",
    desc: "Leverage central branding and targeted executive host roles during curated lunches, building relationships over dining.",
  },
  {
    title: "Post-Event Lead Report",
    desc: "Receive highly detailed analytics, engagement maps, demographic logs, and connection lists to accelerate your Middle East banking pipeline.",
  },
];

export function SponsorBenefitsList() {
  return (
    <section className="relative py-[104px] bg-[#08121E] border-t-2 border-[#0069B8]" id="benefits">
      <div className="w-[min(1172px,calc(100%-48px))] mx-auto max-sm:w-[calc(100%-32px)] text-center mb-16">
        <span className="inline-flex items-center mb-5 px-4 py-1.5 border border-[#009EAD]/45 rounded-full text-[#009EAD] text-[12px] font-bold uppercase tracking-[0.14em] bg-[#0D1B2E]">
          Sponsorship ROI Triggers
        </span>
        <h2 className="font-heading font-bold text-white leading-tight tracking-[-0.02em] text-[clamp(34px,4.4vw,52px)]">
          Maximise your market reach <br />
          <GradientText tone="teal">across Middle East financial services.</GradientText>
        </h2>
      </div>

      <div className="w-[min(1172px,calc(100%-48px))] mx-auto max-sm:w-[calc(100%-32px)] grid grid-cols-4 gap-5 max-[980px]:grid-cols-2 max-sm:grid-cols-1">
        {benefits.map((benefit, index) => (
          <article
            key={benefit.title}
            className="group relative min-h-[240px] p-7 border border-[#0069B8]/52 border-t-4 border-t-[#009EAD] rounded-[16px] bg-[#0D1B2E] shadow-[0_18px_40px_rgba(8,18,30,0.28)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#F15928] hover:border-t-[#F15928]"
          >
            <span className="absolute right-[22px] top-[25px] text-[11px] text-[#009EAD] tracking-[0.08em] select-none font-bold group-hover:text-white group-hover:bg-[#F15928] px-2.5 py-0.5 rounded-full transition-all duration-300">
              ROI / {String(index + 1).padStart(2, "0")}
            </span>
            <span className="grid place-items-center w-10 h-10 mb-7 rounded-[10px] text-white bg-[#0069B8] text-[12px] font-extrabold select-none group-hover:bg-[#F15928] transition-all duration-300">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="font-heading m-0 mb-3 text-white font-bold text-[18px] leading-tight">{benefit.title}</h3>
            <p className="m-0 text-white/75 text-[14.5px] leading-relaxed">{benefit.desc}</p>
          </article>
        ))}
      </div>

      {/* Direct Enquiry Call to Action */}
      <div className="w-[min(860px,calc(100%-48px))] max-sm:w-[calc(100%-32px)] mx-auto mt-16 p-9 border border-white/15 border-t-4 border-t-[#F15928] rounded-[20px] bg-[#0069B8] shadow-[0_22px_50px_rgba(0,105,184,0.28)] text-center max-sm:p-6">
        <h3 className="font-heading m-0 text-white font-bold text-[24px] mb-3">Interested in Sponsor Packages?</h3>
        <p className="m-0 text-white/85 text-[15.5px] leading-relaxed mb-6 max-w-[620px] mx-auto">
          Contact our summit partnership desks directly to receive the standard brochure, customizable booth floorplans, and speaking slot availability.
        </p>
        <div className="flex justify-center gap-4 max-sm:flex-col">
          <a
            href="#cta"
            className="bb-btn-primary"
          >
            Enquire about sponsorship
            <svg className="bb-btn-arrow w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.8" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
