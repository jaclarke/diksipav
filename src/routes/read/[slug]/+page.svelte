<script lang="ts">
	import Layout from '$lib/components/Layout.svelte';

	export let data;
</script>

<Layout>
	<div class="wrapper">{@html data.blog.content}</div>
</Layout>

<style>
	.wrapper {
		grid-area: main;
	}
</style>
