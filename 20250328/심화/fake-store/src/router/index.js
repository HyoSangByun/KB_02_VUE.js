import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/pages/HomePage.vue';
import Electronics from '@/pages/ElectronicsPage.vue';
import Jewelery from '@/pages/JeweleryPage.vue';
import Mensclothing from '@/pages/MensClothingPage.vue';
import Womenclothing from '@/pages/WomensClothingPage.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/electronics', component: Electronics },
    { path: '/jewelery', component: Jewelery },
    { path: '/mensclothing', component: Mensclothing },
    { path: '/womenclothing', component: Womenclothing },
  ],
});

export default router;
