/*
 * @Author: Edlan
 * @Date: 2018-11-06 14:56:57
 * @Description: 用户表
 */
module.exports = (app) => {
  const {
    UUID,
    UUIDV1,
    STRING
  } = app.Sequelize;
  const User = app.model.define('user', {
    id: {
      type: UUID,
      primaryKey: true,
      defaultValue: UUIDV1
    },
    username: STRING,
    password: STRING,
  }, {
    tableName: 'user', // 定义表的名称
    timestamps: false,
  });

  return User;
};