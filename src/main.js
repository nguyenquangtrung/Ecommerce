import Vue from 'vue'
import App from './App.vue'
import JQuery from 'jquery'
window.$ = window.JQuery = JQuery
import 'popper.js'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/app.scss'

import router from './router'
Vue.component('NavBar',require('@/components/NavBar.vue').default)
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
