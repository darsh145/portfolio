// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  output: "static", // Changed from "server" to "static"
  // Removed the cloudflare adapter since you're deploying to Render
  vite: {
    build: {
      cssCodeSplit: true,
      assetsInlineLimit: 0,
    },
  },
});
