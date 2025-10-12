<script setup lang="ts">
    interface FeaturedProjectInfo {
        image: string;
        title: string;
        description: string;
        repository?: string;
        website?: string;
    }
    const props = defineProps<{ cardInfo: FeaturedProjectInfo }>();
    const cardInfo = props.cardInfo;
</script>

<template>
    <div class="flex flex-col lg:flex-row w-full gap-11 my-5">
        <div class="w-full lg:w-1/2 overflow-hidden">
            <div class="hover-zoom h-[300px]" :style="{ backgroundImage: `url('/assets/${cardInfo.image}')`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }">
            </div>
        </div>
        <div class="w-full lg:w-1/2">
            <h3 class="font-bold text-3xl mb-5">{{ $t(cardInfo.title) }}</h3>
            <p class="block my-3">{{ $t(cardInfo.description )}}</p>
            <div class="flex flex-row gap-3">
                <a v-if="cardInfo.website" class="border-[1px] rounded border-green-400 p-2 inline-block hover:bg-green-400 transition-colors hover:text-black" :href="cardInfo.website" target="_blank" rel="noopener noreferrer">
                    <i class="fa-solid fa-up-right-from-square"></i>
                    {{ $t("projects.visit-page") }}
                </a>
                <a v-if="cardInfo.repository" class="border-[1px] rounded border-green-400 p-2 inline-block hover:bg-green-400 transition-colors hover:text-black" :href="cardInfo.repository" target="_blank" rel="noopener noreferrer">
                    <i class="fa-solid fa-code-branch"></i>
                    {{ $t("projects.code-repo") }}
                </a>
            </div>
        </div>
    </div>
</template>