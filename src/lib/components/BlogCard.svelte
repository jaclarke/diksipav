<script lang="ts">
	import { getFilenameFromTitle, type FrontMatter } from '$lib/utils';
	import { format } from 'date-fns';

	export let frontmatter: FrontMatter;
	console.log('frontmatter', frontmatter);
</script>

<a class="card" href={getFilenameFromTitle(frontmatter.title, 'read')}>
	<h3>{frontmatter.title}</h3>
	<small>{format(new Date(frontmatter.date), 'yyyy-MM-dd')}</small>
	<p class="desc">{@html frontmatter.desc}</p>
	<small>{frontmatter.tags}</small>
</a>

<style lang="scss">
	.card {
		display: block;
		border: 1px solid hsla(0, 0%, 100%, 0.15);
		@include responsive(padding, 2px 16px 12px 16px, $md: 10px 24px 20px 24px);
		margin-bottom: 16px;
		/* box-shadow: 0px 32px 40px -24px rgba(0, 0, 0, 0.25); */
		border-radius: 8px;
		cursor: pointer;
		max-width: 540px;
		transition: border-color 0.4s;

		&:hover {
			border-color: #7e7e7e;
		}

		.desc {
			margin: 2px 0 0 0;
			overflow: hidden;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-line-clamp: 2;
			line-clamp: 2;
			-webkit-box-orient: vertical;
		}
	}
</style>
