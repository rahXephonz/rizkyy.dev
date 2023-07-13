import {defineConfig} from "astro/config";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import sitemap from "@astrojs/sitemap";
import markdownIntegration from "@astropub/md";
import partytown from "@astrojs/partytown";
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
    partytown({
      // Adds dataLayer.push as a forwarding-event.
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
  adapter: netlify(),
  output: "server",
});
