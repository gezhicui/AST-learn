let esprima = require('esprima'); //把JS源代码转成AST语法树
let estraverse = require('estraverse'); ///遍历语法树,修改树上的节点
let escodegen = require('escodegen'); //把AST语法树重新转换成代码
let code = `function ast(){}`;
let ast = esprima.parse(code);
console.log(ast); // 可在astexplore中查看
let indent = 0;
const padding = () => ' '.repeat(indent);
//访问模式就是遍历节点的时候会有两个过程1个是进入一个是离开
estraverse.traverse(ast, {
  enter(node) {
    console.log(padding() + node.type + '进入');
    // 改名
    if (node.type === 'FunctionDeclaration') {
      node.id.name = 'newAst';
    }
    indent += 2;
  },
  leave(node) {
    indent -= 2;
    console.log(padding() + node.type + '离开');
  },
});

console.log(escodegen.generate(ast));
