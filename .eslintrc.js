module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx", "*.vue"],
      parserOptions: {
        parser: "typescript-eslint-parser"
      },
      plugins: ['vue', 'prettier', 'typescript']
    }
  ],
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    'plugin:prettier/recommended'
  ],
  plugins: [
    'prettier'
  ],
  rules: {
    'no-console': 0,
    'no-unused-vars': 0,
    'no-useless-constructor': 0
  }
}
