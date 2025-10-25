<script setup lang="ts">
    
</script>

<template>
    <header class="mx-auto flex flex-col lg:flex-row items-center lg:gap-[150px] gap-[50px] justify-center py-[50px]">
        <div class="w-full lg:w-fit text-center">
            <img src="/assets/me.jpeg" class="rounded-full w-[200px] !h-[200px] inline-block slide-up-animation" alt="Profile picture of Andrés Felipe Estupiñan" />
        </div>
        <div class="w-full md:w-fit text-center md:text-left overflow-x-auto ">
            <p class="text-xl text-center lg:text-left lg:text-4xl slide-up-animation">
                {{ $t("home.welcoming") }}
            </p>
            <p class="text-xl text-center lg:text-left lg:text-4xl slide-up-animation">
                {{ $t("home.my-name") }}
            </p>
            <div class="w-full flex flex-col lg:flex-row mt-5 gap-10 lg:gap-5">
                <div class="flex items-center justify-center gap-3 text-2xl">
                    <a href="https://x.com/andrespelaez00" aria-label="Twitter/X link" target="_blank" rel="noopener noreferrer">
                        <i class="fa-brands fa-x-twitter"></i>
                    </a>
                    <a href="https://github.com/afestupinanp" aria-label="GitHub link" target="_blank" rel="noopener noreferrer">
                        <i class="fa-brands fa-github"></i>
                    </a>
                    <a href="https://linkedin.com/in/andrespelaez00" aria-label="LinkedIn link" target="_blank" rel="noopener noreferrer">
                        <i class="fa-brands fa-linkedin"></i>
                    </a>
                </div>
                <LanguageSwitcher />
            </div>
        </div>
    </header>
</template>
