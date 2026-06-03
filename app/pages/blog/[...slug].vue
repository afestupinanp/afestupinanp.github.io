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
