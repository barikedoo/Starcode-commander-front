import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'
import {routes} from './routes'

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
  render: h => h(App)
})
