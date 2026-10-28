"use client";

import { useEffect, useRef, useState } from "react";
import { GradientText } from "../Shared";

interface TelemetryBar {
  name: string;
  value: number;
  color: string;
  textColor: string;
  glowColor: string;
}

interface TelemetryCardData {
  index: string;
  displayValue: string;
  primaryNum: number;
  label: string;
  source: string;
  image: string;
  bars: TelemetryBar[];
  icon: React.ReactNode;
}

const sourceCitedCards: TelemetryCardData[] = [
  {
    index: "01",
    displayValue: "USD 3.5B+",
    primaryNum: 35,
    label: "Middle East banking AI market value by 2027",
    source: "PwC Middle East Financial Services AI Report",
    image: "/banking/images/benchmarks/benchmark-01.png",
    bars: [
      {
        name: "GCC Tier-1 Bank AI Capital Allocation",
        value: 84,
        color: "from-[#9be12b] via-[#C0F43C] to-[#d8ff66]",
        textColor: "text-[#C0F43C]",
        glowColor: "rgba(192, 244, 60, 0.55)",
      },
      {
        name: "Core Production Integration Readiness",
        value: 42,
        color: "from-[#1289b8] via-[#2fd5f6] to-[#6be5ff]",
        textColor: "text-[#2fd5f6]",
        glowColor: "rgba(47, 213, 246, 0.5)",
      },
    ],
    icon: (
      <svg className="w-9 h-9 text-[#2fd5f6]" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
        {/* Baseline */}
        <line x1="4" y1="31" x2="32" y2="31" />
        {/* 4 Rising Bars */}
        <rect x="6.5" y="23" width="3.8" height="8" rx="0.6" />
        <rect x="12.8" y="19" width="3.8" height="12" rx="0.6" />
        <rect x="19.1" y="15" width="3.8" height="16" rx="0.6" />
        <rect x="25.4" y="8" width="3.8" height="23" rx="0.6" />
        {/* Rising Trend Curve & Arrowhead */}
        <path d="M6.5 18.5 C11 17 16 13.5 21.5 7.5" />
        <polyline points="17.5 7.2 21.8 7.2 21.8 11.5" />
      </svg>
    ),
  },
  {
    index: "02",
    displayValue: "+38% YoY",
    primaryNum: 38,
    label: "Regional APP scam & digital fraud surge",
    source: "Regional Banking Fraud Survey / MENA FinTech Association",
    image: "/banking/images/benchmarks/benchmark-02.png",
    bars: [
      {
        name: "Banks prioritising real-time AI fraud defence",
        value: 78,
        color: "from-[#9be12b] via-[#C0F43C] to-[#d8ff66]",
        textColor: "text-[#C0F43C]",
        glowColor: "rgba(192, 244, 60, 0.55)",
      },
      {
        name: "YoY APP scam & synthetic fraud volume surge",
        value: 38,
        color: "from-[#1289b8] via-[#2fd5f6] to-[#6be5ff]",
        textColor: "text-[#2fd5f6]",
        glowColor: "rgba(47, 213, 246, 0.5)",
      },
    ],
    icon: (
      <svg className="w-9 h-9 text-[#2fd5f6]" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
        {/* Outer Radar Arcs */}
        <path d="M7.5 9.5 A13.5 13.5 0 0 0 7.5 26.5" />
        <path d="M28.5 9.5 A13.5 13.5 0 0 1 28.5 26.5" />
        <path d="M10.5 12 A10 10 0 0 0 10.5 24" />
        <path d="M25.5 12 A10 10 0 0 1 25.5 24" />
        {/* Center Circle & Shield */}
        <circle cx="18" cy="18" r="7.5" />
        <path d="M18 12.8 L22.2 14.5 V18.2 C22.2 20.9 18 22.8 18 22.8 C18 22.8 13.8 20.9 13.8 18.2 V14.5 L18 12.8 Z" />
        <line x1="18" y1="13.2" x2="18" y2="22.4" />
      </svg>
    ),
  },
  {
    index: "03",
    displayValue: "90% False Positives",
    primaryNum: 90,
    label: "Legacy AML alert overhead consuming 40% of compliance budgets",
    source: "PwC / Thomson Reuters Regulatory Intelligence",
    image: "/banking/images/benchmarks/benchmark-03.png",
    bars: [
      {
        name: "Legacy rules-based AML false-positive rate",
        value: 90,
        color: "from-[#1289b8] via-[#2fd5f6] to-[#6be5ff]",
        textColor: "text-[#2fd5f6]",
        glowColor: "rgba(47, 213, 246, 0.55)",
      },
      {
        name: "Compliance budget consumed by manual review",
        value: 40,
        color: "from-[#9be12b] via-[#C0F43C] to-[#d8ff66]",
        textColor: "text-[#C0F43C]",
        glowColor: "rgba(192, 244, 60, 0.55)",
      },
    ],
    icon: (
      <svg className="w-9 h-9 text-[#2fd5f6]" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
        {/* Shield Outline */}
        <path d="M16.5 5.5 L27 9.5 V17.5 C27 24.2 16.5 29.5 16.5 29.5 C16.5 29.5 6 24.2 6 17.5 V9.5 L16.5 5.5 Z" />
        {/* Inner Checkmark */}
        <polyline points="12.5 17 15.5 20 21 14" />
        {/* Bottom-Right Verification Badge */}
        <circle cx="24.5" cy="24.5" r="5.2" className="fill-[#071320]" stroke="currentColor" strokeWidth={1.7} />
        <polyline points="22.3 24.5 24 26.2 27 23" />
      </svg>
    ),
  },
];

/* Exact 3D Isometric Benchmark Artwork + Live Synchronized Animations */
function BenchmarkGraphic({ card }: { card: TelemetryCardData }) {
  return (
    <div className="relative w-full h-[200px] mt-1.5 mb-3 overflow-hidden flex items-center justify-center select-none pointer-events-none">
      <div className="relative w-full h-full animate-[IsoFloat_3.8s_ease-in-out_infinite]">
        {/* Exact 3D Isometric Artwork (RGB-matched to #071320 with feathered edges) */}
        <img
          src={card.image}
          alt={card.label}
          className="w-full h-full object-contain object-center animate-[NeonBreath_3.2s_ease-in-out_infinite] group-hover:scale-[1.04] transition-transform duration-500"
        />

        {/* Card 01 Live Animation Overlay: Rising Capital Stream + Isometric Grid Pulses */}
        {card.index === "01" && (
          <svg
            viewBox="0 0 304 246"
            className="absolute inset-0 w-full h-full overflow-visible"
            fill="none"
          >
            {/* Isometric Floor Circuit Energy Pulses */}
            <path
              d="M100 236 L218 175 L292 134"
              stroke="#2fd5f6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="16 90"
              className="animate-[CircuitPulse_2.6s_linear_infinite]"
            />
            <path
              d="M100 236 L22 190 L98 146"
              stroke="#C0F43C"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeDasharray="14 85"
              className="animate-[CircuitPulse_3s_linear_infinite]"
            />

            {/* Rising Energy Stream Along the 3D Green Arrow & $ Sign */}
            <line
              x1="251"
              y1="145"
              x2="251"
              y2="14"
              stroke="#e5ff85"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray="18 70"
              className="animate-[ArrowAscend_1.8s_linear_infinite]"
            />
            <circle cx="215" cy="95" r="2.8" fill="#e5ff85" className="animate-[ParticleRise_2.2s_ease-out_infinite]" />
            <circle cx="252" cy="110" r="3" fill="#C0F43C" className="animate-[ParticleRise_1.9s_ease-out_0.5s_infinite]" />
            <circle cx="235" cy="125" r="2.2" fill="#2fd5f6" className="animate-[ParticleRise_2.5s_ease-out_1.1s_infinite]" />
          </svg>
        )}

        {/* Card 02 Live Animation Overlay: Deflecting Laser Beams + Radar Rings */}
        {card.index === "02" && (
          <svg
            viewBox="0 0 304 230"
            className="absolute inset-0 w-full h-full overflow-visible"
            fill="none"
          >
            {/* Incoming Attack Laser -> Deflecting Off Shield Face */}
            <path
              d="M296 36 L160 112 L52 54"
              stroke="#e4ff82"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="26 160"
              className="animate-[LaserDeflect_1.9s_linear_infinite]"
            />
            <path
              d="M294 64 L158 116 L76 112"
              stroke="#2fd5f6"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="22 150"
              className="animate-[LaserDeflect_2.2s_linear_0.6s_infinite]"
            />
          </svg>
        )}

        {/* Card 03 Live Animation Overlay: Filtered Verified Stream */}
        {card.index === "03" && (
          <svg
            viewBox="0 0 304 206"
            className="absolute inset-0 w-full h-full overflow-visible"
            fill="none"
          >
            {/* Continuous Verified Data Packets Streaming Down the Output Beam */}
            <path
              d="M160 112 L14 194"
              stroke="#e5ff85"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray="5 22"
              className="animate-[StreamOut_1.2s_linear_infinite]"
            />
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
      ? `USD ${(primaryCount / 10).toFixed(1)}B+`
      : card.index === "02"
      ? `+${primaryCount}% YoY`
      : `${primaryCount}% False Positives`;

  return (
    <article
      ref={cardRef}
      onMouseEnter={replayAnimation}
      className="group relative p-7 rounded-[20px] border border-[#2a4359]/80 bg-[#071320] shadow-[0_24px_60px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.08)] text-left flex flex-col justify-between overflow-hidden hover:-translate-y-1.5 hover:border-[#2fd5f6]/55 hover:shadow-[0_28px_70px_rgba(0,0,0,0.65),0_0_32px_rgba(47,213,246,0.14)] transition-all duration-300"
    >
      <div>
        {/* Top Icon & Telemetry Index */}
        <div className="relative z-10 flex items-center justify-between mb-2.5">
          <div className="flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
            {card.icon}
          </div>
          <span className="text-[#79acc7] font-mono text-[12px] font-semibold tracking-[0.8px] uppercase">
            BENCHMARK // {card.index}
          </span>
        </div>

        {/* Animated Big Metric */}
        <strong className="relative z-10 block text-[clamp(21px,1.9vw,26px)] font-[850] leading-[1.15] tracking-[-0.5px] text-[#C0F43C] tabular-nums drop-shadow-[0_0_16px_rgba(192,244,60,0.2)] mb-1">
          {animTrigger > 0 ? formattedHeadline : card.displayValue}
        </strong>

        {/* Exact 3D Isometric Graphic */}
        <BenchmarkGraphic card={card} />

        {/* Metric Label */}
        <p className="relative z-10 m-0 text-white font-semibold text-[15.5px] leading-[1.35] mb-3.5">
          {card.label}
        </p>

        {/* Animated Visual Data Comparison Bars */}
        <div className="relative z-10 space-y-3 pt-1.5">
          {card.bars.map((bar, bIdx) => (
            <div key={bar.name} className="space-y-1.5">
              <div className="flex items-center justify-between text-[11.5px]">
                <span className="text-white/80 group-hover:text-white transition-colors">
                  {bar.name}
                </span>
                <span className={`${bar.textColor} font-bold tabular-nums`}>
                  {barCounts[bIdx]}%
                </span>
              </div>

              {/* Track */}
              <div className="relative w-full h-[7px] rounded-full bg-[#132638] overflow-hidden">
                {/* Animated Fill Bar */}
                <div
                  className={`relative h-full rounded-full bg-gradient-to-r ${bar.color} transition-all ease-out overflow-hidden`}
                  style={{
                    width: barsExpanded ? `${bar.value}%` : "0%",
                    transitionDuration: "1350ms",
                    transitionDelay: `${staggerMs + bIdx * 160}ms`,
                    boxShadow: barsExpanded ? `0 0 12px ${bar.glowColor}` : "none",
                  }}
                >
                  {/* Continuous Shimmer Wave Inside Bar */}
                  <div
                    className="absolute inset-0 w-full h-full"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.45) 50%, transparent 100%)",
                      animation: "telemetryShimmer 2.4s infinite linear",
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Citation Footer */}
      <div className="relative z-10 mt-5 pt-2 flex items-center justify-between">
        <span className="text-white/55 text-[11px] leading-snug">
          {card.source}
        </span>
      </div>
    </article>
  );
}

export function EcosystemSectionDemo() {
  return (
    <section
      className="relative w-full px-20 pt-10 pb-20 bg-[#020b1c] overflow-hidden flex flex-col items-center max-lg:px-6 max-sm:px-4 max-sm:py-12"
      id="ecosystem"
    >
      <style>{`
        @keyframes telemetryShimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        @keyframes IsoFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        @keyframes NeonBreath {
          0%, 100% { filter: brightness(1) drop-shadow(0 0 0px rgba(47, 213, 246, 0)); }
          50% { filter: brightness(1.12) drop-shadow(0 0 12px rgba(192, 244, 60, 0.22)); }
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
        @keyframes CubeBeacon {
          0%, 100% { opacity: 0.35; filter: drop-shadow(0 0 2px #C0F43C); }
          50% { opacity: 1; filter: drop-shadow(0 0 10px #C0F43C); }
        }
        @keyframes RadarWave {
          0% { transform: scale(0.82); opacity: 0.9; }
          100% { transform: scale(1.28); opacity: 0; }
        }
        @keyframes LaserDeflect {
          0% { stroke-dashoffset: 188; opacity: 0.2; }
          35% { opacity: 1; }
          100% { stroke-dashoffset: 0; opacity: 0.1; }
        }
        @keyframes ImpactFlash {
          0%, 100% { transform: scale(0.6); opacity: 0.15; }
          45% { transform: scale(1.35); opacity: 0.95; }
          65% { transform: scale(0.8); opacity: 0.3; }
        }
        @keyframes FilterRipple {
          0% { transform: scale(0.4); opacity: 0.95; }
          100% { transform: scale(1.9); opacity: 0; }
        }
        @keyframes StreamOut {
          0% { stroke-dashoffset: 56; }
          100% { stroke-dashoffset: 0; }
        }
      `}</style>

      {/* Subtle architectural background grid & ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(24, 212, 255, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(24, 212, 255, 0.08) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse 80% 70% at 50% 50%, black 20%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 50% 50%, black 20%, transparent 100%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute top-12 left-1/2 -translate-x-1/2 w-[900px] h-[420px] rounded-full bg-[#18d4ff]/[0.05] blur-[130px] pointer-events-none"
        aria-hidden="true"
      />

      {/* ───── S3 · The argument — page centre of gravity ───── */}
      <div className="relative z-10 w-full max-w-[1140px] mx-auto flex flex-col items-center text-center">
        <h2 className="max-w-[960px] text-center font-[850] text-white leading-[1.06] tracking-[-1.8px] text-[clamp(34px,4.5vw,54px)] mb-6">
          Transitioning From AI Experimentation to{" "}
          <GradientText>Audit-Ready Core Production</GradientText>
        </h2>

        <p className="max-w-[880px] text-white/75 text-[19px] leading-[1.6] mb-14 max-sm:text-[16px]">
          Middle East’s financial leaders are committing substantial capital to AI, but taking models live into core operations requires uncompromising governance. Scaling production now demands clear model explainability, seamless integration with legacy banking cores, and uncompromising adherence to Central Bank of the UAE (CBUAE) and DFSA regulatory mandates.
        </p>

        {/* Component C2 — Animated Source-Cited Telemetry Cards */}
        <div className="w-full grid grid-cols-3 gap-6 max-lg:grid-cols-1 mb-10">
          {sourceCitedCards.map((card, idx) => (
            <TelemetryCard key={card.index} card={card} cardIndex={idx} />
          ))}
        </div>

        {/* Executive Mandate Callout Banner */}
        <div className="relative w-full p-9 max-sm:p-6 rounded-[24px] border border-[#C0F43C]/35 bg-gradient-to-r from-[#06152d]/95 via-[#091e3a]/95 to-[#06152d]/95 shadow-[0_20px_50px_rgba(0,0,0,0.45),0_0_40px_rgba(192,244,60,0.08)] overflow-hidden text-left">
          {/* Left glowing accent bar */}
          <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#C0F43C] via-[#18d4ff] to-[#C0F43C]" />
          {/* Right decorative radial glow */}
          <div className="absolute -right-20 -bottom-20 w-72 h-72 rounded-full bg-[#C0F43C]/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 flex items-center gap-7 max-md:flex-col max-md:items-start max-md:gap-4 pl-3 max-sm:pl-1">
            <div className="flex-shrink-0 w-14 h-14 rounded-2xl border border-[#C0F43C]/35 bg-[#C0F43C]/12 flex items-center justify-center text-[#C0F43C] shadow-[0_0_24px_rgba(192,244,60,0.2)]">
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
              </svg>
            </div>
            <div>
              <span className="block text-[#C0F43C] font-mono text-[11px] font-bold uppercase tracking-[2.2px] mb-1.5">
                The Executive Mandate
              </span>
              <p className="m-0 text-white font-semibold text-[19px] leading-[1.55] max-sm:text-[16px]">
                World AI Show | AI in Banking and Financial Services convenes senior banking buyers and ecosystem leaders at the critical juncture where 2027 enterprise architecture, fraud defence, and core procurement decisions are actively locked down.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
