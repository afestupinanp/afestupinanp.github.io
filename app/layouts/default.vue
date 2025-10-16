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
      htmlAttrs: localizedHead.value.htmlAttrs
    })

</script>

<template>
  <Background />
  <PageHeader />
  <Navbar />
  <div class="w-full pt-[80px] px-4">
    <NuxtPage />
  </div>
  <PageFooter />
</template>
