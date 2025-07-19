<script setup lang="ts">
    import { computed, onMounted, ref } from 'vue';

    const canvas = ref();
    const canvasContext = computed(() => canvas.value.getContext('2d'));

    onMounted(() => {

    });

</script>

<template>
  <main class="w-full mt-[60px]">
    <canvas id="wavyBackground" :ref="canvas" width="100%" height="100%"></canvas>
    Andrés Felipe Estupiñan Peláez
  </main>
</template>

<style lang="css" scoped>

  #wavyBackground {
    position: fixed; /* Or absolute, depending on your layout */
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1; /* Place it behind other content */
  }

</style>
