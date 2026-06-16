# Dr. Stéphanie Hassoun — Cabinet Dentaire Marseille

Site web professionnel pour le cabinet dentaire du Dr. Stéphanie Hassoun, chirurgien-dentiste à Marseille 13004.

## Run & Operate

- `pnpm --filter @workspace/hassoun-dental run dev` — frontend (port 19664, preview path `/`)
- `pnpm --filter @workspace/api-server run dev` — API server (port 8080, path `/api`)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string
- Required env: `AI_INTEGRATIONS_ANTHROPIC_BASE_URL` + `AI_INTEGRATIONS_ANTHROPIC_API_KEY` — Replit AI Integrations (auto-provisioned)

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React + Vite, Tailwind CSS, framer-motion, shadcn/ui
- API: Express 5
- DB: PostgreSQL + Drizzle ORM (`conversations`, `messages` tables)
- AI: Anthropic Claude (via Replit AI Integrations) — chatbot backend
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Fonts: Cormorant Garamond (serif) + DM Sans (sans)
- Build: esbuild (CJS bundle)

## Where things live

- Frontend: `artifacts/hassoun-dental/src/`
  - Components: `Navbar`, `Hero`, `CabinetPhotos`, `Services`, `DoctorProfile`, `HorairesContact`, `Chatbot`, `Footer`
  - Theme: `src/index.css` — navy blue #1746A2 primary
- Backend routes: `artifacts/api-server/src/routes/anthropic/` — chatbot API (SSE streaming)
- DB schema: `lib/db/src/schema/conversations.ts`, `lib/db/src/schema/messages.ts`
- API contract: `lib/api-spec/openapi.yaml`
- AI integration: `lib/integrations-anthropic-ai/`

## Architecture decisions

- Chatbot backend proxies Anthropic via SSE streaming — API key never exposed to browser
- Single-page React app with scroll-based sections (no routing needed)
- Real Cloudinary images from the client's existing assets
- Google Maps iframe embedded in contact section
- Conversations persisted in PostgreSQL (conversations + messages tables)

## Product

Site vitrine professionnel pour cabinet dentaire :
- Hero avec photo réelle du cabinet, CTAs Doctolib + téléphone
- Grille de 4 photos du cabinet avec animations au scroll
- 8 cartes de services avec icônes SVG
- Profil Dr. Hassoun avec photo et badges de spécialités
- Horaires d'ouverture + coordonnées + carte Google Maps
- Chatbot IA 24h/24 (Claude Sonnet) avec streaming SSE
- Footer avec liens et copyright
- SEO complet (title, meta description, OG tags, lang=fr)
- Responsive mobile avec menu hamburger

## User preferences

- Langue française partout
- Pas d'emojis dans l'UI
- Couleur primaire : #1746A2 (bleu marine)
- Doctolib : #0596DE
- Fonts : Cormorant Garamond (titres) + DM Sans (corps)

## Gotchas

- Le chatbot utilise SSE streaming — ne pas utiliser le hook `useSendAnthropicMessage` pour l'appel streaming, utiliser `fetch` + `ReadableStream` directement
- Les images viennent de Cloudinary (URLs stables)
- `pnpm --filter @workspace/db run push` avant de démarrer si nouvelles tables
- Le frontend utilise `import.meta.env.BASE_URL` pour construire les URLs API

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
- Doctolib: https://www.doctolib.fr/dentiste/marseille/stephanie-hassoun
- Cabinet: 192A Avenue des Chartreux, 13004 Marseille — 04 91 45 56 79
