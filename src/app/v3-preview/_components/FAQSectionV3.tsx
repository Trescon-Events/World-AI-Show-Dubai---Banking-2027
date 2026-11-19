"use client";

import { useState } from "react";
import { GradientText } from "./SharedV3";

const faqs = [
  {
    q: "What is World AI Show | BFSI | Dubai 2027?",
    a: "World AI Show | BFSI | Dubai 2027 is a dedicated 1-Day Executive Decision Forum taking place on 24 March 2027 in Dubai, UAE. It convenes 300–400 pre-qualified C-suite banking, insurance, wealth, risk, compliance, and regulatory leaders across the UAE, wider GCC, and selected African markets (maintaining an 80%+ buy-side institutional ratio) to move from AI pilots to proven financial performance.",
  },
  {
    q: "How does this forum fit into the March Dubai Cluster?",
    a: "The forum leads as Day 1 of the March Dubai Cluster on 24 March 2027, held back-to-back with World AI Show | Healthcare and Life Sciences on 25 March 2027. Both editions share executive venue infrastructure in Dubai, UAE while maintaining strictly separate P&Ls, dedicated sector agendas, and distinct pre-qualified buyer audiences.",
  },
  {
    q: "Who qualifies for a complimentary Delegate Pass versus a paid Business Pass?",
    a: "Complimentary Delegate Passes are granted by invitation and qualification to senior buy-side executives from commercial, retail, and Islamic banks, insurers, wealth and asset managers, and regulatory authorities (protecting our 80%+ buy-side institutional ratio). Paid Business Passes exist alongside for specialist technology providers, cloud platforms, software vendors, and consultancies under a strictly capped quota.",
  },
  {
    q: "What distinguishes CBUAE onshore banking oversight from DFSA free-zone jurisdiction?",
    a: "In the UAE financial ecosystem, the Central Bank of the UAE (CBUAE) supervises federal onshore commercial, retail, and Islamic banking operations, instant payment rails (Aani), and open-finance frameworks (AlTareq), whereas the Dubai Financial Services Authority (DFSA) independently regulates offshore free-zone institutions operating within the Dubai International Financial Centre (DIFC). Our programme addresses algorithmic auditability, model drift monitoring, and third-party vendor risk across both regimes.",
  },
  {
    q: "What are the six core sector content pillars?",
    a: "The 1-day agenda is structured around six operational mandates: (01) Fighting Financial Crime with Intelligent Technology; (02) Responsible AI and Regulatory Confidence; (03) Intelligent Banking Operations; (04) Smarter Lending and Financial Inclusion; (05) Intelligent Insurance and Claims Transformation; and (06) Future Payments, Sovereign Infrastructure & Autonomous Banking.",
  },
  {
    q: "What sponsorship tiers, stand sizes, and interactive labs are available?",
    a: "Our 7-tier commercial inventory spans Headline Sponsor, Platinum, Gold, Boardroom Partner, Silver, Concourse Exhibitor, and Start Up Pod packages. Formats feature 15-minute plenary speaking slots, 75-minute clinical workshops, 60-minute CXO boardrooms (20 delegates), standardised 9 sqm built stands, 4 sqm built stands, and 2 sqm Start Up pods, alongside 7 Interactive Experience Labs on the concourse floor.",
  },
  {
    q: "What is the Closed-Door CXO Boardroom format?",
    a: "Closed-Door CXO Boardrooms are exclusive 60-minute private executive sessions held under the Chatham House Rule, each hosting 20 pre-qualified buy-side banking, insurance, and risk leaders across dedicated themes: Auditing Financial AI, the Financial Crime Arms Race, and Enterprise AI Procurement.",
  },
  {
    q: "Who organises the World AI Show Series?",
    a: "World AI Show | BFSI | Dubai 2027 is organised by Trescon, backed by a global track record of 48 completed World AI Show editions convening over 42,000 C-suite executives and 2,600+ expert speakers across four continents.",
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

export function FAQSectionV3() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative py-[104px] bg-[#F7F9FC] max-sm:py-[72px]" id="faq">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="w-[min(1172px,calc(100%-48px))] mx-auto max-sm:w-[calc(100%-32px)]">
        <h2 className="text-center font-semibold text-[#08121E] leading-[1.2] tracking-[-0.01em] text-[clamp(30px,3.8vw,48px)]">
          Frequently asked <GradientText tone="blue">questions.</GradientText>
        </h2>

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
