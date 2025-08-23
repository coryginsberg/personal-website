/**
 * Copyright (c) 2023 Cory Ginsberg
 * MIT License
 */

module.exports = {
  plugins: {
    'postcss-preset-mantine': {
      autoRem: true,
    },
    'postcss-simple-vars': {
      variables: {
        'mantine-breakpoint-sm': '922px',
        'mantine-breakpoint-md': '1440px',
        'mantine-breakpoint-lg': '1660px',
        'mantine-breakpoint-xl': '1920px',
      },
    },
  },
};
