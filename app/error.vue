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
        link: [
            { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.0/css/all.min.css', crossorigin: 'anonymous', integrity: 'sha512-DxV+EoADOkOygM4IR9yXP8Sb2qwgidEmeqAEmDKIOfPRQZOWbXCzLC6vjbZyy0vPisbH2SyW27+ddLVCN+OMzQ==', referrerpolicy: 'no-referrer' }
        ]
    })

    useSeoMeta({
        title: "Andrés Peláez - Error",
        robots: {
            index: false,
            follow: false
        }
    })

</script>

<template>
    <Background />
    <PageHeader />
    <Navbar />
    <div class="w-full text-center my-[100px]">
        <h2 class="text-8xl">{{ error?.statusCode }}</h2>
        <p class="my-10 text-2xl">{{ $t(translatedMessage) }}</p>
    </div>
    <div class="error-circle"></div>
    <PageFooter />
</template>
