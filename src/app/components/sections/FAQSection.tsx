"use client";

import { useState } from "react";
import { GradientText } from "../Shared";

const faqs = [
  {
    q: "What is World AI Show | BFSI | Dubai 2027?",
    a: "World AI Show | BFSI | Dubai 2027 is a 1-Day Executive Decision Forum taking place on 24 March 2027 in Dubai, UAE. It convenes 300+ pre-qualified C-suite banking, insurance, asset management, and payment leaders (maintaining a minimum 80% buy-side enterprise ratio) to address controlled AI deployment for regulated financial operations.",
  },
  {
    q: "How does this forum fit into the March Dubai Cluster?",
    a: "The forum is positioned as Day 1 of the March Dubai Cluster, paired back-to-back with World AI Show | AI in Healthcare & Life Sciences on 25 March 2027. Both forums share premium venue infrastructure in Dubai, UAE while maintaining strictly separate P&Ls, dedicated sector agendas, and distinct pre-qualified buyer audiences.",
  },
  {
    q: "Who qualifies for a Business Pass?",
    a: "The Business Pass is available for senior buy-side executives from commercial and retail banks, insurers, wealth and asset managers, and regulatory authorities (including CIOs, CTOs, CROs, CCOs, CDAIOs, Heads of Fraud & AML, and MLROs) holding an active operational budget or deployment mandate, as well as technology solution providers, software vendors, and consultancies subject to a strictly capped quota.",
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
    <section className="relative py-[104px] bg-[#F7F9FC] max-sm:py-[72px]" id="faq">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="w-[min(1172px,calc(100%-48px))] mx-auto max-sm:w-[calc(100%-32px)]">
        {/* Title */}
        <h2 className="text-center font-semibold text-[#08121E] leading-[1.2] tracking-[-0.01em] text-[clamp(30px,3.8vw,48px)]">
          Frequently asked <GradientText tone="blue">questions.</GradientText>
        </h2>

        {/* Semantic Accordion List */}
        <div
          data-aos="fade-up"
          data-aos-delay="150"
          className="w-full mx-auto mt-12 p-6 border border-[#0069B8]/22 rounded-[24px] bg-white shadow-[0_12px_32px_rgba(8,18,30,0.06)] max-sm:p-3"
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <details
                key={faq.q}
                open={isOpen}
                className="border-b border-[#0069B8]/18 last:border-b-0 group"
              >
                <summary
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenIndex(isOpen ? null : index);
                  }}
                  className="grid grid-cols-[1fr_32px] items-center gap-5 min-h-[68px] px-6 cursor-pointer list-none select-none max-sm:grid-cols-[1fr_24px] max-sm:gap-3 max-sm:px-3 [&::-webkit-details-marker]:hidden"
                >
                  <strong className="text-[#08121E] font-bold text-[18px] group-open:text-[#0069B8] hover:text-[#0069B8] transition-colors max-sm:text-[16px] leading-snug">
                    {faq.q}
                  </strong>
                  <i className="text-[#0069B8] font-normal not-italic text-right text-xl transition-transform group-open:rotate-45 block">
                    +
                  </i>
                </summary>
                <p className="mt-0 px-6 pr-14 pb-6 text-[#334155] text-[15px] leading-relaxed max-sm:px-3 max-sm:pr-9 max-sm:pb-[22px]">
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
