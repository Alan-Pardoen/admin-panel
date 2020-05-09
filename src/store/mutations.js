import Vue from 'vue'
export default {
  SetConnect(state, payload){
    Vue.set(state, 'connect', payload)
  },
  SetBlackList(state, payload){
    Vue.set(state, 'blacklist', payload)
  }
}
