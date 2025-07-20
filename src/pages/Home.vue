<script setup lang="ts">
    import Card from '../components/Card.vue';
    import profileImg from '../assets/me.jpeg';
</script>


<template>
    <main class="w-full">
        <div class="mx-auto py-3">
            <div class="inline-block text-center w-1/2">
                <img :src="profileImg" class="rounded-full w-50 h-50 inline-block" alt="Profile picture of Andrés Felipe Estupiñan" />
            </div>
            <p class="inline-block text-center w-1/2 text-4xl">
                Andrés Felipe Estupiñan Peláez<br/>
                Full stack engineer
            </p>
        </div>
        <Card hoverable>test</Card>
    </main>
</template>
