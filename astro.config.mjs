import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sanity from '@sanity/astro';
import sitemap from '@astrojs/sitemap';
import netlify from '@astrojs/netlify';

export default defineConfig({
  site: 'https://scripturealive.com',
  adapter: netlify(),
  server: { port: 4329, host: true },
  integrations: [
    sitemap(),
    sanity({
      projectId: 'vxczpihg',
      dataset: 'production',
      useCdn: false,
      studioBasePath: '/studio',
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
