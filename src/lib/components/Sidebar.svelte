<script lang="ts">
	export let headings: any;
</script>

<div class="sidebar">
	<nav>
		{#each headings.filter((h) => h.level == 2) as heading}
			<a href={`#${heading.id}`}>{heading.text}</a>
		{/each}
	</nav>
</div>

<style lang="scss">
	.sidebar {
		display: none;

		@include breakpoint(lg) {
			display: block;

			width: calc(50% - 300px);
			position: fixed;
			top: 28vh;
			left: 24px;
		}
	}

	nav {
		display: flex;
		flex-direction: column;
		gap: 12px;
		width: 178px;
		margin: auto;

		a {
			font-size: 15px;
			line-height: 20px;
			color: #acaaa6;
		}

		a:hover {
			border-bottom: none;
			color: var(--link-color);
		}
	}
</style>
