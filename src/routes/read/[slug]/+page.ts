export const load = async () => {
	// load the markdown file based on slug
	const component = await import(
		'$lib/content/blogs/do-you-use-text-size-adjust-in-your-global-styles.svx'
	);

	return {
		component: component.default
	};
};
