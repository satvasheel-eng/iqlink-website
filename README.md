# iqlink.in

The IQLink Technologies company website: TanStack Start + Tailwind, with every page prerendered to static HTML.

- `npm run dev`: local development server
- `npm run build`: builds and prerenders every page into `dist/client`
- `npm run typecheck`: TypeScript check

Every push to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes `dist/client` to GitHub Pages at https://www.iqlink.in.

Content (products, contact email, company details) lives in `src/content/site.ts`. The logo is `src/components/site/Wordmark.tsx` (`IQLinkMark`), with copies in `public/logo.svg`, `public/favicon.svg`, `public/apple-touch-icon.png` and `public/og-image.png`.
