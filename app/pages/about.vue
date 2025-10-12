<script setup lang="ts">
    import academics from '@/info-sources/academics.json';

    const current = new Date();
    let years = current.getFullYear() - 2000;
    if (current.getMonth() < 6) {
        years--;
    }

    useSeoMeta({
        title: `Andrés Peláez - ${$t('navbar.about')}`
    });
</script>

<template>
    <main class="flex w-full flex-col lg:flex-row slide-up-animation gap-4">
        <Card class="flex-1">
            <SectionSeparator icon="fa-solid fa-user-circle" :title="$t('about.myself')" />
            <p v-html="$t('about.myself-description', {years: years})"></p>
        </Card>
        <Card class="flex-1">
            <SectionSeparator icon="fa-solid fa-graduation-cap" :title="$t('about.academic')" />
            <AcademicList :list="academics" />
        </Card>
    </main>
</template>
