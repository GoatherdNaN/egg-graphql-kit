const { GraphQLScalarType } = require('graphql');
const moment = require('moment');
const { Kind } = require('graphql/language');

module.exports = new GraphQLScalarType({
  name: 'Date',
  description: 'Date custom scalar type',
  parseValue(value) {
    return new Date(value); // 客户端发过来的值处理
  },
  serialize(value) {
    return value.getTime() + 115200000; // 值处理（此时是时区转换）后发往客户端
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      return parseInt(ast.value, 10); // ast value is always in string format
    }
    return null;
  },
});
