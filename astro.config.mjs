import { defineConfig } from "astro/config";

// https://astro.build/config
// import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://blog.and249.codes/",
  integrations: [sitemap()],
  markdown: {
    shikiConfig: {
      theme: "material-theme-ocean",
    },
    drafts: true,
  },
});
