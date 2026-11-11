/*
 * AI 2047 Brand Book V1.0 — scoped design system for the /test/home-preview/ route ONLY.
 * Every selector starts with .ai2047-brandbook-v1 so nothing leaks to live pages.
 * It restyles the unmodified live section components through attribute-selector overrides.
 */

const ROOT = ".ai2047-brandbook-v1";

const L = "#attend,#agenda,#networking,#partners,#faq"; // Cloud White sections
const D = "#home,#ecosystem,#testimonials,#footer"; // Midnight Core sections
const B = "#speakers,#organizer"; // Sovereign Blue sections
const ALL = `${L},${D},${B}`;

/* helpers: class-token selectors (case-insensitive) */
const tok = (t: string) => `[class~="${t}" i]`; // exact token
const pre = (t: string) => `[class*="${t}" i]`; // substring

const TEXT_ACCENT = ["text-[#c0f43c]", "text-[#2fd5f6]", "text-[#2dd3f4]", "text-[#18d4ff]", "text-[#00ceff]", "text-[#79acc7]", "text-cyan", "text-green", "text-blue"]
  .map((t) => `:is([class^="${t}" i],[class*=" ${t}" i])`)
  .join(",");
const BG_SOLID = ["bg-[#c0f43c]", "bg-[#18d4ff]", "bg-[#2dd3f4]", "bg-[#2fd5f6]", "bg-cyan", "bg-[#00ceff]"].map(tok).join(",");
const BG_TINT = ["bg-[#c0f43c]/", "bg-[#18d4ff]/", "bg-[#2dd3f4]/", "bg-[#00ceff]/", "bg-cyan/", "bg-[#2fd5f6]/"].map(pre).join(",");
const BORDER_ACCENT = ["border-[#c0f43c", "border-[#18d4ff", "border-[#2dd3f4", "border-[#2fd5f6", "border-[#00ceff", "border-[#4eb9ff", "border-[#7eacd9", "border-cyan"]
  .map((t) => `:is([class^="${t}" i],[class*=" ${t}" i])`)
  .join(",");
const HOVER_TEXT = ["hover:text-[#c0f43c", "hover:text-cyan", "hover:text-[#2dd3f4", "hover:text-[#18d4ff", "hover:text-[#2fd5f6"].map(pre).join(",");
const HOVER_BORDER = ["hover:border-[#c0f43c", "hover:border-cyan", "hover:border-[#18d4ff", "hover:border-[#2fd5f6", "hover:border-[#2dd3f4"].map(pre).join(",");
const GROUP_HOVER_TEXT = ["group-hover:text-[#c0f43c", "group-hover:text-cyan", "group-hover:text-[#e6fbff", "group-hover:text-[#f5ffe0", "group-hover:text-[#041022"].map(pre).join(",");

const css = `
/* ───────────── tokens ───────────── */
@@{
  --bb-blue:#0069B8; --bb-teal:#009EAD; --bb-orange:#F15928; --bb-orange-hover:#D94B1E;
  --bb-cloud:#F7F9FC; --bb-white:#FFFFFF; --bb-midnight:#08121E; --bb-raised:#0D1B2E;
  --font-pjs: var(--font-jakarta), "Plus Jakarta Sans", Arial, sans-serif;
  --font-sg: var(--font-grotesk), "Space Grotesk", Arial, sans-serif;
  font-family: var(--font-pjs);
  background:#F7F9FC; color:#334155; letter-spacing:0;
}
@@ :is(${L}){--bb-head:#08121E;--bb-text:#334155;--bb-cap:#52657A;--bb-accent:#0069B8;--bb-border:rgba(0,105,184,.22);--bb-card:#FFFFFF}
@@ :is(${D}){--bb-head:#FFFFFF;--bb-text:rgba(247,249,252,.84);--bb-cap:rgba(247,249,252,.7);--bb-accent:#009EAD;--bb-border:rgba(0,105,184,.52);--bb-card:#0D1B2E}
@@ :is(${B}){--bb-head:#FFFFFF;--bb-text:#F7F9FC;--bb-cap:rgba(247,249,252,.85);--bb-accent:#FFFFFF;--bb-border:rgba(255,255,255,.32);--bb-card:#FFFFFF}

/* ───────────── section surfaces ───────────── */
@@ :is(${L}){background:#F7F9FC !important;background-image:none !important}
@@ :is(#home,#ecosystem,#testimonials,#footer){background-color:#08121E !important;background-image:none !important}
@@ #speakers{background:#0069B8 !important;background-image:none !important}
@@ :is(#ecosystem,#testimonials){border-top:2px solid #0069B8;border-bottom:2px solid #0069B8}
@@ #footer{border-top:2px solid #0069B8 !important}
@@ :is(#attend,#ecosystem,#agenda,#speakers,#networking,#testimonials,#partners,#organizer,#faq) > div[aria-hidden="true"]{display:none !important}
@@ :is(#attend,#ecosystem) canvas{display:none !important}

/* ───────────── containers & grid (locked to 1172px Header width, 24px gutters, 16px mobile margin) ───────────── */
@@ header{padding-inline:24px !important}
@@ header > nav{max-width:1172px !important;width:100% !important;margin-inline:auto !important}
@@ :is(${ALL}) :is([class*="w-[min(1114px"],[class*="w-[min(1120px"],[class*="w-[min(1140px"],[class*="w-[min(1180px"],[class*="w-[min(1200px"]){width:min(1172px,calc(100% - 48px)) !important;max-width:none !important;margin-inline:auto !important}
@@ #home > .container{width:min(1172px,calc(100% - 48px)) !important;max-width:none !important;padding-inline:0 !important;margin-inline:auto !important}
@@ #ecosystem{padding-inline:0 !important}
@@ #ecosystem > div[class*="max-w-[1140px"]{width:min(1172px,calc(100% - 48px)) !important;max-width:none !important;margin-inline:auto !important}
@@ #partners > div[class*="mt-6"]{width:min(1172px,calc(100% - 48px)) !important;margin-inline:auto !important;-webkit-mask-image:linear-gradient(90deg,transparent,#000 5%,#000 95%,transparent);mask-image:linear-gradient(90deg,transparent,#000 5%,#000 95%,transparent)}
@@ #faq [class*="max-w-[976px]"]{max-width:none !important;width:100% !important}
@@ :is(${ALL}) :is([class*="gap-4"],[class*="gap-5"]).grid{gap:24px}
@media (max-width:640px){
  @@ header{padding-inline:16px !important}
  @@ :is(${ALL}) :is([class*="w-[min(1114px"],[class*="w-[min(1120px"],[class*="w-[min(1140px"],[class*="w-[min(1180px"],[class*="w-[min(1200px"]){width:calc(100% - 32px) !important}
  @@ #home > .container,@@ #ecosystem > div[class*="max-w-[1140px"],@@ #partners > div[class*="mt-6"]{width:calc(100% - 32px) !important}
}

/* ───────────── typography (1.200 modular scale) ───────────── */
@@ :is(p,span,a,button,li,div,input,label,small,strong,blockquote,summary,i,textarea,select){font-family:var(--font-pjs) !important}
@@ :is(h1,h2,h3,h4,h5,h6),
@@ :is(h1,h2,h3,h4,h5,h6) *,
@@ ${pre("font-[850]")},@@ ${pre("font-[900]")},@@ .font-black{font-family:var(--font-sg) !important}
@@ :is(h1,h2,h3,h4,h5,h6){letter-spacing:-0.01em !important}
@@ :is(p,li,blockquote,summary,input,textarea,a){letter-spacing:0 !important}
@@ h1{font-weight:700 !important;font-size:clamp(36px,4.5vw,57px) !important;line-height:115% !important}
@@ h2{font-weight:600 !important;font-size:clamp(30px,3.8vw,48px) !important;line-height:120% !important}
@@ h3[class*="text-[clamp"]{font-weight:600 !important;font-size:clamp(26px,3vw,40px) !important;line-height:120% !important}
@@ h3:not([class*="text-[clamp"]),@@ h4{font-weight:500 !important;line-height:130% !important}
@@ h4{font-size:clamp(22px,2.4vw,33px) !important}
@@ .font-mono{font-family:var(--font-pjs) !important;font-size:12px !important;line-height:160% !important;letter-spacing:.08em !important}
@@ #home p{font-weight:400 !important;font-size:clamp(15px,1.25vw,17px) !important;line-height:162% !important;max-width:820px !important}
@@ #home p.font-mono{display:none !important}
@@ :is(#attend,#ecosystem,#agenda,#speakers,#networking,#partners,#faq,#organizer) h2 + p,
@@ :is(#attend,#ecosystem,#agenda,#networking,#partners) h2 ~ p{font-size:clamp(16px,1.5vw,19px) !important;line-height:145% !important}

/* ───────────── headline highlight words: one solid colour, no gradients ───────────── */
@@ .bg-clip-text{background-image:none !important;background:none !important;-webkit-background-clip:border-box !important;background-clip:border-box !important}
@@ :is(${L}) .bg-clip-text{color:#0069B8 !important;-webkit-text-fill-color:#0069B8 !important}
@@ :is(${D}) .bg-clip-text{color:#009EAD !important;-webkit-text-fill-color:#009EAD !important}
@@ :is(${B}) .bg-clip-text{color:#FFFFFF !important;-webkit-text-fill-color:#FFFFFF !important;text-decoration:underline #F15928 3px;text-underline-offset:6px}

/* ───────────── text colours per surface ───────────── */
@@ :is(${L}) :is(h1,h2,h3,h4,h5,h6,strong){color:var(--bb-head)}
@@ :is(${L}) :is(${pre("text-white")},${pre("text-muted")},${pre("text-[#a4adbd")},${pre("text-[#cbd5e1")},${pre("text-dim")}){color:var(--bb-text) !important}
@@ :is(${L}) :is(h1,h2,h3,h4,h5,h6,strong)${pre("text-white")}{color:var(--bb-head) !important}
@@ :is(${L}) :is(${pre("text-[#c0f43c")},${pre("text-[#2fd5f6")}){color:#0069B8 !important}
@@ :is(${D}) :is(${pre("text-muted")},${pre("text-[#a4adbd")},${pre("text-[#cbd5e1")},${pre("text-dim")}){color:var(--bb-text) !important}
@@ :is(${B}) :is(${pre("text-muted")},${pre("text-[#a4adbd")},${pre("text-[#cbd5e1")},${pre("text-white/")}){color:var(--bb-text) !important}
@@ #footer :is(h3,h4){color:#009EAD !important;font-size:12px !important;font-weight:700 !important;letter-spacing:.2em !important;text-transform:uppercase}
@@ #footer a:not([aria-label]){color:rgba(247,249,252,.85) !important;transition:color .2s ease,transform .2s ease;display:inline-block}
@@ #footer a:not([aria-label]):hover{color:#009EAD !important;transform:translateX(3px)}
@@ #footer a[aria-label]{background:#0D1B2E !important;border:1px solid #0069B8 !important;color:#FFFFFF !important;box-shadow:none !important;transition:transform .24s cubic-bezier(.22,1,.36,1),background-color .22s ease,border-color .22s ease,box-shadow .24s ease !important}
@@ #footer a[aria-label]:hover{background:#F15928 !important;border-color:#F15928 !important;color:#FFFFFF !important;transform:translateY(-3px) scale(1.08) !important;box-shadow:0 10px 22px rgba(241,89,40,.42) !important}

/* ───────────── accent token remap (lime / cyan -> brand) ───────────── */
@@ :is(${ALL}) :is(${TEXT_ACCENT}){color:var(--bb-accent) !important}
@@ :is(${B}) :is(${TEXT_ACCENT}){color:#FFFFFF !important}
@@ :is(${ALL}) :is(${BG_TINT}){background-color:rgba(0,105,184,.1) !important}
@@ :is(${D}) :is(${BG_TINT}){background-color:rgba(0,105,184,.22) !important}
@@ :is(${ALL}) :is(${BG_SOLID}):not(a):not(button){background-color:#F15928 !important;box-shadow:none !important}
@@ :is(${ALL}) :is(${BORDER_ACCENT}){border-color:var(--bb-border) !important}
@@ :is(${ALL}) :is(${HOVER_TEXT}):hover{color:#F15928 !important}
@@ :is(${L}) :is(${HOVER_TEXT}):hover{color:#0069B8 !important}
@@ :is(${D}) :is(${HOVER_TEXT}):hover{color:#009EAD !important}
@@ :is(${ALL}) :is(${HOVER_BORDER}):hover{border-color:#F15928 !important}
@@ :is(${L}) :is(${HOVER_BORDER}):hover{border-color:#0069B8 !important}
@@ :is(${D}) :is(${HOVER_BORDER}):hover{border-color:#009EAD !important}
@@ :is(${ALL}) .group:hover :is(${GROUP_HOVER_TEXT}){color:var(--bb-accent) !important}
@@ :is(${ALL}) [class*="shadow-[0_0_"]{box-shadow:none !important}
@@ :is(${ALL}) :is([class^="blur-["],[class*=" blur-["]){display:none !important}

/* ───────────── cards ───────────── */
@@ :is(${L}) :is([class*="bg-gradient-to-"],[class*="bg-[#04"],[class*="bg-[#05"],[class*="bg-[#06"],[class*="bg-[#07"],[class*="bg-[#02"],[class*="bg-[#03"]):where(:not(.bg-clip-text):not([class*="from-transparent"]):not([class*="h-[1px]"]):not([class*="h-[2px]"]):not(section):not([class*="inset-0"]):not([class*="sticky"])){
  background:#FFFFFF !important;background-image:none !important;border-color:rgba(0,105,184,.22) !important;box-shadow:0 12px 32px rgba(8,18,30,.06) !important}
@@ :is(${L}) :is([class*="bg-gradient-to-"],[class*="bg-[#0"]):where(:not(.bg-clip-text)):hover{border-color:#0069B8 !important}
@@ :is(${L}) :is([class*="bg-white/"],[class*="border-white/"]){border-color:rgba(0,105,184,.22) !important}
@@ :is(${D}) :is([class*="bg-gradient-to-"],[class*="bg-[#04"],[class*="bg-[#05"],[class*="bg-[#06"],[class*="bg-[#07"],[class*="bg-[#03"]):where(:where(:not(.bg-clip-text):not([class*="from-transparent"]):not([class*="h-[1px]"]):not([class*="h-[2px]"]):not(section)):not(footer):not([class*="absolute"][class*="inset-0"])){
  background:#0D1B2E !important;background-image:none !important;border-color:rgba(0,105,184,.52) !important;box-shadow:none !important}
@@ :is(${D}) :is([class*="bg-gradient-to-"],[class*="bg-[#0"]):where(:not(.bg-clip-text):not([class*="inset-0"])):hover{border-color:#009EAD !important}
@@ :is(${D}) [class*="border-white/"]{border-color:rgba(0,105,184,.52) !important}
@@ :is(${B}) :is([class*="bg-gradient-to-"],[class*="bg-[#04"],[class*="bg-[#05"],[class*="bg-[#06"],[class*="bg-[#07"],[class*="bg-[#03"],[class*="bg-white/"]):where(:not(.bg-clip-text):not([class*="from-transparent"]):not([class*="h-[1px]"]):not([class*="h-[2px]"]):not(section):not([class*="inset-0"]):not([class*="sticky"])){
  background:#FFFFFF !important;background-image:none !important;border:1px solid rgba(0,105,184,.22) !important;border-top:4px solid #F15928 !important;box-shadow:0 16px 40px rgba(8,18,30,.16) !important}
@@ #organizer{position:relative !important;isolation:isolate;overflow:hidden !important;padding-block:104px !important;background-color:#004A88 !important;background-image:none !important;border-top:2px solid #0069B8;border-bottom:2px solid #0069B8}
@@ #organizer::before{content:"";position:absolute;inset:0;z-index:-2;background:url(/banking/images/test-brand/organizer-bg.webp?v=2) center/cover no-repeat;filter:brightness(1.22) contrast(1.06) saturate(.75)}
@@ #organizer::after{content:"";position:absolute;inset:0;z-index:-1;pointer-events:none;background:linear-gradient(125deg,rgba(0,72,138,.84) 0%,rgba(0,105,184,.74) 52%,rgba(8,18,30,.84) 100%)}
@@ #organizer > div{position:relative;z-index:1}
@@ #organizer > div > div:first-child{display:none !important}
@@ #organizer > div > div + div{margin-top:0 !important;margin-block-start:0 !important}
@@ #organizer [data-aos]{opacity:1 !important;transform:none !important}
@@ #organizer :is(h1,h2,h3,h4,h5,h6,strong,p,li,span){color:#FFFFFF !important}
@@ #organizer [class*="text-[#a4adbd"]{color:rgba(247,249,252,.94) !important;font-size:17px !important;line-height:1.68 !important}
@@ #organizer a[href*="tresconglobal.com"]{
  position:relative;overflow:hidden;isolation:isolate;width:fit-content;
  height:48px;padding:0 28px !important;margin-top:26px !important;
  background:#F15928 !important;color:#FFFFFF !important;border:1.5px solid #F15928 !important;border-radius:9999px !important;
  font-size:14.5px !important;font-weight:700 !important;text-decoration:none !important;
  box-shadow:0 8px 22px rgba(241,89,40,.32) !important;
  transition:transform .26s cubic-bezier(.22,1,.36,1),background-color .24s ease,border-color .24s ease,box-shadow .26s ease !important}
@@ #organizer a[href*="tresconglobal.com"]:hover{
  background:#D94B1E !important;border-color:#FF855E !important;color:#FFFFFF !important;
  transform:translateY(-3px) scale(1.025) !important;
  box-shadow:0 14px 32px rgba(241,89,40,.48),0 0 0 3px rgba(241,89,40,.22) !important}
@@ #organizer a[href*="tresconglobal.com"]::after{
  content:"";position:absolute;top:0;bottom:0;left:-120%;width:65%;
  background:linear-gradient(112deg,transparent 0%,rgba(255,255,255,.28) 50%,transparent 100%);
  transform:skewX(-20deg);transition:left .55s cubic-bezier(.22,1,.36,1);pointer-events:none}
@@ #organizer a[href*="tresconglobal.com"]:hover::after{left:145%}
@@ #organizer a[href*="tresconglobal.com"] svg{transition:transform .24s cubic-bezier(.22,1,.36,1)}
@@ #organizer a[href*="tresconglobal.com"]:hover svg{transform:translate(3px,-3px)}
@@ #organizer [style*="gradient"]{grid-template-columns:220px minmax(0,1fr) !important;gap:40px !important;background:transparent !important;background-image:none !important;backdrop-filter:none !important;-webkit-backdrop-filter:none !important;border:0 !important;border-top-width:0 !important;border-radius:0 !important;padding:0 !important;min-height:0 !important;box-shadow:none !important}
@@ #organizer img{filter:brightness(0) invert(1) !important;width:212px !important;max-width:100% !important}
@media (max-width:980px){@@ #organizer [style*="gradient"]{grid-template-columns:minmax(0,1fr) !important;gap:24px !important}}
@@ #organizer span.font-mono:not(a *){color:rgba(247,249,252,.86) !important;font-weight:700 !important;letter-spacing:.18em !important}

/* ───────────── buttons & CTAs (white text on Pulse Orange + unified hover) ───────────── */
@layer theme {
  /* Beat Tailwind v4 @layer utilities [color:#06111f!important] & !text-black via inverted !important cascade */
  html body @@ :is(${ALL},header) :is(a,button):is(${tok("bg-[#c0f43c]")},${tok("bg-[#18d4ff]")},${tok("bg-cyan")},[href*="sponsorship-enquiry"]:is(header *,#organizer *),a[href*="tresconglobal.com"]:is(#organizer *)),
  html body @@ :is(${ALL},header) :is(a,button):is(${tok("bg-[#c0f43c]")},${tok("bg-[#18d4ff]")},${tok("bg-cyan")},[href*="sponsorship-enquiry"]:is(header *,#organizer *),a[href*="tresconglobal.com"]:is(#organizer *)) *,
  html body @@ :is(${ALL},header) :is(a,button):is(${tok("bg-[#c0f43c]")},${tok("bg-[#18d4ff]")},${tok("bg-cyan")},[href*="sponsorship-enquiry"]:is(header *,#organizer *),a[href*="tresconglobal.com"]:is(#organizer *)):hover,
  html body @@ :is(${ALL},header) :is(a,button):is(${tok("bg-[#c0f43c]")},${tok("bg-[#18d4ff]")},${tok("bg-cyan")},[href*="sponsorship-enquiry"]:is(header *,#organizer *),a[href*="tresconglobal.com"]:is(#organizer *)):hover *{
    color:#FFFFFF !important;-webkit-text-fill-color:#FFFFFF !important}

  /* Dark-surface secondary outline CTAs -> always white text */
  html body @@ :is(${D}) a:is([class*="border-[#4eb9ff" i],[class*="border-[#18d4ff" i]):not([class*="bg-[#18d4ff]" i]),
  html body @@ :is(${D}) a:is([class*="border-[#4eb9ff" i],[class*="border-[#18d4ff" i]):not([class*="bg-[#18d4ff]" i]) *,
  html body @@ :is(${D}) a:is([class*="border-[#4eb9ff" i],[class*="border-[#18d4ff" i]):not([class*="bg-[#18d4ff]" i]):hover,
  html body @@ :is(${D}) a:is([class*="border-[#4eb9ff" i],[class*="border-[#18d4ff" i]):not([class*="bg-[#18d4ff]" i]):hover *{
    color:#FFFFFF !important;-webkit-text-fill-color:#FFFFFF !important}

  /* Light/Blue-surface secondary outline CTAs -> Sovereign Blue idle (even inside .group:hover), Pure White on button :hover */
  html body @@ :is(${L},#speakers) a:is([class*="border-[#4eb9ff" i],[class*="border-[#18d4ff" i],[class*="bg-cyan/10" i]):not([class*="bg-[#18d4ff]" i]),
  html body @@ :is(${L},#speakers) a:is([class*="border-[#4eb9ff" i],[class*="border-[#18d4ff" i],[class*="bg-cyan/10" i]):not([class*="bg-[#18d4ff]" i]) *{
    color:#0069B8 !important;-webkit-text-fill-color:#0069B8 !important}
  html body @@ :is(${L},#speakers) a:is([class*="border-[#4eb9ff" i],[class*="border-[#18d4ff" i],[class*="bg-cyan/10" i]):not([class*="bg-[#18d4ff]" i]):hover,
  html body @@ :is(${L},#speakers) a:is([class*="border-[#4eb9ff" i],[class*="border-[#18d4ff" i],[class*="bg-cyan/10" i]):not([class*="bg-[#18d4ff]" i]):hover *{
    color:#FFFFFF !important;-webkit-text-fill-color:#FFFFFF !important}
}

/* Primary Pulse Orange CTAs */
@@ :is(${ALL},header) :is(a,button):is(${tok("bg-[#c0f43c]")},${tok("bg-[#18d4ff]")},${tok("bg-cyan")},[href*="sponsorship-enquiry"]:is(header *,#organizer *)){
  position:relative;overflow:hidden;isolation:isolate;
  background:#F15928 !important;background-image:none !important;
  color:#FFFFFF !important;border:1.5px solid #F15928 !important;border-radius:9999px !important;
  box-shadow:0 8px 22px rgba(241,89,40,.32) !important;
  transition:transform .26s cubic-bezier(.22,1,.36,1),background-color .24s ease,border-color .24s ease,box-shadow .26s ease !important}
@@ :is(${ALL},header) :is(a,button):is(${tok("bg-[#c0f43c]")},${tok("bg-[#18d4ff]")},${tok("bg-cyan")},[href*="sponsorship-enquiry"]:is(header *,#organizer *)):hover{
  background:#D94B1E !important;border-color:#FF855E !important;color:#FFFFFF !important;
  transform:translateY(-3px) scale(1.025) !important;
  box-shadow:0 14px 32px rgba(241,89,40,.48),0 0 0 3px rgba(241,89,40,.22) !important}
@@ :is(${ALL},header) :is(a,button):is(${tok("bg-[#c0f43c]")},${tok("bg-[#18d4ff]")},${tok("bg-cyan")},[href*="sponsorship-enquiry"]:is(header *,#organizer *)):active{
  transform:translateY(-1px) scale(.99) !important}

/* Secondary Outline CTAs on Dark Surfaces (#home, #ecosystem, #testimonials) */
@@ :is(${D}) a:is([class*="border-[#4eb9ff" i],[class*="border-[#18d4ff" i]):not([class*="bg-[#18d4ff]" i]){
  position:relative;overflow:hidden;isolation:isolate;
  background:rgba(8,18,30,.78) !important;border:1.5px solid #009EAD !important;color:#FFFFFF !important;border-radius:9999px !important;
  box-shadow:0 6px 18px rgba(8,18,30,.36) !important;
  transition:transform .26s cubic-bezier(.22,1,.36,1),background-color .24s ease,border-color .24s ease,box-shadow .26s ease !important}
@@ :is(${D}) a:is([class*="border-[#4eb9ff" i],[class*="border-[#18d4ff" i]):not([class*="bg-[#18d4ff]" i]):hover{
  background:#0069B8 !important;border-color:#009EAD !important;color:#FFFFFF !important;
  transform:translateY(-3px) scale(1.025) !important;
  box-shadow:0 14px 32px rgba(0,105,184,.48),0 0 0 3px rgba(0,158,173,.24) !important}
@@ :is(${D}) a:is([class*="border-[#4eb9ff" i],[class*="border-[#18d4ff" i]):not([class*="bg-[#18d4ff]" i]):active{
  transform:translateY(-1px) scale(.99) !important}

/* Secondary Outline CTAs on Light & Sovereign Blue Surfaces (#networking Business Pass, #partners, #speakers) */
@@ :is(${L},#speakers) a:is([class*="border-[#4eb9ff" i],[class*="border-[#18d4ff" i],[class*="bg-cyan/10" i]):not([class*="bg-[#18d4ff]" i]){
  position:relative;overflow:hidden;isolation:isolate;
  background:#FFFFFF !important;border:1.5px solid #0069B8 !important;color:#0069B8 !important;border-radius:9999px !important;
  box-shadow:0 6px 18px rgba(0,105,184,.1) !important;
  transition:transform .26s cubic-bezier(.22,1,.36,1),background-color .24s ease,border-color .24s ease,box-shadow .26s ease,color .24s ease !important}
@@ :is(${L},#speakers) a:is([class*="border-[#4eb9ff" i],[class*="border-[#18d4ff" i],[class*="bg-cyan/10" i]):not([class*="bg-[#18d4ff]" i]):hover{
  background:#0069B8 !important;border-color:#0069B8 !important;color:#FFFFFF !important;
  transform:translateY(-3px) scale(1.025) !important;
  box-shadow:0 14px 30px rgba(0,105,184,.34),0 0 0 3px rgba(0,105,184,.18) !important}
@@ :is(${L},#speakers) a:is([class*="border-[#4eb9ff" i],[class*="border-[#18d4ff" i],[class*="bg-cyan/10" i]):not([class*="bg-[#18d4ff]" i]):active{
  transform:translateY(-1px) scale(.99) !important}

/* Diagonal glass light-sheen sweep + arrow glide across ALL pill CTAs */
@@ :is(${ALL},header) :is(a,button)[class*="rounded-full"]::after{
  content:"";position:absolute;top:0;bottom:0;left:-120%;width:65%;
  background:linear-gradient(112deg,transparent 0%,rgba(255,255,255,.28) 50%,transparent 100%);
  transform:skewX(-20deg);transition:left .55s cubic-bezier(.22,1,.36,1);pointer-events:none}
@@ :is(${ALL},header) :is(a,button)[class*="rounded-full"]:hover::after{left:145%}
@@ :is(${ALL},header) :is(a,button)[class*="rounded-full"] :is(svg,span){transition:transform .24s cubic-bezier(.22,1,.36,1)}
@@ :is(${ALL},header) :is(a,button)[class*="rounded-full"]:hover > :is(svg,span:last-child){transform:translateX(4px)}

/* ───────────── header (frosted Cloud White pill) ───────────── */
html body @@ header > nav{background:rgba(247,249,252,.96) !important;border:1px solid rgba(0,105,184,.22) !important;box-shadow:0 12px 32px rgba(8,18,30,.14) !important;backdrop-filter:blur(18px)}
html body @@ header :is(a,button,span,div,p,i){color:#08121E}
html body @@ header [class*="text-white/58"]{color:#08121E !important;font-weight:600 !important}
html body @@ header [class*="text-white/58"] :is(a,span){font-weight:600 !important}
html body @@ header a:not([class*="bg-[#c0f43c" i]):not([href*="sponsorship-enquiry"]){transition:color .2s ease,transform .2s ease}
html body @@ header a:not([class*="bg-[#c0f43c" i]):not([href*="sponsorship-enquiry"]):hover,html body @@ header [class*="hover:text-white"]:hover{color:#0069B8 !important}
html body @@ header [class*="text-white"]:not([class*="text-white/58"]):not([href*="sponsorship-enquiry"]){color:#08121E !important}
html body @@ header [class*="bg-[#c0f43c" i],html body @@ header a[href*="sponsorship-enquiry"]{background:#F15928 !important;color:#FFFFFF !important;font-family:var(--font-pjs) !important}
html body @@ header [class*="bg-[#c0f43c" i]:hover,html body @@ header a[href*="sponsorship-enquiry"]:hover{background:#D94B1E !important;color:#FFFFFF !important}
html body @@ header span[class*="h-[2px]"]{background:#F15928 !important}
html body @@ header a[class*="text-[#c0f43c" i]:not([class*="bg-[#c0f43c" i]){color:#F15928 !important}
html body @@ header [class*="bg-white"][class*="h-0.5"]{background:#08121E !important}
html body @@ header [class*="bg-[#04080f]/80"],html body @@ header [class*="bg-[#04080f]/96"]{background:#F7F9FC !important}
html body @@ header [class*="bg-white/5"]{background:#FFFFFF !important}
html body @@ header [class*="border-white/"],html body @@ header [class*="border-[#7eacd9"]{border-color:rgba(0,105,184,.22) !important}
html body @@ header [class*="top-[75px]"]{background:rgba(247,249,252,.98) !important;border-color:rgba(0,105,184,.22) !important}
@@ header a[aria-label] ,@@ header a:has(> img[src*="wais-27-banking"]),@@ header a:has(> img[src*="logo-dark"]){width:176px !important;height:56px !important}
@@ header img{filter:none !important;box-shadow:none !important;object-fit:contain !important;object-position:left center !important;min-width:64px}
@@ img[src*="wais-27-banking"]{opacity:0}
@@ img[src*="test-brand/logo-"]{opacity:1}
@@ #footer img[src*="logo-white"]{width:220px !important;max-width:100% !important;height:auto !important;object-position:left center !important}

/* ───────────── hero ───────────── */
@@ #home > div[style*="linear-gradient"]{background:linear-gradient(180deg,rgba(8,18,30,.48) 0%,rgba(8,18,30,.78) 68%,#08121E 100%) !important}
@@ #home video{filter:none !important}
@@ #home h1{color:#FFFFFF !important}
@@ #home h1 .bg-clip-text{color:#009EAD !important;-webkit-text-fill-color:#009EAD !important}
@@ #home p:not(.font-mono){color:#F7F9FC !important}
@@ #home [class*="grid-cols-[max-content"] > div{background:transparent !important;border:0 !important;border-radius:0 !important;padding:0 !important;box-shadow:none !important;text-align:center !important}
@@ #home [class*="grid-cols-[max-content"] > div:nth-child(-n+2){padding-right:24px !important;border-right:1px solid rgba(255,255,255,.28) !important}
@media (max-width:980px){
  @@ #home [class*="grid-cols-[max-content"] > div:nth-child(-n+2){padding-right:0 !important;border-right:0 !important}
  @@ #home [class*="grid-cols-[max-content"] > div:nth-child(-n+2){padding-bottom:14px !important;border-bottom:1px solid rgba(255,255,255,.22) !important}
}
@@ #home [class*="grid-cols-[max-content"] > div strong,@@ #home [class*="grid-cols-[max-content"] > div strong *{font-family:var(--font-sg) !important;font-weight:600 !important}
@@ #home [class*="border-t"][class*="border-white"]{border-color:rgba(0,105,184,.48) !important}

/* ───────────── #attend stats ───────────── */
@@ #attend article > span[class*="top-[18px]"]{display:none !important}
@@ #attend :is(${pre("text-[#c0f43c")},${pre("text-cyan")}){color:#0069B8 !important}
@@ #attend :is([class*="text-[3"],[class*="text-[4"],[class*="text-[5"],[class*="text-[6"]){font-family:var(--font-sg) !important;color:#0069B8 !important}
@@ #attend :has(> img[src*="/icons/stats/"]){position:relative;display:grid !important;place-items:center;width:48px !important;height:48px !important;border-radius:9999px !important;background:#0069B8 !important;border:0 !important;animation:bb-float 3.4s ease-in-out infinite;transition:background-color .25s,transform .25s}
@@ #attend :has(> img[src*="/icons/stats/"])::after{content:"";position:absolute;inset:0;border-radius:9999px;border:2px solid #009EAD;animation:bb-ring 2.8s ease-out infinite;pointer-events:none}
@@ #attend img[src*="/icons/stats/"]{width:24px !important;height:24px !important;filter:brightness(0) invert(1) !important;animation:bb-breathe 3.4s ease-in-out infinite}
@@ #attend :has(> img[src*="/icons/stats/"]):hover{background:#F15928 !important;transform:scale(1.08)}
@@ #attend article:nth-child(2) :has(> img[src*="/icons/stats/"]),@@ #attend article:nth-child(2) :has(> img[src*="/icons/stats/"])::after{animation-delay:.65s}
@@ #attend article:nth-child(3) :has(> img[src*="/icons/stats/"]),@@ #attend article:nth-child(3) :has(> img[src*="/icons/stats/"])::after{animation-delay:1.3s}
@@ #attend article:nth-child(4) :has(> img[src*="/icons/stats/"]),@@ #attend article:nth-child(4) :has(> img[src*="/icons/stats/"])::after{animation-delay:1.95s}

/* ───────────── #ecosystem ───────────── */
@@ #ecosystem :is([class*="bg-[#071320"],[class*="bg-[#132638"]){background:#08121E !important}
@@ #ecosystem [class*="rounded-full"][class*="h-"][class*="bg-"]:not([class*="bg-[#08"]){background-color:#009EAD !important;box-shadow:none !important}
@@ #ecosystem svg.w-9{animation:bb-float 3.8s ease-in-out infinite;color:#009EAD !important;width:26px !important;height:26px !important}
@@ #ecosystem :has(> svg.w-9){width:48px;height:48px;border-radius:12px;background:rgba(0,105,184,.22) !important;border:1px solid rgba(0,105,184,.55) !important}
@@ #ecosystem .group:hover :has(> svg.w-9){background:#0069B8 !important;border-color:#009EAD !important}
@@ #ecosystem .group:hover svg.w-9{color:#FFFFFF !important}
@@ #ecosystem svg [class*="fill-[#071320"]{fill:#0D1B2E !important}
@@ #ecosystem .group:hover svg [class*="fill-[#071320"]{fill:#0069B8 !important}
/* benchmark cards: Midnight raised panel, white values, teal used only for bars/icons */
@@ #ecosystem .group{background:#0D1B2E !important;background-image:none !important;border:1px solid rgba(0,105,184,.52) !important;box-shadow:none !important}
@@ #ecosystem .group:hover{border-color:#009EAD !important}
@@ #ecosystem strong[class*="tabular-nums"]{color:#FFFFFF !important;filter:none !important}
@@ #ecosystem [class*="text-[#79acc7"]{color:rgba(247,249,252,.78) !important}
@@ #ecosystem .group [class*="font-bold"][class*="tabular-nums"]{color:#FFFFFF !important}
@@ #ecosystem .group [class*="h-[7px]"]{background:#08121E !important;border:0 !important}
@@ #ecosystem .group [class*="h-[7px]"] > div{background:#009EAD !important;background-image:none !important;box-shadow:none !important;border:0 !important}
/* benchmark 3D illustrations + animated SVG overlays strictly in 80/15/05 brand palette */
@@ #ecosystem img[src*="/images/benchmarks/benchmark-"]{opacity:0}
@@ #ecosystem img[src*="test-brand/benchmark-"]{opacity:1;filter:none !important;animation:bb-bench-glow 3.4s ease-in-out infinite !important}
@@ #ecosystem svg [stroke="#2fd5f6" i]{stroke:#0069B8 !important}
@@ #ecosystem svg :is([stroke="#c0f43c" i],[stroke="#e5ff85" i],[stroke="#e4ff82" i]){stroke:#009EAD !important}
@@ #ecosystem svg [fill="#2fd5f6" i]{fill:#0069B8 !important}
@@ #ecosystem svg [fill="#e5ff85" i]{fill:#009EAD !important}
@@ #ecosystem svg [fill="#c0f43c" i]{fill:#F15928 !important}
/* mandate callout: Sovereign Blue card, Teal border, Pulse Orange side bar */
@@ #ecosystem [class*="border-[#C0F43C]/35"][class*="overflow-hidden"]{background:#0069B8 !important;background-image:none !important;border:1.5px solid #009EAD !important}
@@ #ecosystem [class*="border-[#C0F43C]/35"][class*="overflow-hidden"] :is(p,span,strong,h3,h4){color:#FFFFFF !important}
@@ #ecosystem [class*="border-[#C0F43C]/35"][class*="overflow-hidden"] [class*="w-1.5"]{background:#F15928 !important;background-image:none !important;border:0 !important}
@@ #ecosystem [class*="border-[#C0F43C]/35"][class*="overflow-hidden"] [class*="w-14"]{background:rgba(255,255,255,.16) !important;border-color:rgba(255,255,255,.5) !important;color:#FFFFFF !important}

/* ───────────── #agenda ───────────── */
@@ #agenda .agenda-pillar-card{overflow:hidden !important;padding:0 !important;border:1px solid rgba(0,105,184,.22) !important;border-radius:20px !important;transition:transform .3s cubic-bezier(.22,1,.36,1),border-color .25s ease,box-shadow .3s ease !important}
@@ #agenda .agenda-pillar-card:hover{border-color:#0069B8 !important;transform:translateY(-4px) !important;box-shadow:0 20px 44px rgba(0,105,184,.16) !important}
@@ #agenda .agenda-pillar-media{background:#08121E !important;border-bottom:1px solid rgba(0,105,184,.18) !important}
@@ #agenda .agenda-pillar-media :is(video,img){filter:none !important;opacity:1 !important;display:block}
@@ #agenda .agenda-play-badge{background:rgba(8,18,30,.72) !important;color:#FFFFFF !important;border:1px solid rgba(255,255,255,.38) !important;backdrop-filter:blur(6px)}
@@ #agenda .agenda-pillar-body h3{color:#08121E !important;transition:color .22s ease}
@@ #agenda .agenda-pillar-card:hover .agenda-pillar-body h3{color:#0069B8 !important}

/* ───────────── #speakers (Sovereign Blue + brand-book social-card style) ───────────── */
@@ #speakers .speaker-grid > *{background:#08121E !important;border:1.5px solid #009EAD !important;border-top-width:1.5px !important;border-radius:16px;overflow:hidden;box-shadow:none !important;transition:border-color .25s,transform .25s}
@@ #speakers .speaker-grid > *:hover{border-color:#F15928 !important;transform:translateY(-4px)}
@@ #speakers .speaker-grid > * :is(h3,h4){font-family:var(--font-sg) !important;font-weight:600 !important;font-size:20px !important;line-height:1.22 !important;color:#FFFFFF !important}
@@ #speakers .speaker-grid > * :is(p,span:not(.font-mono)){font-size:13.5px !important;line-height:1.38 !important;color:rgba(247,249,252,.84) !important}
@@ #speakers .speaker-grid > * span.font-mono{font-family:var(--font-pjs) !important;font-size:12.5px !important;font-weight:600 !important;line-height:1.38 !important;letter-spacing:0 !important;text-transform:none !important;color:#009EAD !important}
@@ #speakers .speaker-grid > * span.font-mono .speaker-country{font-family:var(--font-pjs) !important;font-size:12.5px !important;font-weight:700 !important;color:#F15928 !important}
@@ #speakers .speaker-grid > * [class*="bg-gradient"]{background:linear-gradient(180deg,transparent,rgba(8,18,30,.92)) !important;border:0 !important;border-top-width:0 !important;box-shadow:none !important}
@@ #speakers .speaker-grid > * div.z-20{background:rgba(8,18,30,.96) !important;border:1.5px solid #F15928 !important;border-top-width:1.5px !important}
@@ #speakers .speaker-grid > * [class*="h-[2px]"],@@ #speakers .speaker-grid > * [class*="h-0.5"]{background:#009EAD !important;transition:width .25s,background-color .25s}
@@ #speakers .speaker-grid > *:hover [class*="h-[2px]"],@@ #speakers .speaker-grid > *:hover [class*="h-0.5"]{width:56px !important;background:#F15928 !important}
@@ #speakers :is(h2,h3){color:#FFFFFF !important}
@@ #speakers [data-aos="zoom-in-up"] :is(h3,p,span,strong):not(a *){color:#08121E !important}
@@ #speakers [data-aos="zoom-in-up"] p{color:#334155 !important}

/* ───────────── #networking ───────────── */
@@ #networking span[class*="text-[54px]"]{display:none !important}
@@ #networking [class*="sticky"]{top:0 !important;width:100% !important;height:100dvh !important;border-radius:0 !important;background:#08121E !important;background-image:none !important;border-color:#0069B8 !important;box-shadow:none !important}
@@ :is(${L},${B}) [class*="inset-0"][class*="bg-gradient-to-"]{background:linear-gradient(to top,rgba(8,18,30,.9),rgba(8,18,30,.35),transparent) !important;border:0 !important;box-shadow:none !important}
@@ :is(${L},${B}) [class*="inset-0"]:not([class*="bg-gradient-to-"]):not([style]){background-color:transparent !important;box-shadow:none !important}
@@ #networking article :is(span,div)[class*="font-mono"]{color:#0069B8 !important;font-weight:700 !important}
@@ #networking :is([class*="from-[#00ceff"],[class*="from-cyan"]){background:#FFFFFF !important}
@@ #networking [class*="bg-[#020814]"],@@ #networking [class*="bg-[#020b1c]"]{background:#08121E !important}
@@ #networking [class*="bg-gradient-to-t"][class*="from-[#020814"]{background:linear-gradient(to top,rgba(8,18,30,.95),rgba(8,18,30,.45),transparent) !important;border:0 !important;box-shadow:none !important}
@@ #networking [class*="sticky"] :is(h3,h2,div,p){color:#FFFFFF}
@@ #networking :is(.group) :is(h4){color:#08121E !important}
@@ #networking :is(.group):hover :is(h4){color:#0069B8 !important}
@@ #networking [class*="max-w-[740px]"] :is(p){color:rgba(247,249,252,.9) !important}
@@ #networking [class*="max-w-[740px]"] .bg-clip-text{color:#009EAD !important;-webkit-text-fill-color:#009EAD !important}
@@ #networking :is([class*="rounded-[14px]"],[class*="rounded-[12px]"],[class*="rounded-xl"]):has(> img){position:relative;overflow:hidden;background:#0069B8 !important;border:0 !important}
@@ #networking :is([class*="rounded-[14px]"],[class*="rounded-[12px]"],[class*="rounded-xl"]):has(> img)::after{content:"";position:absolute;top:0;left:-60%;width:40%;height:100%;background:linear-gradient(115deg,transparent,rgba(255,255,255,.4),transparent);transform:skewX(-20deg);animation:bb-sweep 4.6s ease-in-out infinite}
@@ #networking :is([class*="rounded-[14px]"],[class*="rounded-[12px]"],[class*="rounded-xl"]):has(> img):hover{background:#F15928 !important;transform:scale(1.1) rotate(-4deg)}
@@ #networking :is([class*="rounded-[14px]"],[class*="rounded-[12px]"],[class*="rounded-xl"]) > img{filter:brightness(0) invert(1) !important}

/* ───────────── #partners ───────────── */
@@ #partners :is(img){filter:none}
@@ #partners :is(div):has(> img):not([class*="grid"]){background:#FFFFFF !important;border:1px solid rgba(0,105,184,.18) !important}

/* ───────────── #faq ───────────── */
@@ #faq :is([class*="rounded-[24px]"]){background:#FFFFFF !important;border:1px solid rgba(0,105,184,.22) !important;box-shadow:0 12px 32px rgba(8,18,30,.06) !important}
@@ #faq details{border-bottom-color:rgba(0,105,184,.18) !important}
@@ #faq summary{grid-template-columns:minmax(0,1fr) 32px !important;padding-inline:24px !important;margin-inline:0 !important}
@@ #faq summary > span:first-child{display:none !important}
@@ #faq summary i{color:#0069B8 !important}
@@ #faq summary strong{color:#08121E !important;font-family:var(--font-pjs) !important;margin:0 !important;padding:0 !important;transition:color .2s ease}
@@ #faq summary:hover strong,@@ #faq details[open] summary strong{color:#0069B8 !important}
@@ #faq details p{color:#334155 !important;padding-inline:24px 56px !important;margin-inline:0 !important;margin-left:0 !important;margin-right:0 !important;max-width:none !important}
@media (max-width:640px){
  @@ #faq summary{grid-template-columns:minmax(0,1fr) 24px !important;padding-inline:12px !important}
  @@ #faq details p{padding-inline:12px 36px !important}
}

/* ───────────── icon micro-animations ───────────── */
@keyframes bb-float{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}
@keyframes bb-bench-glow{0%,100%{filter:drop-shadow(0 0 0 rgba(0,158,173,0))}50%{filter:drop-shadow(0 6px 18px rgba(0,105,184,.32))}}
@keyframes bb-breathe{0%,100%{transform:scale(1)}50%{transform:scale(1.1)}}
@keyframes bb-ring{0%{transform:scale(1);opacity:.7}100%{transform:scale(1.7);opacity:0}}
@keyframes bb-sweep{0%{left:-60%}55%,100%{left:140%}}
@keyframes tp-bar{from{transform:scaleX(0)}to{transform:scaleX(1)}}

/* ───────────── preview-only testimonials ───────────── */
@@ .tp-section{position:relative;padding:112px 0;background:#08121E;color:#FFFFFF}
@@ .tp-wrap{width:min(1172px,calc(100% - 48px));margin-inline:auto}
@@ .tp-head{display:flex;align-items:flex-end;justify-content:space-between;gap:24px;margin-bottom:40px}
@@ .tp-eyebrow{display:inline-flex;align-items:center;gap:8px;margin-bottom:16px;padding:4px 16px;border-radius:9999px;border:1px solid rgba(0,105,184,.52);background:rgba(0,105,184,.18);font-size:12px;line-height:160%;letter-spacing:.08em;text-transform:uppercase;color:#F7F9FC}
@@ .tp-eyebrow i{width:8px;height:8px;border-radius:9999px;background:#F15928}
@@ .tp-head h2{margin:0;color:#FFFFFF}
@@ .tp-hl{color:#009EAD;-webkit-text-fill-color:#009EAD}
@@ .tp-ctrl{display:flex;align-items:center;gap:12px;font-size:12px}
@@ .tp-btn{display:grid;place-items:center;width:40px;height:40px;border-radius:9999px;border:1px solid #0069B8;background:#0D1B2E;color:#FFFFFF;cursor:pointer;transition:background-color .2s,border-color .2s,transform .2s}
@@ .tp-btn:hover{background:#F15928;border-color:#F15928;transform:translateY(-2px)}
@@ .tp-btn svg{width:16px;height:16px}
@@ .tp-count{padding:6px 16px;border-radius:9999px;border:1px solid rgba(0,105,184,.52);background:#0D1B2E;letter-spacing:.08em}
@@ .tp-count b{color:#009EAD;font-weight:700}
@@ .tp-card{position:relative;overflow:hidden;border-radius:24px;border:1px solid rgba(0,105,184,.55);background:#0D1B2E;padding:44px 44px 52px 52px}
@@ .tp-card::before{content:"";position:absolute;left:0;top:0;bottom:0;width:4px;background:#F15928}
@@ .tp-grid{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:24px;align-items:center}
@@ .tp-quote{grid-column:span 8}
@@ .tp-partner{grid-column:span 4;padding:24px;border-radius:16px;background:#08121E;border:1px solid rgba(0,105,184,.52)}
@@ .tp-meta{display:flex;flex-wrap:wrap;align-items:center;gap:12px;margin-bottom:24px}
@@ .tp-qico{display:grid;place-items:center;width:40px;height:40px;border-radius:12px;background:rgba(0,105,184,.22);color:#009EAD;animation:bb-float 3.8s ease-in-out infinite;transition:background-color .25s,color .25s}
@@ .tp-qico:hover{background:#0069B8;color:#FFFFFF}
@@ .tp-qico svg{width:20px;height:20px}
@@ .tp-tag{padding:4px 12px;border-radius:9999px;border:1px solid rgba(0,105,184,.52);font-size:12px;line-height:160%;color:#F7F9FC}
@@ .tp-card blockquote{margin:0;color:#FFFFFF;font-weight:500;font-size:clamp(19px,2vw,23px);line-height:150%}
@@ .tp-verified{display:inline-block;margin-bottom:20px;padding:4px 12px;border-radius:6px;border:1px solid rgba(0,158,173,.6);font-size:12px;line-height:160%;letter-spacing:.08em;text-transform:uppercase;color:#009EAD}
@@ .tp-name{display:block;font-family:var(--font-sg) !important;font-weight:600;font-size:26px;line-height:120%;color:#FFFFFF}
@@ .tp-cat{display:block;margin-top:8px;font-size:13px;color:#009EAD}
@@ .tp-bar{position:absolute;left:0;right:0;bottom:0;height:3px;background:#009EAD;transform-origin:left;animation:tp-bar 5.5s linear forwards}
@@ .tp-strip{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:24px;margin-top:24px}
@@ .tp-pick{position:relative;overflow:hidden;text-align:left;padding:20px;border-radius:16px;border:1.5px solid rgba(0,105,184,.52);background:#0D1B2E;color:#FFFFFF;cursor:pointer;transition:transform .25s,border-color .25s}
@@ .tp-pick:hover{transform:translateY(-4px);border-color:#009EAD}
@@ .tp-pick.is-active{transform:translateY(-4px);border-color:#F15928}
@@ .tp-pick.is-active::after{content:"";position:absolute;left:0;right:0;bottom:0;height:3px;background:#F15928}
@@ .tp-pick small{display:block;margin-bottom:8px;font-size:12px;line-height:160%;letter-spacing:.08em;text-transform:uppercase;color:rgba(247,249,252,.7)}
@@ .tp-pick.is-active small{color:#F15928}
@@ .tp-pick strong{display:block;font-family:var(--font-sg) !important;font-weight:600;font-size:18px;color:#FFFFFF}
@@ .tp-pick span{display:block;margin-top:4px;font-size:13px;line-height:140%;color:rgba(247,249,252,.78)}
@@ .tp-video-wrap{display:flex;justify-content:center;margin-top:56px;perspective:1300px}
@@ .tp-video{position:relative;width:min(780px,100%);border-radius:20px;border:1px solid rgba(0,105,184,.52);background:#0D1B2E;padding:0 0 12px;transform-origin:center top;will-change:transform,opacity}
@@ .tp-vbar{display:flex;align-items:center;gap:8px;padding:12px 16px;font-size:12px;line-height:160%;color:rgba(247,249,252,.8)}
@@ .tp-vbar i{width:10px;height:10px;border-radius:9999px}
@@ .tp-vbar i:nth-child(1){background:#F15928}
@@ .tp-vbar i:nth-child(2){background:#009EAD}
@@ .tp-vbar i:nth-child(3){background:#0069B8}
@@ .tp-vbar span{margin-left:8px}
@@ .tp-frame{position:relative;margin:0 12px;aspect-ratio:16/9;border-radius:12px;overflow:hidden;background:#08121E}
@@ .tp-frame iframe{position:absolute;inset:0;width:100%;height:100%;border:0}
@@ .tp-corner{position:absolute;width:28px;height:28px;pointer-events:none;opacity:0;transition:transform .7s ease,opacity .7s ease}
@@ .tp-corner.tl{top:-6px;left:-6px;border-top:3px solid #0069B8;border-left:3px solid #0069B8;transform:translate(-14px,-14px)}
@@ .tp-corner.tr{top:-6px;right:-6px;border-top:3px solid #0069B8;border-right:3px solid #0069B8;transform:translate(14px,-14px)}
@@ .tp-corner.bl{bottom:-6px;left:-6px;border-bottom:3px solid #009EAD;border-left:3px solid #009EAD;transform:translate(-14px,14px)}
@@ .tp-corner.br{bottom:-6px;right:-6px;border-bottom:3px solid #009EAD;border-right:3px solid #009EAD;transform:translate(14px,14px)}
@@ .tp-video.is-in .tp-corner{opacity:1;transform:none}
@media (max-width:980px){
  @@ .tp-head{flex-direction:column;align-items:center;text-align:center}
  @@ .tp-quote,@@ .tp-partner{grid-column:span 12}
  @@ .tp-strip{grid-template-columns:repeat(2,minmax(0,1fr))}
  @@ .tp-card{padding:32px 24px 40px 32px}
}
@media (max-width:640px){
  @@ .tp-wrap{width:calc(100% - 32px)}
  @@ .tp-section{padding:72px 0}
  @@ .tp-strip{grid-template-columns:minmax(0,1fr)}
}

@media (prefers-reduced-motion: reduce){
  @@ *,@@ *::before,@@ *::after{animation:none !important;transition:none !important}
  @@ .tp-video{transform:none !important;opacity:1 !important}
  @@ .tp-corner{opacity:1 !important;transform:none !important}
  @@ .tp-bar{transform:scaleX(1)}
  @@ .bb-vortex-cursor{display:none !important}
}

/* ───────────── signature dotted-vortex pointing cursor (from logo "i", keeps native default cursor elsewhere) ───────────── */
@layer theme {
  @@[data-vortex-cursor="on"] :is(a,button,summary,[role="button"],.agenda-pillar-card,.tp-pick,.speaker-grid > *,label[for],[tabindex]:not([tabindex="-1"]),[class*="cursor-pointer"]),
  @@[data-vortex-cursor="on"] :is(a,button,summary,[role="button"],.agenda-pillar-card,.tp-pick,.speaker-grid > *,label[for],[tabindex]:not([tabindex="-1"]),[class*="cursor-pointer"]) *{cursor:none !important}
  @@[data-vortex-cursor="on"] :is(input,textarea,select,option,[contenteditable="true"],iframe){cursor:auto !important}
  @@[data-vortex-cursor="on"] :is(input[type="text"],input[type="email"],input[type="search"],input[type="tel"],input[type="url"],input[type="number"],textarea){cursor:text !important}
}
@keyframes bb-vortex-spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
@@ .bb-vortex-cursor{
  position:fixed;top:0;left:0;width:44px;height:44px;margin:-22px 0 0 -22px;
  pointer-events:none !important;z-index:9999;opacity:0;color:#009EAD;
  will-change:transform,opacity;transition:opacity .14s ease,color .18s ease}
@@ .bb-vortex-cursor[data-visible="1"][data-pointing="1"]{opacity:1}
@@ .bb-vortex-cursor[data-hidden="1"]{opacity:0 !important}
@@ .bb-vortex-cursor[data-tone="blue"],@@ .bb-vortex-cursor[data-tone="orange"]{color:#FFFFFF}
@@ .bb-vortex-svg{
  display:block;width:100%;height:100%;overflow:visible;
  transform:scale(.75);transform-origin:50% 50%;
  filter:drop-shadow(0 0 2px rgba(8,18,30,.52)) drop-shadow(0 0 1px rgba(255,255,255,.35));
  transition:transform .2s cubic-bezier(.22,1,.36,1)}
@@ .bb-vortex-cursor[data-pointing="1"] .bb-vortex-svg{transform:scale(1)}
@@ .bb-vortex-cursor[data-pointing="1"][data-down="1"] .bb-vortex-svg{transform:scale(.8)}
@@ .bb-vortex-spiral{transform-origin:297.81px 127.49px;animation:bb-vortex-spin 4.6s linear infinite}
@@ .bb-vortex-core-ring{fill:none;stroke:rgba(255,255,255,.92);stroke-width:3;transition:stroke .18s ease}
@@ .bb-vortex-core{fill:#F15928;transition:fill .18s ease}
@@ .bb-vortex-cursor[data-tone="orange"] .bb-vortex-core{fill:#08121E}
@media (pointer:coarse),(hover:none){@@ .bb-vortex-cursor{display:none !important}}
`;

export function Ai2047BrandBookV1System() {
  const out = css.replaceAll("@@", ROOT);
  return <style dangerouslySetInnerHTML={{ __html: out }} />;
}
