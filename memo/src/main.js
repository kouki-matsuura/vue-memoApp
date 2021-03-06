import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import moment from 'vue-moment'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

Vue.use(moment)
Vue.use(BootstrapVue)

Vue.mixin({
  methods: {
  },
  computed: {
    routeInfo: {
      get() {
        return `${this.$route.name} : ${this.$route.path}`
      }
    }
  }
})

/*new Vue({
  el: '#app',
  'router' : router,
  'store' : store,
  components: { App },
  template: '<App/>'
})*/
new Vue ({
  'router' : router,
  'store' : store,
  render: h => h(App),
}).$mount('#app')