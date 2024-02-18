<script>
	import { format } from 'date-fns';
	import Layout from '$lib/components/Layout.svelte';
	import { getFilenameFromTitle } from '$lib/utils';
	export let data;
</script>

<Layout>
	<div class="wrapper">
		{#each data.blogs as { frontmatter } (frontmatter.id)}
			<a class="card" href={getFilenameFromTitle(frontmatter.title, 'read')}>
				<h3>{frontmatter.title}</h3>
				<p>{frontmatter.desc}</p>
				<small>{format(new Date(frontmatter.date), 'yyyy-MM-dd')}</small>
			</a>
		{/each}
	</div>
</Layout>

<style>
	.wrapper {
		grid-area: main;
		padding-top: 40px;
	}

	.card {
		display: block;
		background-color: #242424;
		padding: 8px 20px 12px 20px;
		margin-bottom: 16px;
		box-shadow: 0px 32px 40px -24px rgba(0, 0, 0, 0.25);
		border-radius: 8px;
		cursor: pointer;

		&:hover {
			border: none;
		}
	}
</style>
