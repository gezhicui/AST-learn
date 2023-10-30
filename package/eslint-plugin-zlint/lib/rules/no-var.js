/* eslint-disable no-unused-vars */
/* eslint-disable eslint-plugin/require-meta-type */
/* eslint-disable eslint-plugin/prefer-message-ids */
/**
 * @fileoverview 项目中不能有var
 * @author test
 */
'use strict';

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: 'suggestion', // `problem` 必须修复的问题, `suggestion`可以修复的建议, or `layout`检查代码格式
    docs: {
      description: '项目中不能有var',
      recommended: false,
      url: null, // URL to the documentation page for this rule
    },
    fixable: 'code', // Or `code` or `whitespace` 它会根据规则选项对代码进行自动修复
    schema: [],
  },

  create(context) {
    // 用这个来修复代码
    const soueceCode = context.sourceCode;
    return {
      // visitor functions for different types of nodes
      VariableDeclaration(node) {
        if (node.kind === 'var') {
          context.report({
            node,
            message: '项目中不能有var',
            fix(fixer) {
              const varToken = soueceCode.getFirstToken(node, { filter: t => t.value === 'var' });
              return fixer.replaceText(varToken, 'let');
            },
          });
        }
      },
    };
  },
};
