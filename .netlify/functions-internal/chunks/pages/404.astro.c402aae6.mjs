/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderSlot, s as spreadAttributes, u as unescapeHTML, e as renderComponent, F as Fragment, f as renderHead } from '../astro.16c43ff6.mjs';
/* empty css                            */import cx from 'classnames';

const $$Astro$c = createAstro("https://rizkyy.dev");
const $$Container = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Container;
  const { class: className } = Astro2.props;
  const currentPath = Astro2.url.pathname;
  const isBlogPath = currentPath === "/blogs";
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(cx(["mx-auto px-5", className], {
    "max-w-3xl": !isBlogPath,
    "max-w-4xl": isBlogPath
  }), "class:list")}>
  ${renderSlot($$result, $$slots["default"])}
</div>`;
}, "/Users/rizkyy/Desktop/Projekan/astroship/src/components/container.astro");

const $$Astro$b = createAstro("https://rizkyy.dev");
const $$OpenGraphArticleTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$OpenGraphArticleTags;
  const { publishedTime, modifiedTime, expirationTime, authors, section, tags } = Astro2.props.openGraph.article;
  return renderTemplate`${publishedTime ? renderTemplate`<meta property="article:published_time"${addAttribute(publishedTime, "content")}>` : null}
${modifiedTime ? renderTemplate`<meta property="article:modified_time"${addAttribute(modifiedTime, "content")}>` : null}
${expirationTime ? renderTemplate`<meta property="article:expiration_time"${addAttribute(expirationTime, "content")}>` : null}
${authors ? authors.map((author) => renderTemplate`<meta property="article:author"${addAttribute(author, "content")}>`) : null}
${section ? renderTemplate`<meta property="article:section"${addAttribute(section, "content")}>` : null}
${tags ? tags.map((tag) => renderTemplate`<meta property="article:tag"${addAttribute(tag, "content")}>`) : null}`;
}, "/Users/rizkyy/Desktop/Projekan/astroship/node_modules/.pnpm/astro-seo@0.7.0/node_modules/astro-seo/src/components/OpenGraphArticleTags.astro");

const $$Astro$a = createAstro("https://rizkyy.dev");
const $$OpenGraphBasicTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$OpenGraphBasicTags;
  const { openGraph } = Astro2.props;
  return renderTemplate`<meta property="og:title"${addAttribute(openGraph.basic.title, "content")}>
<meta property="og:type"${addAttribute(openGraph.basic.type, "content")}>
<meta property="og:image"${addAttribute(openGraph.basic.image, "content")}>
<meta property="og:url"${addAttribute(openGraph.basic.url || Astro2.url.href, "content")}>`;
}, "/Users/rizkyy/Desktop/Projekan/astroship/node_modules/.pnpm/astro-seo@0.7.0/node_modules/astro-seo/src/components/OpenGraphBasicTags.astro");

const $$Astro$9 = createAstro("https://rizkyy.dev");
const $$OpenGraphImageTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$OpenGraphImageTags;
  const { image } = Astro2.props.openGraph.basic;
  const { url, secureUrl, type, width, height, alt } = Astro2.props.openGraph.image;
  return renderTemplate`<meta property="og:image:url"${addAttribute(image, "content")}>
${secureUrl ? renderTemplate`<meta property="og:image:secure_url"${addAttribute(secureUrl, "content")}>` : null}
${type ? renderTemplate`<meta property="og:image:type"${addAttribute(type, "content")}>` : null}
${width ? renderTemplate`<meta property="og:image:width"${addAttribute(width, "content")}>` : null}
${!(height === null) ? renderTemplate`<meta property="og:image:height"${addAttribute(height, "content")}>` : null}
${!(alt === null) ? renderTemplate`<meta property="og:image:alt"${addAttribute(alt, "content")}>` : null}`;
}, "/Users/rizkyy/Desktop/Projekan/astroship/node_modules/.pnpm/astro-seo@0.7.0/node_modules/astro-seo/src/components/OpenGraphImageTags.astro");

const $$Astro$8 = createAstro("https://rizkyy.dev");
const $$OpenGraphOptionalTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$OpenGraphOptionalTags;
  const { optional } = Astro2.props.openGraph;
  return renderTemplate`${optional.audio ? renderTemplate`<meta property="og:audio"${addAttribute(optional.audio, "content")}>` : null}
${optional.description ? renderTemplate`<meta property="og:description"${addAttribute(optional.description, "content")}>` : null}
${optional.determiner ? renderTemplate`<meta property="og:determiner"${addAttribute(optional.determiner, "content")}>` : null}
${optional.locale ? renderTemplate`<meta property="og:locale"${addAttribute(optional.locale, "content")}>` : null}
${optional.localeAlternate?.map((locale) => renderTemplate`<meta property="og:locale:alternate"${addAttribute(locale, "content")}>`)}
${optional.siteName ? renderTemplate`<meta property="og:site_name"${addAttribute(optional.siteName, "content")}>` : null}
${optional.video ? renderTemplate`<meta property="og:video"${addAttribute(optional.video, "content")}>` : null}`;
}, "/Users/rizkyy/Desktop/Projekan/astroship/node_modules/.pnpm/astro-seo@0.7.0/node_modules/astro-seo/src/components/OpenGraphOptionalTags.astro");

const $$Astro$7 = createAstro("https://rizkyy.dev");
const $$ExtendedTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$ExtendedTags;
  const { props } = Astro2;
  return renderTemplate`${props.extend.link?.map((attributes) => renderTemplate`<link${spreadAttributes(attributes)}>`)}
${props.extend.meta?.map(({ content, httpEquiv, name, property }) => renderTemplate`<meta${addAttribute(content, "content")}${addAttribute(httpEquiv, "http-eqiv")}${addAttribute(name, "name")}${addAttribute(property, "property")}>`)}`;
}, "/Users/rizkyy/Desktop/Projekan/astroship/node_modules/.pnpm/astro-seo@0.7.0/node_modules/astro-seo/src/components/ExtendedTags.astro");

const $$Astro$6 = createAstro("https://rizkyy.dev");
const $$TwitterTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$TwitterTags;
  const { card, site, title, creator, description, image, imageAlt } = Astro2.props.twitter;
  return renderTemplate`${card ? renderTemplate`<meta name="twitter:card"${addAttribute(card, "content")}>` : null}
${site ? renderTemplate`<meta name="twitter:site"${addAttribute(site, "content")}>` : null}
${title ? renderTemplate`<meta name="twitter:title"${addAttribute(title, "content")}>` : null}
${image ? renderTemplate`<meta name="twitter:image"${addAttribute(image, "content")}>` : null}
${imageAlt ? renderTemplate`<meta name="twitter:image:alt"${addAttribute(imageAlt, "content")}>` : null}
${description ? renderTemplate`<meta name="twitter:description"${addAttribute(description, "content")}>` : null}
${creator ? renderTemplate`<meta name="twitter:creator"${addAttribute(creator, "content")}>` : null}`;
}, "/Users/rizkyy/Desktop/Projekan/astroship/node_modules/.pnpm/astro-seo@0.7.0/node_modules/astro-seo/src/components/TwitterTags.astro");

const $$Astro$5 = createAstro("https://rizkyy.dev");
const $$SEO = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$SEO;
  const { props } = Astro2;
  const { title, description, canonical, noindex, nofollow, charset } = props;
  function validateProps(props2) {
    const { openGraph, description: description2 } = props2;
    if (openGraph) {
      if (!openGraph.basic || openGraph.basic.title == null || openGraph.basic.type == null || openGraph.basic.image == null) {
        throw new Error(
          "If you pass the openGraph prop, you have to at least define the title, type, and image basic properties!"
        );
      }
    }
    if (title && openGraph?.basic.title) {
      if (title == openGraph.basic.title) {
        console.warn(
          "WARNING(astro-seo): You passed the same value to `title` and `openGraph.optional.title`. This is most likely not what you want. See docs for more."
        );
      }
    }
    if (openGraph?.basic?.image && !openGraph?.image?.alt) {
      console.warn(
        "WARNING(astro-seo): You defined `openGraph.basic.image`, but didn't define `openGraph.image.alt`. This is stongly discouraged.'"
      );
    }
  }
  validateProps(props);
  return renderTemplate`${title ? renderTemplate`<title>${unescapeHTML(title)}</title>` : null}

${charset ? renderTemplate`<meta${addAttribute(charset, "charset")}>` : null}

<link rel="canonical"${addAttribute(canonical || Astro2.url.href, "href")}>

${description ? renderTemplate`<meta name="description"${addAttribute(description, "content")}>` : null}

<meta name="robots"${addAttribute(`${noindex ? "noindex" : "index"}, ${nofollow ? "nofollow" : "follow"}`, "content")}>

${props.openGraph && renderTemplate`${renderComponent($$result, "OpenGraphBasicTags", $$OpenGraphBasicTags, { ...props })}`}
${props.openGraph?.optional && renderTemplate`${renderComponent($$result, "OpenGraphOptionalTags", $$OpenGraphOptionalTags, { ...props })}`}
${props.openGraph?.image && renderTemplate`${renderComponent($$result, "OpenGraphImageTags", $$OpenGraphImageTags, { ...props })}`}
${props.openGraph?.article && renderTemplate`${renderComponent($$result, "OpenGraphArticleTags", $$OpenGraphArticleTags, { ...props })}`}
${props.twitter && renderTemplate`${renderComponent($$result, "TwitterTags", $$TwitterTags, { ...props })}`}
${props.extend && renderTemplate`${renderComponent($$result, "ExtendedTags", $$ExtendedTags, { ...props })}`}`;
}, "/Users/rizkyy/Desktop/Projekan/astroship/node_modules/.pnpm/astro-seo@0.7.0/node_modules/astro-seo/src/SEO.astro");

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$4 = createAstro("https://rizkyy.dev");
const $$Theme = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Theme;
  return renderTemplate(_a$1 || (_a$1 = __template$1(['\n\n<script>\n  const theme = (() => {\n    if (window.matchMedia("(prefers-color-scheme: dark)").matches)\n      return "dark";\n\n    return "light";\n  })();\n\n  if (theme === "light") {\n    document.documentElement.classList.remove("dark");\n  } else {\n    document.documentElement.classList.add("dark");\n  }\n<\/script>'])));
}, "/Users/rizkyy/Desktop/Projekan/astroship/src/components/theme.astro");

const $$Astro$3 = createAstro("https://rizkyy.dev");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Footer;
  const socialMedia = [
    { id: "Github", url: "https://github.com/ioofy" },
    { id: "LinkedIn", url: "https://linkedin.com/in/mrizkyy" },
    { id: "hello@rizkyy.dev", url: "mailto:hello@rizkyy.dev" }
  ];
  return renderTemplate`${maybeRenderHead()}<footer class="my-20 xsm:my-10">
  ${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate`
    <div class="flex items-center space-x-2">
      ${socialMedia.map((item, itemIdx, size) => renderTemplate`<div class="flex space-x-2">
            <a${addAttribute(item.url, "href")}${addAttribute(cx({ "no-underline": size.length - 1 === itemIdx }), "class")}>
              ${item.id}
            </a>
            ${size.length - 1 === itemIdx ? null : renderTemplate`<span>·</span>`}
          </div>`)}
    </div>
    <div class="flex justify-between mt-[8rem] xsm:mt-[4rem]">
      <p class="font-playfair">Crafted by Figma 🎨</p>
      <ul>
        <li>
          <a href="/rss">RSS</a>
        </li>
      </ul>
    </div>
  ` })}
</footer>`;
}, "/Users/rizkyy/Desktop/Projekan/astroship/src/components/footer.astro");

const $$Astro$2 = createAstro("https://rizkyy.dev");
const $$Navbar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Navbar;
  const menuItems = [
    {
      title: "Blogs",
      path: "/blogs"
    },
    {
      title: "Projects",
      path: "/projects"
    },
    {
      title: "About",
      path: "/"
    }
  ];
  const currentPath = Astro2.url.pathname;
  const [item] = menuItems.filter((i) => i.path === currentPath);
  return renderTemplate`${renderComponent($$result, "Container", $$Container, { "class": "mt-16 mb-14" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<span class="text-2xl font-bold">${item?.title}</span>
  <header class="flex justify-end xsm:mt-5">
    <nav>
      <ul class="flex justify-between space-x-5 font-sans">
        ${menuItems.map((i, idx) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "key": idx }, { "default": ($$result3) => renderTemplate`
              <li>
                <a${addAttribute(i.path, "href")}${addAttribute(cx({
    "no-underline opacity-50": i.path === currentPath
  }), "class")}>
                  ${i.title}
                </a>
              </li>
            ` })}`)}
      </ul>
    </nav>
  </header>
` })}`;
}, "/Users/rizkyy/Desktop/Projekan/astroship/src/components/navbar/navbar.astro");

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a, _b;
const $$Astro$1 = createAstro("https://rizkyy.dev");
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site).toString();
  const resolvedImageWithDomain = new URL(
    "/opengraph.jpg",
    Astro2.site
  ).toString();
  const { title } = Astro2.props;
  const makeTitle = title && `${title}`;
  return renderTemplate(_b || (_b = __template(['<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width">\n    <link rel="icon" type="image/svg+xml" href="/favicon.ico">\n    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">\n    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">\n    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">\n    <meta name="generator"', ">\n\n    ", '\n\n    <script type="text/partytown" src="https://www.googletagmanager.com/gtag/js?id=G-93YBNJY3Z4"><\/script>\n\n    <script type="text/partytown">\n      window.dataLayer = window.dataLayer || [];\n      function gtag() {\n        dataLayer.push(arguments);\n      }\n      gtag("js", new Date());\n      gtag("config", "G-93YBNJY3Z4");\n    <\/script>\n  ', "</head>\n  <body>\n    ", "\n    <main>\n      ", "\n    </main>\n    ", "\n    ", "\n    ", "\n  </body>\n</html>"])), addAttribute(Astro2.generator, "content"), renderComponent($$result, "SEO", $$SEO, { "title": makeTitle, "description": "Astroship is a starter website template for Astro built with TailwindCSS.", "canonical": canonicalURL, "twitter": {
    creator: "@surjithctly",
    site: "@web3templates",
    card: "summary_large_image"
  }, "openGraph": {
    basic: {
      url: canonicalURL,
      type: "website",
      title: `Astroship - Starter Template for Astro`,
      image: resolvedImageWithDomain
    },
    image: {
      alt: "Astroship Homepage Screenshot"
    }
  } }), renderHead(), renderComponent($$result, "Navbar", $$Navbar, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}), renderComponent($$result, "Theme", $$Theme, {}), renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate(_a || (_a = __template(['\n          <script async defer type="text/javascript" src="https://umami.rizkyy.dev/script.js" data-website-id="67b6272c-99cf-409a-8950-f6bad8cf296f"><\/script>\n        ']))) })}` );
}, "/Users/rizkyy/Desktop/Projekan/astroship/src/layouts/Layout.astro");

const $$Astro = createAstro("https://rizkyy.dev");
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "404 Not Found" }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate`
    ${maybeRenderHead()}<div class="min-h-[calc(75vh-16rem)] flex items-center justify-center">
      <div class="mt-16 text-center">
        <h1 class="text-4xl lg:text-5xl font-bold lg:tracking-tight">
          *Ooops...
        </h1>
        <p class="text-lg mt-4 text-slate-600">Page not found.</p>
      </div>
    </div>
  ` })}
` })}`;
}, "/Users/rizkyy/Desktop/Projekan/astroship/src/pages/404.astro");

const $$file = "/Users/rizkyy/Desktop/Projekan/astroship/src/pages/404.astro";
const $$url = "/404";

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Container as $, _404 as _, $$Layout as a, $$Theme as b, $$Footer as c, $$SEO as d };
