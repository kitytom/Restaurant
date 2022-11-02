import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drk: ''
  },
  getters: {
  },
  mutations: {
    bgcolor (state, data) {
      state.drk = data
    }
  },
  actions: {
  },
  modules: {
  }
})
