/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead } from '../astro.16c43ff6.mjs';
import { $ as $$Container, a as $$Layout } from './404.astro.c402aae6.mjs';
/* empty css                            */import 'classnames';

const $$Astro = createAstro("https://rizkyy.dev");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Muhamad Rizky" }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate`
    ${maybeRenderHead()}<div class="mb-10 flex flex-col space-y-7">
      <p class="opacity-80">
        Hi 👋 I’m Rizky. Developer from
        <a href="https://id.wikipedia.org/wiki/Kota_Bogor" target="_blank">
          Bogor
        </a>. Lately i work as FrontEnd Engineer and i'm dedicated to crafting
        beautiful UI, enhancing web technology that easy to accessible with user
        and developer a like. Skilled in React, and frontend tools. Also
        Passionated with design and programming.
      </p>

      <p class="opacity-80">
        I'm interesting in <a href="https://en.wikipedia.org/wiki/Functional_programming" target="_blank">functional programming</a>, and currently learning
        <a href="https://elixir-lang.org/" class="text-purple-500" target="_blank">Elixir</a> for my playground. Since high school i like to create innovation by learn
        <a href="https://cplusplus.com/" class="text-blue-500" target="_blank">C++</a> Language that using for my iOT and robotic projects by Arduino or Raspbery
        pi. I like to spent my time for learn algorithm and new things.
      </p>

      <p class="opacity-80">
        If you interested to collaborate with me, you can write your message
        with my email in
        <a href="mailto:hello@rizkyy.dev" class="text-pink-400">here</a>, and
        other social media accounts. Thanks! Nice to see you :)
      </p>
    </div>

    <hr class="opacity-30">
  ` })}
` })}`;
}, "/Users/rizkyy/Desktop/Projekan/astroship/src/pages/index.astro");

const $$file = "/Users/rizkyy/Desktop/Projekan/astroship/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
