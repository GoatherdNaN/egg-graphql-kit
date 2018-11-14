/*
 * @Author: Edlan
 * @Date: 2018-11-08 14:00:41
 * @Description: 错误统一定义处
 */
const _error = {
  no_user: {
    status: 10000,
    message: '用户不存在'
  },
  pwd_error: {
    status: 10001,
    message: '密码错误'
  }
}

module.exports = (errorName, other={}) => {
  if(errorName in _error) {
    throw {..._error[errorName],...other};
  }
  throw 'Internal Server Error'
}