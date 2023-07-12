import {z, defineCollection} from "astro:content";

const projectCollection = defineCollection({
  schema: z.object({
    draft: z.boolean(),
    title: z.string(),
    snippet: z.string(),
    type: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    createdDate: z.string().transform((str) => new Date(str)),
  }),
});

export const collections = {
  projects: projectCollection,
};
