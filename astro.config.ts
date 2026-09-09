import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://romil2112.github.io',
  integrations: [sitemap()],
});
