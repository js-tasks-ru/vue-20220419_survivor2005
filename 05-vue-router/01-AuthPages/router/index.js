import { createRouter, createWebHistory } from 'vue-router';

export const router = createRouter({
  history: createWebHistory('/05-vue-router/01-AuthPages'),
  routes: [
    {
      name: 'PageIndex',
      path: '/',
      component: () => import('../views/PageIndex.vue')
    },
    {
      name: 'PageLogin',
      path: '/login',
      component: () => import('../views/PageLogin.vue')
    },
    {
      name: 'PageRegister',
      path: '/register',
      component: () => import('../views/PageRegister.vue')
    }
  ],
});
