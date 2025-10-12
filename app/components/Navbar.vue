<script setup lang="ts">
    const ROUTES = {
        'navbar.home': '/',
        'navbar.about': '/about',
        'navbar.experience-skills': '/experience'
    };

    const shouldAddClass = ref(false);

    const startObservable = () => {
        const header = document.getElementById('header');
        const sentinel = document.getElementById('sentinel');

        const observer = new IntersectionObserver(([entry]) => {
            // 'entry' represents the sentinel element's intersection state
            if (entry.intersectionRatio === 0) {
                // If the sentinel is completely out of view (scrolled past),
                // it means the header is now sticky.
                shouldAddClass.value = true;
            } else {
                // If the sentinel is in view (at the top),
                // it means the header is not yet sticky or has returned to its original position.
                shouldAddClass.value = false;
            }
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
    <header id="header" class="`w-full flex grow justify-center gap-10 items-center top-0 sticky text-white p-5 shadow z-[999] text-lg slide-up-animation`" :class="{'backdrop-blur-lg bg-[#1a1c1f]/75': shouldAddClass}">
        <NuxtLinkLocale
            v-for="[navName, route] in Object.entries(ROUTES)"
            class="font-bold transition-all duration-200 ease-in-out"
            active-class="glow"
            :to="route"
        >
            {{ $t(navName) }}
        </NuxtLinkLocale>
    </header>
</template>