import lume from "lume/mod.ts";
import jsx from "lume/plugins/jsx_preact.ts";

const site = lume({
	src: "src",
	location: new URL("https://gim.garden"),
});

site.use(jsx());

export default site;
