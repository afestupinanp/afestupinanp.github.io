import App from './App.svelte';

import './scss/app.scss';
import 'bootstrap';

const app = new App({
    'target': document.querySelector('#app')
});

export default app;