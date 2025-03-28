import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/pages/Home.vue';
import About from '@/pages/About.vue';
import Members from '@/pages/Members.vue';
import Videos from '@/pages/Videos.vue';
import MemberInfo from '@/pages/MemberInfo.vue';
import NotFound from '@/pages/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/About', component: About },
    { path: '/Members', component: Members },
    { path: '/Videos', component: Videos },
    {
      path: '/Members/:id',
      component: MemberInfo,
      beforeEnter: (to, from) => {
        return (
          from.fullPath === '/members' ||
          from.fullPath.startsWith('/members:id')
        );
      },
    },
    { path: '/:paths(.*)*', component: NotFound },
  ],
});

export default router;
