import { svelte } from "@sveltejs/vite-plugin-svelte";
import { defineConfig } from "vite";

export default defineConfig({
    'publicDir': './src/assets',
    'server': {
        'host': 'localhost',
        'port': 8080
    },
    'plugins': [
        svelte()
    ]
});