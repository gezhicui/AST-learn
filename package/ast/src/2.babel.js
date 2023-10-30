const babel = require('@babel/core');
const types = require('@babel/types');
//const arrowFunctions = require('babel-plugin-transform-es2015-arrow-functions');

const arrowFunctions2 = {
  visitor: {
    // path就是访问的路径  我们可以通过path找到node
    ArrowFunctionExpression(path) {
      const { node } = path;
      console.log(node);
      node.type = 'FunctionExpression';
      // 老结点中的a+babel
      let body = node.body;
      //如果body不是一个块级语句(a=>{return b})的话 isXX用来判断某个AST语法树节点是不是某种类型
      if (!types.isBlockStatement(body)) {
        // https://babeljs.cn/docs/babel-types
        node.body = types.blockStatement([types.returnStatement(body)]);
      }
    },
  },
};
const code = 'const sum = ()=> a+b'; // js代码
const result = babel.transform(code, {
  plugins: [arrowFunctions2],
});
console.log('self plugin', result.code);
// const sum = function () {
//   return a + b;
// };
