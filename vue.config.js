module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/cryptogene/'
        : '/',
    outputDir: 'docs'
}