<template>
  <div>
      <Student name="小沈阳" sex="男" :age="18"></Student>

      <!-- warn : Missing required -->
      <!-- <Student sex="男" :age="18"></Student> -->  
      
      <!-- <Student name="小沈阳" sex="男" age="18"></Student> -->
      <!-- <Student name="宋小宝" sex="男" :age=38></Student> -->
  </div>
</template>

<script>
// 引入School组件
import Student from './components/Student'
export default {
    name: 'App',
    components: {
        Student
    }
}
</script>
