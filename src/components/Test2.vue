<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- <transition name="hello" :appear="true"> -->
    <transition-group 
        name="animate__animated animate__bounce" 
        enter-active-class="animate__rubberBand"
        leave-active-class="animate__bounceOut"
        appear>
      <h1 v-show="isShow" key="1">Animate.css</h1>
      <h1 v-show="isShow" key="2">Geekhall</h1>
    </transition-group>
  </div>
</template>

<script>
import 'animate.css'

export default {
  name: "Test2",
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style scoped>
h1 {
  background-color: cyan;
}

</style>