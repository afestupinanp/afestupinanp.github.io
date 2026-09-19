<script setup lang="ts">
const { t } = useI18n()

const {
    typedName,
    typedJob,
    isTypingDone,
    isJobTypingDone,
    fullName,
    jobTitle,
} = useTypingAnimation(
    () => t('home.welcoming'),
    () => t('home.my-name'),
)
</script>

<template>
    <header class="mx-auto flex flex-col items-center gap-[50px] justify-center py-[50px]">
        <div class="w-full lg:w-fit text-center">
            <img src="/assets/me.jpeg" class="rounded-full w-[200px] !h-[200px] object-cover inline-block slide-up-animation border-4 border-green-400" alt="Profile picture of Andrés Felipe Estupiñan" />
        </div>
        <div class="w-full md:w-fit text-center overflow-hidden">
            <p class="text-xl text-center lg:text-4xl slide-up-animation min-h-[1.5em]">
                <span class="relative inline-block whitespace-nowrap">
                    <span class="invisible">{{ fullName }}</span>
                    <span class="absolute left-0 top-0 whitespace-nowrap">{{ typedName }}<span class="typing-cursor" :class="{ 'blink': isTypingDone }">|</span></span>
                </span>
            </p>
            <p class="text-lg text-center lg:text-2xl slide-up-animation min-h-[1.5em]">
                <span class="relative inline-block whitespace-nowrap">
                    <span class="invisible">{{ jobTitle }}</span>
                    <span class="absolute left-0 top-0 whitespace-nowrap">{{ typedJob }}<span class="typing-cursor" :class="{ 'blink': isJobTypingDone }">|</span></span>
                </span>
            </p>
            <div class="w-full flex flex-col lg:flex-row mt-5 gap-10 lg:gap-5 justify-center slide-up-animation">
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
                    <LanguageSwitcher />
                </div>
            </div>
        </div>
    </header>
</template>

<style scoped>
.typing-cursor {
    font-weight: bold;
    color: #4ade80;
}

.typing-cursor.blink {
    animation: blink 1s step-end infinite;
}

@keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
}
</style>
