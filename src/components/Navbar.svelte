<script>
    import { link } from "svelte-spa-router";
    import Check from "@src/components/Check.svelte";
    import Helpers from "@src/helpers";
    import { _, locale } from "svelte-i18n";
    import { onDestroy, onMount } from "svelte";

    const setDarkTheme = (evt) => {
        Helpers.setDarkTheme(evt.target.checked);
    }

    const localeSubscription = locale.subscribe((newLocale) => {
        window.localStorage.setItem('locale', newLocale);
    });

    onDestroy(() => {
        localeSubscription();
    });

    onMount(() => {
        Helpers.setActiveUrl();
    });
</script>

<nav class="navbar navbar-expand-lg fixed-top bg-body-tertiary shadow non-selectable">
    <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#pageNavbar" aria-controls="pageNavbar" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="pageNavbar">
            <div class="d-flex">
                <span class="navbar-text">
                    <a class="fs-4 mx-2" target="_blank" rel="noreferrer noopener" href="https://github.com/afestupinanp">
                        <i class="fa-brands fa-github"></i>
                    </a>
                    <a class="fs-4 mx-2" target="_blank" rel="noreferrer noopener" href="https://linkedin.com/in/andrespelaez00">
                        <i class="fa-brands fa-linkedin"></i>
                    </a>
                    <a class="fs-4 mx-2" target="_blank" rel="noreferrer noopener" href="https://twitter.com/andrespelaez00">
                        <i class="fa-brands fa-x-twitter"></i>
                    </a>
                </span>
            </div>
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" use:link={{'href': '/'}}>{$_('navbar.home')}</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link" use:link={{'href': '/projects'}}>{$_('navbar.projects')}</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" use:link={{'href': '/about'}}>{$_('navbar.about')}</a>
                </li>
            </ul>
            
            <div class="d-flex">
                <span class="navbar-text">
                    <i class="fa-solid fa-language"></i>
                </span>
                <select class="form-control mx-2" bind:value={$locale}>
                    <option value="es">ES</option>
                    <option value="en">EN</option>
                </select>
                <span class="navbar-text">
                    <Check checked={Helpers.detectDarkThemePreferred()} onChange={setDarkTheme} label="<i class='fa-solid fa-moon'></i>" />
                </span>
            </div>
        </div>
    </div>
</nav>