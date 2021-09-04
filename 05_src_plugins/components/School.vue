<template>
  <div class="school">
    <h2>学校名称：{{name}}</h2>
    <h2>学校地址：{{ address }}</h2>
    <button @click="test">点我测试一个插件中的hello方法</button>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      name: "极客堂",
      address: "北京",
    };
  },
  methods: {
    test(){
      this.hello()
    }
  }
}
</script>

<style>
.school {
  background-color: cornflowerblue;
}
</style>