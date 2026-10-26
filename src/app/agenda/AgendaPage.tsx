"use client";

import type { CSSProperties, PointerEvent, ReactNode } from "react";
import { useMemo, useState } from "react";

import { FooterSection } from "../components/sections/FooterSection";
import { Header } from "../components/sections/Header";

import styles from "./AgendaPage.module.css";
import "./agenda.css";
import { AgendaSection, sixPartBlocks } from "../components/sections/AgendaSection";
import { SpeakersSection } from "../components/sections/SpeakersSection";
import { SpeakerCallToStage } from "../speakers/SpeakerCallToStage";

const subNav = ["Overview", "The 2030 Vision", "Agenda", "Themes", "Call for Speakers"];

const formats = [
  {
    title: "20-Minute Plenary Keynotes & Buyer Evidence",
    text: "Commercial bank CIOs, CTOs, CROs, and Speaking Sponsors delivering 20-minute standalone keynotes and fireside case studies examining real-world architecture hurdles, pilot post-mortems, and verified balance-sheet ROI.",
    image: "/banking/images/agenda/keynotes.webp",
  },
  {
    title: "75-Minute Parallel Breakout Clinics",
    text: "Two interactive 75-minute workshop clinics (60–80 delegates each): Clinic A (Real-Time Fraud, AML & Financial Crime) and Clinic B (Agentic Banking & Core Modernisation).",
    image: "/banking/images/agenda/panel-discussion.webp",
  },
  {
    title: "CXO Closed-Door Boardrooms & Outcome Roundtables",
    text: "Invitation-only 60-minute CXO Closed-Door Boardrooms for 15 wishlist banking leaders under Chatham House Rule, followed by Block 6 Outcome Roundtables capturing 2027 procurement specifications.",
    image: "/banking/images/agenda/Fireside.webp",
  },
];

const regionalCatalysts = [
  [
    "CBUAE Regulatory Modernisation (Onshore)",
    "Guidance on cloud computing, outsourced technology risk, and consumer protection against digital fraud across federal onshore UAE banking operations.",
    "/banking/images/agenda/Policy.webp",
  ],
  [
    "DIFC AI & Innovation Mandates (Offshore Free-Zone)",
    "Dubai Financial Services Authority (DFSA) regulatory clarity on algorithmic accountability, data privacy, and ethical AI adoption within the DIFC free zone.",
    "/banking/images/agenda/AI-infra.webp",
  ],
  [
    "Instant Payment & Open Finance Expansion",
    "Sub-second transaction volumes (including the Aani instant payment platform) necessitating automated real-time fraud scoring and behavioural biometrics.",
    "/banking/images/agenda/investment.webp",
  ],
  [
    "Digital-First Banking Competition",
    "Tier-1 institutions (Emirates NBD, FAB, ADCB, Mashreq) competing with agile digital challengers (Wio, Zand) on hyper-personalised CX and autonomous servicing.",
    "/banking/images/agenda/Global.webp",
  ],
];

type BankingAgendaSession = {
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

const bankingSchedule: BankingAgendaSession[] = [
  {
    id: 101,
    dayKey: "2027-03-24",
    dayLabel: "Wednesday 24 March 2027: Execution Under Regulation",
    startTime: "08:00",
    endTime: "09:00",
    title: "Registration, Welcome Coffee & Concourse Networking",
    typeTitle: "Networking & Concourse",
    location: "Registration Concourse & Technology Showcase",
    description:
      "Executive badge collection, morning refreshments, and initial exploration of the technology demonstration concourse.",
    trackId: "main",
    trackTitle: "Main Plenary Stage",
  },
  {
    id: 102,
    dayKey: "2027-03-24",
    dayLabel: "Wednesday 24 March 2027: Execution Under Regulation",
    startTime: "09:00",
    endTime: "09:45",
    title: "Block 1: Sector Priority Brief",
    typeTitle: "Block 1 · Executive Briefing",
    location: "Main Plenary Stage",
    description:
      "Opening executive briefing by Trescon and lead knowledge partners outlining macroeconomic banking pressures, UAE regulatory expectations, and ranked operational ROI priorities.",
    trackId: "main",
    trackTitle: "Main Plenary Stage",
  },
  {
    id: 103,
    dayKey: "2027-03-24",
    dayLabel: "Wednesday 24 March 2027: Execution Under Regulation",
    startTime: "09:45",
    endTime: "11:00",
    title: "Block 2: Buyer Evidence (Plenary)",
    typeTitle: "Block 2 · 20-Min Keynotes & Fireside",
    location: "Main Plenary Stage",
    description:
      "Two unvarnished commercial bank case studies (20-minute keynotes + fireside) examining what worked, what failed in pilot, and transferable architecture lessons.",
    trackId: "main",
    trackTitle: "Main Plenary Stage",
  },
  {
    id: 104,
    dayKey: "2027-03-24",
    dayLabel: "Wednesday 24 March 2027: Execution Under Regulation",
    startTime: "11:00",
    endTime: "11:45",
    title: "Networking Break & Concourse Showcase",
    typeTitle: "1-on-1 Matchmaking & Concourse",
    location: "Technology Demonstration Concourse & Bilateral Lounge",
    description:
      "Curated 1-on-1 bilateral buyer-sponsor introductions and live technical demonstrations at concourse booths (6 sqm, 9 sqm, and 12 sqm footprints).",
    trackId: "main",
    trackTitle: "Main Plenary Stage",
  },
  {
    id: 105,
    dayKey: "2027-03-24",
    dayLabel: "Wednesday 24 March 2027: Execution Under Regulation",
    startTime: "11:45",
    endTime: "12:45",
    title: "Block 3: Risk, Trust & Governance Plenary",
    typeTitle: "Block 3 · Regulatory & Risk Panel",
    location: "Main Plenary Stage",
    description:
      "Specialised regulatory and compliance panel featuring CROs, CCOs, and legal authorities detailing algorithmic auditability, bias testing, and zero-trust security across onshore CBUAE and DIFC DFSA frameworks.",
    trackId: "main",
    trackTitle: "Main Plenary Stage",
  },
  {
    id: 106,
    dayKey: "2027-03-24",
    dayLabel: "Wednesday 24 March 2027: Execution Under Regulation",
    startTime: "12:45",
    endTime: "14:00",
    title: "Executive Networking Luncheon & VIP Boardroom",
    typeTitle: "Luncheon & CXO Closed-Door Boardroom",
    location: "Executive Dining Hall & Private CXO Boardroom Suite",
    description:
      "Hosted dining experience alongside an invitation-only 60-minute CXO Closed-Door Boardroom for 15 wishlist banking leaders (featuring a 5-minute sponsor opening address under Chatham House Rule).",
    trackId: "boardroom",
    trackTitle: "CXO Closed-Door Boardrooms",
  },
  {
    id: 107,
    dayKey: "2027-03-24",
    dayLabel: "Wednesday 24 March 2027: Execution Under Regulation",
    startTime: "14:00",
    endTime: "15:15",
    title: "Block 4 · Clinic A: Real-Time Fraud, AML & Financial Crime (75 Minutes)",
    typeTitle: "Block 4 · 75-Min Workshop Clinic",
    location: "Breakout Clinic Suite A (60–80 Delegates)",
    description:
      "Interactive 75-minute workshop clinic (60–80 delegates). Tackling Authorised Push Payment (APP) scams, synthetic identity detection, mule account tracking, and cutting AML false positives by 50%.",
    trackId: "clinics",
    trackTitle: "Parallel Breakout Clinics (75 Min)",
  },
  {
    id: 108,
    dayKey: "2027-03-24",
    dayLabel: "Wednesday 24 March 2027: Execution Under Regulation",
    startTime: "14:00",
    endTime: "15:15",
    title: "Block 4 · Clinic B: Agentic Banking & Core Modernisation (75 Minutes)",
    typeTitle: "Block 4 · 75-Min Workshop Clinic",
    location: "Breakout Clinic Suite B (60–80 Delegates)",
    description:
      "Interactive 75-minute workshop clinic (60–80 delegates). Deploying autonomous servicing agents with strict human-in-the-loop escalation paths, intelligent document processing (IDP) for trade finance, and legacy API integration.",
    trackId: "clinics",
    trackTitle: "Parallel Breakout Clinics (75 Min)",
  },
  {
    id: 109,
    dayKey: "2027-03-24",
    dayLabel: "Wednesday 24 March 2027: Execution Under Regulation",
    startTime: "15:15",
    endTime: "16:00",
    title: "Block 5: Applied Case Studies (Plenary)",
    typeTitle: "Block 5 · Applied Case Studies",
    location: "Main Plenary Stage",
    description:
      "Rapid-fire core modernisation demonstrations and algorithmic credit underwriting deployments across retail and corporate banking.",
    trackId: "main",
    trackTitle: "Main Plenary Stage",
  },
  {
    id: 110,
    dayKey: "2027-03-24",
    dayLabel: "Wednesday 24 March 2027: Execution Under Regulation",
    startTime: "16:00",
    endTime: "17:00",
    title: "Block 6: Outcome Roundtables",
    typeTitle: "Block 6 · Outcome Roundtables",
    location: "Executive Roundtable Arena",
    description:
      "Structured peer-to-peer table discussions capturing recorded procurement criteria, vendor evaluation checklists, and 2027 implementation roadmaps.",
    trackId: "main",
    trackTitle: "Main Plenary Stage",
  },
  {
    id: 111,
    dayKey: "2027-03-24",
    dayLabel: "Wednesday 24 March 2027: Execution Under Regulation",
    startTime: "17:00",
    endTime: "18:30",
    title: "Closing Executive Reception",
    typeTitle: "Executive Reception",
    location: "VIP Networking Terrace · DIFC District",
    description:
      "Informal drinks and peer synthesis concluding Day 1 of the March Dubai Cluster.",
    trackId: "main",
    trackTitle: "Main Plenary Stage",
  },
];

function GradientText({ children }: { children: ReactNode }) {
  return <span className={styles.gradientText}>{children}</span>;
}

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
      <path
        d="M3.33334 8H12.6667"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.66666 4L12.6667 8L8.66666 12"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
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
      <span className={styles.iconBadge}><img src={icon} alt="" loading="lazy" /></span>
      <span className={styles.cardIndex}>{String(index + 1).padStart(2, "0")}</span>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

function AgendaTabs() {
  const dayTabs = [
    { key: "2027-03-24", label: "Wednesday 24 March 2027: Execution Under Regulation" },
  ];

  const [activeDay, setActiveDay] = useState("2027-03-24");
  const [activeTrack, setActiveTrack] = useState("all");
  const [activeSessionType, setActiveSessionType] = useState("");
  const [query, setQuery] = useState("");

  const sessionTypes = useMemo(() => {
    return Array.from(new Set(bankingSchedule.map((s) => s.typeTitle)));
  }, []);

  const trackTabs = useMemo(() => {
    const sessionsForDay = bankingSchedule.filter((session) => session.dayKey === activeDay);
    return Array.from(
      new Map(sessionsForDay.map((session) => [session.trackId, session.trackTitle])).entries()
    ).map(([id, title]) => ({ id, title }));
  }, [activeDay]);

  const filteredItems = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return bankingSchedule.filter((session) => {
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
          <h2>1-Day Master Schedule: <GradientText>Execution Under Regulation.</GradientText></h2>
        </div>
        <div className={styles.dayTabs} role="tablist" aria-label="Agenda days">
          {dayTabs.map((day) => (
            <button
              className={activeDay === day.key ? styles.activeDay : ""}
              key={day.key}
              onClick={() => {
                setActiveDay(day.key);
                setActiveTrack("all");
              }}
              onPointerMove={setPointerGlow}
              type="button"
            >
              <span>{day.label}</span>
              <strong>Day 1 · 24 March 2027 · DIFC District, Dubai</strong>
              <small>Day 1 of the March Dubai Cluster · 08:00 – 18:30 GST</small>
            </button>
          ))}
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
              placeholder="Search blocks, clinics, fraud, AML, agentic..."
              type="search"
              value={query}
            />
          </label>

          <label>
            <span>Session Type</span>
            <select onChange={(event) => setActiveSessionType(event.target.value)} value={activeSessionType}>
              <option value="">All Blocks &amp; Formats</option>
              {sessionTypes.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </label>

          {activeTrack !== "all" || activeSessionType || query ? (
            <button onClick={clearFilters} type="button">Clear</button>
          ) : null}
        </div>

        <div className={styles.timeline}>
          <div className={styles.timelineHead}>
            <span>Wednesday 24 March 2027: Execution Under Regulation</span>
            <span>DIFC District, Dubai, UAE · 1-Day Executive Decision Forum</span>
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
              <time>{session.startTime}<span>{session.endTime}</span></time>
              <span className={styles.sessionType}>{session.typeTitle}</span>
              <div>
                <h3>{session.title}</h3>
                {session.description ? <p>{session.description}</p> : null}
                {session.location ? <small className={styles.locationText}>{session.location}</small> : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AgendaOverview() {
  return (
    <>
      <section className={`${styles.hero} pt-[200px]`} id="overview">
        <div className={styles.container}>
          <span className="inline-flex items-center mb-5 px-3.5 py-1.5 border border-[#18d4ff]/30 rounded-full text-[#18d4ff] font-mono text-[12px] uppercase tracking-[2px] bg-[#18d4ff]/5">
            Curriculum Overview
          </span>
          <h1>From use case to <br /><GradientText>operating outcome.</GradientText></h1>
          <p className={styles.heroPara}>
            Departing entirely from conference speechifying, the forum is built on Trescon&apos;s six-part block methodology, systematically driving 300+ banking delegates from boardroom compliance expectations down to concrete procurement specifications.
          </p>
        </div>
      </section>

      <section className={styles.aboutSection}>
        <div className={styles.split}>
          <div>
            <h2>Controlled AI deployment for <GradientText>regulated financial operations.</GradientText></h2>
            <p>
              World AI Show | AI in Banking and Financial Services | Dubai 2027 is a 1-Day Executive Decision Forum taking place on 24 March 2027 in DIFC District, Dubai, UAE. Positioned as Day 1 of the March Dubai Cluster, it convenes 300+ pre-qualified C-suite banking, insurance, asset management, and payment leaders (minimum 70% buy-side enterprise ratio).
            </p>
            <p>
              Every block in the 1-day programme is engineered to move senior financial services buyers from board-level regulatory scrutiny under onshore Central Bank of the UAE (CBUAE) and offshore DIFC Dubai Financial Services Authority (DFSA) frameworks down to live architecture validation and 2027 procurement decisions.
            </p>
          </div>
          <img src="/banking/images/agenda/About.webp" alt="Banking executives networking at World AI Show Dubai" loading="lazy" />
        </div>
      </section>

      <section className={styles.formatsSection}>
        <div className={styles.container}>
          <h2>Trescon <GradientText>Six-Part Block Methodology.</GradientText></h2>
          <p>Engineered to drive banking buyers from board priorities down to concrete procurement across one intensive day.</p>

          <div className="grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1 mb-14 text-left">
            {sixPartBlocks.map((block) => (
              <div
                key={block.num}
                className="p-6 rounded-[18px] border border-[#18d4ff]/30 bg-[#050d20]/85 shadow-[0_18px_45px_rgba(0,0,0,0.35)]"
              >
                <span className="inline-block font-mono text-[11px] uppercase tracking-[1.8px] text-[#C0F43C] font-bold mb-2">
                  {block.num}
                </span>
                <h3 className="!m-0 !mb-2 !text-white !text-[19px] font-extrabold">
                  {block.title}
                </h3>
                <p className="!m-0 !text-white/75 !text-[14.5px] leading-relaxed">
                  {block.desc}
                </p>
              </div>
            ))}
          </div>

          <div className={styles.formatGrid}>
            {formats.map((item) => (
              <article className={styles.formatCard} key={item.title}>
                <img src={item.image} alt="" loading="lazy" />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.finalCta} id="cta">
        <div className={styles.ctaBox}>
          <h2>Be in the room where <GradientText>2027 banking AI architecture gets finalised.</GradientText></h2>
          <p>Apply for a complimentary Delegate Pass (strictly by invitation and qualification), enquire about commercial sponsorship, or apply to join the Dubai banking faculty.</p>
          <div className={styles.actions}>
            <a className={`${styles.button} ${styles.solid} group`} href="/banking/attend/delegate/">Apply for a Delegate Pass <ArrowSVG /></a>
            <a className={`${styles.button} ${styles.outline} group`} href="/banking/sponsorship-enquiry/">Enquire about sponsorship <ArrowSVG /></a>
          </div>
          <dl>
            <div><dt>Date</dt><dd>24 March 2027 · 1-Day Forum</dd></div>
            <div><dt>Venue</dt><dd>DIFC District, Dubai, UAE</dd></div>
            <div><dt>Cluster</dt><dd>Day 1 · March Dubai Cluster</dd></div>
          </dl>
        </div>
      </section>
    </>
  );
}

export function AgendaVision() {
  return (
    <>
      <section
        className={`${styles.hero} pt-[200px]`}
        id="the-2030-vision-hero"
        style={{
          background: "linear-gradient(90deg, rgba(2, 7, 19, 0.88) 0%, rgba(2, 7, 19, 0.52) 42%, rgba(2, 7, 19, 0.08) 100%), url(/banking/images/agenda/Vision-2030-bg.webp) right center / cover no-repeat"
        }}
      >
        <div className={styles.container}>
          <span className="inline-flex items-center mb-5 px-3.5 py-1.5 border border-[#18d4ff]/30 rounded-full text-[#18d4ff] font-mono text-[12px] uppercase tracking-[2px] bg-[#18d4ff]/5">
            REGULATORY FRAMEWORK &amp; REGIONAL CATALYSTS
          </span>
          <h1>Execution Under Regulation: <br /><GradientText>UAE &amp; GCC Banking AI Mandate.</GradientText></h1>
        </div>
      </section>

      <section className={styles.visionSection} id="the-2030-vision">
        <div className={styles.split}>
          <div className={styles.leftCol}>
            <img src="/banking/images/agenda/driving-malaysia-stage.webp" alt="Executive panel discussion at World AI Show Dubai" loading="lazy" />
          </div>
          <div className={styles.visionCopy}>
            <p>
              <strong>Onshore CBUAE vs Offshore DIFC DFSA Jurisdiction:</strong> Deploying production AI in the UAE requires rigorous architectural alignment across two distinct regulatory regimes: federal onshore banking oversight under the Central Bank of the UAE (CBUAE) and offshore financial free-zone supervision under the Dubai Financial Services Authority (DFSA) within the DIFC.
            </p>
            <p>
              <strong>Balance-Sheet Scrutiny Over Sandbox Hype:</strong> With the Middle East banking AI market projected to surpass USD 3.5B+ by 2027 (Source: PwC Middle East Financial Services AI Report) and regional APP scams surging +38% YoY (Source: Regional Banking Fraud Survey / MENA FinTech Association), institutions are prioritising explainable, auditable AI that reduces legacy 90% AML false-positive alert overhead (Source: PwC / Thomson Reuters Regulatory Intelligence).
            </p>
            <p>
              <strong>Day 1 of the March Dubai Cluster:</strong> World AI Show | AI in Banking and Financial Services | Dubai 2027 leads the March Dubai Cluster on 24 March 2027, followed on 25 March 2027 by World AI Show | AI in Healthcare &amp; Life Sciences, sharing world-class DIFC District venue infrastructure while maintaining dedicated sector governance.
            </p>
            <blockquote>
              &ldquo;78% of regional banks are prioritising real-time AI fraud defence as instant payment volumes and synthetic identity vectors accelerate across the GCC.&rdquo;
              <cite className={styles.blockquoteCite}>&mdash; SOURCE: REGIONAL BANKING FRAUD SURVEY / MENA FINTECH ASSOCIATION</cite>
            </blockquote>
          </div>
        </div>
      </section>

      <section className={styles.gatewaySection}>
        <div className={styles.container}>
          <h2>Key Regional Catalysts Driving <GradientText>2027 Banking Procurement.</GradientText></h2>
          <p>The four regulatory and competitive pressures shaping technology investment across Middle East financial institutions.</p>
          <div className={styles.cardGrid}>
            {regionalCatalysts.map(([title, text, icon], index) => (
              <IconCard icon={icon} index={index} key={title} text={text} title={title} />
            ))}
          </div>
        </div>
      </section>

      <AgendaSection
        title={<>Four operational mandates. <GradientText>One day.</GradientText></>}
        subtitle="Specialised Curriculum"
        description="Universal Themes: Core banking mainframe modernisation, data fabric architectures, ethical AI, and workforce reskilling."
      />
    </>
  );
}

export function AgendaLiveTimeline() {
  return (
    <>
      <section className={`${styles.hero} pt-[200px]`} id="agenda-timeline-hero">
        <div className={styles.container}>
          <span className="inline-flex items-center mb-5 px-3.5 py-1.5 border border-[#18d4ff]/30 rounded-full text-[#18d4ff] font-mono text-[12px] uppercase tracking-[2px] bg-[#18d4ff]/5">
            1-Day Master Schedule · Wednesday 24 March 2027
          </span>
          <h1><GradientText>DUBAI 2027 MASTER SCHEDULE</GradientText></h1>
          <p className={styles.heroPara}>
            Wednesday 24 March 2027: Execution Under Regulation · DIFC District, Dubai, UAE · Day 1 of the March Dubai Cluster.
          </p>
        </div>
      </section>
      <AgendaTabs />
      <section className={styles.finalCta} id="cta">
        <div className={styles.ctaBox}>
          <h2>Be in the room where <GradientText>2027 banking AI architecture gets finalised.</GradientText></h2>
          <p>Apply for a complimentary Delegate Pass (strictly by invitation and qualification), enquire about commercial sponsorship, or apply to join the Dubai banking faculty.</p>
          <div className={styles.actions}>
            <a className={`${styles.button} ${styles.solid} group`} href="/banking/sponsorship-enquiry/">Enquire about sponsorship <ArrowSVG /></a>
            <a className={`${styles.button} ${styles.outline} group`} href="/banking/speaker-enquiry/">Apply to speak <ArrowSVG /></a>
          </div>
          <dl>
            <div><dt>Date</dt><dd>24 March 2027 · 1-Day Forum</dd></div>
            <div><dt>Venue</dt><dd>DIFC District, Dubai, UAE</dd></div>
            <div><dt>Cluster</dt><dd>Day 1 · March Dubai Cluster</dd></div>
          </dl>
        </div>
      </section>
    </>
  );
}

export function AgendaThemes() {
  return (
    <>
      <section
        className={`${styles.hero} pt-[200px]`}
        id="agenda-themes-hero"
        style={{
          background: "linear-gradient(90deg, rgba(2, 7, 19, 0.88) 0%, rgba(2, 7, 19, 0.48) 42%, rgba(2, 7, 19, 0.05) 100%), url(/banking/images/agenda/Themes-bg.webp) right center / cover no-repeat"
        }}
      >
        <div className={styles.container}>
          <span className="inline-flex items-center mb-5 px-3.5 py-1.5 border border-[#18d4ff]/30 rounded-full text-[#18d4ff] font-mono text-[12px] uppercase tracking-[2px] bg-[#18d4ff]/5">
            The 4 Core Sector Content Pillars
          </span>
          <h1>Four operational mandates. <br /><GradientText>One day.</GradientText></h1>
          <p className={styles.heroPara}>
            Universal Themes: Core banking mainframe modernisation, data fabric architectures, ethical AI, and workforce reskilling.
          </p>
        </div>
      </section>
      <AgendaSection
        title={<>Four operational mandates. <GradientText>One day.</GradientText></>}
        subtitle="Specialised Curriculum"
        description="Click any content pillar below to inspect its full operational scope, clinical format, and technical discussion points."
      />
      <section className="relative pb-[104px] bg-[#051224]/70 max-sm:pb-[72px]">
        <div className={styles.container}>
          <div className={styles.brochureCta}>
            <div>
              <h3>Request the Dubai 2027 Commercial Partnership Prospectus.</h3>
              <p>Explore 20-minute plenary keynotes, exclusive leadership of 75-minute workshop clinics, standardised 6 sqm, 9 sqm, and 12 sqm concourse booths, and private 15-buyer CXO closed-door boardrooms.</p>
            </div>
            <a
              className={`${styles.button} ${styles.solid} group`}
              href="/banking/sponsorship-enquiry/"
              style={{ minWidth: "220px" }}
            >
              Enquire about sponsorship
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 object-contain transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" style={{ marginLeft: "8px" }}>
                <path d="M3.33334 8H12.6667" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8.66666 4L12.6667 8L8.66666 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </section>
      <section className={styles.finalCta} id="cta">
        <div className={styles.ctaBox}>
          <h2>Be in the room where <GradientText>2027 banking AI architecture gets finalised.</GradientText></h2>
          <p>Apply for a complimentary Delegate Pass (strictly by invitation and qualification), enquire about commercial sponsorship, or apply to join the Dubai banking faculty.</p>
          <div className={styles.actions}>
            <a className={`${styles.button} ${styles.solid} group`} href="/banking/sponsorship-enquiry/">Enquire about sponsorship <ArrowSVG /></a>
            <a className={`${styles.button} ${styles.outline} group`} href="/banking/speaker-enquiry/">Apply to speak <ArrowSVG /></a>
          </div>
          <dl>
            <div><dt>Date</dt><dd>24 March 2027 · 1-Day Forum</dd></div>
            <div><dt>Venue</dt><dd>DIFC District, Dubai, UAE</dd></div>
            <div><dt>Cluster</dt><dd>Day 1 · March Dubai Cluster</dd></div>
          </dl>
        </div>
      </section>
    </>
  );
}

export function AgendaCallForSpeakers() {
  return (
    <>
      <section
        className={`${styles.hero} pt-[200px]`}
        id="agenda-speakers-hero"
        style={{
          background: "linear-gradient(90deg, rgba(2, 7, 19, 0.88) 0%, rgba(2, 7, 19, 0.52) 42%, rgba(2, 7, 19, 0.08) 100%), url(/banking/images/agenda/Call-speakers-bg.webp) right center / cover no-repeat",
          alignItems: "center",
          minHeight: "750px",
          marginTop: "0",
          display: "flex"
        }}
      >
        <div className={styles.container}>
          <span className="inline-flex items-center mb-5 px-3.5 py-1.5 border border-[#18d4ff]/30 rounded-full text-[#18d4ff] font-mono text-[12px] uppercase tracking-[2px] bg-[#18d4ff]/5">
            Call for Banking &amp; Risk Faculty
          </span>
          <h1 className="text-white font-[850] tracking-[-2px] leading-[1.06] text-[clamp(40px,5.6vw,68px)] max-w-[900px]">
            If you have deployed AI into core regulated banking,{" "}
            <GradientText>we want you on stage</GradientText>
          </h1>
        </div>
      </section>
      <SpeakerCallToStage />
      <SpeakersSection
        heading={
          <>
            Join Our Global Faculty of{" "}
            <GradientText>Banking &amp; Financial Services AI Leaders</GradientText>
          </>
        }
      />
    </>
  );
}

export function AgendaPage() {
  return (
    <>
      <main className={`${styles.page} page-agenda`}>
        <Header activeItem="Agenda" subNavItems={subNav} activeSubNavItem="Overview" />
        <AgendaOverview />
      </main>
      <FooterSection />
    </>
  );
}
