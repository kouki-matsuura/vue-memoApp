import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MemoList from '@/pages/MemoList'
import MemoDetails from '@/pages/MemoDetails'

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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/memo-list',
    name: 'MemoList',
    component: MemoList,
    meta: {
      title: 'memo list'
    }
  },
  {
    path: '/memo/:id',
    name: 'MemoDetails',
    component: MemoDetails,
    props: true,
    meta: {
      title: 'details of memo'
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
