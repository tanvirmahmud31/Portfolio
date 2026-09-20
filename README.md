# Tanvir Mahmud — Portfolio

Personal portfolio site for a final-year CSE student at BUBT, Dhaka. Single
page, no backend, no database — it builds to static files you can host anywhere.

**Stack:** React 19 · TypeScript 5.8 · Vite 7 · Tailwind CSS 4 · Framer Motion · Lenis

---

## Table of contents

1. [Getting started](#getting-started)
2. [Scripts](#scripts)
3. [Project structure](#project-structure)
4. [Design system](#design-system)
5. [Editing content](#editing-content)
6. [How the pieces work](#how-the-pieces-work)
7. [Assets](#assets)
8. [Deploying](#deploying)
9. [Accessibility](#accessibility)
10. [Troubleshooting](#troubleshooting)
11. [Third-party code](#third-party-code)

---

## Getting started

**Requirements:** Node.js 20.19+ or 22.12+ (Vite 7 needs one of these), and npm 10+.
Check with `node -v`.

```bash
npm install
npm run dev
```

The dev server runs at **http://localhost:8080** (set in `vite.config.ts`, not
the Vite default of 5173). It listens on `::` so you can also open it from your
phone on the same Wi-Fi using your machine's LAN address.

Before pushing anything, run:

```bash
npm run build
```

This runs `tsc -b` first, so a type error fails the build rather than shipping.

---

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Dev server with hot reload on port 8080 |
| `npm run build` | Typecheck, then build static files into `dist/` |
| `npm run preview` | Serve the built `dist/` locally — always test this before deploying |
| `npm run lint` | ESLint across the project |

---

## Project structure

```
index.html                    page shell, <title>, meta tags, Google Fonts link
vite.config.ts                dev port, React plugin, Tailwind plugin, "@" alias
tsconfig*.json                TypeScript config
eslint.config.js              lint rules

public/                       copied to the site root as-is, unprocessed
  profile.jpg                 hero photo          -> "/profile.jpg"
  favicon.svg
  Tanvir_Mahmud_Resume.pdf    resume button       -> "/Tanvir_Mahmud_Resume.pdf"
  projects/
    online-learning.png
    zapshift.png
    3d-model.png              placeholder, needs replacing
    dragon-news.png

src/
  main.tsx                    React entry point, loads fonts and index.css
  index.css                   ALL design tokens and global styles
  App.tsx                     section order, smooth scroll, skip link
  lib/utils.ts                cn() — merges Tailwind classes safely

  components/
    ui/
      SectionHeading.tsx      the marigold rule + heading + lead, reused everywhere

    Header/Header.tsx         sticky nav, scroll progress bar, mobile menu
    HeroSection/HeroSection.tsx
    AboutSection/AboutSection.tsx
    ProjectsSection/ProjectsSection.tsx
    JourneySection/JourneyTimeline.tsx
    EducationSection/
      EducationSection.tsx    degree + thesis
      SkillCategory.tsx       the four skill groups
    TechStackSection/TechStackSection.tsx   scrolling logo band
    ContactSection/ContactSection.tsx
    Footer/Footer.tsx

    lightswind/               third-party components kept from the lightswind kit
      HangingIdCard.tsx       the draggable ID card in the hero
      theme-toggle.tsx        light/dark switch
```

The `@` alias points at `src/`, so `@/lib/utils` and `../../lib/utils` both work.

---

## Design system

### Colour

Every colour in the site comes from CSS custom properties defined in two blocks
at the top of `src/index.css`. Nothing else hard-codes a colour, so editing
these two blocks re-skins the entire page.

```css
:root {                        /* light mode */
  --bg:          #f4f6fa;      /* page background — cool paper */
  --bg-raised:   #ffffff;      /* cards and panels */
  --fg:          #0a0f1e;      /* body text — navy-black ink */
  --fg-soft:     #55607a;      /* secondary text */
  --accent:      #b8730a;      /* accent TEXT — darkened so it passes contrast */
  --accent-flat: #f5a524;      /* accent FILLS — buttons, rules, dots */
  --signal:      #077f5c;      /* live status only */
  --line:        rgba(10,15,30,.12);
  --grid:        rgba(10,15,30,.045);
}

.dark { /* same names, dark values */ }
```

Two rules keep the palette honest:

- **`--accent` is the only loud colour.** Marigold. It appears on buttons, the
  section rules, timeline nodes and links — nowhere else.
- **`--signal` means "this is true right now."** Jade. Reserved for the
  availability dot and "In progress" badges. Don't use it for decoration, or it
  stops meaning anything.

`--accent` and `--accent-flat` are separate on purpose: marigold text on a white
background fails contrast, so `--accent` is darkened in light mode while
`--accent-flat` stays the true hue for fills. In dark mode both are the same.

**To use them in a component**, the Tailwind utilities are generated from the
`@theme inline` block: `bg-background`, `bg-raised`, `text-foreground`,
`text-soft`, `text-accent`, `bg-accent-flat`, `text-signal`, `border-line`.

### Typography

| Role | Typeface | Loaded from |
|---|---|---|
| Headings, name, buttons | **Space Grotesk** 500/600/700 | Google Fonts `<link>` in `index.html` |
| Body text | **Geist Sans** 400/700 | `@fontsource/geist-sans`, bundled |

Headings pick up Space Grotesk automatically through a base rule on
`h1–h4`. For non-heading elements, add the `font-display` class.

To swap the display face, change the Google Fonts URL in `index.html` and the
`--font-display` value in `index.css`. Both must match.

### Reusable classes

Defined in `index.css`:

| Class | Use |
|---|---|
| `.rule` | The short marigold bar that marks the start of a section |
| `.panel` | Translucent blurred surface with a hairline border |
| `.link-underline` | Underline that wipes in on hover; `data-active="true"` keeps it on |
| `.grain` | Film-grain overlay (applied once, on the root in `App.tsx`) |

### Layout

Every section is `max-w-6xl mx-auto px-6` with `py-24 md:py-32`. Keep that
rhythm when adding sections or the spine of the page breaks.

The faint 72px grid behind everything comes from a `background-image` on `body`.

---

## Editing content

All content is plain arrays at the top of each component — no CMS, no JSON files.

| What you want to change | File |
|---|---|
| Name, intro paragraphs, hero buttons | `HeroSection/HeroSection.tsx` |
| ID card fields (Focus, Year, Based in, Status) | `HeroSection/HeroSection.tsx` — `IdCardFace` |
| Bio prose and the facts table | `AboutSection/AboutSection.tsx` |
| Projects | `ProjectsSection/ProjectsSection.tsx` — `projects` |
| Timeline entries | `JourneySection/JourneyTimeline.tsx` — `events` |
| Degree and thesis | `EducationSection/EducationSection.tsx` — `entries` |
| Skill groups | `EducationSection/SkillCategory.tsx` — `groups` |
| Scrolling logo band | `TechStackSection/TechStackSection.tsx` — `technologies` |
| Email, phone, location | `ContactSection/ContactSection.tsx` — `details` |
| Social links | `HeroSection` and `Footer` (both have a `socials` array) |
| Nav labels | `Header/Header.tsx` — `navItems` |

### Adding a project

```ts
{
  title: "Project name",
  blurb: "What it does, in plain language. Two sentences.",
  built: "What was hard about it, or what you learned.",
  stack: ["React", "Express", "MongoDB"],
  code:  "https://github.com/tanvirmahmud31/repo-name",
  image: "/projects/your-screenshot.png",
}
```

The **first** entry in the array renders as the large featured card; everything
after it becomes a small card in the three-up row below. To promote a project,
move it to the front.

The `built` field is the one that does the work. "The hardest part was keeping
enrolment state consistent when a course is edited mid-term" tells a reader far
more about you than another list of technologies does.

### Adding a timeline entry

```ts
{ year: "2026", title: "Short headline", body: "Two or three sentences." }
```

Keep them in chronological order; the component doesn't sort.

### Changing a skill group

```ts
{
  label:  "I reach for these first",
  note:   "What this confidence level actually means.",
  items:  ["React", "JavaScript", "Tailwind CSS"],
  strong: true,   // optional — highlights the card in marigold
}
```

Only one group should set `strong: true`.

### Adding a nav item

Add to `navItems` in `Header.tsx`, and make sure the `id` matches the `id`
attribute on the `<section>` you're linking to. The active-section underline
uses those ids, so a typo silently disables the highlight. Mirror the change in
`Footer.tsx`'s `links` array.

---

## How the pieces work

**Smooth scrolling** is Lenis, wrapped around the app in `App.tsx`. The header
calls `lenis.scrollTo()` and falls back to native `scrollIntoView` if Lenis
isn't ready.

**Active nav highlighting** uses an `IntersectionObserver` in `Header.tsx` with
`rootMargin: "-20% 0px -70% 0px"` — a section counts as active when it crosses
the upper third of the viewport.

**The scroll progress bar** is the marigold line at the very top. It's a Framer
Motion `useScroll` value smoothed with `useSpring`, driving `scaleX`.

**The hero ID card** is `HangingIdCard`. It's a spring simulation — drag it and
it swings. The rope length and colours are props in `HeroSection.tsx`. Below
the `lg` breakpoint a static version renders instead, since rope physics on
touch is awkward.

**The timeline fill** tracks scroll position within the timeline element only
(`useScroll` with a `target` ref), so the marigold rail fills as you read.

**Theme switching** writes `dark` onto `<html>` and saves the choice to
`localStorage`. `index.html` ships with `class="dark"`, so dark is the default.
Remove it from the `<html>` tag to default to light.

**The contact form** has no backend. On submit it builds a `mailto:` URL and
hands off to the visitor's mail client. Nothing is stored or transmitted by the
site. If you later want real submissions, Formspree or Web3Forms drop in with a
single `fetch` in `handleSubmit`.

**Motion** is deliberately limited: one orchestrated load sequence in the hero,
one reveal per section on scroll, and hover states. Everything is disabled under
`prefers-reduced-motion`.

---

## Assets

Files in `public/` are served from the **site root**, with the `public/` part
stripped:

```
public/projects/zapshift.png   ->   <img src="/projects/zapshift.png" />
public/profile.jpg             ->   <img src="/profile.jpg" />
```

Writing `/public/projects/zapshift.png` appears to work in dev and **breaks in
the production build**. This was a real bug in the original version of this site.

Keep filenames free of spaces, parentheses and double extensions — they become
URLs, and `My File (2).pdf` needs escaping everywhere it's referenced.

Project screenshots look best at **1600×1000** or similar 16:10, under ~300 KB.
The cards crop from the top (`object-top`), so put the interesting part of the
UI near the top of the capture.

---

## Deploying

The build output is `dist/` — plain static files, no server needed.

**Vercel or Netlify:** connect the repo. Build command `npm run build`, output
directory `dist`. Both detect Vite automatically.

**GitHub Pages:** if the site lives at `username.github.io/repo-name` rather
than a root domain, add `base: "/repo-name/"` to `vite.config.ts` first,
otherwise every asset 404s.

**Anywhere else:** run `npm run build` and upload `dist/`. Since it's a single
page with hash links, no SPA rewrite rules are needed.

Always run `npm run preview` before deploying. It serves the real build, which
catches asset-path mistakes that dev mode hides.

---

## Accessibility

Already in place, worth not breaking:

- A "Skip to content" link, visible on keyboard focus
- Visible focus rings on every interactive element (a marigold outline)
- `prefers-reduced-motion` respected globally
- Decorative images use `alt=""`; icon-only buttons carry `aria-label`
- Semantic markup — `<dl>` for the facts list, `<ol>` for the timeline

If you add an icon-only button, give it an `aria-label`. If you add a decorative
image, give it `alt=""` rather than omitting the attribute.

---

## Troubleshooting

**Project images don't show after deploying.** The path starts with `/public/`.
Drop that prefix — see [Assets](#assets).

**Tech-stack icons are missing.** They load from the devicon CDN. If a request
fails the icon hides itself and the label still shows, so this degrades quietly.
Check the network tab.

**Headings render in the wrong font.** Space Grotesk comes from Google Fonts
over the network. Offline, it falls back to Geist Sans. Confirm the `<link>` in
`index.html` is intact.

**The build fails on `tsc -b`.** That's intentional — fix the type error rather
than skipping the typecheck.

**`npm install` fails with an engine warning.** Vite 7 needs Node 20.19+ or
22.12+. Upgrade Node.

**Colours look wrong after an edit.** Check you edited both the `:root` and
`.dark` blocks. Changing only one leaves the other theme stale.

---

## Third-party code

Two components are kept from the [lightswind](https://lightswind.com) UI kit,
vendored into `src/components/lightswind/`:

- `HangingIdCard.tsx` — the spring-physics ID card in the hero
- `theme-toggle.tsx` — light/dark switch using the View Transitions API

They're vendored rather than installed so they can be edited directly. The rest
of the kit was removed — it added ~140 unused files and pulled in Three.js, GSAP
and next-themes for code that never ran.

Tech-stack icons come from [devicon](https://devicon.dev) via jsDelivr.