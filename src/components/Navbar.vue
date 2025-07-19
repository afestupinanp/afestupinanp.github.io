<script setup lang="ts">
    import { RouterLink } from 'vue-router';
</script>

<template>
    <header class="w-full flex grow justify-between items-center top-0 fixed bg-gray-200 dark:bg-gray-800 dark:text-white p-3 shadow">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
    </header>
</template>