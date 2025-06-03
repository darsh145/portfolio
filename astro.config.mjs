// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  output: "static",
  vite: {
    build: {
      cssCodeSplit: true,
      assetsInlineLimit: 0,
    },
    preview: {
      host: "0.0.0.0",
      port: process.env.PORT ? parseInt(process.env.PORT) : 4321,
      allowedHosts: [
        "portfolio-3ptx.onrender.com",
        ".onrender.com", // Allow all Render subdomains
      ],
    },
    server: {
      host: "0.0.0.0",
      port: process.env.PORT ? parseInt(process.env.PORT) : 4321
    }
  },
});
