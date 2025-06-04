// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  output: "static",

  // Astro's own server/preview config
  server: {
    host: "0.0.0.0",
    port: process.env.PORT ? parseInt(process.env.PORT) : 4321,
  },

  preview: {
    host: "0.0.0.0",
    port: process.env.PORT ? parseInt(process.env.PORT) : 4321,
  },

  // Vite-specific config
  vite: {
    build: {
      cssCodeSplit: true,
      assetsInlineLimit: 0,
    },
    server: {
      host: "0.0.0.0",
      hmr: {
        clientPort: process.env.PORT ? parseInt(process.env.PORT) : 4321,
      },
    },
    preview: {
      host: "0.0.0.0",
      port: process.env.PORT ? parseInt(process.env.PORT) : 4321,
      allowedHosts: [
        "portfolio-3ptx.onrender.com",
        ".onrender.com", // Allow all Render subdomains
        "all", // This allows all hosts as a fallback
      ],
    },
  },
});
