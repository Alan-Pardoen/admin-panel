<template>
  <div id="app">
      <Navbar />
      <router-view></router-view>
  </div>
</template>

<script>
  import Vue from 'vue'
  import BootstrapVue from 'bootstrap-vue'
  import store from './store/store.js'
  import { router } from './router.js'
  import Navbar from './components/Navbar'
  Vue.use(BootstrapVue)
  export default Vue.extend({
    name: 'App',
    router: router,
    components: {
      Navbar
    },
    computed: {
      Test ()
      { 
        return this.$store.getters.Test
      }
    },
    beforeCreate () {
    this.$store = store.getStore()
    
    }
  })
</script>

<style lang="scss">
  @import '~bootstrap';
  @import '~bootstrap-vue';
  html,body{
    height: 100vh;
    width: 100vw;
  }
  .navbar{
      padding: 0;
      }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    width: 100%;
    height: 100%;
  }
</style>
