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
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">当前求和为奇数再加</button>
    <button @click="incrementWait(n)">等一等再加</button>
  </div>
</template>

<script>

import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'

export default {
  name: "Count",
  data() {
    return {
      n: 1
    }
  },
  methods: {
    // increment(){
    //   // 可以跳过Action，直接调用Mutation中的方法
    //   this.$store.commit('addMutation', this.n)
    // },
    // decrement(){
    //   // 可以跳过Action，直接调用Mutation中的方法
    //   this.$store.commit('subMutation', this.n)
    // },
    // 借助mapMutations生成对应的方法，方法中会调用commit去联系mutations（对象写法）
    // 这里需要注意的是调用的地方需要加上括号传入参数n，否则会将默认的MouseEvent传入。
    // decrement(){
    //   this.decrementMapped(this.n)
    // },
    // ...mapMutations({increment:'addMutation', decrementMapped:'subMutation'}),
    ...mapMutations({increment:'addMutation', decrement:'subMutation'}),
    // 借助mapMutations生成对应的方法，方法中会调用commit去联系mutations（数组写法）
    // 要求名字相同全大写
    // ...mapMutations(['addMutation', 'subMutation']),




    // incrementOdd(){
    //   this.$store.dispatch('addOddAction', this.n)
    // },
    // incrementWait(){
    //   this.$store.dispatch('addWaitAction', this.n)
    // },


    // 借助mapActions生成对应的方法，方法中会调用dispatch去联系actions（对象写法）
    // ...mapActions({incrementOdd: 'addOddAction', incrementWait: 'addWaitAction'})

    // 借助mapActions生成对应的方法，方法中会调用dispatch去联系actions（数组写法）
    // 调用处需要修改为数组中生成的函数名。
    // <button @click="addOddAction(n)">当前求和为奇数再加</button>
    // <button @click="addWaitAction(n)">等一等再加</button>
    ...mapActions(['addOddAction', 'addWaitAction'])
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