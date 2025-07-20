<script setup lang="ts">
    withDefaults(defineProps<{
        hoverable?: boolean
    }>(), {
        hoverable: false,
    });
</script>

<template>
    <div :class="`bg-gray-700 p-5 shadow-lg transition-all ease-in-out ${hoverable ? 'hover:shadow-2xl hover:shadow-green-400' : ''}`">
        <slot></slot>
    </div>
</template>