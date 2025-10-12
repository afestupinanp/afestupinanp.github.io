<script setup lang="ts">
    import type { NuxtError } from '#app'

    const props = defineProps({
        error: Object as () => NuxtError,
    })

    const handleError = () => clearError({ redirect: '/' })
    useHead({
        bodyAttrs: {
        class: 'bg-[#1a1c1f] text-white'
        },
        link: [
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.0/css/all.min.css', crossorigin: 'anonymous', integrity: 'sha512-DxV+EoADOkOygM4IR9yXP8Sb2qwgidEmeqAEmDKIOfPRQZOWbXCzLC6vjbZyy0vPisbH2SyW27+ddLVCN+OMzQ==', referrerpolicy: 'no-referrer' }
        ]
    })
</script>

<template>
    <Background />
    <PageHeader />
    <Navbar />
    <div class="w-full text-center my-[100px]">
        <h2 class="text-8xl">{{ error?.statusCode }}</h2>
        <button class="border-[1px] border-green-300 hover:bg-green-300 hover:text-black p-2 rounded" @click="handleError">
            Clear errors
        </button>
    </div>
    <PageFooter />
</template>
