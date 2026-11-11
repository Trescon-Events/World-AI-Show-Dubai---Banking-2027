/* Reusable brand-book SVG elements (AI 2047 Brand Book pp. 35–41). Colour comes from currentColor. */

const spiral = Array.from({ length: 150 }, (_, i) => {
  const a = i * 0.42;
  const r = 6 + i * 1.15;
  return { x: +(200 + r * Math.cos(a)).toFixed(1), y: +(200 + r * Math.sin(a)).toFixed(1), s: +(0.9 + (i / 150) * 1.7).toFixed(2) };
});

const star = "M0,-12 L2.6,-2.6 L12,0 L2.6,2.6 L0,12 L-2.6,2.6 L-12,0 L-2.6,-2.6Z";

const waveDots = Array.from({ length: 9 }, (_, row) =>
  Array.from({ length: 46 }, (_, col) => {
    const amp = (Math.sin(col * 0.34 + row * 0.55) + 1) / 2;
    const fade = 1 - row / 10;
    return { x: 8 + col * 10, y: 10 + row * 12 + Math.sin(col * 0.22) * 14, r: +(0.5 + amp * 2.6 * fade).toFixed(2) };
  })
).flat();

type Props = { className?: string };

/** Digital Pulse: concentric dashed rings + vertical micro-linear dashed data lines */
export function DigitalPulse({ className = "" }: Props) {
  return (
    <svg className={`bg-el ${className}`} viewBox="0 0 400 400" aria-hidden="true" focusable="false">
      {[40, 80, 120, 160, 196].map((r) => (
        <circle key={r} cx="200" cy="200" r={r} fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 8" strokeLinecap="round" />
      ))}
      {Array.from({ length: 11 }, (_, i) => (
        <line key={i} x1={20 + i * 36} y1="20" x2={20 + i * 36} y2="380" stroke="currentColor" strokeWidth="1" strokeDasharray="6 12" opacity="0.6" />
      ))}
    </svg>
  );
}

/** Data Vortex Lattice: dotted spiral inside a 4-point star lattice */
export function VortexLattice({ className = "" }: Props) {
  return (
    <svg className={`bg-el ${className}`} viewBox="0 0 400 400" aria-hidden="true" focusable="false">
      {[40, 120, 200, 280, 360].flatMap((x) => [40, 120, 200, 280, 360].map((y) => (
        <path key={`${x}-${y}`} d={star} transform={`translate(${x} ${y})`} fill="currentColor" opacity="0.5" />
      )))}
      {spiral.map((d, i) => (
        <circle key={i} cx={d.x} cy={d.y} r={d.s} fill="currentColor" />
      ))}
    </svg>
  );
}

/** Halftone Dotted Wave */
export function HalftoneWave({ className = "" }: Props) {
  return (
    <svg className={`bg-el ${className}`} viewBox="0 0 470 140" aria-hidden="true" focusable="false">
      {waveDots.map((d, i) => (
        <circle key={i} cx={d.x} cy={d.y} r={d.r} fill="currentColor" />
      ))}
    </svg>
  );
}

/** Isometric Data Vortex dotted ring */
export function IsometricRing({ className = "" }: Props) {
  return (
    <svg className={`bg-el ${className}`} viewBox="0 0 400 240" aria-hidden="true" focusable="false">
      {[40, 80, 120, 160, 190].map((r) => (
        <ellipse key={r} cx="200" cy="120" rx={r} ry={r * 0.52} fill="none" stroke="currentColor" strokeWidth="2.4" strokeDasharray="0.1 9" strokeLinecap="round" />
      ))}
    </svg>
  );
}
