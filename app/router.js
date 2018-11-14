'use strict';

/**
 * 路由完整定义主要包括5个主要部分:
 * 1. verb : get/put/post/patch/delete/redirect...
 * 2. router-name: 路由别名(可省略)
 * 3. path-match: 路由 URL 路径
 * 4. middleware1: 在 Router 里面可以配置多个 Middleware(可省略)
 * 5. controller: 指定路由映射到的具体的 controller 上,两种写法
 *     1) app.controller.user.fetch
 *     2) 'user.fetch'
 */

module.exports = (app) => {
  app.get('/', 'home.index');
  app.post('/login', 'user.login');
  app.post('/logout','user.logout');
  app.post('/updatePwd','user.updatePwd');
  // app.resources('users', '/api/users', app.controller.user);// app.resources('routerName', 'pathMatch', controller)
};
