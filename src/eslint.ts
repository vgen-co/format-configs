import eslint from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import zodX from 'eslint-plugin-zod-x';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config([
    eslint.configs.recommended,
    zodX.configs.recommended,
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
        plugins: {
            '@stylistic': stylistic,
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
        plugins: {
            'simple-import-sort': simpleImportSort,
        },
        rules: {
            'simple-import-sort/imports': 'error',
            'simple-import-sort/exports': 'error',
        },
    },
    {
        languageOptions: {
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
        ignores: ['eslint.config.mjs', 'eslint.config.mts', 'coverage', 'dist', 'node_modules', '.cache'],
    },
]);
