const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'),
);

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 2018, sourceType: 'module' },
  extends: [
    'airbnb-base',
    'prettier',
    'prettier/react',
    'plugin:meteor/recommended',
    'plugin:import/typescript',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['prettier', '@typescript-eslint', 'meteor'],
  env: { es6: true, node: true, browser: true },
  rules: {
    'prettier/prettier': ['error', prettierOptions],
    'import/extensions': 0,
    'no-underscore-dangle': 0,
    'import/no-unresolved': [2, { ignore: ['^meteor/'] }],
  },
};
