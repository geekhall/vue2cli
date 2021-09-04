<template>
  <div>
      <h1 v-text="msg" ref="title"></h1>
      <button @click="showDom">点我输出上面的消息</button>
      <School ref="sch"></School>
  </div>
</template>

<script>
// 引入School组件
import Student from './components/Student'
export default {
    name: 'App',
    data() {
        return {
            msg: 'Welcome!'
        }
    },
    methods:{
        showDom(){
            console.log(this.$refs.title)  // <h1>Welcome!</h1>
            console.log(this.$refs.sch)  // VueComponent refs拿到VueComponent
        }
    },
    components: {
        School
    }
}
</script>
