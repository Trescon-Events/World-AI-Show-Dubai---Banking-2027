"use client";

import { useEffect, useRef, useState } from "react";
import { GradientText } from "./SharedV3";

interface TelemetryBar {
  name: string;
  value: number;
}

interface TelemetryCardData {
  index: string;
  displayValue: string;
  primaryNum: number;
  label: string;
  source: string;
  image: string;
  artVariant: "adoption" | "vendor" | "growth";
  bars: TelemetryBar[];
  icon: React.ReactNode;
}

const sourceCitedCards: TelemetryCardData[] = [
  {
    index: "01",
    displayValue: "71% AI Adoption",
    primaryNum: 71,
    label: "Up from 33% in 2024 across DIFC firms, yet only 14% run autonomous agents live",
    source: "DFSA AI Survey (2 November 2026)",
    image: "/banking/images/v3-preview/benchmark-adoption.png",
    artVariant: "adoption",
    bars: [
      {
        name: "DIFC firms actively deploying AI (up from 33% in 2024)",
        value: 71,
      },
      {
        name: "Firms running autonomous AI agents live in production",
        value: 14,
      },
    ],
    icon: (
      <svg className="w-7 h-7 text-[#009EAD] group-hover:text-white transition-colors" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
        {/* Isometric Autonomous Cube + AI Processor Pins */}
        <polygon points="18 6.5 27.5 12 27.5 23 18 28.5 8.5 23 8.5 12" />
        <polyline points="8.5 12 18 17.5 27.5 12" />
        <line x1="18" y1="17.5" x2="18" y2="28.5" />
        <line x1="18" y1="3" x2="18" y2="6.5" />
        <line x1="18" y1="28.5" x2="18" y2="32.5" />
        <line x1="5" y1="10" x2="8.5" y2="12" />
        <line x1="27.5" y1="23" x2="31" y2="25" />
        <line x1="31" y1="10" x2="27.5" y2="12" />
        <line x1="8.5" y1="23" x2="5" y2="25" />
      </svg>
    ),
  },
  {
    index: "02",
    displayValue: "75% Vendor Reliance",
    primaryNum: 75,
    label: "Surveyed generative AI adopters relying on third-party vendor solutions",
    source: "DFSA AI Survey (2 November 2026)",
    image: "/banking/images/v3-preview/benchmark-vendor.png",
    artVariant: "vendor",
    bars: [
      {
        name: "Generative AI adopters relying on third-party solutions",
        value: 75,
      },
      {
        name: "Institutions strengthening third-party model risk governance",
        value: 82,
      },
    ],
    icon: (
      <svg className="w-7 h-7 text-[#009EAD] group-hover:text-white transition-colors" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
        {/* Central Core + 4 Third-Party Vendor Nodes */}
        <rect x="13.5" y="13.5" width="9" height="9" rx="2" />
        <circle cx="7.5" cy="7.5" r="2.8" />
        <circle cx="28.5" cy="7.5" r="2.8" />
        <circle cx="7.5" cy="28.5" r="2.8" />
        <circle cx="28.5" cy="28.5" r="2.8" />
        <line x1="9.6" y1="9.6" x2="13.5" y2="13.5" />
        <line x1="26.4" y1="9.6" x2="22.5" y2="13.5" />
        <line x1="9.6" y1="26.4" x2="13.5" y2="22.5" />
        <line x1="26.4" y1="26.4" x2="22.5" y2="22.5" />
      </svg>
    ),
  },
  {
    index: "03",
    displayValue: "USD 3.5B+ Market",
    primaryNum: 35,
    label: "Projected Middle East financial services & insurance AI value by 2027",
    source: "PwC Middle East Financial Services AI Report",
    image: "/banking/images/brand/benchmark-01.png",
    artVariant: "growth",
    bars: [
      {
        name: "GCC Tier-1 Bank & Insurer AI Capital Commitment",
        value: 84,
      },
      {
        name: "Buy-Side Institutional Procurement Ratio",
        value: 80,
      },
    ],
    icon: (
      <svg className="w-7 h-7 text-[#009EAD] group-hover:text-white transition-colors" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
        <line x1="4" y1="31" x2="32" y2="31" />
        <rect x="6.5" y="23" width="3.8" height="8" rx="0.6" />
        <rect x="12.8" y="19" width="3.8" height="12" rx="0.6" />
        <rect x="19.1" y="15" width="3.8" height="16" rx="0.6" />
        <rect x="25.4" y="8" width="3.8" height="23" rx="0.6" />
        <path d="M6.5 18.5 C11 17 16 13.5 21.5 7.5" />
        <polyline points="17.5 7.2 21.8 7.2 21.8 11.5" />
      </svg>
    ),
  },
];

function BenchmarkGraphic({ card }: { card: TelemetryCardData }) {
  const aspectClass =
    card.artVariant === "growth" ? "aspect-[304/246]" : "aspect-[4/3]";

  return (
    <div className="relative w-full h-[206px] mt-1.5 mb-3 overflow-hidden flex items-center justify-center select-none pointer-events-none">
      <div className={`relative h-full w-auto ${aspectClass} animate-[IsoFloat_3.8s_ease-in-out_infinite]`}>
        <img
          src={card.image}
          alt={card.label}
          className="w-full h-full object-contain object-center bb-bench-art group-hover:scale-[1.05] transition-transform duration-500"
        />

        {card.artVariant === "adoption" && (
          <svg
            viewBox="0 0 304 228"
            className="absolute inset-0 w-full h-full overflow-visible"
            fill="none"
          >
            {/* 4 Isometric Pilot-to-Core Neural Traces */}
            <path
              d="M84 85 L130 112"
              stroke="#009EAD"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeDasharray="12 46"
              className="animate-[BridgeFlow_1.9s_linear_infinite]"
            />
            <path
              d="M220 85 L174 112"
              stroke="#67E8F9"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeDasharray="12 46"
              className="animate-[BridgeFlow_2.1s_linear_0.4s_infinite]"
            />
            <path
              d="M84 152 L130 125"
              stroke="#0069B8"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeDasharray="12 46"
              className="animate-[BridgeFlow_2.3s_linear_0.8s_infinite]"
            />
            <path
              d="M220 152 L174 125"
              stroke="#009EAD"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeDasharray="12 46"
              className="animate-[BridgeFlow_1.8s_linear_1.1s_infinite]"
            />

            {/* Orbiting Holographic Ring Pulse Around Autonomous Cube */}
            <ellipse
              cx="152"
              cy="79"
              rx="42"
              ry="21"
              stroke="#67E8F9"
              strokeWidth="1.6"
              strokeDasharray="24 96"
              className="animate-[OrbitSweep_3.2s_linear_infinite]"
            />
            <ellipse
              cx="152"
              cy="79"
              rx="29"
              ry="14.5"
              stroke="#F15928"
              strokeWidth="1.4"
              strokeDasharray="16 74"
              className="animate-[OrbitSweepReverse_2.6s_linear_infinite]"
            />

            {/* Ascending Vertical Telemetry Beams */}
            <line
              x1="129"
              y1="108"
              x2="129"
              y2="34"
              stroke="#009EAD"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeDasharray="14 68"
              className="animate-[BeamRise_2.0s_linear_infinite]"
            />
            <line
              x1="152"
              y1="104"
              x2="152"
              y2="24"
              stroke="#67E8F9"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeDasharray="16 72"
              className="animate-[BeamRise_1.7s_linear_0.45s_infinite]"
            />
            <line
              x1="175"
              y1="108"
              x2="175"
              y2="34"
              stroke="#009EAD"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeDasharray="14 68"
              className="animate-[BeamRise_2.2s_linear_0.9s_infinite]"
            />

            {/* Rising Live Agent Nodes */}
            <circle cx="152" cy="76" r="2.8" fill="#F15928" className="bb-svg-dot animate-[NodePulse_2s_ease-in-out_infinite]" />
            <circle cx="136" cy="96" r="2.3" fill="#67E8F9" className="bb-svg-dot animate-[ParticleRise_2.1s_ease-out_infinite]" />
            <circle cx="168" cy="92" r="2.5" fill="#F15928" className="bb-svg-dot animate-[ParticleRise_2.4s_ease-out_0.7s_infinite]" />
            <circle cx="152" cy="64" r="2.1" fill="#009EAD" className="bb-svg-dot animate-[ParticleRise_1.9s_ease-out_1.2s_infinite]" />
          </svg>
        )}

        {card.artVariant === "vendor" && (
          <svg
            viewBox="0 0 304 228"
            className="absolute inset-0 w-full h-full overflow-visible"
            fill="none"
          >
            {/* 4 High-Speed Third-Party Vendor -> Core Data Bridge Streams */}
            <path
              d="M93 83 L133 107"
              stroke="#67E8F9"
              strokeWidth="2.6"
              strokeLinecap="round"
              strokeDasharray="12 44"
              className="animate-[BridgeFlow_1.5s_linear_infinite]"
            />
            <path
              d="M211 83 L171 107"
              stroke="#009EAD"
              strokeWidth="2.6"
              strokeLinecap="round"
              strokeDasharray="12 44"
              className="animate-[BridgeFlow_1.7s_linear_0.35s_infinite]"
            />
            <path
              d="M93 151 L137 123"
              stroke="#F15928"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray="12 44"
              className="animate-[BridgeFlow_1.8s_linear_0.75s_infinite]"
            />
            <path
              d="M211 151 L167 123"
              stroke="#67E8F9"
              strokeWidth="2.6"
              strokeLinecap="round"
              strokeDasharray="12 44"
              className="animate-[BridgeFlow_1.6s_linear_1.1s_infinite]"
            />

            {/* Central Tower Base Orbit Ring */}
            <ellipse
              cx="152"
              cy="122"
              rx="36"
              ry="20"
              stroke="#009EAD"
              strokeWidth="1.6"
              strokeDasharray="22 86"
              className="animate-[OrbitSweep_3s_linear_infinite]"
            />

            {/* Central Banking Tower Core Vertical Uplift */}
            <line
              x1="152"
              y1="122"
              x2="152"
              y2="52"
              stroke="#67E8F9"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeDasharray="14 64"
              className="animate-[BeamRise_1.8s_linear_infinite]"
            />

            {/* Pulsing API Gateway Beacons on the 4 Vendor Modules */}
            <circle cx="93" cy="83" r="2.8" fill="#67E8F9" className="bb-svg-dot animate-[NodePulse_1.8s_ease-in-out_infinite]" />
            <circle cx="211" cy="83" r="2.8" fill="#009EAD" className="bb-svg-dot animate-[NodePulse_1.8s_ease-in-out_0.45s_infinite]" />
            <circle cx="93" cy="151" r="2.8" fill="#F15928" className="bb-svg-dot animate-[NodePulse_1.8s_ease-in-out_0.9s_infinite]" />
            <circle cx="211" cy="151" r="2.8" fill="#67E8F9" className="bb-svg-dot animate-[NodePulse_1.8s_ease-in-out_1.35s_infinite]" />

            {/* Floating Telemetry Particles Around Central Core */}
            <circle cx="142" cy="92" r="2.2" fill="#67E8F9" className="bb-svg-dot animate-[ParticleRise_2.2s_ease-out_infinite]" />
            <circle cx="162" cy="88" r="2.4" fill="#F15928" className="bb-svg-dot animate-[ParticleRise_2.0s_ease-out_0.6s_infinite]" />
          </svg>
        )}

        {card.artVariant === "growth" && (
          <svg
            viewBox="0 0 304 246"
            className="absolute inset-0 w-full h-full overflow-visible"
            fill="none"
          >
            <path
              d="M100 236 L218 175 L292 134"
              stroke="#0069B8"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="16 90"
              className="animate-[CircuitPulse_2.6s_linear_infinite]"
            />
            <path
              d="M100 236 L22 190 L98 146"
              stroke="#009EAD"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeDasharray="14 85"
              className="animate-[CircuitPulse_3s_linear_infinite]"
            />
            <line
              x1="251"
              y1="145"
              x2="251"
              y2="14"
              stroke="#009EAD"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray="18 70"
              className="animate-[ArrowAscend_1.8s_linear_infinite]"
            />
            <circle cx="215" cy="95" r="2.8" fill="#009EAD" className="animate-[ParticleRise_2.2s_ease-out_infinite]" />
            <circle cx="252" cy="110" r="3" fill="#F15928" className="animate-[ParticleRise_1.9s_ease-out_0.5s_infinite]" />
            <circle cx="235" cy="125" r="2.2" fill="#0069B8" className="animate-[ParticleRise_2.5s_ease-out_1.1s_infinite]" />
          </svg>
        )}
      </div>
    </div>
  );
}

function useAnimatedValue(target: number, triggerKey: number, duration = 1350, delay = 0) {
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (triggerKey === 0) return;
    let rafId: number;
    let timeoutId: ReturnType<typeof setTimeout>;

    setVal(0);
    timeoutId = setTimeout(() => {
      const start = performance.now();
      const tick = (now: number) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setVal(Math.round(eased * target));
        if (progress < 1) {
          rafId = requestAnimationFrame(tick);
        }
      };
      rafId = requestAnimationFrame(tick);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
      cancelAnimationFrame(rafId);
    };
  }, [target, triggerKey, duration, delay]);

  return val;
}

function TelemetryCard({ card, cardIndex }: { card: TelemetryCardData; cardIndex: number }) {
  const cardRef = useRef<HTMLElement>(null);
  const [animTrigger, setAnimTrigger] = useState(0);
  const [barsExpanded, setBarsExpanded] = useState(false);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimTrigger((prev) => (prev === 0 ? 1 : prev));
          setBarsExpanded(true);
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const replayAnimation = () => {
    setBarsExpanded(false);
    setTimeout(() => {
      setAnimTrigger((prev) => prev + 1);
      setBarsExpanded(true);
    }, 60);
  };

  const staggerMs = cardIndex * 140;
  const primaryCount = useAnimatedValue(card.primaryNum, animTrigger, 1300, staggerMs + 40);
  const bar0Count = useAnimatedValue(card.bars[0].value, animTrigger, 1400, staggerMs + 120);
  const bar1Count = useAnimatedValue(card.bars[1].value, animTrigger, 1400, staggerMs + 280);
  const barCounts = [bar0Count, bar1Count];

  const formattedHeadline =
    card.index === "01"
      ? `${primaryCount}% AI Adoption`
      : card.index === "02"
      ? `${primaryCount}% Vendor Reliance`
      : `USD ${(primaryCount / 10).toFixed(1)}B+ Market`;

  return (
    <article
      ref={cardRef}
      data-aos={cardIndex === 0 ? "fade-right" : cardIndex === 1 ? "fade-up" : "fade-left"}
      data-aos-delay={String(cardIndex * 150)}
      onMouseEnter={replayAnimation}
      className="group relative p-7 rounded-[20px] border border-[#0069B8]/52 bg-[#0D1B2E] text-left flex flex-col justify-between overflow-hidden hover:-translate-y-1.5 hover:border-[#009EAD] transition-all duration-300"
    >
      <div>
        <div className="relative z-10 flex items-center justify-between mb-2.5">
          <div className="w-12 h-12 rounded-[12px] bg-[#0069B8]/22 border border-[#0069B8]/55 flex items-center justify-center group-hover:bg-[#0069B8] group-hover:border-[#009EAD] group-hover:text-white transition-all duration-300">
            {card.icon}
          </div>
        </div>

        <strong className="relative z-10 block text-[clamp(22px,1.9vw,26px)] font-semibold leading-[1.15] tracking-[-0.01em] text-[#009EAD] tabular-nums mb-1">
          {animTrigger > 0 ? formattedHeadline : card.displayValue}
        </strong>

        <BenchmarkGraphic card={card} />

        <p className="relative z-10 m-0 text-white font-semibold text-[15.5px] leading-[1.35] mb-3.5">
          {card.label}
        </p>

        <div className="relative z-10 space-y-3 pt-1.5">
          {card.bars.map((bar, bIdx) => (
            <div key={bar.name} className="space-y-1.5">
              <div className="flex items-center justify-between text-[11.5px]">
                <span className="text-[#F7F9FC]/78 group-hover:text-white transition-colors">
                  {bar.name}
                </span>
                <span className="text-white font-bold tabular-nums">
                  {barCounts[bIdx]}%
                </span>
              </div>

              <div className="relative w-full h-[7px] rounded-full bg-[#08121E] overflow-hidden">
                <div
                  className="relative h-full rounded-full bg-[#009EAD] transition-all ease-out overflow-hidden"
                  style={{
                    width: barsExpanded ? `${bar.value}%` : "0%",
                    transitionDuration: "1350ms",
                    transitionDelay: `${staggerMs + bIdx * 160}ms`,
                  }}
                >
                  <div
                    className="absolute inset-0 w-full h-full"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.35) 50%, transparent 100%)",
                      animation: "telemetryShimmer 2.4s infinite linear",
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Plain-Text Source Citation Footer (Rule: never hyperlink) */}
      <div className="relative z-10 mt-5 pt-2 flex items-center justify-between">
        <span className="text-[#F7F9FC]/65 text-[11px] leading-snug">
          {card.source}
        </span>
      </div>
    </article>
  );
}

export function EcosystemSectionV3() {
  return (
    <section
      className="relative w-full py-24 bg-[#08121E] border-y-2 border-[#0069B8] overflow-hidden flex flex-col items-center max-sm:py-16"
      id="ecosystem"
    >
      <style>{`
        .bb-svg-dot {
          transform-box: fill-box;
          transform-origin: center;
        }
        @keyframes telemetryShimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        @keyframes IsoFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        @keyframes CircuitPulse {
          0% { stroke-dashoffset: 212; opacity: 0.25; }
          50% { opacity: 1; }
          100% { stroke-dashoffset: 0; opacity: 0.25; }
        }
        @keyframes ArrowAscend {
          0% { stroke-dashoffset: 176; opacity: 0.35; }
          50% { opacity: 1; }
          100% { stroke-dashoffset: 0; opacity: 0.35; }
        }
        @keyframes ParticleRise {
          0% { transform: translateY(14px) scale(0.7); opacity: 0; }
          40% { opacity: 0.95; }
          100% { transform: translateY(-28px) scale(1.15); opacity: 0; }
        }
        @keyframes BridgeFlow {
          0% { stroke-dashoffset: 58; opacity: 0.25; }
          45% { opacity: 1; }
          100% { stroke-dashoffset: 0; opacity: 0.25; }
        }
        @keyframes OrbitSweep {
          0% { stroke-dashoffset: 120; opacity: 0.45; }
          50% { opacity: 1; }
          100% { stroke-dashoffset: 0; opacity: 0.45; }
        }
        @keyframes OrbitSweepReverse {
          0% { stroke-dashoffset: 0; opacity: 0.4; }
          50% { opacity: 0.95; }
          100% { stroke-dashoffset: 90; opacity: 0.4; }
        }
        @keyframes BeamRise {
          0% { stroke-dashoffset: 84; opacity: 0.2; }
          50% { opacity: 0.95; }
          100% { stroke-dashoffset: 0; opacity: 0.2; }
        }
        @keyframes NodePulse {
          0%, 100% { transform: scale(0.85); opacity: 0.55; }
          50% { transform: scale(1.35); opacity: 1; }
        }
      `}</style>

      <div className="relative z-10 w-[min(1172px,calc(100%-48px))] max-sm:w-[calc(100%-32px)] mx-auto flex flex-col items-center text-center">
        <h2
          data-aos="fade-up"
          className="max-w-[980px] text-center font-semibold text-white leading-[1.2] tracking-[-0.01em] text-[clamp(30px,3.8vw,48px)] mb-6"
        >
          Transitioning From AI Experimentation to{" "}
          <GradientText tone="teal">Proven Financial Performance</GradientText>
        </h2>

        <p
          data-aos="fade-up"
          data-aos-delay="100"
          className="max-w-[900px] text-[#F7F9FC]/84 text-[clamp(16px,1.5vw,19px)] leading-[1.48] mb-14"
        >
          Financial institutions and insurers across the UAE, wider GCC, and selected African markets are committing substantial capital to AI, yet taking models live into core operations requires uncompromising governance. Scaling production now demands clear model explainability, seamless integration with legacy banking and policy cores, and adherence to Central Bank of the UAE (CBUAE) and DFSA regulatory frameworks.
        </p>

        {/* Component C2 — Animated Source-Cited Telemetry Cards */}
        <div className="w-full grid grid-cols-3 gap-6 max-lg:grid-cols-1 mb-10">
          {sourceCitedCards.map((card, idx) => (
            <TelemetryCard key={card.index} card={card} cardIndex={idx} />
          ))}
        </div>

        {/* Executive Mandate Callout Banner */}
        <div
          data-aos="zoom-in-up"
          data-aos-delay="150"
          className="relative w-full p-9 max-sm:p-6 rounded-[24px] border-[1.5px] border-[#009EAD] bg-[#0069B8] overflow-hidden text-left shadow-[0_16px_40px_rgba(8,18,30,0.28)]"
        >
          <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#F15928]" />

          <div className="relative z-10 flex items-center gap-7 max-md:flex-col max-md:items-start max-md:gap-4 pl-3 max-sm:pl-1">
            <div className="flex-shrink-0 w-14 h-14 rounded-2xl border border-white/50 bg-white/16 flex items-center justify-center text-white">
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                />
              </svg>
            </div>
            <div>
              <span className="block text-white font-bold text-[12px] uppercase tracking-[0.12em] mb-1.5">
                The Executive Mandate
              </span>
              <p className="m-0 text-white font-semibold text-[18px] leading-[1.55] max-sm:text-[16px]">
                World AI Show | BFSI convenes senior banking and insurance buyers alongside ecosystem leaders at the critical juncture where 2027 enterprise architecture, fraud defence, claims automation, and core procurement decisions are actively locked down.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
