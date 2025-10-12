<script setup lang="ts">
    import type TimelineEventInterface from '@/interfaces/TimelineEventInterface';
    import TimelineEvent from './TimelineEvent.vue';
    defineProps<{ events: TimelineEventInterface[] }>();
</script>

<template>
    <div v-if="events.length > 0" class="relative">
        <div class="absolute inset-0 flex justify-center">
            <div class="w-1 bg-gray-300"></div>
        </div>
        <div class="relative">
            <TimelineEvent v-for="event in events" :event="event" />
        </div>
    </div>
</template>