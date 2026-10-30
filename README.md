# Sivapriya Balakrishnan — Portfolio (React + Vite)

## Run locally (VS Code)
1. Install Node.js 20 or newer (https://nodejs.org).
2. Open this folder in VS Code (`File → Open Folder`), then open the terminal (`Ctrl+``).
3. `npm install`
4. `npm run dev` → open the URL shown (usually http://localhost:5173).

## Production build
```
npm run build      # outputs to /dist
npm run preview    # serves /dist locally to check the real build
```

## Editing content
All text lives in `src/data/content.js`. Components only handle layout.

## Structure
```
public/            favicon, robots.txt, _headers (Netlify/Cloudflare), static files
src/
  assets/          grain texture
  components/      Navbar, Background, Reveal, ProjectPanel, SectionHeading, Footer
  sections/        Hero, About, Skills, Projects, Education, Certifications, Contact
  hooks/           useReveal, useActiveSection
  data/content.js  all portfolio content
  styles/          variables, base, background, nav, hero, sections, projects
vercel.json        security headers for Vercel
vite.config.js     build config + production-only CSP injection
```

## Security notes
- No `eval`, no `dangerouslySetInnerHTML`, no forms, no API keys or tokens. Contact is via mailto/LinkedIn links only.
- Fonts are self-hosted (npm `@fontsource`), so the site makes **zero third-party requests**.
- CSP is injected into `dist/index.html` at build time (`default-src 'none'`, scripts/styles/fonts/images from `'self'` only).
  It is deliberately not applied in `npm run dev` because the dev server needs inline scripts.
- `frame-ancestors` (clickjacking protection) cannot be set via `<meta>`; it is set in `public/_headers` and `vercel.json`.
- External links use `rel="noopener noreferrer"`.
- Run `npm audit` before each deploy and keep dependencies updated.

## Free hosting (recommended order)
1. **Cloudflare Pages** or **Netlify**: connect the GitHub repo, build command `npm run build`, output `dist`. `public/_headers` is applied automatically, giving you the full security headers (CSP, HSTS, X-Frame-Options, etc.).
2. **Vercel**: same settings; `vercel.json` applies the headers.
3. **GitHub Pages**: works (relative `base`), but it cannot set custom response headers, so you only get the meta-tag CSP, with no `frame-ancestors`/HSTS control.

After deploying, check your URL at https://securityheaders.com and https://observatory.mozilla.org.

## Using a custom/final URL
Add `<link rel="canonical" href="https://your-url">` and Open Graph `og:url` in `index.html` once the URL is known.
