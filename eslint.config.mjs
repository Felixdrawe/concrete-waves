import { FlatCompat } from '@eslint/eslintrc';
import eslintPluginJsxA11y from 'eslint-plugin-jsx-a11y';
import eslintPluginReact from 'eslint-plugin-react';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

const compat = new FlatCompat();

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    plugins: {
      'simple-import-sort': simpleImportSort,
      react: eslintPluginReact,
      'jsx-a11y': eslintPluginJsxA11y,
    },
    rules: {
      // 🔥 Import Sorting
      'simple-import-sort/imports': [
        'error',
        { groups: [['^\\u0000', '^@?\\w', '^[^.]', '^\\.']] },
      ],
      'simple-import-sort/exports': 'error',

      // 🔥 Best Practices
      'no-console': 'warn',
      // 'no-unused-vars': 'error',
      'react/jsx-boolean-value': ['error', 'never'],
      'react/jsx-curly-spacing': ['error', { when: 'never', children: true }],
      'react/self-closing-comp': 'error',

      // 🔥 Accessibility (a11y)
      'jsx-a11y/alt-text': 'error',
      'jsx-a11y/anchor-is-valid': 'warn',
      'jsx-a11y/no-autofocus': 'warn',

      // 🔥 Performance & Optimization
      'react/no-array-index-key': 'warn',
      'react/jsx-key': 'error',
    },
    languageOptions: {
      sourceType: 'module',
      ecmaVersion: 'latest',
    },
  },
];

export default eslintConfig;
