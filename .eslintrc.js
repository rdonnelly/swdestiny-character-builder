module.exports = {
  env: {
    browser: true
  },
  extends: [
    'airbnb-base',
    'plugin:react/recommended'
  ],
  globals: {
    document: true,
    window: true,
  },
  parser: 'babel-eslint',
  plugins: [
    'react',
    'jsx-a11y',
    'import'
  ],
  rules: {
    'class-methods-use-this': ['error', { 'exceptMethods': ['controller', 'link'] }],
    'no-param-reassign': ['error', { 'props': false }],
  },
};
