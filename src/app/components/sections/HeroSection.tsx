"use client";

import { useEffect, useRef } from "react";
import { Button, GradientText } from "../Shared";

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.offsetWidth || window.innerWidth);
    let height = (canvas.height = canvas.offsetHeight || window.innerHeight);

    const mouse = {
      x: width * 0.5,
      y: height * 0.5,
      targetX: width * 0.5,
      targetY: height * 0.5,
    };

    function resize() {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth || window.innerWidth;
      height = canvas.height = canvas.offsetHeight || window.innerHeight;
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
    };

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);

    // 1. Network nodes & data packets
    const nodes = Array.from({ length: 42 }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      r: Math.random() * 2 + 1.2,
      isGreen: Math.random() > 0.72,
    }));

    // 2. Floating HUD / Analytics / Cybersecurity dashboard cards in 3D perspective
    const hudPanels = [
      { xRatio: 0.11, yRatio: 0.28, w: 190, h: 110, type: "bars", title: "AI TELEMETRY // 99.4%", drift: 0.7, side: -1 },
      { xRatio: 0.88, yRatio: 0.26, w: 205, h: 118, type: "wave", title: "NET SECURE // ZERO-TRUST", drift: 1.1, side: 1 },
      { xRatio: 0.14, yRatio: 0.68, w: 185, h: 105, type: "radar", title: "AGENTIC MESH // ACTIVE", drift: 2.3, side: -1 },
      { xRatio: 0.86, yRatio: 0.66, w: 195, h: 112, type: "matrix", title: "DATA FABRIC // 4.8 TB/S", drift: 3.4, side: 1 },
      { xRatio: 0.28, yRatio: 0.17, w: 155, h: 78, type: "mini", title: "NODE_CLUSTER_01", drift: 1.8, side: -1 },
      { xRatio: 0.73, yRatio: 0.18, w: 155, h: 78, type: "mini", title: "CYBER_SHIELD_V4", drift: 2.9, side: 1 },
    ];

    // 3. Data stream particles rising from horizon
    const streams = Array.from({ length: 36 }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      len: Math.random() * 45 + 18,
      speed: Math.random() * 1.4 + 0.5,
      alpha: Math.random() * 0.45 + 0.12,
      isGreen: Math.random() > 0.75,
    }));

    let time = 0;

    function drawHudPanel(
      c: CanvasRenderingContext2D,
      px: number,
      py: number,
      w: number,
      h: number,
      type: string,
      title: string,
      t: number,
      side: number
    ) {
      c.save();
      c.translate(px, py);
      // Slight perspective skew outward from center
      c.transform(1, side * 0.06, 0, 1, 0, 0);

      // Glass panel background
      const grad = c.createLinearGradient(-w / 2, -h / 2, w / 2, h / 2);
      grad.addColorStop(0, "rgba(6, 24, 52, 0.52)");
      grad.addColorStop(1, "rgba(3, 12, 28, 0.24)");
      c.fillStyle = grad;
      c.strokeStyle = "rgba(24, 212, 255, 0.32)";
      c.lineWidth = 1;

      c.beginPath();
      c.roundRect(-w / 2, -h / 2, w, h, 8);
      c.fill();
      c.stroke();

      // Corner HUD brackets
      const bLen = 10;
      c.strokeStyle = "#18d4ff";
      c.lineWidth = 1.8;
      c.beginPath();
      // Top-left
      c.moveTo(-w / 2, -h / 2 + bLen);
      c.lineTo(-w / 2, -h / 2);
      c.lineTo(-w / 2 + bLen, -h / 2);
      // Bottom-right
      c.moveTo(w / 2, h / 2 - bLen);
      c.lineTo(w / 2, h / 2);
      c.lineTo(w / 2 - bLen, h / 2);
      c.stroke();

      // Header bar
      c.fillStyle = "rgba(24, 212, 255, 0.75)";
      c.font = "600 9px monospace";
      c.fillText(title, -w / 2 + 12, -h / 2 + 17);

      // Status dot
      c.beginPath();
      c.arc(w / 2 - 14, -h / 2 + 14, 3, 0, Math.PI * 2);
      c.fillStyle = "#C0F43C";
      c.fill();

      // Divider
      c.strokeStyle = "rgba(24, 212, 255, 0.16)";
      c.lineWidth = 1;
      c.beginPath();
      c.moveTo(-w / 2 + 10, -h / 2 + 24);
      c.lineTo(w / 2 - 10, -h / 2 + 24);
      c.stroke();

      // Inner analytics visualization
      const innerTop = -h / 2 + 34;
      const innerH = h - 46;
      const innerW = w - 24;

      if (type === "bars") {
        const barCount = 10;
        const bw = innerW / barCount - 4;
        for (let i = 0; i < barCount; i++) {
          const val = 0.25 + 0.7 * Math.abs(Math.sin(t * 2.2 + i * 0.55));
          const bh = innerH * val;
          c.fillStyle = i % 3 === 0 ? "rgba(192, 244, 60, 0.75)" : "rgba(24, 212, 255, 0.68)";
          c.fillRect(
            -w / 2 + 12 + i * (bw + 4),
            innerTop + (innerH - bh),
            bw,
            bh
          );
        }
      } else if (type === "wave") {
        // Dual telemetry sine waves
        c.beginPath();
        for (let x = 0; x <= innerW; x += 4) {
          const y =
            innerTop +
            innerH * 0.5 +
            Math.sin(x * 0.06 + t * 3.5) * (innerH * 0.32) * Math.cos(x * 0.02 - t);
          if (x === 0) c.moveTo(-w / 2 + 12 + x, y);
          else c.lineTo(-w / 2 + 12 + x, y);
        }
        c.strokeStyle = "#18d4ff";
        c.lineWidth = 1.6;
        c.stroke();

        c.beginPath();
        for (let x = 0; x <= innerW; x += 4) {
          const y =
            innerTop +
            innerH * 0.5 +
            Math.cos(x * 0.05 - t * 2.8) * (innerH * 0.25);
          if (x === 0) c.moveTo(-w / 2 + 12 + x, y);
          else c.lineTo(-w / 2 + 12 + x, y);
        }
        c.strokeStyle = "rgba(192, 244, 60, 0.8)";
        c.lineWidth = 1.3;
        c.stroke();
      } else if (type === "radar") {
        const cx = -w / 2 + 44;
        const cy = innerTop + innerH / 2;
        const r = Math.min(innerH / 2 - 2, 26);

        c.strokeStyle = "rgba(24, 212, 255, 0.35)";
        c.lineWidth = 1;
        c.beginPath();
        c.arc(cx, cy, r, 0, Math.PI * 2);
        c.stroke();
        c.beginPath();
        c.arc(cx, cy, r * 0.55, 0, Math.PI * 2);
        c.stroke();

        // Rotating radar sweep
        const angle = t * 2.4;
        c.beginPath();
        c.moveTo(cx, cy);
        c.arc(cx, cy, r, angle, angle + 0.7);
        c.closePath();
        c.fillStyle = "rgba(192, 244, 60, 0.38)";
        c.fill();

        // Metrics lines on right side of radar
        for (let row = 0; row < 3; row++) {
          const ly = innerTop + 8 + row * 16;
          c.fillStyle = "rgba(255,255,255,0.12)";
          c.fillRect(-w / 2 + 82, ly, w - 96, 6);
          const fillW = (w - 96) * (0.45 + 0.45 * Math.abs(Math.sin(t * 1.5 + row)));
          c.fillStyle = row === 1 ? "#C0F43C" : "#18d4ff";
          c.fillRect(-w / 2 + 82, ly, fillW, 6);
        }
      } else if (type === "matrix") {
        const cols = 8;
        const rows = 4;
        const cw = innerW / cols - 3;
        const ch = innerH / rows - 3;
        for (let r = 0; r < rows; r++) {
          for (let col = 0; col < cols; col++) {
            const pulse = Math.sin(t * 3 + r * 1.3 + col * 0.9);
            c.fillStyle =
              pulse > 0.65
                ? "rgba(192, 244, 60, 0.75)"
                : pulse > 0
                ? "rgba(24, 212, 255, 0.48)"
                : "rgba(24, 212, 255, 0.12)";
            c.fillRect(
              -w / 2 + 12 + col * (cw + 3),
              innerTop + r * (ch + 3),
              cw,
              ch
            );
          }
        }
      } else {
        // Mini telemetry progress
        c.fillStyle = "rgba(24, 212, 255, 0.15)";
        c.fillRect(-w / 2 + 12, innerTop + 6, innerW, 8);
        c.fillStyle = "#18d4ff";
        c.fillRect(
          -w / 2 + 12,
          innerTop + 6,
          innerW * (0.5 + 0.4 * Math.sin(t * 2)),
          8
        );
        c.fillStyle = "rgba(255, 255, 255, 0.55)";
        c.font = "500 9px monospace";
        c.fillText(
          `LATENCY: ${(1.2 + 0.4 * Math.abs(Math.sin(t))).toFixed(2)}ms   OK`,
          -w / 2 + 12,
          innerTop + 28
        );
      }

      c.restore();
    }

    function render() {
      if (!ctx) return;
      time += 0.016;

      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      const parX = (mouse.x - width * 0.5) * 0.03;
      const parY = (mouse.y - height * 0.5) * 0.03;

      ctx.clearRect(0, 0, width, height);

      // 1. 3D Perspective Cyber Grid Floor & Ceiling Horizon
      const horizonY = height * 0.68;
      ctx.save();
      ctx.strokeStyle = "rgba(24, 212, 255, 0.14)";
      ctx.lineWidth = 1;

      // Radial perspective lines from center vanishing point
      const vanishX = width * 0.5 + parX * 0.6;
      const vanishY = horizonY + parY * 0.4;
      for (let i = -12; i <= 12; i++) {
        ctx.beginPath();
        ctx.moveTo(vanishX + i * 28, vanishY);
        ctx.lineTo(vanishX + i * 220, height + 40);
        ctx.stroke();
      }

      // Horizontal scrolling floor lines
      const gridStep = (time * 28) % 24;
      for (let d = 1; d <= 10; d++) {
        const yPos = vanishY + Math.pow((d * 24 + gridStep) / 260, 1.75) * (height - vanishY + 40);
        if (yPos > vanishY && yPos < height) {
          const alpha = Math.min(0.28, ((yPos - vanishY) / (height - vanishY)) * 0.32);
          ctx.strokeStyle = `rgba(24, 212, 255, ${alpha})`;
          ctx.beginPath();
          ctx.moveTo(0, yPos);
          ctx.lineTo(width, yPos);
          ctx.stroke();
        }
      }
      ctx.restore();

      // 2. Vertical Digital Data Streams
      streams.forEach((s) => {
        s.y -= s.speed;
        if (s.y + s.len < 0) {
          s.y = height + 20;
          s.x = Math.random() * width;
        }
        const grad = ctx.createLinearGradient(s.x, s.y, s.x, s.y + s.len);
        const col = s.isGreen ? "192, 244, 60" : "24, 212, 255";
        grad.addColorStop(0, `rgba(${col}, ${s.alpha})`);
        grad.addColorStop(1, `rgba(${col}, 0)`);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.4;
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(s.x, s.y + s.len);
        ctx.stroke();
      });

      // 3. Interconnected Data Network Mesh
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        a.x += a.vx;
        a.y += a.vy;
        if (a.x < 0 || a.x > width) a.vx *= -1;
        if (a.y < 0 || a.y > height) a.vy *= -1;

        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 165) {
            const alpha = (1 - dist / 165) * 0.22;
            ctx.strokeStyle = `rgba(24, 212, 255, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }

        ctx.beginPath();
        ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2);
        ctx.fillStyle = a.isGreen ? "rgba(192, 244, 60, 0.8)" : "rgba(24, 212, 255, 0.85)";
        ctx.fill();
      }

      // 4. Floating Cybersecurity & Analytics HUD Dashboards (Desktop & Tablet)
      if (width > 760) {
        hudPanels.forEach((panel) => {
          const px = width * panel.xRatio + parX * panel.side * -0.8;
          const py =
            height * panel.yRatio +
            Math.sin(time * 1.4 + panel.drift) * 7 +
            parY * -0.6;
          drawHudPanel(ctx, px, py, panel.w, panel.h, panel.type, panel.title, time + panel.drift, panel.side);
        });
      }

      animId = requestAnimationFrame(render);
    }

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section
      className="hero-bg relative min-h-[820px] -mt-[102px] grid place-items-center overflow-hidden text-center max-[980px]:min-h-[760px] max-sm:-mt-[71px] max-sm:min-h-[720px]"
      id="home"
    >
      {/* Background Video Layer (from worldaishow.com/dubai header) */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-55 z-0"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      >
        <source src="/banking/videos/wais-dubai-hero-banner.mp4" type="video/mp4" />
        <source src="/banking/videos/wais-mumbai-hero-banner.webm" type="video/webm" />
      </video>

      {/* Subtle Tint Layer & Overlays on top */}
      <div
        className="hero-overlay absolute inset-0 z-[2] opacity-65 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 62% 55% at 50% 48%, rgba(2, 9, 24, 0.72) 0%, rgba(2, 9, 24, 0.45) 55%, rgba(2, 9, 24, 0.72) 100%)",
        }}
        aria-hidden="true"
      />
      <div
        className="hero-grid-pattern absolute bottom-0 left-[-6%] right-[-6%] h-[245px] z-[2] opacity-50 blur-[1px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Hero Content */}
      <div className="container relative z-10 mx-auto px-6 pt-[220px] lg:pt-[240px] pb-16 max-sm:pt-[175px] max-sm:pb-12 max-sm:px-4 flex flex-col items-center">
        {/* Event Lockup Sub-label */}
        <p className="text-white/95 font-mono text-[14px] sm:text-[17px] lg:text-[19px] uppercase tracking-[2.2px] font-bold mb-5">
          World AI Show | Banking and Financial Services
        </p>

        {/* Hero Title */}
        <h1 className="max-w-[1040px] mx-auto text-white font-[850] leading-[1.08] xl:leading-[72px] tracking-[-1.8px] text-[clamp(34px,4.8vw,66px)] xl:text-[66px] text-center mb-5">
          <span className="block">Controlled AI deployment for</span>
          <span className="block"><GradientText>regulated financial operations.</GradientText></span>
        </h1>

        {/* Standfirst (20px, 33px line-height, 0 tracking, 400 weight, #CBD5E1) */}
        <p className="max-w-[880px] mx-auto text-[#CBD5E1] text-[clamp(15px,1.6vw,19px)] xl:text-[19px] font-normal leading-relaxed xl:leading-[31px] tracking-normal text-center mb-8">
          A premier executive forum dedicated to the operational realities of deploying artificial intelligence across regulated banking, insurance, asset management, and payment operations, convening 300+ C-suite leaders and actively locking down the architecture, fraud defense, and core procurement for the future.
        </p>

        <div className="w-full max-w-[780px] border-t border-white/20 opacity-60 mt-1" />

        {/* Event Meta Footer */}
        <div className="grid grid-cols-[max-content_max-content_max-content] justify-center items-center gap-6 w-full max-w-[820px] mx-auto mt-7 text-center max-[980px]:grid-cols-1 max-sm:gap-3 max-sm:mt-5">
          {/* Column 1: Dates */}
          <div className="pr-6 border-r border-white/27 text-center max-[980px]:border-r-0 max-[980px]:pr-0 max-sm:w-full max-sm:pb-3 max-sm:border-b max-sm:border-white/20">
            <strong className="block text-[34px] font-[850] text-white leading-none max-sm:text-[26px]">
              <GradientText>24</GradientText>
            </strong>
            <span className="block mt-2 text-[13px] font-bold text-white/80 uppercase tracking-[1.5px] max-sm:text-[12px] max-sm:mt-1.5">
              MARCH 2027
            </span>
          </div>

          {/* Column 2: Venue */}
          <div className="pr-6 border-r border-white/27 text-center max-[980px]:border-r-0 max-[980px]:pr-0 max-sm:w-full max-sm:pb-3 max-sm:border-b max-sm:border-white/20">
            <strong className="block text-[34px] font-[850] text-white leading-none max-sm:text-[26px]">
              DIFC District, <GradientText>Dubai</GradientText>
            </strong>
            <span className="block mt-2 text-[13px] font-bold text-white/80 uppercase tracking-[1.5px] max-sm:text-[12px] max-sm:mt-1.5">
              DAY 1 · MARCH DUBAI CLUSTER
            </span>
          </div>

          {/* Column 3: Duration */}
          <div className="text-left max-[980px]:text-center max-sm:w-full">
            <strong className="block text-[34px] font-[850] text-white leading-none max-sm:text-[26px]">
              1-<GradientText>Day</GradientText>
            </strong>
            <span className="block mt-2 text-[13px] font-bold text-white/80 uppercase tracking-[1.5px] max-sm:text-[12px] max-sm:mt-1.5">
              EXECUTIVE DECISION FORUM
            </span>
          </div>
        </div>

        {/* Hero CTA Actions */}
        <div className="flex justify-center flex-wrap gap-3.5 mt-9 max-sm:flex-col max-sm:items-center max-sm:gap-3.5 max-sm:w-full max-sm:max-w-[340px]">
          <Button href="/banking/attend/delegate/" showArrow={true}>
            Apply for Delegate Pass (Complimentary)
          </Button>
          <Button href="/banking/attend/sponsor/" variant="outline" showArrow={true}>
            Explore Commercial Sponsorship
          </Button>
          <a
            href="/banking/agenda/agenda/"
            className="inline-flex items-center justify-center gap-2 min-w-[156px] h-[49px] rounded-full font-extrabold text-sm text-white/85 hover:text-[#18d4ff] border border-white/15 bg-white/5 hover:border-[#18d4ff]/50 transition-all duration-200 px-6"
          >
            View Master Schedule →
          </a>
        </div>
      </div>
    </section>
  );
}
