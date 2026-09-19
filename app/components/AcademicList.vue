<script setup lang="ts">
    import type Academic from '@/interfaces/Academic';

    defineProps<{
        list: Academic[];
    }>();
</script>

<template>
    <ul class="list-disc list-inside space-y-5">
        <li v-for="experience in list">
            <span class="text-lg font-bold">{{ $t(experience.location) }}</span><br/>
            <span v-html="`${$t(experience.time)} | <i>${$t(experience.title)}</i>`"></span><br/>
        </li>
    </ul>
</template>