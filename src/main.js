// 引入Vue
import Vue from 'vue'
// 引入ElementUI
// import ElementUI from 'element-ui'
// 引入ElementUI的全部样式
// import 'element-ui/lib/theme-chalk/index.css'

// 引入ElementUI的部分组件
import {Button, Row} from 'element-ui'

// 引入App
import App from './App.vue'

// 关闭生产提示
Vue.config.productionTip = false
// 应用ElementUI
// Vue.use(ElementUI)

// 注册全局组件
// Vue.component('el-button', Button);
Vue.component(Button.name, Button);
Vue.component(Row.name, Row)


// 创建vm
new Vue({
    el: '#app',
    render: h => h(App)
})