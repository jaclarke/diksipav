<script>
	import BlogCard from '$lib/components/BlogCard.svelte';
	import Intro from '$lib/components/Intro.svelte';

	export let data;
</script>

<svelte:head>
	<title>Software Engineer & Digital Nomad | Insights on Tech & Life</title>
	<meta
		name="description"
		content={`Hi, I'm a software engineer and digital nomad from Serbia. 
		Explore my insights on software engineering, tech adventures, and personal 
		interests. Currently building with EdgeDB and sharing my experiences with coding, nature, and more.`}
	/>
</svelte:head>

<div class="container">
	<Intro />
	<p class="dots">. . .</p>
	<div class="latest">
		<p class="title">Latest:</p>
		{#each data.blogs.slice(0, 3) as frontmatter (frontmatter.id)}
			<BlogCard {frontmatter} recent={true} />
		{/each}
	</div>
</div>

<style lang="scss">
	.container {
		height: 100%;
		@include responsive(padding, 0 12px, $sm: 0);
		@include responsive(display, block, $lg: grid);
		@include responsive(max-width, 600px, $lg: unset);
		@include responsive(
			grid-template-columns,
			1fr 500px minmax(100px, 1fr) 480px 1fr,
			$xl: 1fr 512px minmax(180px, 1fr) 512px 1fr
		);
		grid-template-areas: 'left intro middle latest right';
	}
	.latest {
		grid-area: latest;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 48px;

		.title {
			align-self: start;
			padding: 0 0 8px 20px;
			@include responsive(display, none, $lg: block);
			font-size: 14px;
		}
	}

	.dots {
		text-align: center;
		margin-top: 32px;

		@include breakpoint(sm) {
			display: none;
		}
	}
</style>
