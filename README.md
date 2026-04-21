# Muslim Traders

[![React](https://img.shields.io/badge/React-19-blue?logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7-orange?logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-blue?logo=tailwindcss)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Vercel](https://img.shields.io/badge/Vercel-Ready-black?logo=vercel)](https://vercel.com/)

**Official PTC Distributor Website** – A premium, modern digital experience for Muslim Traders (est. 1988), Chakwal, Pakistan. Featuring a glowing glassmorphism aesthetic, a dynamic price board for FMCG & Velo distribution, an interactive business timeline, and leadership profiles. Built as a blazing-fast Single Page Application (SPA) with React 19, Tailwind CSS 4, and Vite.

## 🎯 Features

- **Dynamic Price Board**: Search and filter Cigarettes & Velo SKUs with live stats. Automatically reformats into elegant responsive cards on mobile.
- **Historic Timeline**: An interactive "Through the Decades" timeline chronicling partnerships with Haleeb Foods, P&G, Super Crisp, and PTC since 1988.
- **Premium Glassmorphism UI**: High-end minimalist design with 3D elements, glowing orange accents, frosted glass containers, and abstract floating background animations.
- **Single Page Architecture (SPA)**: Fluid navigation between Hero, Journey, Operations, Leadership, Portfolio, and Contact sections without page reloads.
- **Responsive Design**: Flawless mobile-first implementation ensuring complex data tables degrade gracefully on smaller screens.
- **Performance**: Optimized Vite builds with zero-layout-shift micro-animations.

## 🚀 Quick Start

```bash
# Clone & Install (pnpm recommended)
git clone <repo> && cd "Muslim Traders manus"
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

| Category              | Technologies                                                            |
| --------------------- | ----------------------------------------------------------------------- |
| **Framework**         | React 19 + TypeScript 5.6                                               |
| **Build Tool**        | Vite 7 + Tailwind CSS 4 (@tailwindcss/vite)                             |
| **UI Library**        | Shadcn/UI (buttons, dialogs, dropdowns) + Lucide icons                  |
| **Styling**           | Tailwind + custom CSS utilities (`.glass`, `.pill-3d`) + clsx + tailwind-merge |
| **Routing/State**     | Wouter + React Hooks                                                    |
| **Animations**        | Pure CSS Keyframes (floatSlow, pulse-dot, fadeInUp)                     |
| **Server**            | Express.js (static SPA hosting)                                         |

## 🎨 Design Philosophy

**Premium Glassmorphism with Warm Brand Heritage**

- **Colors**: Rich dark brown primary (`#3c2415`), warm beige backgrounds (`#f5ebe0`), and high-contrast glowing orange accents (`#e68a00`, `#ff9d2e`).
- **Typography**: Unified clean geometric look using **Plus Jakarta Sans** across all headings and body copy.
- **Layout**: Floating frosted glass cards (`.glass`, `.glass-strong`), absolute centered grids, and robust mobile-first responsive scaling.
- **Interactions**: Smooth entrance fades, floating 3D pills (`.pill-3d`), and deep hover-lift drop shadows.

## 💼 Business Context

- **Founded**: 1988, Mohallah Eid Gah, Chakwal, Pakistan.
- **Leadership**: Abdul Rauf Athar (Founder & Managing Director).
- **Current Flagship Partner**: Pakistan Tobacco Company (PTC) — the first multinational established in Pakistan (1947).
- **Past Partnerships**: Haleeb Foods (1988–2008), P&G (1990–2007), Super Crisp (1991–2011).
- **Network Scope**: 375+ exclusive distributors, 400,000+ retail stores across the region.
- **Contact**: +92 543 669062 | Mon-Thu/Sat 7:30AM-7:30PM.

## 🚀 Deployment

**Vercel** (one-click):

```bash
pnpm build:vercel  # Or full build
vercel --prod
```

- `vercel.json` configured for SPA routing.
- Prod server bundles to `dist/index.js`.

## 🤝 Contributing

1. Fork & PR.
2. Ensure you are utilizing the established `.glass` and `.pill-3d` CSS utilities when creating new components to maintain the design system.
3. `pnpm format` (Prettier).
4. `pnpm check` (TypeScript).

## 📄 License

MIT © Muslim Traders

---

**Built with ❤️ to power the next generation of FMCG distribution.**
