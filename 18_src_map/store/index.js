// 该文件用于创建Vuex中最为核心的store
import Vue from 'vue'

// 引入Vuex
import Vuex from 'vuex'
// 应用Vues
Vue.use(Vuex)

// 准备Actions，用于响应组件中的动作
const actions = {
    addAction(context, value) {
        // console.log("actions 中的 addNumber被调用了", context, value)
        context.commit('addMutation', value)
    },
    subAction(context, value) {
        // console.log("actions 中的 addNumber被调用了", context, value)
        context.commit('subMutation', value)
    },
    addOddAction(context, value) {
        // console.log("actions 中的 addNumber被调用了", context, value)
        console.log("addOddAction 处理了一些逻辑")
        console.log("然后交给了addOddActionStep1继续处理")
        context.dispatch('addOddActionStep1', value)
        // if (context.state.sum % 2 !== 0) context.commit('addMutation', value)
    },
    addOddActionStep1(context, value) {
        console.log("addOddActionStep1 处理了一些逻辑")
        console.log("然后交给了addOddActionStep2继续处理")
        context.dispatch('addOddActionStep2', value)
    },
    addOddActionStep2(context, value) {
        console.log("addOddActionStep2 处理了一些逻辑")
        if (context.state.sum % 2 !== 0) context.commit('addMutation', value)
    },
    addWaitAction(context, value){
        setTimeout(()=>{
            context.commit('addMutation', value)
        }, 500)
    }
}

// 准备mutations，用于操作数据（state）
const mutations = {
    addMutation(state, value) {
        // console.log('mutations 中的 addMutation被调用了', state, value)
        state.sum += value
    },
    subMutation(state, value) {
        // console.log('mutations 中的 addMutation被调用了', state, value)
        state.sum -= value
    }
}

// 准备state，用于存储数据
const state = {
    sum: 0, // 当前的和
    school: 'geekhall',
    subject: 'vue'
}

// getters，用于将state中的数据进行加工
const getters = {
    bigSum(state){
        return state.sum*10
    }
}

// 创建并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})