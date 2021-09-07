export default {
    install(Vue) {
        // console.log('@@@ my install', Vue)
        // 全局过滤器
        Vue.filter('myGlobalSlice', function (value) {
            return value.slice(0, 4)
        })

        // 全局自定义指令
        Vue.directive('fbind', {
            bind(element, binding){
                element.value = binding.value
            },
            // inserted(element, binding){
            //     element.focus()
            // },
            // update(element, binding){
            //     element.value = binding.value
            // }
        })
       
        // 全局Mixin
        Vue.mixin({
            data(){
                return {
                    x:100,
                    y:200
                }
            }
        })

        // 给Vue原型上添加一个方法（vm和vc就都可以使用了）
        Vue.prototype.hello = () => {alert('Greetings from plugins')}
    }
}