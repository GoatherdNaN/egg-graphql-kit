/*
 * @Author: Edlan
 * @Date: 2018-11-01 14:30:57
 * @Doc： https://github.com/demopark/sequelize-docs-Zh-CN/blob/master/Readme.md
 */
module.exports = (app) => {
  const {
    UUID,
    UUIDV1,
    STRING,
    INTEGER,
    ENUM,
    // DATE
  } = app.Sequelize;
  const Employee = app.model.define('employee', {
    id: {
      type: UUID,
      primaryKey: true,
      defaultValue: UUIDV1
    },
    name: STRING(30),
    age: INTEGER,
    job: STRING(32),
    address: STRING(200),
    status: {
      type: ENUM,
      values: ['1', '2']
    },
  }, {
    tableName: 'employee', // 定义表的名称
  });

  return Employee;
};