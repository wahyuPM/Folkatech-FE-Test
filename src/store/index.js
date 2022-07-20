import Vue from 'vue'
import Vuex from 'vuex'
import product from './modules/product'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    auth: {
      token: null,
    },
  },
  getters: {
    getAuth(state) {
      return state.auth
    }
  },
  mutations: {
    setAuth(state, params) {
      state.auth = {
        ...state.auth,
        ...params
      }
    }
  },
  actions: {
    actionSetAuth({ commit }, params) {
      commit('setAuth', params)
    },
  },
  modules: {
    product,
  }
})
