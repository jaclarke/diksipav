<script>
	import img from '$lib/images/portfolio.jpg';
	import Mountain from './Mountain.svelte';
</script>

<div class="intro">
	<img src={img} alt="Black and white me with ocean background." class="img" />
	<div class="text">
		<p>Hi, I'm a software engineer & digital nomad from Serbia.</p>
		<p>Former (maybe future) electronics engineer.</p>
		<p class="top-margin">
			I've primarily been focusing on JS/TS, but lately I've started spending some good hours with
			Rust & I plan to socialize with it more.
		</p>
		<p class="top-margin">
			Currently, building at <a href="https://www.edgedb.com/" target="_blank">EdgeDB</a>.
		</p>
		<p class="top-margin">I enjoy immersing myself in nature & doing outdoorsy stuff.</p>
		<p>I LOVE to read. & sometimes I draw.</p>
		<Mountain class="mountain-wrapper" />
	</div>
</div>

<style lang="scss">
	.intro {
		display: flex;
		flex-direction: column;
		align-items: center;
		grid-area: intro;

		.img {
			width: 200px;
			height: 200px;
			border-radius: 50%;
			background: pink;
			margin: 48px 24px 24px;
			box-shadow:
				0 4px 8px 0 rgba(0, 0, 0, 0.2),
				0 6px 20px 0 rgba(0, 0, 0, 0.19);
		}

		.text {
			text-align: center;
			position: relative;

			.top-margin {
				margin-top: 16px;
			}
		}
	}
	.text :global(.mountain-wrapper) {
		@include responsive(display, none, $md: block);
		@include responsive(transform, none, $md: scale(0.84), $xl: none);
		position: absolute;
		@include responsive(bottom, -20px, $xl: -66px);
		@include responsive(right, 208px, $xl: 200px);
		opacity: 0.3;
		z-index: -1;
	}
</style>
