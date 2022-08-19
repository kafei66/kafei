import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import( '../views/AboutView.vue'),
    children:[{
      path: '/pople',
    name: 'pople',
    component: () => import( '../views/pople.vue')
    },{
      path: '/article',
    name: 'article',
    component: () => import( '../views/article.vue')
    },{
      path: '/json',
    name: 'json',
    component: () => import( '../views/json.vue')
    },{
      path: '/user',
      name: 'user',
      component: () => import( '../views/user.vue')
    }]
  }
]

const router = new VueRouter({
  routes
})

export default router
