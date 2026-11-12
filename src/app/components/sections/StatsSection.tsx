"use client";

import { useEffect, useState, useRef } from "react";
import { GradientText } from "../Shared";

interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

function Counter({ end, suffix = "", duration = 1500 }: CounterProps) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [hasStarted, end, duration]);

  return (
    <span ref={elementRef}>
      {count}
      {suffix}
    </span>
  );
}

const statsData = [
  {
    icon: "/banking/icons/stats/1.svg",
    number: 300,
    prefix: "",
    suffix: "+",
    label: "Pre-Qualified C-Suite Leaders",
    index: "01",
  },
  {
    icon: "/banking/icons/stats/3.svg",
    number: 80,
    prefix: "",
    suffix: "%+",
    label: "Buy-Side Enterprise Ratio",
    index: "02",
  },
  {
    icon: "/banking/icons/stats/2.svg",
    number: 40,
    prefix: "",
    suffix: "+",
    label: "Expert Faculty Speakers",
    index: "03",
  },
  {
    icon: "/banking/icons/stats/5.svg",
    number: 4,
    prefix: "",
    suffix: "",
    label: "Core Sector Content Pillars",
    index: "04",
  },
];

/* ── Hover Particles Canvas Animation ─────────────────────── */
function HoverParticles({ isHovered }: { isHovered: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      alpha: number;
      color: string;
    }> = [];

    const resizeCanvas = () => {
      if (canvas && canvas.parentElement) {
        canvas.width = canvas.parentElement.clientWidth;
        canvas.height = canvas.parentElement.clientHeight;
      }
    };
    resizeCanvas();

    const colors = ["#0069B8", "#009EAD", "#F15928"];
    const initParticles = () => {
      particles = [];
      const particleCount = 22;
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height + canvas.height / 3,
          vx: (Math.random() - 0.5) * 0.4,
          vy: -Math.random() * 0.6 - 0.2,
          size: Math.random() * 1.8 + 0.8,
          alpha: Math.random() * 0.45 + 0.15,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
    };

    if (isHovered) {
      initParticles();
    }

    const animate = () => {
      if (!isHovered) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        return;
      }
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= 0.003;

        if (p.y < 0 || p.alpha <= 0) {
          p.x = Math.random() * canvas.width;
          p.y = canvas.height;
          p.vx = (Math.random() - 0.5) * 0.4;
          p.vy = -Math.random() * 0.6 - 0.2;
          p.size = Math.random() * 1.8 + 0.8;
          p.alpha = Math.random() * 0.45 + 0.15;
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    if (isHovered) {
      animate();
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    window.addEventListener("resize", resizeCanvas);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [isHovered]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none w-full h-full mix-blend-screen opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[15px]"
    />
  );
}

/* ── Interactive Stats Card (Component C1) ───────────────── */
function StatCard({ stat, index }: { stat: (typeof statsData)[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article
      data-aos={index === 0 ? "fade-right" : index === 3 ? "fade-left" : "fade-up"}
      data-aos-delay={String(index * 100)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative min-h-[194px] p-6 border border-[#0069B8]/22 rounded-[16px] bg-white shadow-[0_12px_32px_rgba(8,18,30,0.06)] group hover:-translate-y-1 hover:border-[#0069B8] transition-all duration-300 overflow-hidden flex flex-col items-center justify-center text-center"
    >
      <HoverParticles isHovered={isHovered} />

      <div
        className="relative z-10 grid place-items-center w-12 h-12 mx-auto rounded-full bg-[#0069B8] text-white bb-icon-float bb-icon-ring group-hover:bg-[#F15928] group-hover:scale-108 transition-all duration-200"
        style={{ animationDelay: `${index * 0.65}s` }}
      >
        <img
          src={stat.icon}
          alt=""
          width={24}
          height={24}
          className="w-6 h-6 object-contain brightness-0 invert bb-icon-breathe"
          aria-hidden="true"
        />
      </div>

      <strong className="block mt-5 font-display text-[#0069B8] font-bold text-[38px] leading-none tracking-tight relative z-10 text-center">
        {stat.prefix}
        <Counter end={stat.number} suffix={stat.suffix} />
      </strong>

      <p className="mt-3 text-[#334155] text-[13px] uppercase tracking-[0.06em] leading-relaxed font-semibold relative z-10 text-center">
        {stat.label}
      </p>
    </article>
  );
}

export function StatsSection() {
  return (
    <section className="relative py-[88px] z-10 bg-[#F7F9FC] overflow-hidden max-sm:py-[56px]" id="attend">
      <div className="w-[min(1172px,calc(100%-48px))] mx-auto max-sm:w-[calc(100%-32px)]">
        {/* Title Heading */}
        <h2
          data-aos="fade-up"
          className="text-center font-semibold text-[#08121E] leading-[1.2] tracking-[-0.01em] text-[clamp(30px,3.8vw,48px)]"
        >
          <GradientText tone="blue">The Power</GradientText> Behind the <GradientText tone="blue">Room</GradientText>
        </h2>

        {/* Stats Grid Layout */}
        <div className="grid grid-cols-4 gap-6 mt-12 pb-1.5 max-[980px]:grid-cols-2 max-sm:grid-cols-2 max-sm:mt-8">
          {statsData.map((stat, idx) => (
            <StatCard key={stat.index} stat={stat} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
