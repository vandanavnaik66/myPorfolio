## Portfolio

An Apple-inspired portfolio built with Next.js (App Router), Tailwind CSS v4, and Framer Motion.

### Highlights

- Home hero with CTAs (contact + resume) and a “View My Work” button that smooth-scrolls to the Work section via DOM.
- “My Work” uses a gallery-like masonry layout (variable card heights).
- Project details include an image lightbox (click-to-enlarge) with keyboard controls.
- Profile page includes structured skill groups, education, and interests.
- Theme toggle (light/dark/system) via `next-themes`.
- Contact form posts to a server route and supports SMTP or console mode.

### Tech stack

- Next.js 16 (App Router) + React 19
- Tailwind CSS v4
- Framer Motion
- `next-themes` for theme switching
- `react-hook-form` + `zod` validation
- `nodemailer` for SMTP

## Pages

- `/` Home (hero + “My Work”)
- `/projects/[slug]` Project detail page (images + highlights + external links)
- `/profile` Profile page (photo + summary + skill groups + education)
- `/contact` Contact form

## API routes

- `GET /api/profile` Returns profile JSON from `lib/content.ts`
- `GET /api/projects` Returns projects JSON from `lib/content.ts`
- `GET /api/projects/[slug]` Returns a single project by slug
- `POST /api/contact` Validates + sends email (SMTP) or logs to console

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000

### Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Customize content

### Site-wide config

Edit `lib/site.ts`:

- `site.shortName` (header “VN” style label)
- `site.socials` (GitHub/LinkedIn)
- `site.resumeUrl` (Drive PDF link used by the “View my resume” button)

### Profile + projects

Edit `lib/content.ts`:

- Profile content: name/title/summary/photo and `skillGroups`
- Hero can be different from profile using `heroTitle` and `heroSummary`
- Projects support separate images for home vs detail pages:
	- `cardImage` is used on the Home “My Work” cards
	- `images` is the gallery used on `/projects/[slug]`

### Images

Place images under `public/images/...`.

- Home cards: reference `cardImage.src`
- Project detail lightbox: reference items in `images[]`

## Contact form (email)

The contact form submits to `POST /api/contact`.

It supports two modes:

- **Console mode**: logs emails to the server console
- **SMTP mode**: sends real email via SMTP

Create a `.env.local`:

```bash
# "console" logs instead of sending
MAIL_MODE=console

# Or use SMTP
# MAIL_MODE=smtp

CONTACT_TO_EMAIL=your-inbox@email.com
MAIL_FROM=your-from@email.com

SMTP_HOST=smtp.your-provider.com
SMTP_PORT=587
SMTP_USER=your-smtp-username
SMTP_PASS=your-smtp-password
```

## Fonts

This project uses `next/font` to load Geist.

## Deploy

The simplest deployment path is Vercel:

- Push to GitHub
- Import the repo into Vercel
- Set environment variables (for contact email)
- Deploy
