import { defineConfig } from "astro/config";
import yaml from "@rollup/plugin-yaml";
import preact from "@astrojs/preact";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://dmenezesgabriel.github.io",
  base:
    import.meta.env.PROD === true ? import.meta.env.VITE_PROD_BASE_URL : "/",
  vite: {
    plugins: [yaml()],
  },
  integrations: [preact(), mdx()],
  markdown: {
    shikiConfig: {
      theme: "dracula",
      wrap: true,
    },
  },
});
