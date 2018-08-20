# react-staging-demo
新手学习react入门 基础配置项demo ,demo注释标注每个模块的作用


## 技术支持
- 前端：`React`、`antd-mobile`、`React Router`、`React Router`、`webpack`、`es6`、`less`


## 运行步骤
1. `npm install`  ——下载依赖
2. `npm run build` ——编译js
3. `npm run server`  ——启动服务指向index.html-自动打开页面



## 项目目录结构

```
项目
    |__ app     //业务相关
        |__ util    //工具类
        |__ views   //视图类
        |__ index.tmpl.html //html模板
        |__ main.js //js入口
    |
    |__ build   //编译后的js文件
     
    |__ node_modules 依赖
    |
    |__ router 路由
       |__ index.js 拿到url的数据请求并对数据库进行增删改查
    |
    |
    |__ app.js  
    |
    |__ package.json 
    |
    |__ webpack.config.js   webpack配置
    |
    |__ webpack.production.config.js    webpack生成环境配置
           

```
