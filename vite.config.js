import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	server: {
		// Specify the allowed directories
		fs: {
			strict: false,
			allow: ["/Users/vendelinkukla/Documents/Programing/Maturitni projekt/jidelnaFE/static"]
		}
	},
	plugins: [sveltekit()]
});
