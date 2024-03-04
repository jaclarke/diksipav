<div class="layout"><slot /></div>

<style lang="scss">
	.layout {
		display: block;
		padding: 0 12px;
		@include responsive(max-width, min(100vw, 532px), $md: unset);

		@include breakpoint(md) {
			display: grid;
			@include responsive(grid-template-columns, auto 532px auto, $xxl: auto 600px auto);
			grid-template-areas: 'left main right';
		}
	}
</style>
