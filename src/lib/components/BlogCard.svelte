<script lang="ts">
	import { getFilenameFromTitle, type FrontMatter, isNotItPost } from '$lib/utils';
	import { format } from 'date-fns';

	export let frontmatter: FrontMatter;
</script>

<a class="card" href={getFilenameFromTitle(frontmatter.title, 'read')}>
	<h4>{frontmatter.title}</h4>
	<small>{format(new Date(frontmatter.date), 'yyyy-MM-dd')}</small>
	<p class="desc">{@html frontmatter.desc}</p>
	<small class={isNotItPost(frontmatter.tags) ? 'notIt' : ''}>{frontmatter.tags}</small>
</a>

<style lang="scss">
	.card {
		display: block;
		border: 1px solid var(--card-border-color);
		@include responsive(padding, 2px 16px 12px 16px, $sm: 10px 24px 20px 24px);
		margin-bottom: 16px;
		border-radius: 8px;
		transition: border-color 0.4s;

		&:hover {
			border-color: var(--card-border-hover-color);
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

		.notIt {
			color: var(--pink);
		}
	}
</style>
