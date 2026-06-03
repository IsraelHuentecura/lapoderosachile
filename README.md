# La Poderosa Chile

Sitio web estático de **La Poderosa Chile**, construido con [Astro](https://astro.build).

## Desarrollo

```bash
npm install
npm run dev      # servidor local en http://localhost:4321
npm run build    # genera el sitio estático en dist/
npm run preview  # previsualiza el build
```

## Edición rápida

- **Contenido de la home:** `src/pages/index.astro` (textos, ejes, enlace a Instagram en `INSTAGRAM_URL`).
- **Estilos globales / `<head>`:** `src/layouts/Layout.astro`.

## Deploy

El sitio se publica en **Cloudflare Pages** (proyecto `lapoderosachile`) a partir del contenido de `dist/`.
