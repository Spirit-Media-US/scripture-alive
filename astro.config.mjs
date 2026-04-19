import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sanity from '@sanity/astro';
import sitemap from '@astrojs/sitemap';
import inline from '@playform/inline';

export default defineConfig({
  site: 'https://scripturealive.com',
  server: { port: 4329, host: true },
  build: {
    // Let Beasties (@playform/inline) handle critical-CSS inlining; keep auto for the rest.
    inlineStylesheets: 'auto',
  },
  integrations: [
    sitemap(),
    sanity({
      projectId: 'vxczpihg',
      dataset: 'production',
      useCdn: false,
    }),
    // Beasties: extract above-fold critical CSS, inline it, async-load the rest.
    inline(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
