/**
 * @fileoverview 项目中不能有var
 * @author test
 */
'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require('../../../lib/rules/no-var'),
  RuleTester = require('eslint').RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester({
  parserOptions: { ecmaVersion: 'latest' },
});
ruleTester.run('no-var', rule, {
  valid: [
    // give me some code that won't trigger a warning
    { code: 'let a = 1' },
  ],

  invalid: [
    {
      code: 'var a = 1',
      errors: [{ message: '项目中不能有var' }],
      output: 'let a = 1',
    },
  ],
});
