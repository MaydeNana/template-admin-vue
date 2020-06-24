import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import './plugins/element.js'
import http from './request/http'
import urlUtil from './request/urlUtil'

Vue.prototype.$http = http
Vue.prototype.urlUtil = urlUtil

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
