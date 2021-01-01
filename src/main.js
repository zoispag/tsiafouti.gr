import Vue from 'vue'
import App from './App.vue'
import '@/assets/css/tailwind.scss'
import vueSmoothScroll from 'vue2-smooth-scroll'

Vue.use(vueSmoothScroll)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
