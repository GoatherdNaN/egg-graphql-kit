/**
 * Controller--负责解析用户的输入，处理后返回相应的结果
 * 框架推荐流程：
 *    1. 获取用户通过 HTTP 传递过来的请求参数。
 *    2. 校验、组装参数。
 *    3. 调用 Service 进行业务处理，必要时处理转换 Service 的返回结果，让它适应用户的需求。
 *    4. 通过 HTTP 将结果响应给用户。
 */
const _ = require('lodash');
const Controller = require('egg').Controller;
const getRules = (...needKeys) => _.pick({
  id: {
    type: 'int',
    required: true,
  },
  username: {
    type: 'string',
    required: true,
    max:15
  },
  password: {
    type: 'string',
    required: true,
    min:6,
    max:15,
  },
}, needKeys);
// 推荐写法！this上挂载了ctx、app、service、config、logger
class UserController extends Controller {
  async login() {
    const { ctx, service } = this;
    const createRule = getRules('username','password');
    // 校验参数
    ctx.validate(createRule);
    // 此处可组装参数
    const res = await service.user.login(ctx.request.body)
    ctx.helper.success(ctx, res);
  }

  async logout() {
    const { ctx } = this;
    ctx.helper.success(ctx,'看啥是啥');
  }

  async updatePwd() {
    const { ctx, service } = this;
    const { id: _id, password } = getRules('id', 'password');
    const createRule = { id: _id, oldPwd: password, newPwd: password };
    ctx.validate(createRule);
    await service.user.updatePwd(ctx.request.body)
    ctx.helper.success(ctx);
  }
}
module.exports = UserController;
