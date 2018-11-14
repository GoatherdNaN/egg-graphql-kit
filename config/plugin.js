'use strict';

// 在这声明后，就可以如下使用：
// app.插件名.插件的方法(...args)

//  sequelize 是一个广泛使用的 ORM 框架，它支持 MySQL、PostgreSQL、SQLite 和 MSSQL 等多个数据源
//  https://eggjs.org/zh-cn/tutorials/sequelize.html
exports.sequelize = {
  enable: true,
  package: 'egg-sequelize',
};
// graphql
exports.graphql = {
  enable: true,
  package: 'egg-graphql'
}
// 跨域
exports.cors = {
  enable: true,
  package: 'egg-cors'
}
// 参数校验
exports.validate = {
  package: 'egg-validate',
};
