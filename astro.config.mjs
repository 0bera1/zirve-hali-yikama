// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // TODO: gerçek alan adı alınınca güncelle
  site: 'https://www.ORNEK-ALANADI.com.tr',
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [sitemap()],
  // Astro 5 kendi vite sürümünü getirir; eklenti tipleri uyuşmadığı için any'ye çevriliyor
  vite: { plugins: [/** @type {any} */ (tailwindcss())] },
});
