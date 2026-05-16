# 🎨 Portfolio Redesign — AI Agent Prompt (v2)

---

## 🧭 MISSION BRIEF

You are a senior frontend engineer tasked with **completely rewriting the UI layer** of Kafkha Yasin Albian's portfolio website (`https://kafkhabian.vercel.app/`).

**The problem with the current site:**
- All-caps typography throughout causes visual fatigue and feels aggressive
- Pure black (#000000) background with white text creates harsh, unreadable contrast
- Dense content blocks with no breathing room
- "Digital brutalism" aesthetic that prioritizes shock over usability
- Sections are overly heavy and visually cluttered

**The target feeling:**
Study `https://kenjimmy.xyz/` carefully before writing any code. The goal is not to copy it — it is to extract its *feeling*: calm, approachable, centered, minimal, and warm. A visitor should feel relaxed and curious, not overwhelmed.

**Your exact deliverables:**
- Rewrite every component inside `src/app/` or `app/` (wherever the App Router pages live)
- Rewrite or replace every Tailwind class across all components
- Keep all personal content, project data, and contact info exactly as-is
- Do NOT change `next.config.js`, `package.json`, deployment config, or any backend logic

---

## ⚙️ TECH CONSTRAINTS (STRICT — DO NOT DEVIATE)

| Concern | Tool | Notes |
|---|---|---|
| Framework | Next.js 14+ App Router | Keep all `page.tsx`, `layout.tsx`, `loading.tsx` files |
| Styling | TailwindCSS only | No CSS modules, no styled-components, no inline style= objects |
| Animation | GSAP + ScrollTrigger | Keep existing GSAP imports; only simplify the animations themselves |
| Fonts | Google Fonts via `next/font` | Replace current font with `Plus Jakarta Sans` (see font setup below) |
| Deployment | Vercel | No config changes needed |

> ⚠️ kenjimmy.xyz uses Nuxt (Vue) + Pinia. Do NOT reference Vue component syntax, `<script setup>`, `defineComponent`, Pinia stores, or any Vue-specific pattern. You are writing React + Next.js exclusively.

---

## 🖋️ FONT SETUP

In `app/layout.tsx`, replace the current font import with:

```tsx
import { Plus_Jakarta_Sans } from 'next/font/google'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-jakarta',
})

// Apply to <html> tag:
<html lang="en" className={`${jakarta.variable} font-sans`}>
```

In `tailwind.config.ts`, extend the font family:

```ts
theme: {
  extend: {
    fontFamily: {
      sans: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
    },
  },
},
```

---

## 🎨 DESIGN SYSTEM — COMPLETE SPECIFICATION

### Color Tokens

Define these as Tailwind custom colors in `tailwind.config.ts`:

```ts
colors: {
  cream: {
    DEFAULT: '#F5F2EE',  // page background
    surface: '#EDEAE5',  // card/section backgrounds
    border: '#D9D4CE',   // dividers, input borders
  },
  charcoal: {
    DEFAULT: '#2C2C2C',  // primary text, headings
    muted: '#6B6560',    // secondary text, labels, captions
  },
  accent: {
    DEFAULT: '#8B7355',  // links, hover states, CTA highlights
    hover: '#7A6449',    // darker accent for hover
  },
}
```

**Usage rules:**
- `bg-cream` — entire page background. NEVER use `bg-white` or `bg-black`
- `bg-cream-surface` — cards, skill chips, form backgrounds
- `text-charcoal` — all headings, primary body text
- `text-charcoal-muted` — descriptions, captions, nav links at rest
- `text-accent` — links, arrow icons, active nav state, submit hover
- `border-cream-border` — all borders: cards, inputs, dividers, footer top

### Typography Scale

**Never use `font-bold` or `uppercase` on any visible text element.**

| Element | Tailwind Classes |
|---|---|
| H1 — hero name | `text-5xl md:text-7xl font-light tracking-tight text-charcoal leading-none` |
| H2 — section titles | `text-2xl md:text-3xl font-medium text-charcoal` |
| H3 — card titles | `text-lg font-medium text-charcoal` |
| Body paragraph | `text-base leading-relaxed text-charcoal-muted` |
| Small label / tag | `text-xs font-medium uppercase tracking-widest text-charcoal-muted` |
| Nav link | `text-sm text-charcoal-muted hover:text-charcoal transition-colors` |
| Chip text | `text-sm text-charcoal` |
| Footer text | `text-sm text-charcoal-muted` |

### Spacing System

Every section on the page must follow this rule — **no exceptions**:

```tsx
<section className="py-20 md:py-32">
  <div className="max-w-4xl mx-auto px-6 md:px-10">
    {/* section content */}
  </div>
</section>
```

- Max content width: `max-w-4xl` (56rem / 896px)
- Always centered with `mx-auto`
- Side padding: `px-6` on mobile, `md:px-10` on desktop
- Section vertical rhythm: `py-20 md:py-32`
- Card internal padding: `p-6` always
- Gap between cards: `gap-5` or `gap-6`
- Gap between skill groups: `mb-8`

### Reusable Component: Skill Chip

```tsx
// components/SkillChip.tsx
export function SkillChip({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center bg-cream-surface text-charcoal text-sm px-4 py-1.5 rounded-full border border-cream-border">
      {label}
    </span>
  )
}
```

### Reusable Component: Section Wrapper

```tsx
// components/SectionWrapper.tsx
export function SectionWrapper({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <section id={id} className="py-20 md:py-32">
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        {children}
      </div>
    </section>
  )
}
```

### Reusable Component: Section Label

Use this above every H2 heading:

```tsx
<p className="text-xs font-medium uppercase tracking-widest text-charcoal-muted mb-3">
  Selected work
</p>
<h2 className="text-2xl md:text-3xl font-medium text-charcoal">
  Things I've built
</h2>
```

---

## 📐 SECTION-BY-SECTION SPECIFICATION

---

### SECTION 1 — NAVBAR (`components/Navbar.tsx`)

**Behavior:**
- Sticky at top (`sticky top-0 z-50`)
- Transparent on load; on scroll past 50px, add `bg-cream/80 backdrop-blur-sm` with `transition-all duration-300`
- Use a `useEffect` with a `scroll` event listener (or a GSAP ScrollTrigger) to toggle the background class

**Layout:**
```
[  Kafkha                    works · about · contact  ]
```

**Exact JSX structure:**
```tsx
<nav className="sticky top-0 z-50 transition-all duration-300">
  <div className="max-w-4xl mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
    
    {/* Logo */}
    <a href="/" className="text-charcoal font-medium text-base tracking-tight">
      Kafkha
    </a>

    {/* Nav links */}
    <ul className="flex items-center gap-8">
      {['works', 'about', 'contact'].map((item) => (
        <li key={item}>
          <a
            href={`#${item}`}
            className="text-sm text-charcoal-muted hover:text-charcoal transition-colors duration-200"
          >
            {item}
          </a>
        </li>
      ))}
    </ul>

  </div>
</nav>
```

**Do NOT add:** underlines, border-bottom on nav, background box on links, any uppercase, any bold weight.

---

### SECTION 2 — HERO (`components/Hero.tsx`)

**Layout (desktop):** Two columns — text left, avatar right (if photo available). If no photo, single centered column.

**Exact content to render:**

```tsx
<section className="py-28 md:py-40">
  <div className="max-w-4xl mx-auto px-6 md:px-10">
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-12">

      {/* Text block */}
      <div className="flex flex-col gap-5 max-w-xl">
        
        {/* Status pill */}
        <span className="inline-flex items-center gap-2 text-sm text-accent bg-cream-surface border border-cream-border px-4 py-1.5 rounded-full w-fit">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          Available for work
        </span>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-light tracking-tight text-charcoal leading-none">
          Kafkha<br />Yasin Albian
        </h1>

        {/* Role */}
        <p className="text-lg text-charcoal-muted font-normal">
          Web Developer & Designer
        </p>

        {/* Bio */}
        <p className="text-base leading-relaxed text-charcoal-muted max-w-md">
          A high school student from Bogor, Indonesia building clean, thoughtful 
          web experiences with React, Next.js, and a lot of curiosity.
        </p>

        {/* CTA */}
        <a
          href="#contact"
          className="inline-flex items-center gap-2 text-sm text-charcoal border border-cream-border rounded-xl px-6 py-3 w-fit hover:border-accent hover:text-accent transition-colors duration-200"
        >
          Let's talk
          <span>→</span>
        </a>

      </div>

      {/* Avatar — only render if photo exists */}
      {/* 
      <div className="w-40 h-40 md:w-56 md:h-56 rounded-2xl overflow-hidden border border-cream-border flex-shrink-0">
        <Image src="/avatar.jpg" alt="Kafkha" width={224} height={224} className="object-cover w-full h-full" />
      </div>
      */}

    </div>
  </div>
</section>
```

**GSAP animation for hero (add via `useEffect`):**
```js
gsap.from('.hero-content > *', {
  y: 20,
  opacity: 0,
  duration: 0.8,
  stagger: 0.12,
  ease: 'power2.out',
})
```
Apply `className="hero-content flex flex-col gap-5"` to the text block div.

---

### SECTION 3 — SKILLS (`components/Skills.tsx`)

**Section ID:** `id="skills"`

**Title block:**
```tsx
<p className="text-xs font-medium uppercase tracking-widest text-charcoal-muted mb-3">
  Stack
</p>
<h2 className="text-2xl font-medium text-charcoal mb-12">
  What I work with
</h2>
```

**Skill data — use this exact structure:**
```ts
const skills = [
  {
    category: 'Frontend',
    items: ['HTML', 'CSS', 'TailwindCSS', 'Bootstrap', 'JavaScript', 'React', 'Next.js', 'GSAP'],
  },
  {
    category: 'Backend',
    items: ['PHP', 'Laravel'],
  },
  {
    category: 'Database',
    items: ['MySQL', 'PostgreSQL'],
  },
  {
    category: 'Tools',
    items: ['GitHub', 'NPM', 'Composer', 'VS Code', 'Figma', 'Unity'],
  },
]
```

**Render each group:**
```tsx
{skills.map((group) => (
  <div key={group.category} className="mb-8">
    <p className="text-xs font-medium uppercase tracking-widest text-charcoal-muted mb-4">
      {group.category}
    </p>
    <div className="flex flex-wrap gap-2">
      {group.items.map((item) => (
        <SkillChip key={item} label={item} />
      ))}
    </div>
  </div>
))}
```

**Do NOT render:** progress bars, percentage labels, "ADVANCED / INTERMEDIATE / LEARNING" labels, or any level indicators. The chips alone are enough.

---

### SECTION 4 — PROJECTS (`components/Projects.tsx`)

**Section ID:** `id="works"`

**Title block:**
```tsx
<p className="text-xs font-medium uppercase tracking-widest text-charcoal-muted mb-3">
  Work
</p>
<h2 className="text-2xl font-medium text-charcoal mb-10">
  Selected projects
</h2>
```

**Project data — use this exact array:**
```ts
const projects = [
  {
    name: 'Yellow Drink',
    description: 'A point-of-sale system for managing orders and inventory.',
    tags: ['Laravel', 'MySQL', 'TailwindCSS'],
    link: '#',
  },
  {
    name: 'Takoyaki',
    description: 'A simple online shop with product browsing and cart flow.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    link: '#',
  },
  {
    name: 'Arcloom',
    description: 'An ERD & PRD generation tool using AI-powered diagramming.',
    tags: ['Laravel', 'React', 'TailwindCSS', 'MermaidJS', 'PostgreSQL'],
    link: '#',
  },
  {
    name: 'Portfolio V2',
    description: 'This site — rebuilt with Next.js, Tailwind, and GSAP.',
    tags: ['Next.js', 'TailwindCSS', 'GSAP'],
    link: '#',
  },
  {
    name: 'Portfolio V1',
    description: 'My first portfolio — built from scratch with vanilla web tech.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    link: '#',
  },
  {
    name: 'Collect Stars',
    description: 'A small interactive game built in Unity.',
    tags: ['Unity', 'C#'],
    link: '#',
  },
  {
    name: 'PKL Notes',
    description: 'A productivity tool for note-taking during internship.',
    tags: ['Next.js', 'TailwindCSS', 'Supabase'],
    link: '#',
  },
]
```

**Card JSX:**
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
  {projects.map((project) => (
    <div
      key={project.name}
      className="bg-cream-surface border border-cream-border rounded-2xl p-6 flex flex-col gap-4 group hover:border-accent transition-colors duration-200"
    >
      <div className="flex items-start justify-between">
        <h3 className="text-lg font-medium text-charcoal">{project.name}</h3>
        <a
          href={project.link}
          className="text-charcoal-muted group-hover:text-accent transition-colors text-sm"
          target="_blank"
          rel="noopener noreferrer"
        >
          Explore →
        </a>
      </div>

      <p className="text-sm leading-relaxed text-charcoal-muted">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tags.map((tag) => (
          <SkillChip key={tag} label={tag} />
        ))}
      </div>
    </div>
  ))}
</div>
```

**GSAP scroll-in for cards:**
```js
gsap.from('.project-card', {
  scrollTrigger: { trigger: '.project-grid', start: 'top 80%' },
  y: 24,
  opacity: 0,
  duration: 0.6,
  stagger: 0.08,
  ease: 'power2.out',
})
```

Add `className="project-card"` to each card div and `className="project-grid grid grid-cols-1 md:grid-cols-2 gap-5"` to the grid wrapper.

---

### SECTION 5 — ABOUT (`components/About.tsx`)

**Section ID:** `id="about"`

**Title block:**
```tsx
<p className="text-xs font-medium uppercase tracking-widest text-charcoal-muted mb-3">
  About
</p>
<h2 className="text-2xl font-medium text-charcoal mb-8">
  A bit about me
</h2>
```

**Bio paragraph:**
```tsx
<p className="text-base leading-relaxed text-charcoal-muted max-w-xl mb-8">
  I'm a high school student from Bogor Barat, Indonesia who fell in love with building 
  things on the web. I started with pure HTML and CSS, and now I'm working my way through 
  React, Next.js, and GSAP. When I'm not coding, I'm probably playing games or exploring 
  new design ideas.
</p>
```

**Fun facts list:**
```tsx
<ul className="flex flex-col gap-3 text-base text-charcoal-muted">
  {[
    { emoji: '🎓', text: 'High school student' },
    { emoji: '📍', text: 'Based in Bogor Barat, Indonesia' },
    { emoji: '🌱', text: 'Currently mastering React & Next.js' },
    { emoji: '🎮', text: 'Gamer on the side' },
  ].map(({ emoji, text }) => (
    <li key={text} className="flex items-center gap-3">
      <span>{emoji}</span>
      <span>{text}</span>
    </li>
  ))}
</ul>
```

**Contact links below:**
```tsx
<div className="mt-10 flex items-center gap-6 text-sm text-charcoal-muted">
  <a href="mailto:korqsz@proton.me" className="hover:text-accent transition-colors">
    korqsz@proton.me
  </a>
  <a href="https://github.com/kafkha" target="_blank" className="hover:text-accent transition-colors">
    GitHub
  </a>
  <a href="https://linkedin.com/in/kafkha" target="_blank" className="hover:text-accent transition-colors">
    LinkedIn
  </a>
</div>
```

---

### SECTION 6 — CONTACT (`components/Contact.tsx`)

**Section ID:** `id="contact"`

**Title block:**
```tsx
<p className="text-xs font-medium uppercase tracking-widest text-charcoal-muted mb-3">
  Contact
</p>
<h2 className="text-2xl font-medium text-charcoal mb-3">
  Let's create something together
</h2>
<p className="text-base text-charcoal-muted mb-10 max-w-md">
  Have a project in mind or just want to say hi? My inbox is always open.
</p>
```

**Form — keep existing submit logic, only restyle:**
```tsx
<form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-xl">

  <input
    type="text"
    name="name"
    placeholder="Your name"
    className="border border-cream-border bg-transparent rounded-xl px-4 py-3 text-charcoal placeholder:text-charcoal-muted focus:border-accent focus:outline-none transition-colors"
  />

  <input
    type="email"
    name="email"
    placeholder="your@email.com"
    className="border border-cream-border bg-transparent rounded-xl px-4 py-3 text-charcoal placeholder:text-charcoal-muted focus:border-accent focus:outline-none transition-colors"
  />

  <textarea
    name="message"
    rows={5}
    placeholder="What's on your mind?"
    className="border border-cream-border bg-transparent rounded-xl px-4 py-3 text-charcoal placeholder:text-charcoal-muted focus:border-accent focus:outline-none transition-colors resize-none"
  />

  <button
    type="submit"
    className="bg-charcoal text-cream rounded-xl px-8 py-3 text-sm font-medium w-fit hover:bg-accent transition-colors duration-200"
  >
    Send message →
  </button>

</form>

{/* Soft contact links below form */}
<div className="mt-8 flex items-center gap-6 text-sm text-charcoal-muted">
  <a href="mailto:korqsz@proton.me" className="hover:text-accent transition-colors">
    korqsz@proton.me
  </a>
  <a href="https://github.com/kafkha" target="_blank" className="hover:text-accent transition-colors">
    GitHub ↗
  </a>
  <a href="https://linkedin.com/in/kafkha" target="_blank" className="hover:text-accent transition-colors">
    LinkedIn ↗
  </a>
</div>
```

---

### SECTION 7 — FOOTER (`components/Footer.tsx`)

```tsx
<footer className="border-t border-cream-border py-8">
  <div className="max-w-4xl mx-auto px-6 md:px-10 flex items-center justify-between">

    <p className="text-sm text-charcoal-muted">
      © 2024 Kafkha Yasin Albian
    </p>

    <div className="flex items-center gap-5 text-sm text-charcoal-muted">
      <a href="mailto:korqsz@proton.me" className="hover:text-accent transition-colors">
        Email
      </a>
      <a href="https://github.com/kafkha" target="_blank" className="hover:text-accent transition-colors">
        GitHub
      </a>
      <a href="https://linkedin.com/in/kafkha" target="_blank" className="hover:text-accent transition-colors">
        LinkedIn
      </a>
    </div>

  </div>
</footer>
```

**Do NOT add:** multiple footer columns, a "Built with" credit line, a site map, or any decorative elements.

---

## 🎬 GSAP ANIMATIONS — COMPLETE RULES

**Global principles:**
- Every GSAP animation must use `opacity: 0 → 1` and `y: 20 → 0` as the base motion
- Duration should never exceed `1.0s` for entrance animations
- Ease: always `"power2.out"` for entrances, `"power2.inOut"` for hover transitions
- Use `ScrollTrigger` for everything below the fold — no element should animate before it's in view

**Permitted animations:**
| Target | Trigger | Effect |
|---|---|---|
| Hero text children | On mount | Stagger fade + drift up |
| Section headings | ScrollTrigger, start: "top 80%" | Fade + drift up, 0.6s |
| Project cards | ScrollTrigger, staggered | Fade + drift up, 0.08s stagger |
| Skill chip groups | ScrollTrigger | Fade in together, no stagger |
| Nav background | Scroll event | Class toggle only, no GSAP |

**Forbidden animations:**
- ❌ Parallax scrolling on any element
- ❌ Text scramble / glitch effects
- ❌ Heavy clip-path reveals
- ❌ Horizontal scroll or scroll-jacking of any kind
- ❌ Scale entrance (cards only get scale on hover, not entrance)
- ❌ Any animation that delays content visibility by more than 1 second

**Hover micro-interaction on project cards (CSS only, not GSAP):**
```tsx
// Already handled by Tailwind group-hover classes — do NOT add a GSAP mouseenter
className="... group hover:border-accent transition-colors duration-200"
```

---

## 🗂️ FILE STRUCTURE — WHAT TO TOUCH

```
app/
├── layout.tsx          ← Update font, global className on <html>
├── page.tsx            ← Render all sections in order
└── globals.css         ← Remove all brutalism CSS; keep only Tailwind directives

components/
├── Navbar.tsx          ← Rewrite completely
├── Hero.tsx            ← Rewrite completely
├── Skills.tsx          ← Rewrite completely
├── Projects.tsx        ← Rewrite completely
├── About.tsx           ← Rewrite completely
├── Contact.tsx         ← Rewrite form styles only, keep submit logic
├── Footer.tsx          ← Rewrite completely
├── SkillChip.tsx       ← NEW — create this reusable component
└── SectionWrapper.tsx  ← NEW — create this reusable component

tailwind.config.ts      ← Add custom colors and font family
```

**Do NOT touch:**
- `next.config.js`
- `package.json` / `package-lock.json`
- Any API routes under `app/api/`
- Any `.env` files
- Vercel configuration

---

## ✅ PRE-DELIVERY SELF-AUDIT CHECKLIST

Run through every item before considering this done. If any item is false, fix it.

**Typography:**
- [ ] Zero instances of `uppercase` class on any visible text
- [ ] Zero instances of `font-bold` on any heading or body text
- [ ] All nav links, section titles, and body text are in sentence case or natural title case
- [ ] `Plus Jakarta Sans` is loading via `next/font/google`

**Color:**
- [ ] `bg-cream` (`#F5F2EE`) is the root background — confirmed in `layout.tsx` `<body>`
- [ ] Zero uses of `bg-white`, `bg-black`, `text-white`, `text-black` anywhere
- [ ] Card backgrounds use `bg-cream-surface` only
- [ ] All borders use `border-cream-border` only
- [ ] Accent color appears only on: links, active states, hover states, submit button hover

**Layout:**
- [ ] Every section is wrapped in `max-w-4xl mx-auto px-6 md:px-10`
- [ ] Every section has `py-20 md:py-32`
- [ ] No section breaks the centered single-column flow unexpectedly
- [ ] Projects section is `grid-cols-1 md:grid-cols-2`
- [ ] Skills section is `flex flex-wrap gap-2` per group

**Content:**
- [ ] All 7 projects are listed with correct names, descriptions, and tech tags
- [ ] All 4 skill groups are present (Frontend, Backend, Database, Tools)
- [ ] No progress bars, level labels, or percentage indicators exist anywhere
- [ ] Email is `korqsz@proton.me`
- [ ] Copyright year is 2024

**GSAP:**
- [ ] Hero animation uses staggered `y: 20 → 0, opacity: 0 → 1`
- [ ] Project cards animate in via ScrollTrigger
- [ ] No animation has a duration over 1.0s
- [ ] No scroll-jacking, parallax, or clip-path animations exist

**Responsiveness:**
- [ ] Nav is legible and not broken on 375px viewport
- [ ] Hero text wraps cleanly on mobile
- [ ] Project grid collapses to single column below `md:`
- [ ] Skill chips wrap naturally on small screens
- [ ] Footer stacks vertically on mobile (use `flex-col md:flex-row`)

**Accessibility:**
- [ ] All `<a>` tags have descriptive text (not just "click here")
- [ ] All form `<input>` elements have a `placeholder`
- [ ] External links have `target="_blank" rel="noopener noreferrer"`
- [ ] Sufficient color contrast between `#6B6560` text on `#F5F2EE` background (verify ≥ 3:1 for body, ≥ 4.5:1 for small text)

---

## ⛔ ABSOLUTE DO-NOT LIST

These are hard rules. If any of these exist in your final output, it is a failure.

1. `uppercase` Tailwind class on any text visible to the user
2. `font-bold` on any heading
3. `bg-white` or `bg-black` anywhere
4. `text-white` or `text-black` anywhere — use `text-cream` and `text-charcoal` respectively
5. Section labels like `"▪ PRIMARY FOCUS ▪"` or any bracketed/symbol-decorated headings
6. Progress bars or skill level indicators
7. A multi-column footer
8. Any Vue, Nuxt, or Pinia syntax
9. `style={{ }}` inline style objects — use Tailwind classes only
10. Any GSAP animation with `duration` > `1.0`

---

_Design reference: `https://kenjimmy.xyz/` — before writing any code, open this URL and identify: (1) the exact background hex value, (2) the font weight used for the hero name, (3) how much space exists between each section. These three details will tell you if your output is calibrated correctly._