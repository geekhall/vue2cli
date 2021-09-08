<template>
  <div>
    <!-- <h1>当前：{{$store.state.sum}}</h1> -->
    <h1>当前：{{sum}}</h1>
    <!-- <h2>放大十倍为：{{$store.getters.bigSum}}</h2> -->
    <h2>放大十倍为：{{bigSum}}</h2>
    <h2>learn {{subject}} at {{school}}</h2>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前求和为奇数再加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>

import {mapState, mapGetters} from 'vuex'

export default {
  name: "Count",
  data() {
    return {
      n: 1
    }
  },
  methods: {
    increment(){
      this.$store.dispatch('addAction', this.n)
    },
    decrement(){
      // 可以跳过Action，直接调用Mutation中的方法
      this.$store.commit('subMutation', this.n)
    },
    incrementOdd(){
      this.$store.dispatch('addOddAction', this.n)
    },
    incrementWait(){
      this.$store.dispatch('addWaitAction', this.n)
    },
  },
  computed: {
    // he(){
    //   return this.$store.state.sum
    // },
    // xuexiao(){
    //   return this.$store.state.school
    // },
    // xueke(){
    //   return this.$store.state.subject
    // },

    // 第一种方式：借助mapState生成计算属性，从state中读取数据。（对象写法）
    // ...mapState({he:'sum', xuexiao:'school', xueke:'subject'}),

    // 第二种方式：要求生成的计算属性名和state中的属性名一致。（数组写法）
    ...mapState(['sum','school', 'subject']),

    // bigSum(){
    //   return this.$store.getters.bigSum
    // }
    // 第一种方式：借助mapGetters生成计算属性，从getters中读取数据。（对象写法）
    // ...mapGetters({bigSum:'bigSum'}),
    // 第二种方式：要求生成的计算属性名和getters中的属性名一致。（数组写法）
    ...mapGetters(['bigSum'])
  },
  mounted() {
    // const x = mapState({he:'sum'})
    // console.log(x)
  }
};

</script>

<style scoped>
 button {
   margin-left: 5px;
 }
</style>