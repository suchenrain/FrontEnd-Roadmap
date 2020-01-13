const autuprefixer = require('autoprefixer');
const atImport = require('postcss-import')
const cssnano = require('cssnano')
const cssnext = require('postcss-cssnext')
const postcssPresetEnv = require('postcss-preset-env')
const precss =require('precss')

module.exports = {
    plugins: [
        // atImport,
        precss,
        // cssnext,
        // postcssPresetEnv({ stage: 0 }),
        //  autuprefixer(),
        // cssnano
    ]
}