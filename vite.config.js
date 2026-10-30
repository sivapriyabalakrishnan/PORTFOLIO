import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Content Security Policy – injected into the PRODUCTION build only.
// (The dev server needs inline scripts for hot reloading, which a strict CSP would block.)
// Note: `frame-ancestors` is ignored in <meta> CSP, so it is also set in the hosting headers
// (see public/_headers and vercel.json).
const csp = [
  "default-src 'none'",
  "script-src 'self'",
  "style-src 'self'",
  "img-src 'self'",
  "font-src 'self'",
  "connect-src 'self'",
  "manifest-src 'self'",
  "base-uri 'self'",
  "form-action 'none'",
  "object-src 'none'",
].join('; ')

const injectCsp = () => ({
  name: 'inject-csp',
  apply: 'build',
  transformIndexHtml(html) {
    return html.replace(
      '<!-- CSP -->',
      `<meta http-equiv="Content-Security-Policy" content="${csp}" />`,
    )
  },
})

export default defineConfig({
  base: './', // relative paths: works on any host or sub-folder (e.g. GitHub Pages)
  plugins: [react(), injectCsp()],
  build: {
    assetsInlineLimit: 0, // never inline assets as data: URIs, so CSP can stay strict
    sourcemap: false,
    target: 'es2020',
  },
})
