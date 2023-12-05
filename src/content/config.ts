import { defineCollection } from 'astro:content';

const pagesCollection = defineCollection({
	type: 'content'
});

export const collections = {
	'pages': pagesCollection
};