import { createRequire } from 'module'

const require = createRequire(import.meta.url)

const nextCore = require('eslint-config-next/core-web-vitals')
const nextTs = require('eslint-config-next/typescript')

/** @type {import('eslint').Linter.Config[]} */
const config = [
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      'out/**',
      'build/**',
      'next-env.d.ts',
      'public/**',
      'tailwind.config.js',
      'postcss.config.js',
    ],
  },
  ...nextCore,
  ...nextTs,
  {
    rules: {
      'import/no-anonymous-default-export': 'off',
      'react-hooks/set-state-in-effect': 'off',
      'react-hooks/purity': 'off',
      'react-hooks/preserve-manual-memoization': 'off',
      '@typescript-eslint/no-require-imports': 'off',
    },
  },
]

export default config
