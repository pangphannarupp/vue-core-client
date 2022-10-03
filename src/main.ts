import { createApp } from 'vue'
import App from '@/App.vue'
import Core from './core/core';

const app = createApp(App);

// app.config.globalProperties.$core = new Core();
app.config.globalProperties.$core = (window as any).core;
app.mount('#app');