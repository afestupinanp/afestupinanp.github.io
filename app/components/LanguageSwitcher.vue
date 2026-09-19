<script setup lang="ts">
    const { locales, localeProperties, setLocale } = useI18n();
    const handleChange = (event: Event) => {
        const value = (event.target as HTMLSelectElement).value;
        setLocale(value as "en"|"es");
    }
</script>

<template>
    <div class="text-sm">
        <i id="language-switcher-icon" class="fa-solid fa-language mr-1"></i>
        <select aria-labelledby="language-switcher-icon" class="bg-transparent border-[1px] border-gray-400/50 p-1 text-sm" @change="handleChange">
            <option :selected="locale.code == localeProperties.code" class="bg-gray-900" v-for="locale in locales" :value="locale.code">{{ locale.code.toUpperCase() }}</option>
        </select>
    </div>
</template>