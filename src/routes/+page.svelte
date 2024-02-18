<script>
	import BlogCard from '$lib/components/BlogCard.svelte';
	import Intro from '$lib/components/Intro.svelte';

	export let data;
</script>

<div class="container">
	<Intro />
	<p class="dots">. . .</p>
	<div class="latest">
		{#each data.blogs as { frontmatter } (frontmatter.id)}
			<BlogCard {frontmatter} />
		{/each}
	</div>
</div>

<style lang="scss">
	.container {
		height: 100%;
		@include responsive(padding, 0 12px, $md: 0);

		@include responsive(display, block, $xl: grid);
		grid-template-columns: 1fr 500px 1fr 500px 1fr;
		grid-template-areas: 'left intro middle latest right';
	}
	.latest {
		grid-area: latest;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 48px;
	}
	.dots {
		text-align: center;
		margin-top: 32px;

		@include breakpoint(xl) {
			display: none;
		}
	}
</style>
