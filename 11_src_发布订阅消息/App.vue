<template>
  <div>
      <School></School>
      <hr>
      <Student></Student>
  </div>
</template>

<script>
// 引入School组件
import School  from './components/School'
import Student from './components/Student'

export default {
    name: 'App',
    components: {
        School,
        Student
    }
}
</script>
