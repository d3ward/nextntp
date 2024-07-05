module.exports = {
    env: {
        browser: true,
        es6: true
    },
    extends: ['eslint:recommended', 'prettier'],
    plugins: ['prettier'],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly'
    },
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module'
    },
    rules: {
        'no-inner-declarations': 'off',
        'prettier/prettier': 'error',
        'no-unused-vars': 0,
        'no-undef': 0
    }
}
