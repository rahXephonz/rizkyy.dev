/* eslint-disable no-restricted-syntax */
/* eslint-disable import/no-extraneous-dependencies */
import {z} from "astro:content";
import * as cheerio from "cheerio";
import MarkdownIt from "markdown-it";

type GraphqlBodyObj = {
  query: TUniversal;
  variables?: Object;
};

interface TocItem {
  content: string;
  slug: string;
  level: number;
}

export const CodeType = z.object({
  data: z.object({
    codesConnection: z.object({
      edges: z.array(
        z.object({
          node: z.object({
            title: z.string(),
            slug: z.string(),
          }),
        })
      ),
    }),
  }),
});

export const PostType = z.object({
  data: z.object({
    postsConnection: z.object({
      edges: z.array(
        z.object({
          node: z.object({
            excerpt: z.string(),
            content: z.string(),
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

export const CodeDetailType = z.object({
  data: z.object({
    code: z.object({
      title: z.string(),
      slug: z.string(),
      content: z.string(),
    }),
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

export function replaceContent(htmlContent: string) {
  // Load the HTML content
  const $ = cheerio.load(htmlContent);

  // Find the <img> tags
  const imgTags = $("img");

  // Find all <a> tags
  const anchorTags = $("a");

  // Add target="_blank" attribute to each <a> tag
  anchorTags.each(function replaceAnchor() {
    $(this).attr("target", "_blank");
  });

  imgTags.each(function replaceImg() {
    const imageUrl = $(this).attr("src");
    const altText = $(this).attr("alt");

    const newImgComponent = `
      <div class="image-container">
        <div id="show-modal" class="modal">
          <span class="close">&times;</span>
          <img class="modal-content" id="modal-img"/>
          <p class="caption"></p>
        </div>

        <figure>
          <picture>
            <img src="${imageUrl}" alt="${altText}" sizes="(max-width: 800px) 100vw, 800px" width="800px" height="400px" loading="eager" class="image-pict rounded-sm max-w-full" />
          </picture>
          <figcaption class="text-center text-gray-400 text-sm">${altText}</figcaption>
        </figure>
      </div>
    `;

    // Replace the <img> tag with the Astro component
    $(this).replaceWith(newImgComponent);
  });

  const bodyContent = $("body").html();

  // Return the modified HTML content
  return bodyContent;
}

export function calculateReadingTime(
  markdownContent: string,
  averageReadingSpeed = 250
): number {
  // Convert Markdown content to plain text
  const plainText = markdownContent
    .replace(/#|##|###|####|#####|######/g, "") // Remove headers
    .replace(/\[(.*?)\]\((.*?)\)/g, "$1") // Remove links
    .replace(/\*\*(.*?)\*\*/g, "$1") // Remove bold text
    .replace(/\*(.*?)\*/g, "$1") // Remove italic text
    .replace(/`([^`]+)`/g, "$1"); // Remove code snippets

  // Count the number of words in plain text content
  const wordCount = plainText.trim().split(/\s+/).length;

  // Calculate the estimated reading time
  const readingTime = Math.ceil(wordCount / averageReadingSpeed);

  return readingTime;
}

export function generateTableOfContents(markdownContent: string): TocItem[] {
  const md = new MarkdownIt();
  const tokens = md.parse(markdownContent, {});

  const tocItems: TocItem[] = [];

  for (const token of tokens) {
    if (token.type === "heading_open") {
      const headingLevel = Number(token.tag.slice(1)); // Extract heading level from the tag

      // Check if the heading level is "h2" before processing
      if (token.tag === "h2" || token.tag === "h3") {
        const headingContentToken = tokens[tokens.indexOf(token) + 1]; // Get the next token for heading content
        const slug = headingContentToken.content
          .toLowerCase()
          .replace(/[\s]+/g, "-") // Convert spaces to dashes
          .replace(/[^\w-]+/g, ""); // Remove non-word characters except dashes

        tocItems.push({
          content: headingContentToken.content,
          slug,
          level: headingLevel,
        });
      }
    }
  }

  return tocItems;
}
