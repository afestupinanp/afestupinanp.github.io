<script setup lang="ts">
    import type SoftSkill from '@/interfaces/SoftSkill';

    defineProps<{
        list: SoftSkill[];
    }>();

</script>

<template>
    <div class="flex gap-3 flex-wrap">
        <SoftSkillBadge v-for="skill in list" :key="skill['name-en']" :info="skill" />
    </div>
</template>
