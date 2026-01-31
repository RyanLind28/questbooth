# QuestBooth Website Backlog

## Design Tasks (For Designer)

### 1. Logo Positioning
- [ ] Redesign logo layout: icon on left, wordmark on right
- [ ] Current: Full logo image used in header and footer
- [ ] Consider: Separate icon and text components for more flexible positioning
- [ ] Files affected: `Navbar.tsx`, `Footer.tsx`

---

## Development Tasks

### 2. Use All Provided Images
- [ ] Ensure all 12 images are displayed on the website
- [ ] Current images available:
  - `QuestBooth_1.jpeg` through `QuestBooth_12.jpeg`
  - URL pattern: `https://ho516c37no6nnbga.public.blob.vercel-storage.com/Quest/QuestBooth/Photos/QuestBooth_[1-12].jpeg`
- [ ] Currently used in:
  - Scrolling gallery (all 12)
  - Featured grid (5 images)
- [ ] Consider adding more images to Pricing or Booking pages

### 3. Improve "Moments We've Captured" Photo Grid
- [ ] Current: 2 large + 3 small asymmetric grid
- [ ] Options to consider:
  - Masonry layout
  - Bento grid style
  - Lightbox/modal for full-size viewing
  - Add more photos to the grid
- [ ] File: `Home.tsx`, `Home.module.css` (`.featured` section)

### 4. Add "Choose This Package" to What We Offer Section
- [ ] Add CTA button to each package card in the services section
- [ ] Currently only the featured (Manned Digital) has a primary button
- [ ] Make all three packages have consistent "Choose This Package" buttons
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
2. ⬜ Add "Choose This Package" buttons
3. ⬜ Use all images
4. ⬜ Improve photo grid layout
5. ⬜ SEO implementation
6. ⬜ Logo positioning (designer task)
