<template>
  <div class="student">
      <h2>学生名称：{{name}}</h2>
      <h2>学生性别：{{sex}}</h2>
      <h2>学生年龄：{{age}}</h2>
  </div>
</template>

<script>
    export default {
        name: 'School',
        data(){
          return{
              name: '极客堂',
              address: '北京'
          }
        },
        props: {
            
        }
    }
</script>

<style>
    .student{
        background-color: aqua;
    }
</style>