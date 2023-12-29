// @ts-check

/** @type {import("@trivago/prettier-plugin-sort-imports").PrettierConfig} */

module.exports = {
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
    '^public/(.*)$',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: ['@trivago/prettier-plugin-sort-imports'],
  printWidth: 80,
  tabWidth: 2,
  bracketSameLine: true,
  arrowParens: 'avoid',
};
