import { createRouter, createWebHistory } from 'vue-router';

import CoachDetail from '../pages/coaches/CoachDetail.vue';
import CoachesList from '../pages/coaches/CoachesList.vue';
import CoachesRegistration from '../pages/coaches/CoachRegistration.vue';
import ContactCoach from '../pages/requests/ContactCoach.vue';
import RequestsReceived from '../pages/requests/RequestsReceived.vue';
import UserAuth from '@/pages/auth/UserAuth';

import NotFound from '../pages/NotFound.vue';

import store from '../store/index';

const routes = [
  {
    path: '/',
    name: 'Initial Route',
    redirect: '/coaches',
  },
  {
    path: '/coaches',
    name: 'Coaches',
    component: CoachesList,
  },
  {
    path: '/coaches/:id',
    name: 'Coach Details',
    component: CoachDetail,
    props: true,
    children: [
      {
        path: 'contact',
        name: 'Contact Coach',
        component: ContactCoach,
      },
    ],
  },
  {
    path: '/register',
    name: 'Register',
    component: CoachesRegistration,
    meta: { requiresAuth: true },
  },
  {
    path: '/requests',
    name: 'Requests',
    component: RequestsReceived,
    meta: { requiresAuth: true },
  },
  {
    path: '/auth',
    name: 'Auth',
    component: UserAuth,
    meta: { requiresUnauth: true },
  },
  {
    path: '/:notFound(.*)',
    name: 'Not Found',
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, _, next) => {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next('/auth');
  } else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
    next('/coaches');
  } else {
    next();
  }
});

export default router;
