<template>
  <div class="school">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'

export default {
  name: "School",
  data() {
    return {
      name: "极客堂",
      address: "北京",
    }
  },
  methods:{
    handleGreeting(){
      console.log('==========')
      console.log("有人发布了greeting消息，handleGreeting方法被执行了")
      console.log("这里的this由Vue保证指向VueComponent")
      console.log('==========')
    }
  },
  mounted() {
    // 订阅消息
    this.pubId = pubsub.subscribe('hello', (msgName, data)=>{
      console.log('有人发布了hello消息，hello消息的回调执行了')
      console.log('msgName: ', msgName)
      console.log('data: ', data)
      console.log('注意这个回调函数最好写成箭头函数，否则this指向undefine而不是VueComponent')
      console.log(this)
      
    })
    this.greetingId = pubsub.subscribe('greeting', this.handleGreeting)
  },
  beforeDestroy() {
    pubsub.unsubscribe(this.pubId)
  }
}
</script>

<style scoped>
.school{
  background-color: aqua;
  margin: .5rem;
  padding: .5rem;
  
}
</style>