<script setup lang="ts">
    import type { NuxtError } from '#app'

    const props = defineProps({
        error: Object as () => NuxtError,
    })

    const translatedMessage = computed(() => {
        const ERROR_CODE_MAP: Record<string, string> = {
            "404": 'not-found'
        };
        return ERROR_CODE_MAP[props?.error?.status?.toString() ?? ''] || 'unknown-error'
    });

    useHead({
      bodyAttrs: {
        class: 'bg-[#290101] text-white'
      },
    });

    useSeoMeta({
        title: "Andrés Peláez - Error",
        robots: {
            index: false,
            follow: false
        }
    })

</script>

<template>
    <NuxtLayout name="default">
        <div class="w-full text-center my-[100px]">
            <h2 class="text-8xl">{{ error?.status }}</h2>
            <div class="error-circle"></div>
            <p class="my-10 text-2xl">{{ $t(translatedMessage) }}</p>
        </div>
    </NuxtLayout>
</template>
