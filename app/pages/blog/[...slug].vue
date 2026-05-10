<script setup lang="ts">
import { formatDate } from '~/utils/general';

const route = useRoute()
const { data: post } = await useAsyncData(route.path, () =>
    queryCollection('blog').path(route.path).first()
)

if (!post.value) {
    throw createError({ statusCode: 404, statusMessage: 'Post not found' })
}

useSeoMeta({
    title: `Andrés Peláez - ${post.value.title}`,
    description: post.value.description,
    ogImage: post.value.image,
    ogTitle: post.value.title,
    ogDescription: post.value.description,
    twitterImage: post.value.image,
    twitterTitle: post.value.title,
    twitterDescription: post.value.description,
});
</script>

<template>
    <main v-if="post" class="flex w-full flex-col slide-up-animation gap-4">
        <NuxtLink to="/blog" class="inline-flex items-center gap-2 text-white mb-4">
            <i class="fa-solid fa-arrow-left"></i>
            {{ $t('blog.go-back') }}
        </NuxtLink>

        <Card additional-classes="!w-full">
            <article class="prose max-w-none">
                <!-- Header -->
                <div class="mb-8 pb-8 border-b border-gray-700">
                    <SectionSeparator icon="" :glow="true" size="text-3xl" :title="post.title" />

                    <div v-if="post.image" class="mb-6 -mx-6">
                        <img :src="post.image" :alt="post.title" class="w-full h-96 object-cover rounded-lg" />
                    </div>

                    <p class="text-gray-200 text-lg mb-4">
                        {{ post.description }}
                    </p>

                    <div v-if="post.date" class="flex flex-wrap items-center gap-6 text-sm text-gray-200">
                        <span class="flex items-center gap-2">
                            <i class="fa-solid fa-calendar"></i>
                            {{ formatDate(post.date) }}
                        </span>
                    </div>
                </div>

                <!-- Spotify Player -->
                <SpotifyPlayer v-if="post.song" :track-id="post.song" />

                <!-- Content -->
                <ContentRenderer :value="post" />
            </article>
        </Card>
    </main>
</template>

<style scoped>
:deep(.prose) {
    @apply text-gray-900 dark:text-gray-100;
}

:deep(.prose h1) {
    @apply text-4xl font-bold mt-10 mb-6 text-gray-900 dark:text-white;
}

:deep(.prose h2) {
    @apply text-3xl font-bold mt-8 mb-4 text-gray-900 dark:text-white;
}

:deep(.prose h3) {
    @apply text-2xl font-bold mt-6 mb-3 text-gray-900 dark:text-white;
}

:deep(.prose h4) {
    @apply text-xl font-bold mt-5 mb-3 text-gray-900 dark:text-white;
}

:deep(.prose h5) {
    @apply text-lg font-bold mt-4 mb-2 text-gray-900 dark:text-white;
}

:deep(.prose h6) {
    @apply text-base font-bold mt-4 mb-2 text-gray-900 dark:text-white;
}

:deep(.prose p) {
    @apply mb-4 leading-relaxed;
}

:deep(.prose ul),
:deep(.prose ol) {
    @apply list-inside ml-2;
}

:deep(.prose ul) {
    @apply list-disc;
}

:deep(.prose li) {
    @apply mb-2;
}

:deep(.prose code) {
    @apply bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono;
}

:deep(.prose pre) {
    @apply bg-gray-900 dark:bg-gray-950 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4;
}

:deep(.prose pre code) {
    @apply bg-transparent px-0 py-0;
}

:deep(.prose blockquote) {
    @apply border-l-4 border-blue-500 pl-4 italic text-gray-600 dark:text-gray-400 my-4;
}

:deep(.prose a) {
    @apply text-white underline;
}

:deep(.prose img) {
    @apply rounded-lg my-4 max-w-full;
}
</style>