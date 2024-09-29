<script lang="ts">
	import { getFilenameFromTitle, type FrontMatter, isNotItPost } from '$lib/utils';
	import { format } from 'date-fns';

	export let frontmatter: FrontMatter;
	export let main: boolean = false;
</script>

<a class={`card ${main ? 'main' : ''}`} href={getFilenameFromTitle(frontmatter.title, 'read')}>
	<small class="date">{format(new Date(frontmatter.date), 'MMM dd,  yyyy')}</small>
<div>
	<h5>{frontmatter.title}</h5>
	{#if main} 
<p class="desc">{@html frontmatter.desc}</p>
 {/if} 
	<small class={isNotItPost(frontmatter.tags) ? 'notIt' : ''}>{frontmatter.tags}</small>
</div>
</a>

<style lang="scss">
	.card {
		display: flex;
		gap: 20px;
		@include responsive(padding, 2px 0px 12px 16px, $sm: 8px 0px 12px 20px);
		border-radius: 8px;

		h5 {
			padding-bottom: 2px;
			transition: color 0.4s;
		}

		&:hover {
			border: none;

			h5 {
				color : var(--link-color)
			}
		}

		.date {
			flex-shrink: 0;
			padding-top: 17px;
			@include responsive(padding-top, 14px, $xl: 16px);
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

	.main {
		gap: 12px;
.date {
	max-width: 48px;
}

	}
</style>
