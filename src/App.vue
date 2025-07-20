<script setup lang="ts">
    import { RouterView } from 'vue-router';
    import PageFooter from './components/PageFooter.vue';
    import Navbar from './components/Navbar.vue';
    import Background from './components/Background.vue';
</script>

<template>
  <Background />
  <Navbar />
  <div class="w-full pt-[80px] px-4">
    <RouterView />
  </div>
  <PageFooter />
</template>
