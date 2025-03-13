import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import pluginImport from 'eslint-plugin-import';
import pluginA11y from 'eslint-plugin-jsx-a11y';
import pluginTs from '@typescript-eslint/eslint-plugin';
import parserTs from '@typescript-eslint/parser';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: parserTs,
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
      },
    },
    plugins: {
      '@typescript-eslint': pluginTs,
      import: pluginImport,
      'jsx-a11y': pluginA11y,
    },
    rules: {
      '@typescript-eslint/no-unnecessary-condition': 'error',
      'import/order': [
        'error',
        {
          groups: [
            ['builtin', 'external'],
            'internal',
            ['parent', 'sibling', 'index'],
          ],
          'newlines-between': 'always',
        },
      ],
      'jsx-a11y/anchor-is-valid': 'warn',
    },
  },
];

export default eslintConfig;
