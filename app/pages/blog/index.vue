<script setup lang="ts">
import { formatDate } from '~/utils/general';

useSeoMeta({
    title: `Andrés Peláez - ${$t('navbar.blog')}`,
    description: $t('blog.description', 'Exploring personal topics and engineering.')
});

const { data: posts } = await useAsyncData('blog-posts', () =>
    queryCollection('blog').order('date', 'DESC').all()
)
</script>

<template>
    <main class="w-full flex-col slide-up-animation">
        <Card additional-classes="!w-full">
            <SectionSeparator icon="fa-solid fa-newspaper" :title="$t('navbar.blog')" />
            <p class="my-3">{{ $t('blog.description') }}</p>
            <p class="my-3">{{ $t('blog.warning') }}</p>

            <div v-if="posts && posts.length > 0" class="space-y-6">
                <NuxtLink v-for="post in posts" :key="post.path" :to="post.path"
                    class="block p-6 border-l-4 border-transparent hover:border-white hover:bg-gray-800/50 transition-all rounded-lg">
                    <div class="flex justify-between items-start gap-4">
                        <div class="flex-1">
                            <h2
                                class="text-2xl font-bold transition-colors">
                                {{ post.title }}
                            </h2>
                            <p class="mt-2">
                                {{ post.description }}
                            </p>
                            <div v-if="post.date"
                                class="flex items-center gap-4 mt-4 text-sm">
                                <span class="flex items-center gap-1">
                                    <i class="fa-solid fa-calendar"></i>
                                    {{ formatDate(post.date) }}
                                </span>
                            </div>
                        </div>
                        <div v-if="post.image" class="hidden sm:block flex-shrink-0">
                            <img :src="post.image" :alt="post.title" class="w-24 h-24 object-cover rounded-lg" />
                        </div>
                    </div>
                </NuxtLink>
            </div>

            <div v-else class="text-center py-12">
                <i class="fa-solid fa-inbox text-4xl text-gray-300 dark:text-gray-600 mb-4"></i>
                <p class="text-gray-500 dark:text-gray-400">
                    No blog posts available yet. Check back soon!
                </p>
            </div>
        </Card>
    </main>
</template>