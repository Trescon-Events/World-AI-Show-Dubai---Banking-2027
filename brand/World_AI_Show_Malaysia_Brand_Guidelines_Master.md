# World AI Show — Malaysia 2027
## Master Brand Identity & Design System Guidelines
**Document Version:** 2.0 (2027 Edition Master Release)  
**Organization:** Trescon Global  
**Event Dates:** October 12 – 13, 2027  
**Venue / Location:** Kuala Lumpur, Malaysia  
**Live URL:** https://worldaishow.com/malaysia/  

---

## 1. Executive Summary & Brand Purpose

World AI Show (WAIS) Malaysia is Southeast Asia’s most influential gathering of enterprise C-level executives, government leaders, and sovereign AI architects. The brand identity reflects high-tech precision, sovereign compute ambition, and premium enterprise trust.

---

## 2. Master Color Palette

| Name | Role | HEX | RGB | HSL | Pantone | Contrast on Canvas |
|---|---|---|---|---|---|---|
| **Cyber Lime** | Primary CTA & Highlights | `#C0F43C` | 192, 244, 60 | 77°, 89%, 60% | 388 C | **16.2:1 (AAA)** |
| **Electric Cyan** | Secondary Accent & Gradient Stop | `#18D4FF` | 24, 212, 255 | 191°, 100%, 55% | 298 C | **12.8:1 (AAA)** |
| **Aqua Cyan** | Alternate Gradient Stop | `#00CEFF` | 0, 206, 255 | 192°, 100%, 50% | 2985 C | **12.1:1 (AAA)** |
| **Obsidian Canvas** | Global Base Background | `#020814` | 2, 8, 20 | 220°, 82%, 4% | Process Black | Ground Base |
| **Surface Navy** | Elevated Glass Cards & Modals | `#040D1F` | 4, 13, 31 | 218°, 77%, 7% | 533 C | 85-94% Opacity + Blur |
| **Compute Purple** | Tertiary Accent & Framing | `#926DFF` | 146, 109, 255 | 255°, 100%, 71% | 266 C | **6.8:1 (AAA Large)** |
| **Carbon Ink** | Text inside Cyber Lime Buttons | `#06111F` | 6, 17, 31 | 214°, 68%, 7% | — | **15.8:1 (AAA on Lime)** |

> **CRITICAL RULE:** Never place white text on Cyber Lime (`#C0F43C`). Always specify `color: #06111f !important` to satisfy WCAG 2.1 AAA contrast guidelines.

---

## 3. Official Logo Specifications

### 3.1 Header Lockup (`wais-27-malaysia_header.svg`)
- **Use Case:** Top navigation, hero sections, email headers, partner presentations.
- **ViewBox:** `0 0 929.91 456.88` (~2.03:1 ratio).
- **Minimum Digital Height:** `36px` on mobile; `48px - 58px` standard desktop.
- **Minimum Print Width:** `28mm` at 300 DPI.

### 3.2 Footer Lockup (`wais-27-malaysia_footer.svg`)
- **Use Case:** Page footers, stage backdrops, closing slides.
- **Features:** Unique `#C0F43C` Cyber Lime fill on the "MALAYSIA" text paths for regional emphasis.

### 3.3 Navigation Emblem (`Nav-icon.svg`)
- **Use Case:** Floating sticky nav pills, mobile navigation icons, web app favicons.

---

## 4. Clearspace & Exclusion Zone

- **Exclusion Margin (1X):** Defined by the height of the core "AI" letterform block in the mark.
- **Rule:** No secondary sponsor logo, text element, image boundary, or dividing rule may enter the 1X clearspace perimeter.
- **Distortion Prohibited:** Never stretch, compress, rotate, or alter path fills outside the approved dual-mode specifications.

---

## 5. Button Architecture

### Tier 1: Primary Action (Cyber Lime Pill)
```css
.btn-wais-primary {
  background-color: #C0F43C;
  color: #06111F !important;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 850;
  font-size: 14.5px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  border-radius: 9999px;
  padding: 14px 30px;
  box-shadow: 0 0 24px rgba(192, 244, 60, 0.25);
  transition: all 200ms cubic-bezier(0.16, 1, 0.3, 1);
}
.btn-wais-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 34px rgba(192, 244, 60, 0.45);
  background-color: #cbff44;
}
```

### Tier 2: Secondary / Ghost (Obsidian Glass Outline)
```css
.btn-wais-outline {
  background: rgba(3, 10, 24, 0.4);
  color: #FFFFFF !important;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 9999px;
  padding: 14px 30px;
  transition: all 200ms ease;
}
.btn-wais-outline:hover {
  border-color: #18D4FF;
  color: #18D4FF !important;
  background: rgba(24, 212, 255, 0.08);
  box-shadow: 0 0 20px rgba(24, 212, 255, 0.2);
}
```

---

## 6. Visual Motifs & Glassmorphism

### Glassmorphic Card Token (Figma Spec)
```css
.glass-card {
  background: linear-gradient(125.2deg, rgba(0, 206, 255, 0.064) 0%, rgba(192, 244, 60, 0.012) 100%), rgba(4, 14, 33, 0.85);
  border: 1px solid rgba(192, 244, 60, 0.30);
  box-shadow: 0 0 40px rgba(192, 244, 60, 0.12), 0 24px 64px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(24px);
  border-radius: 28px;
  position: relative;
}
/* Figma Top Border Highlight Accent */
.glass-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 1px;
  background: rgba(46, 60, 77, 0.55);
}
```

### WAIS Dual-Gradient Signature
```css
.gradient-text-signature {
  background: linear-gradient(90deg, #00CEFF 0%, #C0F43C 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

---

## 7. Typography Scale

- **Display & Headings:** `Space Grotesk` (weights: 500, 700, 850)
- **Technical & Eyebrows:** `JetBrains Mono` (weights: 600, 700, uppercase, tracking: 0.25em)
- **Body & Prose:** `Inter` / `Space Grotesk` (weights: 400, 500)

| Level | Size | Weight | Tracking | Purpose |
|---|---|---|---|---|
| **Display Hero** | 72px / clamp(44px, 6vw, 76px) | 850 (Black) | -2px | Hero Header |
| **Heading 1** | 48px / clamp(36px, 4.5vw, 54px) | 850 | -1.5px | Major Section Titles |
| **Heading 2** | 32px | 800 | -1px | Card Headers & Subsections |
| **Heading 3** | 22px | 700 | Normal | Modal Titles & Speaker Names |
| **Body Large** | 18px – 20px | 400 – 500 | Normal | Section Lead Paragraphs |
| **Body Regular** | 15px – 16px | 400 | Normal | Descriptions & Paragraphs |
| **Mono Eyebrow**| 11px | 700 (Mono) | 0.25em | Pill Tags, Category Labels |

---

## 8. Brand Governance (Do's & Don'ts)

### DO:
- Maintain dark obsidian (`#020814`) as the primary ground for all digital touchpoints.
- Always use high-contrast dark ink (`#06111F`) on Cyber Lime interactive pills.
- Maintain a minimum of 1X clearspace around all official vector marks.
- Preserve the 2.03:1 aspect ratio when placing the master header logo.

### DON'T:
- Never place white text on Cyber Lime buttons.
- Never skew, stretch, or alter the vector lockups.
- Never add arbitrary uncalibrated gradients to the logo paths.
- Never use low-resolution raster versions when SVG vectors are available.

---
*World AI Show Malaysia 2027 • Produced by Trescon Global*
