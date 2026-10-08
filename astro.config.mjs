// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// Déploiement GitHub Pages : dépôt "novalys_portfolio" => https://novachocolat.github.io/novalys_portfolio/
export default defineConfig({
  site: "https://novachocolat.github.io",
  base: "/novalys_portfolio",
  integrations: [tailwind()],
  vite: {
    resolve: {
      alias: { "@": "/src" },
    },
  },
  output: "static",
  server: { host: true, port: 4321 },
});
