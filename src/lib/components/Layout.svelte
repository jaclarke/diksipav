<div class="layout"><slot /></div>

<style lang="scss">
	.layout {
		display: block;
		padding: 0 12px;

		@include breakpoint(md) {
			display: grid;
			grid-template-columns: auto 600px auto;
			grid-template-areas: 'left main right';
			padding: 0 0 80px 0;
		}
	}
</style>
