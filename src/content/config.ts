import {z, defineCollection} from "astro:content";

const projectCollection = defineCollection({
  schema: z.object({
    draft: z.boolean(),
    title: z.string(),
    snippet: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
  }),
});

export const collections = {
  projects: projectCollection,
};
