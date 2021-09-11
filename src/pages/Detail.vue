<template>
  <ul>
      <!-- query路由 -->
    <!-- <li>消息编号：{{$route.query.id}}</li>
    <li>消息标题：{{this.$route.query.title}}</li> -->

    <!-- params路由 -->
    <li>消息编号：{{id}}</li>
    <li>消息标题：{{title}}</li>
    <!-- <li>a: {{a}}</li>
    <li>b: {{b}}</li> -->
  </ul>
</template>

<script>
export default {
  name: "Detail",
  mounted(){
      console.log(this.$route)
  },
  computed: {
    // id(){
    //   return this.$route.query.id
    // },
    // title(){
    //   return this.$route.query.title
    // }
  },
  // props:['a', 'b']
  props:['id','title']
};
</script>
