<div class={$$restProps.class || ''}>
	<div class="mountain">
		<div class="mountain-top">
			<div class="mountain-cap-1"></div>
			<div class="mountain-cap-2"></div>
			<div class="mountain-cap-3"></div>
		</div>
	</div>
	<div class="mountain-two">
		<div class="mountain-top">
			<div class="mountain-cap-1"></div>
			<div class="mountain-cap-2"></div>
			<div class="mountain-cap-3"></div>
		</div>
	</div>
	<div class="mountain-three">
		<div class="mountain-top">
			<div class="mountain-cap-1"></div>
			<div class="mountain-cap-2"></div>
			<div class="mountain-cap-3"></div>
		</div>
	</div>
</div>

<style>
	.mountain,
	.mountain-two,
	.mountain-three {
		position: absolute;
		bottom: 0;
		left: 160px;
		border-left: 110px solid transparent;
		border-right: 110px solid transparent;
		border-bottom: 130px solid var(--mountain-bottom);
		z-index: 1;
		box-shadow: 0px 32px 24px -20px rgba(0, 0, 0, 0.12);
	}
	.mountain-two {
		left: 80px;
		bottom: 30px;
		z-index: 0;
	}
	.mountain-three {
		left: -10px;
		bottom: 0;
		z-index: 0;
	}
	.mountain-top {
		position: absolute;
		right: -44px;
		border-left: 44px solid transparent;
		border-right: 44px solid transparent;
		border-bottom: 52px solid var(--mountain-top);
		z-index: 2;
	}
	.mountain-cap-1,
	.mountain-cap-2,
	.mountain-cap-3 {
		position: absolute;
		top: 51px;
		border-left: 17px solid transparent;
		border-right: 17px solid transparent;
		border-top: 10px solid var(--mountain-top);
	}
	.mountain-cap-1 {
		left: -43px;
	}
	.mountain-cap-2 {
		left: -15px;
	}
	.mountain-cap-3 {
		left: 9px;
	}
</style>
