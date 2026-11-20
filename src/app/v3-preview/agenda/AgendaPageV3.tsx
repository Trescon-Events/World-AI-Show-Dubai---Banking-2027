"use client";

import type { CSSProperties, PointerEvent, ReactNode } from "react";
import { useMemo, useState } from "react";

import { FooterV3 } from "../_components/FooterV3";
import { HeaderV3 } from "../_components/HeaderV3";
import styles from "../../agenda/AgendaPage.module.css";
import { AgendaSectionV3, sixPartBlocksV3 } from "../_components/AgendaSectionV3";
import { SpeakersSectionV3 } from "../_components/SpeakersSectionV3";
import { GradientText, V3_BASE } from "../_components/SharedV3";

export const agendaSubNavV3 = ["Overview", "The Vision", "Agenda", "Themes", "Call for Speakers"];

const formats: { title: string; text: string; icon: ReactNode }[] = [
  {
    title: "15-Minute Plenary Keynotes & Buyer Evidence",
    text: "Frontline case studies and fireside briefings led by commercial bank, insurance, and risk CXOs. Moving past sandbox hype to examine real-world core integration hurdles, pilot post-mortems, and verified balance-sheet performance.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
        <path d="M19 10v1a7 7 0 0 1-14 0v-1" />
        <line x1="12" y1="18" x2="12" y2="22" />
        <line x1="8" y1="22" x2="16" y2="22" />
      </svg>
    ),
  },
  {
    title: "75-Minute Workshops & 7 Interactive Experience Labs",
    text: "Workshop A (Bank-Ready Deployment) and Workshop B (Intelligent Lending, Fraud & Insurance Operations), paired with 7 hands-on floor simulations including the Financial Crime Lab, Explain My Loan Decision, and Autonomous Payment Challenge.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" />
        <path d="M10 6.5h4M6.5 10v4M17.5 10v4M10 17.5h4" />
      </svg>
    ),
  },
  {
    title: "3 Closed-Door CXO Boardrooms (20 Buyers Each)",
    text: "Three curated 60-minute private sessions held under the Chatham House Rule — Auditing Financial AI, Financial Crime Arms Race, and Enterprise AI Procurement — each convening 20 pre-qualified buy-side CXOs.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

const regionalCatalysts = [
  [
    "CBUAE Federal Onshore Modernisation",
    "Supervisory frameworks governing cloud computing, outsourced technology risk, Aani instant payment security, and AlTareq open-finance rails across federal onshore UAE banking operations.",
    "/banking/images/agenda/Policy.webp",
  ],
  [
    "DFSA DIFC Free-Zone AI Governance",
    "Independent Dubai Financial Services Authority (DFSA) expectations on algorithmic accountability, third-party vendor reliance (75%), and human oversight across DIFC financial firms.",
    "/banking/images/agenda/AI-infra.webp",
  ],
  [
    "Insurance, Lending & Claims Automation",
    "Rapid shift toward computer-vision motor/health FNOL claims triage, medical fraud scoring, and explainable alternative-data SME and retail credit underwriting.",
    "/banking/images/agenda/investment.webp",
  ],
  [
    "Cross-Regional UAE, GCC & African Scale",
    "25+ UAE banks and insurers alongside 15+ GCC and selected African financial groups decoupling legacy cores to move from isolated AI pilots into audited production.",
    "/banking/images/agenda/Global.webp",
  ],
];

type BfsiAgendaSession = {
  id: number;
  dayKey: string;
  dayLabel: string;
  startTime: string;
  endTime: string;
  title: string;
  typeTitle: string;
  location: string;
  description: string;
  trackId: string;
  trackTitle: string;
};

const bfsiSchedule: BfsiAgendaSession[] = [
  {
    id: 101,
    dayKey: "2027-03-24",
    dayLabel: "Wednesday 24 March 2027: From AI Pilots to Proven Financial Performance",
    startTime: "08:00",
    endTime: "08:50",
    title: "Registration, Welcome Coffee & Experience Labs Open",
    typeTitle: "Networking & Experience Labs",
    location: "Concourse Showcase (9 sqm, 4 sqm & 2 sqm Stands) · Dubai, UAE",
    description:
      "Executive badge collection, welcome refreshments, and early access to the 7 Interactive Experience Labs and exhibition concourse.",
    trackId: "main",
    trackTitle: "Main Plenary Stage",
  },
  {
    id: 102,
    dayKey: "2027-03-24",
    dayLabel: "Wednesday 24 March 2027: From AI Pilots to Proven Financial Performance",
    startTime: "08:50",
    endTime: "09:30",
    title: "Opening Executive Brief & DFSA Survey Benchmark Keynote",
    typeTitle: "15-Min Plenary Keynotes",
    location: "Main Plenary Stage",
    description:
      "Opening address by Trescon and headline institutional leaders unpacking the transition from 71% AI adoption to audited live production across UAE, GCC, and African BFSI institutions.",
    trackId: "main",
    trackTitle: "Main Plenary Stage",
  },
  {
    id: 103,
    dayKey: "2027-03-24",
    dayLabel: "Wednesday 24 March 2027: From AI Pilots to Proven Financial Performance",
    startTime: "09:30",
    endTime: "10:30",
    title: "Pillar 01 Plenary: Fighting Financial Crime with Intelligent Technology",
    typeTitle: "15-Min Keynote + Plenary Panel",
    location: "Main Plenary Stage",
    description:
      "15-minute headline keynote followed by CROs, MLROs, and heads of fraud examining sub-second transaction fraud defence, APP scam mitigation, AML alert prioritisation, and behavioural biometrics.",
    trackId: "main",
    trackTitle: "Main Plenary Stage",
  },
  {
    id: 104,
    dayKey: "2027-03-24",
    dayLabel: "Wednesday 24 March 2027: From AI Pilots to Proven Financial Performance",
    startTime: "10:30",
    endTime: "11:30",
    title: "Closed-Door CXO Boardroom 1: Auditing Financial AI (60 Minutes)",
    typeTitle: "60-Min CXO Boardroom (20 Buyers)",
    location: "CXO Private Boardroom Suite 1",
    description:
      "Chatham House Rule executive session for 20 pre-qualified banking, insurance, and risk CXOs governing model drift, third-party vendor reliance, and dual onshore CBUAE / offshore DFSA compliance.",
    trackId: "boardrooms",
    trackTitle: "CXO Closed-Door Boardrooms",
  },
  {
    id: 105,
    dayKey: "2027-03-24",
    dayLabel: "Wednesday 24 March 2027: From AI Pilots to Proven Financial Performance",
    startTime: "10:30",
    endTime: "11:15",
    title: "Morning Bilateral Matchmaking & Experience Lab Simulations",
    typeTitle: "1-on-1 Matchmaking & Labs",
    location: "Matchmaking Lounge & 7 Interactive Experience Labs Zone",
    description:
      "Pre-scheduled 1-on-1 buyer-supplier meetings (50+ bilateral meetings) alongside hands-on trials at the Financial Crime Investigation Lab and AI Accountability Hearing.",
    trackId: "labs",
    trackTitle: "7 Interactive Experience Labs",
  },
  {
    id: 106,
    dayKey: "2027-03-24",
    dayLabel: "Wednesday 24 March 2027: From AI Pilots to Proven Financial Performance",
    startTime: "11:15",
    endTime: "12:15",
    title: "Pillar 02 & 03 Plenary: Responsible AI Confidence & Intelligent Banking Operations",
    typeTitle: "15-Min Keynote + Regulatory Plenary",
    location: "Main Plenary Stage",
    description:
      "Bounded agentic workflows, automated eKYC, trade-finance IDP, algorithmic auditability, and fairness testing across legacy banking and policy cores.",
    trackId: "main",
    trackTitle: "Main Plenary Stage",
  },
  {
    id: 107,
    dayKey: "2027-03-24",
    dayLabel: "Wednesday 24 March 2027: From AI Pilots to Proven Financial Performance",
    startTime: "12:15",
    endTime: "13:15",
    title: "Closed-Door CXO Boardroom 2: The Financial Crime Arms Race (60 Minutes)",
    typeTitle: "60-Min CXO Boardroom (20 Buyers)",
    location: "CXO Private Boardroom Suite 2",
    description:
      "Off-the-record benchmark exchange for 20 pre-qualified CROs, CCOs, MLROs, and Fraud Directors countering synthetic identities, mule networks, and real-time payment scams.",
    trackId: "boardrooms",
    trackTitle: "CXO Closed-Door Boardrooms",
  },
  {
    id: 108,
    dayKey: "2027-03-24",
    dayLabel: "Wednesday 24 March 2027: From AI Pilots to Proven Financial Performance",
    startTime: "12:15",
    endTime: "13:30",
    title: "Executive Networking Luncheon & Concourse Demonstrations",
    typeTitle: "Luncheon & Concourse",
    location: "Executive Dining Hall & Concourse",
    description:
      "Hosted networking luncheon for C-suite delegates and speakers alongside live demonstrations across 9 sqm built stands, 4 sqm turnkey stands, and 2 sqm Start Up pods.",
    trackId: "main",
    trackTitle: "Main Plenary Stage",
  },
  {
    id: 109,
    dayKey: "2027-03-24",
    dayLabel: "Wednesday 24 March 2027: From AI Pilots to Proven Financial Performance",
    startTime: "13:30",
    endTime: "14:45",
    title: "Workshop A: Bank-Ready AI Deployment & Core Integration (75 Minutes)",
    typeTitle: "75-Min Clinical Workshop",
    location: "Clinical Workshop Suite A",
    description:
      "Interactive 75-minute clinical workshop resolving bounded agentic orchestration, legacy core decoupling, human-in-the-loop escalation, and production telemetry.",
    trackId: "workshops",
    trackTitle: "Parallel Workshops (75 Min)",
  },
  {
    id: 110,
    dayKey: "2027-03-24",
    dayLabel: "Wednesday 24 March 2027: From AI Pilots to Proven Financial Performance",
    startTime: "13:30",
    endTime: "14:45",
    title: "Workshop B: Intelligent Lending, Fraud & Insurance Operations (75 Minutes)",
    typeTitle: "75-Min Clinical Workshop",
    location: "Clinical Workshop Suite B",
    description:
      "Interactive 75-minute clinical workshop covering explainable SME/retail credit underwriting, automated motor/health FNOL claims intake via computer vision/IDP, and claims fraud scoring.",
    trackId: "workshops",
    trackTitle: "Parallel Workshops (75 Min)",
  },
  {
    id: 111,
    dayKey: "2027-03-24",
    dayLabel: "Wednesday 24 March 2027: From AI Pilots to Proven Financial Performance",
    startTime: "14:45",
    endTime: "15:45",
    title: "Closed-Door CXO Boardroom 3: Enterprise AI Procurement & Vendor Governance (60 Minutes)",
    typeTitle: "60-Min CXO Boardroom (20 Buyers)",
    location: "CXO Private Boardroom Suite 3",
    description:
      "Private 60-minute boardroom for 20 pre-qualified CIOs, CTOs, CDAIOs, and Procurement Heads establishing SLA benchmarks, sovereign data residency clauses, and 2027 vendor shortlists.",
    trackId: "boardrooms",
    trackTitle: "CXO Closed-Door Boardrooms",
  },
  {
    id: 112,
    dayKey: "2027-03-24",
    dayLabel: "Wednesday 24 March 2027: From AI Pilots to Proven Financial Performance",
    startTime: "14:45",
    endTime: "15:30",
    title: "Interactive Floor Simulations: Explain My Loan, Claim Triage & Control Room Labs",
    typeTitle: "1-on-1 Matchmaking & Labs",
    location: "7 Interactive Experience Labs Zone",
    description:
      "Live floor walk-throughs across the Explain My Loan Decision Lab, Insurance Claim Triage simulation, Autonomous Payment Challenge, Control Room, and Procurement Clinic.",
    trackId: "labs",
    trackTitle: "7 Interactive Experience Labs",
  },
  {
    id: 113,
    dayKey: "2027-03-24",
    dayLabel: "Wednesday 24 March 2027: From AI Pilots to Proven Financial Performance",
    startTime: "15:30",
    endTime: "16:30",
    title: "Pillar 06 Plenary: Future Payments, Sovereign Infrastructure & Autonomous Banking",
    typeTitle: "15-Min Keynote + Plenary Panel",
    location: "Main Plenary Stage",
    description:
      "Agentic commerce permissioning, Aani instant payment and AlTareq open-finance security, sovereign cloud compute, and core mainframe decoupling.",
    trackId: "main",
    trackTitle: "Main Plenary Stage",
  },
  {
    id: 114,
    dayKey: "2027-03-24",
    dayLabel: "Wednesday 24 March 2027: From AI Pilots to Proven Financial Performance",
    startTime: "16:30",
    endTime: "17:15",
    title: "Closing Executive Synthesis & 2027 BFSI Procurement Mandate",
    typeTitle: "Closing Plenary Synthesis",
    location: "Main Plenary Stage",
    description:
      "Consolidated takeaways from the 3 CXO Boardrooms and clinical workshops, locking down actionable 2027 architecture and governance priorities.",
    trackId: "main",
    trackTitle: "Main Plenary Stage",
  },
  {
    id: 115,
    dayKey: "2027-03-24",
    dayLabel: "Wednesday 24 March 2027: From AI Pilots to Proven Financial Performance",
    startTime: "17:15",
    endTime: "18:30",
    title: "Networking Reception",
    typeTitle: "Executive Networking Reception",
    location: "VIP Networking Concourse · Dubai, UAE",
    description:
      "Peer networking reception concluding Day 1 of the March Dubai Cluster ahead of Day 2 (Healthcare and Life Sciences, 25 March 2027).",
    trackId: "main",
    trackTitle: "Main Plenary Stage",
  },
];

function ArrowSVG() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-4 h-4 object-contain transition-transform duration-200 group-hover:translate-x-1"
      aria-hidden="true"
    >
      <path d="M3.33334 8H12.6667" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8.66666 4L12.6667 8L8.66666 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function setPointerGlow(event: PointerEvent<HTMLElement>) {
  const rect = event.currentTarget.getBoundingClientRect();
  event.currentTarget.style.setProperty("--mouse-x", `${event.clientX - rect.left}px`);
  event.currentTarget.style.setProperty("--mouse-y", `${event.clientY - rect.top}px`);
}

function IconCard({ title, text, icon, index }: { title: string; text: string; icon: string; index: number }) {
  return (
    <article className={styles.iconCard}>
      <span className={styles.iconBadge}>
        <img src={icon} alt="" loading="lazy" />
      </span>
      <span className={styles.cardIndex}>{String(index + 1).padStart(2, "0")}</span>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

function SpeakerCallToStageV3() {
  return (
    <section
      className="relative py-[104px] bg-[#F7F9FC] text-[#334155] border-t border-[#0069B8]/15 overflow-hidden max-sm:py-[72px]"
      id="call-for-speakers"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-[radial-gradient(circle,rgba(0,105,184,0.06),transparent_60%)] pointer-events-none" />

      <div className="relative z-10 w-[min(1172px,calc(100%-48px))] mx-auto max-sm:w-[calc(100%-32px)]">
        <h2 className="font-heading text-center font-bold text-[#08121E] leading-[1.08] tracking-[-0.02em] text-[clamp(34px,4.5vw,48px)] mb-[56px]">
          Take the Stage at <span className="text-[#0069B8]">World AI Show</span>
        </h2>

        <div className="grid grid-cols-[1.12fr_0.88fr] gap-[66px] items-center max-[980px]:grid-cols-1 max-[980px]:gap-[48px] mb-12">
          <div>
            <h3 className="font-heading m-0 text-[#08121E] font-bold text-[28px] leading-tight mb-4 max-sm:text-[23px]">
              Share Verified Production Outcomes Across Banking, Insurance &amp; Risk
            </h3>
            <p className="m-0 text-[#334155] text-[16px] leading-[1.65] mb-5">
              We invite senior banking, insurance, wealth, and regulatory leaders across the UAE, GCC, and selected African markets to deliver evidence-backed case studies examining real-world architecture hurdles, pilot post-mortems, model explainability, and verified balance-sheet outcomes.
            </p>
            <p className="m-0 text-[#334155] text-[16px] leading-[1.65] mb-8">
              Taking place on 24 March 2027 in Dubai, UAE (Day 1 of the March Dubai Cluster), the forum prioritises audited execution across onshore CBUAE and offshore DIFC DFSA frameworks and our six operational mandates.
            </p>

            <div className="p-7 border border-[#0069B8]/22 border-t-4 border-t-[#F15928] rounded-[16px] bg-white shadow-[0_12px_32px_rgba(8,18,30,0.06)]">
              <strong className="block text-[#0069B8] text-[12px] font-bold uppercase tracking-[0.14em] mb-5">
                Why join the BFSI Faculty in Dubai, UAE:
              </strong>
              <ul className="m-0 pl-0 list-none flex flex-col gap-5">
                <li className="flex items-start gap-3.5 text-[#334155] text-[15px]">
                  <span className="w-8 h-8 rounded-full bg-[#0069B8] flex items-center justify-center shrink-0 mt-0.5">
                    <img
                      src="/banking/images/agenda/icon-global.webp"
                      alt="Global icon"
                      className="w-4 h-4 object-contain brightness-0 invert select-none"
                    />
                  </span>
                  <span>
                    <strong className="text-[#08121E]">48 Global Editions of Authority:</strong> Speak on the flagship regional BFSI platform organised by Trescon, backed by 48 completed editions across four continents.
                  </span>
                </li>
                <li className="flex items-start gap-3.5 text-[#334155] text-[15px]">
                  <span className="w-8 h-8 rounded-full bg-[#0069B8] flex items-center justify-center shrink-0 mt-0.5">
                    <img
                      src="/banking/images/agenda/icon-speaker.webp"
                      alt="Speaker icon"
                      className="w-4 h-4 object-contain brightness-0 invert select-none"
                    />
                  </span>
                  <span>
                    <strong className="text-[#08121E]">300–400 Pre-Qualified C-Suite Leaders (80%+ Buy-Side):</strong> Address senior banking, insurance, risk, and regulatory decision-makers actively locking down 2027 architectures.
                  </span>
                </li>
                <li className="flex items-start gap-3.5 text-[#334155] text-[15px]">
                  <span className="w-8 h-8 rounded-full bg-[#0069B8] flex items-center justify-center shrink-0 mt-0.5">
                    <img
                      src="/banking/images/agenda/icon-lightning.webp"
                      alt="Lightning bolt icon"
                      className="w-4 h-4 object-contain brightness-0 invert select-none"
                    />
                  </span>
                  <span>
                    <strong className="text-[#08121E]">Clinical, Peer-Led Formats:</strong> Contribute to 15-minute plenary keynotes, regulatory plenaries, 75-minute clinical workshops, or 60-minute CXO Closed-Door Boardrooms.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative overflow-hidden border border-[#0069B8]/25 rounded-[22px] shadow-[0_18px_40px_rgba(8,18,30,0.12)]">
            <div className="absolute inset-0 bg-gradient-to-t from-[#08121E]/35 via-transparent to-transparent pointer-events-none z-1" />
            <img
              src="/banking/images/v3-preview/call-for-speakers.jpg"
              alt="Executive panel speakers on stage at World AI Show Dubai"
              className="w-full h-[360px] md:h-[480px] filter saturate-[0.98] brightness-[0.98]"
              style={{ objectFit: "cover", objectPosition: "center" }}
              loading="lazy"
            />
          </div>
        </div>

        <div className="flex justify-center gap-4 mt-8 max-sm:flex-col max-sm:items-center">
          <a href={`${V3_BASE}/speaker-enquiry/`} className="bb-btn-primary group">
            Apply to Join the Dubai BFSI Faculty
            <svg
              className="bb-btn-arrow w-4 h-4 flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.8"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

function AgendaTabsV3() {
  const activeDay = "2027-03-24";
  const [activeTrack, setActiveTrack] = useState("all");
  const [activeSessionType, setActiveSessionType] = useState("");
  const [query, setQuery] = useState("");

  const sessionTypes = useMemo(() => {
    return Array.from(new Set(bfsiSchedule.map((s) => s.typeTitle)));
  }, []);

  const trackTabs = useMemo(() => {
    const sessionsForDay = bfsiSchedule.filter((session) => session.dayKey === activeDay);
    return Array.from(
      new Map(sessionsForDay.map((session) => [session.trackId, session.trackTitle])).entries()
    ).map(([id, title]) => ({ id, title }));
  }, [activeDay]);

  const filteredItems = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return bfsiSchedule.filter((session) => {
      const dayMatches = session.dayKey === activeDay;
      const trackMatches = activeTrack === "all" || session.trackId === activeTrack;
      const typeMatches = !activeSessionType || session.typeTitle === activeSessionType;
      const searchMatches =
        !normalizedQuery ||
        session.title.toLowerCase().includes(normalizedQuery) ||
        session.description.toLowerCase().includes(normalizedQuery) ||
        session.typeTitle.toLowerCase().includes(normalizedQuery);
      return dayMatches && trackMatches && typeMatches && searchMatches;
    });
  }, [activeDay, activeSessionType, activeTrack, query]);

  function clearFilters() {
    setActiveTrack("all");
    setActiveSessionType("");
    setQuery("");
  }

  return (
    <section className={styles.timelineSection} id="agenda">
      <div className={styles.container}>
        <div className={styles.timelineIntro}>
          <h2>
            A look at the schedule for{" "}
            <GradientText>World AI Show | BFSI</GradientText>
          </h2>
        </div>

        {trackTabs.length > 1 ? (
          <div className={styles.trackTabs} aria-label="Agenda tracks">
            <button
              className={activeTrack === "all" ? styles.activeTrack : ""}
              onClick={() => setActiveTrack("all")}
              onPointerMove={setPointerGlow}
              type="button"
            >
              All Formats &amp; Stages
            </button>
            {trackTabs.map((track) => (
              <button
                className={activeTrack === track.id ? styles.activeTrack : ""}
                key={track.id}
                onClick={() => setActiveTrack(track.id)}
                onPointerMove={setPointerGlow}
                type="button"
              >
                {track.title}
              </button>
            ))}
          </div>
        ) : null}

        <div className={styles.agendaFilters} aria-label="Agenda filters">
          <label>
            <span>Search</span>
            <input
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search workshops, boardrooms, insurance, fraud, payments..."
              type="search"
              value={query}
            />
          </label>

          <label>
            <span>Session Type</span>
            <select
              onChange={(event) => setActiveSessionType(event.target.value)}
              value={activeSessionType}
            >
              <option value="">All Formats</option>
              {sessionTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </label>

          {activeTrack !== "all" || activeSessionType || query ? (
            <button onClick={clearFilters} type="button">
              Clear
            </button>
          ) : null}
        </div>

        <div className={styles.timeline}>
          <div className={styles.timelineHead}>
            <span>Wednesday 24 March 2027 · From AI Pilots to Proven Financial Performance</span>
            <span>Dubai, UAE · 1-Day Executive Decision Forum</span>
          </div>

          {filteredItems.length === 0 ? (
            <p className={styles.loadingState}>No sessions match the selected filters.</p>
          ) : null}

          {filteredItems.map((session, index) => (
            <article
              className={styles.timelineRow}
              key={session.id}
              onPointerMove={setPointerGlow}
              style={{ "--row-index": index } as CSSProperties}
            >
              <time>
                {session.startTime}
                <span>{session.endTime}</span>
              </time>
              <span className={styles.sessionType}>{session.typeTitle}</span>
              <div>
                <h3>{session.title}</h3>
                {session.description ? <p>{session.description}</p> : null}
                {session.location ? (
                  <small className={styles.locationText}>{session.location}</small>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCtaBlockV3() {
  return (
    <section className={styles.finalCta} id="cta">
      <div className={styles.ctaBox}>
        <h2>
          Be in the room where{" "}
          <GradientText>the decisions get made.</GradientText>
        </h2>
        <p>
          Buy tickets, enquire about our 7-tier commercial sponsorship inventory, or apply to join the Dubai BFSI faculty.
        </p>
        <div className={styles.actions}>
          <a className={`${styles.button} ${styles.solid} group`} href={`${V3_BASE}/attend/delegate/`}>
            Buy Tickets <ArrowSVG />
          </a>
          <a
            className={`${styles.button} ${styles.outline} group`}
            href={`${V3_BASE}/sponsorship-enquiry/`}
          >
            Enquire about sponsorship <ArrowSVG />
          </a>
        </div>
        <dl>
          <div>
            <dt>Date</dt>
            <dd>24 March 2027 · 1-Day Forum</dd>
          </div>
          <div>
            <dt>Venue</dt>
            <dd>Dubai, UAE</dd>
          </div>
          <div>
            <dt>Cluster</dt>
            <dd>Day 1 · March Dubai Cluster</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

export function AgendaOverviewV3() {
  return (
    <>
      <section
        className={styles.hero}
        id="overview"
        style={{
          background:
            "linear-gradient(90deg, rgba(8, 18, 30, 0.92) 0%, rgba(8, 18, 30, 0.62) 46%, rgba(8, 18, 30, 0.14) 100%), url(/banking/images/agenda/Overview-hero.webp) center top / cover no-repeat",
        }}
      >
        <div className={styles.container}>
          <h1>
            From AI pilots to <br />
            <GradientText tone="teal">proven financial performance.</GradientText>
          </h1>
          <p className={styles.heroPara}>
            Built to move senior banking, insurance, risk, and regulatory decision-makers from boardroom compliance expectations down to concrete 2027 architecture and procurement specifications.
          </p>
        </div>
      </section>

      <section className={styles.aboutSection}>
        <div className={styles.split}>
          <div>
            <h2 className="!mb-6">
              Building intelligent, trusted &amp;{" "}
              <GradientText>resilient financial institutions.</GradientText>
            </h2>
            <p className="mt-6 mb-4">
              World AI Show | BFSI convenes 300–400 pre-qualified C-suite banking, insurance, wealth, risk, and regulatory leaders across the UAE, wider GCC, and selected African markets (governed by an 80%+ institutional buy-side ratio).
            </p>
            <p className="m-0">
              Every session is engineered around real operational deployment: clear model explainability, seamless integration with legacy banking and policy cores, and dual-jurisdiction compliance across onshore Central Bank of the UAE (CBUAE) and offshore DIFC Dubai Financial Services Authority (DFSA) frameworks.
            </p>
          </div>
          <img
            src="/banking/images/agenda/About.webp"
            alt="BFSI executives networking at World AI Show Dubai"
            loading="lazy"
          />
        </div>

        <div className={`${styles.container} mt-16`}>
          <div className={styles.formatGrid}>
            {formats.map((item) => (
              <article className={`${styles.formatCard} !p-7`} key={item.title}>
                <div className="w-12 h-12 rounded-2xl bg-[#0069B8] flex items-center justify-center text-white shadow-[0_8px_18px_rgba(0,105,184,0.22)]">
                  {item.icon}
                </div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.formatsSection}>
        <div className={styles.container}>
          <h2>
            Programme <GradientText tone="teal">Execution Architecture.</GradientText>
          </h2>
          <p>
            Engineered to move BFSI buyers from DFSA benchmark insights down to live simulations and concrete vendor shortlists across one intensive day.
          </p>

          <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-sm:grid-cols-1 text-left">
            {sixPartBlocksV3.map((block) => (
              <div
                key={block.num}
                className="p-6 rounded-[18px] border border-[#0069B8]/52 border-t-4 border-t-[#F15928] bg-[#0D1B2E] shadow-[0_18px_40px_rgba(8,18,30,0.28)]"
              >
                <span className="inline-block text-[11px] uppercase tracking-[0.14em] text-[#009EAD] font-bold mb-2">
                  {block.num}
                </span>
                <h3 className="font-heading !m-0 !mb-2 !text-white !text-[19px] font-bold">
                  {block.title}
                </h3>
                <p className="!m-0 !text-white/80 !text-[14.5px] leading-relaxed">
                  {block.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCtaBlockV3 />
    </>
  );
}

const visionPoints = [
  {
    title: "Distinguishing Onshore CBUAE and Offshore DIFC DFSA Regimes",
    text: "Production BFSI AI in the UAE requires rigorous separation between federal onshore oversight under the Central Bank of the UAE (CBUAE) — covering Aani instant payments and AlTareq open finance — and offshore free-zone supervision under the Dubai Financial Services Authority (DFSA).",
    bullets: [] as string[],
  },
  {
    title: "DFSA November 2026 Survey & Market Reality",
    text: "With the Middle East financial services & insurance AI market projected to surpass USD 3.5B+ by 2027 (PwC Middle East Financial Services AI Report), new DFSA survey telemetry highlights the production gap:",
    bullets: [
      "71% AI adoption across DIFC firms (up from 33% in 2024), yet only 14% run autonomous agents live — DFSA AI Survey (2 November 2026)",
      "75% of surveyed generative AI adopters rely on third-party vendor solutions — DFSA AI Survey (2 November 2026)",
    ],
  },
  {
    title: "Day 1 of the March Dubai Cluster",
    text: "On 24 March 2027, World AI Show | BFSI convenes 300–400 C-suite leaders in Dubai, UAE, held back-to-back with Healthcare and Life Sciences on 25 March 2027 while maintaining distinct P&Ls and dedicated sector agendas.",
    bullets: [] as string[],
  },
];

export function AgendaVisionV3() {
  return (
    <>
      <section
        className={styles.hero}
        id="the-2030-vision-hero"
        style={{
          background:
            "linear-gradient(90deg, rgba(8, 18, 30, 0.92) 0%, rgba(8, 18, 30, 0.62) 46%, rgba(8, 18, 30, 0.14) 100%), url(/banking/images/agenda/Vision-hero.webp) center top / cover no-repeat",
        }}
      >
        <div className={styles.container}>
          <h1>
            The Vision &amp; Catalysts: <br />
            <GradientText tone="teal">DFSA Nov 2026 Survey &amp; Regional Adoption.</GradientText>
          </h1>
        </div>
      </section>

      <section className={styles.visionSection} id="the-2030-vision">
        <div className={styles.container}>
          <div className="grid grid-cols-[0.95fr_1.05fr] gap-12 items-stretch max-[980px]:grid-cols-1 mb-10">
            <div className="group relative rounded-[20px] overflow-hidden border border-[#0069B8]/25 bg-white shadow-[0_16px_40px_rgba(8,18,30,0.1)] min-h-[420px]">
              <img
                src="/banking/images/agenda/dubai/the-vision.jpg"
                alt="UAE, GCC and African BFSI AI Mandate"
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                loading="lazy"
              />
            </div>

            <div className="flex flex-col gap-4 justify-between">
              {visionPoints.map((pt, idx) => (
                <article
                  key={pt.title}
                  className="group text-left p-6 rounded-[18px] border border-[#0069B8]/22 border-t-4 border-t-[#0069B8] bg-white shadow-[0_12px_32px_rgba(8,18,30,0.06)] transition-all duration-300 cursor-default hover:border-[#0069B8] hover:border-t-[#F15928] hover:shadow-[0_16px_38px_rgba(8,18,30,0.1)] hover:-translate-y-0.5"
                >
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <h3 className="font-heading m-0 font-bold text-[19px] leading-snug text-[#08121E] transition-colors duration-300 group-hover:text-[#0069B8]">
                      {pt.title}
                    </h3>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-[#0069B8]/10 text-[#0069B8] font-bold transition-all duration-300 group-hover:bg-[#F15928] group-hover:text-white">
                      0{idx + 1}
                    </span>
                  </div>
                  <p className="m-0 text-[#334155] text-[15px] leading-relaxed">{pt.text}</p>
                  {pt.bullets.length > 0 && (
                    <ul className="mt-3 mb-0 pl-0 list-none space-y-1.5">
                      {pt.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex items-start gap-2 text-[#08121E] text-[14px] font-medium"
                        >
                          <span className="text-[#F15928] font-bold">•</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              ))}
            </div>
          </div>

          <blockquote className="w-full m-0 p-9 md:px-12 rounded-[20px] border-l-4 border-l-[#F15928] bg-[#0069B8] shadow-[0_16px_40px_rgba(0,105,184,0.22)] text-white text-[clamp(20px,2.3vw,24px)] font-bold leading-[1.45] text-center">
            &ldquo;AI adoption across DIFC financial firms surged from 33% in 2024 to 71% in 2026 — yet only 14% operate autonomous agents live, and 75% of generative AI adopters rely on third-party vendor solutions.&rdquo;
            <cite className="block mt-4 text-[11px] font-bold tracking-[0.14em] uppercase text-white/75 not-italic">
              &mdash; DFSA AI SURVEY (2 NOVEMBER 2026)
            </cite>
          </blockquote>
        </div>
      </section>

      <section className={styles.gatewaySection}>
        <div className={styles.container}>
          <h2 className="mb-12">
            Four Regulatory &amp; Operational Catalysts{" "}
            <GradientText tone="white-orange">
              Shaping 2027 BFSI Technology Investment.
            </GradientText>
          </h2>
          <div className="grid grid-cols-2 gap-6 max-sm:grid-cols-1">
            {regionalCatalysts.map(([title, text, icon], index) => (
              <IconCard icon={icon} index={index} key={title} text={text} title={title} />
            ))}
          </div>
        </div>
      </section>

      <AgendaSectionV3 />
    </>
  );
}

export function AgendaLiveTimelineV3() {
  return (
    <>
      <section
        className={styles.hero}
        id="agenda-timeline-hero"
        style={{
          background:
            "linear-gradient(90deg, rgba(8, 18, 30, 0.92) 0%, rgba(8, 18, 30, 0.62) 46%, rgba(8, 18, 30, 0.14) 100%), url(/banking/images/agenda/Agenda-hero.webp) center top / cover no-repeat",
        }}
      >
        <div className={styles.container}>
          <h1>
            <GradientText tone="teal">Event Schedule</GradientText>
          </h1>
        </div>
      </section>
      <AgendaTabsV3 />
      <FinalCtaBlockV3 />
    </>
  );
}

export function AgendaThemesV3() {
  return (
    <>
      <section
        className={styles.hero}
        id="agenda-themes-hero"
        style={{
          background:
            "linear-gradient(90deg, rgba(8, 18, 30, 0.92) 0%, rgba(8, 18, 30, 0.62) 46%, rgba(8, 18, 30, 0.14) 100%), url(/banking/images/agenda/Themes-hero.webp) center top / cover no-repeat",
        }}
      >
        <div className={styles.container}>
          <h1>
            Six operational mandates. <br />
            <GradientText tone="teal">One decisive day.</GradientText>
          </h1>
          <p className={styles.heroPara}>
            Spanning financial crime defence, responsible AI &amp; regulatory confidence, intelligent banking operations, smarter lending, insurance &amp; claims transformation, and future payments &amp; sovereign infrastructure.
          </p>
        </div>
      </section>

      <AgendaSectionV3 showSixBlocks={true} />

      <section className="relative py-[88px] bg-[#08121E] border-t-2 border-[#0069B8] max-sm:py-[64px]">
        <div className={styles.container}>
          <div className={styles.brochureCta}>
            <div>
              <h3>Request the 7-Tier Commercial Partnership Prospectus.</h3>
              <p>
                Explore 15-minute plenary speaking slots, 75-minute clinical workshops, 60-minute CXO boardrooms (20 delegates), standardised 9 sqm &amp; 4 sqm built stands, and 2 sqm Start Up pods.
              </p>
            </div>
            <a
              className="bb-btn-primary group shrink-0"
              href={`${V3_BASE}/sponsorship-enquiry/`}
              style={{ minWidth: "220px" }}
            >
              Enquire about sponsorship
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="bb-btn-arrow w-4 h-4 object-contain"
                aria-hidden="true"
                style={{ marginLeft: "8px" }}
              >
                <path d="M3.33334 8H12.6667" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8.66666 4L12.6667 8L8.66666 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <FinalCtaBlockV3 />
    </>
  );
}

export function AgendaCallForSpeakersV3() {
  return (
    <>
      <section
        className={styles.hero}
        id="agenda-speakers-hero"
        style={{
          background:
            "linear-gradient(90deg, rgba(8, 18, 30, 0.92) 0%, rgba(8, 18, 30, 0.62) 46%, rgba(8, 18, 30, 0.14) 100%), url(/banking/images/agenda/Call-speakers-bg.webp) center top / cover no-repeat",
          alignItems: "center",
          minHeight: "680px",
          marginTop: "0",
          display: "flex",
        }}
      >
        <div className={styles.container}>
          <h1 className="font-heading text-white font-bold tracking-[-0.02em] leading-[1.08] text-[clamp(36px,4.8vw,60px)] max-w-[940px]">
            If you have deployed AI into regulated banking or insurance operations,{" "}
            <GradientText tone="teal">we want you on stage</GradientText>
          </h1>
        </div>
      </section>
      <SpeakerCallToStageV3 />
      <SpeakersSectionV3 />
    </>
  );
}

export function AgendaPageV3() {
  return (
    <>
      <main className={`${styles.page} page-agenda`}>
        <HeaderV3 activeItem="Agenda" subNavItems={agendaSubNavV3} activeSubNavItem="Overview" />
        <AgendaOverviewV3 />
      </main>
      <FooterV3 />
    </>
  );
}
