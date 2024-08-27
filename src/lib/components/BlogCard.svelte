<script lang="ts">
	import { getFilenameFromTitle, type FrontMatter, isNotItPost } from '$lib/utils';
	import { format } from 'date-fns';

	export let frontmatter: FrontMatter;
	export let recent: boolean;
</script>

<a class={`card ${recent ? 'recent' : ''}`} href={getFilenameFromTitle(frontmatter.title, 'read')}>
	<h5>{frontmatter.title}</h5>
	{#if recent}
		<small>{format(new Date(frontmatter.date), 'yyyy-MM-dd')}</small>
	{/if}
	<p class="desc">{@html frontmatter.desc}</p>
	<small class={isNotItPost(frontmatter.tags) ? 'notIt' : ''}>{frontmatter.tags}</small>
</a>

<style lang="scss">
	.card {
		display: block;
		border: 1px solid transparent;
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

	.recent {
		border: 1px solid var(--card-border-color);
	}
</style>
