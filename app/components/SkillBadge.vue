<script setup lang="ts">
    import type SkillInfo from '@/interfaces/SkillInfo';

    defineProps<{
        info: SkillInfo;
    }>();

</script>

<template>
    <div :class="`${info.color ?? 'bg-amber-50'} px-1 rounded flex items-center justify-center gap-1`">
        <i :class="`${info.icon}`"></i>
        {{ info.name }}
    </div>
</template>