module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    commonjs: true
  },
  globals: {
    __DEV__: true,
    __WECHAT__: true,
    __ALIPAY__: true,
    App: true,
    Page: true,
    Component: true,
    Behavior: true,
    wx: true,
    getApp: true
  },
  plugins: [],
  extends: 'eslint:recommended',
  rules: {
    'comma-dangle': [1, 'never'],
    eqeqeq: 1,
    indent: [1, 2],
    'generator-star-spacing': 0,
    'no-console': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 0 : 1,
    'no-multiple-empty-lines': [1, { max: 2 }],
    'no-multi-spaces': 1,
    'no-unused-vars': 1,
    semi: [1, 'never'],
    'space-before-function-paren': [
      1,
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always'
      }
    ],
    'spaced-comment': 1,
  }
}
