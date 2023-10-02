import App from './src/App.svelte';

import './src/scss/app.scss';
import 'bootstrap';

const app = new App({
    'target': document.querySelector('#app')
});

export default app;