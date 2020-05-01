import Vue from 'vue'
import Home from './views/Home'
import Login from './views/Login'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
// creation des routes
const routes = [
  {
    path: '/',
    name: 'default',
    redirect: `/login`
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }

]
// création du vue router
export const router = new VueRouter({
  // appel des routes deffinie au dessus
  routes: routes
})
