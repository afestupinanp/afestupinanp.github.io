import { wrap } from "svelte-spa-router/wrap";
import Loading from '@src/components/Loading.svelte';

import NotFound from '@src/pages/NotFound.svelte';

export const baseRouteData: Object = {
    'loadingComponent': Loading
}

export default {
    '/': wrap(Object.assign(baseRouteData, {'asyncComponent': () => import('@src/pages/Home.svelte')})),
    '/about': wrap(Object.assign(baseRouteData, {'asyncComponent': () => import('@src/pages/About.svelte')})),
    '/projects': wrap(Object.assign(baseRouteData, {'asyncComponent': () => import('@src/pages/Projects.svelte')})),
    '/projects/sipac': wrap(Object.assign(baseRouteData, {'asyncComponent': () => import('@src/pages/Projects/Sipac.svelte')})),
    '/projects/apps': wrap(Object.assign(baseRouteData, {'asyncComponent': () => import('@src/pages/Projects/Apps.svelte')})),
    '/projects/ssmanager': wrap(Object.assign(baseRouteData, {'asyncComponent': () => import('@src/pages/Projects/SSManager.svelte')})),
    '*': NotFound
}