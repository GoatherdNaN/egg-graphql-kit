'use strict'

module.exports = {
  Query: {
    getEmployeeById(root, {id}, ctx) {
      return ctx.connector.employee.fetchById(id)
    },
    getEmployees(root, {name, status, page, pageSize}, ctx) {
      return ctx.connector.employee.fetchList({name, status, page, pageSize})
    }
  },
  Mutation: {
    addEmployee(root,{
      name,
      age,
      job,
      address,
      status
    }, ctx) {
      return ctx.connector.employee.create(name,age,job,address,status);
    },
    updateEmployee(root,{
      id,
      name,
      age,
      job,
      address,
      status
    }, ctx) {
      return ctx.connector.employee.update(id, name,age,job,address,status);
    },
    removeEmployee(root,{ids}, ctx) {
      return ctx.connector.employee.remove(ids);
    },
  }
}