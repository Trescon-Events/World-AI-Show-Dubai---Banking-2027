import type { ReactNode } from "react";

/* 24x24 keyline-grid icons, 1.75 stroke, rounded caps — consistent weight and optical balance. */
const icons: Record<string, ReactNode> = {
  shield: (<><path d="M12 3 4 6v6c0 4.5 3.2 7.8 8 9 4.8-1.2 8-4.5 8-9V6l-8-3Z" /><path d="m9 12 2 2 4-4" /></>),
  agent: (<><rect x="4" y="7" width="16" height="12" rx="3" /><path d="M12 7V4M9 12h.01M15 12h.01M9 16h6" /></>),
  chart: (<><path d="M4 20V4M4 20h16" /><path d="m7 15 4-4 3 3 5-6" /></>),
  lock: (<><rect x="5" y="11" width="14" height="9" rx="2" /><path d="M8 11V8a4 4 0 0 1 8 0v3" /></>),
  users: (<><circle cx="9" cy="8" r="3.5" /><path d="M2.5 20a6.5 6.5 0 0 1 13 0" /><path d="M16 4.6a3.5 3.5 0 0 1 0 6.8M18 14.2a6.5 6.5 0 0 1 3.5 5.8" /></>),
  target: (<><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="4" /><path d="M12 12h.01" /></>),
  spark: (<><path d="M12 3v4M12 17v4M3 12h4M17 12h4" /><path d="m6.3 6.3 2.4 2.4M15.3 15.3l2.4 2.4M17.7 6.3l-2.4 2.4M8.7 15.3l-2.4 2.4" /></>),
  mic: (<><rect x="9" y="3" width="6" height="11" rx="3" /><path d="M5 11a7 7 0 0 0 14 0M12 18v3" /></>),
  flag: (<><path d="M5 21V4" /><path d="M5 5h12l-2 4 2 4H5" /></>),
  layers: (<><path d="m12 3 9 5-9 5-9-5 9-5Z" /><path d="m3 13 9 5 9-5" /></>),
  table: (<><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 10h18M9 10v9" /></>),
  check: (<><circle cx="12" cy="12" r="9" /><path d="m8.5 12.5 2.5 2.5 4.5-5" /></>),
};

export function Icon({ name }: { name: keyof typeof icons | string }) {
  return (
    <span className="ico" aria-hidden="true">
      <svg viewBox="0 0 24 24" focusable="false">{icons[name] ?? icons.check}</svg>
    </span>
  );
}
