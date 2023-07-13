/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead, F as Fragment, b as addAttribute } from '../astro.6d3131d7.mjs';
import { c as $$Container, d as $$Layout } from './404.astro.0a88eccc.mjs';
import { c as getCollection } from './_slug_.astro.73f784a8.mjs';
/* empty css                            */import 'classnames';
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
import 'node:assert';
import 'node:fs';
import 'node:process';
import 'node:module';
import 'node:v8';
import 'node:util';
import 'shiki';

const $$Astro = createAstro("https://rizkyy.dev");
const $$Projects = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Projects;
  const publishedProjectEntries = await getCollection("projects", ({ data }) => {
    return !data.draft && data.createdDate < /* @__PURE__ */ new Date();
  });
  publishedProjectEntries.sort(function getData(a, b) {
    return a.data.createdDate.valueOf() - b.data.createdDate.valueOf();
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Projects" }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate`
    ${maybeRenderHead()}<div class="flex flex-col space-y-3">
      <p class="mb-3 opacity-60">
        Here are the Product Projects i have been creating, maintaining, and
        investing a lot of effort
      </p>

      ${publishedProjectEntries.filter((project) => project.data.type === "product").map((project, projectIdx, size) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, {}, { "default": ($$result4) => renderTemplate`
              <a class="no-underline hover:opacity-70"${addAttribute(`/projects/${project.slug}`, "href")}>
                <div class="flex justify-between xsm:flex-col xsm:space-y-1 items-center xsm:items-start">
                  <p class="font-playfair text-xl font-bold opacity-80">
                    ${project.data.title}
                  </p>
                  <p class="text-gray-500">${project.data.snippet}</p>
                </div>
              </a>

              ${size.length - 1 === projectIdx ? null : renderTemplate`<hr class="dark:opacity-20">`}` })}`)}
    </div>

    <div class="flex flex-col space-y-3 mt-20">
      <p class="mb-3 opacity-60">Side Projects for spent my freetime</p>

      ${publishedProjectEntries.filter((project) => project.data.type !== "product").map((project, projectIdx, size) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, {}, { "default": ($$result4) => renderTemplate`
              <a class="no-underline hover:opacity-70"${addAttribute(`/projects/${project.slug}`, "href")}>
                <div class="flex justify-between xsm:flex-col xsm:space-y-1 items-center xsm:items-start">
                  <p class="font-playfair text-xl font-bold opacity-80">
                    ${project.data.title}
                  </p>
                  <p class="text-gray-500">${project.data.snippet}</p>
                </div>
              </a>

              ${size.length - 1 === projectIdx ? null : renderTemplate`<hr class="dark:opacity-20">`}` })}`)}
    </div>
  ` })}
` })}`;
}, "/Users/rizkyy/Desktop/Projekan/astroship/src/pages/projects.astro");

const $$file = "/Users/rizkyy/Desktop/Projekan/astroship/src/pages/projects.astro";
const $$url = "/projects";

export { $$Projects as default, $$file as file, $$url as url };
