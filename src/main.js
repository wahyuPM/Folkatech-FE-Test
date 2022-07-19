import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import store from './store'


Vue.config.productionTip = false
Vue.prototype.$http = axios;
Vue.prototype.$app_url = process.env.VUE_APP_URL
Vue.prototype.$api_url = process.env.VUE_APP_API_URL
Vue.prototype.$assets_url = process.env.VUE_APP_ASSETS_URL

require('@/assets/tailwind.css')

//Define Global Authorization Header Token
const auth = JSON.parse(localStorage.getItem('auth'));
if (auth) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = `Bearer ` + auth.token
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
