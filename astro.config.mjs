// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  base: "/",
  output: "static",
  adapter: vercel({
    analytics: true, // Changed from webAnalytics: { enabled: true }
  }),
  build: {
    assets: "_astro",
  },
  vite: {
    // Ensure CSS is properly processed
    build: {
      cssCodeSplit: true,
      assetsInlineLimit: 0,
    },
  },
});
