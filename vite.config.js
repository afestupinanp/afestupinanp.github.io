import { svelte } from "@sveltejs/vite-plugin-svelte";
import { defineConfig } from "vite";

export default defineConfig({
    'root': './src',
    'build': {
        'outDir': '../dist'
    },
    'publicDir': './src/assets',
    'server': {
        'host': 'localhost',
        'port': 8080
    },
    'plugins': [
        svelte()
    ]
});