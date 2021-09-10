// 该文件用于创建Vuex中最为核心的store
import Vue from 'vue'

// 引入Vuex
import Vuex from 'vuex'
// 应用Vues
Vue.use(Vuex)


import countOptions from './count'
import personOptions from './person'


// 创建并暴露store
export default new Vuex.Store({
    modules: {
        countModule: countOptions,
        personModule: personOptions
    }
})