import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'
import {routes} from './routes'
import store from './store/store'

Vue.use(Vuetify)
Vue.use(VueRouter)


export const bus = new Vue();

const router = new VueRouter({
  routes,
  mode:'history'
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
