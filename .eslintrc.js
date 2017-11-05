module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  extends: [
    'eslint:recommended',
    'plugin:ember-suave/recommended'
  ],
  env: {
    browser: true,
    es6: true
  },
  rules: {
    'arrow-parens': ['error', 'as-needed'],
    // Destructuring is not supported in node 4.8.0
    'ember-suave/prefer-destructuring': 'off',
    'operator-linebreak': ['error', 'before', { 'overrides': { '=': 'ignore'} } ],
    'indent': ['error', 2, {
      "CallExpression": { 'arguments': 'first' },
      'FunctionDeclaration': { 'parameters': 'first' },
      'FunctionExpression': { 'parameters': 'first' }
    }]
  }
};
