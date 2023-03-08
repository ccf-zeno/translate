module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],
  rules: {
    'no-plusplus': 0,
    'no-restricted-syntax': 0,
    'no-shadow': 1,
    '@typescript-eslint/no-shadow': 0,
    'react/no-children-prop': 1,
  },
}