import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		sveltekit()
	],
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `
				  @import '$lib/styles/_mixins.scss';
					@import '$lib/styles/vsc-dark-plus.css';

        `
			}
		}
	}
});
