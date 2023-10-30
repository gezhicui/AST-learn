/**
 * @fileoverview 随便吧随便吧
 * @author test
 */
'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const requireIndex = require('requireindex');

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

// import all rules in lib/rules
module.exports.rules = requireIndex(__dirname + '/rules');
// module.exports.rules = {
//   rules: requireIndex(__dirname + '/rules'),
//   configs: {
//     recommended: {
//       plugins: ['zlint'],
//       rules: {
//         'zlint/no-var': ['error'],
//       },
//     },
//   },
// };
