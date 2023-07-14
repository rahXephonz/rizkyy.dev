import rss from "@astrojs/rss";
import {postQuery} from "@graphql/query";
import {type PostType, graphqlFetch} from "@utils/common";
import type {z} from "astro:content";

export async function get(context: {site: string}) {
  type PostQueryType = z.infer<typeof PostType>;

  const {
    data: {postsConnection},
  } = await graphqlFetch<PostQueryType>({
    query: postQuery,
    variables: {
      first: 10,
      skip: 0,
    },
  });

  return rss({
    title: "Muhamad Rizky",
    description:
      "Front End Craftsman dedicated to crafting a beautiful UI and enhancing web performance",
    site: context.site,
    items: postsConnection.edges.map((post) => ({
      title: post.node.title,
      pubDate: post.node.createdAt as unknown as Date,
      description: post.node.excerpt,
      // Compute RSS link from post `slug`
      // This example assumes all posts are rendered as `/blog/[slug]` routes
      link: `/blog/${post.node.slug}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}
