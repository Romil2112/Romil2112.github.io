# romil-portfolio

Personal portfolio website for Romil Shah.

## Stack

- [Astro](https://astro.build) v7 — static site framework
- TypeScript — strict mode
- Plain CSS with custom properties
- `@astrojs/sitemap` — sitemap generation

## Prerequisites

- Node.js v18 or later (tested on v26)
- npm v9 or later

## Local development

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:4321)
npm run dev

# Type-check
npm run check
```

## Production build

```bash
npm run build
```

Output goes to `dist/`. Preview the production build locally:

```bash
npm run preview
```

## Replacing placeholders

Search for the following strings and replace them before publishing:

| Placeholder | Replace with |
|---|---|
| `https://romil2112.github.io` | Final site URL in `astro.config.ts` and `public/robots.txt` |
| `/og-default.png` | Path to a real OG image in `public/` |

## Deployment

Deployment configuration has not been added yet. The site builds to static HTML with no server-side requirements. Any static host that serves files from a directory will work.

After deploying, verify the live URL manually. A local build passing is not sufficient to confirm that paths, assets, and metadata resolve correctly on the host.
