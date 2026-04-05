# Plan 03 — "Grosse Familie" Warm & Human

## Design Philosophy

What if the website felt less like a corporate service provider and more like meeting a neighbor you already trust? This direction leans hard into what actually differentiates AK Crystal Clean from faceless cleaning chains: the *people*. Mehmet and his team are real, local, warm, and care deeply. The design makes the humans the heroes — not the machinery, not the logo, not abstract "quality."

**Key emotional target:** "I feel like I know these people. I can trust them in my building."

Inspiration: family-run hotel websites, regional Handwerksbetriebe (craft businesses), Yelp success stories that are personal and specific. NOT a corporate brand — an authentic local business that has earned its reputation.

---

## Color System

| Role | Value | Notes |
|------|-------|-------|
| Background warm | `#FDFAF6` | Warm cream — not clinical white |
| Background section alt | `#F5EFF8` | Pale lavender-cream — brand color washed way down |
| Accent | `#EDC8FF` | Brand mauve — used freely but not darkly |
| Accent deep | `#8A5FA0` | Deeper purple for text links, active states |
| Text primary | `#1A1520` | Near-black with warm purple undertone |
| Text secondary | `#6B5F72` | Muted purple-grey for subtitles, captions |
| Success / checkmark | `#5C9E6E` | Warm green — trust signals, checkboxes |
| Card border | `#E8D8F0` | Light mauve border for card outlines |

**Effect:** Warm, inviting. Think Sunday morning, not Monday corporation.

---

## Typography

- **Headlines:** Mixed case (not all-caps), slightly looser tracking, warm and readable. Sabon for big display moments — gives heritage feel.
- **Body:** Medium weight (400), generous line-height (1.75). This site is *readable* above all else.
- **Accent text:** Handwriting-style CSS italic for occasional personal phrases — e.g., a founder quote styled as if handwritten.
- **Size scale:** More conservative than plans 1 & 2 — the people and photos carry the weight, not oversized type.

---

## Layout Logic

**Grid:** Comfortable 12-column, generous margins, lots of whitespace between sections. Card-based — sections feel like distinct, clean cards rather than full-bleed blocks.

**Rounded corners:** Yes — generously. Cards at `border-radius: 16–24px`, inputs at `12px`, image containers at `12–16px`. Softness is a feature.

**Motion:** Gentle, subtle fade-up. Nothing dramatic. The site feels calm.

**Section rhythm:**
1. Navbar (warm white, friendly)
2. Hero — face-forward, team is the subject
3. Intro strip — "Why families and businesses trust us"
4. Services — approachable card grid with human framing
5. The People (Team) — this is a full section, not an afterthought
6. Real Work (Gallery) — proof without formality
7. Stats — human framing ("850 families trust us")
8. Testimonials — personal, with real names and context
9. Family culture section — unique to this plan
10. Contact — warm and simple
11. Footer — warm, local

---

## Section-by-Section Breakdown

### Navbar
- Warm white background (`#FDFAF6`), no border — just a subtle drop shadow
- Logo left, nav links right: `Leistungen · Über uns · Kontakt`
- CTA: `Anfrage stellen` — mauve fill, rounded pill, medium size — friendly, not aggressive
- On mobile: clean slide-out drawer (not full-screen takeover) — menu feels approachable

### Hero — Face Forward
- **No dark overlay.** The team IS the hero.
- Background: warm white (`#FDFAF6`)
- **Layout:** Two-column. Left: large team photo — not cleaning, but the *energetic team jumping/arms-up* photo (`team-arms-up-sunny.jpeg` or `team-jumping-cars-outside.jpeg`). Rounded corners on the image container (`24px`). Right: text block.
- Headline:
  ```
  Ihr Gebäude in
  den besten Händen.
  ```
  — Sabon, 64–72px, warm near-black, title case
- Subheadline: `Familie Akca und ihr Team reinigen für über 850 zufriedene Kunden im Main-Kinzig-Kreis und Wetterau.`
- CTAs: `Kostenlos anfragen` (mauve pill) + `Leistungen ansehen` (text link with arrow)
- Below CTAs: 3 small trust badges inline:
  - ✓ Meisterbetrieb
  - ✓ Seit über 20 Jahren
  - ✓ 98% Kundentreue
  Each in small text with a green checkmark icon — simple, credible

### Intro Strip
- Pale lavender-cream background (`#F5EFF8`)
- 4 horizontal value pills in a row (desktop) / 2x2 grid (mobile)
- Each pill: rounded card, white background, soft shadow, icon + label
  - 🏠 Alles aus einer Hand
  - 👨‍👩‍👧 Familiengeführt
  - ⚡ Schnelle Sondereinsätze
  - 🌿 Umweltfreundlich
- This establishes the differentiators at a glance before the user scrolls

### Services — Human Framing
- White background
- Headline: `Was wir für Sie tun.`
- **Subheadline (key framing):** *"Egal ob Privathaushalt oder Großunternehmen — wir haben die Lösung."*
- Service cards: rounded (`16px`), soft shadow, on hover shadow increases gently
- Each card:
  - Icon (warm, not clinical — slightly illustrated style)
  - Service name (bold, 18px)
  - 2-line description written in human terms: e.g., "Wir reinigen regelmäßig Ihre Räume, damit Sie sich um das Wesentliche kümmern können."
  - "Mehr erfahren →" link in mauve
- 3-column grid (6 cards), mobile single column
- Below grid: A horizontal callout bar — `"Nicht sicher welche Leistung Sie brauchen? Ruf uns an — wir helfen gerne."` + phone number. Mauve background, white text, full-width, gentle rounded corners.

### The People — Full Team Section
- This section comes BEFORE the work gallery — signal: people first, work second
- Warm cream background
- Headline: `Das Team, dem Sie vertrauen.` — Sabon
- **Featured: Mehmet + the two bosses** — larger card, portrait-style, with a short personal note
  - Photo: `team-boss-focus-arms-crossed.jpg` or `team-son-group-photo.jpg`
  - Quote styled as if handwritten (CSS italic, slightly larger): *"Wir stehen mit unserem Namen für jede Reinigung."*
  - Name + role below
- **Below:** Row of 4 team action photos — team face dusting, mop, group newspaper, meditation — showing personality
- **Team culture note:** A horizontal strip with a warm-toned group photo (`team-party-group-one.jpeg`) as background, dark overlay, and over it: `"Grillabende. Ausflüge. Zertifizierungen. Wir investieren in unsere Menschen."` — white text, centered

### Work Gallery — Real Proof
- Pale lavender-cream background
- Headline: `Unsere Arbeit spricht für sich.`
- **Grid:** 4-up grid (2x2), then below a full-width wide image
  - Images: machines, solar cleaning, stone cleaner, window team
- Each image in rounded container (`12px`), subtle border
- On hover: a small label appears (mauve pill badge): e.g., `Fassadenreinigung` or `Solarreinigung`
- Below gallery: `"Über 2.000 Projekte · 8+ Jahre mit Stammkunden"` — centered, subdued text

### Stats — Human Numbers
- White background
- **Copy changes the framing:** Instead of pure numbers, connect them to people
- 3 stat blocks in a row:
  - `850+` — `Zufriedene Kunden, die uns weiterempfehlen`
  - `98%` — `Bleiben nach dem ersten Auftrag bei uns`
  - `20+` — `Jahre, in denen Familien uns vertrauen`
- Each stat: large number (mauve color, Sabon), small descriptive text below (normal weight)
- Below all 3: a subtle horizontally-centered quote: *"Wenn Sie uns einmal ausprobieren, wechseln Sie nicht mehr."*

### Testimonials — Personal
- Pale lavender-cream background
- Headline: `Was unsere Kunden sagen.`
- **3 testimonial cards** visible at once (desktop) in card format, rounded corners, soft shadow
  - Each card: photo avatar (placeholder circle if none available) + name + company/context + stars + quote
  - Quote is short and personal — reads like a real person wrote it
  - Card bottom: `Gründau, seit 5 Jahren Kunde` — location and duration adds locality + trust
- Mobile: swipe carousel

### Family Culture Section — Unique to This Plan
- This section exists only in Plan 3. It speaks to something no competitor has.
- Full-width, warm background
- Left: Large group photo with team at a party/gathering (`team-party-group-one.jpeg` or `team-party-group-two.jpeg`), rounded corners
- Right: text block
  - Headline: `Mehr als ein Unternehmen.`
  - Body: *"Wir sind eine grosse Familie. Unsere Mitarbeiter gehen mit Freude zur Arbeit — und das merken unsere Kunden. Wir bieten Ausbildungen an, feiern zusammen, und wachsen gemeinsam."*
  - Tags/badges: `Meisterbetrieb · Ausbildungsbetrieb · Familiengeführt`

### Contact — Warm and Simple
- White background
- Headline: `Melden Sie sich — wir freuen uns.`
- Subtext: `Kurze Nachricht reicht. Mehmet meldet sich persönlich innerhalb von 24 Stunden.`
- Form fields: Name, E-Mail, Telefon, checkboxes for services (friendly checkboxes with mauve color), message field (optional)
- Submit: `Nachricht senden` — warm mauve pill button
- Right of form (desktop): A friendly photo — boss smiling (`team-boss-jumping.jpg` cropped) + caption: *"Ich freue mich auf Ihre Nachricht. — Mehmet Akca"*
- Below form: `✓ Kostenlos · ✓ Unverbindlich · ✓ Antwort innerhalb 24h`

### Footer
- Warm cream (`#FDFAF6`)
- Logo + short tagline: `"Alles aus einer Hand — im Main-Kinzig-Kreis und Wetterau."`
- 3 columns: Leistungen / Arbeitsgebiet / Kontakt
- Service area list: Gründau, Gelnhausen, Wächtersbach, Hanau, Frankfurt...
- Meisterbetrieb badge (visual badge element)
- Social links if applicable
- Bottom bar: copyright, warm tone

---

## Key Design Decisions

- **Team photos are positioned before work/proof photos** — the people ARE the product
- **Rounded corners everywhere** — softness signals approachability
- **No dark hero** — this site is warm and light from the first pixel
- **Human copy framing** — stats are "850 families trust us" not just "850 clients"
- **Meisterbetrieb and Ausbildungsbetrieb as design elements** — these are real differentiators that should look like badges, not just footnotes
- **Contact section features a real person** — Mehmet's photo + personal sign-off makes the form feel human
- **Video:** Can be embedded in the Family Culture section — a 16:9 card with play button. Framed as "Wer wir sind" — not a service demo but a team/culture video. This is where it fits best.
- **Service areas prominently listed in footer and hero subtext** — local SEO + trust signal for Gründau, Gelnhausen, Wächtersbach visitors

---

## Files to Create / Modify

```
app/
  page.tsx              ← replace all section components
  components/
    NavbarFamilie.tsx
    HeroFamilie.tsx
    IntroStripFamilie.tsx
    ServicesFamilie.tsx
    TeamFamilie.tsx
    GalleryFamilie.tsx
    StatsFamilie.tsx
    TestimonialFamilie.tsx
    KulturFamilie.tsx
    ContactFamilie.tsx
    FooterFamilie.tsx
  globals.css           ← update color tokens for warm system
```
