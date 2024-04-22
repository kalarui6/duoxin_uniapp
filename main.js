import App from './App'
// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'

Vue.config.productionTip = false
// Vue.component('titles',titles)
// main.js

App.mpType = 'app'
// Vue.use(uView);

const app = new Vue({
  ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
import uviewPlus from 'uview-plus'

export function createApp() {
  const app = createSSRApp(App)
  app.use(uviewPlus)

  return {
    app
  }
}
// #endif