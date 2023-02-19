import { defineConfig } from 'astro/config';

// https://astro.build/config
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import prefetch from "@astrojs/prefetch";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

const website = 'http://localhost:300/'

// https://astro.build/config
export default defineConfig({
  site: website,
  output: "server",
  site: 'http://127.0.0.1:3000/',
  adapter: cloudflare({
    mode: "directory"
  }),
  integrations: [
    tailwind(), 
    prefetch(), 
    sitemap({
      lastmod: new Date()
    })
  ]
});