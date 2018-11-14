'use strict';
// DataLoader使用可参考文章：https://www.jianshu.com/p/fbd1257116b0
const DataLoader = require('dataloader');
const _ = require('lodash');
/**
 * 增加、修改
 * 删除： 单删、多删
 * 查询： all、byId
 */

class EmployeeConnector {
  constructor(ctx) {
    this.ctx = ctx;
    this.loader = new DataLoader(this.fetch.bind(this));
    this.db = this.ctx.app.model.Employee;
  }
  async fetch(...ids) {
    const result = this.db.findAll({
      where: {
        id: {
          $in: ids
        }
      }
    });
    return result;
  }
  // 增
  async create(name, age, job, address, status) {
    const item = await this.db.create(_.pickBy({
      name,
      age,
      job,
      address,
      status
    }));
    return item.toJSON();
  }
  // 删：'1','1,2'
  async remove(ids) {
    ids = ids.split(',').filter(v => v);
    const count = await this.db.destroy({
      where: {
        id: {
          $in: ids
        }
      }
    });
    return {
      count
    };
  }
  // 改
  async update(id, name, age, job, address, status) {
    await this.db.update(_.pickBy({
      id,
      name,
      age,
      job,
      address,
      status
    }), {
      where: {
        id
      }
    });
    return this.loader.load(id);
  }
  // 查：多个
  async fetchList(params) {
    const page = params.page || 1;
    const limit = params.pageSize || 10;
    const pagination = {
      limit, // 取实例的个数
      offset: limit * (page - 1) // 跳过实例的个数
    };
    params = _.pickBy(params, v => !!v && _.isString(v)); // 过滤掉空条件、page、pageSize
    const result = await this.db.findAll({ ...pagination,
      where: params
    });
    return {
      list: result.map(v => v.toJSON())
    }
  }
  // 查：1个
  fetchById(id) {
    return this.loader.load(id);
  }
}
module.exports = EmployeeConnector