import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import { themeItems, sixPartBlocks } from "../_brand/data";
import { DigitalPulse, VortexLattice, HalftoneWave, IsometricRing } from "../_brand/Patterns";
import { Icon } from "../_brand/Icon";
import "../_brand/brand.css";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"], display: "swap", variable: "--font-jakarta" });
const grotesk = Space_Grotesk({ subsets: ["latin"], weight: ["400", "500", "600", "700"], display: "swap", variable: "--font-grotesk" });

export const metadata: Metadata = {
  title: "AI 2047 Brand Preview | World AI Show | BFSI | Dubai 2027",
  description: "Isolated preview of the home page styled to the AI 2047 Brand Book V1.0.",
  robots: { index: false, follow: false },
  icons: { icon: "/banking/images/test-brand/favicon-vortex.svg" },
};

const LOGO_DARK = "/banking/images/test-brand/logo-dark.svg";
const LOGO_WHITE = "/banking/images/test-brand/logo-white.svg";

const nav = [
  ["Home", "/banking/"],
  ["Attend", "/banking/attend/"],
  ["Agenda", "/banking/agenda/"],
  ["Speakers", "/banking/speakers/"],
  ["Partner", "/banking/partners/"],
  ["Networking", "/banking/networking/"],
] as const;

const stats = [
  ["300+", "Pre-Qualified C-Suite Leaders", "users"],
  ["80%+", "Buy-Side Enterprise Ratio", "target"],
  ["35–45", "Expert Faculty Speakers", "mic"],
  ["4", "Core Sector Content Pillars", "layers"],
] as const;

const pillarIcons = ["shield", "agent", "chart", "lock"];
const blockIcons = ["flag", "spark", "shield", "table", "chart", "users"];

const constituencies = [
  ["Commercial & Retail Banking (Buy-Side 80%+)", "CIOs, CTOs, Chief Data & AI Officers, Chief Digital Officers, Heads of Retail Banking, Heads of Core Transformation."],
  ["Risk, Compliance & Financial Crime", "Chief Risk Officers (CROs), Chief Compliance Officers (CCOs), Heads of AML, Heads of Fraud Risk, MLROs, Model Governance Leads."],
  ["Insurers, Wealth & Asset Managers", "Chief Operating Officers (COOs), Chief Investment Officers, Heads of Underwriting, Heads of Claims Automation, Actuarial Leads."],
  ["Institutional Hosts & Regulators", "Central Bank of the UAE (CBUAE), Dubai Financial Services Authority (DFSA), DIFC Authority, UAE FIU, ADGM."],
  ["Global Cloud, Core & AI Providers", "Enterprise software platforms, accelerated compute providers, fraud/AML specialists, core banking modernisers, system integrators."],
] as const;

const faqs = [
  ["What is World AI Show | BFSI | Dubai 2027?", "A 1-Day Executive Decision Forum on 24 March 2027 in DIFC District, Dubai, UAE. It convenes 300+ pre-qualified C-suite banking, insurance, asset management, and payment leaders (maintaining a minimum 80% buy-side enterprise ratio) to address controlled AI deployment for regulated financial operations."],
  ["How does this forum fit into the March Dubai Cluster?", "The forum is Day 1 of the March Dubai Cluster, paired back-to-back with World AI Show | AI in Healthcare & Life Sciences on 25 March 2027. Both share premium DIFC District venue infrastructure while maintaining separate P&Ls, dedicated sector agendas, and distinct pre-qualified buyer audiences."],
  ["Who qualifies for a complimentary Delegate Pass?", "The Delegate Pass is complimentary, strictly by invitation and qualification, for senior buy-side executives from commercial and retail banks, insurers, wealth and asset managers, and regulatory authorities holding an active operational budget or deployment mandate. Solution providers may apply for a paid Business Pass, subject to a strictly capped quota."],
  ["What is the CXO Closed-Door Boardroom format?", "An exclusive 60-minute curated private session hosting 15 pre-qualified wishlist banking and risk CXOs under Chatham House Rule, with a 5-minute sponsor opening address and dedicated executive moderation."],
  ["Who organises the World AI Show Series?", "Trescon, the team behind the world's longest-running enterprise AI summit series, with 48 completed global editions across four continents, convening 42,000+ C-level executives and 2,600+ expert speakers."],
] as const;

export default function BrandPreviewHome() {
  return (
    <div className={`b47 ${jakarta.variable} ${grotesk.variable}`}>
      {/* Header — frosted white, primary/dark logo */}
      <header className="hdr">
        <div className="wrap hdr-inner">
          <a className="logo-link" href="/banking/" aria-label="World AI Show BFSI Dubai home">
            <img src={LOGO_DARK} alt="World AI Show | BFSI | Dubai" width={120} height={48} />
          </a>
          <nav className="nav" aria-label="Primary">
            {nav.map(([label, href]) => (
              <a key={label} href={href} aria-current={label === "Home" ? "page" : undefined}>{label}</a>
            ))}
          </nav>
          <a className="btn btn--primary" href="/banking/sponsorship-enquiry/">Enquire now</a>
        </div>
      </header>

      <main>
        {/* Hero — photographic overlay, no decorative SVG */}
        <section className="hero" id="home">
          <video autoPlay muted loop playsInline aria-hidden="true">
            <source src="/banking/videos/wais-dubai-hero-banner.mp4" type="video/mp4" />
          </video>
          <div className="wrap">
            <div className="hero-content" style={{ marginInline: "auto" }}>
              <span className="kicker">World AI Show | BFSI</span>
              <h1>
                Controlled AI deployment for <span className="accent-mint">regulated financial operations.</span>
              </h1>
              <p className="b1">
                A premier executive forum dedicated to the operational realities of deploying artificial intelligence across regulated banking, insurance, asset management, and payment operations, convening 300+ C-suite leaders.
              </p>
              <div className="hero-meta">
                <div><strong>24</strong><span>March 2027</span></div>
                <div><strong>DIFC District, Dubai</strong><span>Day 1 · March Dubai Cluster</span></div>
                <div><strong>1-Day</strong><span>Executive Decision Forum</span></div>
              </div>
              <div className="hero-actions">
                <a className="btn btn--primary" href="/banking/attend/delegate/">Apply for Delegate Pass (Complimentary)</a>
                <a className="btn btn--outline" href="/banking/attend/sponsor/">Explore Commercial Sponsorship</a>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="section section--light on-light">
          <DigitalPulse className="bg-el--right" />
          <div className="wrap">
            <div className="grid12">
              {stats.map(([num, label, icon]) => (
                <div key={label} className="span-3">
                  <div className="card stat">
                    <Icon name={icon} />
                    <div className="stat-num">{num}</div>
                    <div className="stat-label">{label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Four operational mandates */}
        <section className="section section--blue">
          <VortexLattice className="bg-el--right" />
          <div className="wrap">
            <div className="section-head">
              <span className="kicker">Four operational mandates</span>
              <h2>One day. <span className="accent-mint">Four content pillars.</span></h2>
              <p className="b2">Every block is engineered to move senior financial services buyers from board-level regulatory scrutiny to live architecture validation and 2027 procurement decisions.</p>
            </div>
            <div className="grid12">
              {themeItems.map((item, i) => (
                <div key={item.index} className="span-6">
                  <article className="card pillar">
                    <img src={item.image} alt="" loading="lazy" />
                    <Icon name={pillarIcons[i % 4]} />
                    <span className="tag">Pillar {item.index}</span>
                    <h5>{item.heading}</h5>
                    <p>{item.expandedScope}</p>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Six-part block methodology */}
        <section className="section section--white on-light">
          <HalftoneWave className="bg-el--left" />
          <div className="wrap">
            <div className="section-head center">
              <span className="kicker">One intensive day</span>
              <h2>A <span className="accent-teal">Six-Part Block Methodology.</span></h2>
              <p className="b2">Engineered to drive banking buyers from board priorities down to concrete procurement.</p>
            </div>
            <div className="grid12">
              {sixPartBlocks.map((b, i) => (
                <div key={b.num} className="span-4">
                  <article className="card">
                    <Icon name={blockIcons[i]} />
                    <span className="tag">{b.num}</span>
                    <h5>{b.title}</h5>
                    <p>{b.desc}</p>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Institutional constituencies */}
        <section className="section section--blue">
          <IsometricRing className="bg-el--right" />
          <div className="wrap">
            <div className="section-head">
              <span className="kicker">Pre-qualified buy-side</span>
              <h2>Engage with Five Governed <span className="accent-mint">Institutional Constituencies</span></h2>
              <p className="b2">Meet 300+ pre-qualified C-suite banking, insurance, risk, compliance, and regulatory decision-makers convening at the same place with the same goals.</p>
            </div>
            <div className="grid12">
              {constituencies.map(([title, desc], i) => (
                <div key={title} className={i < 3 ? "span-4" : "span-6"}>
                  <article className="card">
                    <span className="tag">0{i + 1}</span>
                    <h5>{title}</h5>
                    <p>{desc}</p>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pass matrix */}
        <section className="section section--light on-light">
          <VortexLattice className="bg-el--left teal" />
          <div className="wrap">
            <div className="section-head center">
              <h2>A Summit Composed for <span className="accent-teal">Regulated Banking Buyers &amp; Providers</span></h2>
            </div>
            <div className="grid12">
              <div className="span-6">
                <article className="card door">
                  <Icon name="check" />
                  <h5>Delegate Pass — complimentary, strictly by invitation and qualification</h5>
                  <p>Senior banking, insurance, and financial services executives attend by invitation, subject to qualification against an active operational budget or deployment mandate.</p>
                  <div className="actions"><a className="btn btn--primary" href="/banking/attend/delegate/">Apply for a Delegate Pass</a></div>
                </article>
              </div>
              <div className="span-6">
                <article className="card door">
                  <Icon name="table" />
                  <h5>Business Pass — paid commercial access with strictly capped quota</h5>
                  <p>Commercial access for technology solution providers, software vendors, and consultancies outside the invitation criteria, with ticket numbers capped to protect room composition.</p>
                  <div className="actions"><a className="btn btn--outline" href="/banking/attend/sponsor/">Explore Sponsorship Tiers</a></div>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section section--white on-light">
          <DigitalPulse className="bg-el--right teal" />
          <div className="wrap">
            <div className="grid12">
              <div className="span-4">
                <span className="kicker">FAQ</span>
                <h2>Questions, <span className="accent-teal">answered.</span></h2>
              </div>
              <div className="span-8 faq">
                {faqs.map(([q, a], i) => (
                  <details key={q} open={i === 0}>
                    <summary>{q}</summary>
                    <p>{a}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Organiser */}
        <section className="section section--light on-light">
          <HalftoneWave className="bg-el--right teal" />
          <div className="wrap">
            <div className="organiser">
              <div className="left">
                <span className="kicker">Organised by Trescon</span>
                <img src="/banking/logos/Trescon-org.svg" alt="Trescon" width={240} height={72} loading="lazy" />
              </div>
              <div className="right">
                <p className="b2">
                  Powered by Trescon’s decade-long track record of convening over 42,000 C-suite executives and 2,600+ expert speakers across four continents, World AI Show | BFSI leads the March Dubai Cluster. Held back-to-back with the Healthcare and Life Sciences edition, this dedicated decision forum connects institutional buyers, fintech innovators, and regulators under a single, focused fiduciary agenda.
                </p>
                <a className="text-link" href="https://www.tresconglobal.com" target="_blank" rel="noopener noreferrer">Learn more about Trescon ↗</a>
              </div>
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="section section--blue cta-band">
          <DigitalPulse className="bg-el--left" />
          <div className="wrap">
            <div className="section-head center">
              <h2>Be in the room where 2027’s banking AI architecture <span className="accent-mint">gets finalised.</span></h2>
            </div>
            <div className="hero-actions">
              <a className="btn btn--primary" href="/banking/attend/delegate/">Apply for a Delegate Pass</a>
              <a className="btn btn--outline" href="/banking/sponsorship-enquiry/">Enquire about sponsorship</a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer — Sovereign Blue, white logo */}
      <footer className="ftr">
        <div className="wrap">
          <div className="ftr-grid">
            <div className="ftr-brand">
              <a className="logo-link" href="/banking/" aria-label="World AI Show BFSI Dubai home">
                <img src={LOGO_WHITE} alt="World AI Show | BFSI | Dubai" width={144} height={58} loading="lazy" />
              </a>
              <p style={{ marginTop: 16 }}>24 March 2027 · DIFC District, Dubai, UAE · 1-Day Executive Decision Forum. Organised by Trescon.</p>
            </div>
            <div className="ftr-col">
              <h5>Explore</h5>
              <ul>{nav.map(([label, href]) => (<li key={label}><a href={href}>{label}</a></li>))}</ul>
            </div>
            <div className="ftr-col">
              <h5>Get involved</h5>
              <ul>
                <li><a href="/banking/attend/delegate/">Delegate Pass</a></li>
                <li><a href="/banking/attend/sponsor/">Sponsorship</a></li>
                <li><a href="/banking/speaker-enquiry/">Call for Speakers</a></li>
              </ul>
            </div>
          </div>
          <div className="ftr-bottom">© 2027 Trescon. World AI Show | BFSI | Dubai 2027. Isolated AI 2047 brand preview.</div>
        </div>
      </footer>
    </div>
  );
}
