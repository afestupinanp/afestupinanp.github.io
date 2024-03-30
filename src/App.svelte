<script>
    import Router from 'svelte-spa-router';
    import routes from '@src/routes';
    import Navbar from '@src/components/Navbar.svelte';
    import Footer from '@src/components/Footer.svelte';
    import Helpers from '@src/helpers';
    import { addMessages, init } from 'svelte-i18n';

    import es from '@lang/es.json';
    import en from '@lang/en.json';

    export const ssr = false;
    export const fallbackLocale = 'en';

    // load messages
    addMessages('es', es);
    addMessages('en', en);

    // detect dark theme
    const darkTheme = Helpers.detectDarkThemePreferred();
    Helpers.setDarkTheme(darkTheme);

    // init i18n
    init({
        'fallbackLocale': fallbackLocale,
        'initialLocale': window?.localStorage?.getItem('locale') ?? window.navigator.language
    });

    const onPageChange = () => {
        Helpers.setActiveUrl();
        window.scrollTo(0,0);
    }

</script>

<Navbar />
<div class="container-fluid bg-body d-flex flex-column min-vh-100">
    <Router on:routeLoaded={onPageChange} {routes} />
</div>
<Footer />