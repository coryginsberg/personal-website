// @ts-check

/** @type {import("@trivago/prettier-plugin-sort-imports").PrettierConfig} */

module.exports = {
  semi: true,
  singleQuote: true,
  semi: true,
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
