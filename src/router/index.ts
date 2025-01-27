import { createRouter, createWebHistory } from 'vue-router';
import ApplicationPage from '@/views/application/index.vue';

const routes = [
  {
    path: '/',
    name: 'application',
    component: ApplicationPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
