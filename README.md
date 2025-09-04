# CMIA — Code Mining Initiatives (Next.js + Tailwind)

A clean, deploy-ready site for **Code Mining Initiatives (CMIA)**.

## Quick Start

```bash
# 1) Install deps
npm install

# 2) Run locally
npm run dev

# 3) Build
npm run build

# 4) Deploy
# - Push to GitHub and import on Vercel, OR
# - Use the Vercel CLI: `npm i -g vercel` then `vercel`
```

## Customise Content

- Replace media in `/public/assets` or drop your files in `/public/uploads`.
- Update the gallery list in `lib/gallery.ts`.
- Team entries are in `components/Team.tsx`.
- Contact details are in `app/page.tsx` (Contact section).

## Notes

- The contact form uses Formspree. Replace the action URL with your own endpoint or a Google Form if preferred.
- Tailwind CSS is configured in `tailwind.config.ts`.
