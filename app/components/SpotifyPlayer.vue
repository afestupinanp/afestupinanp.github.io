<script setup lang="ts">
interface Props {
    trackId: string;
}

const props = withDefaults(defineProps<Props>(), {});

const spotifyEmbedUrl = computed(() => `https://open.spotify.com/embed/track/${props.trackId}`);

</script>

<template>
    <i>{{ $t('blog.recommended-song') }}</i>
    <div class="my-6 flex justify-start">
        <iframe :src="spotifyEmbedUrl" width="100%" height="80" frameborder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            class="rounded-lg"></iframe>
    </div>
</template>

<style scoped>
:deep(iframe) {
    border-radius: 0.5rem;
    max-width: 300px;
}
</style>
