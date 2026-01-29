import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';
import nextTypescript from 'eslint-config-next/typescript';

const eslintConfig = [
  ...nextCoreWebVitals,
  ...nextTypescript,
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      'out/**',
      'build/**',
      'next-env.d.ts',
      '.turbo/**',
      'coverage/**',
    ],
  },
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      // Suppress React Compiler warnings about incompatible libraries
      // These are informational and don't indicate actual problems
      'react-hooks/incompatible-library': 'off',
    },
  },
];

export default eslintConfig;