<script setup lang="ts">
    const ROUTES = {
        'navbar.home': '/',
        'navbar.about': '/about',
        'navbar.experience-skills': '/experience'
    };

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

    onMounted(() => {
        startObservable();
    });
</script>

<template>
    <div id="sentinel"></div>
    <nav id="header" class="w-full flex top-0 sticky items-center text-white p-5 z-[999] slide-up-animation overflow-x-auto" :class="{'backdrop-blur-lg bg-[#1a1c1f]/75': shouldAddClass}">
        <div class="w-max sm:w-full flex justify-center">
            <div class="w-max flex gap-10">
                <NuxtLinkLocale
                    v-for="[navName, route] in Object.entries(ROUTES)"
                    class="font-bold transition-all duration-200 ease-in-out"
                    active-class="glow"
                    :to="route"
                >
                    {{ $t(navName) }}
                </NuxtLinkLocale>
                <a class="font-bold" href="mailto:andres.pelaez00@hotmail.com?Subject=Interesado%20en%20hablar%20-%20via%20web">{{ $t('navbar.contact-me') }}</a>
            </div>
        </div>
    </nav>
</template>