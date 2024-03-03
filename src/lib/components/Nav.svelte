<div>
	<a href="/read">read</a>
	<a href="/listen">listen</a>
</div>

<style lang="scss">
	div {
		display: flex;
		align-items: center;
		gap: 28px;
		z-index: 1;

		@include breakpoint(xl) {
			margin-right: 60px;
		}

		a {
			--link-color: #acaaa6;

			font-size: 17px;
			line-height: 20px;
			opacity: 0.9;
			font-weight: 300;
			padding: 0px 2px;

			&:hover {
				cursor: pointer;
			}
		}
	}
</style>
