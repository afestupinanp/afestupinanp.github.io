import { wrap } from "svelte-spa-router/wrap";
import Loading from './components/Loading.svelte';

import Home from './pages/Home.svelte';
import NotFound from './pages/NotFound.svelte';

export const baseRouteData: Object = {
    'loadingComponent': Loading
}

export default {
    '/': Home,
    '/about': wrap(Object.assign(baseRouteData, {'asyncComponent': () => import('./pages/About.svelte')})),
    '/projects': wrap(Object.assign(baseRouteData, {'asyncComponent': () => import('./pages/Projects.svelte')})),
    '*': NotFound
}