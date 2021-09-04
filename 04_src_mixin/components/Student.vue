<template>
  <div class="student">
    <h2 @click="showName">学生姓名：{{name}}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <h2>学生年龄：{{ age }}</h2>
  </div>
</template>

<script>
import {mixin,hunhe} from '../mixin'
export default {
  name: "Student",
  data() {
    return {
      name: "张三",
      age: 20,
      sex: "男"
    }
  },
  mixins: [mixin, hunhe]
  
};
</script>

<style>
.student {
  background-color: aqua;
}
</style>