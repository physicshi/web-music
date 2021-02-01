
## 仿写网易云首页 

clone后

```
//第一步：安装项目依赖
yarn install

//第二步：运行项目
yarn start
```

>  实现了歌曲播放、循环。更多的功能之后再补充

简单说一下项目规范：
+ redux结合ImmutableJS
+ 函数式组件为了避免重复渲染，使用memo进行包裹
+ 组件内部的状态，使用useState、useReducer；业务数据全部放在redux中管理；
+ 网络请求使用的axios
  + 二次封装
  + 所有的模块请求会放到一个请求文件中单独管理；
+ 部分组件使用了antd

