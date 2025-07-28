import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

export default defineConfig({
  integrations: [
    tailwind(),
    react({
      include: ["**/react/*", "**/*.jsx", "**/*.tsx"],
      experimentalReactChildren: true,
    }),
  ],
  output: "static",
  site: "https://USERNAME.github.io", // Replace USERNAME with your GitHub username
  base: "/REPOSITORY_NAME", // Replace REPOSITORY_NAME with your repo name (or remove if repo name is USERNAME.github.io)
  build: {
    inlineStylesheets: "auto",
  },
  vite: {
    build: {
      cssCodeSplit: true,
      assetsInlineLimit: 0,
      rollupOptions: {
        output: {
          manualChunks: {
            react: ["react", "react-dom"],
            framer: ["framer-motion"],
          },
        },
      },
    },
    preview: {
      host: "0.0.0.0",
      port: process.env.PORT ? parseInt(process.env.PORT) : 4321,
      allowedHosts: ["all"],
    },
    ssr: {
      noExternal: ["framer-motion"],
    },
  },
});
