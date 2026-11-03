# Sivapriya Balakrishnan — Portfolio

A personal portfolio website for a **Software Developer** working with **Generative AI**. It is a warm, dark, editorial design built with React and Vite, and it is fully responsive.

**Live site:** https://sivapriya-balakrishnan.vercel.app/


## Highlights

- **Scroll-triggered name animation.** The full name starts large in the hero and travels smoothly into the navbar as you scroll. It reverses when you scroll back up.
- **Warm espresso palette**, drawn from the portrait photograph, with soft amber lighting and subtle gradients. All colours are shared CSS variables in `src/styles/variables.css`.
- **Sections:** Hero, About, Skills, Projects, Education, Certifications, GitHub and Contact.
- **Reveal-on-scroll** animations and an active-section highlight in the navbar.
- **Responsive** from mobile to wide desktop, with reduced-motion support.
- **Security-minded.** There are no third-party requests, self-hosted fonts and a strict Content Security Policy in production.

## Tech stack

| Area | Tools |
| --- | --- |
| Framework | React 19 |
| Build tool | Vite |
| Styling | Plain CSS with custom properties (design tokens) |
| Fonts | Anton, Inter Tight, Manrope, Cormorant Garamond (self-hosted via Fontsource) |

## Getting started

**Requirements:** Node.js 20 or newer.

```bash
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>
npm install
npm run dev
```

Open the URL shown in the terminal, usually `http://localhost:5173`.

### Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Starts the development server with hot reload |
| `npm run build` | Creates a production build in `dist/` |
| `npm run preview` | Serves the production build locally |

## Editing content

All text lives in **`src/data/content.js`**, and components only handle layout. To update the site, edit that file:

| To change | Edit |
| --- | --- |
| Name, role, intro | `profile` |
| Navigation links | `navItems` |
| Skills (add a skill or a whole card) | `skills` |
| Projects | `projects` |
| Education and certifications | `education`, `certifications` |
| GitHub link | `github` (set `href` and `label`) |
| Email, LinkedIn, location | `contact` |

To change the portrait, replace `src/assets/hero-portrait.jpg` with a new image.

## Project structure

```
public/            favicon, robots.txt, security headers
src/
  assets/          portrait, grain texture
  components/      Navbar, Background, TravelingName, Reveal, ProjectPanel, Footer, ...
  sections/        Hero, About, Skills, Projects, Education, Certifications, GitHub, Contact
  hooks/           useReveal, useActiveSection
  data/content.js  all portfolio content
  styles/          variables (colour tokens), base, background, nav, hero, sections, projects, github
vercel.json        security headers for Vercel
vite.config.js     build config and production-only CSP injection
```

## Deployment

The site is static, so it works on any static host. Use these settings:

- **Build command:** `npm run build`
- **Output directory:** `dist`

Recommended hosts are **Vercel**, **Netlify** and **Cloudflare Pages**. They apply the security headers in `vercel.json` and `public/_headers`. GitHub Pages also works, but it cannot set custom response headers.

## Security notes

- No `eval`, no `dangerouslySetInnerHTML`, no forms, and no API keys or tokens. Contact is by `mailto` and LinkedIn links only.
- Fonts are self-hosted, so the site makes zero third-party requests.
- A strict Content Security Policy is injected into `dist/index.html` at build time. It is not applied in `npm run dev`, because the dev server needs inline scripts.
- `frame-ancestors` cannot be set with a `<meta>` tag, so it is set in `public/_headers` and `vercel.json`.
- External links use `rel="noopener noreferrer"`.
- Run `npm audit` before each deploy.

## Contact

- Email: sivapriyabalakrish@gmail.com
- LinkedIn: [linkedin.com/in/sivapriya-balakrishnan](https://linkedin.com/in/sivapriya-balakrishnan)

## License

© 2026 Sivapriya Balakrishnan. All rights reserved. The code and the photograph are not licensed for reuse without permission.
