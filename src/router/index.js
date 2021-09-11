// 该文件用于创建整个应用的路由器
import VueRouter from "vue-router"

// 引入组件
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'

// 创建一个路由器
const router = new VueRouter({
    // mode: 'hash',
    mode: 'history',
    routes: [{
            name: 'about',
            path: '/about',
            component: About,
            meta: {title: '关于'}
        },
        {
            name: 'home',
            path: '/home',
            component: Home,
            meta: {title: '主页'},
            children: [{
                    name: 'news',
                    path: 'news',
                    component: News,
                    meta: {isAuth: true, title: '新闻'},
                    // 独享路由守卫
                    beforeEnter: (to, from, next) => {
                        // ...
                        if (localStorage.getItem('school') === 'geekhall'){
                            // 放行
                            next()
                        } else {
                            alert('请先登录')
                        }
                        next()
                    }
                },
                {
                    name: 'message',
                    path: 'message',
                    component: Message,
                    meta: {isAuth: true, title: '消息'},
                    children: [{
                        name: 'detail',
                        // path: 'detail',  // query路由
                        path: 'detail/:id/:title', // params路由
                        component: Detail,
                        // props的第一种写法，值为对象，该对象中所有的key-value都会以props的形式传递给Detail组件
                        // props: {a:1, b:'Hello'},

                        // props的第二种写法，值为bool值，若为真，就会把该路由组件收到的所用params参数，以props的形式传递给Detail组件。
                        props: true,

                        // props的第三种写法，值为函数
                        // props($route){
                        //     return {id:$route.params.id, title: $route.params.title}
                        // }
                        // 这里可以使用解构赋值的连续写法简化
                        // props({params:{id, title}}){
                        //     return {id, title}
                        // }
                        meta: {isAuth: true, title: '详情'}
                    }]
                }
            ]
        },
    ]
})

// 全局前置路由守卫 -- 初始化及每次路由切换之前被调用
router.beforeEach((to, from, next) => {
    // console.log(to, from, next)
    if (to.meta.isAuth) {
        if (localStorage.getItem('school') === 'geekhall'){
            // 放行
            next()
        } else {
            // alert('请先登录')
        }
    }
    next()
})

// 全局后置路由守卫 -- 初始化及每次路由切换之后被调用
// 使用的不多，可以用于切换页面title
router.afterEach((to, from) => {
    console.log('后置路由守卫：', to , from)
    document.title = to.meta.title || "geekhall"
})


export default router;