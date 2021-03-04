import { createRouter, createWebHistory } from 'vue-router'

import CoachDetail from '../pages/coaches/CoachDetail.vue'
import CoachesList from '../pages/coaches/CoachesList.vue'
import CoachesRegistration from '../pages/coaches/CoachRegistration.vue';
import ContactCoach from '../pages/requests/ContactCoach.vue';
import RequestsReceived from '../pages/requests/RequestsReceived.vue';
import NotFound from '../pages/NotFound.vue'

const routes = [
  {
    path: '/',
    name: "Initial Route",
    redirect: '/coaches'
  },
  {
    path: '/coaches',
    name: 'Coaches',
    component: CoachesList
  },
  {
    path: '/coaches/:id',
    name: 'Coach Details',
    component: CoachDetail,
    props: true,
    children: [
      {
        path: 'contact',
        name: "Contact Coach",
        component: ContactCoach
      }
    ]
  },
  {
    path: '/register',
    name: 'Register',
    component: CoachesRegistration,
  },
  {
    path: '/requests',
    name: 'Requests',
    component: RequestsReceived,
  },
  {
    path: '/:notFound(.*)',
    name: "Not Found",
    component: NotFound,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
