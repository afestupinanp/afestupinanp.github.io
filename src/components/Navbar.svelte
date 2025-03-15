<script>
    import { link } from "svelte-spa-router";
    import Check from "@src/components/Check.svelte";
    import Helpers from "@src/helpers";
    import { _ } from "svelte-i18n";
    import { onMount } from "svelte";
    import Locale from "@src/components/Locale.svelte";
    import * as bootstrap from 'bootstrap';

    const setDarkTheme = (evt) => {
        Helpers.setDarkTheme(evt.target.checked);
    }

    const handleClick = (evt) => {
        const navbar = document.querySelector(".navbar-collapse.show"); // Get the open navbar
        if (navbar && !evt.target.closest(".navbar")) {
            const bsCollapse = new bootstrap.Collapse(navbar, { toggle: false });
            bsCollapse.hide();
        }
    }

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
            <div class="d-flex width-navbar-items order-1">
                <span class="navbar-text text-center w-100">
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
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0 width-navbar-items order-2">
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" use:link={{'href': '/'}}>{$_('navbar.home')}</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" use:link={{'href': '/about'}}>{$_('navbar.about')}</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="mailto:andres.pelaez00@hotmail.com?Subject=Interesado%20en%20hablar%20-%20via%20web">{$_('navbar.contact-me')}</a>
                </li>
            </ul>
            
            <div class="d-flex width-navbar-items order-3">
                <Locale />
                <span class="navbar-text">
                    <Check checked={Helpers.detectDarkThemePreferred()} onChange={setDarkTheme} label="<i class='fa-solid fa-moon'></i>" />
                </span>
            </div>
        </div>
    </div>
</nav>

<svelte:window onclick={handleClick} />