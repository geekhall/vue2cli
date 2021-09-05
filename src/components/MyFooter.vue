<template>
  <div class="todo-footer" v-show="totalCount">
    <label>
      <!-- <input type="checkbox" :checked="allDone" @change="checkAll"/> -->
      <input type="checkbox" v-model="allDone"/>
    </label>
    <span>
      <span>已完成{{doneCount}}</span> / 全部{{totalCount}}
    </span>
    <button class="btn btn-danger" @click="clearAllDone">清除已完成的任务</button>
  </div>
</template>

<script>
export default {
  name: "MyFooter",
  props: ['todos','checkAllTodo','clearAllDoneTodo'],
  methods: {
    // checkAll(e){
    //   console.log(e.target.checked)
    //   this.checkAllTodo(e.target.checked)
    // }
    clearAllDone(){
      //
      this.clearAllDoneTodo()
    }
  },
  computed: {
    doneCount(){
      // 数组的条件统计
      // return this.todos.reduce((pre, current)=>{
      //   // console.log("@",pre,current)
      //   return pre + (current.done ? 1 : 0)
      // }, 0)

      return this.todos.reduce((pre, current)=> current.done ? pre+1 : pre, 0)
    },
    totalCount(){
      return this.todos.length
    },
    // allDone(){
    //   // 计算属性中可以使用其他计算属性进行计算
    //   return this.totalCount === this.doneCount  && this.totalCount > 0
    // }
    allDone:{
      get(){
        return this.totalCount === this.doneCount  && this.totalCount > 0
      },
      set(value){
        // console.log("@@@", value)
        this.checkAllTodo(value)
      }
    }
  },
};
</script>

<style scoped>
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}
.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>
