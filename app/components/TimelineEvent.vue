<script setup lang="ts">
    import type TimelineEventInterface from '@/interfaces/TimelineEventInterface';
    defineProps<{event: TimelineEventInterface}>();
</script>

<template>
    <div class="flex items-center w-full my-6">
        <div class="w-1/2"></div>
        <div class="relative w-6 h-6 rounded-full bg-green-300 z-10 -ml-3"></div>
        <div class="flex-grow border-t-2 border-gray-300"></div>
        <div class="w-1/2 pl-4">
            <h3 class="text-lg font-semibold">{{ event.title }}</h3>
            <p class="text-sm italic text-gray-200">{{ event.time }}</p>
            <p>{{ event.location }}</p>
            <p class="mt-2">{{ event.description }}</p>
        </div>
    </div>
</template>