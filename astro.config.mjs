// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://okstud.io',
  integrations: [sitemap()],
  build: {
    format: 'directory',
  },
});
