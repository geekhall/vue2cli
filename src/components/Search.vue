<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input type="text" placeholder="Search" v-model="keyword"/>&nbsp;
      <button @click="searchUsers">Search</button>
    </div>
  </section>
</template>

<script>
// API: https://api.github.com/search/users?q=xxx
import axios from 'axios'

export default {
  name: "Search",
  data() {
    return {
      keyword: "",
    };
  },
  methods:{
      searchUsers(){
          console.log('search users')
          axios.get(`https://api.github.com/search/users?q=${this.keyword}`).then(
              response => {
                  console.log('请求成功了')
                  this.$bus.$emit('getUsers', response.data.items)
              },
              error => {
                  console.log('请求失败了', error.message)
              }
          )
      }
  }
};
</script>

<style>
</style>