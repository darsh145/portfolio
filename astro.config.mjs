import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

export default defineConfig({
  integrations: [tailwind(), react()],
  output: "static",

  server: {
    host: "0.0.0.0",
    port: process.env.PORT ? parseInt(process.env.PORT) : 4321,
  },

  site: "https://portfolio-3ptx.onrender.com",

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
      allowedHosts: ["portfolio-3ptx.onrender.com"],
    },
  },
});
