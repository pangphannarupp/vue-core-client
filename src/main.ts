import { createApp } from 'vue'
import App from '@/App.vue'
import Core from './core/core';

const app = createApp(App);

app.config.globalProperties.$core = new Core();
app.mount('#app');