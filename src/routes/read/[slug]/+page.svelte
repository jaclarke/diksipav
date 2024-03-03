<script lang="ts">
	import Layout from '$lib/components/Layout.svelte';

	export let data;
</script>

<Layout>
	<div class="wrapper">
		<svelte:component this={data.component} />
	</div>
</Layout>

<style lang="scss">
	.wrapper {
		grid-area: main;
	}
</style>
