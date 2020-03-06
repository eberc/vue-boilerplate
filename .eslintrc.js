module.exports = {
  settings: {
    "import/resolver": {
      alias: {
        map: [
          ["@","src"],
          ["@assets", "src/assets/"],
          ["@components", "src/components"],
          ["@sections", "src/sections"],
          ["@styles", "src/assets/styles"]
        ],
        extensions: [".vue", ".scss", ".js"]
      }
    }
  },
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'import/no-unresolved': 'off',
    'max-len': 'off',
    'no-unused-vars': 'off',
    'linebreak-style': [
      0,
      'error',
      'windows'
    ],
    'semi': [
      'error',
      'never'
    ]
  },
};
