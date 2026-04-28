# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at localhost:3000
npm run build    # Production build
npm run lint     # ESLint check
```

Node version is pinned in `.nvmrc`.

## Architecture

This is a single-page personal portfolio site built with Next.js 15 (App Router), TypeScript, Tailwind CSS, and shadcn/ui.

**Page structure:** `src/app/page.tsx` is one long page composed of section components rendered sequentially: Hero → About → Projects → Services → Contact. Navigation is smooth-scroll via anchor IDs (`#about`, `#projects`, `#services`, `#contact`).

**Section components** live in `src/components/sections/`. They are self-contained and hold their own content data (arrays of projects, services, etc.) inline — there is no CMS or external data source.

**UI primitives** in `src/components/ui/` are shadcn/ui components (Radix UI + Tailwind). Add new ones with `npx shadcn@latest add <component>`. Do not hand-edit these files unless fixing a bug.

**Styling:** Dark mode only (`defaultTheme="dark"`, `enableSystem={false}`). Theme tokens (background, primary, secondary, accent) are CSS variables defined in `globals.css` and consumed via Tailwind. The palette is blue (#3b82f6) / purple (#8b5cf6) / cyan (#06b6d4). Gradients across these three colors are the primary visual motif.

**Contact API:** `src/app/api/contact/route.ts` is the only API route. It accepts `POST { name, email, message }` and sends email via Resend. Requires `RESEND_API_KEY` in `.env.local`.

**Particles:** `ParticlesBackground` uses `@tsparticles/slim` initialized imperatively via `useEffect`. It renders into a `div#tsparticles` positioned `absolute inset-0` inside the hero section.

**`Nav`** uses `IntersectionObserver` to highlight the active section as the user scrolls.

## Environment

`.env.local` must contain:
```
RESEND_API_KEY=...
```
