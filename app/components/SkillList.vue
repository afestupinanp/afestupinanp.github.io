<script setup lang="ts">
    import { SKILL_TYPE_TO_LANGUAGE_KEY } from '@/enums/SkillType';
    import type SkillInfo from '@/interfaces/SkillInfo';
    defineProps<{
        list: SkillInfo[];
    }>();

    const sortedSkillMap = computed(() => {
        return Object.fromEntries(Object.entries(SKILL_TYPE_TO_LANGUAGE_KEY).sort(([, a], [, b]) => {
            const translatedA = $t(a).toLowerCase();
            const translatedB = $t(b).toLowerCase();

            return translatedA < translatedB ? -1 : 1;
        }));
    });

</script>

<template>
    <div v-for="[key, value] in Object.entries(sortedSkillMap)">
        <SectionSeparator icon="" :glow="false" size="text-xl" :title="$t(value)" />
        <div class="flex gap-3 flex-wrap">
            <SkillBadge v-for="skill in list.filter(s => s.type === key)" :key="skill.name" :info="skill" />
        </div>
    </div>
</template>