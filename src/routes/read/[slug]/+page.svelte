<script lang="ts">
	import Layout from '$lib/components/Layout.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';

	export let data;
</script>

<Layout>
	<Sidebar headings={data.headings} />
	<div class="wrapper">
		<svelte:component this={data.component} />
	</div>
</Layout>

<style lang="scss">
	.wrapper {
		grid-area: main;
	}
</style>
