// @ts-check

/** @type {import("@serverless-guru/prettier-plugin-import-order").PrettierConfig} */

module.exports = {
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  bracketSpacing: true,
  jsxBracketSameLine: true,
  importOrder: [
    '^@mantine/(.*)$',
    '<THIRD_PARTY_MODULES>',
    '^[./]',
    '^components/(.*)$',
    '^sections/(.*)$',
    '^pages/(.*)$',
    '^@styles/(.*)$',
    '^@svg/(.*)$',
    '^@public/(.*)$',
  ],
  importOrderSeparation: true,
  importOrderSortIndividualImports: true,
  importOrderTypeImportsToTop: true,
  plugins: ['@serverless-guru/prettier-plugin-import-order'],
  printWidth: 80,
  tabWidth: 2,
  bracketSameLine: true,
  arrowParens: 'avoid',
};
