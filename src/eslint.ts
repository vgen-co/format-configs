import eslint from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import tseslint from 'typescript-eslint';
import globals from 'globals';

export default tseslint.config([
    eslint.configs.recommended,
    {
        files: ['**/*.ts', '**/*.tsx'],
        extends: [tseslint.configs.strictTypeChecked],
        rules: {
            '@typescript-eslint/restrict-template-expressions': [
                'error',
                {
                    allowBoolean: true,
                    allowNumber: true,
                },
            ],
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
        ignores: ['eslint.config.mjs', 'coverage', 'dist', 'node_modules'],
    },
]);
