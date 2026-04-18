import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sanity from '@sanity/astro';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://scripturealive.com',
  server: { port: 4329, host: true },
  build: {
    // Inline all stylesheets — eliminates render-blocking CSS round-trip
    inlineStylesheets: 'always',
  },
  integrations: [
    sitemap(),
    sanity({
      projectId: 'vxczpihg',
      dataset: 'production',
      useCdn: false,
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
