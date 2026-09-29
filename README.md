# Maktaba Khuddam-ul-Quran — Frontend Demo

Frontend-only build of the online book store, for client preview on Vercel.
No database is needed: the book catalogue lives in `src/lib/products.ts`
and all images are in `public/`.

## Run locally

```bash
npm install
npm run dev
```

## Deploy to GitHub Pages

The site is a static export (`npm run build` writes plain HTML to `out/`).

1. Create a GitHub repo and push the **contents of this folder** as the repo root
   (so `.github/workflows/deploy.yml` sits at the top level).
2. In the repo: **Settings → Pages → Source: GitHub Actions**.
3. Every push to `main` builds and publishes to
   `https://<username>.github.io/<repo-name>/`.

The workflow sets `NEXT_PUBLIC_BASE_PATH=/<repo-name>` so links and images work
under the repo sub-path. Always reference public images via `asset()` from
`src/lib/asset.ts`.

## Deploy to Vercel

Import this folder as a project (framework: Next.js, root directory: this folder).
No environment variables are required.

## Updating books

Edit the `PRODUCTS` array in `src/lib/products.ts`. Put cover images in
`public/images/` and reference them as `/images/<file>`.

Cart and wishlist are stored in the visitor's browser (localStorage).
Checkout and the contact form are not connected to a backend in this demo.
