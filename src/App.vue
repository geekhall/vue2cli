<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-offset-2 col-xs-8">
        <Banner/>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!-- Vue中借助router-link标签实现路由的切换 -->
          <!-- <router-link :to="{path: '/about'}" class="list-group-item" active-class="active">About</router-link> -->
          <!-- 使用命名路由 -->
          <router-link :to="{name: 'gy'}" class="list-group-item" active-class="active">About</router-link>
          <router-link to="/home" class="list-group-item" active-class="active">Home</router-link>
        </div>
      </div>
      <div class="col-xs-6" style="padding-left:2rem">
        <div class="panel">
          <div class="panel-body">
            <!-- 指定组件的呈现位置 -->
            <router-view></router-view>
            <!-- 此处展示什么取决于用户点的什么 -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from './components/Banner'

export default {
  name: "App",
  components:{Banner}
};
</script>