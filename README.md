# Lyntek Electronics Corporate Website

Production-oriented bilingual corporate website for **Lyntek Electronics Co., Ltd.**

## Languages

- English: `/en`
- Traditional Chinese: `/zh-TW`

Root `/` redirects by `Accept-Language` (Chinese preference → zh-TW, otherwise English).

## Technology

- Next.js 15 App Router with static generation
- React 19 and TypeScript
- Tailwind CSS 4
- Framer Motion, Lucide icons, next-themes
- Locale dictionaries + localized product/news content
- Metadata API, JSON-LD, sitemap, robots, Open Graph image

## Content architecture

- `src/i18n/` — locales, middleware helpers, dictionaries, navigation
- `src/content/` — products, news, and zh-TW translation overlays
- `src/app/[locale]/` — all marketing pages
- `src/components/` — shared UI, layout, forms, motion

## Develop

```bash
npm install
npm run dev
```

Open:
- http://localhost:3000/en
- http://localhost:3000/zh-TW

## Build

```bash
npm run lint
npm run build
npm start
```

## Launch checklist

- Replace placeholder street address and verify contact mailboxes.
- Connect contact and newsletter forms to an approved backend/CRM.
- Add approved product photography and downloadable documents.
- Obtain legal review for privacy and terms drafts.
- Verify product claims before publication.
