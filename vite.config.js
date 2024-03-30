import { svelte } from "@sveltejs/vite-plugin-svelte";
import { defineConfig } from "vite";
import {fileURLToPath} from 'node:url';

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
    ],
    'resolve': {
        'alias': [
            {
                'find': '@img',
                'replacement': fileURLToPath(new URL('./src/assets/images', import.meta.url))
            },
            {
                'find': '@src',
                'replacement': fileURLToPath(new URL('./src', import.meta.url))
            },
            {
                'find': '@lang',
                'replacement': fileURLToPath(new URL('./src/lang', import.meta.url))
            }
        ]
    }
});