import lume from "lume/mod.ts";
import code_highlight from "lume/plugins/code_highlight.ts";
import jsx from "lume/plugins/jsx.ts";

const site = lume({
	location: new URL("https://gim.garden")
});

site.use(code_highlight());
site.use(jsx());

export default site;
