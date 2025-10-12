<script setup lang="ts">
    const ROUTES = {
        'navbar.home': '/',
        'navbar.about': '/about',
        'navbar.experience-skills': '/experience'
    };

    const { locales, localeProperties, setLocale } = useI18n();

    const shouldAddClass = ref(false);

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

    const handleChange = (event: Event) => {
        const value = (event.target as HTMLSelectElement).value;
        setLocale(value as "en"|"es");
    }

    onMounted(() => {
        startObservable();
    });
</script>

<template>
    <div id="sentinel"></div>
    <nav id="header" class="`w-full flex top-0 sticky items-center text-white p-5 z-[999] text-lg slide-up-animation`" :class="{'backdrop-blur-lg bg-[#1a1c1f]/75': shouldAddClass}">
        <div class="flex items-center text-2xl gap-3">
            <a href="https://x.com/afestupinanp" class="" target="_blank" rel="noopener noreferrer">
                <i class="fa-brands fa-x-twitter"></i>
            </a>
            <a href="https://github.com/afestupinanp" class="" target="_blank" rel="noopener noreferrer">
                <i class="fa-brands fa-github"></i>
            </a>
            <a href="https://linkedin.com/andrespelaez00" class="" target="_blank" rel="noopener noreferrer">
                <i class="fa-brands fa-linkedin"></i>
            </a>
        </div>
        <div class="flex grow justify-center gap-10 items-center">
            <NuxtLinkLocale
                v-for="[navName, route] in Object.entries(ROUTES)"
                class="font-bold transition-all duration-200 ease-in-out"
                active-class="glow"
                :to="route"
            >
                {{ $t(navName) }}
            </NuxtLinkLocale>
        </div>
        <div>
            <i class="fa-solid fa-language mr-3"></i>
            <select class="bg-transparent border-[1px] border-gray-400/50 p-2" @change="handleChange">
                <option :selected="locale.code == localeProperties.code" class="bg-gray-900" v-for="locale in locales" :value="locale.code">{{ locale.language }}</option>
            </select>
        </div>
    </nav>
</template>