<script setup lang="ts">
    withDefaults(defineProps<{
        hoverable?: boolean
        additionalClasses?: string
    }>(), {
        hoverable: false,
        additionalClasses: ''
    });
</script>

<template>
    <div :class="`bg-gray-700/25 w-full lg:w-[500px] p-[50px] shadow-lg transition-all ease-in-out rounded ${hoverable ? 'hover:shadow-2xl hover:shadow-green-400/50' : ''} ${additionalClasses}`">
        <slot></slot>
    </div>
</template>