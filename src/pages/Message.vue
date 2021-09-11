<template>
  <div>
    <ul>
      <li v-for="m in messageList" :key="m.id">
        <!-- 跳转路由并携带query参数，to的字符串写法 -->
        <!-- <router-link :to="`/home/message/detail?id=${m.id}&title=${m.title}`">{{m.title}}</router-link> -->

        <!-- 跳转路由并携带params参数 -->
        <!-- <router-link :to="`/home/message/detail/${m.id}/${m.title}`">{{m.title}}</router-link> -->

        <!-- 跳转路由并携带query参数，to的对象写法 -->
        <!-- <router-link :to="{
            // path:'/home/message/detail',
            // 使用命名路由 
            name:'detail',
            query: {
                id:m.id,
                title:m.title
            }
        }">
            {{m.title}}
        </router-link> -->
        <!-- 跳转路由并携带params参数，to的对象写法 -->
        <!-- 这里需要注意的是params路由不能使用path，必须使用name方式 -->
        <router-link
          :to="{
            // path:'/home/message/detail',     // error！
            // 使用命名路由
            name: 'detail',
            params: {
              id: m.id,
              title: m.title,
            },
          }"
        >
          {{ m.title }}
        </router-link>
        <button @click="pushShow(m)">push查看</button>
        <button @click="replaceShow(m)">replace查看</button>
      </li>
    </ul>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Message",
  data() {
    return {
      messageList: [
        { id: "001", title: "消息0001" },
        { id: "002", title: "消息0002" },
        { id: "003", title: "消息0003" },
      ],
    };
  },
  methods: {
    pushShow(m) {
      // console.log(m)
      this.$router.push({
        name: "detail",
        params: {
          id: m.id,
          title: m.title,
        },
      });
    },
    replaceShow(m) {
      this.$router.replace({
        name: "detail",
        params: {
          id: m.id,
          title: m.title,
        },
      });
    },
  },
};
</script>
