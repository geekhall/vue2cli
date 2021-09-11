// 引入Vue
import Vue from 'vue'
// 引入ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 引入App
import App from './App.vue'
// 引入
import VueRouter from 'vue-router'

import router from './router'

// 关闭生产提示
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(ElementUI)

// 创建vm
new Vue({
    el: '#app',
    render: h => h(App),
    router: router
})