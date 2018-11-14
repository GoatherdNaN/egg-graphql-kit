const jsonwebtoken = require('jsonwebtoken')

module.exports = options => {
  return async function auth(ctx, next) {
    const { body, url } = ctx.request
    const { graphql, jwt } = ctx.app.config
    // 开启 GraphiQL IDE 调试时，放过GraphiQL相关请求
    if (true || graphql.graphiql && url.indexOf(graphql.router) > -1) {
      await next()
      return
    }
    if (!jwt.WhiteList.includes(url)) {
      let token = ctx.request.header['authorization'] || body.token
      if (token === undefined) {
        throw {
          status: 401,
          message: '令牌为空，请登录获取！'
        }
      }
      try {
        let decoded = jsonwebtoken.verify(token, jwt.jwtSecret, {
          expiresIn: jwt.jwtExpire
        })
        await next()
      } catch (err) {
        throw {
          status: 401,
          message: '访问令牌鉴权无效，请重新登陆获取！'
        }
      }
    } else {
      await next()
    }
  }
}
