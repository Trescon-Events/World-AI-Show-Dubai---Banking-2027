"use client";

import { useEffect, useRef, useState } from "react";
import { GradientText } from "../Shared";

interface TelemetryBar {
  name: string;
  value: number;
  color: string;
  glowColor: string;
}

interface TelemetryCardData {
  index: string;
  displayValue: string;
  primaryNum: number;
  label: string;
  source: string;
  bars: TelemetryBar[];
  icon: React.ReactNode;
}

const sourceCitedCards: TelemetryCardData[] = [
  {
    index: "01",
    displayValue: "USD 3.5B+",
    primaryNum: 85,
    label: "Middle East banking AI market value by 2027",
    source: "PwC Middle East Financial Services AI Report",
    bars: [
      {
        name: "GCC Tier-1 Bank AI Capital Allocation",
        value: 84,
        color: "from-[#9be12b] via-[#C0F43C] to-[#e4ff85]",
        glowColor: "rgba(192, 244, 60, 0.65)",
      },
      {
        name: "Core Production Integration Readiness",
        value: 42,
        color: "from-[#0b84b8] via-[#18d4ff] to-[#7be8ff]",
        glowColor: "rgba(24, 212, 255, 0.55)",
      },
    ],
    icon: (
      <svg className="w-5 h-5 text-[#C0F43C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    index: "02",
    displayValue: "+38% YoY",
    primaryNum: 38,
    label: "Regional APP scam & digital fraud surge (78% banks prioritising real-time AI)",
    source: "Regional Banking Fraud Survey / MENA FinTech Association",
    bars: [
      {
        name: "Banks prioritising real-time AI fraud defence",
        value: 78,
        color: "from-[#18d4ff] via-[#6ce599] to-[#C0F43C]",
        glowColor: "rgba(192, 244, 60, 0.65)",
      },
      {
        name: "YoY APP scam & synthetic fraud volume surge",
        value: 38,
        color: "from-[#0b84b8] via-[#18d4ff] to-[#7be8ff]",
        glowColor: "rgba(24, 212, 255, 0.55)",
      },
    ],
    icon: (
      <svg className="w-5 h-5 text-[#18d4ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
      </svg>
    ),
  },
  {
    index: "03",
    displayValue: "90% False Positives",
    primaryNum: 90,
    label: "Legacy AML alert overhead consuming 40% of compliance budgets",
    source: "PwC / Thomson Reuters Regulatory Intelligence",
    bars: [
      {
        name: "Legacy rules-based AML false-positive rate",
        value: 90,
        color: "from-[#0b84b8] via-[#18d4ff] to-[#84edff]",
        glowColor: "rgba(24, 212, 255, 0.65)",
      },
      {
        name: "Compliance budget consumed by manual review",
        value: 40,
        color: "from-[#9be12b] via-[#C0F43C] to-[#e4ff85]",
        glowColor: "rgba(192, 244, 60, 0.65)",
      },
    ],
    icon: (
      <svg className="w-5 h-5 text-[#C0F43C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
];

/* Animated 3D Isometric Benchmark Graphics (Page 4 Mock) */
function BenchmarkGraphic({ index }: { index: string }) {
  if (index === "01") {
    // Card 01: Isometric 3D Rising Capital Bars + Glowing $ Symbol + Upward Growth Arrow
    return (
      <div className="relative w-full h-[175px] my-3 rounded-[16px] bg-gradient-to-b from-[#041428]/80 to-[#030b18]/90 border border-[#18d4ff]/15 overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_40%,rgba(192,244,60,0.16),transparent_65%)] pointer-events-none" />
        <svg viewBox="0 0 280 165" className="w-full h-full" fill="none">
          <defs>
            <linearGradient id="isoGrid01" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#18d4ff" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#C0F43C" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="barCyan" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#18d4ff" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#084c70" stopOpacity="0.4" />
            </linearGradient>
            <linearGradient id="barLime" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#e2ff88" />
              <stop offset="40%" stopColor="#C0F43C" />
              <stop offset="100%" stopColor="#26874e" stopOpacity="0.7" />
            </linearGradient>
            <filter id="glowLime01" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Isometric Floor Grid */}
          <g stroke="url(#isoGrid01)" strokeWidth="0.9">
            <path d="M35 128 L140 82 L245 128 L140 158 Z" fill="rgba(24,212,255,0.04)" />
            <line x1="70" y1="113" x2="175" y2="148" />
            <line x1="105" y1="97" x2="210" y2="138" />
            <line x1="175" y1="97" x2="70" y2="138" />
            <line x1="210" y1="113" x2="105" y2="148" />
          </g>

          {/* Isometric 3D Bar 1 (Left) */}
          <g className="animate-[IsoPulse_3.2s_ease-in-out_infinite]">
            <polygon points="62,126 78,118 94,126 78,134" fill="#18d4ff" opacity="0.35" />
            <polygon points="62,98 78,90 94,98 78,106" fill="#5ce1ff" />
            <polygon points="62,98 78,106 78,134 62,126" fill="url(#barCyan)" />
            <polygon points="94,98 78,106 78,134 94,126" fill="#0d6c94" opacity="0.85" />
          </g>

          {/* Isometric 3D Bar 2 (Middle-Left) */}
          <g className="animate-[IsoPulse_3.2s_ease-in-out_0.4s_infinite]">
            <polygon points="104,132 120,124 136,132 120,140" fill="#18d4ff" opacity="0.35" />
            <polygon points="104,84 120,76 136,84 120,92" fill="#8CF79B" />
            <polygon points="104,84 120,92 120,140 104,132" fill="url(#barCyan)" />
            <polygon points="136,84 120,92 120,140 136,132" fill="#128394" opacity="0.9" />
          </g>

          {/* Isometric 3D Bar 3 (Middle-Right) */}
          <g className="animate-[IsoPulse_3.2s_ease-in-out_0.8s_infinite]">
            <polygon points="146,122 162,114 178,122 162,130" fill="#C0F43C" opacity="0.35" />
            <polygon points="146,64 162,56 178,64 162,72" fill="#d9ff7a" />
            <polygon points="146,64 162,72 162,130 146,122" fill="url(#barLime)" />
            <polygon points="178,64 162,72 162,130 178,122" fill="#68a829" opacity="0.9" />
          </g>

          {/* Isometric 3D Bar 4 (Tallest Hero Lime Pillar + Upward Arrow) */}
          <g className="animate-[IsoFloat_3s_ease-in-out_infinite]" filter="url(#glowLime01)">
            <polygon points="190,38 212,26 234,38 212,50" fill="#eeffab" />
            <polygon points="190,38 212,50 212,126 190,114" fill="url(#barLime)" />
            <polygon points="234,38 212,50 212,126 234,114" fill="#82c91e" />
            {/* Upward Arrow Crown */}
            <polygon points="212,10 232,28 221,28 221,42 203,42 203,28 192,28" fill="#e9ff99" />
          </g>

          {/* Floating 3D Dollar Sign Badge */}
          <g className="animate-[IsoFloat_2.6s_ease-in-out_0.3s_infinite]" filter="url(#glowLime01)">
            <circle cx="176" cy="42" r="16" fill="#071f36" stroke="#C0F43C" strokeWidth="2" />
            <text x="176" y="48" textAnchor="middle" fill="#C0F43C" fontSize="18" fontWeight="900" fontFamily="monospace">
              $
            </text>
          </g>

          {/* Rising Trend Trajectory Line */}
          <path
            d="M58 108 Q115 92 160 62 T212 22"
            stroke="#C0F43C"
            strokeWidth="2.2"
            strokeDasharray="4 4"
            className="animate-[DashFlow_2.5s_linear_infinite]"
          />
        </svg>
      </div>
    );
  }

  if (index === "02") {
    // Card 02: Isometric 3D Cyber-Shield + Pulsing Radar Rings + Real-Time AI Defense Nodes
    return (
      <div className="relative w-full h-[175px] my-3 rounded-[16px] bg-gradient-to-b from-[#041428]/80 to-[#030b18]/90 border border-[#18d4ff]/15 overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(24,212,255,0.16),rgba(192,244,60,0.08)_45%,transparent_70%)] pointer-events-none" />
        <svg viewBox="0 0 280 165" className="w-full h-full" fill="none">
          <defs>
            <linearGradient id="shieldFace" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#e3ff8c" />
              <stop offset="45%" stopColor="#C0F43C" />
              <stop offset="100%" stopColor="#18d4ff" />
            </linearGradient>
            <linearGradient id="shieldInner" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0c2d48" />
              <stop offset="100%" stopColor="#041224" />
            </linearGradient>
            <filter id="glowShield02" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="4.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Isometric Radar Ellipses on Floor */}
          <g transform="translate(140, 122)">
            <ellipse rx="96" ry="32" stroke="#18d4ff" strokeOpacity="0.22" strokeWidth="1" strokeDasharray="5 4" />
            <ellipse rx="68" ry="22" stroke="#18d4ff" strokeOpacity="0.4" strokeWidth="1.2" className="animate-pulse" />
            <ellipse rx="38" ry="12" stroke="#C0F43C" strokeOpacity="0.65" strokeWidth="1.5" />
          </g>

          {/* Orbiting Threat-Interception Nodes */}
          <g className="animate-[IsoPulse_2.8s_ease-in-out_infinite]">
            <line x1="56" y1="74" x2="105" y2="82" stroke="#18d4ff" strokeWidth="1.2" strokeDasharray="3 3" />
            <circle cx="56" cy="74" r="4.5" fill="#18d4ff" />
            <line x1="224" y1="66" x2="175" y2="78" stroke="#C0F43C" strokeWidth="1.2" strokeDasharray="3 3" />
            <circle cx="224" cy="66" r="4.5" fill="#C0F43C" />
            <line x1="212" y1="118" x2="168" y2="104" stroke="#18d4ff" strokeWidth="1.2" strokeDasharray="3 3" />
            <circle cx="212" cy="118" r="4" fill="#18d4ff" />
          </g>

          {/* 3D Isometric Glowing Shield */}
          <g className="animate-[IsoFloat_3.2s_ease-in-out_infinite]" filter="url(#glowShield02)">
            {/* Back 3D extrusion layer */}
            <path
              d="M146 22 L190 40 L190 82 C190 112 146 134 146 134 C146 134 102 112 102 82 L102 40 Z"
              fill="#0c5978"
              opacity="0.55"
            />
            {/* Front Shield Rim */}
            <path
              d="M140 18 L184 36 L184 78 C184 108 140 130 140 130 C140 130 96 108 96 78 L96 36 Z"
              fill="url(#shieldInner)"
              stroke="url(#shieldFace)"
              strokeWidth="4"
            />
            {/* Inner Shield Crest */}
            <path
              d="M140 30 L172 44 L172 76 C172 98 140 116 140 116 C140 116 108 98 108 76 L108 44 Z"
              fill="rgba(192,244,60,0.1)"
              stroke="#18d4ff"
              strokeWidth="1.4"
              strokeOpacity="0.7"
            />
            {/* Verified Check / Lock Core */}
            <path
              d="M126 74 L136 84 L156 62"
              stroke="#C0F43C"
              strokeWidth="4.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      </div>
    );
  }

  // Card 03: Isometric 3D AML False-Positive Filter Plane & Neural Verification Stream
  return (
    <div className="relative w-full h-[175px] my-3 rounded-[16px] bg-gradient-to-b from-[#041428]/80 to-[#030b18]/90 border border-[#18d4ff]/15 overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(24,212,255,0.16),rgba(192,244,60,0.1)_50%,transparent_70%)] pointer-events-none" />
      <svg viewBox="0 0 280 165" className="w-full h-full" fill="none">
        <defs>
          <linearGradient id="filterPlane" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#18d4ff" stopOpacity="0.55" />
            <stop offset="50%" stopColor="#0a2948" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#C0F43C" stopOpacity="0.55" />
          </linearGradient>
          <filter id="glowFilter03" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Isometric Base Platform */}
        <polygon
          points="42,126 140,86 238,126 140,156"
          fill="rgba(24,212,255,0.05)"
          stroke="#18d4ff"
          strokeOpacity="0.3"
          strokeWidth="1"
        />

        {/* Upper Unfiltered Alert Nodes (90% False Positives Cloud) */}
        <g className="animate-[IsoFloat_2.8s_ease-in-out_infinite]">
          <polygon points="105,28 113,42 97,42" fill="#18d4ff" opacity="0.65" />
          <polygon points="135,20 143,34 127,34" fill="#18d4ff" opacity="0.85" />
          <polygon points="168,26 176,40 160,40" fill="#18d4ff" opacity="0.55" />
          <polygon points="120,44 128,58 112,58" fill="#38bdf8" opacity="0.75" />
          <polygon points="154,42 162,56 146,56" fill="#38bdf8" opacity="0.7" />
          <polygon points="186,44 194,58 178,58" fill="#18d4ff" opacity="0.5" />
        </g>

        {/* Central Isometric AI Filter Gate / Sieve Plane */}
        <g filter="url(#glowFilter03)">
          <polygon
            points="64,82 140,52 216,82 140,112"
            fill="url(#filterPlane)"
            stroke="#18d4ff"
            strokeWidth="2"
          />
          <line x1="92" y1="71" x2="168" y2="101" stroke="#C0F43C" strokeOpacity="0.5" strokeWidth="1" />
          <line x1="116" y1="61" x2="192" y2="91" stroke="#C0F43C" strokeOpacity="0.5" strokeWidth="1" />
          <line x1="168" y1="61" x2="92" y2="91" stroke="#18d4ff" strokeOpacity="0.5" strokeWidth="1" />
          <line x1="192" y1="71" x2="116" y2="101" stroke="#18d4ff" strokeOpacity="0.5" strokeWidth="1" />
        </g>

        {/* Verified High-Precision Output Stream (Glowing Lime Nodes) */}
        <g filter="url(#glowFilter03)" className="animate-[IsoPulse_2.4s_ease-in-out_infinite]">
          <line x1="84" y1="136" x2="156" y2="108" stroke="#C0F43C" strokeWidth="3" strokeLinecap="round" />
          <circle cx="96" cy="131" r="4.5" fill="#C0F43C" />
          <circle cx="118" cy="123" r="4.5" fill="#e5ff8a" />
          <circle cx="140" cy="114" r="4.5" fill="#C0F43C" />
        </g>
      </svg>
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
  const bar0Count = useAnimatedValue(card.bars[0].value, animTrigger, 1400, staggerMs + 120);
  const bar1Count = useAnimatedValue(card.bars[1].value, animTrigger, 1400, staggerMs + 280);
  const barCounts = [bar0Count, bar1Count];

  return (
    <article
      ref={cardRef}
      onMouseEnter={replayAnimation}
      className="group relative p-8 rounded-[24px] border border-[#18d4ff]/25 bg-gradient-to-b from-[#071830]/90 via-[#040e20]/95 to-[#030917]/95 backdrop-blur-xl shadow-[0_24px_60px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.12)] text-left flex flex-col justify-between overflow-hidden hover:-translate-y-1.5 hover:border-[#C0F43C]/50 hover:shadow-[0_28px_70px_rgba(0,0,0,0.6),0_0_36px_rgba(24,212,255,0.14)] transition-all duration-300"
    >
      {/* Top Glowing Accent Line */}
      <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-[#18d4ff]/70 to-transparent group-hover:via-[#C0F43C] transition-all duration-300" />
      {/* Corner Ambient Glow */}
      <div className="absolute -top-16 -right-16 w-36 h-36 rounded-full bg-[#18d4ff]/10 blur-2xl group-hover:bg-[#C0F43C]/15 transition-colors duration-300 pointer-events-none" />

      <div>
        {/* Top Icon & Telemetry Index */}
        <div className="flex items-center justify-between mb-5">
          <div className="w-11 h-11 rounded-xl border border-white/12 bg-white/[0.04] flex items-center justify-center shadow-[inset_0_0_16px_rgba(24,212,255,0.08)] group-hover:border-[#C0F43C]/40 group-hover:scale-105 transition-all duration-300">
            {card.icon}
          </div>
          <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-white/55 font-mono text-[11px] tracking-[1.5px] uppercase">
            BENCHMARK // {card.index}
          </span>
        </div>

        {/* Animated Big Metric */}
        <strong className="block text-[clamp(30px,3.2vw,40px)] font-[850] leading-none tracking-[-1.2px] mb-2 bg-gradient-to-r from-[#C0F43C] via-[#d8ff75] to-[#18d4ff] bg-clip-text text-transparent tabular-nums">
          {card.displayValue}
        </strong>

        {/* Animated 3D Isometric Graphic (Page 4 Mock) */}
        <BenchmarkGraphic index={card.index} />

        {/* Metric Label */}
        <p className="m-0 text-white font-bold text-[17.5px] leading-[1.35] mb-5">
          {card.label}
        </p>

        {/* Animated Visual Data Comparison Bars */}
        <div className="space-y-4 pt-4 border-t border-white/[0.08]">
          {card.bars.map((bar, bIdx) => (
            <div key={bar.name} className="space-y-2">
              <div className="flex items-center justify-between text-[12px] font-mono">
                <span className="text-white/70 group-hover:text-white transition-colors">
                  {bar.name}
                </span>
                <span className="text-white font-bold tabular-nums">
                  {barCounts[bIdx]}%
                </span>
              </div>

              {/* Track */}
              <div className="relative w-full h-2.5 rounded-full bg-[#091930] border border-white/[0.06] overflow-visible p-[1px]">
                {/* Animated Fill Bar */}
                <div
                  className={`relative h-full rounded-full bg-gradient-to-r ${bar.color} transition-all ease-out overflow-hidden`}
                  style={{
                    width: barsExpanded ? `${bar.value}%` : "0%",
                    transitionDuration: "1350ms",
                    transitionDelay: `${staggerMs + bIdx * 160}ms`,
                    boxShadow: barsExpanded ? `0 0 14px ${bar.glowColor}` : "none",
                  }}
                >
                  {/* Continuous Shimmer Wave Inside Bar */}
                  <div
                    className="absolute inset-0 w-full h-full"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.55) 50%, transparent 100%)",
                      animation: "telemetryShimmer 2.4s infinite linear",
                    }}
                  />
                </div>

                {/* Glowing Pulse Orb at Leading Tip */}
                <span
                  className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-white transition-all ease-out pointer-events-none"
                  style={{
                    left: barsExpanded ? `${bar.value}%` : "0%",
                    opacity: barsExpanded ? 1 : 0,
                    transitionDuration: "1350ms",
                    transitionDelay: `${staggerMs + bIdx * 160}ms`,
                    boxShadow: `0 0 10px 2px ${bar.glowColor}`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Citation Footer */}
      <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between">
        <span className="inline-flex items-center gap-2 text-white/55 font-mono text-[12px]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C0F43C] animate-pulse" />
          {card.source}
        </span>
        <span className="text-[#18d4ff] text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Verified →
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
        @keyframes IsoPulse {
          0%, 100% { opacity: 0.82; transform: translateY(0px); }
          50% { opacity: 1; transform: translateY(-3px); }
        }
        @keyframes DashFlow {
          0% { stroke-dashoffset: 24; }
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
