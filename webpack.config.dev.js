const {merge} = require('webpack-merge')
const commonConfig = require('./webpack.config.common')

module.exports = merge(commonConfig, {
    mode: 'development',
    devtool: 'inline-source-map',
    // plugins: [new ESLintPlugin()],
    devServer: {
        port:5555,
        hot: true,
        open: true,
    }
})