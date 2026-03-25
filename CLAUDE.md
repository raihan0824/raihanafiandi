# Portfolio Website — Raihan Afiandi

## Stack
- Next.js 16 (static export) + TypeScript + Tailwind CSS v4 + Framer Motion
- Cloudflare Worker proxy for chatbot API (in `cloudflare-worker/`)
- GitHub Pages hosting via GitHub Actions CI/CD

## Key Decisions
- Light/dark mode with system default. Dark theme: black + orange. Light theme: white + orange.
- No resume PDF download — removed by user request
- Monash University removed from education — user request
- Hero name: clean single-color text with per-character typewriter animation (no gradients)
- Experience cards show 3 bullets + "View more" modal for full details
- Chatbot at `/chat/` (full page, not popup), named "Raihan Assistant"
- Chatbot context is resume.md injected as system prompt via CF Worker
- Rate limiting: fingerprint + localStorage (10 msgs/day/user), enforced server-side via KV
- Google Analytics via NEXT_PUBLIC_GA_ID env var
- Company logos are placeholders (user will provide later)

## Structure
- `src/data/resume.ts` — typed resume data (source of truth)
- `src/data/projects.ts` — project showcase data
- `src/components/sections/` — Hero, About, Experience, Projects, Contact
- `src/components/chat/` — ChatWindow, ChatMessage, ChatInput, RateLimitBanner
- `src/components/ui/` — AnimatedSection, Button, ThemeToggle, TimelineItem, ProjectCard, ExperienceModal
- `cloudflare-worker/src/index.ts` — API proxy + KV rate limiting

## Env Vars
- `NEXT_PUBLIC_CHAT_API_URL` — Cloudflare Worker URL
- `NEXT_PUBLIC_GA_ID` — Google Analytics measurement ID
- CF Worker secrets: `API_KEY`, `BASE_URL`, `MODEL`, `SYSTEM_PROMPT`
