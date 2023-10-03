import { wrap } from "svelte-spa-router/wrap";
import Loading from './components/Loading.svelte';

import NotFound from './pages/NotFound.svelte';

export const baseRouteData: Object = {
    'loadingComponent': Loading
}

export default {
    '/': wrap(Object.assign(baseRouteData, {'asyncComponent': () => import('./pages/Home.svelte')})),
    '/about': wrap(Object.assign(baseRouteData, {'asyncComponent': () => import('./pages/About.svelte')})),
    '/projects': wrap(Object.assign(baseRouteData, {'asyncComponent': () => import('./pages/Projects.svelte')})),
    '/projects/sipac': wrap(Object.assign(baseRouteData, {'asyncComponent': () => import('./pages/Projects/Sipac.svelte')})),
    '/projects/apps': wrap(Object.assign(baseRouteData, {'asyncComponent': () => import('./pages/Projects/Apps.svelte')})),
    '/projects/ssmanager': wrap(Object.assign(baseRouteData, {'asyncComponent': () => import('./pages/Projects/SSManager.svelte')})),
    '*': NotFound
}