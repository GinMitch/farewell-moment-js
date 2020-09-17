module.exports = {
    extends: [
        'airbnb',
        'plugin:@typescript-eslint/recommended',
    ],
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
        'prettier',
    ],
    settings: {
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
            typescript: {},
        },
    },
    rules: {
        '@typescript-eslint/indent': ['warn', 4, { VariableDeclarator: 'first' }],
        '@typescript-eslint/no-explicit-any': 'off',
        'array-bracket-spacing': ['error', 'never'],
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': [2, { devDependencies: ['**/test.tsx', '**/test.ts'] }],
        'indent': ['warn', 4, { VariableDeclarator: 'first' }],
        'no-prototype-builtins': 'off',
        'no-underscore-dangle': 'off',
        'no-use-before-define': 'off',
        'object-curly-newline': 'off',
        'object-curly-spacing': ['error', 'always'],
        'quote-props': ['error', 'consistent'],
        'quotes': ['error', 'single'],
        'react/jsx-closing-bracket-location': [1, {
            selfClosing: 'tag-aligned',
            nonEmpty: 'after-props',
        }],
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
        'react/jsx-first-prop-new-line': 'off',
        'react/jsx-indent': 'off',
        'react/jsx-indent-props': 'off',
        'react/jsx-one-expression-per-line': 'off',
        'react/no-unescaped-entities': 'off'
    },
};
