<script>
	import Layout from '$lib/components/Layout.svelte';
	import BlogCard from '$lib/components/BlogCard.svelte';

	export let data;
</script>

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
