import {defineConfig} from "astro/config";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import markdownIntegration from "@astropub/md";

export default defineConfig({
  site: "https://rizkyy.dev",
  integrations: [
    tailwind(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
    markdownIntegration(),
    mdx(),
    sitemap(),
  ],
});
