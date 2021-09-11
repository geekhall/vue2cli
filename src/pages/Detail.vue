<template>
  <ul>
      <!-- query路由 -->
    <!-- <li>消息编号：{{$route.query.id}}</li>
    <li>消息标题：{{this.$route.query.title}}</li> -->

    <!-- params路由 -->
    <li>消息编号：{{$route.params.id}}</li>
    <li>消息标题：{{this.$route.params.title}}</li>
  </ul>
</template>

<script>
export default {
  name: "Detail",
  mounted(){
      console.log(this.$route)
  }
};
</script>
