<script setup lang="ts">
    import experiences from '@/info-sources/experience.json';
    import skills from '@/info-sources/skills.json';

    useSeoMeta({
        title: `Andrés Peláez - ${$t('navbar.experience-skills')}`,
        description: $t('experience-description'),
    });
</script>

<template>
    <main class="flex w-full flex-col lg:flex-row slide-up-animation gap-4">
        <Card title class="flex-1">
            <SectionSeparator icon="fa-solid fa-briefcase" :title="$t('about.experience')" />
            <ExperienceList :list="experiences" />
        </Card>
        <Card class="flex-1">
            <SectionSeparator icon="fa-solid fa-wrench" :title="$t('about.abilities')" />
            <SkillList :list="skills" />
        </Card>
    </main>
</template>