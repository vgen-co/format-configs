import js from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import { importX } from 'eslint-plugin-import-x';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import unicorn from 'eslint-plugin-unicorn';
import zodX from 'eslint-plugin-zod-x';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config([
    js.configs.recommended,
    zodX.configs.recommended,
    importX.flatConfigs.recommended,
    importX.flatConfigs.typescript,
    {
        files: ['**/*.{ts,tsx}'],
        extends: [tseslint.configs.strictTypeChecked],
        rules: {
            '@typescript-eslint/restrict-template-expressions': [
                'error',
                {
                    allowBoolean: true,
                    allowNumber: true,
                },
            ],

            '@typescript-eslint/consistent-type-imports': 'error',
        },
    },
    {
        files: ['**/*.{js,jsx,ts,tsx}'],
        plugins: {
            '@stylistic': stylistic,
            'simple-import-sort': simpleImportSort,
            unicorn,
        },
        rules: {
            camelcase: 'error',

            // We allow `== null` checks to allow both `null` and `undefined`.
            eqeqeq: ['error', 'always', { null: 'ignore' }],

            'no-array-constructor': 'error',
            'no-multi-assign': 'error',
            'no-nested-ternary': 'error',
            'prefer-const': 'error',
            'require-await': 'error',

            'simple-import-sort/imports': 'error',
            'simple-import-sort/exports': 'error',

            'import-x/no-named-as-default-member': 'off',
            'import-x/no-self-import': 'error',
            'import-x/no-useless-path-segments': 'error',
            'import-x/newline-after-import': 'error',

            // While this would be nice to include, it's computationally heavy/slow
            // Could use `npx dpdm [...]` instead.
            // 'import-x/no-cycle': 'error',

            // TODO: use more from https://github.com/sindresorhus/eslint-plugin-unicorn as desired
            'unicorn/prefer-node-protocol': 'error',

            '@stylistic/comma-spacing': 'error',
            '@stylistic/function-call-spacing': 'error',
            '@stylistic/new-parens': 'error',
            '@stylistic/no-mixed-spaces-and-tabs': 'error',
            '@stylistic/no-trailing-spaces': 'error',
            '@stylistic/no-whitespace-before-property': 'error',
            '@stylistic/quote-props': ['error', 'as-needed', { keywords: false, unnecessary: true, numbers: true }],
            '@stylistic/semi': 'error',
            '@stylistic/space-before-blocks': 'error',
            '@stylistic/space-before-function-paren': [
                'error',
                { anonymous: 'always', named: 'never', asyncArrow: 'always' },
            ],
            '@stylistic/spaced-comment': ['error', 'always'],
        },
    },
    {
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
            },
            globals: {
                ...globals.node,
            },
        },
    },
    {
        ignores: [
            'eslint.config.mjs',
            'eslint.config.mts',
            '.prettierrc.js',
            'coverage',
            'dist',
            'node_modules',
            '.cache',
        ],
    },
]);
