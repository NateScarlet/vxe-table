import Vue from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'

import 'font-awesome/scss/font-awesome.scss'
import './assets/style/index.scss'
import './plugins'
import XEUtils from 'xe-utils'

// **************** （注意：该全局变量仅用于开发环境调试） ****************
if (process.env.NODE_ENV === 'development') {
  window.XEUtils = XEUtils
}
// **************** （注意：该全局变量仅用于开发环境调试） ****************

Vue.config.productionTip = false

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
