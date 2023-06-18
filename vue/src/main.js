import '@/assets/main.css';

import { createApp } from 'vue';

import App from '@/App.vue';
import router from '@/router';

import { init } from '@/auth/keycloak.js';

const app = createApp(App);

init()
    .then(() => app.use(router))
    .then(() => app.mount('#app'))
    .catch(console.error);
