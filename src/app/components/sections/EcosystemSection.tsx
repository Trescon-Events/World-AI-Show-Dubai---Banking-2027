"use client";

import { type CSSProperties, useState, useEffect, useRef } from "react";
import { GradientText } from "../Shared";

const donutSegments = [
  {
    colorClass: "stroke-[#F15928]",
    percent: 20,
    startAngle: 0,
    delayClass: "delay-[80ms]",
  },
  {
    colorClass: "stroke-[#0069B8]",
    percent: 35,
    startAngle: 72,
    delayClass: "delay-[180ms]",
  },
  {
    colorClass: "stroke-[#009EAD]",
    percent: 45,
    startAngle: 198,
    delayClass: "delay-[280ms]",
  },
];

const chartItems = [
  {
    colorClass: "text-[#009EAD]",
    title: "45% - Enterprise AI Transformation",
    text: "Businesses across banking, telecom, manufacturing, retail, and public services are accelerating AI adoption to improve efficiency, automate operations, and deliver smarter customer experiences.",
  },
  {
    colorClass: "text-[#0069B8]",
    title: "35% - Digital Infrastructure Expansion",
    text: "Malaysia is witnessing rapid growth in hyperscale data centres, cloud ecosystems, fibre connectivity, and AI-ready compute infrastructure, creating the foundation for large-scale AI innovation across Southeast Asia.",
  },
  {
    colorClass: "text-[#F15928]",
    title: "20% - Government & Policy Enablement",
    text: "Through the National AI Roadmap 2030, strategic investments, digital economy initiatives, and innovation-friendly policies, Malaysia is actively enabling long-term AI ecosystem growth.",
  },
];

export function EcosystemSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 } // Triggers when 15% of the section is visible in screen
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-[104px] bg-[#08121E] border-y-2 border-[#0069B8] max-sm:py-[72px]"
      id="ecosystem"
    >
      <div className="w-[min(1172px,calc(100%-48px))] mx-auto max-sm:w-[calc(100%-32px)]">
        
        {/* Section Heading */}
        <h2 className="font-heading text-center font-bold text-white leading-[1.08] tracking-[-0.02em] text-[clamp(36px,4.8vw,54px)]">
          Malaysia&apos;s <br />
          <GradientText tone="teal">AI Growth Ecosystem</GradientText>
        </h2>

        {/* Ecosystem Layout Grid */}
        <div className="grid grid-cols-[1fr_0.95fr] gap-[88px] items-center mt-[64px] max-[980px]:grid-cols-1 max-[980px]:gap-12">
          
          {/* Donut Chart and List Wrapper */}
          <div className="flex flex-col min-h-[526px] p-[38px_26px] border border-[#0069B8]/50 rounded-[18px] bg-[#0D1B2E] shadow-[0_18px_40px_rgba(8,18,30,0.3)] max-sm:min-h-auto max-sm:p-6 max-sm:px-[18px]">
            
            {/* The Donut Circle - triggers scale bounce only when visible */}
            <div className={`relative w-[min(330px,70vw)] aspect-square mx-auto mb-[34px] rounded-full ${
              isVisible ? "donut-settle" : ""
            }`}>
              <svg className="absolute inset-0 w-full h-full overflow-visible" viewBox="0 0 100 100" aria-hidden="true">
                {donutSegments.map((segment) => (
                  <circle
                    className={`segment-base ${segment.colorClass} ${
                      isVisible ? `animate-draw ${segment.delayClass}` : ""
                    }`}
                    cx="50"
                    cy="50"
                    key={segment.percent}
                    pathLength="100"
                    r="38"
                    style={
                      {
                        "--dash-offset": 100 - segment.percent,
                        "--start-angle": `${segment.startAngle - 90}deg`,
                      } as CSSProperties
                    }
                  />
                ))}
              </svg>

              {/* Data Labels - pops in only on scroll reveal */}
              <span className={`absolute z-4 text-[#08121E] font-black text-[28px] top-[28%] left-[8%] select-none transition-all duration-300 ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}>
                45%
              </span>
              <span className={`absolute z-4 text-[#08121E] font-black text-[28px] top-[15%] right-[19%] select-none transition-all duration-300 ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}>
                20%
              </span>
              <span className={`absolute z-4 text-[#08121E] font-black text-[28px] bottom-[12%] right-[24%] select-none transition-all duration-300 ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}>
                35%
              </span>

              {/* Central Text Panel */}
              <div className="absolute inset-[31%] z-3 grid place-content-center rounded-full text-white bg-[#08121E] border border-[#0069B8]/40 text-center shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
                <strong className="font-heading block text-[34px] leading-none font-bold">100%</strong>
                <small className="block mt-2 text-white/75 text-[15px]">Coverage</small>
              </div>
            </div>

            {/* Target Stakeholders Legend List */}
            <ul className="grid gap-[24px] m-0 p-0 list-none">
              <li className="flex gap-[11px] items-start text-white">
                <i className="w-[20px] h-[20px] mt-[2px] rounded-[4px] flex-none bg-[#009EAD]" />
                <span>
                  <strong className="text-[18px] font-bold leading-tight">Senior Decision Influencers</strong>
                  <small className="block mt-1 text-white/75 text-[14px] leading-snug">Heads of AI, Data, Cloud, Security, Architecture</small>
                </span>
              </li>
              <li className="flex gap-[11px] items-start text-white">
                <i className="w-[20px] h-[20px] mt-[2px] rounded-[4px] flex-none bg-[#0069B8]" />
                <span>
                  <strong className="text-[18px] font-bold leading-tight">Budget Owners & Final Decision-Makers</strong>
                  <small className="block mt-1 text-white/75 text-[14px] leading-snug">CIOs, CTOs, CDOs, CISOs, Heads of IT & Digital</small>
                </span>
              </li>
              <li className="flex gap-[11px] items-start text-white">
                <i className="w-[20px] h-[20px] mt-[2px] rounded-[4px] flex-none bg-[#F15928]" />
                <span>
                  <strong className="text-[18px] font-bold leading-tight">Technical Evaluators</strong>
                  <small className="block mt-1 text-white/75 text-[14px] leading-snug">AI/ML, Data, Cloud, DevOps & Platform Leaders</small>
                </span>
              </li>
            </ul>

          </div>

          {/* Copy Text Stack Column */}
          <div className="grid gap-[30px]">
            {chartItems.map((item) => (
              <article key={item.title} className="flex flex-col">
                <h3 className={`font-heading ${item.colorClass} font-bold text-[22px] mb-2.5`}>
                  {item.title}
                </h3>
                <p className="m-0 text-white/84 text-[18px] leading-[1.5] max-sm:text-[16px]">
                  {item.text}
                </p>
              </article>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
