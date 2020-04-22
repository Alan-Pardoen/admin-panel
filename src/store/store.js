import Vue from 'vue'
import Vuex from 'vuex'
import state from './state.js'
import actions from './actions.js'
import mutations from './mutations.js'
import getters from './getters.js'

Vue.use(Vuex)
export default {
  getStore () {
    return new Vuex.Store({
      // strict: process.env.NODE_ENV !== 'production',
      state: state.getState(),
      mutations: mutations,
      actions: actions,
      getters: getters
    })
  }
}
