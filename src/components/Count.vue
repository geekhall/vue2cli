<template>
  <div>
    <h1>当前求和为：{{$store.state.sum}}</h1>
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
      this.$store.dispatch('subAction', this.n)
    },
    incrementOdd(){
      this.$store.dispatch('addOddAction', this.n)
    },
    incrementWait(){
      setTimeout(()=>{
        this.$store.dispatch('addAction', this.n)
      }, 500)
    },
  }
};

</script>

<style scoped>
 button {
   margin-left: 5px;
 }
</style>