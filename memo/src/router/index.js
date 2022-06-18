import Vue from 'vue'
import VueRouter from 'vue-router'
import MemoList from '@/pages/MemoList'
import MemoDetails from '@/pages/MemoDetails'
import HelloWorld from '@/pages/HelloWorld'
import SimpleForm from '@/pages/SimpleForm'
import GridView from '@/pages/GridView'
import PopperView from '@/pages/PopperView'
import CheckOut from '@/pages/CheckOut'
import SignIn from '@/pages/SignIn'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld,
    meta : {
      title: 'hello world'
    }
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
  },
  {
    path: '/sign-in',
    name: 'SignIn',
    component: SignIn,
    meta: {
      title: 'sign in'
    }
  },
  {
    path: '/simple-form',
    name: 'SimpleForm',
    component: SimpleForm,
    meta: {
      title: 'simple form'
    }
  },
  {
    path: '/grid-view',
    name: 'GridView',
    component: GridView,
    meta: {
      title: 'grid view'
    }
  },
  {
    path: '/popper-view',
    name: 'PopperView',
    component: PopperView,
    meta: {
      title: 'popper view'
    }
  },
  {
    path: '/check-out',
    name: 'CheckOut',
    component: CheckOut,
    meta: {
      title: 'check out'
    }
  },
  {
    path: '*',
    redirect :{
      name: 'HelloWorld'
    }
  }
]

const router = new VueRouter({
  routes,
  scrollBehavior: (to, from, savedPosition) => {
    return savedPosition || {x: 0, y:0}
  }
})

//グローバルbeforeガード
router.beforeEach((to, from, next) => {
  //to: route:次にナビゲーションされる対象のルートオブジェクト
  //from: route: ナビゲーションされる前の現在のルート
  //next: function:フックを解決するためにこの関数を呼ぶ必要がある
  next()
})

//グローバルafterガード
router.afterEach((to) => {
  if (to.meta && to.meta.title) {
    if (to.params && to.params.id) {
      document.title = `${to.meta.title} # ${to.params.id}`
    }else {
      document.title = to.meta.title
    }
  }
})

export default router
