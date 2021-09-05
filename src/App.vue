<template>
  <div class="app">
      <h1>{{msg}}</h1>
      <!-- 通过父组件给子组件传递函数类型的props的方式实现：子给父传递了数据。 -->
      <School :getSchoolName="getSchoolName"></School>
      <hr>
      <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据 -->
      <!-- <Student v-on:geekhall="getStudentName"></Student> -->

      <!-- 简写形式 -->
      <!-- <Student @geekhall="getStudentName"></Student> -->

      <!-- 第三种写法：使用ref，在mounted中绑定 -->
      <Student ref="student"></Student>


      <!-- <Student @geekhall="getStudentName" @demo="m1"></Student> -->
  </div>
</template>

<script>
// 引入School组件
import School  from './components/School'
import Student from './components/Student'

export default {
    name: 'App',
    data(){
        return {
            msg: '你好啊',
        }
    },
    methods:{
        getSchoolName(name){
            console.log('App收到了学校名：', name)
        },
        getStudentName(name,...params){
            console.log('App收到了学生名：', name, params)
        },
        m1(){
            console.log('m1 is called')
        }
    },
    mounted(){
        // 第三种写法
        this.$refs.student.$on('geekhall', this.getStudentName)
        this.$refs.student.$on('demo', this.m1)
    },
    components: {
        School,
        Student
    }
}
</script>

<style>
.app {
    background: gray;
}
</style>
