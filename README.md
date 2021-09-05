# vue2cli

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
npm run serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Todo案例总结
1. 组件化编码流程：
   - 拆分静态组件：按照功能点拆分，命名不要与Html元素重复
   - 实现动态组件：考虑好数据的存放位置，数据是一个组件在用（放在组件自身），还是一些组件在用（放在父组件）。
   - 实现交互：从绑定事件开始。
2. props适用于：
   - 父组件 ===> 子组件 通信
   - 子组件 ===> 父组件 通信 （要求父组件先给子组件一个函数）
3. 使用v-model时要注意：v-model绑定的值不能是props传过来的值，因为props是不可以修改的。
4. props传过来的若是对象类型的值，修改对象中的属性时Vue不会报错，但不推荐这样做。