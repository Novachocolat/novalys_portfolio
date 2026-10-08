// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// Déploiement GitHub Pages :
// - dépôt nommé "Novachocolat.github.io" => site à la racine, pas de `base`
// - autre nom de dépôt (ex. "portfolio") => ajouter base: "/portfolio"
export default defineConfig({
  site: "https://novachocolat.github.io",
  integrations: [tailwind()],
  vite: {
    resolve: {
      alias: { "@": "/src" },
    },
  },
  output: "static",
  server: { host: true, port: 4321 },
});
