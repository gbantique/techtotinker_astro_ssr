// astro.config.mjs

import { defineConfig } from 'astro/config';
// import { collections } from './src/content/config'; // Import the collections from your config.ts file
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: 'https://techtotinker.com',
  // integrations: [tailwind(), react()],
  output: 'server',
  integrations: [react(), sitemap()],
  adapter: netlify()
});