<div class="layout"><slot /></div>

<style lang="scss">
	.layout {
		display: block;
		padding: 0 12px;
		@include responsive(max-width, min(100vw, 532px), $sm: unset);

		@include breakpoint(sm) {
			display: grid;
			grid-template-columns: 1fr 550px 1fr;
			grid-template-areas: 'left main right';
		}

		@include breakpoint(xxl) {
			grid-template-columns: 1fr 600px 1fr;
		}
	}
</style>
