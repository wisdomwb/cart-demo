module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'semi': 'off',
    'comma-dangle': 'off',
    'space-before-function-paren': 'off',
    'arrow-parens': 'off',
    'arrow-body-style': 'off',
    'eol-last': 'off',
    'no-new': 'off'
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
