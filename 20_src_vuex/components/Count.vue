<template>
  <div>
    <h1>当前：{{sum}}</h1>
    <h2>放大十倍为：{{bigSum}}</h2>
    <h2>learn {{ subject }} at {{ school }}</h2>
    <h3 style="color: red">
      Person组件的总人数是：{{ personList.length }}
    </h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">当前求和为奇数再加</button>
    <button @click="incrementWait(n)">等一等再加</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "Count",
  data() {
    return {
      n: 1,
    };
  },
  methods: {
    ...mapMutations('countModule',{ increment: "addMutation", decrement: "subMutation" }),
    ...mapActions('countModule', {
      incrementOdd: "addOddAction",
      incrementWait: "addWaitAction",
    }),
  },
  computed: {
    // 通过namespace定义mapState，需要在countModule中定义namespaces:true
    ...mapState("countModule", ["sum", "school", "subject"]),
    ...mapState("personModule", ['personList']),
    ...mapGetters("countModule", ["bigSum"]),
  },
};
</script>

<style scoped>
button {
  margin-left: 5px;
}
</style>