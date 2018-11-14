/*
 * @Author: Edlan
 * @Date: 2018-11-08 09:45:53
 * @Description: extend目录下的文件，会被loadExtend方法自动添加至其proto上，
 *              比如这个文件里的方法，会自动加至helper的原型上
 */
const _throw = require('../util/throw')
// 处理成功响应
exports.success = (ctx, res = null, msg = 'success')=> {
  ctx.body = {
    code: 200,
    data: res,
    msg
  }
  ctx.status = 200
}
// 抛出异常
exports.throw = _throw