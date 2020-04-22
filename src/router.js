import Vue from 'vue'
import Home from './views/Home'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
// creation des routes
const routes = [
  {
    path: '/',
    name: 'default',
    redirect: `/home`
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  }

]
// création du vue router
export const router = new VueRouter({
  // appel des routes deffinie au dessus
  routes: routes
})