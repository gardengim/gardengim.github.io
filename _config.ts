import lume from "lume/mod.ts";

import basePath from "lume/plugins/base_path.ts";
import inline from "lume/plugins/inline.ts";
import jsx from "lume/plugins/jsx_preact.ts";
import minifyHTML from "lume/plugins/minify_html.ts";
import nav from "lume/plugins/nav.ts";
import postcss from "lume/plugins/postcss.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";

import toc from "lume_markdown_plugins/toc.ts";

import typography from "npm:@tailwindcss/typography";

const site = lume({
	src: "src",
	location: new URL("https://gim.garden"),
});

site.use(basePath())
	.use(inline())
	.use(jsx())
	.use(minifyHTML())
	.use(nav())
	.use(tailwindcss({
		extensions: [".html", ".jsx"],
		options: {
			plugins: [typography]
		}
	}))
	.use(toc({
		level: 1
	}))
	.use(postcss());

export default site;
