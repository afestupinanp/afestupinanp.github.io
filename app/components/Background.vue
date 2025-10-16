<script setup lang="ts">
</script>

<template>
    <div class="fixed top-0 left-0 z-[-1] min-h-full min-w-full">
        <svg width="100%" height="100%" viewBox="0 0 1920 1080" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
            <defs>
                <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="rgba(255,255,255,0.2)" />
                <stop offset="100%" stop-color="rgba(255,255,255,0)" />
                </linearGradient>
            </defs>

            <g class="wave-container-1" transform="translateX(-240)">
                <path class="wave-path-main"
                    d="M0,700 C500,600 1200,800 1800,650 C2100,550 2400,700 2400,700 L2400,1080 L0,1080 Z"
                    fill="url(#waveGradient)" />
            </g>

            <g class="wave-container-2" transform="translateX(-240)">
                <path class="wave-path-secondary"
                    d="M0,750 C600,600 1300,850 2000,700 C2200,650 2400,750 2400,750 L2400,1080 L0,1080 Z"
                    fill="rgba(255,255,255,0.05)" />
            </g>
        </svg>
    </div>
</template>
