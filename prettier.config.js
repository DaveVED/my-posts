module.exports = {
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  trailingComma: 'es5',
  bracketSpacing: true,
  arrowParens: 'always',
  proseWrap: 'preserve',
  overrides: [
    {
      files: '*.mdx',
      options: {
        printWidth: 80,
        proseWrap: 'always',
      },
    },
  ],
};
