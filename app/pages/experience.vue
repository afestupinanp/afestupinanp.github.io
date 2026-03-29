<script setup lang="ts">
    import experiences from '@/info-sources/experience.json';
    import skills from '@/info-sources/skills.json';
    import type SoftSkill from '@/interfaces/SoftSkill';
    import softSkills from '@/info-sources/soft-skills.json';

    useSeoMeta({
        title: `Andrés Peláez - ${$t('navbar.experience-skills')}`,
        description: $t('experience-description'),
    });

    const softSkillsList: SoftSkill[] = softSkills as SoftSkill[];

</script>

<template>
    <main class="flex w-full flex-col lg:flex-row slide-up-animation gap-4">
        <Card title class="flex-1">
            <SectionSeparator icon="fa-solid fa-briefcase" :title="$t('about.experience')" />
            <ExperienceList :list="experiences" />
        </Card>
        <Card class="flex-1">
            <SectionSeparator icon="fa-solid fa-heart" :title="$t('about.soft-skills')" />
            <SoftSkillList :list="softSkillsList" />
            <SectionSeparator class="mt-5" icon="fa-solid fa-wrench" :title="$t('about.abilities')" />
            <SkillList :list="skills" />
        </Card>
    </main>
</template>