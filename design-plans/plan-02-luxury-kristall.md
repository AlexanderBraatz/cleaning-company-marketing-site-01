# Plan 02 — "Kristallglanz" Luxury Premium

## Design Philosophy

What if AK Crystal Clean sold *the experience of perfection* the same way a 5-star hotel sells cleanliness? This direction treats the brand as a premium service with near-luxury positioning. The name "Crystal Clean" gets taken literally — the design uses light refraction, sparkle moments, deep rich backgrounds, and generous breathing room to make visitors feel they are buying something elevated, not just a cleaning service.

**Key emotional target:** "This is the best money I'll spend. These people are exceptional."

Inspiration: high-end hospitality brands, Dyson product pages, luxury property management sites.

---

## Color System

| Role | Value | Notes |
|------|-------|-------|
| Background deep | `#0D0B12` | Near-black with purple undertone |
| Background mid | `#1C1726` | Dark purple-grey for section alternation |
| Background light | `#FAF8FF` | Very pale lavender-white for contrast sections |
| Accent light | `#EDC8FF` | Brand mauve — primary accent |
| Accent bright | `#D4A8FF` | Slightly more saturated — for hover states / sparkles |
| Gold | `#E8D5A3` | Warm gold for premium moments (star ratings, badges) |
| Text on dark | `#FAF8FF` | Near-white |
| Text on light | `#1C1726` | Deep purple-black |

**Effect:** Crystal sparkle — subtle CSS-animated scattered dots (opacity 0–0.6, staggered) that appear on dark sections like light caught on glass. Not gimmicky — just 4–6 dots, very subtle.

---

## Typography

- **Headlines:** Large, airy, slightly extended tracking on key words. Mix uppercase and title case.
- **Display feature word:** The word "Kristall" or "Klar" isolated in a larger weight with a subtle gradient from mauve-light to white.
- **Body:** Light weight (300), generous line-height. Feels spacious and premium.
- **Font:** Sabon for all display (serif elegance) — body stays with a light humanist sans.
- **Size:** Go big — 100px+ hero headline on desktop.

---

## Layout Logic

**Grid:** 12-column with wider-than-standard outer margins (8% each side). Sections breathe. No cramped stacking.

**Motion principle:** Fade-up on scroll for every section. Slow, deliberate (600ms ease-out). Nothing bounces or slides fast — premium UX moves slowly and with intention.

**Section rhythm:**
1. Navbar (transparent → frosted glass on scroll)
2. Hero — cinematic full-screen
3. Services — dark card grid
4. Crystal moments — a "why quality matters" interstitial
5. Proof — gallery as immersive lightbox grid
6. Stats — number showcase on dark
7. Team — premium portrait grid
8. Testimonials — carousel with star ratings
9. Contact — split section, dark left + light form right
10. Footer — dark with logo featured

---

## Section-by-Section Breakdown

### Navbar
- **Transparent** over hero, dark logo variant
- On scroll: `backdrop-filter: blur(20px)` frosted glass with subtle border-bottom in mauve at 20% opacity
- Logo centered (or left), nav links spaced wide, CTA right: `Anfrage stellen` with mauve border + mauve text, fills on hover
- Ultra minimal — just 4 nav links maximum

### Hero
- Full-screen (`100dvh`) dark background (`#0D0B12`)
- **Background:** The `two-team-cleaning-window.jpg` photo, but very dark overlay (85% opacity black), so it reads as a texture rather than a photo — you can *feel* the image without it dominating
- **Crystal sparkle effect:** 5–7 small white/mauve animated dots, positioned randomly, pulsing opacity 0→0.4→0 on loop at different timings
- **Headline (centered):**
  ```
  GEBÄUDEREINIGUNG
  AUF HÖCHSTEM NIVEAU
  ```
  Top line: small caps, wide tracking, 18px, mauve color
  Bottom: 80–100px, Sabon, white, normal weight — let the serif do the luxury
- **Subtext:** 2 lines, 400 weight, pale lavender-white, centered, max-width 500px
- **CTA:** Single centered button — `Alles Klar Moment erleben` — full mauve fill, large padding, rounded-full (pill shape — the ONLY rounded element in this plan)
- **Scroll hint:** Small text + chevron-down at absolute bottom center, fades in after 2s
- **Video:** The team video appears here as a small floating card bottom-right — thumbnail with a crystal/sparkle play button icon. "Das haben die anderen nicht." — tooltip on hover.

### Services — Dark Card Grid
- Background: `#1C1726`
- Section label: `LEISTUNGEN` — small caps, wide tracking, mauve
- Headline: `Alles aus einer Hand.` — white, Sabon, large
- 3-column card grid (desktop), single column mobile
- Each card: dark-glass look — `rgba(255,255,255,0.04)` background, 1px mauve border at 30% opacity, inner glow on hover
- Card contents: Large service icon (custom SVG line icon), service name (white, bold), 1-line description (pale, 300 weight), arrow link
- Services shown: Fensterreinigung / Unterhaltsreinigung / Fassadenreinigung / Hausmeisterservice / Steinreinigung / Solarreinigung
- 6 cards in 3x2 grid

### Crystal Moments — Interstitial
- Full-width dark section with a large centered pullout quote
- Background: `#0D0B12` with a very subtle radial gradient glow (mauve, 5% opacity) behind the text
- Large quotation marks (mauve, decorative)
- Quote: *"Wir putzen nicht — wir reinigen."*
- Below: 3 horizontal feature bullets with thin mauve dividers between them:
  `Qualitätskontrolle durch Inhaber · 98% Kundenbindung · Schnelle Sondereinsätze`
- This section is purely typographic — no images, pure atmosphere

### Work Gallery — Immersive
- Light section (`#FAF8FF`) for contrast
- Headline: `Unsere Arbeit — sichtbare Ergebnisse.`
- **Masonry-style grid:** 5 images in an irregular grid (2 portrait + 3 landscape or similar)
- Each image on hover: slight scale (1.02) + a mauve color overlay that shows the service name + year
- Click to open full lightbox
- Below gallery: "Über 2.000 Projekte erfolgreich abgeschlossen."

### Stats — Number Showcase
- Dark section (`#1C1726`)
- 3 large stat blocks in a row, centered
- Each: huge number (96px, Sabon, white), a thin mauve horizontal rule below, label text (pale, 300 weight)
- `850+` / `98%` / `20+`
- Subtle: as the section enters viewport, numbers count up with a JS counter animation (0 → final value)

### Team — Premium Portrait Grid
- Light background (`#FAF8FF`)
- Headline: `Das Team hinter dem Glanz.`
- **2 featured portraits** (larger): Boss + one team lead — portrait-style crop, high contrast, mauve accent line on left edge
- **Below:** 4-column smaller photos — action shots (team jumping, arms up, working)
- Caption treatment: name in Sabon italic, role in small caps
- Family culture note: full-width text strip at bottom of section, centered, italic Sabon: *"Unsere Mitarbeiter sind unsere Familie — das spüren unsere Kunden."*

### Testimonials
- Dark section (`#0D0B12`)
- Star ratings in gold (`#E8D5A3`) — 5 stars
- Single large testimonial displayed at a time (carousel)
- Quote text: Sabon, 24–28px, white, italic
- Client name: small, mauve
- Navigation: thin left/right arrows, minimal
- Below carousel: logo strip "Unsere Kunden" → could be local business logos or just names if no logos available

### Contact — Split
- Left half: dark (`#1C1726`) — headline, subtext, trust signals
  - `Bereit für kristallklare Ergebnisse?`
  - "Wir melden uns innerhalb von 24 Stunden."
  - Small icons: ✓ Kostenlos · ✓ Unverbindlich · ✓ 24h Antwortzeit
- Right half: light (`#FAF8FF`) — clean form
  - Fields: Name, E-Mail, Telefon, Service (checkboxes)
  - Submit: `Anfrage senden` — dark fill with mauve text (inverse of usual)
  - No border radius on inputs — elegant sharp corners

### Footer
- Deep dark (`#0D0B12`)
- Logo featured prominently, larger than navbar version
- 3 columns: services list / service areas / contact info
- Very bottom: "Meisterbetrieb" badge + copyright
- Thin mauve top border on footer

---

## Key Design Decisions

- **Rounded pills:** Only the hero CTA button uses pill shape — signals "the premium moment." Everything else is sharp.
- **Sparkle effects:** CSS-only, performant, tasteful. 5 dots max. Not a particle system.
- **Video:** Present but not intrusive — floating thumbnail card in hero bottom-right corner, opens as modal lightbox on click.
- **Dark-first:** The site is predominantly dark — this is unusual for cleaning companies and immediately sets it apart from competitors who default to light/blue/white.
- **Sabon serif throughout headings** — preserves brand while elevating it. Serif = trust + premium.
- **No purple overload:** Mauve is an accent color only. More than 20% purple = discount brand. Less = premium.
- **German language and Meisterbetrieb badge** reinforce local expertise and regulatory credibility.

---

## Files to Create / Modify

```
app/
  page.tsx              ← replace all section components
  components/
    NavbarLuxury.tsx
    HeroLuxury.tsx
    ServicesLuxury.tsx
    InterstitialLuxury.tsx
    GalleryLuxury.tsx
    StatsLuxury.tsx
    TeamLuxury.tsx
    TestimonialLuxury.tsx
    ContactLuxury.tsx
    FooterLuxury.tsx
  globals.css           ← update color tokens for dark-first system
```
