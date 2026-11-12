import type { Metadata } from "next";
import { FooterSection } from "../components/sections/FooterSection";
import { Header } from "../components/sections/Header";
import { AttendStats } from "./AttendStats";
import { GradientText } from "../components/Shared";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Attend | World AI Show | BFSI | Dubai 2027",
  description:
    "How to attend World AI Show | BFSI | Dubai 2027 (24 March 2027 · Dubai, UAE). Explore Business Pass access and Commercial Sponsorship packages.",
};

const subNav = ["Overview", "Delegate", "Sponsor", "Media Partner", "Association Partner"];

type CardItem = {
  title: string;
  text: string;
  icon?: string;
};

const valueCards: CardItem[] = [
  {
    title: "Controlled Deployment for Regulated Operations",
    text: "An exclusive decision forum for senior banking, insurance, and investment leaders advancing from conversational AI experiments to core balance-sheet operations. Engineered around live procurement timelines, model explainability, and fiduciary compliance.",
    icon: "/banking/images/Attend/enterprise-ai-in-action.svg",
  },
  {
    title: "Pre-Qualified Buy-Side Leadership",
    text: "Governed by a strict 80%+ enterprise buyer threshold. Convenes commercial bank CXOs, chief risk officers, compliance directors, and central bank regulators holding active deployment mandates and technology budgets.",
    icon: "/banking/images/Attend/region-ai-decision-makers.svg",
  },
  {
    title: "Outcome-Led Peer Evidence & Case Studies",
    text: "Replacing passive vendor presentations with unvarnished pilot post-mortems, hands-on clinical problem-solving, and closed-door roundtables designed to resolve legacy core integration and establish audit-ready model governance.",
    icon: "/banking/images/Attend/insights-drive-transformation.svg",
  },
];

const gatewayCards: CardItem[] = [
  {
    title: "Full 1-Day Plenary Access",
    text: "Full access on Wednesday 24 March 2027 to Block 1 (Sector Priority Brief), Block 2 (Buyer Evidence), Block 3 (Risk & Trust Plenary), and Block 5 (Applied Case Studies).",
    icon: "/banking/images/Attend/gateway/access-to-all-sessions.svg",
  },
  {
    title: "Choice of 75-Min Breakout Clinic",
    text: "Select either Clinic A (Real-Time Fraud, AML & Financial Crime) or Clinic B (Agentic Banking & Core Modernisation) during Block 4.",
    icon: "/banking/images/Attend/gateway/high-value-networking.svg",
  },
  {
    title: "Strict Buy-Side Qualification",
    text: "Reserved for CIOs, CTOs, CROs, CCOs, CDAIOs, Heads of Fraud, MLROs, and Regulators holding an active operational budget or deployment mandate.",
    icon: "/banking/images/Attend/gateway/speaker-materials-and-insights.svg",
  },
  {
    title: "Hosted Luncheon & Closing Reception",
    text: "Includes the Executive Networking Luncheon and the Closing Executive Reception in Dubai, UAE concluding Day 1 of the March Dubai Cluster.",
    icon: "/banking/images/Attend/gateway/networking-lunch-and-business-meetings.svg",
  },
  {
    title: "1-on-1 Bilateral Buyer-Sponsor Meetings",
    text: "AI-powered matchmaking facilitating pre-scheduled 1-on-1 bilateral introductions with vetted technology and core banking providers.",
    icon: "/banking/images/Attend/gateway/enterprise-ai-showcases.svg",
  },
  {
    title: "Technology Concourse Access",
    text: "Explore standardised 6 sqm, 9 sqm, and 12 sqm concourse booths demonstrating production-ready fraud, AML, agentic, and core platforms.",
    icon: "/banking/images/Attend/gateway/exclusive-vip-networking-experiences.svg",
  },
  {
    title: "UAE PDPL Unbundled Data Privacy",
    text: "Mandatory separate unbundled consent checkboxes under the UAE Personal Data Protection Law (PDPL) — delegate contact details are shared only where explicit consent is provided.",
    icon: "/banking/images/Attend/gateway/event-platform-access.svg",
  },
];

const sponsorBenefits: CardItem[] = [
  {
    title: "Brand Visibility at Scale",
    text: "Amplify your presence across the venue, website, event app, digital screens, campaigns and attendee communications.",
    icon: "/banking/images/Attend/sponsor/brand-visibility-at-scale.webp",
  },
  {
    title: "Qualified Lead Generation",
    text: "Connect directly with pre-qualified enterprise buyers, stakeholders, investors and AI decision-makers.",
    icon: "/banking/images/Attend/sponsor/qualified-lead-generation.webp",
  },
  {
    title: "Product Showcase Floor",
    text: "Demonstrate platforms and innovations live to enterprise leaders seeking transformative technologies.",
    icon: "/banking/images/Attend/sponsor/product-showcase-floor.webp",
  },
  {
    title: "Speaking Opportunities",
    text: "Position your organisation as a thought leader through keynotes, panels and strategic conversations.",
    icon: "/banking/images/Attend/sponsor/speaking-opportunities.webp",
  },
  {
    title: "1:1 Hosted Meetings",
    text: "Engage in curated business meetings aligned to your ideal customer profile and business objectives.",
    icon: "/banking/images/Attend/sponsor/hosted-meetings.webp",
  },
  {
    title: "Curated 1-on-1 Bilateral Meetings",
    text: "Pre-scheduled bilateral introductions with pre-qualified banking CIOs, CTOs, CROs, CCOs, and procurement heads.",
    icon: "/banking/images/Attend/partner/networking-access.webp",
  },
  {
    title: "Minimum 80% Buy-Side Guarantee",
    text: "Strict room governance ensuring at least 80% of the 300+ attendees represent buy-side financial institutions and regulators.",
    icon: "/banking/images/Attend/sponsor/exclusive-sponsorship-branding.webp",
  },
  {
    title: "UAE PDPL Consent-Governed Leads",
    text: "Compliant post-forum executive engagement reporting; delegate contact details are shared strictly where explicit consent is provided under UAE PDPL.",
    icon: "/banking/images/Attend/sponsor/post-event-lead-report.webp",
  },
];

const mediaBenefits: CardItem[] = [
  {
    title: "Press Credentials & Plenary Access",
    text: "Full media accreditation on 24 March 2027 across all plenary blocks, buyer evidence case studies, and risk panels.",
    icon: "/banking/images/Attend/media/full-event-access.webp",
  },
  {
    title: "Executive Interview Room Access",
    text: "Dedicated press workspace and private interview suites in Dubai, UAE for 1-on-1 briefings with banking CXOs and global faculty.",
    icon: "/banking/images/Attend/media/dedicated-media-facilities.webp",
  },
  {
    title: "Editorial Distribution & Amplification",
    text: "Syndicate official GCC banking AI research benchmarks, regulatory insights, and forum announcements to your financial readership.",
    icon: "/banking/images/Attend/media/speaker-interview-access.webp",
  },
  {
    title: "Official Financial Press Kit",
    text: "Receive embargoed releases, faculty biographies, and verified sector briefs ahead of Day 1 of the March Dubai Cluster.",
    icon: "/banking/images/Attend/media/official-media-kit.webp",
  },
  {
    title: "Supporting Financial Media Recognition",
    text: "Featured placement in the Institutional Regulators & Supporting Financial Media showcase across the website and event venue in Dubai, UAE.",
    icon: "/banking/images/Attend/media/amplified-media-visibility.webp",
  },
  {
    title: "March Dubai Cluster Coverage",
    text: "Editorial access across the March Dubai Cluster in Dubai, UAE (Day 1: Banking & Financial Services on 24 March; Day 2: Healthcare & Life Sciences on 25 March).",
    icon: "/banking/images/Attend/media/brand-and-media-recognition.webp",
  },
  {
    title: "Exclusive Banking Case Studies",
    text: "Capture unvarnished production post-mortems, APP fraud mitigation metrics, and core modernisation stories directly from GCC banks.",
    icon: "/banking/images/Attend/media/exclusive-story-opportunities.webp",
  },
  {
    title: "VIP Concourse & Reception Access",
    text: "Connect directly with 300+ pre-qualified C-suite banking leaders and 40+ expert faculty speakers in Dubai.",
    icon: "/banking/images/Attend/media/networking-access.webp",
  },
];

const associationBenefits: CardItem[] = [
  {
    title: "Banking Federations & FinTech Bodies",
    text: "Official institutional partnership recognition for regional banking federations, fintech associations, and risk & compliance institutes.",
    icon: "/banking/images/Attend/partner/co-branding-opportunities.webp",
  },
  {
    title: "Member Business Pass Pathway",
    text: "Priority nomination pathway for senior member CIOs, CTOs, CROs, CCOs, CDAIOs, and MLROs to apply for Business Passes.",
    icon: "/banking/images/Attend/partner/complimentary-delegate-passes.webp",
  },
  {
    title: "Co-Branded GCC Ecosystem Outreach",
    text: "Joint executive communications, regulatory briefings, and institutional visibility across World AI Show | BFSI | Dubai 2027.",
    icon: "/banking/images/Attend/partner/joint-marketing-campaigns.webp",
  },
  {
    title: "Digital & Social Amplification",
    text: "Collaborative promotion across Trescon's global executive network (48 editions across 4 continents) and official channels.",
    icon: "/banking/images/Attend/partner/social-media-amplification.webp",
  },
  {
    title: "Faculty & Roundtable Nominations",
    text: "Nominate qualified banking and regulatory practitioners with live production evidence for plenary panels and Block 6 Outcome Roundtables.",
    icon: "/banking/images/Attend/partner/speaking-opportunities.webp",
  },
  {
    title: "VIP Bilateral Networking Access",
    text: "Connect association leadership with 300+ pre-qualified C-suite banking decision-makers in Dubai, UAE.",
    icon: "/banking/images/Attend/partner/networking-access.webp",
  },
  {
    title: "Post-Forum Outcome Synthesis",
    text: "Share recorded procurement criteria and 2027 implementation roadmaps from the four sector content pillars with your members.",
    icon: "/banking/images/Attend/partner/access-to-post-event-insights.webp",
  },
  {
    title: "Global World AI Show Series Alliance",
    text: "Extend institutional collaboration across the World AI Show Industry Series and regional GCC executive forums.",
    icon: "/banking/images/Attend/partner/long-term-partnership-opportunities.webp",
  },
];

export function ArrowButton({
  children,
  href = "/banking/sponsorship-enquiry/",
  variant = "solid",
}: {
  children: ReactNode;
  href?: string;
  variant?: "solid" | "outline" | "outline-dark";
}) {
  const styles = {
    solid: "bb-btn-primary max-sm:w-full",
    outline: "bb-btn-outline-light max-sm:w-full",
    "outline-dark": "bb-btn-outline-dark max-sm:w-full",
  };

  return (
    <a className={styles[variant]} href={href}>
      {children}
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="bb-btn-arrow w-[15px] h-[15px] object-contain"
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
    </a>
  );
}

export function NumberedCard({ item, index }: { item: CardItem; index: number }) {
  return (
    <article className="group relative min-h-[235px] p-7 border border-[#0069B8]/22 border-t-4 border-t-[#0069B8] rounded-[16px] bg-white shadow-[0_12px_32px_rgba(8,18,30,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#0069B8] hover:border-t-[#F15928] hover:shadow-[0_18px_40px_rgba(8,18,30,0.11)]">
      <span className="grid place-items-center w-11 h-11 mb-7 rounded-[12px] text-white bg-[#0069B8] text-[11px] font-extrabold select-none group-hover:bg-[#F15928] transition-all duration-300">
        {item.icon ? (
          <img src={item.icon} alt="" className="w-5 h-5 object-contain brightness-0 invert transition-all duration-300" loading="lazy" />
        ) : index + 1 < 10 ? (
          `0${index + 1}`
        ) : (
          index + 1
        )}
      </span>
      <span className="absolute right-[25px] top-[30px] px-[9px] py-1 rounded-full text-[#0069B8] bg-[#0069B8]/10 text-[11px] font-extrabold tracking-[1px] select-none group-hover:text-white group-hover:bg-[#F15928] transition-all duration-300">
        {index + 1 < 10 ? `0${index + 1}` : index + 1}
      </span>
      <h3 className="font-heading m-0 mb-2.5 text-[#08121E] font-bold text-[18px] leading-tight transition-colors duration-200 group-hover:text-[#0069B8]">{item.title}</h3>
      <p className="m-0 text-[#334155] text-[15px] leading-relaxed">{item.text}</p>
    </article>
  );
}

export function BenefitGrid({ items }: { items: CardItem[] }) {
  return (
    <div className="grid grid-cols-4 gap-5 max-[980px]:grid-cols-2 max-sm:grid-cols-1">
      {items.map((item, index) => (
        <NumberedCard item={item} index={index} key={item.title} />
      ))}
    </div>
  );
}

export function SplitSection({
  id,
  eyebrow,
  title,
  text,
  button,
  buttonHref,
  imageAlt,
  imageSrc,
  reverse = false,
}: {
  id: string;
  eyebrow?: string;
  title: ReactNode;
  text: ReactNode;
  button: string;
  buttonHref?: string;
  imageAlt: string;
  imageSrc: string;
  reverse?: boolean;
}) {
  return (
    <section className="py-[92px] bg-[#F7F9FC] max-sm:py-[66px]" id={id}>
      <div className="w-[min(1172px,calc(100%-48px))] max-sm:w-[calc(100%-32px)] mx-auto">
        <div className="mb-10">
          {eyebrow && (
            <p className="m-0 mb-[14px] text-[#0069B8] text-[12px] font-bold tracking-[0.14em] uppercase select-none">
              {eyebrow}
            </p>
          )}
          <h2 className="font-heading m-0 text-[#08121E] font-bold leading-[1.1] tracking-[-0.02em] text-[clamp(30px,3.6vw,46px)] max-sm:text-[28px]">
            {title}
          </h2>
        </div>

        <div className="grid grid-cols-[1fr_minmax(360px,47%)] items-center gap-[64px] max-[980px]:grid-cols-1 max-sm:gap-[34px]">
          <div className={`flex flex-col ${reverse ? "max-[980px]:order-none order-2" : "order-none"}`}>
            <div className="m-0 mb-9 text-[#334155] text-[17.5px] leading-[1.7] max-sm:text-base">
              {text}
            </div>
            <div className="flex">
              <ArrowButton href={buttonHref || `#${id}`}>{button}</ArrowButton>
            </div>
          </div>
          <div className="relative overflow-hidden border border-[#0069B8]/25 rounded-[20px] bg-white shadow-[0_18px_40px_rgba(8,18,30,0.1)]">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-auto object-cover filter saturate-[0.98]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function AttendCTASection() {
  return (
    <section className="py-[86px] bg-[#0069B8] max-sm:py-[62px]">
      <div className="w-[min(980px,calc(100%-48px))] max-sm:w-[calc(100%-32px)] mx-auto p-[60px_48px] border border-white/15 border-t-4 border-t-[#F15928] rounded-[24px] text-center bg-white shadow-[0_22px_54px_rgba(8,18,30,0.2)] max-sm:p-[40px_22px] relative overflow-hidden">
        <div className="relative z-10">
          <span className="inline-flex items-center mb-[24px] px-4 py-1.5 border border-[#0069B8]/25 bg-[#F7F9FC] rounded-full text-[#0069B8] text-[12px] font-bold tracking-[0.12em] uppercase select-none before:content-[''] before:w-[7px] before:h-[7px] before:mr-2.5 before:rounded-full before:bg-[#F15928]">
            Dubai · 24 March 2027 · 1-Day Forum · 300+ Senior Banking Leaders
          </span>
          <h2 className="font-heading max-w-[780px] mx-auto mb-8 text-[#08121E] font-bold leading-[1.08] tracking-[-0.02em] text-[clamp(34px,4.6vw,52px)] max-sm:text-[30px]">
            Be in the room where <GradientText tone="blue">2027s banking AI architecture</GradientText> gets finalised.
          </h2>

          <div className="flex flex-wrap justify-center items-center gap-4 mt-8 mb-12 max-sm:flex-col max-sm:w-full">
            <a
              href="/banking/attend/delegate/"
              className="bb-btn-primary max-sm:w-full"
            >
              Apply for a Business Pass
              <span className="bb-btn-arrow font-bold">→</span>
            </a>
            <a
              href="/banking/sponsorship-enquiry/"
              className="bb-btn-outline-light max-sm:w-full"
            >
              Enquire about sponsorship
            </a>
          </div>

          <div className="w-full h-[1px] bg-[#0069B8]/18 my-8" />

          <div className="grid grid-cols-3 w-full gap-8 max-sm:grid-cols-1 max-sm:gap-4 text-center">
            <div className="flex flex-col items-center">
              <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#52657A] mb-2">
                Date
              </span>
              <strong className="font-heading text-[17px] font-bold text-[#08121E]">
                24 March 2027 · 1-Day Forum
              </strong>
            </div>

            <div className="flex flex-col items-center border-l border-[#0069B8]/18 max-sm:border-l-0 max-sm:border-t max-sm:pt-4 max-sm:mt-1">
              <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#52657A] mb-2">
                Location
              </span>
              <strong className="font-heading text-[17px] font-bold text-[#08121E] text-center">
                Dubai, UAE
              </strong>
            </div>

            <div className="flex flex-col items-center border-l border-[#0069B8]/18 max-sm:border-l-0 max-sm:border-t max-sm:pt-4 max-sm:mt-1">
              <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#52657A] mb-2">
                Organiser
              </span>
              <strong className="font-heading text-[17px] font-bold text-[#08121E]">
                Organised by Trescon
              </strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AttendOverviewSection() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative min-h-[560px] flex items-end px-[max(24px,calc((100vw-1172px)/2))] pt-[190px] pb-[76px] overflow-hidden bg-[#08121E] bg-cover bg-[position:center_top] bg-no-repeat border-b-2 border-[#0069B8] max-[1200px]:pt-[150px] max-sm:min-h-[460px] max-sm:px-[16px] max-sm:pt-[126px] max-sm:pb-[56px]"
        style={{
          backgroundImage:
            'linear-gradient(90deg, rgba(8, 18, 30, 0.94) 0%, rgba(8, 18, 30, 0.68) 45%, rgba(8, 18, 30, 0.18) 100%), url("/banking/images/Attend/Overview-banner.webp")',
        }}
        id="overview"
      >
        <div className="relative z-10 max-w-[860px]">
          <h1 className="font-heading m-0 text-white font-bold leading-[1.06] tracking-[-0.02em] text-[clamp(40px,5.2vw,64px)] max-sm:text-[36px]">
            Focusing on controlled AI deployment for <GradientText tone="teal">regulated financial operations.</GradientText>
          </h1>
          <div className="flex flex-wrap gap-3.5 mt-10 max-sm:flex-col max-sm:items-start max-sm:gap-4">
            <ArrowButton href="/banking/attend/delegate/" variant="solid">
              Apply for a Business Pass
            </ArrowButton>
            <ArrowButton href="/banking/sponsorship-enquiry/" variant="outline-dark">
              Enquire about sponsorship
            </ArrowButton>
          </div>
        </div>
      </section>

      {/* Controlled Execution Over Financial Hype Split Section */}
      <section className="py-[92px] bg-[#F7F9FC] max-sm:py-[66px]">
        <div className="grid grid-cols-[1.08fr_0.92fr] items-center gap-[68px] w-[min(1172px,calc(100%-48px))] max-sm:w-[calc(100%-32px)] mx-auto max-[980px]:grid-cols-1 max-sm:gap-[34px]">
          <div className="flex flex-col">
            <h2 className="font-heading m-0 text-[#08121E] font-bold leading-[1.08] tracking-[-0.02em] text-[clamp(34px,4.4vw,50px)] max-sm:text-[30px]">
              Controlled execution over <GradientText tone="blue">financial hype.</GradientText>
            </h2>
            <p className="mt-6 mb-4 text-[#334155] text-[17px] leading-[1.65]">
              World AI Show | BFSI is an executive decision forum convening commercial bank CXOs, Chief Risk Officers, Chief Compliance Officers, Chief Data &amp; AI Officers, and financial regulators moving AI from experimental sandboxes into core transactional workflows. As part of the World AI Show Industry Series, the forum addresses the architectural hurdles, model auditability standards, and fiduciary risk controls required under active oversight from the Central Bank of the UAE (CBUAE) and DFSA.
            </p>
            <p className="m-0 text-[#334155] text-[17px] leading-[1.65]">
              It is structured around four critical operational mandates every financial buying committee must resolve: real-time fraud and AML defense, agentic servicing automation, algorithmic credit underwriting, and sovereign model risk governance.
            </p>
          </div>
          <div className="relative overflow-hidden border border-[#0069B8]/25 rounded-[20px] bg-white shadow-[0_18px_40px_rgba(8,18,30,0.1)]">
            <img
              src="/banking/images/agenda/About.webp"
              alt="Controlled execution over financial hype"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-[86px] pt-[74px] bg-[#08121E] border-y-2 border-[#0069B8] text-center max-sm:py-[62px]">
        <div className="w-[min(1172px,calc(100%-48px))] max-sm:w-[calc(100%-32px)] mx-auto">
          <h2 className="font-heading max-w-[820px] mx-auto text-white font-bold leading-[1.08] tracking-[-0.02em] text-[clamp(36px,4.8vw,54px)] max-sm:text-[32px]">
            The <GradientText tone="teal">Room Composition</GradientText>
          </h2>
          <AttendStats />
        </div>
      </section>

      {/* Two-Door Pass Matrix Section */}
      <section className="py-[86px] bg-[#F7F9FC] max-sm:py-[62px]" id="pass-matrix">
        <div className="w-[min(1172px,calc(100%-48px))] max-sm:w-[calc(100%-32px)] mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading max-w-[820px] mx-auto text-[#08121E] font-bold leading-[1.08] tracking-[-0.02em] text-[clamp(34px,4.4vw,52px)]">
              How You Can be <GradientText tone="blue">Part of This Event</GradientText>
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-6 max-[980px]:grid-cols-1">
            {/* Door 1 */}
            <div className="flex flex-col justify-between p-9 rounded-[20px] border border-[#0069B8]/25 border-t-4 border-t-[#F15928] bg-white shadow-[0_12px_32px_rgba(8,18,30,0.06)]">
              <div>
                <h3 className="font-heading text-[#08121E] font-bold text-[24px] leading-[1.25] mb-3">
                  Business Pass — strictly by invitation and qualification
                </h3>
                <p className="text-[#334155] text-[15.5px] leading-[1.6] mb-5">
                  Senior banking, insurance, and financial services executives attend on a Business Pass, subject to qualification against an active operational budget or deployment mandate.
                </p>
                <ul className="space-y-2.5 mb-8 text-[#334155] text-[14.5px] list-none p-0">
                  <li className="flex items-start gap-2.5"><span className="text-[#F15928] font-bold">✓</span> Target Audience: CIOs, CTOs, CROs, CCOs, CDAIOs, Heads of Fraud, MLROs, Regulators</li>
                  <li className="flex items-start gap-2.5"><span className="text-[#F15928] font-bold">✓</span> Inclusions: Plenary access, choice of Parallel Breakout Clinic (Fraud or Agentic), Outcome Roundtables, Hosted Reception</li>
                  <li className="flex items-start gap-2.5"><span className="text-[#F15928] font-bold">✓</span> Privacy: Mandatory separate unbundled consent checkboxes under UAE Personal Data Protection Law (PDPL)</li>
                </ul>
              </div>
              <div>
                <ArrowButton href="/banking/attend/delegate/" variant="solid">
                  Apply for a Business Pass
                </ArrowButton>
              </div>
            </div>

            {/* Door 2 */}
            <div className="flex flex-col justify-between p-9 rounded-[20px] border border-[#0069B8]/25 border-t-4 border-t-[#0069B8] bg-white shadow-[0_12px_32px_rgba(8,18,30,0.06)]">
              <div>
                <h3 className="font-heading text-[#08121E] font-bold text-[24px] leading-[1.25] mb-3">
                  Business Pass — commercial access with strictly capped quota
                </h3>
                <p className="text-[#334155] text-[15.5px] leading-[1.6] mb-5">
                  Business Passes provide commercial access for technology solution providers, software vendors, and consultancies, with ticket numbers strictly capped to protect room composition.
                </p>
                <ul className="space-y-2.5 mb-8 text-[#334155] text-[14.5px] list-none p-0">
                  <li className="flex items-start gap-2.5"><span className="text-[#009EAD] font-bold">✓</span> Paid commercial access for enterprise AI, cloud, fraud/AML, and core banking vendors</li>
                  <li className="flex items-start gap-2.5"><span className="text-[#009EAD] font-bold">✓</span> Strictly capped quota to protect the minimum 80% buy-side enterprise ratio</li>
                  <li className="flex items-start gap-2.5"><span className="text-[#009EAD] font-bold">✓</span> Full 1-day access to plenary blocks, concourse showcase, and Closing Executive Reception</li>
                </ul>
              </div>
              <div className="flex flex-wrap gap-3">
                <ArrowButton href="/banking/general-enquiry/" variant="outline">
                  Purchase a Business Pass
                </ArrowButton>
                <ArrowButton href="/banking/attend/sponsor/" variant="solid">
                  Explore Sponsorship Tiers
                </ArrowButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Section */}
      <section className="py-[86px] bg-[#08121E] border-t-2 border-[#0069B8] text-center max-sm:py-[62px]">
        <div className="w-[min(1172px,calc(100%-48px))] max-sm:w-[calc(100%-32px)] mx-auto">
          <h3 className="font-heading max-w-[820px] mx-auto mt-0 mb-10 text-white font-bold leading-[1.08] tracking-[-0.02em] text-[clamp(32px,4vw,46px)] max-sm:text-[30px]">
            Why Financial Leaders are Convening <GradientText tone="teal">World AI Show</GradientText>
          </h3>
          <div className="grid grid-cols-3 gap-5 mb-9 max-[980px]:grid-cols-2 max-sm:grid-cols-1">
            {valueCards.map((card, index) => (
              <NumberedCard item={card} index={index} key={card.title} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export function AttendDelegateSection() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative min-h-[560px] flex items-end px-[max(24px,calc((100vw-1172px)/2))] pt-[190px] pb-[76px] overflow-hidden bg-[#08121E] bg-cover bg-[position:center_top] bg-no-repeat border-b-2 border-[#0069B8] max-[1200px]:pt-[150px] max-sm:min-h-[460px] max-sm:px-[16px] max-sm:pt-[126px] max-sm:pb-[56px]"
        style={{ backgroundImage: 'url("/banking/images/Attend/Delegates-banner.webp")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#08121E]/92 via-[#08121E]/62 to-[#08121E]/18 z-0 pointer-events-none" />

        <div className="relative z-10 max-w-[840px]">
          <h1 className="font-heading m-0 text-white font-bold leading-[1.06] tracking-[-0.02em] text-[clamp(40px,5.2vw,64px)] max-sm:text-[36px]">
            Built for Pre-Qualified <GradientText tone="teal">Banking &amp; Financial Services CXOs.</GradientText>
          </h1>
          <p className="max-w-[740px] mt-[24px] mb-0 text-white/88 text-[19px] leading-normal max-sm:text-base">
            Business Passes are reserved for senior banking, insurance, and financial services leaders, including CIOs, CTOs, CROs, CCOs, CDAIOs, Heads of Fraud, MLROs, and regulators subject to qualification against an active operational budget or deployment mandate.
          </p>
          <div className="flex gap-3.5 mt-9 max-sm:flex-col max-sm:items-start max-sm:gap-4">
            <ArrowButton href="#delegate-qualification">Apply for a Business Pass</ArrowButton>
          </div>
        </div>
      </section>

      <SplitSection
        button="Submit Business Pass Application"
        buttonHref="/banking/general-enquiry/"
        id="delegate-qualification"
        eyebrow="Qualification & UAE PDPL Consent Governance"
        imageAlt="Invited Banking CXOs at World AI Show Dubai"
        imageSrc="/banking/images/Attend/AI-decision-maker.webp"
        title={<>Plenary Access, Parallel Clinics &amp; <GradientText tone="blue">Outcome Roundtables</GradientText></>}
        text={
          <>
            <strong>Target Audience:</strong> CIOs, CTOs, CROs, CCOs, CDAIOs, Heads of Fraud, MLROs, Regulators.
            <br />
            <br />
            <strong>Inclusions:</strong> Plenary access, choice of Parallel Breakout Clinic (Fraud or Agentic), Outcome Roundtables, Hosted Reception.
            <br />
            <br />
            <strong>Privacy &amp; Consent Qualifier:</strong> Mandatory separate unbundled consent checkboxes under UAE Personal Data Protection Law (PDPL). Delegate contact details are shared only where explicit consent is provided.
          </>
        }
      />

      <section className="py-[86px] bg-[#08121E] border-t-2 border-[#0069B8] max-sm:py-[62px]">
        <div className="w-[min(1172px,calc(100%-48px))] max-sm:w-[calc(100%-32px)] mx-auto">
          <h2 className="font-heading m-0 mb-[42px] text-white font-bold leading-[1.08] tracking-[-0.02em] text-center text-[clamp(36px,4.6vw,54px)] max-sm:text-[32px]">
            Business Pass <GradientText tone="teal">Inclusions &amp; Standards</GradientText>
          </h2>
          <BenefitGrid items={gatewayCards} />
        </div>
      </section>
    </>
  );
}

export function AttendSponsorSection() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative min-h-[560px] flex items-end px-[max(24px,calc((100vw-1172px)/2))] pt-[190px] pb-[76px] overflow-hidden bg-[#08121E] bg-cover bg-[position:right_center] bg-no-repeat border-b-2 border-[#0069B8] max-[1200px]:pt-[150px] max-sm:min-h-[460px] max-sm:px-[16px] max-sm:pt-[126px] max-sm:pb-[56px]"
        style={{ backgroundImage: 'url("/banking/images/Attend/Sponsor-banner.webp")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#08121E]/92 via-[#08121E]/62 to-[#08121E]/18 z-0 pointer-events-none" />

        <div className="relative z-10 max-w-[840px]">
          <h1 className="font-heading m-0 text-white font-bold leading-[1.06] tracking-[-0.02em] text-[clamp(40px,5.2vw,64px)] max-sm:text-[36px]">
            Where Middle East banking leaders specify, procure, and <GradientText tone="teal">deploy production AI.</GradientText>
          </h1>
          <p className="max-w-[760px] mt-[24px] mb-0 text-white/88 text-[19px] leading-normal">
            Explore commercial partnerships structured around plenary keynotes, workshop clinics, concourse booths, and private buyer CXO closed-door boardrooms.
          </p>
          <div className="flex gap-3.5 mt-9 max-sm:flex-col max-sm:items-start max-sm:gap-4">
            <ArrowButton href="/banking/sponsorship-enquiry/">Enquire About Sponsorship</ArrowButton>
          </div>
        </div>
      </section>

      <SplitSection
        button="Request Sponsorship Rate Card & Prospectus"
        buttonHref="/banking/sponsorship-enquiry/"
        id="sponsor"
        eyebrow="Standardised Speaking & Concourse Booth Framework"
        imageAlt="Standardised Speaking and Booth Framework at World AI Show Dubai"
        imageSrc="/banking/images/Attend/brand-center-innovation.webp"
        reverse={false}
        title={
          <>
            Put Your Enterprise Solution Before{" "}
            <br className="max-md:hidden" />
            <GradientText>Qualified Banking Procurement Committees</GradientText>
          </>
        }
        text={
          <div className="flex flex-col gap-3">
            {[
              ["Speaking Sponsor:", "20-Min Plenary Keynote/Fireside + 12 sqm Concourse Booth + 12 Passes"],
              ["Engagement Partner:", "Exclusive Leadership of 75-Min Workshop Clinic + 9 sqm Booth + 8 Passes"],
              ["CXO Closed-Door Boardroom:", "60-Min Curated Session with 15 Wishlist CXOs + 5-Min Opening Address"],
              ["Industry Partner:", "Plenary Panel Speaking Seat + 9 sqm Booth + 6 Passes"],
              ["Exhibitor:", "6 sqm Standard Turnkey Concourse Booth + 4 Passes"],
            ].map(([label, desc]) => (
              <div
                key={label}
                className="px-5 py-4 border border-[#0069B8]/22 border-l-4 border-l-[#0069B8] rounded-[13px] bg-white text-[15.5px] leading-[1.55] text-[#334155] shadow-[0_6px_18px_rgba(8,18,30,0.05)]"
              >
                <strong className="text-[#08121E]">{label}</strong> {desc}
              </div>
            ))}
          </div>
        }
      />

      <section className="py-[86px] bg-[#08121E] border-t-2 border-[#0069B8] max-sm:py-[62px]">
        <div className="w-[min(1172px,calc(100%-48px))] max-sm:w-[calc(100%-32px)] mx-auto">
          <h2 className="font-heading m-0 mb-[42px] text-white font-bold leading-[1.08] tracking-[-0.02em] text-center text-[clamp(36px,4.6vw,54px)] max-sm:text-[32px]">
            Standardised Partnership <GradientText tone="teal">Tiers &amp; Deliverables</GradientText>
          </h2>
          <BenefitGrid items={sponsorBenefits} />
        </div>
      </section>
    </>
  );
}

export function AttendMediaSection() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative min-h-[560px] flex items-end px-[max(24px,calc((100vw-1172px)/2))] pt-[190px] pb-[76px] overflow-hidden bg-[#08121E] bg-cover bg-[position:right_center] bg-no-repeat border-b-2 border-[#0069B8] max-[1200px]:pt-[150px] max-sm:min-h-[460px] max-sm:px-[16px] max-sm:pt-[126px] max-sm:pb-[56px]"
        style={{ backgroundImage: 'url("/banking/images/Attend/Media-banner.webp")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#08121E]/92 via-[#08121E]/62 to-[#08121E]/18 z-0 pointer-events-none" />

        <div className="relative z-10 max-w-[820px]">
          <h1 className="font-heading m-0 text-white font-bold leading-[1.06] tracking-[-0.02em] text-[clamp(40px,5.2vw,64px)] max-sm:text-[36px]">
            Cover the Premier <GradientText tone="teal">Middle East Banking AI Forum</GradientText>
          </h1>
          <p className="max-w-[710px] mt-[24px] mb-0 text-white/88 text-[19px] leading-normal max-sm:text-base">
            Secure accredited press credentials, dedicated broadcast suite access, and 1-on-1 briefings with commercial bank CXOs, financial crime heads, and regulators setting the Middle East&apos;s 2027 AI agenda.
          </p>
          <div className="flex gap-3.5 mt-9 max-sm:flex-col max-sm:items-start max-sm:gap-4">
            <ArrowButton href="/banking/media-enquiry/">Apply for Media Accreditation</ArrowButton>
          </div>
        </div>
      </section>

      <SplitSection
        button="Apply for Media Accreditation"
        buttonHref="/banking/media-enquiry/"
        id="media-partner"
        imageAlt="Financial media interview coverage at World AI Show Dubai"
        imageSrc="/banking/images/Attend/cover-southeast.webp"
        title={<>Financial Press Credentials &amp; <GradientText>Executive Interview Access</GradientText></>}
        text={
          <>
            World AI Show | BFSI convenes 300+ pre-qualified C-suite banking, insurance, and risk leaders alongside 40+ expert faculty speakers in Dubai, UAE.
            <br />
            <br />
            Accredited financial journalists, editors, and industry analysts receive press credentials, dedicated interview suite access, and official research syndication opportunities across the entire day of the event.
          </>
        }
      />

      <section className="py-[86px] bg-[#08121E] border-t-2 border-[#0069B8] max-sm:py-[62px]">
        <div className="w-[min(1172px,calc(100%-48px))] max-sm:w-[calc(100%-32px)] mx-auto">
          <BenefitGrid items={mediaBenefits} />
        </div>
      </section>
    </>
  );
}

export function AttendAssociationSection() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative min-h-[560px] flex items-end px-[max(24px,calc((100vw-1172px)/2))] pt-[190px] pb-[76px] overflow-hidden bg-[#08121E] bg-cover bg-[position:right_center] bg-no-repeat border-b-2 border-[#0069B8] max-[1200px]:pt-[150px] max-sm:min-h-[460px] max-sm:px-[16px] max-sm:pt-[126px] max-sm:pb-[56px]"
        style={{ backgroundImage: 'url("/banking/images/Attend/Association-banner.webp")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#08121E]/92 via-[#08121E]/62 to-[#08121E]/18 z-0 pointer-events-none" />

        <div className="relative z-10 max-w-[820px]">
          <h1 className="font-heading m-0 text-white font-bold leading-[1.06] tracking-[-0.02em] text-[clamp(40px,5.2vw,64px)] max-sm:text-[36px]">
            Institutional <GradientText tone="teal">Partnership Application</GradientText>
          </h1>
          <p className="max-w-[710px] mt-[24px] mb-0 text-white/88 text-[19px] leading-normal max-sm:text-base">
            Collaborate with regional fintech associations, banking federations, and regulatory bodies to steer national AI adoption, foster bilateral delegations, and champion audited financial innovation across the Middle East.
          </p>
          <div className="flex gap-3.5 mt-9 max-sm:flex-col max-sm:items-start max-sm:gap-4">
            <ArrowButton href="/banking/association-enquiry/">Apply for Institutional Partnership</ArrowButton>
          </div>
        </div>
      </section>

      <SplitSection
        button="Submit Institutional Partnership Application"
        buttonHref="/banking/association-enquiry/"
        id="association-partner"
        imageAlt="Strengthening the Middle East Banking AI Ecosystem Together"
        imageSrc="/banking/images/Attend/strengthening-ai-ecosystem.webp"
        reverse={false}
        title={<>Banking Federations, FinTech Councils &amp; <GradientText>Risk Institutes</GradientText></>}
        text={
          <>
            World AI Show | BFSI | Dubai 2027 welcomes regional banking federations, fintech associations, and professional risk and compliance bodies as official institutional partners.
            <br />
            <br />
            Connect your senior banking and financial services members with 300+ pre-qualified C-suite peers, nominate faculty speakers with verified production case studies, and shape the regional regulatory and procurement dialogue in Dubai, UAE.
          </>
        }
      />

      <section className="py-[86px] bg-[#08121E] border-t-2 border-[#0069B8] max-sm:py-[62px]">
        <div className="w-[min(1172px,calc(100%-48px))] max-sm:w-[calc(100%-32px)] mx-auto">
          <BenefitGrid items={associationBenefits} />
        </div>
      </section>
    </>
  );
}

export default function AttendPage() {
  return (
    <main className="relative min-h-screen bg-[#F7F9FC] text-[#334155] font-sans overflow-x-hidden">
      <Header activeItem="Attend" subNavItems={subNav} activeSubNavItem="Overview" />
      <AttendOverviewSection />
      <FooterSection />
    </main>
  );
}
