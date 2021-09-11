<template>
  <div>
    <h2>Home组件内容</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <router-link
            to="/home/news"
            class="list-group-item"
            active-class="active"
            >News</router-link
          >
        </li>
        <li>
          <router-link
            to="/home/message"
            class="list-group-item"
            active-class="active"
            >Message</router-link
          >
        </li>
      </ul>
      <keep-alive include="News">
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  beforeDestroy() {
    console.log("Home组件即将被销毁了");
  },
  mounted() {
    console.log("Home组件挂载完了");
  },
};
</script>