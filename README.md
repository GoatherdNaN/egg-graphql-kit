# egg-graphql-kit

## 前言
目前，经手的绝大多数项目接口都是使用的RESTful API风格，好用，但也存在不少的问题：
- 前端和后端对于接口的控制权是交叉冲突的，往往一方改动不算，前端改动一个字段，连带着后端也需要改动，反之亦是
- 前端对于真正用到的字段是没有直观映像的，仅仅通过url地址，无法预测也无法回忆返回的字段数目和字段是否有效，接口返回50个字段，但却只用5个字段，造成字段冗余，扩展性差，单个RESTful接口返回数据越来越臃肿。
- API聚合问题，某个前端展现，实际需要调用多个独立的RESTful API才能获取到足够的数据
- 前后端字段频繁改动，导致类型不一致，错误的数据类型可能会导致网站出错
- 在业务多变的场景中，很难在保证工程质量的同时快速满足业务需求

而GraphQL作为一门API查询语言，恰恰可以解决这些问题。本质上来说，它把取哪些数据的选择权交给了client，而server负责精确的返回目标数据即可
## 技术栈
egg + graphql + MySQL
## 目录结构
由于项目是用egg脚手架生成，可以直接看[官网的说明](https://eggjs.org/zh-cn/basics/structure.html)

## 使用说明

由于使用到了MySQL作为数据库支持，你要运行起来得把根目录下sql文件夹内的sql表导入你本地的sql服务中，并配置对接你自己的sql服务

```
<!--config\config.default.js-->
sequelize: { // 绑定数据库
  dialect: 'mysql',
  database: 'graphql',
  host: 'localhost',
  port: 'your_port',
  username: 'your_username',
  password: 'your_password',
}
```
然后你就可以按照下面步骤开启开发调控界面，具体使用查看[GraphQL官网](http://graphql.cn/learn/)

see [egg docs][egg] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


[egg]: https://eggjs.org
