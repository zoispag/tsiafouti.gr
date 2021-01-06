import Vue from 'vue'
import App from './App.vue'
import '@/assets/css/tailwind.scss'
import vueSmoothScroll from 'vue2-smooth-scroll'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDkd3y9D_yevOWFvyN704Z3vOjqj1zDjK4',
    libraries: 'places' // necessary for places input
  }
})

Vue.use(vueSmoothScroll)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
