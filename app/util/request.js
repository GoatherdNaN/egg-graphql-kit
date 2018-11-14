/**
 * 框架在应用初始化的时候，会自动将 HttpClient 初始化到 app.httpclient。 
 * 同时增加了一个 app.curl(url, options) 方法，它等价于 app.httpclient.request(url, options)。
 */
'use strict'

const _options = {
  dataType: 'json',
  timeout: 30000
}

module.exports = {
  createAPI: (_this, url, method, data) => {
    let options = {
      ..._options,
      method,
      data
    }
    return _this.ctx.curl(
      `${_this.config.baseURL}${url}`,
      options
    )
  }
}