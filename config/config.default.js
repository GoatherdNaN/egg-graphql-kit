'use strict';

module.exports = appInfo => {
  const config = exports = {
    sequelize: { // 绑定数据库
      dialect: 'mysql',
      database: 'graphql',
      host: 'localhost',
      port: '3306',
      username: 'root',
      password: '123456',
    },
    middleware: ['auth','graphql','errorHandler']
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1540887341819_4134';

  // egg的安全插件
  config.security = {
    csrf: { // CSRF令牌的getter,通常在发送POST表单请求时使用
      ignore: ()=>true,
    },
  },

  // 只对 /api 前缀的 url 路径生效
  // config.errorHandler = {
  //   match: '/api',
  // }
  
  // easy-mock 模拟数据地址
  config.baseURL = 'https://www.easy-mock.com/mock/5b5a7ae5b14d03439fb7f3f9/api'

  // jwt
  config.jwt = {
    jwtSecret: 'Great4-M',
    jwtExpire: '1d',
    WhiteList: ['/login']
  }

  // graphql
  config.graphql = {
    router: '/graphql',
    // 是否加载到 app 上，默认开启
    app: false,
    // 是否加载到 agent 上，默认关闭
    agent: true,
    // 是否加载开发者工具 graphiql, 默认开启。路由同 router 字段。使用浏览器打开该可见。
    graphiql: true
    // graphQL 路由前的拦截器
    // onPreGraphQL: function(ctx) {
    //   console.log(ctx)
    //   ctx.body = '请求要求身份验证'
    //   ctx.status = 401
    // },
    // 开发工具 graphiQL 路由前的拦截器，建议用于做权限操作(如只提供开发者使用)
    // onPreGraphiQL: function(ctx) {
    //   // console.log(ctx)
    // }
  }

  // cors
  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
  }

  // body-parser是一个HTTP请求体解析中间件，使用这个模块可以解析JSON、Raw、文本、URL-encoded格式的请求体，
  // Express框架中就是使用这个模块做为请求体解析中间件
  // config.bodyParser = {
  //   enable: true,
  //   jsonLimit: '10mb'
  // }

  return config;
};
