import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sanity from '@sanity/astro';

export default defineConfig({
  site: 'https://scripturealive.com',
  integrations: [
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
