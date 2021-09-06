<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- <transition name="hello" :appear="true"> -->
    <transition name="hello" appear>
      <h1 v-show="isShow" class="go">Animate test</h1>
    </transition>
  </div>
</template>

<script>
export default {
  name: "TransactionTest",
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

.hello-enter-active {
  animation: geekhall 0.3s;
}
.hello-leave-active {
  animation: geekhall 0.3s reverse;
}
@keyframes geekhall {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0px);
  }
}
</style>