<script>
	import Nav from '$lib/components/Nav.svelte';
	import '../app.scss';
</script>

<div class="header-wrapper">
	<div class="header">
		<a href="/"><h1>dijana pavlović</h1></a>
		<Nav />
	</div>
</div>
<div class="main-wrapper">
	<main>
		<slot />
	</main>
</div>

<style lang="scss">
	.header-wrapper {
		position: sticky;
		top: 0px;
		@include responsive(background-color, rgba(31, 31, 31, 0.8), $xl: unset);
		padding: 12px 12px 0 12px;
		@include responsive(padding, 12px 12px 0 12px, $md: 20px 20px 0 20px);

		&::before {
			position: absolute;
			content: '';
			width: 100%;
			height: 12px;
			@include responsive(height, 12px, $md: 20px);
			@include responsive(width, 100%, $xl: 100px);
			left: 0;
			top: 0;
			background-color: #1f1f1f;
		}

		.header {
			display: flex;
			justify-content: space-between;
			align-items: center;
			height: 80px;
			position: relative;
			padding: 0 20px;
			@include responsive(padding, 0 12px, $md: 0 20px);

			$border: 1px solid #acaaa6;
			border-left: $border;

			&::before,
			&::after {
				position: absolute;
				content: '';
			}

			&::before {
				@include responsive(width, 100px, $xl: 380px);
				height: 1px;
				left: 0;
				top: -1px;
				border-top: $border;
			}

			&::after {
				@include responsive(height, 80px, $xl: 150px);
				@include responsive(width, calc(100vw - 126px), $md: calc(100vw - 142px), $xl: 100px);
				right: 0;
				top: -1px;
				border-right: $border;
				border-top: $border;
			}

			h1 {
				color: #acaaa6;
			}

			a {
				cursor: pointer;
				@include responsive(width, 124px, $md: fit-content);
				&:hover {
					border: none;
				}
			}
		}
	}

	.main-wrapper {
		min-height: calc(100vh - 96px);
		@include responsive(padding, 0 12px 12px, $md: 0 20px 20px);
		display: flex;
		@include breakpoint(md) {
			padding: 0 20px 20px;
		}

		main {
			$border: 1px solid #acaaa6;
			border-left: $border;
			flex-grow: 1;
			padding-top: 40px;
		}
	}
</style>
