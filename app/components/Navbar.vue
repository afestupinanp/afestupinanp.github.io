<script setup lang="ts">
    const ROUTES = {
        'navbar.home': '/',
        'navbar.about': '/about',
        'navbar.experience-skills': '/experience',
        'navbar.blog': '/blog'
    };

    const shouldAddClass = ref(false);
    const isMenuOpen = ref(false);

    const route = useRoute();

    const currentPageName = computed(() => {
        const path = route.path.replace(/^\/(en|es)/, '') || '/';
        for (const [name, routePath] of Object.entries(ROUTES)) {
            if (routePath === path) {
                return name;
            }
        }
        return '';
    });

    const startObservable = () => {
        const sentinel = document.getElementById('sentinel');
        const observer = new IntersectionObserver(([entry]) => {
            shouldAddClass.value = entry?.intersectionRatio === 0;
        }, {
            root: null, // Use the viewport as the root
            threshold: [0] // Trigger when 0% of the sentinel is visible
        });

        observer.observe(sentinel as HTMLDivElement);
    }

    onMounted(() => {
        startObservable();
    });
</script>

<template>
    <div id="sentinel"></div>
    <nav id="header" class="w-full flex flex-col top-0 sticky items-center text-white p-5 z-[999] slide-up-animation" :class="{'backdrop-blur-lg bg-[#1a1c1f]/75': shouldAddClass}">
        <!-- Mobile: hamburger button + current page indicator + social links -->
        <div class="flex w-full min-[825px]:hidden items-center justify-between">
            <div class="flex items-center gap-2">
                <button @click="isMenuOpen = !isMenuOpen" class="text-white focus:outline-none" aria-label="Toggle menu">
                    <HamburgerIcon v-if="!isMenuOpen" />
                    <CloseIcon v-else />
                </button>
                <img v-if="shouldAddClass" src="/assets/me.jpeg" class="w-6 h-6 rounded-full object-cover border border-green-400" alt="Profile" />
                <span class="font-bold text-sm">{{ $t(currentPageName) }}</span>
            </div>
            <div v-if="shouldAddClass" class="flex items-center gap-2 text-base transition-all duration-300">
                <a href="https://x.com/andrespelaez00" aria-label="Twitter/X link" target="_blank" rel="noopener noreferrer" class="hover:text-green-400 transition-colors">
                    <i class="fa-brands fa-x-twitter"></i>
                </a>
                <a href="https://github.com/afestupinanp" aria-label="GitHub link" target="_blank" rel="noopener noreferrer" class="hover:text-green-400 transition-colors">
                    <i class="fa-brands fa-github"></i>
                </a>
                <a href="https://linkedin.com/in/andrespelaez00" aria-label="LinkedIn link" target="_blank" rel="noopener noreferrer" class="hover:text-green-400 transition-colors">
                    <i class="fa-brands fa-linkedin"></i>
                </a>
                <LanguageSwitcher />
            </div>
        </div>

        <!-- Mobile: dropdown menu -->
        <Transition name="menu-slide">
            <div v-if="isMenuOpen" class="flex flex-col min-[825px]:hidden w-full items-center gap-4 pt-4 pb-2">
                <NuxtLinkLocale
                    v-for="[navName, route] in Object.entries(ROUTES)"
                    :key="navName"
                    class="font-bold transition-all duration-200 ease-in-out"
                    active-class="glow"
                    :to="route"
                    @click="isMenuOpen = false"
                >
                    {{ $t(navName) }}
                </NuxtLinkLocale>
                <a class="font-bold" href="mailto:andres.pelaez00@hotmail.com?Subject=Interesado%20en%20hablar%20-%20via%20web">{{ $t('navbar.contact-me') }}</a>
            </div>
        </Transition>

        <!-- Desktop: horizontal links -->
        <div class="hidden min-[825px]:flex w-full items-center justify-between relative">
            <!-- Left: profile image (only when stickied) -->
            <div v-if="shouldAddClass" class="flex items-center ml-2 lg:ml-4 transition-all duration-300">
                <img src="/assets/me.jpeg" class="w-8 h-8 lg:w-9 lg:h-9 rounded-full object-cover border-2 border-green-400" alt="Profile" />
            </div>

            <!-- Center: nav links -->
            <div class="flex gap-6 lg:gap-10 absolute left-1/2 -translate-x-1/2">
                <NuxtLinkLocale
                    v-for="[navName, route] in Object.entries(ROUTES)"
                    :key="navName"
                    class="font-bold transition-all duration-200 ease-in-out"
                    active-class="glow"
                    :to="route"
                >
                    {{ $t(navName) }}
                </NuxtLinkLocale>
                <a class="font-bold" href="mailto:andres.pelaez00@hotmail.com?Subject=Interesado%20en%20hablar%20-%20via%20web">{{ $t('navbar.contact-me') }}</a>
            </div>

            <!-- Right: social buttons (only when stickied) -->
            <div v-if="shouldAddClass" class="flex items-center gap-2 lg:gap-3 mr-2 lg:mr-4 text-lg lg:text-xl transition-all duration-300">
                <a href="https://x.com/andrespelaez00" aria-label="Twitter/X link" target="_blank" rel="noopener noreferrer" class="hover:text-green-400 transition-colors">
                    <i class="fa-brands fa-x-twitter"></i>
                </a>
                <a href="https://github.com/afestupinanp" aria-label="GitHub link" target="_blank" rel="noopener noreferrer" class="hover:text-green-400 transition-colors">
                    <i class="fa-brands fa-github"></i>
                </a>
                <a href="https://linkedin.com/in/andrespelaez00" aria-label="LinkedIn link" target="_blank" rel="noopener noreferrer" class="hover:text-green-400 transition-colors">
                    <i class="fa-brands fa-linkedin"></i>
                </a>
                <LanguageSwitcher />
            </div>
        </div>
    </nav>
</template>

<style scoped>
.menu-slide-enter-active,
.menu-slide-leave-active {
    transition: all 0.3s ease-in-out;
    overflow: hidden;
}

.menu-slide-enter-from,
.menu-slide-leave-to {
    max-height: 0;
    opacity: 0;
    transform: translateY(-10px);
}

.menu-slide-enter-to,
.menu-slide-leave-from {
    max-height: 500px;
    opacity: 1;
    transform: translateY(0);
}
</style>