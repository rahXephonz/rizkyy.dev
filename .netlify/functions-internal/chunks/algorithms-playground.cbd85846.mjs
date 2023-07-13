import { v as createVNode, F as Fragment, s as spreadAttributes } from './astro.6d3131d7.mjs';

const images = {
					
				};

				function updateImageReferences(html) {
					return html.replaceAll(
						/__ASTRO_IMAGE_="(.+)"/gm,
						(full, imagePath) => spreadAttributes({src: images[imagePath].src, ...images[imagePath].attributes})
					);
				}

				const html = updateImageReferences("<h2 id=\"algorithms-is\">Algorithms is</h2>\n<p>Whatever you do, it’s always beneficial to have the right tools at your disposal. I love working remotely and am a big advocate of doing remote software development. Therefore, I always strive to have the best equipment available to be as productive as possible. Writing posts like this constantly takes a lot of time. Luckily iVanky helped me out and sponsored this post so that I can concentrate on writing. I recently had the chance to test out one of their hottest products, a dual USB-C Docking Station that allows me to connect both my wide-screen monitors to my MacBook with Dual 4K@60Hz display connectivity. It also supports up to 96W laptop charging, which is awesome. If you are in a situation like me and want to upgrade your equipment, check out this and their other products! And now comes the article:</p>\n<pre is:raw=\"\" class=\"astro-code github-dark\" style=\"background-color: #24292e; overflow-x: auto;\" tabindex=\"0\"><code><span class=\"line\"><span style=\"color: #F97583\">let</span><span style=\"color: #E1E4E8\"> i </span><span style=\"color: #F97583\">=</span><span style=\"color: #E1E4E8\"> {</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">  </span><span style=\"color: #B392F0\">x</span><span style=\"color: #E1E4E8\">: (</span><span style=\"color: #FFAB70\">y</span><span style=\"color: #E1E4E8\">) </span><span style=\"color: #F97583\">=></span><span style=\"color: #E1E4E8\"> {</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">    </span><span style=\"color: #F97583\">return</span><span style=\"color: #E1E4E8\"> y;</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">  },</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">};</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">i.</span><span style=\"color: #B392F0\">x</span><span style=\"color: #E1E4E8\">(</span><span style=\"color: #79B8FF\">2</span><span style=\"color: #E1E4E8\">);</span></span></code></pre>");

				const frontmatter = {"draft":false,"title":"Algorithms Playground","snippet":"Exercise an Algorithm with Typescript or React","image":{"src":"https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?&fit=crop&w=430&h=240","alt":"frontend master"},"createdDate":"2023-01-01","type":"playground"};
				const file = "/Users/rizkyy/Desktop/Projekan/astroship/src/content/projects/algorithms-playground.md";
				const url = undefined;
				function rawContent() {
					return "\n## Algorithms is\n\nWhatever you do, it's always beneficial to have the right tools at your disposal. I love working remotely and am a big advocate of doing remote software development. Therefore, I always strive to have the best equipment available to be as productive as possible. Writing posts like this constantly takes a lot of time. Luckily iVanky helped me out and sponsored this post so that I can concentrate on writing. I recently had the chance to test out one of their hottest products, a dual USB-C Docking Station that allows me to connect both my wide-screen monitors to my MacBook with Dual 4K@60Hz display connectivity. It also supports up to 96W laptop charging, which is awesome. If you are in a situation like me and want to upgrade your equipment, check out this and their other products! And now comes the article:\n\n```ts\nlet i = {\n  x: (y) => {\n    return y;\n  },\n};\n\ni.x(2);\n```\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"algorithms-is","text":"Algorithms is"}];
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
