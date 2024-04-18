<div class="layout"><slot /></div>

<style lang="scss">
	.layout {
		display: block;
		padding: 0 12px;
		@include responsive(max-width, min(100vw, 532px), $md: unset);

		@include breakpoint(md) {
			display: grid;
			@include responsive(grid-template-columns, 1fr 532px 1fr, $xxl: 1fr 600px 1fr);
			grid-template-areas: 'left main right';
		}
	}
</style>
