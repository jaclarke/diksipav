<div>
	<a href="/read">read</a>
	<a href="/listen">listen</a>
</div>

<style lang="scss">
	div {
		display: flex;
		align-items: center;
		gap: 24px;
		z-index: 1;
		position: relative;
		top: 14px;

		a {
			font-size: 18px;
			line-height: 22px;
			opacity: 0.9;
			font-weight: 300;
			padding: 0px 2px;
			color: var(--link-gray);

			&:hover {
				cursor: pointer;
				border-bottom: 1px solid var(--link-gray);
			}
		}

		@include breakpoint(sm) {
			top: 0;
			margin-right: 48px;
		}
	}
</style>
