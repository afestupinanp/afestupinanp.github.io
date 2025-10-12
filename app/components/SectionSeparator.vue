<script setup lang="ts">
    withDefaults(defineProps<{
        title: string;
        icon: string;
        size?: string;
        glow?: boolean;
    }>(), {
        size: 'text-2xl',
        glow: true,
    })
</script>

<template>
    <div class="w-full py-6">
        <h1 :class="`${size} font-bold ${glow ? 'glow' : ''}`">
            <i :class="icon"></i>
            {{ title }}
        </h1>
    </div>
</template>