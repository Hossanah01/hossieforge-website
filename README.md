# HossieForge portfolio

A responsive Next.js portfolio for Akande Hossanah Israel, founder of HossieForge.

## Run locally

1. Install Node.js (LTS).
2. In this folder, run `npm install`.
3. Run `npm run dev`.
4. Open `http://localhost:3000`.

## Deploy to Vercel

1. Create a GitHub repository (for example `hossieforge-portfolio`) under `Hossanah01`.
2. Upload/push this project to that repository.
3. Import the repository at Vercel and accept the detected Next.js settings.
4. Deploy. Vercel will provide a project URL; rename the project to `hossieforge` if the name is available.
5. Update `siteUrl` in `app/layout.tsx`, `app/robots.ts`, and `app/sitemap.ts` to the exact deployed URL if it differs.

## Before launch

- Replace the project placeholder in the Work section with real projects and verified links.
- Confirm that the skills list accurately represents your current proficiency.
- Add a CV file to `public/` and a download link if you want a downloadable CV.
- Add a real contact-form provider/API if you want form submissions; currently email and WhatsApp links work directly.
- Create/verify your Google Search Console property and submit `/sitemap.xml` after deployment.

## Important

The site is configured with the initial URL `https://hossieforge.vercel.app`. A Vercel deployment and Google indexing are not performed by this source package alone. You must connect your GitHub/Vercel accounts and complete the deployment and Search Console verification.
