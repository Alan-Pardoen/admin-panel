import Vue from 'vue'
import BlackList from './views/BlackList'
import Home from './views/Home'
import InfraCommand from './views/InfraCommand'
import InfraView from './views/InfraView'
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
    path: '/blacklist',
    name: 'BlackList',
    component: BlackList
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/infracommand',
    name: 'InfraCommand',
    component: InfraCommand
  },
  {
    path: '/infraview',
    name: 'InfraView',
    component: InfraView
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
