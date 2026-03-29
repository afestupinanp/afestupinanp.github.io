<script setup lang="ts">
    import type SoftSkill from '@/interfaces/SoftSkill';

    defineProps<{
        info: SoftSkill;
    }>();

    const locale = useI18n();

</script>

<template>
    <div :class="`${info.color ?? 'bg-amber-50'} px-1 rounded flex items-center justify-center gap-1`">
        <i :class="`${info.icon}`"></i>
        {{ locale.locale.value === 'es' ? info['name-es'] : info['name-en'] }}
    </div>
</template>
