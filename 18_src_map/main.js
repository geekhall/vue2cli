// 引入Vue
import Vue from 'vue'
// 引入App
import App from './App.vue'
// 全局Mixin
// import {hunhe, mixin} from './mixin'

// 导入插件
// import plugins from './plugins'
// 引入vueResource
import vueResource from 'vue-resource'
// import Vuex from 'vuex'

// import store from './store/index'  // index可以省略
import store from './store'

// 关闭Vue的生产提示
Vue.config.productionTip = false

// 应用插件
// Vue.use(plugins)
Vue.use(vueResource)

// 创建vm
new Vue({
    el: '#app',
    render: h => h(App),
    store,
    beforeCreate(){
        Vue.prototype.$bus = this   // 全局事件总线
    }
})