module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', '@vue/airbnb'],
  rules: {
    'no-param-reassign': [2, { props: true, ignorePropertyModificationsFor: ['state'] }],
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
