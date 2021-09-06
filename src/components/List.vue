<template>
  <div class="row">
    <!-- 展示用户列表 -->
    <div v-show="users.length" class="card" v-for="user in users" :key="user.login">
      <a :href="user.html_url" target="_blank">
        <img :src="user.avatar_url" style="width: 100px" />
      </a>
      <p class="card-text">{{ user.login }}</p>
    </div>
    
    <!-- 展示欢迎词 -->
    <h1 v-show="isFirst">欢迎使用！</h1>
    
    <!-- 展示加载中 -->
    <h1 v-show="isLoading">加载中......</h1>

    <!-- 展示错误 -->
    <h1 v-show="errMsg">{{errMsg}}</h1>

  </div>
</template>

<script>
export default {
  name: "List",
  data() {
    return {
      isFirst: true,
      isLoading: false,
      errMsg: '',
      users: []
    };
  },
  mounted() {
    this.$bus.$on("updateListData", (userObj) => {
      console.log("我是List组件，收到数据：", userObj);
      this.isFirst = userObj.isFirst;
      this.isLoading = userObj.isLoading;
      this.errMsg = userObj.errMsg;
      this.users = userObj.users;
    });
  },
};
</script>

<style scoped>
.album {
  min-height: 50rem;
  padding-top: 3rem;
  padding-bottom: 3rem;
  background: #7f7f7f;
}

.card {
  float: left;
  width: 33.33%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>