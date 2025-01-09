import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/ទំព័រដើម', name: 'Home', component: () => import('../Views/Home.vue')},
  { path: '/សេវាកម្មពិសេស', name: 'Offer', component: () => import('../Views/Offer.vue') },
  { path: '/សេវាកម្ម', name: 'Service', component: () => import('../Views/Service.vue') },
  { path: '/ម៉ឺនុយ', name: 'Menu', component: () => import('../Views/Menu.vue') },
  { path: '/អំពីពួកយើង', name: 'About', component: () => import('../Views/About.vue') },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
