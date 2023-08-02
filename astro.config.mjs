import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    css: {
        preprocessorOptions: {
            scss: {
                includePaths: ['src/styles/sass'], // Set the path to your Sass files directory
            }
        }
    },
    vite: {
        ssr: {
            external: ["svgo"],
        },
    },
});
