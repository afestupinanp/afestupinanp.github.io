import { mount } from 'svelte';
import App from '@src/App.svelte';

import '@src/scss/app.scss';
import 'bootstrap';

const app = mount(App, {
    'target': document.querySelector('#app')
});

export default app;