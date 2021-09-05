<template>
  <div>
    <MyHeader :addTodo="addTodo" ></MyHeader>
    <MyList :todos="todos" :checkTodo="checkTodo" :deleteTodo="deleteTodo"></MyList>
    <MyFooter :todos="todos" :checkAllTodo="checkAllTodo" :clearAllDoneTodo="clearAllDoneTodo"></MyFooter>
  </div>
</template>

<script>
// 引入School组件
import MyFooter from "./components/MyFooter";
import MyHeader from "./components/MyHeader";
import MyList from "./components/MyList";

export default {
  name: "App",
  data() {
    return {
      todos: [
        { id: "0001", title: "吃饭", done: true },
        { id: "0002", title: "喝酒", done: false },
        { id: "0003", title: "开车", done: true },
      ],
    };
  },
  methods: {
    addTodo(todoObj){
      // console.log('我是app组件，我收到了数据', todoObj)
      this.todos.unshift(todoObj)
    },
    // 勾选或者取消选择
    checkTodo(id){
      this.todos.forEach((todo)=>{
        if (todo.id === id) todo.done = !todo.done 
      })
    },
    // 删除一个Todo
    // deleteTodo(id){
    //   this.todos = this.todos.filter((todo)=>{
    //     return todo.id !== id
    //   })
    // }
    deleteTodo(id){
      this.todos = this.todos.filter(todo => todo.id !== id)
    },
    checkAllTodo(done){
      this.todos.forEach((todo)=>{
        todo.done = done
      })
    },
    clearAllDoneTodo(){
      this.todos = this.todos.filter((todo)=>{
        return !todo.done
      })
    }
  },
  components: {
    MyHeader,
    MyList,
    MyFooter,
  },
};
</script>

<style>
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.6);
}
.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}
.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}
.btn:focus {
  outline: none;
}
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
