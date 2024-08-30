<script>
	import Layout from '$lib/components/Layout.svelte';
	import BlogCard from '$lib/components/BlogCard.svelte';

	export let data;
</script>

<svelte:head>
	<title>Blog posts on software engineering, digital nomad life and my personal philosophies.</title
	>
	<meta
		name="description"
		content={`Read blog posts on software engineering, including front-end and 
		back-end development, JS/TS, Rust, and more. Occasionally, Sometimes, I 
		also write about digital nomad life and personal philosophies." `}
	/>
</svelte:head>

<Layout>
	<div class="wrapper">
		{#each data.blogs as frontmatter, i (frontmatter.id)}
			<BlogCard {frontmatter} recent={i < 3 ? true : false} />
		{/each}
	</div>
</Layout>

<style>
	.wrapper {
		grid-area: main;
		padding-top: 40px;
	}
</style>
