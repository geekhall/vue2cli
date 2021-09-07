<template>
  <div class="container">
    <Category title="游戏">
      <template scope="geekhall">
        <ul>
          <li v-for="(g, index) in geekhall.games" :key="index">{{ g }}</li>
        </ul>
      </template>
    </Category>

    <Category title="游戏">
      <template scope="{games}">
        <ol>
          <li v-for="(g, index) in games" :key="index">{{ g }}</li>
        </ol>
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
};
</script>


<style>
.container,
.foot {
  display: flex;
  justify-content: space-around;
}
</style>