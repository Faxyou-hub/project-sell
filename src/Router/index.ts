import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', name: 'Home', component: () => import('../Views/Home.vue')},
  { path: '/good-book', name: 'good-book', component: () => import('../Views/GoodBook.vue') },
  { path: '/books', name: 'books', component: () => import('../Views/Books.vue') },
  { path: '/contact-us', name: 'contact-us', component: () => import('../Views/Contact.vue') },
  { path: '/FAQ', name: 'FAQ', component: () => import('../Views/FAQS.vue')},
  { path: '/about', name: 'About', component: () => import('../Views/About.vue')},
  { path: '/blog', name: 'Blog', component: () => import('../Views/Blog.vue')},
  
  { path: '/children', name: 'Children', component: () => import('../Views/Book/ChildrenBook.vue')},
  { path: '/educational', name: 'Educational', component: () => import('../Views/Book/EducationalBook.vue')},
  { path: '/khmer-history', name: 'KhmerHistory', component: () => import('../Views/Book/KhmerHistoryBook.vue')},
  { path: '/religious', name: 'Religious', component: () => import('../Views/Book/ReligiousBook.vue')},
  { path: '/judge', name: 'SelfHelp', component: () => import('../Views/Book/JudgeBook.vue')},
  { path: '/sports', name: 'SportBook', component: () => import('../Views/Book/SportBook.vue')},
  { path: '/social-science', name: 'SocialScience', component: () => import('../Views/Book/SocialScienceBook.vue')},
  { path: '/literature', name: 'Literature', component: () => import('../Views/Book/LiteratureBook.vue')},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
