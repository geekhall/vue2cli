// 人员管理相关的配置
// const personOptions = {
import axios from 'axios'
import { nanoid } from 'nanoid'

export default {
    namespaced:true,
    actions: {
        addPersonWang(context, value){
            if (value.name.indexOf('王') === 0) {
                context.commit('addPersonMutation', value)
            } else {
                alert('添加的人必须姓王')
            }
        },
        addPersonServer(context){
            axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(
                response => {
                    context.commit('addPersonMutation', {id:nanoid(), name: response.data})
                },
                error => {
                    alert(error.message)
                }
            )
        }
    },
    mutations: {
        addPersonMutation(state, value) {
            console.log('mutations addPersonMutation 被调用了')
            state.personList.unshift(value)
        }
    },
    state: {
        personList: [{
                id: '001',
                name: '小沈阳'
            },
            {
                id: '002',
                name: '赵四'
            },
            {
                id: '003',
                name: '宋小宝'
            }
        ]
    },
    getters: {
        firstPersonName(state){
            return state.personList[0].name
        }
    }
}

// export default personOptions