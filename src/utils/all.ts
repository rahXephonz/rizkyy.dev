/** */
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

export function parseTimestamp(timestamp: string): string {
  const date = new Date(timestamp);

  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");

  const parsedTime = `${year}/${month}/${day}`;
  return parsedTime;
}

export function parseTime(time: string): string {
  const date = new Date(time);

  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "2-digit",
    year: "numeric",
  };

  const parsedTime = date.toLocaleDateString("en-US", options);
  return parsedTime;
}

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
