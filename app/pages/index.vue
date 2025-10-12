<script setup lang="ts">
    import FeaturedProject from '@/components/FeaturedProject.vue';
    import SectionSeparator from '@/components/SectionSeparator.vue';

    import knowledgeCardsInfo from '@/info-sources/knowledge-cards.json';
    import featuredProjects from '@/info-sources/featured-projects.json';

    useSeoMeta({
        title: `Andrés Peláez - ${$t('navbar.home')}`,
    });
</script>


<template>
    <main class="w-full slide-up-animation">
        <SectionSeparator :title="$t('home.sections.my-knowledge')" icon="fa-solid fa-computer" />
        <div class="flex flex-col lg:flex-row justify-center gap-10 px-[25px] lg:px-[100px] my-4">
            <Card v-for="card in knowledgeCardsInfo" additional-classes="border-t-1 border-t-green-400 text-center" hoverable>
                <i :class="`${card.icon} fs-1 text-5xl my-5`"></i>
                <h3 class="font-bold text-2xl mb-5">{{ $t(card.title) }}</h3>
                <p>{{ $t(card.description) }}</p>
            </Card>
        </div>
        <SectionSeparator :title="$t('home.sections.stand-out-projects')" icon="fa-solid fa-briefcase" />
        <FeaturedProject v-for="project in featuredProjects" :card-info="project" />
    </main>
</template>
