<script setup lang="ts">
    import type Experience from '@/interfaces/Experience';

    defineProps<{
        list: Experience[];
    }>();

</script>

<template>
    <ul class="list-disc space-y-5">
        <li v-for="experience in list">
            <span class="text-2xl font-bold">{{ $t(experience.company) }}</span><br/>
            <span v-html="`${$t(experience.dates)} | <i>${$t(experience.position)}</i>`"></span><br/>
            <i>{{ $t(experience.location) }}</i>
            <p>{{ $t(experience.description) }}</p>
        </li>
    </ul>
</template>