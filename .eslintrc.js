module.exports = {
  root: true,
  parser:  '@typescript-eslint/parser',
  parserOptions:  {
    project: './tsconfig.json'
  },
  extends:  [
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  plugins: ["@typescript-eslint"],
  rules: {
    "@typescript-eslint/explicit-function-return-type": "off"
  }
};
