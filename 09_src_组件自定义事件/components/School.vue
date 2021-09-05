<template>
  <div class="school">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <button @click="sendSchoolName">把学校名字给App</button>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      name: "极客堂",
      address: "北京",
    }
  },
  props: ['getSchoolName'],
  methods: {
    sendSchoolName(){
      console.log(this.name)
      this.getSchoolName(this.name) // 这里不要忘了this
    }
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