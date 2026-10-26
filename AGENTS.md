# World AI Show | AI in Banking and Financial Services | Dubai 2027

> **Start here:** read `HANDOFF.md` in full before changing or deploying anything. This file = standing conventions; `HANDOFF.md` = what is true right now.

## Project

- **Event Title:** World AI Show | AI in Banking and Financial Services | Dubai 2027
- **Date & Venue:** 24 March 2027 · DIFC District, Dubai, UAE · 1-Day Executive Decision Forum (Day 1 of the March Dubai Cluster)
- **Live URL:** https://worldaishow.com/banking/
- **Stack:** Next.js 16 static export (`output: "export"`, `basePath: "/banking"`, `trailingSlash: true`), React 19, Tailwind 4.

## Build & deploy

- Build/dev: `npm ci`, `npm run dev` (dev server serves under `/banking`), `npm run build` -> `out/`.
- Specification Reference: `brand/WAIS_Dubai_Banking_Specification.html`

## Conventions and gotchas

- `basePath` is `/banking`: every internal link/asset must start with `/banking/`.
- Official vector lockup SVGs (`viewBox="0 0 422.09 170.0"` with `DUBAI` pill and `BANKING & FINANCIAL SERVICES` subtitle) live at `public/logos/wais-27-banking_header.svg` and `public/logos/wais-27-banking_footer.svg`.
- HubSpot Portal ID: `2953901` (`region: "na1"`).
- UK English is enforced throughout (`programme`, `personalised`, `organisation`, `maximise`, `analyse`, `standardised`, `modernisation`) with `"Organised by Trescon"`.
- Never display sponsorship pricing on the public website.
