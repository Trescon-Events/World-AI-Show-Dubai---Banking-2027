"use client";

import { useState } from "react";
import { GradientText } from "../Shared";

const faqs = [
  {
    q: "What is World AI Show | BFSI | Dubai 2027?",
    a: "World AI Show | BFSI | Dubai 2027 is a 1-Day Executive Decision Forum taking place on 24 March 2027 in DIFC District, Dubai, UAE. It convenes 300+ pre-qualified C-suite banking, insurance, asset management, and payment leaders (maintaining a minimum 70% buy-side enterprise ratio) to address controlled AI deployment for regulated financial operations.",
  },
  {
    q: "How does this forum fit into the March Dubai Cluster?",
    a: "The forum is positioned as Day 1 of the March Dubai Cluster, paired back-to-back with World AI Show | AI in Healthcare & Life Sciences on 25 March 2027. Both forums share premium DIFC District venue infrastructure while maintaining strictly separate P&Ls, dedicated sector agendas, and distinct pre-qualified buyer audiences.",
  },
  {
    q: "Who qualifies for a complimentary Delegate Pass?",
    a: "The Delegate Pass is complimentary, strictly by invitation and qualification, for senior buy-side executives from commercial and retail banks, insurers, wealth and asset managers, and regulatory authorities (including CIOs, CTOs, CROs, CCOs, CDAIOs, Heads of Fraud & AML, and MLROs) holding an active operational budget or deployment mandate. Technology solution providers, software vendors, and consultancies outside the invitation criteria may apply for a paid Business Pass, subject to a strictly capped quota.",
  },
  {
    q: "What distinguishes CBUAE onshore banking oversight from DFSA free-zone jurisdiction?",
    a: "In the UAE financial ecosystem, the Central Bank of the UAE (CBUAE) regulates federal onshore commercial and retail banking operations, instant payment rails (such as Aani), and open finance mandates, while the Dubai Financial Services Authority (DFSA) serves as the independent regulator for offshore free-zone financial institutions operating within the Dubai International Financial Centre (DIFC). The curriculum addresses model risk governance, explainability, and compliance across both jurisdictions.",
  },
  {
    q: "What are the four core sector content pillars?",
    a: "The 1-day curriculum is structured around four operational mandates: (01) Financial Crime, AML & Real-Time Fraud Defence; (02) Agentic Servicing, Frontline CX & Operational Workflow Automation; (03) Risk Modelling, Credit Underwriting & Capital Allocation; and (04) Model Risk Governance, Explainability & Sovereign Infrastructure.",
  },
  {
    q: "What sponsorship formats and booth sizes are available?",
    a: "Commercial partnerships are structured around 20-minute plenary keynotes or fireside sessions, exclusive leadership of 75-minute interactive workshop clinics, standardised 6 sqm, 9 sqm, and 12 sqm concourse exhibition booths, and private CXO closed-door boardrooms.",
  },
  {
    q: "What is the CXO Closed-Door Boardroom format?",
    a: "The CXO Closed-Door Boardroom is an exclusive 60-minute curated private session hosting 15 pre-qualified wishlist banking and risk CXOs under Chatham House Rule, complete with a 5-minute sponsor opening address and dedicated executive moderation.",
  },
  {
    q: "Who organises the World AI Show Series?",
    a: "World AI Show | BFSI | Dubai 2027 is organised by Trescon, the team behind the world's longest-running enterprise AI summit series with 48 completed global editions across four continents, convening 42,000+ C-level executives and 2,600+ expert speakers.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative py-[104px] pt-[104px] bg-gradient-to-b from-[#051224]/70 to-[#020a18]/96 max-sm:py-[72px]" id="faq">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="w-[min(1114px,calc(100%-48px))] mx-auto max-sm:w-[min(100%-32px,1114px)]">
        {/* Title */}
        <h2 className="text-center font-[850] text-white leading-[1.04] tracking-[-2px] text-[clamp(42px,5.2vw,60px)]">
          Frequently asked <GradientText>questions.</GradientText>
        </h2>

        {/* Semantic Accordion List */}
        <div
          data-aos="fade-up"
          data-aos-delay="150"
          className="max-w-[976px] mx-auto mt-12 p-[26px_16px] border border-white/8 rounded-[24px] bg-[#040a19]/50 shadow-[0_20px_60px_rgba(0,0,0,0.1)] max-sm:p-3"
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <details
                key={faq.q}
                open={isOpen}
                className="border-b border-white/36 last:border-b-0 group"
              >
                <summary
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenIndex(isOpen ? null : index);
                  }}
                  className="grid grid-cols-[58px_1fr_32px] items-center gap-5 min-h-[68px] px-6 cursor-pointer list-none select-none max-sm:grid-cols-[46px_1fr_18px] max-sm:gap-3 max-sm:px-1.5 [&::-webkit-details-marker]:hidden"
                >
                  <span className="text-white/68 font-mono text-[13px]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <strong className="text-white font-extrabold text-[18px] group-open:text-cyan transition-colors max-sm:text-[16px] leading-snug">
                    {faq.q}
                  </strong>
                  <i className="text-white/70 font-normal not-italic text-right text-xl transition-transform group-open:rotate-45 block">
                    +
                  </i>
                </summary>
                <p className="max-w-[760px] mx-auto mt-[-6px] mr-[76px] mb-6 ml-[78px] text-muted text-[15px] leading-relaxed max-sm:mx-1.5 max-sm:ml-16 max-sm:mb-[22px]">
                  {faq.a}
                </p>
              </details>
            );
          })}
        </div>
      </div>
    </section>
  );
}
