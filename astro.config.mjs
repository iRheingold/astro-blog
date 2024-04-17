import { defineConfig } from 'astro/config';
import preact from "@astrojs/preact";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: "https://astro.alfaro.pw",
  integrations: [preact()],
  output: "server",
  adapter: vercel()
});