import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sanity from '@sanity/astro';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://scripturealive.com',
  server: { port: 4329, host: true },
  build: {
    // Inline all stylesheets — eliminates render-blocking CSS round-trip.
    // Tailwind v4 CSS is ~33KB here; inlining is the fastest strategy.
    // NOTE: Beasties/@playform/inline was evaluated but pruned below-fold
    // utility classes (e.g. bg-cream, bg-gray-400, text-white/70), causing
    // visual regression. Sticking with Astro's native always-inline.
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
