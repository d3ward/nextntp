module.exports = {
    printWidth: 80,
    semi: false,
    singleQuote: true,
    tabWidth: 4,
    trailingComma: 'none',
    useTabs: false,
    overrides: [
        {
            files: '*.yml',
            options: {
                tabWidth: 2
            }
        },
        {
            files: '*.yaml',
            options: {
                tabWidth: 2
            }
        }
    ]
}
