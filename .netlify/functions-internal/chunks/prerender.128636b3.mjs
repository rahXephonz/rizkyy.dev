/* empty css                        */import { c as createAstro, a as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead } from './astro.6d3131d7.mjs';
import { c as getCollection, d as parseTime, $ as $$Picture, M as Markdown } from './pages/_slug_.astro.73f784a8.mjs';
import { d as $$Layout, c as $$Container } from './pages/404.astro.0a88eccc.mjs';
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
/* empty css                           */import 'node:assert';
import 'node:fs';
import 'node:process';
import 'node:module';
import 'node:v8';
import 'node:util';
import 'shiki';
import 'classnames';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a, _b;
const $$Astro = createAstro("https://rizkyy.dev");
const prerender = true;
async function getStaticPaths() {
  const projectEntries = await getCollection("projects");
  return projectEntries.map((entry) => ({
    params: { slug: entry.slug },
    props: { entry }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { entry } = Astro2.props;
  return renderTemplate(_b || (_b = __template(["", '\n\n<link rel="stylesheet" href="/css/hljs-github-dark.css">\n<script src="/js/highlight.min.js"><\/script>\n<script>\n  hljs.highlightAll();\n<\/script>'])), renderComponent($$result, "Layout", $$Layout, { "title": entry.data.title }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate(_a || (_a = __template(["\n    ", '<div class="meta">\n      <div class="meta-title">\n        <h1 class="text-3xl font-bold">', '</h1>\n        <div class="flex justify-between items-center mt-3 xsm:flex-col xsm:items-start">\n          <p>', '</p>\n          <time class="text-sm text-gray-500 mt-2">', '</time>\n        </div>\n      </div>\n      <div class="meta-image mt-10">\n        ', '\n      </div>\n    </div>\n    <div class="blog-prose mt-10">\n      ', '\n    </div>\n\n    <script src="https://giscus.app/client.js" data-repo="ioofy/rizkyy.dev" data-repo-id="R_kgDOJ6KTcA" data-category="General" data-category-id="DIC_kwDOJ6KTcM4CX2nG" data-mapping="pathname" data-strict="0" data-reactions-enabled="1" data-emit-metadata="0" data-input-position="bottom" data-theme="dark_high_contrast" data-lang="en" crossorigin="anonymous" async><\/script>\n  '])), maybeRenderHead(), entry.data.title, entry.data.snippet, parseTime(entry.data.createdDate), renderComponent($$result3, "Picture", $$Picture, { "src": entry.data.image.src, "alt": entry.data.image.alt, "sizes": "(max-width: 800px) 100vw, 600px", "widths": [200, 400, 600], "aspectRatio": "16:9", "format": "webp", "fit": "cover", "position": "center", "loading": "eager", "class": "w-full rounded-md" }), renderComponent($$result3, "Markdown", Markdown, { "of": entry.body })) })}
` }));
}, "/Users/rizkyy/Desktop/Projekan/astroship/src/pages/projects/[slug].astro");

const $$file = "/Users/rizkyy/Desktop/Projekan/astroship/src/pages/projects/[slug].astro";
const $$url = "/projects/[slug]";

export { $$slug as default, $$file as file, getStaticPaths, prerender, $$url as url };
