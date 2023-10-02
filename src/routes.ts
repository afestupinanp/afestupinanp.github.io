import { wrap } from "svelte-spa-router/wrap";
import Loading from './components/Loading.svelte';

import NotFound from './pages/NotFound.svelte';

export const baseRouteData: Object = {
    'loadingComponent': Loading
}

export default {
    '/': wrap(Object.assign(baseRouteData, {'asyncComponent': () => import('./pages/Home.svelte')})),
    '/about': wrap(Object.assign(baseRouteData, {'asyncComponent': () => import('./pages/About.svelte')})),
    '/experience': wrap(Object.assign(baseRouteData, {'asyncComponent': () => import('./pages/Experience.svelte')})),
    '/projects/sipac': wrap(Object.assign(baseRouteData, {'asyncComponent': () => import('./pages/Projects/Sipac.svelte')})),
    '*': NotFound
}