<template>
  <li>
    <label>
      <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)"/>
      <!-- <input type="checkbox" v-model="todo.done"/> -->
      <span v-show="!todo.isEdit">{{todo.title}}</span>
      <input v-show="todo.isEdit"
             type="text" 
             :value="todo.title" 
             @blur="handleBlur(todo, $event)"
             ref="inputTitle"
             />
    </label>
    <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
    <button v-show="!todo.isEdit" class="btn btn-edit" @click="handleEdit(todo)">编辑</button>
  </li>
</template>

<script>
export default {
  name: "MyItem",
  // 声明接收todo对象
  props: ['todo'],
  mounted () {
    console.log(this.todo)
  },
  methods: {
    handleCheck(id){
      // console.log(id)
      // 通知App组件将对应的todo的done值取反
      // this.checkTodo(id)
      this.$bus.$emit('checkTodo', id)
    },
    handleDelete(id){
      if ( confirm('确定删除吗？')){
        // 
        console.log(id)
        // this.deleteTodo(id)
        this.$bus.$emit('deleteTodo', id)
      }
    },
    handleEdit(todo){
      // console.log(todo)
      // if (todo.hasOwnProperty('isEdit')){
      //   todo.isEdit = true
      // } else {
      //   this.$set(todo, 'isEdit', true)
      // }
      this.$set(todo, 'isEdit', true)
      // 下面这种写法不会生效，因为页面还没有更新，需要使用nextTick
      // this.$refs.inputTitle.focus()

      // nextTick所指定的回调函数，会在下一次DOM节点更新结束后再执行
      this.$nextTick(() =>{
        this.$refs.inputTitle.focus()
      })
      // todo.isEdit=true 
    },
    handleBlur(todo, e){
      todo.isEdit=false
      if (!e.target.value.trim()) return alert('输入不能为空')
      console.log('updateTodo', todo.id, e.target.value)
      this.$bus.$emit('updateTodo', todo.id, e.target.value)
    }

  }
};
</script>

<style scoped>
li {
  list-style-type: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}
li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float:right;
  display:none;
  margin-top:3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover {
  background-color: #ddd;
}

li:hover button {
  display: block;
}
</style>