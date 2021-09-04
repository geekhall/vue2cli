<template>
  <div>
    <ul>
      <MyItem v-for="todoObj in todos" :key="todoObj.id" :todo="todoObj"/>
    </ul>    
  </div>
</template>

<script>
import MyItem from "./MyItem";

export default {
  name: "MyList",
  components: {
    MyItem
  },
  data() {
    return {
      todos: [
        {id: '0001', title: '吃饭', done: true},
        {id: '0002', title: '喝酒', done: false},
        {id: '0003', title: '开车', done: true}
      ]
    }
  }
};
</script>

<style scoped>
.todo-main{
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty{
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>