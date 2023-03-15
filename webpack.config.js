const path = require('path');
const packageProperties = require("./package.json")

module.exports = {
    entry: './src/index.js',
    mode: "production",
    module: {
        rules: [
            {
                test: /\.tsx?$/i,
                exclude: /node_modules/,
                use: ['ts-loader']
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'utils.js',
        globalObject: "this",
        library: {
            name: packageProperties.name.split("/")[1],
            type: "umd"
        }
    },
    externals: {
        lodash: {
            commonjs: 'lodash',
            commonjs2: 'lodash',
            amd: 'lodash',
            root: '_',
        },
    },
};