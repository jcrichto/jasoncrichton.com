import { defineConfig } from 'astro/config';

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://jasoncrichton.com",
  vite: {
    ssr: {
      external: ["svgo"]
    }
  },
  experimental: {
  },
  integrations: [sitemap()]
});