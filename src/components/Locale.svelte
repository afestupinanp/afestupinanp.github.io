<script>
    import { onDestroy } from 'svelte';
    import {locale} from 'svelte-i18n';

    const localeSubscription = locale.subscribe((newLocale) => {
        window.localStorage.setItem('locale', newLocale);
    });

    onDestroy(() => {
        localeSubscription();
    });
</script>

<span class="navbar-text">
    <i class="fa-solid fa-language"></i>
</span>
<select class="form-control hoverable mx-2" bind:value={$locale}>
    <option value="es">ES</option>
    <option value="en">EN</option>
</select>