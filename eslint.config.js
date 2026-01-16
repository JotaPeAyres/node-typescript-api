const tslint = require('typescript-eslint')
const js = require("@eslint/js")

module.exports = [
    js.configs.recommended,
    ...tslint.configs.recommended
]