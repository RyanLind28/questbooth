# QuestBooth Website Backlog

## Design Tasks (For Designer)

### 1. Logo Positioning
- [x] Horizontal lockup done: icon left, wordmark right
- [x] Built as a reusable `<Logo iconHeight wordHeight gap />` component
      (`src/components/Logo.tsx`). It crops the icon and wordmark out of the
      single stacked `Agold.webp` via measured background offsets, so no new
      asset was needed.
- [ ] Nice to have: separate icon / wordmark exports, so the crop offsets in
      `Logo.module.css` are no longer coupled to that one file's composition

---

## Development Tasks

### 2. Use All Provided Images
- [x] Every photo in `src/assets/photos/` is displayed (gallery page + marquee)
- [ ] Current images available:
  - `QuestBooth_1.jpeg` through `QuestBooth_12.jpeg`
  - Stored in the repo at `src/assets/photos/`, loaded by `src/data/photos.ts`.
    Drop a new file in that folder and it joins the gallery automatically;
    fixed slots reference photos by filename, so nothing reshuffles.
- [ ] Currently used in:
  - Scrolling gallery (all 12)
  - Bento grid (6: photos 1, 5, 2, 3, 8, 4)
  - Pricing package cards (2: photos 7, 10)
  - Hero background (photo 6 — gold sequin wall)
  - About section (photo 9 — the booth itself)
  - Closing CTA background (photo 5 — silver sequin wall)
- [x] Pricing package cards now carry a photo banner each
- [ ] **Worth knowing:** all 12 photos are portrait or square, and none show
      people. They are equipment and backdrop shots. Landscape shots of guests
      actually using the booth would do more for the hero and the gallery than
      any layout change.

### 3. Improve "Moments We've Captured" Photo Grid
- [x] Rebuilt as a bento grid that tiles exactly at every breakpoint
  (4 cols desktop / 2 cols tablet + mobile) — the old grid orphaned its
  last image into a half-empty implicit row below 1024px
- [x] Lightbox / modal for full-size viewing — `src/components/Lightbox.tsx`,
      shared by the gallery page, the bento grid and the marquee strip
- [x] All photos are surfaced on the `/gallery` page
- [ ] File: `Home.tsx`, `Home.module.css` (`.bento`)

### 4. Add "Choose This Package" to What We Offer Section
- [x] Both service cards now have a full-width "Choose this package"
      button (primary on the featured card, secondary on the other)
- [ ] File: `Home.tsx` (`.services` section)

### 5. SEO & AI SEO
- [ ] **Technical SEO:**
  - [ ] Add meta descriptions to each page
  - [ ] Add Open Graph tags for social sharing
  - [ ] Add Twitter Card meta tags
  - [ ] Create sitemap.xml
  - [ ] Create robots.txt
  - [ ] Add structured data (JSON-LD) for LocalBusiness
  - [ ] Optimize image alt texts
  - [ ] Add canonical URLs

- [ ] **AI SEO (LLM Optimization):**
  - [ ] Add schema markup for FAQ sections
  - [ ] Ensure content is conversational and answers common questions
  - [ ] Add "People Also Ask" style content
  - [ ] Include location-based keywords naturally
  - [ ] Structure content for featured snippets
  - [ ] Add semantic HTML5 elements

- [ ] **Content SEO:**
  - [ ] Target keywords: "photo booth hire UK", "wedding photo booth", "corporate event photo booth"
  - [ ] Local SEO for service areas
  - [ ] Add testimonial schema markup

### 6. README File
- [ ] Create comprehensive README.md with:
  - [ ] Project overview
  - [ ] Tech stack (Vite, React, TypeScript)
  - [ ] Getting started / installation
  - [ ] Development commands
  - [ ] Deployment instructions (Vercel)
  - [ ] Project structure
  - [ ] Environment variables (if any)
  - [ ] Contributing guidelines

---

## Assets Reference

### Logos
- **Gold:** `https://ho516c37no6nnbga.public.blob.vercel-storage.com/Quest/QuestBooth/Logo/Agold.webp`
- **White:** `https://ho516c37no6nnbga.public.blob.vercel-storage.com/Quest/QuestBooth/Logo/Awhite.webp`
- **Black:** `https://ho516c37no6nnbga.public.blob.vercel-storage.com/Quest/QuestBooth/Logo/Ablack.webp`

### Photos
- 12 images total: `QuestBooth_1.jpeg` to `QuestBooth_12.jpeg`
- Base URL: `https://ho516c37no6nnbga.public.blob.vercel-storage.com/Quest/QuestBooth/Photos/`

### Brand Colors
- Gold: `#d7b458`
- Black: `#090909`
- White: `#fafafa`

---

## Priority Order
1. ⬜ README File (documentation)
2. ✅ Add "Choose This Package" buttons
3. 🟡 Use all images (12 in the gallery; 8 distinct across hero/about/bento/CTA)
4. ✅ Improve photo grid layout
5. ⬜ SEO implementation
6. ✅ Logo positioning

---

## Known Gaps (found during the UI/UX pass)

- **The booking form does not submit anywhere.** `handleSubmit` in
  `Booking.tsx` waits 1.5s, `console.log`s the payload and shows the success
  state. Enquiries are silently lost — this needs a real endpoint before launch.
- **Placeholder contact details** — `07123 456 789` and
  `hello@questbooth.co.uk` appear in the footer, booking sidebar and mobile menu.
- **`AeroMaticsBold` was never shipped.** The `@font-face` pointed at
  `/fonts/`, which does not exist, so the display font silently fell back.
  The dead rule has been removed and `Space Grotesk` is now named directly —
  add the real font files and restore the `@font-face` if that font is wanted.
