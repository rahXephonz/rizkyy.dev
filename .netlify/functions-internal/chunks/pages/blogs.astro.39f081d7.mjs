/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead, b as addAttribute, F as Fragment } from '../astro.6d3131d7.mjs';
import { g as graphqlFetch, p as postQuery, $ as $$Picture, a as parseTimestamp } from './_slug_.astro.73f784a8.mjs';
import { c as $$Container, d as $$Layout } from './404.astro.0a88eccc.mjs';
import 'path';
import 'process';
import 'url';
import 'node:fs/promises';
import 'node:path';
import 'node:url';
import 'node:os';
import 'fs';
import 'events';
import 'node:stream';
import 'os';
/* empty css                            */import 'node:assert';
import 'node:fs';
import 'node:process';
import 'node:module';
import 'node:v8';
import 'node:util';
import 'shiki';
import 'classnames';

const $$Astro = createAstro("https://rizkyy.dev");
const $$Blogs = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Blogs;
  const {
    data: { postsConnection }
  } = await graphqlFetch({
    query: postQuery,
    variables: {
      first: 10,
      skip: 0
    }
  });
  const posts = postsConnection.edges;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Blogs" }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate`${posts.length >= 4 ? renderTemplate`${maybeRenderHead()}<div class="mb-10 grid grid-cols-2 gap-6 xsm:grid-cols-1">
          <div class="flex flex-col space-y-3">
            ${renderComponent($$result3, "Picture", $$Picture, { "src": posts[0].node.thumbnailImage.url, "alt": "thumbnail-post", "sizes": "(max-width: 800px) 100vw, 800px", "widths": [200, 400, 800], "aspectRatio": "16:9", "fit": "cover", "position": "center", "format": "webp", "loading": "eager", "class": "w-full rounded-md" })}

            <div class="meta">
              <div class="meta-categories">
                ${posts[0].node.categories.map((item) => renderTemplate`<span class="text-purple-400 text-sm">#${item.name}</span>`)}
              </div>
              <time class="text-gray-400 text-sm font-sans meta-time">
                ${parseTimestamp(posts[0].node.createdAt)}
              </time>

              <div class="mt-2 meta-content">
                <a${addAttribute(`/blogs/${posts[0].node.slug}`, "href")} class="no-underline">
                  <p class="text-2xl font-bold font-playfair opacity-80">
                    ${posts[0].node.title}
                  </p>
                </a>
              </div>
            </div>
          </div>

          <div class="flex flex-col space-y-3">
            ${posts.splice(1, 2).map((item) => renderTemplate`<div class="flex space-x-3 xsm:flex-col xsm:space-x-0">
                <div class="w-1/2 xsm:w-full">
                  ${renderComponent($$result3, "Picture", $$Picture, { "src": item.node.thumbnailImage.url, "alt": "thumbnail-post", "sizes": "(max-width: 800px) 100vw, 800px", "widths": [200, 400, 800], "aspectRatio": "16:9", "format": "webp", "fit": "cover", "position": "center", "loading": "eager", "class": "w-full rounded-md" })}
                </div>
                <div class="w-1/2 xsm:w-full">
                  <p class="font-pollysans text-gray-400">${item.node.title}</p>
                </div>
              </div>`)}
          </div>
        </div>` : null}<ul class="list-of-blog">
      <p class="mb-3 text-xl font-playfair">All Bλog Posts</p>
      <hr class="opacity-40">
      <li class="mt-3">
        ${posts.splice(posts.length >= 3 ? 1 : 0).map((item) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, {}, { "default": ($$result4) => renderTemplate`${item.node.categories.map((c) => renderTemplate`<span class="text-purple-400 text-[13px]">#${c.name}</span>`)}<a${addAttribute(`/blogs/${item.node.slug}`, "href")} class="no-underline hover:opacity-70">
                <div class="flex justify-between items-center xsm:flex-col xsm:items-start">
                  <p class="xsm:leading-8 font-playfair font-bold text-2xl opacity-80">
                    ${item.node.title}
                  </p>

                  <time class="text-sm xsm:mt-3 text-gray-400">
                    ${parseTimestamp(item.node.createdAt)}
                  </time>
                </div>
              </a>
            ` })}`)}
      </li>
    </ul>
  ` })}
` })}`;
}, "/Users/rizkyy/Desktop/Projekan/astroship/src/pages/blogs.astro");

const $$file = "/Users/rizkyy/Desktop/Projekan/astroship/src/pages/blogs.astro";
const $$url = "/blogs";

export { $$Blogs as default, $$file as file, $$url as url };
