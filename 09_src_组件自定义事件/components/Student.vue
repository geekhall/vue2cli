<template>
  <div class="student">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <h2>学生年龄：{{ age }}</h2>
    <button @click="sendStudentName">点我发送学生名字给App</button><br/>
    <button @click="unbind">解绑自定义事件</button><br/>
    <button @click="death">销毁Student组件实例对象</button>
  </div>
</template>

<script>
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
      // 触发Student组件实例身上的geekhall自定义事件
      this.$emit('geekhall', this.name)
      this.$emit('demo')
    },
    unbind(){
      // 解绑一个自定义事件
      // this.$off('geekhall')
      
      // 解绑多个自定义事件
      this.$off(['geekhall', 'demo'])
      
      // 解绑所有自定义事件
      // this.$off()
    },
    death(){
      this.$destroy()
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