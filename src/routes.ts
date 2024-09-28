import { wrap } from "svelte-spa-router/wrap";
import Loading from '@src/components/Loading.svelte';

import NotFound from '@src/pages/NotFound.svelte';

export const baseRouteData: Object = {
    'loadingComponent': Loading
}

export default {
    '/': wrap(Object.assign(baseRouteData, {'asyncComponent': () => import('@src/pages/Home.svelte')})),
    '/about': wrap(Object.assign(baseRouteData, {'asyncComponent': () => import('@src/pages/About.svelte')})),
    '*': NotFound
}