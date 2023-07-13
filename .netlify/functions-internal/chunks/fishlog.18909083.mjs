import { v as createVNode, F as Fragment, s as spreadAttributes } from './astro.16c43ff6.mjs';

const images = {
					
				};

				function updateImageReferences(html) {
					return html.replaceAll(
						/__ASTRO_IMAGE_="(.+)"/gm,
						(full, imagePath) => spreadAttributes({src: images[imagePath].src, ...images[imagePath].attributes})
					);
				}

				const html = updateImageReferences("");

				const frontmatter = {"draft":false,"title":"Fishlog","snippet":"Fishlog B2B Fish for Indonesia Marketplace","image":{"src":"https://res.cloudinary.com/flawns-site/image/upload/v1689134399/blog/Screenshot_2023-07-12_at_10.54.41_cm7cfx.png","alt":"fishlog"},"createdDate":"2022-04-10","type":"product"};
				const file = "/Users/rizkyy/Desktop/Projekan/astroship/src/content/projects/fishlog.md";
				const url = undefined;
				function rawContent() {
					return "";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}
				async function Content() {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;
					const contentFragment = createVNode(Fragment, { 'set:html': html });
					return contentFragment;
				}
				Content[Symbol.for('astro.needsHeadRendering')] = true;

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, images, rawContent, url };
