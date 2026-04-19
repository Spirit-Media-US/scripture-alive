import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sanity from '@sanity/astro';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://scripturealive.com',
  server: { port: 4329, host: true },
  build: {
    // 100 Club v4: 'auto' lets Astro inline small stylesheets and externalize
    // larger ones, which scripts/async-css.mjs then rewrites to media=print
    // swap so they load async. Hand-rolled critical CSS in Layout.astro's
    // <style is:inline> handles above-fold rendering.
    inlineStylesheets: 'auto',
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
