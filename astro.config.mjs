import {defineConfig} from "astro/config";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import sitemap from "@astrojs/sitemap";
import markdownIntegration from "@astropub/md";
import netlify from "@astrojs/netlify/functions";

export default defineConfig({
  site: "https://rizkyy.dev",
  integrations: [
    tailwind(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
    markdownIntegration(),
    sitemap(),
  ],
  output: "server",
  adapter: netlify(),
});
