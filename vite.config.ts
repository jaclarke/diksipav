import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
// import { mdsvex } from 'mdsvex';

export default defineConfig({
	plugins: [
		sveltekit()
		// svelte({
		// 	// these are the defaults. If you want to add more extensions, see https://mdsvex.pngwn.io/docs#extensions
		// 	extensions: ['.svelte', '.svx'],
		// 	preprocess: mdsvex()
		// })
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
