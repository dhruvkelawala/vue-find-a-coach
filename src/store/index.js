import { createStore } from 'vuex'

import coachesModule from './modules/coaches'
import requestModules from './modules/requests'

export default createStore({
  state() {
    return {
      userId: 'c3'
    }
  },
  mutations: {
  },
  actions: {
  },
  getters: {
    userId(state) {
      return state.userId
    }
  },
  modules: {
    coaches: coachesModule,
    requests: requestModules
  }
})
