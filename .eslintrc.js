module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    indent: ['error', 4, { 'SwitchCase': 1 }],
    'no-plusplus': ['error', {'allowForLoopAfterthoughts': true }],
    'no-param-reassign': ['error', { 'props': false }],
    'object-curly-newline': ['error', { 'ImportDeclaration': 'never' }]
  },
};
