import {defineConfig} from "astro/config";
import {rssSchema} from "@astrojs/rss";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import sitemap from "@astrojs/sitemap";
import markdownIntegration from "@astropub/md";
import react from "@astrojs/react";

export default defineConfig({
  schema: rssSchema,
  trailingSlash: "never",
  site: "https://rizkyy.dev",
  integrations: [
    tailwind(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
    markdownIntegration(),
    sitemap(),
    react(),
  ],
});
