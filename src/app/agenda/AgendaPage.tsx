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

const subNav = ["Overview", "The Vision", "Agenda", "Themes", "Call for Speakers"];

const formats = [
  {
    title: "Plenary Keynotes & Live Buyer Evidence",
    text: "Frontline case studies and fireside briefings led by commercial bank CXOs and enterprise architects. Moving past theoretical hype to examine real-world core integration hurdles, pilot failure post-mortems, and verified balance-sheet performance.",
    image: "/banking/images/agenda/dubai/overview.png",
  },
  {
    title: "Interactive Use-Case Breakout Clinics",
    text: "Collaborative, hands-on workshop tracks designed to tackle acute operational bottlenecks. Delegates deep-dive into practical deployment frameworks for real-time fraud and AML defense, sub-second payment screening, and autonomous front-to-back office agentic workflows.",
    image: "/banking/images/Attend/AI-decision-maker.webp",
  },
  {
    title: "Closed-Door Boardrooms & Peer Roundtables",
    text: "Private, off-the-record discussions held under the Chatham House Rule alongside facilitated executive roundtables. Engineered for senior decision-makers to benchmark technology stacks, navigate regulatory oversight, and align vendor procurement roadmaps.",
    image: "/banking/images/networking/meet-leaders.webp",
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
          <h1>From use case to <br /><GradientText>operating outcome.</GradientText></h1>
          <p className={styles.heroPara}>
            Departing entirely from conference speechifying, the forum is built to systematically driving banking delegates from boardroom compliance expectations down to concrete procurement specifications.
          </p>
        </div>
      </section>

      <section className={styles.aboutSection}>
        <div className={styles.split}>
          <div>
            <h2 className="!mb-6">Controlled AI deployment for <GradientText>regulated financial operations.</GradientText></h2>
            <p className="mt-6 mb-4">
              World AI Show | Banking and Financial Services will convene 300+ pre-qualified C-suite banking, insurance, asset management, and payment leaders (minimum 70% buy-side enterprise ratio).
            </p>
            <p className="m-0">
              Every block in the programme is engineered to move senior financial services buyers from board-level regulatory scrutiny under onshore Central Bank of the UAE (CBUAE) and offshore DIFC Dubai Financial Services Authority (DFSA) frameworks down to live architecture validation and 2027 procurement decisions.
            </p>
          </div>
          <img src="/banking/images/agenda/About.webp" alt="Banking executives networking at World AI Show Dubai" loading="lazy" />
        </div>
      </section>

      <section className={styles.formatsSection}>
        <div className={styles.container}>
          <h2>A <GradientText>Six-Part Block Methodology.</GradientText></h2>
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
          <h2>Be in the room where <GradientText>2027s banking AI architecture gets finalised.</GradientText></h2>
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

const visionPoints = [
  {
    title: "Navigating Onshore CBUAE and Offshore DFSA Frameworks",
    text: "Production banking AI in the UAE requires clear separation between federal onshore oversight under the Central Bank of the UAE (CBUAE) and offshore free-zone supervision under the Dubai Financial Services Authority (DFSA). The forum delivers actionable blueprints for data residency, model explainability, and audit-ready governance across both regimes.",
    bullets: [] as string[],
  },
  {
    title: "Production Realities Over Sandbox Hype",
    text: "With regional banking AI projected to exceed USD 3.5B by 2027, leadership teams are focusing on audited, high-impact implementations:",
    bullets: [
      "+38% YoY APP scam surge driving real-time AI detection",
      "90% False Alerts Legacy AML overhead consuming compliance budgets",
    ],
  },
  {
    title: "Day 1 of the March Executive Cluster",
    text: "On 24 March 2027, the Banking edition convenes 300+ C-suite leaders, followed on 25 March by AI in Healthcare & Life Sciences. Both forums share world-class venue infrastructure while preserving dedicated agendas, distinct P&Ls, and curated buy-side audiences.",
    bullets: [] as string[],
  },
];

export function AgendaVision() {
  return (
    <>
      <section
        className={`${styles.hero} pt-[200px]`}
        id="the-2030-vision-hero"
        style={{
          background: "linear-gradient(90deg, rgba(2, 7, 19, 0.9) 0%, rgba(2, 7, 19, 0.56) 42%, rgba(2, 7, 19, 0.1) 100%), url(/banking/images/Attend/Association-banner.webp) right center / cover no-repeat"
        }}
      >
        <div className={styles.container}>
          <h1>Execution Under Regulation: <br /><GradientText>UAE &amp; GCC Banking AI Mandate.</GradientText></h1>
        </div>
      </section>

      <section className={styles.visionSection} id="the-2030-vision">
        <div className={styles.container}>
          <div className="grid grid-cols-[0.95fr_1.05fr] gap-12 items-stretch max-[980px]:grid-cols-1 mb-10">
            <div className="group relative rounded-[22px] overflow-hidden border border-[#20d5ff]/30 bg-[#040d1d] shadow-[0_0_42px_rgba(0,206,255,0.14)] min-h-[420px]">
              <img
                src="/banking/images/agenda/dubai/the-vision.jpg"
                alt="UAE and GCC Banking AI Mandate"
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                loading="lazy"
              />
            </div>

            <div className="flex flex-col gap-4 justify-between">
              {visionPoints.map((pt, idx) => (
                <article
                  key={pt.title}
                  className="group text-left p-6 rounded-[18px] border border-white/12 bg-[#040d1d]/75 transition-all duration-300 cursor-default hover:border-[#C0F43C]/65 hover:bg-gradient-to-br hover:from-[#C0F43C]/10 hover:via-[#06152d] hover:to-[#040d1d] hover:shadow-[0_12px_32px_rgba(192,244,60,0.12)] hover:-translate-y-0.5"
                >
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <h3 className="m-0 font-extrabold text-[19px] leading-snug text-white transition-colors duration-300 group-hover:text-[#C0F43C]">
                      {pt.title}
                    </h3>
                    <span className="font-mono text-xs px-2.5 py-1 rounded-full bg-white/10 text-white/60 transition-all duration-300 group-hover:bg-[#C0F43C] group-hover:text-[#06111F] group-hover:font-bold">
                      0{idx + 1}
                    </span>
                  </div>
                  <p className="m-0 text-white/75 text-[15px] leading-relaxed">
                    {pt.text}
                  </p>
                  {pt.bullets.length > 0 && (
                    <ul className="mt-3 mb-0 pl-0 list-none space-y-1.5">
                      {pt.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-white/85 text-[14.5px] font-medium">
                          <span className="text-[#C0F43C] font-bold">•</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              ))}
            </div>
          </div>

          {/* Full-width Quote Box (Page 26 top) */}
          <blockquote className="w-full m-0 p-9 md:px-12 rounded-[22px] border-[1.5px] border-[#18d4ff]/45 bg-gradient-to-br from-[#040b1b]/95 to-[#0a1834]/98 shadow-[0_0_35px_rgba(24,212,255,0.18),inset_0_0_25px_rgba(24,212,255,0.05)] text-[#f7f9ff] text-[clamp(20px,2.4vw,25px)] font-[750] leading-[1.45] text-center">
            &ldquo;78% of regional banks are prioritising real-time AI fraud defence as instant payment volumes and synthetic identity vectors accelerate across the GCC.&rdquo;
            <cite className="block mt-4 text-[11px] font-mono font-bold tracking-[2px] uppercase text-white/50 not-italic">
              &mdash; SOURCE: REGIONAL BANKING FRAUD SURVEY / MENA FINTECH ASSOCIATION
            </cite>
          </blockquote>
        </div>
      </section>

      <section className={styles.gatewaySection}>
        <div className={styles.container}>
          <h2 className="mb-12">
            The Four Regulatory and Competitive Pressures{" "}
            <GradientText>Shaping Technology Investment Across Middle East Financial Institutions.</GradientText>
          </h2>
          <div className="grid grid-cols-2 gap-6 max-sm:grid-cols-1">
            {regionalCatalysts.map(([title, text, icon], index) => (
              <IconCard icon={icon} index={index} key={title} text={text} title={title} />
            ))}
          </div>
        </div>
      </section>

      <AgendaSection
        title={<>Focused on Four Core <GradientText>Operational Mandates</GradientText></>}
        subtitle=""
        description=""
      />
    </>
  );
}

export function AgendaLiveTimeline() {
  return (
    <>
      <section className={`${styles.hero} pt-[200px]`} id="agenda-timeline-hero">
        <div className={styles.container}>
          <h1><GradientText>Event Schedule</GradientText></h1>
        </div>
      </section>
      <AgendaTabs />
      <section className={styles.finalCta} id="cta">
        <div className={styles.ctaBox}>
          <h2>Be in the room where <GradientText>2027s banking AI architecture gets finalised.</GradientText></h2>
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
          background: "linear-gradient(90deg, rgba(2, 7, 19, 0.88) 0%, rgba(2, 7, 19, 0.48) 42%, rgba(2, 7, 19, 0.05) 100%), url(/banking/images/theme/Theme-02.webp) right center / cover no-repeat"
        }}
      >
        <div className={styles.container}>
          <h1>Four operational mandates. <br /><GradientText>One day.</GradientText></h1>
          <p className={styles.heroPara}>
            Centered around Core banking mainframe modernisation, data fabric architectures, ethical AI, and workforce reskilling.
          </p>
        </div>
      </section>
      <AgendaSection
        title={<>Focused on Four Core <GradientText>Operational Mandates</GradientText></>}
        subtitle=""
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
          <h2>Be in the room where <GradientText>2027s banking AI architecture gets finalised.</GradientText></h2>
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
            A Look Back at{" "}
            <GradientText>Past World AI Show Speakers</GradientText>
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
