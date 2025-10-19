<script setup lang="ts">
    import PageFooter from '@/components/PageFooter.vue';
    import Navbar from '@/components/Navbar.vue';
    import Background from '@/components/Background.vue';
    import PageHeader from '~/components/PageHeader.vue';

    const localizedHead = useLocaleHead({
      dir: true,
      lang: true,
    });

    useHead({
      bodyAttrs: {
        class: 'bg-[#1a1c1f] text-white'
      },
      link: [
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.0/css/all.min.css', crossorigin: 'anonymous', integrity: 'sha512-DxV+EoADOkOygM4IR9yXP8Sb2qwgidEmeqAEmDKIOfPRQZOWbXCzLC6vjbZyy0vPisbH2SyW27+ddLVCN+OMzQ==', referrerpolicy: 'no-referrer' }
      ],
      htmlAttrs: localizedHead.value.htmlAttrs,
    });

    useSeoMeta({
      googleSiteVerification: "U9Tgguy51wP_lRyMhASKbGnOC4OtR8P8UJU4o9Ibq08"
    });

</script>

<template>
  <Background />
  <PageHeader />
  <Navbar />
  <div class="w-full pt-[80px] px-4">
    <slot />
  </div>
  <PageFooter />
</template>
