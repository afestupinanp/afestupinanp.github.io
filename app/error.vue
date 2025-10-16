<script setup lang="ts">
    import type { NuxtError } from '#app'

    const props = defineProps({
        error: Object as () => NuxtError,
    })

    const translatedMessage = computed(() => {
        const ERROR_CODE_MAP: Record<string, string> = {
            "404": 'not-found'
        };
        return ERROR_CODE_MAP[props?.error?.statusCode?.toString() ?? ''] || 'unknown-error'
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
        <div class="w-full text-center my-[100px] slide-up-animation">
            <h2 class="text-8xl">{{ error?.statusCode }}</h2>
            <p class="my-10 text-2xl">{{ $t(translatedMessage) }}</p>
        </div>
        <div class="error-circle"></div>
    </NuxtLayout>
</template>
