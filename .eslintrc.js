/**
 * Copyright (c) 2023 Cory Ginsberg
 * MIT License
 */

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'fbjs',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'next',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {},
  settings: {
    'import/resolver': {
      typescript: true,
      node: {
        paths: ['./'],
      },
    },
  },
};
