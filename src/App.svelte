<script>
    import Router from 'svelte-spa-router';
    import routes from './routes';
    import Navbar from './components/Navbar.svelte';
    import Footer from './components/Footer.svelte';
    import Helpers from './helpers';
    import { addMessages, getLocaleFromNavigator, init } from 'svelte-i18n';

    import es from './lang/es.json';
    import en from './lang/en.json';

    export const ssr = false;

    // load messages
    addMessages('es', es);
    addMessages('en', en);

    // detect dark theme
    const darkTheme = Helpers.detectDarkThemePreferred();
    Helpers.setDarkTheme(darkTheme);

    // init i18n
    init({
        'fallbackLocale': 'en',
        'initialLocale': window?.localStorage?.getItem('locale') ?? 'es'
    });
</script>

<Navbar />
<div class="container-fluid d-flex flex-column min-vh-100" style="padding-top: 80px;">
    <Router on:routeLoaded={() => Helpers.setActiveUrl()} {routes} />
</div>
<Footer />