<script setup lang="ts">
    
</script>

<template>
    <header class="mx-auto flex flex-col lg:flex-row items-center lg:gap-[150px] gap-[50px] justify-center py-[50px]">
        <div class="">
            <img src="/assets/me.jpeg" class="rounded-full w-[200px] !h-[200px] inline-block slide-up-animation" alt="Profile picture of Andrés Felipe Estupiñan" />
        </div>
        <div>
            <p class="text-xl text-center lg:text-left lg:text-4xl slide-up-animation">
                {{ $t("home.welcoming") }}
            </p>
            <p class="text-xl text-center lg:text-left lg:text-4xl slide-up-animation">
                {{ $t("home.my-name") }}
            </p>
        </div>
    </header>
</template>
