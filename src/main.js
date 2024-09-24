import './assets/scss/all.scss';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

// vue-loading-overlay
import { LoadingPlugin } from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';

const app = createApp(App);

app.use(createPinia());
app.use(router);

// vue-loading-overlay
app.use(LoadingPlugin);

app.mount('#app');
