const jwt = require('jsonwebtoken')
const { aesEncrypt } = require('../util/aes')
const Service = require('egg').Service

class UserService extends Service {
  // 查找用户
  async findUser(params) {
    const { ctx } = this
    const user = await this.ctx.model.User.findOne({
      where: params,
    });
    !user && ctx.helper.throw('no_user')
    return user
  }
  
  // 登录
  async login({username, password}) {
    const { ctx, service, config } = this
    const user = await service.user.findUser({username});
    user.password !== aesEncrypt(password) && ctx.helper.throw('pwd_error')
    const token = jwt.sign({uid: user.id}, config.jwt.jwtSecret, {
      expiresIn: config.jwt.jwtExpire
    });
    return { token }
  }

  // 修改密码
  async updatePwd({id, oldPwd, newPwd}) {
    const { ctx, service } = this
    const user = await service.user.findUser({id});
    const aesOldPwd = aesEncrypt(oldPwd);
    aesOldPwd !== user.password && ctx.helper.throw('pwd_error',{
      message: '新密码与旧密码不一致！'
    })
    const aesNewPwd = aesEncrypt(newPwd);
    await ctx.app.model.User.update({password: aesNewPwd}, {
      where: { id }
    });
  }
}

module.exports = UserService