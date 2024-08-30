<script lang="ts">
	import Layout from '$lib/components/Layout.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';

	export let data;
</script>

<svelte:head>
	<title>{data.title}</title>
	<meta name="description" content={data.desc} />
</svelte:head>

<Layout>
	<Sidebar headings={data.headings} />
	<div class="wrapper">
		<svelte:component this={data.component} />
	</div>
</Layout>

<style lang="scss">
	.wrapper {
		grid-area: main;
		margin-top: 24px;
	}
</style>
