# Muslim Traders

[![React](https://img.shields.io/badge/React-19-blue?logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7-orange?logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-blue?logo=tailwindcss)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Vercel](https://img.shields.io/badge/Vercel-Ready-black?logo=vercel)](https://vercel.com/)

**Official PTC Distributor Website** – Modern, responsive interface for Muslim Traders (est. 1988), Chakwal, Pakistan. Features searchable price board for cigarettes & Velo, business timeline, operations overview, and contact info. Built with React 19, Shadcn/UI, Tailwind CSS 4, and Vite.

## 🎯 Features

- **Price Board**: Search/filter Cigarettes & Velo SKUs with live stats (avg/high/low rates, WS Filer/Non-Filer).
- **Responsive Design**: Mobile-first with sticky nav, collapsible menu, touch-optimized tables.
- **Theme Toggle**: Light/dark mode via `ThemeContext`.
- **Business Sections**: Hero, Journey (1988–present), Operations, Portfolio (Dunhill, Capstan, etc.), Contact.
- **Performance**: Framer Motion animations, React 19, optimized Vite builds.
- **Custom Tools**: Google Maps ready (`Map.tsx`), Manus debug logging (console/network/session).
- **Accessibility**: Radix UI primitives, ARIA labels, keyboard nav.

## 🚀 Quick Start

```bash
# Clone & Install (pnpm recommended)
git clone <repo> &amp;&amp; cd "Muslim Traders manus"
pnpm install

# Development (localhost:3000)
pnpm dev

# Build & Preview
pnpm build
pnpm preview

# Production Build & Start
pnpm build
pnpm start
```

**Live Preview**: Run `pnpm dev` – opens [http://localhost:3000](http://localhost:3000).

## 🛠 Tech Stack

| Category | Technologies |
|----------|--------------|
| **Framework** | React 19 + TypeScript 5.6 |
| **Build Tool** | Vite 7 + Tailwind CSS 4 (@tailwindcss/vite) |
| **UI Library** | Shadcn/UI (full components: button, table, dialog, etc.) + Lucide icons |
| **Styling** | Tailwind + clsx + class-variance-authority (CVA) + tailwind-merge |
| **Routing/State** | Wouter + React Context (ThemeProvider) + React Hook Form + Zod |
| **Animations/Charts** | Framer Motion + Recharts |
| **Server** | Express.js (static SPA hosting) |
| **Other** | Sonner (toasts), Google Maps (client-side), Manus plugins (debugging) |

**Dependencies** (50+): `@radix-ui/*`, `react-hook-form`, `zod`, `axios`, `wouter`, `next-themes`.

## 🎨 Design Philosophy

**Modern Minimalist with Warm Accents** (from `ideas.md`):
- **Colors**: Cream bg (#faf8f3), deep navy primary (#1a3a52), terracotta accents (#c85a3a), sage green.
- **Typography**: Georgia (headings), Poppins (body).
- **Layout**: Asymmetric grids, generous whitespace, card-based price table (mobile), data grid (desktop).
- **Interactions**: Smooth fades (0.6s), hover lifts, scroll animations.
- **Responsive**: Split-screen hero → stacked cards.

## 📁 Project Structure

```
d:/Muslim Traders manus/
├── client/              # React app root
│   ├── src/
│   │   ├── pages/       # Home.tsx (main), NotFound.tsx
│   │   ├── components/  # Shadcn/UI (ui/), custom (Map.tsx, ManusDialog.tsx)
│   │   ├── contexts/    # ThemeContext.tsx
│   │   └── hooks/       # useMobile.tsx, etc.
│   ├── public/          # Assets + __manus__/debug-collector.js
│   └── index.html
├── server/              # index.ts (Express)
├── shared/              # const.ts
├── vite.config.ts       # Tailwind, React plugin, Manus debug
├── package.json         # pnpm, scripts
├── vercel.json          # Deployment
├── ideas.md            # UI brainstorms
└── TODO.md             # This task tracker
```

**Key Files**:
- `client/src/pages/Home.tsx`: Core content (price data hardcoded).
- `client/src/App.tsx`: Router + providers.
- `vite.config.ts`: Manus debug collector (logs to `.manus-logs/`).

## 💼 Business Context

- **Founded**: 1988, Mohallah Eid Gah, Chakwal, Pakistan.
- **Partners**: PTC (current), past: Haleeb Foods (1988–2008), P&G (1990–2007), Super Crisp (1991–2011).
- **Operations**: Retail supply, wholesale (filer/non-filer rates), inventory, trade programs.
- **Network**: 375+ exclusive distributors, 400k+ retail stores.
- **Contact**: +92 543 669062 | Mon-Thu/Sat 7:30AM-7:30PM.

## 🔧 Custom Features

### Manus Debug Collector
- Logs browser console/network/session to `.manus-logs/` (auto-trims at 1MB).
- Dev-only: POST `/__manus__/logs`.

### Google Maps (`Map.tsx`)
- Ready for markers, places, routes (via proxy).
- Env: `VITE_FRONTEND_FORGE_API_KEY`.

## 🚀 Deployment

**Vercel** (one-click):
```bash
pnpm build:vercel  # Or full build
vercel --prod
```
- `vercel.json` configured.
- Prod server bundles to `dist/index.js`.

## 📊 Price Board Data

Hardcoded in `Home.tsx` (20+ SKUs). Example:
| Brand | Category | Outer Rate | Rate | WS Filer | WS Non-Filer |
|-------|----------|------------|------|----------|--------------|
| Dunhill Light | Cigarettes | 5,786 | 28,930 | 28,302 | 28,865 |

**Updated**: 16 Apr 2026.

## 🤝 Contributing

1. Fork & PR.
2. `pnpm format` (Prettier).
3. `pnpm check` (TypeScript).

## 📄 License

MIT © Muslim Traders v2

---

**Built with ❤️ for efficient distributor operations.** Questions? Check `ideas.md` or open an issue.

