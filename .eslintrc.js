module.exports = {
  parser: 'babel-eslint',
  root: true,
  extends: [
    'airbnb',
    'plugin:prettier/recommended',
    'prettier/react',
    'plugin:jsdoc/recommended',
    'plugin:jest/recommended'
  ],
  env: {
    jest: true,
    browser: true
  },
  rules: {
    'prettier/prettier': ['error', {}, {
      usePrettierrc: true,
      fileInfoOptions: {
        withNodeModules: true
      }
    }],
    'import/no-extraneous-dependencies': 'warn',
    // 'operator-linebreak': ['error', 'before', {
    //   overrides: {
    //     '&&': 'ignore' // Used for conditional render in React components
    //   }
    // }],
    'jsdoc/require-jsdoc': 'off',
    'import/order': ['error', {
      groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
      'newlines-between': 'always-and-inside-groups'
    }]
  }
}
