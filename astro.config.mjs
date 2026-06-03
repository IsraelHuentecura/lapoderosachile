// @ts-check
import { defineConfig } from 'astro/config'

// Sitio estático (SSG). El build genera `dist/`, que se publica en
// Cloudflare Pages. No se necesita adapter para contenido estático.
export default defineConfig({
  site: 'https://lapoderosachile.pages.dev',
})
