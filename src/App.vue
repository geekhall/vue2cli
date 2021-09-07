<template>
  <div class="container">
    <Category title="美食">
      <img slot="center" src="https://yinyang.space/img/20210907_vue_02.png" />
      <a slot="footer" href="https://geekhall.cn">更多美食</a>
    </Category>
    <Category title="游戏">
      <ul>
        <li v-for="(g, index) in games" :key="index">{{ g }}</li>
      </ul>
      <div slot="footer" class="foot">
        <a href="https://geekhall.cn">单机游戏</a>
        <a href="https://geekhall.cn">网络游戏</a>
      </div>
    </Category>
    <Category title="电影">
      <video
        slot="center"
        controls
        src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
      ></video>
      <!-- vue2.6开始，template的slot有一个新的写法： -->
      <template v-slot:footer>
        <div class="foot">
          <a href="https://geekhall.cn">经典</a>
          <a href="https://geekhall.cn">热门</a>
          <a href="https://geekhall.cn">推荐</a>
        </div>
        <h5>欢迎前来观影</h5>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from "./components/Category";

export default {
  name: "App",
  components: {
    Category,
  },
  data() {
    return {
      foods: ["火锅", "烧烤", "小龙虾", "牛排"],
      games: ["coc", "bob", "lol"],
      films: ["交付", "矩阵革命", "重装上阵", "指环王"],
    };
  },
};
</script>


<style>
.container,
.foot {
  display: flex;
  justify-content: space-around;
}
</style>