<template>
  <div class="student">
    <h2>{{ msg }}</h2>
    <h2>学生名称：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <h2>学生年龄：{{ age + 1 }}</h2>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      msg: "极客堂",
    };
  },
  // 方式1 ： 简单接收
  //   props: ["name", "age", "sex"],

  // 方式2 ： 接收的同时对数据进行限制
//   props: {
//     name: String,
//     age: Number,
//     sex: String,
//   },
  // 方式3 ： 
  props: {
      name: {
          type: String,
          required: true
      },
      age: {
          type: Number,
          default: 30
      },
      sex: {
          type: String,
          required: true
      }
  }


};
</script>

<style>
.student {
  background-color: aqua;
}
</style>