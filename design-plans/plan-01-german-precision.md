# Plan 01 — "Alles Klar." German Precision

## Design Philosophy

Inspired by the visual language of premium German brands — Miele, Braun, Bosch. This direction leans into the idea that cleaning is a *craft* requiring expertise and discipline. The design is stark, typographic, high-contrast, and almost editorial. The brand tagline "Alles Klar!" becomes a design system element — precise, confident, no fluff.

**Key emotional target:** Trust through precision. Visitors should feel: "These people are serious professionals."

---

## Color System

| Role | Value | Notes |
|------|-------|-------|
| Background | `#F5F4F2` | Warm off-white, not clinical white |
| Foreground / Text | `#0C0A0D` | Near-black |
| Accent | `#edc8ff` (mauve) | Used sparingly — only on CTAs and key moments |
| Section Dark | `#1A1820` | Deep near-black sections for contrast breaks |
| Divider | `#242225` | Strong lines, rule marks |

No gradients. No soft blurs. Hard edges and clean lines throughout.

---

## Typography

- **Headlines:** Large, bold, tight leading. Mix of German & sentence case. Think 96px+ for hero.
- **Section labels:** Small caps, wide letter-spacing, mauve color. E.g. `DIENSTLEISTUNGEN` above each section heading.
- **Body:** 17–18px, generous line-height, never cramped.
- **Font:** Keep Sabon for display headings (brand continuity) + a clean grotesque (e.g. Inter or system-ui) for UI elements and body.

---

## Layout Logic

**Grid:** Strict 12-column, wide gutters. Sections alternate between left-heavy and right-heavy compositions. Not centered — *offset*.

**Section rhythm:**
1. Navbar (minimal, sticky, dark on scroll)
2. Hero — split layout
3. Services strip
4. "Why us" — stat-forward
5. Work proof (gallery / before-after)
6. Team — editorial grid
7. Testimonials — quote-forward, large pull quotes
8. Contact CTA — full-width dark section

---

## Section-by-Section Breakdown

### Navbar
- White background, thin 1px bottom border
- Logo left, nav links center, "Angebot anfragen" CTA button right (mauve fill)
- On scroll: becomes white with subtle shadow
- Mobile: hamburger with full-screen takeover, dark bg

### Hero
- **Split layout:** Left 55% — dark (`#1A1820`) background with text block. Right 45% — full-bleed photo of team cleaning window (`two-team-cleaning-window.jpg`).
- Headline over two lines:
  - Line 1 (small, mauve label): `GEBÄUDEREINIGUNG · MAIN-KINZIG`
  - Line 2 (giant, ~88px): `Alles Klar.`
  - Subline (~20px): `Professionelle Reinigung aus einer Hand — seit über 20 Jahren.`
- Two CTAs: `Jetzt anfragen` (mauve filled) + `Leistungen entdecken` (outlined white)
- Bottom-left: A small "scroll indicator" — a vertical line with a dot that animates down
- No video in hero — clean focus on message

### Services Strip (immediately below hero)
- Full-width dark section (`#1A1820`), horizontal scroll on mobile
- 4 service pills side by side: `Fensterreinigung · Unterhaltsreinigung · Fassadenreinigung · Hausmeisterservice`
- Each pill: small icon (line icon), service name, arrow → 
- On hover: mauve underline slides in from left
- This keeps the "Alles aus einer Hand" promise immediately visible

### "Warum AK Crystal Clean" — Stats-Forward
- Light background (`#F5F4F2`)
- Left column: heading `Zahlen sprechen für sich.` + body text about 98% retention, 20+ years, 850+ clients
- Right: 3 stat blocks, large typographic numbers with thin ruled lines between them
  - `850+` Zufriedene Kunden
  - `98%` Kundenbindungsrate
  - `20+` Jahre Erfahrung
- Each stat: number is ~80px bold, label is 14px small caps below

### Differentiators (4-up grid)
- White background
- 4 cards in a 2x2 grid (desktop), single column mobile
- Each card: thin top border in mauve, number label (01, 02...), short punchy headline, 2-line body
- Topics: Alles aus einer Hand / Qualitätskontrolle durch Inhaber / Schnelle Sondereinsätze / Umweltfreundliche Mittel
- No rounded corners — sharp, precise

### Work Gallery
- Full-width image grid, asymmetric: 1 large image left (40%), 4 smaller images right (2x2)
- Images from: machines, window cleaning, team working
- Thin white spacing between images (not gap — *border*)
- Caption bar at bottom of large image: service type label in small caps

### Team Section
- Light background
- Headline: `Das Team hinter dem Glanz.`
- Photo grid — not headshots, but *action photos*: team arms up, jumping, working
- Under each photo: name + role, clean and minimal
- Small mauve accent dot next to each name
- Bottom of section: 2-line family culture note — "Wir sind mehr als ein Unternehmen. Wir sind eine Familie."

### Testimonials
- Dark section (`#1A1820`)
- Large opening quotation mark in mauve (decorative, ~120px)
- One featured testimonial — full width, large text (~28px)
- Below: small avatar + name + stars
- Navigation arrows to cycle between testimonials (left/right)
- Clean, no cards — just the quote on dark background

### Contact CTA
- Full-width light section
- Headline: `Bereit für den Alles-Klar-Moment?`
- Subtext: short form intro
- Simple inline form: Name, E-Mail, Telefon + service checkboxes
- Submit button: `Anfrage senden` — full mauve
- Note below form: "Wir melden uns innerhalb von 24 Stunden."

### Footer
- Dark (`#0C0A0D`)
- Logo top-left, navigation links, service areas listed, contact info
- Bottom bar: copyright + "Meisterbetrieb" badge

---

## Key Design Decisions

- **No rounded corners** anywhere — precision and sharpness are the message
- **Mauve used max 3 times per screen** — it's a signal, not wallpaper
- **Real photos only** — the brief demands it; no stock imagery
- **Video:** Optional presence — embed as a small 16:9 card in the Work section with a play button. Not autoplay, not background. "Das ist was die anderen nicht haben."
- **German copy throughout** — no English UI labels, the language itself adds to the regional authenticity

---

## Files to Create / Modify

```
app/
  page.tsx              ← replace all section components
  components/
    NavbarPrecision.tsx
    HeroPrecision.tsx
    ServiceStripPrecision.tsx
    StatsPrecision.tsx
    DifferentiatorsPrecision.tsx
    GalleryPrecision.tsx
    TeamPrecision.tsx
    TestimonialPrecision.tsx
    ContactPrecision.tsx
    FooterPrecision.tsx
  globals.css           ← update color tokens
```
