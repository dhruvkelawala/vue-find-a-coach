import { createStore } from 'vuex';

import coachesModule from './modules/coaches';
import requestModule from './modules/requests';
import authModule from './modules/auth';

export default createStore({
  mutations: {},
  actions: {},
  modules: {
    coaches: coachesModule,
    requests: requestModule,
    auth: authModule,
  },
});
