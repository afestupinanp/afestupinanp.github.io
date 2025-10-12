<script setup lang="ts">
    import { computed, onMounted, onUnmounted, ref, useTemplateRef, watch } from 'vue';

    const WAVE_AMOUNTS = 2;
    const WAVES_COLOR = 'rgba(135, 163, 201, 0.05)';
    const WAVE_AMPLITUDE = 20;
    const WAVE_FREQUENCY = 5;
    const WAVE_SPEED = 0.007;

    const canvas = useTemplateRef<HTMLCanvasElement|null>('canvas');
    const waveInfo = ref<any>([]);
    const canvasContext = computed<CanvasRenderingContext2D | null | undefined>(() => canvas?.value?.getContext('2d'));

    const initWaves = () => {
        waveInfo.value = [];
        const waves = [];
        for (let i = 0 ; i <= WAVE_AMOUNTS ; i++) {
            waves.push({
                yOffset: 80,
                phaseOffset: Math.random() * Math.PI * 2,
                speed: Math.random() * WAVE_SPEED + WAVE_SPEED
            });
        }

        waveInfo.value = waves;
    }

    const drawWaves = () => {
        const context = canvasContext.value;
        const existingCanvas = canvas.value;
        if (!context || !existingCanvas) {
            return;
        }


        context.clearRect(0, 0, existingCanvas.width, existingCanvas.height);
        waveInfo.value.forEach((wave: { yOffset: number; phaseOffset: number; speed: number; }) => {
            context.beginPath();
            
            // Set the fill color for the current wave
            context.fillStyle = WAVES_COLOR;

            // Start from the bottom-left corner of the canvas to close the shape
            context.moveTo(0, existingCanvas.height);
            // Then move to the starting point of the wave line at the left edge
            context.lineTo(0, wave.yOffset + WAVE_AMPLITUDE * Math.sin(wave.phaseOffset));

            for (let x = 0; x <= existingCanvas.width; x += 5) { // Draw line across the width, smaller step for smoother fill
                const y = wave.yOffset + WAVE_AMPLITUDE * Math.sin(x * WAVE_FREQUENCY + (wave.speed) * Date.now() * 0.01 + wave.phaseOffset);
                context.lineTo(x, y);
            }

            // Draw the line down to the bottom-right corner of the canvas
            context.lineTo(existingCanvas.width, existingCanvas.height);
            // And back to the starting bottom-left corner (already moved to 0, canvas.height)
            context.closePath(); // Closes the path

            // Fill the defined shape with the fillStyle
            context.fill();
        });
        requestAnimationFrame(drawWaves);
    }

    const handleResize = () => {
        initWaves();
    }

    onMounted(() => {
        window.addEventListener('resize', handleResize);
    });

    onUnmounted(() => {
        window.removeEventListener('resize', handleResize);
    });


    watch(() => canvasContext.value, (val) => {
        if (val) {
            initWaves();
            drawWaves();
        }
    }, { immediate: true });
</script>

<template>
    <div class="fixed top-0 left-0 z-[-1] min-h-full min-w-full">
        <canvas class="w-full h-full" ref="canvas">
        </canvas>
    </div>
</template>
