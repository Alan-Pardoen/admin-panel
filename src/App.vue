<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld :msg="this.Test"/>
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import HelloWorld from './components/HelloWorld.vue'
import store from './store/store.js'
import { router } from './router.js'
Vue.use(BootstrapVue)
export default Vue.extend({
  name: 'App',
  router: router,
  components: {
    HelloWorld
  },
  computed: {
    Test ()
    { 
      console.log('store test ',this.$store.getters.Test )
      return this.$store.getters.Test
    }
  },
  beforeCreate () {
  this.$store = store.getStore()
  
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
