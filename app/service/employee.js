const Service = require('egg').Service
const { createAPI } = require('../util/request')

class EmployeeService extends Service {
  // 用户列表
  async findAll() {
    const result = await createAPI(this, '/listAll', 'get', {})
    return result.data.data
  }

  // 单个员工
  async findById(id) {
    const result = await createAPI(this, '/getById', 'post', {
      id
    });
    return result.data.data
  }

}

module.exports = EmployeeService