// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import aws from "astro-sst";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://joshmc.dev",
  output: "server",
  adapter: aws(),
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
