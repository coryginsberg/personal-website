module.exports = [
  {
    ignores: ['.next/*', 'node_modules/*'],
    rules: {
      semi: 'error',
      'prefer-const': 'error',
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: {
      react: React,
    },
    settings: {
      'import/resolver': {
        // typescript: true,
        node: {
          moduleDirectory: ["node_modules", "app/"],
        },
      },
    },
  },
];