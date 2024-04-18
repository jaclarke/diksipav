export const load = async ({ params }) => {
	// load the markdown file based on slug
	const component = await import(`../../../lib/content/blogs/${params.slug}/index.svx`);

	return {
		component: component.default,
		headings: component.metadata.headings
	};
};
