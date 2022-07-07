// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import VueTypedJs from 'vue-typed-js'
import './assets/css/global.css'
import 'element-ui/lib/theme-chalk/index.css'
import {api} from './api'
import Video from 'video.js'
import 'video.js/dist/video-js.css'

Vue.prototype.$api = api
Vue.prototype.$video = Video
Vue.use(VueTypedJs)
Vue.use(ElementUI)
Vue.config.productionTip = false

var axios = require('axios')
axios.defaults.baseURL = 'http://localhost:8000/api'

/* eslint-disable no-new */
export default new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
