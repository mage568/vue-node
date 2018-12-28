import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router'
import Routes from './routes/routes'

Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.use(VueRouter);

const router = new VueRouter({
  routes: Routes, // short for routes: routes
  mode: 'history',
  linkActiveClass: 'active'
})

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
}).$mount('#app')
