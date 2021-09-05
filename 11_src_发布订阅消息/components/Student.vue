<template>
  <div class="student">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <h2>学生年龄：{{ age }}</h2>
    <button @click="sendStudentName">点我发送学生名字给App</button><br/>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'

export default {
  name: "Student",
  data() {
    return {
      name: "张三",
      age: 20,
      sex: "男",
    }
  },
  methods: {
    sendStudentName(){
      pubsub.publish('hello', 666)
      pubsub.publish('greeting', 777)
    }
  }
}
</script>

<style scoped lang='less'>
.student{
  background-color: darkgoldenrod;
  margin: .5rem;
  padding: .5rem;
}
</style>