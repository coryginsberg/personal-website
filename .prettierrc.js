/**
 * Copyright (c) 2023 Cory Ginsberg
 * MIT License
 */

'use strict';

module.exports = {
  singleQuote: true,
  trailingComma: 'all',
  bracketSpacing: false,
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
};
