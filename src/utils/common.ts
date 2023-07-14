import {z} from "astro:content";

type GraphqlBodyObj = {
  query: TUniversal;
  variables?: Object;
};

export const PostType = z.object({
  data: z.object({
    postsConnection: z.object({
      edges: z.array(
        z.object({
          node: z.object({
            excerpt: z.string(),
            title: z.string(),
            slug: z.string(),
            id: z.string(),
            createdAt: z.string(),
            thumbnailImage: z.object({
              fileName: z.string(),
              url: z.string(),
            }),
            categories: z.array(
              z.object({
                name: z.string(),
                slug: z.string(),
              })
            ),
          }),
        })
      ),
    }),

    authors: z.array(
      z.object({
        photo: z.object({
          fileName: z.string(),
          url: z.string(),
        }),
      })
    ),
  }),
});

export const PostDetailType = z.object({
  data: z.object({
    post: z.object({
      author: z.object({
        name: z.string(),
        photo: z.object({
          fileName: z.string(),
          url: z.string(),
        }),
      }),
      thumbnailImage: z.object({
        fileName: z.string(),
        url: z.string(),
      }),
      categories: z.array(
        z.object({
          name: z.string(),
          slug: z.string(),
        })
      ),
      content: z.string(),
      createdAt: z.string(),
      title: z.string(),
      slug: z.string(),
      excerpt: z.string(),
    }),
  }),
});

export const graphqlFetch = async <T = TUniversal>(
  body: GraphqlBodyObj
): Promise<T> => {
  const data = await fetch(import.meta.env.PUBLIC_CMS_API, {
    method: "POST",
    headers: {"content-type": "application/json"},
    body: JSON.stringify({...body}),
  });

  return data.json() as T;
};
