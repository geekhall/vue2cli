<template>
  <div class="demo">
    <h2>学生姓名：{{ name }}</h2>
    <h2 class="geekhall">学生性别：{{ sex }}</h2>
    <h2>学生年龄：{{ age }}</h2>
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
  }
}
</script>

<style scoped lang='less'>
.demo{
  background-color: darkgoldenrod;
  .geekhall{
    font-size: 40px;
  }
}
</style>