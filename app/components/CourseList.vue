<script setup lang="ts">
    import type Academic from '@/interfaces/Academic';

    defineProps<{
        list: Academic[];
    }>();
</script>

<template>
    <ul class="list-disc space-y-5">
        <li v-for="experience in list">
            <span class="text-xl font-bold">{{ $t(experience.title) }}</span><br/>
            <span v-html="`${$t(experience.time)} - <i>${$t(experience.location)}</i>`"></span><br/>
        </li>
    </ul>
</template>