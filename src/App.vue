<template>
  <div>
    <button @click="getStudents">获取学生信息</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "App",
  methods: {
    getStudents(){
      // 直接找到5001的话会存在跨域问题，
      // axios.get('http://localhost:5001/student').then(

      // 访问代理服务器(方式一)
      // axios.get('http://localhost:8080/student').then(

      // 访问代理服务器(方式二)
      axios.get('http://localhost:8080/api/students').then(
        response => {
          console.log("请求成功了", response.data)
        },
        error => {
          console.log('请求失败了', error.message)
        }
      )
    }
  }
};
</script>
